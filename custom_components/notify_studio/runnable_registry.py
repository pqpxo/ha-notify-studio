# version 16
"""Runtime automation and script helpers used by Notify Studio."""

from __future__ import annotations

from typing import Any

from homeassistant.core import HomeAssistant, State
from homeassistant.util import slugify


def _last_triggered(state: State) -> str | None:
    """Return a JSON-safe last-triggered value when Home Assistant exposes one."""
    value = state.attributes.get("last_triggered")
    if value is None:
        return None
    if hasattr(value, "isoformat"):
        return value.isoformat()
    return str(value)


def _as_summary(state: State, kind: str) -> dict[str, Any]:
    """Create a UI-friendly runtime summary from a Home Assistant state."""
    if kind == "automation":
        enabled = state.state == "on"
        status = "enabled" if enabled else "disabled"
    else:
        enabled = None
        status = "running" if state.state == "on" else "ready"

    return {
        "entity_id": state.entity_id,
        "name": state.name or state.entity_id,
        "kind": kind,
        "state": state.state,
        "enabled": enabled,
        "status": status,
        "id": state.attributes.get("id"),
        "last_triggered": _last_triggered(state),
        "mode": state.attributes.get("mode"),
        "current": state.attributes.get("current", 0),
        "supports_run": True,
    }


def async_list_runnables(hass: HomeAssistant) -> list[dict[str, Any]]:
    """Return all automation and script entities in one consistently sorted list."""
    runnables = [
        _as_summary(state, "automation")
        for state in hass.states.async_all("automation")
    ]
    runnables.extend(
        _as_summary(state, "script") for state in hass.states.async_all("script")
    )
    return sorted(
        runnables,
        key=lambda item: (str(item["kind"]), str(item["name"]).casefold()),
    )


def async_runnable_for_audit(
    hass: HomeAssistant,
    *,
    source: str,
    item_id: str,
    name: str,
) -> dict[str, Any] | None:
    """Best-effort runtime match for a merged YAML audit result."""
    if source == "automation":
        for state in hass.states.async_all("automation"):
            if str(state.attributes.get("id", "")) == item_id:
                return _as_summary(state, "automation")
        candidate = f"automation.{slugify(name)}"
        state = hass.states.get(candidate)
        if state is not None:
            return _as_summary(state, "automation")
        return None

    if source == "script":
        for candidate in (f"script.{slugify(item_id)}", f"script.{slugify(name)}"):
            state = hass.states.get(candidate)
            if state is not None:
                return _as_summary(state, "script")

    return None
