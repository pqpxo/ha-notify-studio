# version 5
"""Admin-only WebSocket API for Notify Studio."""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

import voluptuous as vol

from homeassistant.components import websocket_api
from homeassistant.core import Context, HomeAssistant
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.template import Template

from .const import (
    VERSION,
    WS_DELETE_TEMPLATE,
    WS_GENERATE_YAML,
    WS_INFO,
    WS_LIST_AUTOMATIONS,
    WS_LIST_NOTIFIERS,
    WS_LIST_RUNNABLES,
    WS_LIST_RECENT_PUSH_RUNNABLES,
    WS_LIST_TEMPLATES,
    WS_RENDER_PREVIEW,
    WS_RUN_RUNNABLE,
    WS_SAVE_TEMPLATE,
    WS_SCAN_NOTIFY_USAGE,
    WS_SEND_TEST,
    WS_TOGGLE_AUTOMATION,
    WS_VALIDATE_PAYLOAD,
)
from .notification_schema import (
    PayloadValidationError,
    generate_action_yaml,
    validate_payload,
)
from .notifier_registry import async_list_notifiers, async_resolve_target
from .notify_scanner import async_list_recent_push_runnables, async_scan_notify_usage
from .runnable_registry import async_list_runnables
from .template_store import (
    TemplateValidationError,
    async_get_template_store,
)


def async_register_commands(hass: HomeAssistant) -> None:
    """Register every Notify Studio WebSocket command exactly once."""
    websocket_api.async_register_command(hass, websocket_info)
    websocket_api.async_register_command(hass, websocket_list_notifiers)
    websocket_api.async_register_command(hass, websocket_list_automations)
    websocket_api.async_register_command(hass, websocket_list_runnables)
    websocket_api.async_register_command(hass, websocket_list_recent_push_runnables)
    websocket_api.async_register_command(hass, websocket_toggle_automation)
    websocket_api.async_register_command(hass, websocket_run_runnable)
    websocket_api.async_register_command(hass, websocket_scan_notify_usage)
    websocket_api.async_register_command(hass, websocket_render_preview)
    websocket_api.async_register_command(hass, websocket_validate_payload)
    websocket_api.async_register_command(hass, websocket_send_test)
    websocket_api.async_register_command(hass, websocket_generate_yaml)
    websocket_api.async_register_command(hass, websocket_list_templates)
    websocket_api.async_register_command(hass, websocket_save_template)
    websocket_api.async_register_command(hass, websocket_delete_template)


