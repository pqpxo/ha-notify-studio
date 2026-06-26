# version 15
"""Validate Notify Studio payloads and generate copy-ready YAML."""

from __future__ import annotations

from collections.abc import Mapping
from copy import deepcopy
from typing import Any

import yaml

COMMON_DATA_KEYS = {"tag", "image", "actions"}
ANDROID_DATA_KEYS = {
    "clickAction",
    "subject",
    "channel",
    "importance",
    "priority",
    "color",
    "sticky",
    "persistent",
    "timeout",
    "notification_icon",
}
IOS_DATA_KEYS = {"url", "subtitle", "push"}
IOS_PUSH_KEYS = {"sound", "badge", "interruption-level", "thread-id"}
COMMON_ACTION_KEYS = {
    "action",
    "title",
    "uri",
    "behavior",
    "authenticationRequired",
    "action_data",
}
IOS_ACTION_KEYS = {
    "activationMode",
    "destructive",
    "textInputButtonTitle",
    "textInputPlaceholder",
    "icon",
}
ANDROID_LEVELS = {"min", "low", "default", "high"}
HANDLER_TYPES = {"event", "script", "service", "reply"}


class PayloadValidationError(ValueError):
    """Raised when a panel payload is not safe to send."""


def _require_string(value: Any, field: str, *, allow_empty: bool = False) -> str:
    """Require a string payload field and return its unmodified value."""
    if not isinstance(value, str):
        raise PayloadValidationError(f"{field} must be a string.")
    if not allow_empty and not value.strip():
        raise PayloadValidationError(f"{field} cannot be empty.")
    return value


def _drop_empty(value: Any) -> Any:
    """Remove empty values while preserving false, zero, and Jinja templates."""
    if isinstance(value, Mapping):
        return {
            key: cleaned
            for key, item in value.items()
            if (cleaned := _drop_empty(item)) is not None
        }
    if isinstance(value, list):
        return [cleaned for item in value if (cleaned := _drop_empty(item)) is not None]
    if value is None:
        return None
    if isinstance(value, str) and not value.strip():
        return None
    return value


def _validate_action_value(
    action: Mapping[str, Any],
    *,
    index: int,
    platform: str,
) -> dict[str, Any]:
    """Validate and normalise one Companion inline notification action."""
    allowed_keys = set(COMMON_ACTION_KEYS)
    if platform == "ios":
        allowed_keys |= IOS_ACTION_KEYS
    unknown = set(action) - allowed_keys
    if unknown:
        unknown_names = ", ".join(sorted(unknown))
        raise PayloadValidationError(
            f"Unsupported key in data.actions[{index}]: {unknown_names}."
        )

    action_id = _require_string(action.get("action"), f"data.actions[{index}].action").strip()
    title = _require_string(action.get("title"), f"data.actions[{index}].title").strip()
    normalised: dict[str, Any] = {"action": action_id, "title": title}

    if "uri" in action:
        uri = _require_string(action["uri"], f"data.actions[{index}].uri").strip()
        if platform == "android" and action_id != "URI":
            raise PayloadValidationError(
                f"Android data.actions[{index}] with a URI must use action: URI."
            )
        normalised["uri"] = uri

    if "behavior" in action:
        behavior = _require_string(action["behavior"], f"data.actions[{index}].behavior").strip()
        if behavior != "textInput":
            raise PayloadValidationError(
                f"data.actions[{index}].behavior currently supports only textInput."
            )
        normalised["behavior"] = behavior

    if "authenticationRequired" in action:
        if not isinstance(action["authenticationRequired"], bool):
            raise PayloadValidationError(
                f"data.actions[{index}].authenticationRequired must be true or false."
            )
        normalised["authenticationRequired"] = action["authenticationRequired"]

    if "action_data" in action:
        if platform != "ios":
            raise PayloadValidationError(
                f"data.actions[{index}].action_data is only supported on iOS targets."
            )
        if not isinstance(action["action_data"], Mapping):
            raise PayloadValidationError(
                f"data.actions[{index}].action_data must be an object."
            )
        normalised["action_data"] = deepcopy(dict(action["action_data"]))

    if platform == "ios":
        for key in {"activationMode", "textInputButtonTitle", "textInputPlaceholder", "icon"} & set(action):
            normalised[key] = _require_string(action[key], f"data.actions[{index}].{key}").strip()
        if "activationMode" in normalised and normalised["activationMode"] not in {
            "foreground",
            "background",
        }:
            raise PayloadValidationError(
                f"data.actions[{index}].activationMode must be foreground or background."
            )
        if "destructive" in action:
            if not isinstance(action["destructive"], bool):
                raise PayloadValidationError(
                    f"data.actions[{index}].destructive must be true or false."
                )
            normalised["destructive"] = action["destructive"]

    return normalised


