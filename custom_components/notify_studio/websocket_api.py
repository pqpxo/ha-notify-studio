# version 16
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
    WS_CLEAR_LOGS,
    WS_CREATE_CUSTOM_GROUP,
    WS_DELETE_CUSTOM_GROUP,
    WS_DELETE_TEMPLATE,
    WS_GENERATE_YAML,
    WS_INFO,
    WS_LIST_AUTOMATIONS,
    WS_LIST_CUSTOM_GROUPS,
    WS_LIST_LOGS,
    WS_LIST_NOTIFIERS,
    WS_LIST_RECENT_PUSH_RUNNABLES,
    WS_LIST_RUNNABLES,
    WS_LIST_TEMPLATES,
    WS_RENDER_PREVIEW,
    WS_RENAME_CUSTOM_GROUP,
    WS_RUN_RUNNABLE,
    WS_SAVE_TEMPLATE,
    WS_SCAN_NOTIFY_USAGE,
    WS_SEND_TEST,
    WS_SET_CUSTOM_GROUP_MEMBERSHIPS,
    WS_SET_CUSTOM_GROUP_MEMBERS,
    WS_TOGGLE_CUSTOM_GROUP,
    WS_TOGGLE_AUTOMATION,
    WS_VALIDATE_PAYLOAD,
)
from .custom_group_store import (
    CustomGroupValidationError,
    async_get_custom_group_store,
)
from .log_store import async_get_log_store
from .notification_schema import (
    PayloadValidationError,
    generate_action_yaml,
    validate_payload,
)
from .notifier_registry import async_list_notifiers, async_resolve_target
from .notify_scanner import async_list_recent_push_runnables, async_scan_notify_usage
from .runnable_registry import async_list_runnables
from .template_store import TemplateValidationError, async_get_template_store


