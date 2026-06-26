# version 26
"""Persist validated Notify Studio automations in Home Assistant's UI-managed file."""

from __future__ import annotations

import asyncio
import os
from collections.abc import Mapping, Sequence
from typing import Any

import voluptuous as vol

from homeassistant.components.automation.config import async_validate_config_item
from homeassistant.config import AUTOMATION_CONFIG_PATH
from homeassistant.const import CONF_ID, SERVICE_RELOAD
from homeassistant.core import Context, HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.util.file import write_utf8_file_atomic
from homeassistant.util.yaml import dump, load_yaml

from .const import DATA_AUTOMATION_WRITE_LOCK, DOMAIN


class AutomationSaveError(HomeAssistantError):
    """Raised when a generated automation cannot be saved safely."""


def _read_automations(path: str) -> list[dict[str, Any]]:
    """Read the UI-managed automation list from disk."""
    if not os.path.isfile(path):
        return []

    loaded = load_yaml(path)
    if loaded is None:
        return []
    if not isinstance(loaded, list) or not all(isinstance(item, dict) for item in loaded):
        raise AutomationSaveError(
            "automations.yaml is not a list of automations. Notify Studio only saves to Home Assistant's standard UI-managed automation file."
        )
    return [dict(item) for item in loaded]


def _write_automations(path: str, automations: list[dict[str, Any]]) -> None:
    """Atomically write the UI-managed automation file."""
    try:
        contents = dump(automations)
        write_utf8_file_atomic(path, contents)
    except OSError as err:
        raise AutomationSaveError(f"Unable to write automations.yaml: {err}") from err


def _ordered_automation_config(
    automation_id: str,
    config: Mapping[str, Any],
) -> dict[str, Any]:
    """Mirror Home Assistant's editor ordering for a created automation."""
    ordered: dict[str, Any] = {CONF_ID: automation_id}
    for key in (
        "alias",
        "description",
        "triggers",
        "trigger",
        "conditions",
        "condition",
        "actions",
        "action",
    ):
        if key in config:
            ordered[key] = config[key]
    ordered.update(config)
    return ordered


def _get_write_lock(hass: HomeAssistant) -> asyncio.Lock:
    """Get a process-local lock for atomic automation-file updates."""
    data = hass.data.setdefault(DOMAIN, {})
    lock = data.get(DATA_AUTOMATION_WRITE_LOCK)
    if isinstance(lock, asyncio.Lock):
        return lock

    lock = asyncio.Lock()
    data[DATA_AUTOMATION_WRITE_LOCK] = lock
    return lock


async def async_save_ui_automations(
    hass: HomeAssistant,
    automations: Sequence[Mapping[str, Any]],
    *,
    context: Context | None = None,
) -> list[str]:
    """Validate, atomically save, and reload generated UI-managed automations.

    The Home Assistant browser editor uses the REST configuration view to write
    ``automations.yaml``. Custom panels are not guaranteed to receive the
    frontend auth helper required by that private browser API, so Notify Studio
    performs the same validated, atomic server-side operation through its
    administrator-only WebSocket command instead.
    """
    if not automations:
        raise AutomationSaveError("No automations were supplied to save.")

    prepared: list[tuple[str, dict[str, Any]]] = []
    ids_seen: set[str] = set()

    for item in automations:
        automation_id = item.get("automation_id")
        config = item.get("config")
        if not isinstance(automation_id, str) or not automation_id.strip():
            raise AutomationSaveError("Each automation requires a non-empty automation_id.")
        if not isinstance(config, Mapping):
            raise AutomationSaveError("Each automation requires a configuration object.")
        if automation_id in ids_seen:
            raise AutomationSaveError("Generated automation IDs must be unique.")

        try:
            await async_validate_config_item(hass, automation_id, dict(config))
        except (vol.Invalid, HomeAssistantError) as err:
            raise AutomationSaveError(str(err)) from err

        ids_seen.add(automation_id)
        prepared.append((automation_id, _ordered_automation_config(automation_id, config)))

    path = hass.config.path(AUTOMATION_CONFIG_PATH)
    lock = _get_write_lock(hass)

    async with lock:
        current = await hass.async_add_executor_job(_read_automations, path)
        existing_ids = {
            str(item[CONF_ID])
            for item in current
            if isinstance(item.get(CONF_ID), str)
        }
        duplicate_ids = ids_seen & existing_ids
        if duplicate_ids:
            raise AutomationSaveError(
                "An automation with this generated ID already exists. Generate a new automation and try again."
            )

        current.extend(config for _, config in prepared)
        await hass.async_add_executor_job(_write_automations, path, current)

        try:
            await hass.services.async_call(
                "automation",
                SERVICE_RELOAD,
                blocking=True,
                context=context,
            )
        except HomeAssistantError as err:
            raise AutomationSaveError(
                "The automation was written to automations.yaml but Home Assistant could not reload automations: "
                f"{err}"
            ) from err

    return [automation_id for automation_id, _ in prepared]