def _validate_actions(value: Any, platform: str) -> list[dict[str, Any]]:
    """Validate Companion inline notification action buttons."""
    if platform not in {"android", "ios"}:
        raise PayloadValidationError("Notification action buttons require an Android or iOS target.")
    if not isinstance(value, list) or not value:
        raise PayloadValidationError("data.actions must contain at least one notification action.")

    limit = 3 if platform == "android" else 10
    if len(value) > limit:
        raise PayloadValidationError(
            f"{platform.title()} supports at most {limit} notification action buttons."
        )

    action_ids: set[str] = set()
    normalised: list[dict[str, Any]] = []
    for index, item in enumerate(value, start=1):
        if not isinstance(item, Mapping):
            raise PayloadValidationError(f"data.actions[{index}] must be an object.")
        action = _validate_action_value(item, index=index, platform=platform)
        action_id = str(action["action"])
        # URI is a Companion command rather than an event ID, so more than one
        # URI button is permitted. Custom event IDs must stay unique.
        if action_id.casefold() != "uri":
            action_id_key = action_id.casefold()
            if action_id_key in action_ids:
                raise PayloadValidationError("Every notification action ID must be unique.")
            action_ids.add(action_id_key)
        normalised.append(action)

    return normalised


def _validate_data_key_types(data: dict[str, Any], platform: str) -> None:
    """Validate the supported rich payload surface for one platform."""
    string_keys = {
        "tag",
        "image",
        "clickAction",
        "subject",
        "channel",
        "importance",
        "priority",
        "color",
        "notification_icon",
        "url",
        "subtitle",
    }
    for key in string_keys & data.keys():
        _require_string(data[key], f"data.{key}")

    for key in {"sticky", "persistent"} & data.keys():
        if not isinstance(data[key], bool):
            raise PayloadValidationError(f"data.{key} must be true or false.")

    for key in {"importance", "priority"} & data.keys():
        if data[key] not in ANDROID_LEVELS:
            supported = ", ".join(sorted(ANDROID_LEVELS))
            raise PayloadValidationError(f"data.{key} must be one of: {supported}.")

    if "timeout" in data and (
        not isinstance(data["timeout"], int)
        or isinstance(data["timeout"], bool)
        or data["timeout"] < 0
    ):
        raise PayloadValidationError("data.timeout must be a whole number of seconds.")

    if "actions" in data:
        data["actions"] = _validate_actions(data["actions"], platform)

    if "push" in data:
        push = data["push"]
        if platform != "ios":
            raise PayloadValidationError("data.push is only valid for iOS targets.")
        if not isinstance(push, Mapping):
            raise PayloadValidationError("data.push must be an object.")
        unknown_push_keys = set(push) - IOS_PUSH_KEYS
        if unknown_push_keys:
            unknown = ", ".join(sorted(unknown_push_keys))
            raise PayloadValidationError(f"Unsupported iOS push key: {unknown}.")
        if "sound" in push:
            _require_string(push["sound"], "data.push.sound")
        if "badge" in push and (
            not isinstance(push["badge"], int) or isinstance(push["badge"], bool)
        ):
            raise PayloadValidationError("data.push.badge must be a whole number.")
        if "interruption-level" in push:
            valid_levels = {"passive", "active", "time-sensitive", "critical"}
            if push["interruption-level"] not in valid_levels:
                raise PayloadValidationError(
                    "data.push.interruption-level must be passive, active, time-sensitive, or critical."
                )
        if "thread-id" in push:
            _require_string(push["thread-id"], "data.push.thread-id")


