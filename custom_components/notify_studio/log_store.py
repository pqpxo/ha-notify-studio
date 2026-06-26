# version 13
"""Bounded, redacted application log storage for Notify Studio."""

from __future__ import annotations

from collections import deque
from datetime import datetime, timezone
import logging
from typing import Any, Literal

from homeassistant.core import HomeAssistant

from .const import DATA_LOG_STORE, DOMAIN

_LOGGER = logging.getLogger(__name__)

LogLevel = Literal["info", "warning", "error"]
MAX_LOG_ENTRIES = 250


class NotifyStudioLogStore:
    """Keep recent Notify Studio activity in memory and mirror it to HA logs."""

    def __init__(self) -> None:
        """Initialise a bounded, newest-first collection."""
        self._entries: deque[dict[str, Any]] = deque(maxlen=MAX_LOG_ENTRIES)

    def add(
        self,
        level: LogLevel,
        event: str,
        message: str,
        *,
        entity_id: str | None = None,
        detail: str | None = None,
    ) -> None:
        """Record a safe operational event without notification payload content."""
        entry: dict[str, Any] = {
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "level": level,
            "event": event,
            "message": message,
        }
        if entity_id:
            entry["entity_id"] = entity_id
        if detail:
            entry["detail"] = detail[:1000]

        self._entries.appendleft(entry)

        log_level = {
            "info": logging.INFO,
            "warning": logging.WARNING,
            "error": logging.ERROR,
        }[level]
        suffix = f" ({entity_id})" if entity_id else ""
        _LOGGER.log(log_level, "%s%s", message, suffix)

    def list_entries(self) -> list[dict[str, Any]]:
        """Return a JSON-safe copy of newest-first entries."""
        return [dict(entry) for entry in self._entries]

    def clear(self) -> None:
        """Clear the in-memory event history."""
        self._entries.clear()


def async_get_log_store(hass: HomeAssistant) -> NotifyStudioLogStore:
    """Return the process-local log store for this Home Assistant instance."""
    data = hass.data.setdefault(DOMAIN, {})
    store = data.get(DATA_LOG_STORE)
    if isinstance(store, NotifyStudioLogStore):
        return store

    store = NotifyStudioLogStore()
    data[DATA_LOG_STORE] = store
    return store
