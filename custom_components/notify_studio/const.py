# version 13
"""Constants for Notify Studio."""

from __future__ import annotations

DOMAIN = "notify_studio"
NAME = "Notify Studio"
VERSION = "0.1.13"

PANEL_URL_PATH = "notify-studio"
PANEL_COMPONENT_NAME = "notify-studio-panel"
PANEL_ICON = "mdi:cellphone-message"
STATIC_URL_BASE = "/notify_studio_static"
PANEL_MODULE_FILENAME = "notify-studio-panel.js"
PANEL_LOGO_FILENAME = "notify-studio-logo.png"

DATA_REGISTERED = f"{DOMAIN}_registered"
DATA_TARGETS = f"{DOMAIN}_targets"
DATA_TEMPLATE_STORE = f"{DOMAIN}_template_store"
DATA_LOG_STORE = f"{DOMAIN}_log_store"

TEMPLATE_STORE_KEY = f"{DOMAIN}.templates"
TEMPLATE_STORE_VERSION = 1

WS_INFO = f"{DOMAIN}/info"
WS_LIST_NOTIFIERS = f"{DOMAIN}/list_notifiers"
WS_LIST_AUTOMATIONS = f"{DOMAIN}/list_automations"
WS_LIST_RUNNABLES = f"{DOMAIN}/list_runnables"
WS_LIST_RECENT_PUSH_RUNNABLES = f"{DOMAIN}/list_recent_push_runnables"
WS_LIST_LOGS = f"{DOMAIN}/list_logs"
WS_CLEAR_LOGS = f"{DOMAIN}/clear_logs"
WS_TOGGLE_AUTOMATION = f"{DOMAIN}/toggle_automation"
WS_RUN_RUNNABLE = f"{DOMAIN}/run_runnable"
WS_SCAN_NOTIFY_USAGE = f"{DOMAIN}/scan_notify_usage"
WS_RENDER_PREVIEW = f"{DOMAIN}/render_preview"
WS_VALIDATE_PAYLOAD = f"{DOMAIN}/validate_payload"
WS_SEND_TEST = f"{DOMAIN}/send_test"
WS_GENERATE_YAML = f"{DOMAIN}/generate_yaml"
WS_LIST_TEMPLATES = f"{DOMAIN}/list_templates"
WS_SAVE_TEMPLATE = f"{DOMAIN}/save_template"
WS_DELETE_TEMPLATE = f"{DOMAIN}/delete_template"

NOTIFY_DOMAIN = "notify"
MOBILE_APP_SERVICE_PREFIX = "mobile_app_"