@websocket_api.websocket_command({vol.Required("type"): WS_INFO})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_info(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return basic integration state for the frontend."""
    notifiers = await async_list_notifiers(hass)
    templates = await async_get_template_store(hass).async_list()
    connection.send_result(
        msg["id"],
        {
            "version": VERSION,
            "has_notify_entities": bool(notifiers["entities"]),
            "mobile_app_services": len(notifiers["services"]),
            "template_count": len(templates),
        },
    )


@websocket_api.websocket_command({vol.Required("type"): WS_LIST_NOTIFIERS})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_list_notifiers(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return available legacy Companion mobile-app services and notify entities."""
    connection.send_result(msg["id"], await async_list_notifiers(hass))


@websocket_api.websocket_command({vol.Required("type"): WS_LIST_AUTOMATIONS})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_list_automations(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return automation entities for backwards compatibility with v0.1.1 clients."""
    automations = [
        item for item in async_list_runnables(hass) if item["kind"] == "automation"
    ]
    connection.send_result(msg["id"], automations)


@websocket_api.websocket_command({vol.Required("type"): WS_LIST_RUNNABLES})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_list_runnables(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return all visible automation and script runtime entities."""
    connection.send_result(msg["id"], async_list_runnables(hass))


@websocket_api.websocket_command({vol.Required("type"): WS_LIST_RECENT_PUSH_RUNNABLES})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_list_recent_push_runnables(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return recently triggered automation/script sources with notify actions."""
    try:
        connection.send_result(msg["id"], await async_list_recent_push_runnables(hass))
    except HomeAssistantError as err:
        connection.send_error(msg["id"], "recent_push_scan_failed", str(err))


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_TOGGLE_AUTOMATION,
        vol.Required("entity_id"): str,
        vol.Required("enabled"): bool,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_toggle_automation(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Enable or disable an automation entity at runtime."""
    entity_id = msg["entity_id"]
    if not entity_id.startswith("automation.") or hass.states.get(entity_id) is None:
        connection.send_error(msg["id"], "invalid_automation", "Unknown automation entity.")
        return

    service = "turn_on" if msg["enabled"] else "turn_off"
    try:
        await hass.services.async_call(
            "automation",
            service,
            {"entity_id": entity_id},
            blocking=True,
            context=Context(user_id=connection.user.id),
        )
    except HomeAssistantError as err:
        connection.send_error(msg["id"], "automation_toggle_failed", str(err))
        return

    state = hass.states.get(entity_id)
    connection.send_result(
        msg["id"],
        {"entity_id": entity_id, "state": state.state if state else None},
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_RUN_RUNNABLE,
        vol.Required("entity_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_run_runnable(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Queue a real automation or script execution after a panel confirmation."""
    entity_id = msg["entity_id"]
    state = hass.states.get(entity_id)
    if state is None or not entity_id.startswith(("automation.", "script.")):
        connection.send_error(msg["id"], "invalid_runnable", "Unknown automation or script entity.")
        return
    if entity_id.startswith("automation.") and state.state != "on":
        connection.send_error(
            msg["id"],
            "automation_disabled",
            "Enable this automation before running a test.",
        )
        return

    domain = "automation" if entity_id.startswith("automation.") else "script"
    service = "trigger" if domain == "automation" else "turn_on"
    data: dict[str, Any] = {"entity_id": entity_id}
    if domain == "automation":
        # Normal conditions still apply. The panel intentionally does not offer
        # a bypass, because Run test should not circumvent user safeguards.
        data["skip_condition"] = False

    try:
        await hass.services.async_call(
            domain,
            service,
            data,
            blocking=False,
            context=Context(user_id=connection.user.id),
        )
    except HomeAssistantError as err:
        connection.send_error(msg["id"], "run_failed", str(err))
        return

    connection.send_result(msg["id"], {"entity_id": entity_id, "queued": True})


@websocket_api.websocket_command({vol.Required("type"): WS_SCAN_NOTIFY_USAGE})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_scan_notify_usage(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Scan Home Assistant's merged YAML configuration for notify calls."""
    try:
        connection.send_result(msg["id"], await async_scan_notify_usage(hass))
    except HomeAssistantError as err:
        connection.send_error(msg["id"], "scan_failed", str(err))


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_RENDER_PREVIEW,
        vol.Required("payload"): dict,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_render_preview(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Render message and title Jinja templates without sending a notification."""
    payload = msg["payload"]
    rendered: dict[str, str] = {}
    errors: dict[str, str] = {}

    for field in ("message", "title"):
        value = payload.get(field)
        if not isinstance(value, str) or not value:
            continue
        try:
            rendered[field] = Template(value, hass).async_render(parse_result=False)
        except Exception as err:  # Template errors are user-facing preview feedback.
            errors[field] = str(err)

    connection.send_result(msg["id"], {"rendered": rendered, "errors": errors})


async def _async_validate_target_payload(
    hass: HomeAssistant,
    target_id: str,
    payload: Mapping[str, Any],
) -> tuple[dict[str, Any], dict[str, Any], list[str]]:
    """Resolve a target and validate a payload before sending or generating YAML."""
    target = await async_resolve_target(hass, target_id)
    if target is None:
        raise PayloadValidationError("The selected mobile-app target is no longer available.")
    normalized, warnings = validate_payload(target["platform"], payload)
    return target, normalized, warnings


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_VALIDATE_PAYLOAD,
        vol.Required("target_id"): str,
        vol.Required("payload"): dict,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_validate_payload(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Validate a payload against the selected target platform."""
    try:
        target, normalized, warnings = await _async_validate_target_payload(
            hass, msg["target_id"], msg["payload"]
        )
    except PayloadValidationError as err:
        connection.send_error(msg["id"], "invalid_payload", str(err))
        return
    connection.send_result(
        msg["id"],
        {"valid": True, "target": target, "payload": normalized, "warnings": warnings},
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SEND_TEST,
        vol.Required("target_id"): str,
        vol.Required("payload"): dict,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_send_test(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Send a validated test notification to one discovered mobile-app target."""
    try:
        target, normalized, warnings = await _async_validate_target_payload(
            hass, msg["target_id"], msg["payload"]
        )
        await hass.services.async_call(
            "notify",
            target["service"],
            normalized,
            blocking=True,
            context=Context(user_id=connection.user.id),
        )
    except PayloadValidationError as err:
        connection.send_error(msg["id"], "invalid_payload", str(err))
        return
    except HomeAssistantError as err:
        connection.send_error(msg["id"], "send_failed", str(err))
        return

    connection.send_result(
        msg["id"],
        {"ok": True, "target": target["name"], "warnings": warnings},
    )


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_GENERATE_YAML,
        vol.Required("target_id"): str,
        vol.Required("payload"): dict,
        vol.Optional("action_handlers"): list,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_generate_yaml(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Generate a notification action and optional actionable handler YAML."""
    try:
        target, normalized, warnings = await _async_validate_target_payload(
            hass, msg["target_id"], msg["payload"]
        )
        yaml_output = generate_action_yaml(
            target["service"],
            normalized,
            msg.get("action_handlers", []),
        )
    except PayloadValidationError as err:
        connection.send_error(msg["id"], "invalid_payload", str(err))
        return

    connection.send_result(
        msg["id"],
        {"yaml": yaml_output, "warnings": warnings},
    )


@websocket_api.websocket_command({vol.Required("type"): WS_LIST_TEMPLATES})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_list_templates(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return saved notification templates."""
    connection.send_result(msg["id"], await async_get_template_store(hass).async_list())


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SAVE_TEMPLATE,
        vol.Required("template"): dict,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_save_template(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Create or update a stored notification template."""
    try:
        saved = await async_get_template_store(hass).async_save(msg["template"])
    except TemplateValidationError as err:
        connection.send_error(msg["id"], "invalid_template", str(err))
        return
    connection.send_result(msg["id"], saved)


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_DELETE_TEMPLATE,
        vol.Required("template_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_delete_template(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Delete a stored notification template."""
    try:
        await async_get_template_store(hass).async_delete(msg["template_id"])
    except TemplateValidationError as err:
        connection.send_error(msg["id"], "invalid_template", str(err))
        return
    connection.send_result(msg["id"], {"deleted": msg["template_id"]})
