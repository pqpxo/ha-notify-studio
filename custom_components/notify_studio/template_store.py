# version 15
"""Persistent, user-managed notification templates for Notify Studio."""

from __future__ import annotations

from collections.abc import Mapping
from copy import deepcopy
from datetime import UTC, datetime
from typing import Any
from uuid import uuid4

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import (
    DATA_TEMPLATE_STORE,
    DOMAIN,
    TEMPLATE_STORE_KEY,
    TEMPLATE_STORE_VERSION,
)


class TemplateValidationError(ValueError):
    """Raised when a template request is invalid."""


def _now() -> str:
    """Return an ISO-8601 UTC timestamp."""
    return datetime.now(UTC).isoformat()


def _require_string(value: Any, field: str, *, allow_empty: bool = False) -> str:
    """Require a string template field."""
    if not isinstance(value, str):
        raise TemplateValidationError(f"{field} must be a string.")
    if not allow_empty and not value.strip():
        raise TemplateValidationError(f"{field} cannot be empty.")
    return value.strip() if not allow_empty else value


def _normalise_draft(value: Any) -> dict[str, Any]:
    """Validate the JSON-serialisable part of a stored composer draft."""
    if not isinstance(value, Mapping):
        raise TemplateValidationError("template.draft must be an object.")

    payload = value.get("payload")
    if not isinstance(payload, Mapping):
        raise TemplateValidationError("template.draft.payload must be an object.")
    if not isinstance(payload.get("message"), str):
        raise TemplateValidationError("template.draft.payload.message must be a string.")

    action_handlers = value.get("action_handlers", [])
    if not isinstance(action_handlers, list) or not all(
        isinstance(item, Mapping) for item in action_handlers
    ):
        raise TemplateValidationError("template.draft.action_handlers must be a list of objects.")

    target_platform = value.get("target_platform")
    if target_platform is not None and target_platform not in {
        "android",
        "ios",
        "other",
        "unknown",
    }:
        raise TemplateValidationError("template.draft.target_platform is not recognised.")

    return {
        "payload": deepcopy(dict(payload)),
        "action_handlers": [deepcopy(dict(item)) for item in action_handlers],
        **({"target_platform": target_platform} if target_platform else {}),
    }


class NotifyStudioTemplateStore:
    """Versioned Home Assistant storage wrapper for notification templates."""

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialise the storage helper."""
        self._store: Store[dict[str, Any]] = Store(
            hass,
            TEMPLATE_STORE_VERSION,
            TEMPLATE_STORE_KEY,
        )

    async def _async_data(self) -> dict[str, Any]:
        """Load stored template data, repairing an empty or old structure."""
        data = await self._store.async_load()
        if not isinstance(data, Mapping):
            return {"templates": []}
        templates = data.get("templates")
        if not isinstance(templates, list):
            return {"templates": []}
        return {"templates": [item for item in templates if isinstance(item, Mapping)]}

    async def async_list(self) -> list[dict[str, Any]]:
        """Return templates in most-recently-updated order."""
        data = await self._async_data()
        templates = [deepcopy(dict(item)) for item in data["templates"]]
        return sorted(
            templates,
            key=lambda item: str(item.get("updated_at", "")),
            reverse=True,
        )

    async def async_save(self, raw_template: Mapping[str, Any]) -> dict[str, Any]:
        """Create or update a single named notification template."""
        if not isinstance(raw_template, Mapping):
            raise TemplateValidationError("template must be an object.")

        template_id = raw_template.get("id")
        if template_id is not None:
            template_id = _require_string(template_id, "template.id")

        name = _require_string(raw_template.get("name"), "template.name")
        if len(name) > 100:
            raise TemplateValidationError("template.name must be 100 characters or fewer.")

        description = raw_template.get("description", "")
        description = _require_string(description, "template.description", allow_empty=True)
        if len(description) > 500:
            raise TemplateValidationError("template.description must be 500 characters or fewer.")

        draft = _normalise_draft(raw_template.get("draft"))
        data = await self._async_data()
        templates = [dict(item) for item in data["templates"]]
        timestamp = _now()

        existing_index = next(
            (
                index
                for index, item in enumerate(templates)
                if template_id is not None and item.get("id") == template_id
            ),
            None,
        )

        if existing_index is None:
            record = {
                "id": str(uuid4()),
                "name": name,
                "description": description,
                "draft": draft,
                "created_at": timestamp,
                "updated_at": timestamp,
            }
            templates.append(record)
        else:
            previous = templates[existing_index]
            record = {
                "id": str(previous["id"]),
                "name": name,
                "description": description,
                "draft": draft,
                "created_at": previous.get("created_at", timestamp),
                "updated_at": timestamp,
            }
            templates[existing_index] = record

        await self._store.async_save({"templates": templates})
        return deepcopy(record)

    async def async_delete(self, template_id: str) -> None:
        """Delete one stored template by ID."""
        template_id = _require_string(template_id, "template_id")
        data = await self._async_data()
        templates = [dict(item) for item in data["templates"]]
        retained = [item for item in templates if item.get("id") != template_id]
        if len(retained) == len(templates):
            raise TemplateValidationError("The selected template no longer exists.")
        await self._store.async_save({"templates": retained})


def async_get_template_store(hass: HomeAssistant) -> NotifyStudioTemplateStore:
    """Return the one store instance held in Home Assistant runtime data."""
    domain_data = hass.data.setdefault(DOMAIN, {})
    store = domain_data.get(DATA_TEMPLATE_STORE)
    if store is None:
        store = NotifyStudioTemplateStore(hass)
        domain_data[DATA_TEMPLATE_STORE] = store
    return store
