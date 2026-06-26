# version 21
"""Persistent per-instance custom categories, areas, and quick controls."""

from __future__ import annotations

from collections.abc import Mapping
from copy import deepcopy
from datetime import UTC, datetime
from typing import Any
from uuid import uuid4

from homeassistant.core import HomeAssistant
from homeassistant.helpers.storage import Store

from .const import (
    CUSTOM_GROUP_STORE_KEY,
    CUSTOM_GROUP_STORE_VERSION,
    DATA_CUSTOM_GROUP_STORE,
    DOMAIN,
)

_GROUP_KINDS = {"category", "area"}
_MAX_FAVORITE_CONTROLS = 100
_GROUP_CONTROL_SUFFIX = "::group"
_MEMBER_CONTROL_SEPARATOR = "::member::"


class CustomGroupValidationError(ValueError):
    """Raised when a custom category or area request is invalid."""


def _now() -> str:
    """Return an ISO-8601 UTC timestamp."""
    return datetime.now(UTC).isoformat()


def _require_string(value: Any, field: str, *, allow_empty: bool = False) -> str:
    """Require a string, optionally allowing an empty value."""
    if not isinstance(value, str):
        raise CustomGroupValidationError(f"{field} must be a string.")
    cleaned = value.strip()
    if not allow_empty and not cleaned:
        raise CustomGroupValidationError(f"{field} cannot be empty.")
    return cleaned if not allow_empty else value


def _normalise_kind(value: Any) -> str:
    """Validate a Notify Studio custom group kind."""
    kind = _require_string(value, "group.kind").casefold()
    if kind not in _GROUP_KINDS:
        raise CustomGroupValidationError("group.kind must be either category or area.")
    return kind


def _normalise_member(value: Any) -> dict[str, str]:
    """Validate a notification-source membership record."""
    if not isinstance(value, Mapping):
        raise CustomGroupValidationError("group.members entries must be objects.")

    source_key = _require_string(value.get("source_key"), "member.source_key")
    name = _require_string(value.get("name"), "member.name")
    entity_id = value.get("entity_id")
    if entity_id is None:
        entity_id = ""
    entity_id = _require_string(entity_id, "member.entity_id", allow_empty=True).strip()

    return {
        "source_key": source_key,
        "name": name,
        "entity_id": entity_id,
    }


def _normalise_group(value: Any) -> dict[str, Any] | None:
    """Return a repaired group record or None when the stored record is unusable."""
    if not isinstance(value, Mapping):
        return None

    try:
        group_id = _require_string(value.get("id"), "group.id")
        name = _require_string(value.get("name"), "group.name")
        kind = _normalise_kind(value.get("kind"))
    except CustomGroupValidationError:
        return None

    members_value = value.get("members", [])
    members: list[dict[str, str]] = []
    if isinstance(members_value, list):
        seen: set[str] = set()
        for item in members_value:
            try:
                member = _normalise_member(item)
            except CustomGroupValidationError:
                continue
            if member["source_key"] in seen:
                continue
            seen.add(member["source_key"])
            members.append(member)

    created_at = value.get("created_at")
    updated_at = value.get("updated_at")
    timestamp = _now()
    return {
        "id": group_id,
        "name": name,
        "kind": kind,
        "members": members,
        "created_at": created_at if isinstance(created_at, str) else timestamp,
        "updated_at": updated_at if isinstance(updated_at, str) else timestamp,
    }


def _group_control_key(group_id: str) -> str:
    """Return the stable key for a category or area bulk control."""
    return f"{group_id}{_GROUP_CONTROL_SUFFIX}"


def _member_control_key(group_id: str, source_key: str) -> str:
    """Return the stable key for an individual grouped notification source."""
    return f"{group_id}{_MEMBER_CONTROL_SEPARATOR}{source_key}"


def _valid_control_keys(groups: list[dict[str, Any]]) -> set[str]:
    """Return every currently valid group or member control key."""
    keys: set[str] = set()
    for group in groups:
        group_id = str(group["id"])
        keys.add(_group_control_key(group_id))
        for member in group["members"]:
            keys.add(_member_control_key(group_id, str(member["source_key"])))
    return keys


def _normalise_favorite_control_keys(
    value: Any,
    groups: list[dict[str, Any]],
) -> list[str]:
    """Return valid, unique favorite control keys in their saved display order."""
    if not isinstance(value, list):
        return []

    valid_keys = _valid_control_keys(groups)
    favorites: list[str] = []
    seen: set[str] = set()
    for item in value:
        if not isinstance(item, str):
            continue
        key = item.strip()
        if not key or key in seen or key not in valid_keys:
            continue
        seen.add(key)
        favorites.append(key)
        if len(favorites) >= _MAX_FAVORITE_CONTROLS:
            break
    return favorites


