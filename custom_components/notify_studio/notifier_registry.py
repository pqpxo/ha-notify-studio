# version 16
"""Discover and describe notification targets available to Notify Studio."""

from __future__ import annotations

from collections.abc import Mapping
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.util import slugify

from .const import MOBILE_APP_SERVICE_PREFIX, NOTIFY_DOMAIN

COMMON_CAPABILITIES = ["title", "message", "tag", "image", "open_url", "actions"]
ANDROID_CAPABILITIES = [
    "subject",
    "channel",
    "importance",
    "priority",
    "color",
    "sticky",
    "persistent",
    "timeout",
    "notification_icon",
]
IOS_CAPABILITIES = [
    "subtitle",
    "sound",
    "badge",
    "interruption_level",
    "thread_id",
]


def _platform_from_os_name(os_name: object) -> str:
    """Return Notify Studio's platform label for a Mobile App OS value."""
    text = str(os_name or "").casefold()
    if "android" in text:
        return "android"
    if "ios" in text or "iphone" in text or "ipad" in text or "macos" in text:
        return "ios"
    if text:
        return "other"
    return "unknown"


def _capabilities_for(platform: str) -> dict[str, list[str]]:
    """Return panel field capabilities for a single platform."""
    platform_capabilities = (
        ANDROID_CAPABILITIES
        if platform == "android"
        else IOS_CAPABILITIES
        if platform == "ios"
        else []
    )
    return {"common": COMMON_CAPABILITIES, "platform": platform_capabilities}


def _warnings_for(platform: str) -> list[str]:
    """Return device-relevant warnings presented beside a target."""
    if platform == "ios":
        return [
            "Critical and time-sensitive interruption levels require the appropriate Apple permissions and device settings.",
        ]
    return []


def _entry_metadata_by_service(hass: HomeAssistant) -> dict[str, dict[str, Any]]:
    """Best-effort Mobile App metadata indexed by expected legacy service name.

    Service discovery remains authoritative. This map only enriches an already
    registered service with Companion config-entry information.
    """
    metadata: dict[str, dict[str, Any]] = {}
    for entry in hass.config_entries.async_entries("mobile_app"):
        data = entry.data
        device_name = data.get("device_name")
        if not isinstance(device_name, str) or not device_name.strip():
            continue
        service = f"{MOBILE_APP_SERVICE_PREFIX}{slugify(device_name)}"
        metadata[service] = {
            "device_name": device_name,
            "os_name": data.get("os_name"),
            "model": data.get("model"),
        }
    return metadata


async def async_list_notifiers(hass: HomeAssistant) -> dict[str, list[dict[str, Any]]]:
    """Return registered legacy mobile-app services and notify entities."""
    service_metadata = _entry_metadata_by_service(hass)
    notify_services = hass.services.async_services().get(NOTIFY_DOMAIN, {})

    services: list[dict[str, Any]] = []
    for service_name in sorted(notify_services):
        if not service_name.startswith(MOBILE_APP_SERVICE_PREFIX):
            continue

        metadata = service_metadata.get(service_name, {})
        os_name = metadata.get("os_name")
        platform = _platform_from_os_name(os_name)
        services.append(
            {
                "id": service_name,
                "name": metadata.get("device_name")
                or service_name.removeprefix(MOBILE_APP_SERVICE_PREFIX).replace("_", " ").title(),
                "service": service_name,
                "kind": "legacy_mobile_app_service",
                "platform": platform,
                "os_name": os_name,
                "model": metadata.get("model"),
                "capabilities": _capabilities_for(platform),
                "warnings": _warnings_for(platform),
            }
        )

    entities: list[dict[str, Any]] = []
    for entity_id in sorted(hass.states.async_entity_ids(NOTIFY_DOMAIN)):
        state = hass.states.get(entity_id)
        attributes: Mapping[str, Any] = state.attributes if state else {}
        entities.append(
            {
                "entity_id": entity_id,
                "name": attributes.get("friendly_name", entity_id),
                "kind": "notify_entity",
            }
        )

    return {"services": services, "entities": entities}


async def async_resolve_target(hass: HomeAssistant, target_id: str) -> dict[str, Any] | None:
    """Resolve a currently registered target ID to a mobile-app service."""
    notifiers = await async_list_notifiers(hass)
    return next(
        (target for target in notifiers["services"] if target["id"] == target_id),
        None,
    )