def validate_payload(platform: str, payload: Mapping[str, Any]) -> tuple[dict[str, Any], list[str]]:
    """Validate and normalise a notification payload for one selected target."""
    if platform not in {"android", "ios", "other", "unknown"}:
        raise PayloadValidationError("The selected notification platform is not recognised.")
    if not isinstance(payload, Mapping):
        raise PayloadValidationError("payload must be an object.")

    message = _require_string(payload.get("message"), "message")
    title = payload.get("title")
    if title is not None:
        title = _require_string(title, "title", allow_empty=True)

    raw_data = payload.get("data", {})
    if not isinstance(raw_data, Mapping):
        raise PayloadValidationError("data must be an object.")
    data = deepcopy(dict(raw_data))

    allowed_keys = set(COMMON_DATA_KEYS)
    if platform == "android":
        allowed_keys |= ANDROID_DATA_KEYS
    elif platform == "ios":
        allowed_keys |= IOS_DATA_KEYS
    else:
        allowed_keys |= {"url", "clickAction"}

    unsupported = set(data) - allowed_keys
    if unsupported:
        unsupported_names = ", ".join(sorted(unsupported))
        raise PayloadValidationError(
            f"Unsupported payload field for {platform}: {unsupported_names}."
        )

    if platform == "android" and set(data) & IOS_DATA_KEYS:
        raise PayloadValidationError("iOS-only fields cannot be sent to an Android target.")
    if platform == "ios" and set(data) & ANDROID_DATA_KEYS:
        raise PayloadValidationError("Android-only fields cannot be sent to an iOS target.")

    _validate_data_key_types(data, platform)
    data = _drop_empty(data)

    if platform == "android" and data.get("persistent") and not data.get("tag"):
        raise PayloadValidationError(
            "Android persistent notifications require data.tag. Add a tag before sending."
        )

    normalised: dict[str, Any] = {"message": message}
    if title and title.strip():
        normalised["title"] = title
    if data:
        normalised["data"] = data

    warnings: list[str] = []
    if platform == "android" and data.get("persistent"):
        warnings.append(
            "Persistent Android notifications use the tag as their clear/update key."
        )
    if platform == "ios" and data.get("push", {}).get("interruption-level") == "critical":
        warnings.append(
            "Critical notifications require the appropriate Apple entitlement and device permissions."
        )
    if data.get("tag"):
        warnings.append("A matching tag updates an existing notification instead of creating a new one.")
    if data.get("actions"):
        warnings.append(
            "Action buttons with an event action need a matching handler automation. URI buttons open directly on the device."
        )

    return normalised, warnings


def _validate_service_name(value: Any, field: str) -> str:
    """Validate a simple Home Assistant domain.service identifier."""
    service = _require_string(value, field).strip()
    if service.count(".") != 1:
        raise PayloadValidationError(f"{field} must be in domain.service format.")
    domain, action = service.split(".", 1)
    valid_chars = set("abcdefghijklmnopqrstuvwxyz0123456789_")
    if not domain or not action or set(domain) - valid_chars or set(action) - valid_chars:
        raise PayloadValidationError(f"{field} must be in lower-case domain.service format.")
    return service


def validate_action_handlers(
    normalized_payload: Mapping[str, Any],
    raw_handlers: Any,
) -> list[dict[str, Any]]:
    """Validate generation-only handler definitions for notification buttons."""
    if raw_handlers is None:
        raw_handlers = []
    if not isinstance(raw_handlers, list):
        raise PayloadValidationError("action_handlers must be a list.")

    raw_data = normalized_payload.get("data", {})
    actions = raw_data.get("actions", []) if isinstance(raw_data, Mapping) else []
    event_action_ids = {
        str(action["action"])
        for action in actions
        if isinstance(action, Mapping) and str(action.get("action", "")).casefold() != "uri"
    }

    handlers: list[dict[str, Any]] = []
    seen_ids: set[str] = set()
    for index, raw_handler in enumerate(raw_handlers, start=1):
        if not isinstance(raw_handler, Mapping):
            raise PayloadValidationError(f"action_handlers[{index}] must be an object.")
        action_id = _require_string(raw_handler.get("action"), f"action_handlers[{index}].action").strip()
        if action_id not in event_action_ids:
            raise PayloadValidationError(
                f"action_handlers[{index}] does not match a non-URI notification button."
            )
        if action_id.casefold() in seen_ids:
            raise PayloadValidationError("Only one generated handler may be defined for each action ID.")
        seen_ids.add(action_id.casefold())

        handler_type = _require_string(
            raw_handler.get("type"),
            f"action_handlers[{index}].type",
        ).strip()
        if handler_type not in HANDLER_TYPES:
            supported = ", ".join(sorted(HANDLER_TYPES))
            raise PayloadValidationError(
                f"action_handlers[{index}].type must be one of: {supported}."
            )

        handler: dict[str, Any] = {"action": action_id, "type": handler_type}
        if handler_type == "script":
            entity_id = _require_string(
                raw_handler.get("script_entity_id"),
                f"action_handlers[{index}].script_entity_id",
            ).strip()
            if not entity_id.startswith("script."):
                raise PayloadValidationError(
                    f"action_handlers[{index}].script_entity_id must be a script entity ID."
                )
            handler["script_entity_id"] = entity_id
        elif handler_type == "service":
            handler["service"] = _validate_service_name(
                raw_handler.get("service"),
                f"action_handlers[{index}].service",
            )
            service_data = raw_handler.get("service_data", {})
            if not isinstance(service_data, Mapping):
                raise PayloadValidationError(
                    f"action_handlers[{index}].service_data must be an object."
                )
            if service_data:
                handler["service_data"] = deepcopy(dict(service_data))

        handlers.append(handler)

    # Buttons without an explicit route get a safe persistent-notification
    # placeholder in the generated handler rather than a silent no-op.
    for action_id in sorted(event_action_ids):
        if action_id.casefold() not in seen_ids:
            handlers.append({"action": action_id, "type": "event"})

    return handlers


