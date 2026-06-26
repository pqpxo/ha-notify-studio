# version 16
"""Scan merged Home Assistant YAML for notification usage."""

from __future__ import annotations

from collections.abc import Mapping, Sequence
from typing import Any

from homeassistant.config import async_hass_config_yaml
from homeassistant.core import HomeAssistant
from homeassistant.helpers import (
    category_registry as cr,
    entity_registry as er,
    label_registry as lr,
)

from .notifier_registry import async_list_notifiers
from .runnable_registry import async_runnable_for_audit

SENSITIVE_KEYS = {
    "access_token",
    "api_key",
    "authorization",
    "bearer",
    "password",
    "secret",
    "token",
}


def _redact(value: Any) -> Any:
    """Redact common sensitive keys before data reaches the panel."""
    if isinstance(value, Mapping):
        return {
            str(key): "***REDACTED***" if str(key).casefold() in SENSITIVE_KEYS else _redact(item)
            for key, item in value.items()
        }
    if isinstance(value, list):
        return [_redact(item) for item in value]
    return value


def _is_notify_service(value: Any) -> bool:
    """Return whether a service/action string invokes the notify domain."""
    return isinstance(value, str) and value.casefold().startswith("notify.")


def _friendly_identifier(value: object) -> str:
    """Turn a Home Assistant storage ID into a compact display label."""
    return str(value).replace("_", " ").replace("-", " ").strip().title()


def _scan_node(node: Any, path: str, hits: list[dict[str, Any]]) -> None:
    """Recursively scan arbitrary YAML structures for notification calls."""
    if isinstance(node, Mapping):
        for key in ("action", "service"):
            value = node.get(key)
            if _is_notify_service(value):
                hits.append(
                    {
                        "service": value,
                        "path": path,
                        "data": _redact(node.get("data", {})),
                        "target": _redact(node.get("target", {})),
                    }
                )

        notifiers = node.get("notifiers")
        if isinstance(notifiers, Sequence) and not isinstance(notifiers, (str, bytes)):
            for index, notifier in enumerate(notifiers):
                if isinstance(notifier, str):
                    service = notifier if notifier.startswith("notify.") else f"notify.{notifier}"
                    hits.append(
                        {
                            "service": service,
                            "path": f"{path}.notifiers[{index}]",
                            "data": {},
                            "target": {},
                        }
                    )

        for key, value in node.items():
            _scan_node(value, f"{path}.{key}" if path else str(key), hits)
        return

    if isinstance(node, Sequence) and not isinstance(node, (str, bytes)):
        for index, value in enumerate(node):
            _scan_node(value, f"{path}[{index}]", hits)


def _as_items(value: Any) -> list[tuple[str, Mapping[str, Any]]]:
    """Normalise automation-like YAML sections to named mapping items."""
    if isinstance(value, Mapping):
        return [(str(key), item) for key, item in value.items() if isinstance(item, Mapping)]
    if isinstance(value, list):
        return [
            (str(index), item)
            for index, item in enumerate(value)
            if isinstance(item, Mapping)
        ]
    return []


def _enrich_organisation(
    hass: HomeAssistant,
    record: dict[str, Any],
) -> None:
    """Add human-readable category and label names for matching runtime entities."""
    runtime = record.get("runtime")
    if not isinstance(runtime, Mapping):
        return
    entity_id = runtime.get("entity_id")
    if not isinstance(entity_id, str):
        return

    entry = er.async_get(hass).async_get(entity_id)
    if entry is None:
        return

    source = str(record.get("source", ""))
    categories = getattr(entry, "categories", {})
    if isinstance(categories, Mapping):
        category_id = categories.get(source)
        if category_id:
            category_entry = cr.async_get(hass).async_get_category(
                scope=source,
                category_id=str(category_id),
            )
            record["category"] = (
                category_entry.name
                if category_entry is not None
                else _friendly_identifier(category_id)
            )

    label_registry = lr.async_get(hass)
    labels = []
    for label_id in getattr(entry, "labels", set()):
        label_entry = label_registry.async_get_label(str(label_id))
        labels.append(
            label_entry.name
            if label_entry is not None
            else _friendly_identifier(label_id)
        )
    if labels:
        record["labels"] = sorted(labels, key=str.casefold)


def _scan_collection(
    hass: HomeAssistant,
    source: str,
    collection: Any,
    *,
    name_key: str | None = None,
) -> list[dict[str, Any]]:
    """Scan one top-level configuration collection and enrich runtime sources."""
    results: list[dict[str, Any]] = []
    for fallback_id, item in _as_items(collection):
        item_id = str(item.get("id", fallback_id))
        name = (
            item.get(name_key or "alias")
            or item.get("alias")
            or item.get("name")
            or fallback_id
        )
        hits: list[dict[str, Any]] = []
        _scan_node(item, "root", hits)
        if hits:
            record: dict[str, Any] = {
                "source": source,
                "origin": "merged_yaml",
                "name": str(name),
                "id": item_id,
                "notifiers": sorted({hit["service"] for hit in hits}),
                "hits": hits,
            }
            runtime = async_runnable_for_audit(
                hass,
                source=source,
                item_id=item_id,
                name=str(name),
            )
            if runtime is not None:
                record["runtime"] = runtime
            _enrich_organisation(hass, record)
            results.append(record)
    return results


async def async_scan_notify_usage(hass: HomeAssistant) -> list[dict[str, Any]]:
    """Load merged YAML and return notification calls across supported sections."""
    config = await async_hass_config_yaml(hass)
    results: list[dict[str, Any]] = []
    results.extend(_scan_collection(hass, "automation", config.get("automation", [])))
    results.extend(
        _scan_collection(hass, "script", config.get("script", {}), name_key="alias")
    )
    results.extend(_scan_collection(hass, "alert", config.get("alert", {}), name_key="name"))

    notifier_result = await async_list_notifiers(hass)
    friendly_by_service = {
        f"notify.{target['service']}": str(target["name"])
        for target in notifier_result["services"]
    }
    for record in results:
        record["notify_devices"] = sorted(
            {
                friendly_by_service.get(
                    service,
                    _friendly_identifier(service.removeprefix("notify.")),
                )
                for service in record["notifiers"]
            }
        )
    return results


async def async_list_recent_push_runnables(
    hass: HomeAssistant,
    *,
    limit: int = 8,
) -> list[dict[str, Any]]:
    """Return the most recently triggered YAML sources that send notifications.

    This deliberately returns only automation and script sources discovered by
    the existing merged-YAML notification scanner. Alert entities do not have a
    comparable runnable execution timestamp.
    """
    recent_by_entity: dict[str, dict[str, Any]] = {}
    for source in await async_scan_notify_usage(hass):
        if source.get("source") not in {"automation", "script"}:
            continue
        runtime = source.get("runtime")
        if not isinstance(runtime, Mapping):
            continue
        entity_id = runtime.get("entity_id")
        last_triggered = runtime.get("last_triggered")
        if not isinstance(entity_id, str) or not isinstance(last_triggered, str) or not last_triggered:
            continue

        candidate = {
            "entity_id": entity_id,
            "name": str(runtime.get("name") or source.get("name") or entity_id),
            "kind": str(runtime.get("kind") or source.get("source")),
            "last_triggered": last_triggered,
        }
        current = recent_by_entity.get(entity_id)
        if current is None or candidate["last_triggered"] > current["last_triggered"]:
            recent_by_entity[entity_id] = candidate

    return sorted(
        recent_by_entity.values(),
        key=lambda item: str(item["last_triggered"]),
        reverse=True,
    )[:limit]