class NotifyStudioCustomGroupStore:
    """Versioned storage wrapper for user-defined categories and areas.

    Groups and quick-control favorites are local to a single Home Assistant
    instance. They never modify Home Assistant's native Area, Category, or
    Label registries.
    """

    def __init__(self, hass: HomeAssistant) -> None:
        """Initialise the Home Assistant storage helper."""
        self._store: Store[dict[str, Any]] = Store(
            hass,
            CUSTOM_GROUP_STORE_VERSION,
            CUSTOM_GROUP_STORE_KEY,
        )

    async def _async_data(self) -> dict[str, Any]:
        """Load and repair stored groups and saved quick-control favorites."""
        data = await self._store.async_load()
        if not isinstance(data, Mapping):
            return {"groups": [], "favorite_control_keys": []}

        raw_groups = data.get("groups", [])
        if not isinstance(raw_groups, list):
            raw_groups = []

        groups: list[dict[str, Any]] = []
        seen_ids: set[str] = set()
        for raw_group in raw_groups:
            group = _normalise_group(raw_group)
            if group is None or group["id"] in seen_ids:
                continue
            seen_ids.add(group["id"])
            groups.append(group)

        return {
            "groups": groups,
            "favorite_control_keys": _normalise_favorite_control_keys(
                data.get("favorite_control_keys", []),
                groups,
            ),
        }

    @staticmethod
    def _sorted(groups: list[dict[str, Any]]) -> list[dict[str, Any]]:
        """Return a copied, consistent ordering for panel clients."""
        return sorted(
            (deepcopy(group) for group in groups),
            key=lambda item: (str(item["kind"]), str(item["name"]).casefold()),
        )

    @staticmethod
    def _storage_payload(
        groups: list[dict[str, Any]],
        favorite_control_keys: list[str],
    ) -> dict[str, Any]:
        """Build a clean payload and prune favorites for removed controls."""
        return {
            "groups": groups,
            "favorite_control_keys": _normalise_favorite_control_keys(
                favorite_control_keys,
                groups,
            ),
        }

    async def async_list(self) -> list[dict[str, Any]]:
        """Return all custom groups in a stable order."""
        data = await self._async_data()
        return self._sorted(data["groups"])

    async def async_list_favorite_controls(self) -> list[str]:
        """Return favorite quick-control keys in the user-selected order."""
        data = await self._async_data()
        return deepcopy(data["favorite_control_keys"])

    async def async_set_favorite_controls(self, control_keys: list[str]) -> list[str]:
        """Persist favorite controls after validating they still exist."""
        if len(control_keys) > _MAX_FAVORITE_CONTROLS:
            raise CustomGroupValidationError(
                f"A maximum of {_MAX_FAVORITE_CONTROLS} favorite controls can be stored."
            )

        requested: list[str] = []
        for index, key in enumerate(control_keys):
            requested.append(_require_string(key, f"favorite_control_keys[{index}]"))

        data = await self._async_data()
        favorites = _normalise_favorite_control_keys(requested, data["groups"])
        # Save every explicit user change immediately. This keeps the selected
        # quick controls independent from responsive layout calculations in
        # the browser and ensures they survive a Home Assistant restart.
        await self._store.async_save(self._storage_payload(data["groups"], favorites))
        return deepcopy(favorites)

    async def async_get(self, group_id: str) -> dict[str, Any]:
        """Return one custom group or raise a clear validation error."""
        group_id = _require_string(group_id, "group_id")
        data = await self._async_data()
        group = next((item for item in data["groups"] if item["id"] == group_id), None)
        if group is None:
            raise CustomGroupValidationError("The selected custom category or area no longer exists.")
        return deepcopy(group)

    async def async_create(self, *, name: str, kind: str) -> dict[str, Any]:
        """Create one user-defined category or area."""
        name = _require_string(name, "group.name")
        if len(name) > 80:
            raise CustomGroupValidationError("group.name must be 80 characters or fewer.")
        kind = _normalise_kind(kind)

        data = await self._async_data()
        duplicate = next(
            (
                item
                for item in data["groups"]
                if item["kind"] == kind and str(item["name"]).casefold() == name.casefold()
            ),
            None,
        )
        if duplicate is not None:
            raise CustomGroupValidationError(
                f'A custom {kind} named "{name}" already exists.'
            )

        timestamp = _now()
        record: dict[str, Any] = {
            "id": str(uuid4()),
            "name": name,
            "kind": kind,
            "members": [],
            "created_at": timestamp,
            "updated_at": timestamp,
        }
        groups = [*data["groups"], record]
        await self._store.async_save(
            self._storage_payload(groups, data["favorite_control_keys"])
        )
        return deepcopy(record)

    async def async_rename(self, *, group_id: str, name: str) -> dict[str, Any]:
        """Rename one custom category or area without changing its memberships."""
        group_id = _require_string(group_id, "group_id")
        name = _require_string(name, "group.name")
        if len(name) > 80:
            raise CustomGroupValidationError("group.name must be 80 characters or fewer.")

        data = await self._async_data()
        groups = [dict(item) for item in data["groups"]]
        index = next((idx for idx, item in enumerate(groups) if item["id"] == group_id), None)
        if index is None:
            raise CustomGroupValidationError("The selected custom category or area no longer exists.")

        current = groups[index]
        duplicate = next(
            (
                item
                for item in groups
                if item["id"] != group_id
                and item["kind"] == current["kind"]
                and str(item["name"]).casefold() == name.casefold()
            ),
            None,
        )
        if duplicate is not None:
            raise CustomGroupValidationError(
                f'A custom {current["kind"]} named "{name}" already exists.'
            )

        current["name"] = name
        current["updated_at"] = _now()
        groups[index] = current
        await self._store.async_save(
            self._storage_payload(groups, data["favorite_control_keys"])
        )
        return deepcopy(current)

    async def async_delete(self, group_id: str) -> None:
        """Delete a custom category or area and all related quick controls."""
        group_id = _require_string(group_id, "group_id")
        data = await self._async_data()
        groups = [dict(item) for item in data["groups"]]
        retained = [item for item in groups if item["id"] != group_id]
        if len(retained) == len(groups):
            raise CustomGroupValidationError("The selected custom category or area no longer exists.")
        await self._store.async_save(
            self._storage_payload(retained, data["favorite_control_keys"])
        )

    async def async_set_source_memberships(
        self,
        *,
        source_key: str,
        source_name: str,
        entity_id: str | None,
        group_ids: list[str],
    ) -> list[dict[str, Any]]:
        """Replace the selected source memberships across all custom groups."""
        member = _normalise_member(
            {
                "source_key": source_key,
                "name": source_name,
                "entity_id": entity_id or "",
            }
        )
        selected_ids = {_require_string(group_id, "group_ids entry") for group_id in group_ids}
        data = await self._async_data()
        groups = [deepcopy(item) for item in data["groups"]]
        existing_ids = {str(item["id"]) for item in groups}
        missing_ids = selected_ids - existing_ids
        if missing_ids:
            raise CustomGroupValidationError(
                "One or more selected custom categories or areas no longer exist."
            )

        changed = False
        timestamp = _now()
        for group in groups:
            original_members = list(group["members"])
            members = [
                item for item in original_members if item.get("source_key") != member["source_key"]
            ]
            if group["id"] in selected_ids:
                members.append(deepcopy(member))
            if members != original_members:
                group["members"] = members
                group["updated_at"] = timestamp
                changed = True

        if changed:
            await self._store.async_save(
                self._storage_payload(groups, data["favorite_control_keys"])
            )
        return self._sorted(groups)

    async def async_set_group_members(
        self,
        *,
        group_id: str,
        members: list[Mapping[str, Any]],
    ) -> list[dict[str, Any]]:
        """Replace the members of one custom category or area atomically."""
        group_id = _require_string(group_id, "group_id")
        if len(members) > 1000:
            raise CustomGroupValidationError("A custom category or area can contain at most 1000 members.")

        normalised_members: list[dict[str, str]] = []
        seen_source_keys: set[str] = set()
        for raw_member in members:
            member = _normalise_member(raw_member)
            if member["source_key"] in seen_source_keys:
                continue
            seen_source_keys.add(member["source_key"])
            normalised_members.append(member)

        data = await self._async_data()
        groups = [deepcopy(item) for item in data["groups"]]
        index = next((idx for idx, item in enumerate(groups) if item["id"] == group_id), None)
        if index is None:
            raise CustomGroupValidationError("The selected custom category or area no longer exists.")

        current = groups[index]
        if current["members"] != normalised_members:
            current["members"] = normalised_members
            current["updated_at"] = _now()
            groups[index] = current
            await self._store.async_save(
                self._storage_payload(groups, data["favorite_control_keys"])
            )
        return self._sorted(groups)


def async_get_custom_group_store(hass: HomeAssistant) -> NotifyStudioCustomGroupStore:
    """Return the per-instance custom group store."""
    domain_data = hass.data.setdefault(DOMAIN, {})
    store = domain_data.get(DATA_CUSTOM_GROUP_STORE)
    if isinstance(store, NotifyStudioCustomGroupStore):
        return store

    store = NotifyStudioCustomGroupStore(hass)
    domain_data[DATA_CUSTOM_GROUP_STORE] = store
    return store