def _sequence_for_handler(handler: Mapping[str, Any]) -> list[dict[str, Any]]:
    """Build a safe automation sequence for a single actionable-button route."""
    handler_type = handler["type"]
    if handler_type == "script":
        return [
            {
                "action": "script.turn_on",
                "target": {"entity_id": handler["script_entity_id"]},
            }
        ]
    if handler_type == "service":
        action: dict[str, Any] = {"action": handler["service"]}
        if handler.get("service_data"):
            action["data"] = handler["service_data"]
        return [action]
    if handler_type == "reply":
        message = (
            "Text reply received for '{{ trigger.event.data.action }}': "
            "{{ trigger.event.data.reply_text | default('No reply text returned', true) }}"
        )
    else:
        message = (
            "Action '{{ trigger.event.data.action }}' was selected. "
            "Replace this generated placeholder action with the required behaviour."
        )
    return [
        {
            "action": "persistent_notification.create",
            "data": {
                "title": "Notify Studio action received",
                "message": message,
            },
        }
    ]


def _generated_action_handler(handlers: list[Mapping[str, Any]]) -> dict[str, Any]:
    """Create an event-handler automation for non-URI notification buttons."""
    action_ids = [str(handler["action"]) for handler in handlers]
    triggers = [
        {
            "trigger": "event",
            "event_type": "mobile_app_notification_action",
            "event_data": {"action": action_id},
        }
        for action_id in action_ids
    ]
    choices = [
        {
            "conditions": "{{ trigger.event.data.action == '" + str(handler["action"]) + "' }}",
            "sequence": _sequence_for_handler(handler),
        }
        for handler in handlers
    ]

    return {
        "alias": "Notify Studio - Handle notification actions",
        "description": (
            "Generated handler for Notify Studio actionable-notification buttons. "
            "Review any placeholder persistent-notification sequence before enabling it."
        ),
        "triggers": triggers,
        "conditions": [],
        "actions": [{"choose": choices}],
        "mode": "parallel",
        "max": 10,
    }


def generate_action_yaml(
    service: str,
    normalized_payload: Mapping[str, Any],
    action_handlers: list[Mapping[str, Any]] | None = None,
) -> str:
    """Create copy-ready notification YAML and a matching handler automation."""
    notification_action = [{"action": f"notify.{service}", "data": dict(normalized_payload)}]
    yaml_body = yaml.safe_dump(
        notification_action,
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
        width=100,
    )
    result = "# Notify Studio generated notification action | version 4\n" + yaml_body

    data = normalized_payload.get("data")
    actions = data.get("actions") if isinstance(data, Mapping) else None
    if not isinstance(actions, list) or not actions:
        return result

    handlers = validate_action_handlers(normalized_payload, action_handlers)
    if not handlers:
        return result + "\n# All selected buttons are URI actions and open directly on the device.\n"

    handler_yaml = yaml.safe_dump(
        _generated_action_handler(handlers),
        allow_unicode=True,
        default_flow_style=False,
        sort_keys=False,
        width=100,
    )
    return (
        result
        + "\n# Notify Studio generated actionable-notification handler | version 4\n"
        + "# Add this as a separate automation. URI buttons do not require an event handler.\n"
        + handler_yaml
    )