def async_register_commands(hass: HomeAssistant) -> None:
    """Register every Notify Studio WebSocket command exactly once."""
    websocket_api.async_register_command(hass, websocket_info)
    websocket_api.async_register_command(hass, websocket_list_notifiers)
    websocket_api.async_register_command(hass, websocket_list_automations)
    websocket_api.async_register_command(hass, websocket_list_runnables)
    websocket_api.async_register_command(hass, websocket_list_recent_push_runnables)
    websocket_api.async_register_command(hass, websocket_list_logs)
    websocket_api.async_register_command(hass, websocket_clear_logs)
    websocket_api.async_register_command(hass, websocket_list_custom_groups)
    websocket_api.async_register_command(hass, websocket_create_custom_group)
    websocket_api.async_register_command(hass, websocket_rename_custom_group)
    websocket_api.async_register_command(hass, websocket_delete_custom_group)
    websocket_api.async_register_command(hass, websocket_set_custom_group_memberships)
    websocket_api.async_register_command(hass, websocket_set_custom_group_members)
    websocket_api.async_register_command(hass, websocket_toggle_custom_group)
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
    custom_groups = await async_get_custom_group_store(hass).async_list()
    connection.send_result(
        msg["id"],
        {
            "version": VERSION,
            "has_notify_entities": bool(notifiers["entities"]),
            "mobile_app_services": len(notifiers["services"]),
            "template_count": len(templates),
            "custom_group_count": len(custom_groups),
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
    """Return automation entities for backwards compatibility with early clients."""
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
        async_get_log_store(hass).add(
            "error",
            "recent_push_scan_failed",
            "Unable to load recent push activity.",
            detail=str(err),
        )
        connection.send_error(msg["id"], "recent_push_scan_failed", str(err))


@websocket_api.websocket_command({vol.Required("type"): WS_LIST_LOGS})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_list_logs(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return the bounded in-memory Notify Studio operational log."""
    connection.send_result(msg["id"], async_get_log_store(hass).list_entries())


@websocket_api.websocket_command({vol.Required("type"): WS_CLEAR_LOGS})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_clear_logs(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Clear the in-memory Notify Studio operational log."""
    store = async_get_log_store(hass)
    store.clear()
    store.add("info", "logs_cleared", "Application logs cleared.")
    connection.send_result(msg["id"], store.list_entries())



@websocket_api.websocket_command({vol.Required("type"): WS_LIST_CUSTOM_GROUPS})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_list_custom_groups(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Return this Home Assistant instance's Notify Studio-only groups."""
    connection.send_result(msg["id"], await async_get_custom_group_store(hass).async_list())


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_CREATE_CUSTOM_GROUP,
        vol.Required("name"): str,
        vol.Required("kind"): vol.In(["category", "area"]),
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_create_custom_group(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Create one custom Notify Studio category or area."""
    store = async_get_log_store(hass)
    try:
        group = await async_get_custom_group_store(hass).async_create(
            name=msg["name"],
            kind=msg["kind"],
        )
    except CustomGroupValidationError as err:
        connection.send_error(msg["id"], "custom_group_invalid", str(err))
        return

    store.add(
        "info",
        "custom_group_created",
        f'Custom {group["kind"]} "{group["name"]}" created.',
    )
    connection.send_result(msg["id"], group)


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_RENAME_CUSTOM_GROUP,
        vol.Required("group_id"): str,
        vol.Required("name"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_rename_custom_group(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Rename a custom Notify Studio category or area."""
    store = async_get_log_store(hass)
    try:
        group = await async_get_custom_group_store(hass).async_rename(
            group_id=msg["group_id"],
            name=msg["name"],
        )
    except CustomGroupValidationError as err:
        connection.send_error(msg["id"], "custom_group_invalid", str(err))
        return

    store.add(
        "info",
        "custom_group_renamed",
        f'Custom {group["kind"]} renamed to "{group["name"]}".',
    )
    connection.send_result(msg["id"], group)


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_DELETE_CUSTOM_GROUP,
        vol.Required("group_id"): str,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_delete_custom_group(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Delete one custom Notify Studio category or area."""
    store = async_get_log_store(hass)
    custom_group_store = async_get_custom_group_store(hass)
    try:
        group = await custom_group_store.async_get(msg["group_id"])
        await custom_group_store.async_delete(msg["group_id"])
    except CustomGroupValidationError as err:
        connection.send_error(msg["id"], "custom_group_invalid", str(err))
        return

    store.add(
        "info",
        "custom_group_deleted",
        f'Custom {group["kind"]} "{group["name"]}" deleted.',
    )
    connection.send_result(msg["id"], {"id": group["id"]})


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SET_CUSTOM_GROUP_MEMBERSHIPS,
        vol.Required("source_key"): str,
        vol.Required("source_name"): str,
        vol.Optional("entity_id"): vol.Any(str, None),
        vol.Required("group_ids"): [str],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_set_custom_group_memberships(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Assign an audited source to custom Notify Studio categories and areas."""
    store = async_get_log_store(hass)
    try:
        groups = await async_get_custom_group_store(hass).async_set_source_memberships(
            source_key=msg["source_key"],
            source_name=msg["source_name"],
            entity_id=msg.get("entity_id"),
            group_ids=list(msg["group_ids"]),
        )
    except CustomGroupValidationError as err:
        connection.send_error(msg["id"], "custom_group_invalid", str(err))
        return

    store.add(
        "info",
        "custom_group_membership_updated",
        "Custom category and area membership updated.",
        entity_id=msg.get("entity_id") or None,
        detail=f'{msg["source_name"]}: {len(msg["group_ids"])} group(s) selected.',
    )
    connection.send_result(msg["id"], groups)


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_SET_CUSTOM_GROUP_MEMBERS,
        vol.Required("group_id"): str,
        vol.Required("members"): [
            vol.Schema(
                {
                    vol.Required("source_key"): str,
                    vol.Required("name"): str,
                    vol.Optional("entity_id"): vol.Any(str, None),
                }
            )
        ],
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_set_custom_group_members(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Replace a custom category or area's selected source members."""
    store = async_get_log_store(hass)
    try:
        groups = await async_get_custom_group_store(hass).async_set_group_members(
            group_id=msg["group_id"],
            members=list(msg["members"]),
        )
    except CustomGroupValidationError as err:
        connection.send_error(msg["id"], "custom_group_invalid", str(err))
        return

    group = next((item for item in groups if item["id"] == msg["group_id"]), None)
    if group is not None:
        store.add(
            "info",
            "custom_group_members_selected",
            f'Custom {group["kind"]} "{group["name"]}" members saved.',
            detail=f'{len(group["members"])} notification source(s) selected.',
        )
    connection.send_result(msg["id"], groups)


@websocket_api.websocket_command(
    {
        vol.Required("type"): WS_TOGGLE_CUSTOM_GROUP,
        vol.Required("group_id"): str,
        vol.Required("enabled"): bool,
    }
)
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_toggle_custom_group(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Enable or disable every currently available automation in a custom group."""
    log_store = async_get_log_store(hass)
    try:
        group = await async_get_custom_group_store(hass).async_get(msg["group_id"])
    except CustomGroupValidationError as err:
        connection.send_error(msg["id"], "custom_group_invalid", str(err))
        return

    automation_ids = sorted(
        {
            str(member.get("entity_id"))
            for member in group.get("members", [])
            if isinstance(member, Mapping)
            and isinstance(member.get("entity_id"), str)
            and str(member["entity_id"]).startswith("automation.")
        }
    )
    if not automation_ids:
        connection.send_error(
            msg["id"],
            "custom_group_no_automations",
            "This custom category or area does not contain any automation entities.",
        )
        return

    action = "turn_on" if msg["enabled"] else "turn_off"
    changed: list[str] = []
    skipped: list[str] = []
    failed: list[dict[str, str]] = []

    for entity_id in automation_ids:
        if hass.states.get(entity_id) is None:
            skipped.append(entity_id)
            continue
        try:
            await hass.services.async_call(
                "automation",
                action,
                {"entity_id": entity_id},
                blocking=True,
                context=Context(user_id=connection.user.id),
            )
        except HomeAssistantError as err:
            failed.append({"entity_id": entity_id, "error": str(err)})
        else:
            changed.append(entity_id)

    state_label = "enabled" if msg["enabled"] else "disabled"
    if failed:
        log_store.add(
            "warning",
            "custom_group_toggle_partial",
            f'Custom {group["kind"]} "{group["name"]}" was only partly {state_label}.',
            detail=f"Changed {len(changed)}, skipped {len(skipped)}, failed {len(failed)} automation(s).",
        )
    else:
        log_store.add(
            "info",
            "custom_group_toggled",
            f'Custom {group["kind"]} "{group["name"]}" {state_label}.',
            detail=f"Changed {len(changed)}, skipped {len(skipped)} automation(s).",
        )

    connection.send_result(
        msg["id"],
        {
            "group_id": group["id"],
            "enabled": msg["enabled"],
            "changed_entity_ids": changed,
            "skipped_entity_ids": skipped,
            "failed": failed,
        },
    )


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
    store = async_get_log_store(hass)
    if not entity_id.startswith("automation.") or hass.states.get(entity_id) is None:
        store.add(
            "warning",
            "automation_toggle_rejected",
            "Automation toggle was rejected because the entity was not found.",
            entity_id=entity_id,
        )
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
        store.add(
            "error",
            "automation_toggle_failed",
            "Unable to change the automation state.",
            entity_id=entity_id,
            detail=str(err),
        )
        connection.send_error(msg["id"], "automation_toggle_failed", str(err))
        return

    state = hass.states.get(entity_id)
    store.add(
        "info",
        "automation_toggled",
        f"Automation {'enabled' if msg['enabled'] else 'disabled'}.",
        entity_id=entity_id,
    )
    connection.send_result(
        msg["id"],
        {"entity_id": entity_id, "state": state.state if state else None},
    )


def _running_count(state: Any) -> int:
    """Return a safe current-run count from an automation or script state."""
    value = state.attributes.get("current", 0)
    try:
        return int(value)
    except (TypeError, ValueError):
        return 0


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
    """Queue a manual automation or script run with safe, actionable logging."""
    entity_id = msg["entity_id"]
    state = hass.states.get(entity_id)
    store = async_get_log_store(hass)

    if state is None or not entity_id.startswith(("automation.", "script.")):
        store.add(
            "warning",
            "run_test_rejected",
            "Run test was rejected because the automation or script was not found.",
            entity_id=entity_id,
        )
        connection.send_error(
            msg["id"],
            "invalid_runnable",
            "Unknown automation or script entity.",
        )
        return

    domain = "automation" if entity_id.startswith("automation.") else "script"
    mode = str(state.attributes.get("mode", "single"))
    current = _running_count(state)

    if domain == "automation" and state.state != "on":
        store.add(
            "warning",
            "run_test_blocked_disabled",
            "Run test was blocked because the automation is disabled.",
            entity_id=entity_id,
        )
        connection.send_error(
            msg["id"],
            "automation_disabled",
            "Enable this automation before running a test.",
        )
        return

    if mode == "single" and current > 0:
        store.add(
            "warning",
            "run_test_blocked_active",
            "Run test was blocked because this single-mode item is already running.",
            entity_id=entity_id,
            detail="Wait for the current run to finish, then try again.",
        )
        connection.send_error(
            msg["id"],
            "runnable_already_running",
            "This item is already running in single mode. Wait for it to finish, then try again.",
        )
        return

    service = "trigger" if domain == "automation" else "turn_on"
    data: dict[str, Any] = {"entity_id": entity_id}
    if domain == "automation":
        # A Run test is a deliberate manual execution. Skip top-level conditions
        # so condition-gated notification automations can be exercised reliably.
        data["skip_condition"] = True

    store.add(
        "info",
        "run_test_requested",
        "Run test requested.",
        entity_id=entity_id,
        detail=(
            "Automation conditions will be bypassed for this manual test."
            if domain == "automation"
            else "Script turn-on action requested."
        ),
    )

    try:
        await hass.services.async_call(
            domain,
            service,
            data,
            blocking=False,
            context=Context(user_id=connection.user.id),
        )
    except HomeAssistantError as err:
        store.add(
            "error",
            "run_test_failed",
            "Home Assistant rejected the run-test request.",
            entity_id=entity_id,
            detail=str(err),
        )
        connection.send_error(msg["id"], "run_failed", str(err))
        return

    store.add(
        "info",
        "run_test_queued",
        "Run test queued.",
        entity_id=entity_id,
        detail=(
            "The automation action sequence was requested with conditions bypassed."
            if domain == "automation"
            else "The script action sequence was requested."
        ),
    )
    connection.send_result(
        msg["id"],
        {
            "entity_id": entity_id,
            "queued": True,
            "conditions_skipped": domain == "automation",
        },
    )


@websocket_api.websocket_command({vol.Required("type"): WS_SCAN_NOTIFY_USAGE})
@websocket_api.require_admin
@websocket_api.async_response
async def websocket_scan_notify_usage(
    hass: HomeAssistant,
    connection: websocket_api.ActiveConnection,
    msg: dict[str, Any],
) -> None:
    """Scan Home Assistant's merged YAML configuration for notify calls."""
    store = async_get_log_store(hass)
    try:
        results = await async_scan_notify_usage(hass)
    except HomeAssistantError as err:
        store.add(
            "error",
            "notification_scan_failed",
            "Notification source scan failed.",
            detail=str(err),
        )
        connection.send_error(msg["id"], "scan_failed", str(err))
        return

    store.add(
        "info",
        "notification_scan_complete",
        "Notification source scan completed.",
        detail=f"Found {len(results)} source(s).",
    )
    connection.send_result(msg["id"], results)


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
        except Exception as err:  # User-facing template preview feedback.
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
        raise PayloadValidationError(
            "The selected mobile-app target is no longer available."
        )
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
    store = async_get_log_store(hass)
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
        store.add(
            "warning",
            "test_notification_invalid",
            "Test notification was rejected because the payload is invalid.",
            detail=str(err),
        )
        connection.send_error(msg["id"], "invalid_payload", str(err))
        return
    except HomeAssistantError as err:
        store.add(
            "error",
            "test_notification_failed",
            "Test notification failed.",
            detail=str(err),
        )
        connection.send_error(msg["id"], "send_failed", str(err))
        return

    store.add(
        "info",
        "test_notification_sent",
        "Test notification sent.",
        detail=f"Target: {target['name']}",
    )
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
    store = async_get_log_store(hass)
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
        store.add(
            "warning",
            "yaml_generation_invalid",
            "YAML generation was rejected because the payload is invalid.",
            detail=str(err),
        )
        connection.send_error(msg["id"], "invalid_payload", str(err))
        return

    store.add("info", "yaml_generated", "Notification YAML generated.")
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
    store = async_get_log_store(hass)
    try:
        saved = await async_get_template_store(hass).async_save(msg["template"])
    except TemplateValidationError as err:
        store.add(
            "warning",
            "template_save_invalid",
            "Template save was rejected because the template is invalid.",
            detail=str(err),
        )
        connection.send_error(msg["id"], "invalid_template", str(err))
        return

    store.add("info", "template_saved", "Notification template saved.")
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
    store = async_get_log_store(hass)
    try:
        await async_get_template_store(hass).async_delete(msg["template_id"])
    except TemplateValidationError as err:
        store.add(
            "warning",
            "template_delete_invalid",
            "Template deletion was rejected because the template was not found.",
            detail=str(err),
        )
        connection.send_error(msg["id"], "invalid_template", str(err))
        return

    store.add("info", "template_deleted", "Notification template deleted.")
    connection.send_result(msg["id"], {"deleted": msg["template_id"]})
