# version 15
"""Set up the Notify Studio custom integration."""

from __future__ import annotations

from pathlib import Path

from homeassistant.components import panel_custom
from homeassistant.components.http import StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.typing import ConfigType

from .const import (
    DATA_REGISTERED,
    DOMAIN,
    NAME,
    PANEL_COMPONENT_NAME,
    PANEL_ICON,
    PANEL_MODULE_FILENAME,
    PANEL_URL_PATH,
    STATIC_URL_BASE,
    VERSION,
)
from .log_store import async_get_log_store
from .websocket_api import async_register_commands

# Notify Studio is configured exclusively through its Config Flow.
# YAML configuration is deliberately unsupported.
CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Set up Notify Studio before a config entry is loaded."""
    del config
    hass.data.setdefault(DOMAIN, {})
    return True


async def async_setup_entry(hass: HomeAssistant, _entry: ConfigEntry) -> bool:
    """Set up Notify Studio from a config entry."""
    data = hass.data.setdefault(DOMAIN, {})
    if data.get(DATA_REGISTERED):
        return True

    frontend_path = Path(__file__).parent / "frontend"
    await hass.http.async_register_static_paths(
        [
            StaticPathConfig(
                STATIC_URL_BASE,
                str(frontend_path),
                cache_headers=False,
            )
        ]
    )

    async_register_commands(hass)
    async_get_log_store(hass).add(
        "info",
        "integration_started",
        "Notify Studio started.",
    )

    await panel_custom.async_register_panel(
        hass=hass,
        webcomponent_name=PANEL_COMPONENT_NAME,
        frontend_url_path=PANEL_URL_PATH,
        config_panel_domain=DOMAIN,
        sidebar_title=NAME,
        sidebar_icon=PANEL_ICON,
        module_url=f"{STATIC_URL_BASE}/{PANEL_MODULE_FILENAME}?v={VERSION}",
        embed_iframe=False,
        require_admin=True,
    )

    data[DATA_REGISTERED] = True
    return True


async def async_unload_entry(_hass: HomeAssistant, _entry: ConfigEntry) -> bool:
    """Unload a Notify Studio config entry."""
    # The panel and WebSocket commands are process-wide registrations. They are
    # removed when Home Assistant restarts, which is the supported clean-up path
    # for this single-instance sidebar panel.
    return True
