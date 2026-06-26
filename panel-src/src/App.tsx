// version 20
import { type CSSProperties, type ReactNode, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { callWs } from "./api";
import { panelStyles } from "./styles";
import type {
  ActionHandler,
  ActionRouteType,
  ComposerAction,
  CustomGroup,
  CustomGroupKind,
  CustomGroupMember,
  GeneratedYamlResponse,
  HomeAssistant,
  InfoResponse,
  IntegrationLogEntry,
  LogLevel,
  NotificationDraft,
  NotificationPayload,
  NotificationTemplate,
  NotifierResponse,
  NotifierTarget,
  NotifyUsage,
  Platform,
  PreviewResponse,
  RecentPushRunnable,
  RunnableSummary,
} from "./types";

type Tab = "compose" | "audit" | "templates" | "logs";
type CustomGroupControlKind = "group" | "member";

interface AppProps {
  hass?: HomeAssistant;
}

interface CustomGroupControl {
  key: string;
  type: CustomGroupControlKind;
  group: CustomGroup;
  member?: CustomGroupMember;
}

const EMPTY_PREVIEW: PreviewResponse = { rendered: {}, errors: {} };
const LOGO_URL = "/notify_studio_static/notify-studio-logo.png?v=0.1.20";
const QUICK_CONTROL_MIN_WIDTH = 220;
const QUICK_CONTROL_GAP = 10;
const QUICK_CONTROL_TOGGLE_WIDTH = 50;

function slugifyForId(value: string): string {
  return value
    .toUpperCase()
    .trim()
    .replace(/[^A-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 32);
}

function createActionId(title: string, index: number): string {
  const base = slugifyForId(title) || "ACTION";
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `NOTIFY_STUDIO_${base}_${index}_${random}`;
}

function createComposerAction(index: number): ComposerAction {
  const title = `Action ${index}`;
  return { id: createActionId(title, index), title, route: "event" };
}

function createPersistentTag(title: string, message: string): string {
  const base = slugifyForId(title || message).toLowerCase() || "notification";
  return `notify_studio_persistent_${base}`;
}

function platformLabel(platform: Platform): string {
  if (platform === "ios") return "iOS";
  if (platform === "android") return "Android";
  if (platform === "other") return "Other";
  return "Unknown";
}

function badgeClass(platform: Platform): string {
  if (platform === "android") return "ns-badge ns-badge--android";
  if (platform === "ios") return "ns-badge ns-badge--ios";
  return "ns-badge";
}

function actionRouteLabel(route: ActionRouteType): string {
  switch (route) {
    case "script": return "Run script";
    case "service": return "Run Home Assistant action";
    case "uri": return "Open URI / dashboard";
    case "reply": return "Ask for text reply";
    default: return "Send event only";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asBoolean(value: unknown): boolean {
  return value === true;
}

function formatDate(value?: string | null): string {
  if (!value) return "Never recorded";
  const date = new Date(value);
  if (Number.isNaN(date.valueOf())) return value;
  return date.toLocaleString();
}

function parseServiceData(value: string): Record<string, unknown> {
  if (!value.trim()) return {};
  let parsed: unknown;
  try {
    parsed = JSON.parse(value);
  } catch {
    throw new Error("Home Assistant action data must be valid JSON, for example {\"entity_id\": \"light.hall\"}.");
  }
  if (!isRecord(parsed)) {
    throw new Error("Home Assistant action data must be a JSON object.");
  }
  return parsed;
}

function runtimeBadgeClass(runnable: RunnableSummary): string {
  return `ns-badge ns-badge--${runnable.status}`;
}

function customGroupControlKey(groupId: string): string {
  return `${groupId}::group`;
}

function customGroupMemberControlKey(groupId: string, sourceKey: string): string {
  return `${groupId}::member::${sourceKey}`;
}

function logBadgeClass(level: LogLevel): string {
  return `ns-badge ns-badge--log-${level}`;
}

function logLevelLabel(level: LogLevel): string {
  return level.charAt(0).toUpperCase() + level.slice(1);
}

export default function App({ hass }: AppProps) {
  const hassRef = useRef<HomeAssistant | undefined>(hass);
  hassRef.current = hass;

  const [tab, setTab] = useState<Tab>("audit");
  const [hassReady, setHassReady] = useState(Boolean(hass));
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<InfoResponse | null>(null);
  const [targets, setTargets] = useState<NotifierTarget[]>([]);
  const [runnables, setRunnables] = useState<RunnableSummary[]>([]);
  const [recentPushRunnables, setRecentPushRunnables] = useState<RecentPushRunnable[]>([]);
  const [recentPushLoading, setRecentPushLoading] = useState(true);
  const [logs, setLogs] = useState<IntegrationLogEntry[]>([]);
  const [logsLoading, setLogsLoading] = useState(false);
  const [logLevelFilter, setLogLevelFilter] = useState<"" | LogLevel>("");
  const [templates, setTemplates] = useState<NotificationTemplate[]>([]);
  const [customGroups, setCustomGroups] = useState<CustomGroup[]>([]);
  const [favoriteGroupControlKeys, setFavoriteGroupControlKeys] = useState<string[]>([]);
  const [showAllCustomGroupControls, setShowAllCustomGroupControls] = useState(false);
  const [quickControlCapacity, setQuickControlCapacity] = useState(7);
  const [quickControlCapacityMeasured, setQuickControlCapacityMeasured] = useState(false);
  const [customGroupsLoading, setCustomGroupsLoading] = useState(false);
  const [customGroupManagerOpen, setCustomGroupManagerOpen] = useState(false);
  const [newCustomGroupName, setNewCustomGroupName] = useState("");
  const [newCustomGroupKind, setNewCustomGroupKind] = useState<CustomGroupKind>("category");
  const [customGroupBusy, setCustomGroupBusy] = useState<"create" | "selection" | "toggle" | "favorites" | null>(null);
  const [selectedCustomGroupId, setSelectedCustomGroupId] = useState<string | null>(null);
  const [selectedGroupSourceKeys, setSelectedGroupSourceKeys] = useState<string[]>([]);
  const [auditStudioGroupFilter, setAuditStudioGroupFilter] = useState("");
  const [usage, setUsage] = useState<NotifyUsage[] | null>(null);
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditSourceFilter, setAuditSourceFilter] = useState<"" | "automation" | "script">("");
  const [auditCategoryFilter, setAuditCategoryFilter] = useState("");
  const [auditLabelFilter, setAuditLabelFilter] = useState("");
  const [auditDeviceFilter, setAuditDeviceFilter] = useState("");
  const [selectedTargetId, setSelectedTargetId] = useState("");
  const [selectedTemplateId, setSelectedTemplateId] = useState("");
  const [message, setMessage] = useState("A test notification from Notify Studio.");
  const [title, setTitle] = useState("Notify Studio");
  const [tag, setTag] = useState("");
  const [attachment, setAttachment] = useState("");
  const [openUrl, setOpenUrl] = useState("");
  const [subject, setSubject] = useState("");
  const [channel, setChannel] = useState("");
  const [importance, setImportance] = useState("");
  const [priority, setPriority] = useState("");
  const [color, setColor] = useState("");
  const [notificationIcon, setNotificationIcon] = useState("");
  const [timeout, setTimeoutValue] = useState("");
  const [sticky, setSticky] = useState(false);
  const [persistent, setPersistent] = useState(false);
  const [actionable, setActionable] = useState(false);
  const [notificationActions, setNotificationActions] = useState<ComposerAction[]>([]);
  const [subtitle, setSubtitle] = useState("");
  const [sound, setSound] = useState("");
  const [badge, setBadge] = useState("");
  const [interruptionLevel, setInterruptionLevel] = useState("");
  const [threadId, setThreadId] = useState("");
  const [preview, setPreview] = useState<PreviewResponse>(EMPTY_PREVIEW);
  const [yaml, setYaml] = useState("");
  const [busy, setBusy] = useState<"test" | "yaml" | "template" | null>(null);
  const [templateName, setTemplateName] = useState("");
  const [templateDescription, setTemplateDescription] = useState("");
  const [editingTemplateId, setEditingTemplateId] = useState<string | null>(null);
  const [liveMessage, setLiveMessage] = useState("");
  const previewRequestRef = useRef(0);
  const quickControlsPanelRef = useRef<HTMLDivElement | null>(null);

  const selectedTarget = useMemo(
    () => targets.find((target) => target.id === selectedTargetId) ?? null,
    [targets, selectedTargetId],
  );
  const scripts = useMemo(
    () => runnables.filter((item) => item.kind === "script"),
    [runnables],
  );
  const visibleLogs = useMemo(
    () => (logLevelFilter ? logs.filter((entry) => entry.level === logLevelFilter) : logs),
    [logLevelFilter, logs],
  );

  const customGroupsBySourceKey = useMemo(() => {
    const memberships = new Map<string, CustomGroup[]>();
    for (const group of customGroups) {
      for (const member of group.members) {
        const groups = memberships.get(member.source_key) ?? [];
        groups.push(group);
        memberships.set(member.source_key, groups);
      }
    }
    return memberships;
  }, [customGroups]);

  const runnableByEntityId = useMemo(() => {
    const map = new Map<string, RunnableSummary>();
    for (const runnable of runnables) map.set(runnable.entity_id, runnable);
    for (const item of usage ?? []) {
      if (item.runtime) map.set(item.runtime.entity_id, item.runtime);
    }
    return map;
  }, [runnables, usage]);

  const customGroupStates = useMemo(() => {
    const states = new Map<string, { automations: number; enabled: number; disabled: number }>();
    for (const group of customGroups) {
      let automations = 0;
      let enabled = 0;
      let disabled = 0;
      for (const member of group.members) {
        if (!member.entity_id.startsWith("automation.")) continue;
        automations += 1;
        const runtime = runnableByEntityId.get(member.entity_id);
        if (runtime?.enabled === true) enabled += 1;
        else if (runtime?.enabled === false) disabled += 1;
      }
      states.set(group.id, { automations, enabled, disabled });
    }
    return states;
  }, [customGroups, runnableByEntityId]);

  const customGroupControls = useMemo<CustomGroupControl[]>(() => customGroups.flatMap((group) => [
    { key: customGroupControlKey(group.id), type: "group" as const, group },
    ...[...group.members]
      .sort((left, right) => left.name.localeCompare(right.name))
      .map((member) => ({
        key: customGroupMemberControlKey(group.id, member.source_key),
        type: "member" as const,
        group,
        member,
      })),
  ]), [customGroups]);

  const customGroupControlsByKey = useMemo(
    () => new Map(customGroupControls.map((control) => [control.key, control])),
    [customGroupControls],
  );

  const favoriteCustomGroupControls = useMemo(
    () => favoriteGroupControlKeys
      .map((key) => customGroupControlsByKey.get(key))
      .filter((control): control is CustomGroupControl => control !== undefined),
    [customGroupControlsByKey, favoriteGroupControlKeys],
  );

  const auditFilterOptions = useMemo(() => {
    const categories = new Set<string>();
    const labels = new Set<string>();
    const devices = new Set<string>();
    for (const item of usage ?? []) {
      if (item.category) categories.add(item.category);
      for (const label of item.labels ?? []) labels.add(label);
      for (const device of item.notify_devices ?? item.notifiers) devices.add(device);
    }
    return {
      categories: [...categories].sort((left, right) => left.localeCompare(right)),
      labels: [...labels].sort((left, right) => left.localeCompare(right)),
      devices: [...devices].sort((left, right) => left.localeCompare(right)),
    };
  }, [usage]);

  const filteredAuditUsage = useMemo(() => (usage ?? []).filter((item) => {
    if (auditSourceFilter && item.source !== auditSourceFilter) return false;
    if (auditCategoryFilter && item.category !== auditCategoryFilter) return false;
    if (auditLabelFilter && !(item.labels ?? []).includes(auditLabelFilter)) return false;
    if (auditDeviceFilter && !(item.notify_devices ?? item.notifiers).includes(auditDeviceFilter)) return false;
    if (auditStudioGroupFilter) {
      const sourceKey = `${item.source}:${item.id}`;
      if (!customGroupsBySourceKey.get(sourceKey)?.some((group) => group.id === auditStudioGroupFilter)) return false;
    }
    return true;
  }), [auditCategoryFilter, auditDeviceFilter, auditLabelFilter, auditSourceFilter, auditStudioGroupFilter, customGroupsBySourceKey, usage]);


  const announce = useCallback((messageText: string) => {
    setLiveMessage(messageText);
  }, []);

  const showError = useCallback((error: unknown, fallback: string) => {
    const messageText = error instanceof Error ? error.message : fallback;
    announce(messageText);
    window.alert(messageText);
  }, [announce]);

  const loadCore = useCallback(async () => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    const [nextInfo, notifierResult, runnableResult, templateResult, customGroupResult, favoriteResult] = await Promise.all([
      callWs<InfoResponse>(activeHass, "notify_studio/info"),
      callWs<NotifierResponse>(activeHass, "notify_studio/list_notifiers"),
      callWs<RunnableSummary[]>(activeHass, "notify_studio/list_runnables"),
      callWs<NotificationTemplate[]>(activeHass, "notify_studio/list_templates"),
      callWs<CustomGroup[]>(activeHass, "notify_studio/list_custom_groups"),
      callWs<string[]>(activeHass, "notify_studio/list_custom_group_favorites"),
    ]);
    setInfo(nextInfo);
    setTargets(notifierResult.services);
    setRunnables(runnableResult);
    setTemplates(templateResult);
    setCustomGroups(customGroupResult);
    setFavoriteGroupControlKeys(favoriteResult);
  }, []);

  const loadCustomGroups = useCallback(async () => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    setCustomGroupsLoading(true);
    try {
      const [groups, favorites] = await Promise.all([
        callWs<CustomGroup[]>(activeHass, "notify_studio/list_custom_groups"),
        callWs<string[]>(activeHass, "notify_studio/list_custom_group_favorites"),
      ]);
      setCustomGroups(groups);
      setFavoriteGroupControlKeys(favorites);
    } catch (error) {
      showError(error, "Unable to load Notify Studio custom categories and areas.");
    } finally {
      setCustomGroupsLoading(false);
    }
  }, [showError]);

  const saveFavoriteGroupControls = useCallback(async (
    controlKeys: string[],
    successMessage?: string,
  ) => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    setCustomGroupBusy("favorites");
    try {
      const favorites = await callWs<string[]>(
        activeHass,
        "notify_studio/set_custom_group_favorites",
        { control_keys: controlKeys },
      );
      setFavoriteGroupControlKeys(favorites);
      if (successMessage) announce(successMessage);
    } catch (error) {
      showError(error, "Unable to save quick-control favorites.");
    } finally {
      setCustomGroupBusy(null);
    }
  }, [announce, showError]);

  const toggleFavoriteGroupControl = (controlKey: string) => {
    const current = favoriteGroupControlKeys.filter((key) => customGroupControlsByKey.has(key));
    const isFavorite = current.includes(controlKey);
    if (!isFavorite && current.length >= quickControlCapacity) {
      announce(`Only ${quickControlCapacity} favorite control${quickControlCapacity === 1 ? "" : "s"} fit in the quick row. Remove a star first.`);
      return;
    }
    const next = isFavorite
      ? current.filter((key) => key !== controlKey)
      : [...current, controlKey];
    void saveFavoriteGroupControls(next, isFavorite ? "Quick control removed from favorites." : "Quick control added to favorites.");
  };

  useEffect(() => {
    const element = quickControlsPanelRef.current;
    if (!element || !customGroupControls.length) return undefined;

    const updateCapacity = () => {
      const width = element.getBoundingClientRect().width;
      const isMobile = window.matchMedia("(max-width: 700px)").matches;
      const availableWidth = Math.max(1, width - QUICK_CONTROL_TOGGLE_WIDTH - QUICK_CONTROL_GAP);
      const desktopCapacity = Math.max(
        1,
        Math.floor((availableWidth + QUICK_CONTROL_GAP) / (QUICK_CONTROL_MIN_WIDTH + QUICK_CONTROL_GAP)),
      );
      setQuickControlCapacity(isMobile ? 7 : desktopCapacity);
      setQuickControlCapacityMeasured(true);
    };

    updateCapacity();
    const observer = new ResizeObserver(updateCapacity);
    observer.observe(element);
    window.addEventListener("resize", updateCapacity);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateCapacity);
    };
  }, [customGroupControls.length]);

  useEffect(() => {
    if (!quickControlCapacityMeasured || favoriteCustomGroupControls.length <= quickControlCapacity) return undefined;
    const retainedKeys = favoriteCustomGroupControls
      .slice(0, quickControlCapacity)
      .map((control) => control.key);
    const timeout = window.setTimeout(() => {
      void saveFavoriteGroupControls(
        retainedKeys,
        "Screen width changed, so excess quick-control favorites were removed.",
      );
    }, 250);
    return () => window.clearTimeout(timeout);
  }, [favoriteCustomGroupControls, quickControlCapacity, quickControlCapacityMeasured, saveFavoriteGroupControls]);

  const createCustomGroup = async () => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    const name = newCustomGroupName.trim();
    if (!name) {
      showError(new Error("Enter a name for the custom category or area."), "Enter a group name.");
      return;
    }

    setCustomGroupBusy("create");
    try {
      const group = await callWs<CustomGroup>(activeHass, "notify_studio/create_custom_group", {
        name,
        kind: newCustomGroupKind,
      });
      setCustomGroups((current) => [...current, group].sort((left, right) => (
        left.kind === right.kind
          ? left.name.localeCompare(right.name)
          : left.kind.localeCompare(right.kind)
      )));
      setNewCustomGroupName("");
      announce(`Custom ${group.kind} “${group.name}” created.`);
    } catch (error) {
      showError(error, "Unable to create the custom category or area.");
    } finally {
      setCustomGroupBusy(null);
    }
  };

  const renameCustomGroup = async (group: CustomGroup) => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    const name = window.prompt(`Rename custom ${group.kind}:`, group.name)?.trim();
    if (!name || name === group.name) return;

    try {
      const updated = await callWs<CustomGroup>(activeHass, "notify_studio/rename_custom_group", {
        group_id: group.id,
        name,
      });
      setCustomGroups((current) => current.map((item) => item.id === updated.id ? updated : item));
      announce(`Custom ${updated.kind} renamed to “${updated.name}”.`);
    } catch (error) {
      showError(error, "Unable to rename the custom category or area.");
    }
  };

  const deleteCustomGroup = async (group: CustomGroup) => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    if (!window.confirm(`Delete the custom ${group.kind} “${group.name}”? Its local notification assignments will be removed, but Home Assistant automations and scripts will not be changed.`)) return;

    try {
      await callWs<{ id: string }>(activeHass, "notify_studio/delete_custom_group", { group_id: group.id });
      setCustomGroups((current) => current.filter((item) => item.id !== group.id));
      setFavoriteGroupControlKeys((current) => current.filter((key) => !key.startsWith(`${group.id}::`)));
      if (auditStudioGroupFilter === group.id) setAuditStudioGroupFilter("");
      announce(`Custom ${group.kind} “${group.name}” deleted.`);
    } catch (error) {
      showError(error, "Unable to delete the custom category or area.");
    }
  };

  const sourceKey = (item: NotifyUsage): string => `${item.source}:${item.id}`;

  const activeGroupSelection = selectedCustomGroupId
    ? customGroups.find((group) => group.id === selectedCustomGroupId) ?? null
    : null;

  const startCustomGroupSelection = (group: CustomGroup) => {
    setSelectedCustomGroupId(group.id);
    setSelectedGroupSourceKeys(group.members.map((member) => member.source_key));
    announce(`Select notification sources for ${group.kind} “${group.name}”.`);
  };

  const cancelCustomGroupSelection = () => {
    setSelectedCustomGroupId(null);
    setSelectedGroupSourceKeys([]);
    announce("Custom group selection cancelled.");
  };

  const toggleSelectedGroupSource = (item: NotifyUsage, selected: boolean) => {
    const key = sourceKey(item);
    setSelectedGroupSourceKeys((current) => (
      selected ? [...new Set([...current, key])] : current.filter((itemKey) => itemKey !== key)
    ));
  };

  const saveCustomGroupSelection = async () => {
    const activeHass = hassRef.current;
    if (!activeHass || !activeGroupSelection) return;

    setCustomGroupBusy("selection");
    try {
      const currentSources = usage ?? [];
      const currentSourceKeys = new Set(currentSources.map(sourceKey));
      const selectedSourceKeys = new Set(selectedGroupSourceKeys);
      const preservedMembers = activeGroupSelection.members.filter(
        (member) => !currentSourceKeys.has(member.source_key),
      );
      const selectedMembers = currentSources
        .filter((item) => selectedSourceKeys.has(sourceKey(item)))
        .map((item) => ({
          source_key: sourceKey(item),
          name: item.name,
          entity_id: item.runtime?.entity_id ?? "",
        }));

      const groups = await callWs<CustomGroup[]>(activeHass, "notify_studio/set_custom_group_members", {
        group_id: activeGroupSelection.id,
        members: [...preservedMembers, ...selectedMembers],
      });
      setCustomGroups(groups);
      const favorites = await callWs<string[]>(activeHass, "notify_studio/list_custom_group_favorites");
      setFavoriteGroupControlKeys(favorites);
      announce(`Saved ${selectedMembers.length} notification source${selectedMembers.length === 1 ? "" : "s"} in “${activeGroupSelection.name}”.`);
      setSelectedCustomGroupId(null);
      setSelectedGroupSourceKeys([]);
    } catch (error) {
      showError(error, "Unable to save the selected custom category or area members.");
    } finally {
      setCustomGroupBusy(null);
    }
  };

  const toggleCustomGroupAutomations = async (group: CustomGroup, enabled: boolean) => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    const state = customGroupStates.get(group.id);
    const automationCount = state?.automations ?? 0;
    if (!automationCount) {
      showError(new Error("This custom group does not contain any automation entities."), "No automations are available in this group.");
      return;
    }

    const action = enabled ? "enable" : "disable";
    if (!window.confirm(`Do you want to ${action} all ${automationCount} automation${automationCount === 1 ? "" : "s"} in “${group.name}”? Scripts and alerts are not changed.`)) return;

    setCustomGroupBusy("toggle");
    try {
      const result = await callWs<{ changed_entity_ids: string[]; skipped_entity_ids: string[]; failed: { entity_id: string; error: string }[] }>(
        activeHass,
        "notify_studio/toggle_custom_group",
        { group_id: group.id, enabled },
      );
      announce(`${group.name}: ${result.changed_entity_ids.length} automation${result.changed_entity_ids.length === 1 ? "" : "s"} ${enabled ? "enabled" : "disabled"}.`);
      await loadAudit();
    } catch (error) {
      showError(error, `Unable to ${action} the automations in ${group.name}.`);
    } finally {
      setCustomGroupBusy(null);
    }
  };

  const loadRecentPushRunnables = useCallback(async () => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    setRecentPushLoading(true);
    try {
      const result = await callWs<RecentPushRunnable[]>(
        activeHass,
        "notify_studio/list_recent_push_runnables",
      );
      setRecentPushRunnables(result);
    } catch {
      // The optional history panel must not prevent the composer from loading.
      setRecentPushRunnables([]);
    } finally {
      setRecentPushLoading(false);
    }
  }, []);

  const loadLogs = useCallback(async () => {
    const activeHass = hassRef.current;
    if (!activeHass) return;
    setLogsLoading(true);
    try {
      const result = await callWs<IntegrationLogEntry[]>(activeHass, "notify_studio/list_logs");
      setLogs(result);
    } catch (error) {
      showError(error, "Unable to load Notify Studio logs.");
    } finally {
      setLogsLoading(false);
    }
  }, [showError]);

  const clearLogs = async () => {
    const activeHass = hassRef.current;
    if (!activeHass || !window.confirm("Clear the Notify Studio application logs?")) return;
    setLogsLoading(true);
    try {
      const result = await callWs<IntegrationLogEntry[]>(activeHass, "notify_studio/clear_logs");
      setLogs(result);
      announce("Notify Studio logs cleared.");
    } catch (error) {
      showError(error, "Unable to clear Notify Studio logs.");
    } finally {
      setLogsLoading(false);
    }
  };

  const refresh = useCallback(async () => {
    try {
      await loadCore();
      setUsage(null);
    } catch (error) {
      showError(error, "Unable to load Notify Studio.");
    } finally {
      setLoading(false);
    }
  }, [announce, loadCore, showError]);

  useEffect(() => {
    if (hass && !hassReady) setHassReady(true);
  }, [hass, hassReady]);

  useEffect(() => {
    if (hassReady) void refresh();
  }, [hassReady, refresh]);

  useEffect(() => {
    if (hassReady) void loadRecentPushRunnables();
  }, [hassReady, loadRecentPushRunnables]);

  useEffect(() => {
    if (!selectedTargetId && targets.length) {
      setSelectedTargetId(targets[0].id);
    }
  }, [selectedTargetId, targets]);

  const loadAudit = useCallback(async () => {
    const activeHass = hassRef.current;
    if (!activeHass || auditLoading) return;
    setAuditLoading(true);
    try {
      setUsage(await callWs<NotifyUsage[]>(activeHass, "notify_studio/scan_notify_usage"));
      announce("Notification audit complete.");
    } catch (error) {
      showError(error, "The notification audit failed.");
    } finally {
      setAuditLoading(false);
    }
  }, [announce, auditLoading, showError]);

  useEffect(() => {
    if (tab === "audit" && usage === null) {
      void loadAudit();
    }
  }, [loadAudit, tab, usage]);

  useEffect(() => {
    if (tab === "audit") {
      void loadRecentPushRunnables();
    }
  }, [loadRecentPushRunnables, tab]);

  useEffect(() => {
    if (tab === "logs") {
      void loadLogs();
    }
  }, [loadLogs, tab]);

  const buildPayload = useCallback((): NotificationPayload => {
    const data: Record<string, unknown> = {};
    if (tag.trim()) data.tag = tag.trim();
    if (attachment.trim()) data.image = attachment.trim();
    if (actionable && notificationActions.length) {
      data.actions = notificationActions.map((notificationAction) => {
        if (notificationAction.route === "uri") {
          return {
            action: "URI",
            title: notificationAction.title,
            uri: notificationAction.uri ?? "",
          };
        }
        if (notificationAction.route === "reply") {
          return {
            action: notificationAction.id,
            title: notificationAction.title,
            behavior: "textInput",
          };
        }
        return { action: notificationAction.id, title: notificationAction.title };
      });
    }

    if (selectedTarget?.platform === "android") {
      if (openUrl.trim()) data.clickAction = openUrl.trim();
      if (subject.trim()) data.subject = subject.trim();
      if (channel.trim()) data.channel = channel.trim();
      if (importance) data.importance = importance;
      if (priority) data.priority = priority;
      if (color.trim()) data.color = color.trim();
      if (notificationIcon.trim()) data.notification_icon = notificationIcon.trim();
      if (timeout.trim()) data.timeout = Number(timeout);
      if (sticky) data.sticky = true;
      if (persistent) data.persistent = true;
    } else if (selectedTarget?.platform === "ios") {
      if (openUrl.trim()) data.url = openUrl.trim();
      if (subtitle.trim()) data.subtitle = subtitle.trim();
      const push: Record<string, unknown> = {};
      if (sound.trim()) push.sound = sound.trim();
      if (badge.trim()) push.badge = Number(badge);
      if (interruptionLevel) push["interruption-level"] = interruptionLevel;
      if (threadId.trim()) push["thread-id"] = threadId.trim();
      if (Object.keys(push).length) data.push = push;
    } else if (openUrl.trim()) {
      data.url = openUrl.trim();
    }

    return {
      message,
      ...(title.trim() ? { title } : {}),
      ...(Object.keys(data).length ? { data } : {}),
    };
  }, [actionable, attachment, badge, channel, color, importance, interruptionLevel, message, notificationActions, notificationIcon, openUrl, persistent, priority, selectedTarget?.platform, sound, sticky, subject, subtitle, tag, threadId, timeout, title]);

  const buildActionHandlers = useCallback((): ActionHandler[] => {
    if (!actionable) return [];
    return notificationActions
      .filter((notificationAction) => notificationAction.route !== "uri")
      .map((notificationAction) => {
        if (notificationAction.route === "script") {
          if (!notificationAction.scriptEntityId?.trim()) {
            throw new Error(`Choose a script for the “${notificationAction.title || "untitled"}” button.`);
          }
          return {
            action: notificationAction.id,
            type: "script",
            script_entity_id: notificationAction.scriptEntityId.trim(),
          };
        }
        if (notificationAction.route === "service") {
          if (!notificationAction.service?.trim()) {
            throw new Error(`Enter a Home Assistant action for the “${notificationAction.title || "untitled"}” button.`);
          }
          return {
            action: notificationAction.id,
            type: "service",
            service: notificationAction.service.trim(),
            service_data: parseServiceData(notificationAction.serviceData ?? ""),
          };
        }
        if (notificationAction.route === "reply") {
          return { action: notificationAction.id, type: "reply" };
        }
        return { action: notificationAction.id, type: "event" };
      });
  }, [actionable, notificationActions]);

  const buildDraft = useCallback((): NotificationDraft => ({
    payload: buildPayload(),
    action_handlers: buildActionHandlers(),
    ...(selectedTarget ? { target_platform: selectedTarget.platform } : {}),
  }), [buildActionHandlers, buildPayload, selectedTarget]);

  const ensureTarget = (): NotifierTarget | null => {
    if (!selectedTarget) {
      showError(new Error("Choose a registered Companion App target first."), "Choose a registered Companion App target first.");
      return null;
    }
    return selectedTarget;
  };

  useEffect(() => {
    const activeHass = hassRef.current;
    if (!hassReady || !activeHass) return;

    const requestId = ++previewRequestRef.current;
    let cancelled = false;
    const payload: NotificationPayload = {
      message,
      ...(title.trim() ? { title } : {}),
    };
    const timer = window.setTimeout(() => {
      void callWs<PreviewResponse>(activeHass, "notify_studio/render_preview", { payload })
        .then((result) => {
          if (!cancelled && requestId === previewRequestRef.current) setPreview(result);
        })
        .catch((error: unknown) => {
          if (cancelled || requestId !== previewRequestRef.current) return;
          const messageText = error instanceof Error ? error.message : "Unable to render the current template.";
          setPreview({ rendered: {}, errors: { message: messageText } });
        });
    }, 250);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [hassReady, message, title]);

  const sendTest = async () => {
    const target = ensureTarget();
    if (!target || !hassRef.current) return;
    setBusy("test");
    try {
      const response = await callWs<{ ok: boolean; target: string; warnings: string[] }>(hassRef.current, "notify_studio/send_test", {
        target_id: target.id,
        payload: buildPayload(),
      });
      announce(`Test notification sent to ${response.target}.`);
    } catch (error) {
      showError(error, "The test notification could not be sent.");
    } finally {
      setBusy(null);
    }
  };

  const generateYaml = async () => {
    const target = ensureTarget();
    if (!target || !hassRef.current) return;
    setBusy("yaml");
    try {
      const response = await callWs<GeneratedYamlResponse>(hassRef.current, "notify_studio/generate_yaml", {
        target_id: target.id,
        payload: buildPayload(),
        action_handlers: buildActionHandlers(),
      });
      setYaml(response.yaml);
      announce("YAML generated successfully.");
    } catch (error) {
      showError(error, "Unable to generate YAML.");
    } finally {
      setBusy(null);
    }
  };

  const copyYaml = async () => {
    if (!yaml.trim()) {
      showError(new Error("Generate YAML before trying to copy it."), "Generate YAML before trying to copy it.");
      return;
    }

    let copied = false;
    if (window.isSecureContext && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(yaml);
        copied = true;
      } catch {
        // Home Assistant can be accessed over local HTTP, where Clipboard API
        // permissions are commonly unavailable. Fall back to a user-gesture copy.
      }
    }

    if (!copied) {
      const fallback = document.createElement("textarea");
      fallback.value = yaml;
      fallback.setAttribute("readonly", "");
      fallback.style.position = "fixed";
      fallback.style.opacity = "0";
      fallback.style.pointerEvents = "none";
      document.body.appendChild(fallback);
      fallback.focus();
      fallback.select();
      try {
        copied = document.execCommand("copy");
      } finally {
        document.body.removeChild(fallback);
      }
    }

    if (copied) {
      announce("Generated YAML copied to the clipboard.");
      return;
    }

    showError(
      new Error("Automatic copy is unavailable in this browser. Select the YAML and copy it manually."),
      "Automatic copy is unavailable in this browser.",
    );
  };

  const openAutomations = () => {
    if (!window.confirm("Do you want to open Automations?")) return;
    window.location.assign("/config/automation/dashboard");
  };

  const openRunnableEditor = (runnable: RunnableSummary) => {
    const kindLabel = runnable.kind === "automation" ? "automation" : "script";
    if (!window.confirm(`Do you want to view this ${kindLabel}?`)) return;

    const editorId = runnable.id ?? runnable.entity_id.replace(`${runnable.kind}.`, "");
    window.location.assign(`/config/${runnable.kind}/edit/${encodeURIComponent(String(editorId))}`);
  };

  const updateRunnable = (entityId: string, patch: Partial<RunnableSummary>) => {
    setRunnables((current) => current.map((item) => item.entity_id === entityId ? { ...item, ...patch } : item));
    setUsage((current) => current?.map((item) => (
      item.runtime?.entity_id === entityId ? { ...item, runtime: { ...item.runtime, ...patch } } : item
    )) ?? null);
  };

  const toggleAutomation = async (automation: RunnableSummary, enabled: boolean) => {
    if (!hassRef.current) return;
    try {
      const result = await callWs<{ entity_id: string; state: string }>(hassRef.current, "notify_studio/toggle_automation", {
        entity_id: automation.entity_id,
        enabled,
      });
      updateRunnable(result.entity_id, {
        state: result.state,
        enabled,
        status: enabled ? "enabled" : "disabled",
      });
      announce(`${automation.name} is now ${enabled ? "enabled" : "disabled"}.`);
    } catch (error) {
      showError(error, "Unable to update that automation.");
    }
  };

  const runRunnable = async (runnable: RunnableSummary) => {
    if (!hassRef.current) return;
    const kind = runnable.kind === "automation" ? "automation" : "script";
    const conditionNote = runnable.kind === "automation"
      ? " Its conditions will be bypassed for this manual test."
      : "";
    const confirmation = `Run “${runnable.name}” now? This queues its configured ${kind} actions and may control real devices.${conditionNote}`;
    if (!window.confirm(confirmation)) return;
    try {
      const result = await callWs<{ entity_id: string; queued: boolean; conditions_skipped: boolean }>(hassRef.current, "notify_studio/run_runnable", {
        entity_id: runnable.entity_id,
      });
      announce(`${runnable.name} was queued for execution${result.conditions_skipped ? " with conditions bypassed" : ""}.`);
      window.setTimeout(() => {
        void loadRecentPushRunnables();
      }, 900);
    } catch (error) {
      showError(error, `Unable to run ${runnable.name}.`);
    }
  };

  const updateNotificationAction = (index: number, patch: Partial<ComposerAction>) => {
    setNotificationActions((current) => current.map((item, itemIndex) => (
      itemIndex === index ? { ...item, ...patch } : item
    )));
  };

  const changeActionRoute = (index: number, route: ActionRouteType) => {
    setNotificationActions((current) => current.map((item, itemIndex) => {
      if (itemIndex !== index) return item;
      return {
        ...item,
        route,
        id: route === "uri" ? "URI" : item.id === "URI" ? createActionId(item.title, index + 1) : item.id,
      };
    }));
  };

  const addNotificationAction = () => {
    const limit = selectedTarget?.platform === "android" ? 3 : 10;
    setNotificationActions((current) => (
      current.length >= limit ? current : [...current, createComposerAction(current.length + 1)]
    ));
  };

  const removeNotificationAction = (index: number) => {
    setNotificationActions((current) => current.filter((_, itemIndex) => itemIndex !== index));
  };

  const applyDraft = useCallback((draft: NotificationDraft) => {
    const payload = draft.payload;
    const data = isRecord(payload.data) ? payload.data : {};
    setMessage(asText(payload.message));
    setTitle(asText(payload.title));
    setTag(asText(data.tag));
    setAttachment(asText(data.image));
    setOpenUrl(asText(data.clickAction) || asText(data.url));
    setSubject(asText(data.subject));
    setChannel(asText(data.channel));
    setImportance(asText(data.importance));
    setPriority(asText(data.priority));
    setColor(asText(data.color));
    setNotificationIcon(asText(data.notification_icon));
    setTimeoutValue(data.timeout === undefined ? "" : String(data.timeout));
    setSticky(asBoolean(data.sticky));
    setPersistent(asBoolean(data.persistent));
    setSubtitle(asText(data.subtitle));
    const push = isRecord(data.push) ? data.push : {};
    setSound(asText(push.sound));
    setBadge(push.badge === undefined ? "" : String(push.badge));
    setInterruptionLevel(asText(push["interruption-level"]));
    setThreadId(asText(push["thread-id"]));

    const handlersByAction = new Map(draft.action_handlers.map((handler) => [handler.action, handler]));
    const rawActions = Array.isArray(data.actions) ? data.actions : [];
    const nextActions = rawActions.filter(isRecord).map((rawAction, index): ComposerAction => {
      const actionId = asText(rawAction.action) || createActionId(`Action ${index + 1}`, index + 1);
      const handler = handlersByAction.get(actionId);
      let route: ActionRouteType = "event";
      if (actionId === "URI" && asText(rawAction.uri)) route = "uri";
      else if (asText(rawAction.behavior) === "textInput") route = "reply";
      else if (handler?.type === "script") route = "script";
      else if (handler?.type === "service") route = "service";
      return {
        id: actionId,
        title: asText(rawAction.title) || `Action ${index + 1}`,
        route,
        uri: asText(rawAction.uri),
        scriptEntityId: asText(handler?.script_entity_id),
        service: asText(handler?.service),
        serviceData: handler?.service_data ? JSON.stringify(handler.service_data, null, 2) : "",
      };
    });
    setNotificationActions(nextActions);
    setActionable(nextActions.length > 0);
    setYaml("");

    if (draft.target_platform && selectedTarget?.platform !== draft.target_platform) {
      const compatibleTarget = targets.find((target) => target.platform === draft.target_platform);
      if (compatibleTarget) setSelectedTargetId(compatibleTarget.id);
    }
  }, [selectedTarget?.platform, targets]);

  const handleTemplateSelection = (templateId: string) => {
    setSelectedTemplateId(templateId);
    if (!templateId) return;
    const template = templates.find((item) => item.id === templateId);
    if (!template) return;
    applyDraft(template.draft);
    announce(`Template “${template.name}” loaded into the composer.`);
  };

  const startNewTemplate = () => {
    setEditingTemplateId(null);
    setTemplateName(title.trim() || "New notification template");
    setTemplateDescription("");
    setTab("templates");
  };

  const editTemplate = (template: NotificationTemplate) => {
    setEditingTemplateId(template.id);
    setTemplateName(template.name);
    setTemplateDescription(template.description);
    applyDraft(template.draft);
    setTab("templates");
    announce(`Editing template “${template.name}”.`);
  };

  const saveTemplate = async () => {
    if (!hassRef.current) return;
    setBusy("template");
    try {
      const saved = await callWs<NotificationTemplate>(hassRef.current, "notify_studio/save_template", {
        template: {
          ...(editingTemplateId ? { id: editingTemplateId } : {}),
          name: templateName,
          description: templateDescription,
          draft: buildDraft(),
        },
      });
      setTemplates((current) => {
        const existingIndex = current.findIndex((item) => item.id === saved.id);
        if (existingIndex === -1) return [saved, ...current];
        return current.map((item) => item.id === saved.id ? saved : item);
      });
      setSelectedTemplateId(saved.id);
      setEditingTemplateId(saved.id);
      announce(`Template “${saved.name}” saved.`);
    } catch (error) {
      showError(error, "Unable to save the template.");
    } finally {
      setBusy(null);
    }
  };

  const deleteTemplate = async (template: NotificationTemplate) => {
    if (!hassRef.current) return;
    if (!window.confirm(`Delete the “${template.name}” template? This cannot be undone.`)) return;
    try {
      await callWs<{ deleted: string }>(hassRef.current, "notify_studio/delete_template", { template_id: template.id });
      setTemplates((current) => current.filter((item) => item.id !== template.id));
      if (selectedTemplateId === template.id) setSelectedTemplateId("");
      if (editingTemplateId === template.id) {
        setEditingTemplateId(null);
        setTemplateName("");
        setTemplateDescription("");
      }
      announce(`Template “${template.name}” deleted.`);
    } catch (error) {
      showError(error, "Unable to delete the template.");
    }
  };

  const renderPlatformOptions = () => {
    if (!selectedTarget) return null;
    if (selectedTarget.platform === "android") {
      return <section className="ns-options">
        <h3>Android options</h3>
        <div className="ns-form-grid">
          <Field label="Subject"><input value={subject} onChange={(event) => setSubject(event.target.value)} placeholder="Optional extended subject" /></Field>
          <Field label="Channel"><input value={channel} onChange={(event) => setChannel(event.target.value)} placeholder="General" /></Field>
          <Field label="Importance"><select value={importance} onChange={(event) => setImportance(event.target.value)}><option value="">Default</option><option value="min">Min</option><option value="low">Low</option><option value="high">High</option></select></Field>
          <Field label="Priority"><select value={priority} onChange={(event) => setPriority(event.target.value)}><option value="">Default</option><option value="min">Min</option><option value="low">Low</option><option value="high">High</option></select></Field>
          <Field label="Colour"><input value={color} onChange={(event) => setColor(event.target.value)} placeholder="#2DF56D or red" /></Field>
          <Field label="Status-bar icon"><input value={notificationIcon} onChange={(event) => setNotificationIcon(event.target.value)} placeholder="mdi:cellphone-message" /></Field>
          <Field label="Timeout (seconds)"><input inputMode="numeric" value={timeout} onChange={(event) => setTimeoutValue(event.target.value)} placeholder="Optional" /></Field>
        </div>
        <label className="ns-check"><input type="checkbox" checked={sticky} onChange={(event) => setSticky(event.target.checked)} /> Keep notification after it is tapped</label>
        <label className="ns-check"><input type="checkbox" checked={persistent} onChange={(event) => {
          const enabled = event.target.checked;
          setPersistent(enabled);
          if (enabled && !tag.trim()) setTag(createPersistentTag(title, message));
        }} /> Persistent notification</label>
        {persistent && <p className="ns-help">Persistent notifications require a tag. Notify Studio adds one automatically when the Tag field was empty.</p>}
      </section>;
    }
    if (selectedTarget.platform === "ios") {
      return <section className="ns-options">
        <h3>Apple platform options</h3>
        <div className="ns-warning">Critical and time-sensitive interruption levels depend on the device’s Companion App permissions and notification settings.</div>
        <div className="ns-form-grid">
          <Field label="Subtitle"><input value={subtitle} onChange={(event) => setSubtitle(event.target.value)} placeholder="Optional second heading" /></Field>
          <Field label="Sound"><input value={sound} onChange={(event) => setSound(event.target.value)} placeholder="default, none, or a custom sound" /></Field>
          <Field label="Badge"><input inputMode="numeric" value={badge} onChange={(event) => setBadge(event.target.value)} placeholder="Optional app badge" /></Field>
          <Field label="Interruption level"><select value={interruptionLevel} onChange={(event) => setInterruptionLevel(event.target.value)}><option value="">Device default</option><option value="passive">Passive</option><option value="active">Active</option><option value="time-sensitive">Time-sensitive</option><option value="critical">Critical</option></select></Field>
          <Field label="Thread ID"><input value={threadId} onChange={(event) => setThreadId(event.target.value)} placeholder="Optional grouping thread" /></Field>
        </div>
      </section>;
    }
    return <section className="ns-options"><div className="ns-warning">This target could not be identified as Android or iOS, so only the shared fields are available.</div></section>;
  };

  const renderActionableOptions = () => {
    if (!selectedTarget || !["android", "ios"].includes(selectedTarget.platform)) return null;
    const maxActions = selectedTarget.platform === "android" ? 3 : 10;
    return <section className="ns-options ns-options--actionable">
      <h3>Actionable notification</h3>
      <label className="ns-check"><input type="checkbox" checked={actionable} onChange={(event) => {
        const enabled = event.target.checked;
        setActionable(enabled);
        if (enabled && !notificationActions.length) setNotificationActions([createComposerAction(1)]);
      }} /> Include notification action buttons</label>
      {actionable && <>
        <div className="ns-warning">Choose what each button does. Script and Home Assistant action choices are generated as a separate <code>mobile_app_notification_action</code> handler. URI buttons open directly on the device.</div>
        <div className="ns-action-list">
          {notificationActions.map((notificationAction, index) => <article className="ns-action-card" key={`${notificationAction.id}:${index}`}>
            <div className="ns-action-card__head"><strong>Button {index + 1}</strong>{notificationActions.length > 1 && <button type="button" className="ns-button ns-button--quiet ns-button--compact ns-button--danger" onClick={() => removeNotificationAction(index)}>Remove</button>}</div>
            <div className="ns-form-grid">
              <Field label="Button label"><input value={notificationAction.title} onChange={(event) => updateNotificationAction(index, { title: event.target.value })} placeholder="e.g. Open gate" /></Field>
              <Field label="Button action"><select value={notificationAction.route} onChange={(event) => changeActionRoute(index, event.target.value as ActionRouteType)}><option value="event">Send event only</option><option value="script">Run script</option><option value="service">Run Home Assistant action</option><option value="uri">Open URI / dashboard</option><option value="reply">Ask for text reply</option></select></Field>
              {notificationAction.route !== "uri" && <Field label="Action ID"><input value={notificationAction.id} onChange={(event) => updateNotificationAction(index, { id: event.target.value })} placeholder="Unique event ID" /></Field>}
              {notificationAction.route === "uri" && <Field label="URI" full><input value={notificationAction.uri ?? ""} onChange={(event) => updateNotificationAction(index, { uri: event.target.value })} placeholder="/lovelace/cameras, app://package, https://example.com" /></Field>}
              {notificationAction.route === "script" && <Field label="Script"><select value={notificationAction.scriptEntityId ?? ""} onChange={(event) => updateNotificationAction(index, { scriptEntityId: event.target.value })}><option value="">Choose a script…</option>{scripts.map((script) => <option key={script.entity_id} value={script.entity_id}>{script.name} · {script.entity_id}</option>)}</select></Field>}
              {notificationAction.route === "service" && <>
                <Field label="Home Assistant action"><input value={notificationAction.service ?? ""} onChange={(event) => updateNotificationAction(index, { service: event.target.value })} placeholder="light.turn_off" /></Field>
                <Field label="Action data (JSON)" full><textarea value={notificationAction.serviceData ?? ""} onChange={(event) => updateNotificationAction(index, { serviceData: event.target.value })} placeholder={'{\n  "entity_id": "light.hall"\n}'} /></Field>
              </>}
            </div>
            {notificationAction.route === "event" && <p className="ns-help">A safe persistent-notification placeholder is generated. Replace it in the YAML with your desired automation sequence.</p>}
            {notificationAction.route === "reply" && <p className="ns-help">The generated handler receives the submitted text as <code>trigger.event.data.reply_text</code>.</p>}
            {notificationAction.route === "uri" && <p className="ns-help">Android requires the Companion action key <code>URI</code>. URI buttons do not generate an event handler.</p>}
            {notificationAction.route === "script" && !scripts.length && <p className="ns-help">No script entities are currently available. Create or reload a script, then reload this page.</p>}
          </article>)}
        </div>
        <div className="ns-action-list__footer"><span className="ns-help">{notificationActions.length} of {maxActions} available {maxActions === 3 ? "Android buttons" : "Apple buttons"}.</span>{notificationActions.length < maxActions && <button type="button" className="ns-button ns-button--quiet ns-button--compact" onClick={addNotificationAction}>Add button</button>}</div>
      </>}
    </section>;
  };

  const renderLastTriggered = (runtime?: RunnableSummary) => {
    if (!runtime) return <p className="ns-muted">No runtime entity matched this merged-YAML source.</p>;
    return <div className="ns-runtime">
      <div className="ns-runtime__item"><span className="ns-runtime__label">Last triggered</span><span className="ns-runtime__value">{formatDate(runtime.last_triggered)}</span></div>
    </div>;
  };

  const renderAuditSource = (item: NotifyUsage) => {
    const key = sourceKey(item);
    const notifyDevices = item.notify_devices?.length ? item.notify_devices : item.notifiers;
    const runtime = item.runtime;
    const itemCustomGroups = customGroupsBySourceKey.get(key) ?? [];
    const isSelectionActive = activeGroupSelection !== null;
    const isSelectedForActiveGroup = selectedGroupSourceKeys.includes(key);

    return <article className={`ns-card ns-audit-card ${isSelectionActive ? "is-selectable" : ""}`} key={key}>
      <div className="ns-card__head">
        <div className="ns-row__main"><div className="ns-row__title">{item.name}</div></div>
        <div className="ns-card__actions">
          {isSelectionActive && <label className="ns-audit-card__selection" title={`Include ${item.name} in ${activeGroupSelection?.name ?? "this custom group"}`}>
            <input type="checkbox" checked={isSelectedForActiveGroup} onChange={(event) => toggleSelectedGroupSource(item, event.target.checked)} />
            <span className="ns-sr-only">Include {item.name} in {activeGroupSelection?.name}</span>
          </label>}
          <span className={`ns-badge ns-badge--${item.source === "script" ? "script" : "automation"}`}>{item.source}</span>
        </div>
      </div>
      <div className="ns-card__body">
        {renderLastTriggered(runtime)}
        <div className="ns-chip-row">
          {item.category && <span className="ns-chip">Category: {item.category}</span>}
          {(item.labels ?? []).map((label) => <span className="ns-chip" key={`label:${label}`}>Label: {label}</span>)}
          {notifyDevices.map((device) => <span className="ns-chip" key={`device:${device}`}>Notify: {device}</span>)}
        </div>
        {itemCustomGroups.length > 0 && <div className="ns-studio-group-chips" aria-label="Notify Studio custom groups">
          {itemCustomGroups.map((group) => <span className={`ns-studio-group-chip ns-studio-group-chip--${group.kind}`} key={group.id}>{group.kind === "category" ? "Category" : "Area"}: {group.name}</span>)}
        </div>}
      </div>
      <div className="ns-card__footer">
        {runtime?.kind === "automation" && <button className={`ns-button ns-button--tab ns-button--compact ns-button--state ${runtime.enabled ? "is-enabled" : "is-disabled"}`} onClick={() => void toggleAutomation(runtime, !runtime.enabled)}>{runtime.enabled ? "Enabled" : "Disabled"}</button>}
        {runtime?.supports_run && <button className="ns-button ns-button--quiet ns-button--compact" onClick={() => void runRunnable(runtime)}>Run test</button>}
        {runtime && <button className="ns-button ns-button--quiet ns-button--compact" onClick={() => openRunnableEditor(runtime)}>{runtime.kind === "automation" ? "View Automation" : "View Script"}</button>}
      </div>
    </article>;
  };

  const renderCustomGroupControl = (control: CustomGroupControl) => {
    const label = control.group.kind === "category" ? "Category" : "Area";
    const isFavorite = favoriteGroupControlKeys.includes(control.key);
    const cannotAddFavorite = !isFavorite && favoriteCustomGroupControls.length >= quickControlCapacity;
    const groupState = customGroupStates.get(control.group.id) ?? { automations: 0, enabled: 0, disabled: 0 };
    const isGroupControl = control.type === "group";
    const runtime = control.member ? runnableByEntityId.get(control.member.entity_id) : undefined;
    const allEnabled = groupState.automations > 0 && groupState.enabled === groupState.automations;
    const desiredEnabled = !allEnabled;
    const title = isGroupControl
      ? (groupState.automations === 0 ? "No automations" : desiredEnabled ? "Enable all" : "Disable all")
      : control.member?.name ?? "Notification source";
    const status = isGroupControl
      ? (groupState.automations === 0 ? "Add an automation source" : `All automations · ${groupState.enabled}/${groupState.automations} enabled`)
      : runtime?.kind === "automation"
        ? (runtime.enabled ? "Enabled" : "Disabled")
        : runtime?.kind === "script"
          ? "Script"
          : "Unavailable";
    const isToggleable = isGroupControl
      ? groupState.automations > 0
      : runtime?.kind === "automation";

    return <article className="ns-custom-group-member-control" key={control.key}>
      <button
        type="button"
        className={`ns-custom-group-member-button ${isGroupControl ? "ns-custom-group-member-button--all" : ""}`}
        disabled={!isToggleable || customGroupBusy === "toggle"}
        onClick={() => {
          if (isGroupControl) {
            void toggleCustomGroupAutomations(control.group, desiredEnabled);
          } else if (runtime?.kind === "automation") {
            void toggleAutomation(runtime, !runtime.enabled);
          }
        }}
        title={isToggleable
          ? (isGroupControl ? `${title} automations in ${control.group.name}` : `Toggle ${title}`)
          : runtime?.kind === "script" ? "Scripts do not have an enabled or disabled state." : "This notification source is not currently available as a Home Assistant runtime entity."}
      >
        <span className={`ns-custom-group-member-button__tag ns-custom-group-member-button__tag--${control.group.kind}`}>{label}: {control.group.name}</span>
        <strong>{title}</strong>
        <span>{status}</span>
      </button>
      <button
        type="button"
        className={`ns-custom-group-favorite ${isFavorite ? "is-favorite" : ""}`}
        onClick={() => toggleFavoriteGroupControl(control.key)}
        disabled={customGroupBusy === "favorites" || cannotAddFavorite}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? `Remove ${title} from quick controls` : `Add ${title} to quick controls`}
        title={cannotAddFavorite ? `Quick row is full. Remove a star before adding another favorite.` : isFavorite ? "Remove from quick controls" : "Add to quick controls"}
      >
        {isFavorite ? "★" : "☆"}
      </button>
    </article>;
  };

  const renderCustomGroupToggleBar = () => {
    if (!customGroups.length) {
      return <section className="ns-custom-group-toolbar" aria-label="Notify Studio custom category and area controls">
        <button type="button" className="ns-custom-group-empty" onClick={() => setCustomGroupManagerOpen(true)}>
          <span className="ns-custom-group-empty__title">Create custom categories and areas</span>
          <span className="ns-custom-group-empty__meta">Group notification sources without changing Home Assistant’s own organisation.</span>
        </button>
      </section>;
    }

    const displayedControls = showAllCustomGroupControls
      ? customGroupControls
      : favoriteCustomGroupControls.length > 0
        ? favoriteCustomGroupControls
        : customGroupControls.slice(0, quickControlCapacity);
    const hasMoreControls = customGroupControls.length > displayedControls.length;
    const gridStyle = {
      "--ns-quick-control-columns": String(Math.max(1, displayedControls.length)),
    } as CSSProperties;

    return <section className="ns-custom-group-toolbar" aria-label="Notify Studio custom category and area controls">
      <div className="ns-custom-group-control-panel" ref={quickControlsPanelRef}>
        <div className={`ns-custom-group-member-grid ${showAllCustomGroupControls ? "is-expanded" : ""}`} style={gridStyle}>
          {displayedControls.map(renderCustomGroupControl)}
        </div>
        <button
          type="button"
          className={`ns-custom-group-expand ${showAllCustomGroupControls ? "is-expanded" : ""}`}
          onClick={() => setShowAllCustomGroupControls((current) => !current)}
          aria-expanded={showAllCustomGroupControls}
          aria-label={showAllCustomGroupControls ? "Collapse quick controls" : "Show all custom group controls"}
          title={showAllCustomGroupControls ? "Show quick controls" : hasMoreControls ? "Show all controls" : "Choose favorite controls"}
        >
          {showAllCustomGroupControls ? "⌃" : "⌄"}
        </button>
      </div>
    </section>;
  };

  const renderCustomGroupManager = () => {
    if (!customGroupManagerOpen) return null;
    const categories = customGroups.filter((group) => group.kind === "category");
    const areas = customGroups.filter((group) => group.kind === "area");
    const renderGroupList = (kind: CustomGroupKind, groups: CustomGroup[]) => <section className="ns-custom-group-manager__section">
      <h3>{kind === "category" ? "Custom categories" : "Custom areas"}</h3>
      {!groups.length && <p className="ns-muted">No custom {kind}s created yet.</p>}
      <div className="ns-custom-group-manager__list">
        {groups.map((group) => {
          const selecting = activeGroupSelection?.id === group.id;
          return <article className="ns-custom-group-manager__item" key={group.id}>
            <div><strong>{group.name}</strong><span>{group.members.length} assigned notification source{group.members.length === 1 ? "" : "s"}</span></div>
            <div className="ns-card__actions ns-custom-group-manager__item-actions">
              <button type="button" className={`ns-button ns-button--quiet ns-button--compact ${selecting ? "ns-button--active" : ""}`} onClick={() => startCustomGroupSelection(group)} disabled={customGroupBusy === "selection"}>
                {selecting ? "Selecting entities" : "Select entities"}
              </button>
              <button type="button" className="ns-button ns-button--quiet ns-button--compact" onClick={() => void renameCustomGroup(group)} disabled={customGroupBusy === "selection"}>Rename</button>
              <button type="button" className="ns-button ns-button--quiet ns-button--compact ns-button--danger" onClick={() => void deleteCustomGroup(group)} disabled={customGroupBusy === "selection"}>Delete</button>
            </div>
          </article>;
        })}
      </div>
    </section>;

    return <section className="ns-card ns-custom-group-manager">
      <div className="ns-card__head"><div><h2 className="ns-card__title">Custom categories and areas</h2><p className="ns-muted">These are local to Notify Studio. They do not change Home Assistant’s native categories, areas, or labels.</p></div><div className="ns-card__actions"><button type="button" className="ns-button ns-button--quiet ns-button--compact" onClick={() => void loadCustomGroups()} disabled={customGroupsLoading}>Refresh</button><button type="button" className="ns-button ns-button--quiet ns-button--compact" onClick={() => setCustomGroupManagerOpen(false)} disabled={customGroupBusy === "selection"}>Close</button></div></div>
      <div className="ns-card__body">
        <div className="ns-custom-group-manager__create">
          <Field label="Create"><input value={newCustomGroupName} onChange={(event) => setNewCustomGroupName(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") void createCustomGroup(); }} placeholder="e.g. Security alerts or Upstairs" /></Field>
          <Field label="Type"><select value={newCustomGroupKind} onChange={(event) => setNewCustomGroupKind(event.target.value as CustomGroupKind)}><option value="category">Custom category</option><option value="area">Custom area</option></select></Field>
          <button type="button" className="ns-button ns-button--tab" onClick={() => void createCustomGroup()} disabled={customGroupBusy === "create"}>{customGroupBusy === "create" ? "Creating…" : "Create"}</button>
        </div>
        <div className="ns-custom-group-manager__columns">{renderGroupList("category", categories)}{renderGroupList("area", areas)}</div>
        {activeGroupSelection && <div className="ns-custom-group-manager__selection">
          <p>Tick the checkboxes shown in the top-right corner of notification cards below, then save the selected entities for <strong>{activeGroupSelection.name}</strong>.</p>
          <div className="ns-card__actions">
            <button type="button" className="ns-button ns-button--quiet ns-button--compact" onClick={cancelCustomGroupSelection} disabled={customGroupBusy === "selection"}>Cancel</button>
            <button type="button" className="ns-button ns-button--tab ns-button--compact" onClick={() => void saveCustomGroupSelection()} disabled={customGroupBusy === "selection"}>{customGroupBusy === "selection" ? "Saving…" : `Save ${selectedGroupSourceKeys.length} ${selectedGroupSourceKeys.length === 1 ? "entity" : "entities"}`}</button>
          </div>
        </div>}
      </div>
    </section>;
  };

  if (loading) {
    return <main className="notify-studio"><style>{panelStyles}</style><div className="ns-loading">Loading Notify Studio…</div></main>;
  }

  return <main className="notify-studio">
    <style>{panelStyles}</style>
    <span className="ns-sr-only" aria-live="polite">{liveMessage}</span>
    <header className="notify-studio__header">
      <div className="notify-studio__heading">
        <img className="notify-studio__logo-image" src={LOGO_URL} alt="Notify Studio" />
        <div><h1>Notify Studio</h1><p className="notify-studio__subtitle">Build, test, template, and audit rich Companion notifications{info ? ` · v${info.version}` : ""}</p></div>
      </div>
    </header>

    <nav className="notify-studio__tabs" aria-label="Notify Studio sections">
      <div className="notify-studio__tab-buttons">
        <button className={`ns-button ns-button--tab ${tab === "audit" ? "is-active" : ""}`} onClick={() => setTab("audit")}>Notifications</button>
        <button className={`ns-button ns-button--tab ${tab === "compose" ? "is-active" : ""}`} onClick={() => setTab("compose")}>Compose</button>
        <button className={`ns-button ns-button--tab ${tab === "templates" ? "is-active" : ""}`} onClick={() => setTab("templates")}>Templates</button>
        <button className={`ns-button ns-button--tab ${tab === "logs" ? "is-active" : ""}`} onClick={() => setTab("logs")}>Logs</button>
      </div>
    </nav>

    {tab === "compose" && <section className="notify-studio__grid">
      <div className="ns-card"><div className="ns-card__head"><h2 className="ns-card__title">Notification composer</h2>{selectedTarget && <span className={badgeClass(selectedTarget.platform)}>{platformLabel(selectedTarget.platform)}</span>}</div><div className="ns-card__body">
        {!targets.length ? <div className="ns-warning">No <code>notify.mobile_app_*</code> services were found. Connect or re-register a Home Assistant Companion App device, then reload this page.</div> : <>
          <div className="ns-template-picker"><Field label="Template"><select value={selectedTemplateId} onChange={(event) => handleTemplateSelection(event.target.value)}><option value="">Choose a saved template…</option>{templates.map((template) => <option key={template.id} value={template.id}>{template.name}</option>)}</select></Field></div>
          <Field label="Send to"><select value={selectedTargetId} onChange={(event) => setSelectedTargetId(event.target.value)}>{targets.map((target) => <option key={target.id} value={target.id}>{target.name} · {platformLabel(target.platform)}{target.model ? ` · ${target.model}` : ""}</option>)}</select></Field>
          {selectedTarget?.warnings.map((warning) => <div className="ns-warning" key={warning}>{warning}</div>)}
          <div className="ns-form-grid">
            <Field label="Title"><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Optional title" /></Field>
            <Field label="Tag"><input value={tag} onChange={(event) => setTag(event.target.value)} placeholder="Optional replacement key" /></Field>
            <Field label="Open URL" full><input value={openUrl} onChange={(event) => setOpenUrl(event.target.value)} placeholder="/lovelace/cameras, https://example.com, or deep-link://…" /></Field>
            <Field label="Image / attachment URL" full><input value={attachment} onChange={(event) => setAttachment(event.target.value)} placeholder="/media/local/camera.jpg or /local/image.jpg" /></Field>
            <Field label="Message" full><textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Notification content. Jinja templates are supported." /></Field>
          </div>
          {renderPlatformOptions()}
          {renderActionableOptions()}
          <div className="ns-actions">
            <button className="ns-button ns-button--tab" onClick={() => void sendTest()} disabled={busy !== null}>{busy === "test" ? "Sending…" : "Send test"}</button>
            <button className="ns-button ns-button--tab" onClick={startNewTemplate} disabled={busy !== null}>Save Template</button>
            <button className="ns-button ns-button--tab" onClick={() => void generateYaml()} disabled={busy !== null}>{busy === "yaml" ? "Generating…" : "Generate YAML"}</button>
          </div>
        </>}
      </div></div>

      <aside className="notify-studio__side">
        <section className="ns-card"><div className="ns-card__head"><h2 className="ns-card__title">Preview and YAML</h2></div><div className="ns-card__body">
          <p className="ns-muted">The title and message preview updates automatically as you type. A test send validates the full selected-platform payload on the backend.</p>
          <Field label="Rendered title"><pre className="ns-code">{preview.errors.title ? `Error: ${preview.errors.title}` : preview.rendered.title || "No title entered."}</pre></Field>
          <Field label="Rendered message"><pre className="ns-code">{preview.errors.message ? `Error: ${preview.errors.message}` : preview.rendered.message || "No message entered."}</pre></Field>
          <div className="ns-card__head" style={{ padding: "12px 0", border: 0 }}><h3 className="ns-card__title">Generated action</h3><div className="ns-card__actions">{yaml && <button className="ns-button ns-button--tab ns-button--compact" onClick={() => void copyYaml()}>Copy</button>}<button className="ns-button ns-button--tab ns-button--compact" onClick={openAutomations}>Automations</button></div></div>
          <pre className="ns-code">{yaml || "Generate YAML to see a copy-ready action and any matching button handler here."}</pre>
        </div></section>
      </aside>
    </section>}

    {tab === "templates" && <section className="ns-list">
      <div className="ns-card"><div className="ns-card__head"><h2 className="ns-card__title">{editingTemplateId ? "Edit template" : "Create template"}</h2></div><div className="ns-card__body">
        <p className="ns-muted">Templates are stored in Home Assistant’s private integration storage. They capture the current composer fields and selected button routes, but not a device target.</p>
        <div className="ns-form-grid"><Field label="Template name"><input value={templateName} onChange={(event) => setTemplateName(event.target.value)} placeholder="e.g. Front door alert" /></Field><Field label="Description"><input value={templateDescription} onChange={(event) => setTemplateDescription(event.target.value)} placeholder="Optional reminder of when to use it" /></Field></div>
        <div className="ns-actions"><button className="ns-button" onClick={() => void saveTemplate()} disabled={busy !== null}>{busy === "template" ? "Saving…" : editingTemplateId ? "Update template" : "Save Template"}</button><button className="ns-button ns-button--quiet" onClick={() => { setEditingTemplateId(null); setTemplateName(""); setTemplateDescription(""); }}>New template</button></div>
      </div></div>
      {!templates.length && <div className="ns-empty">No templates saved yet. Build a notification in Compose, then save it here.</div>}
      <div className="ns-template-grid">{templates.map((template) => <article className="ns-card ns-template-card" key={template.id}><div className="ns-card__body ns-template-card__body"><div><h3 className="ns-template-card__title">{template.name}</h3><p className="ns-template-card__meta">{template.description || "No description"}</p></div><div className="ns-chip-row">{template.draft.target_platform && <span className={badgeClass(template.draft.target_platform)}>{platformLabel(template.draft.target_platform)}</span>}<span className="ns-chip">{Array.isArray(template.draft.payload.data?.actions) ? `${template.draft.payload.data?.actions.length} button(s)` : "No buttons"}</span></div><div className="ns-template-card__footer"><button className="ns-button ns-button--quiet ns-button--compact" onClick={() => { setSelectedTemplateId(template.id); applyDraft(template.draft); setTab("compose"); }}>Use</button><button className="ns-button ns-button--quiet ns-button--compact" onClick={() => editTemplate(template)}>Edit</button><button className="ns-button ns-button--quiet ns-button--compact ns-button--danger" onClick={() => void deleteTemplate(template)}>Delete</button></div></div></article>)}</div>
    </section>}

    {tab === "logs" && <section className="ns-logs-layout">
      <aside className="ns-card ns-logs-sidebar">
        <div className="ns-card__head"><h2 className="ns-card__title">Notify Studio logs</h2></div>
        <div className="ns-card__body">
          <p className="ns-muted">Operational events from Notify Studio. This in-memory list clears when Home Assistant restarts.</p>
          <div className="ns-log-filter"><Field label="Level"><select value={logLevelFilter} onChange={(event) => setLogLevelFilter(event.target.value as "" | LogLevel)}><option value="">All levels</option><option value="error">Errors</option><option value="warning">Warnings</option><option value="info">Information</option></select></Field></div>
          <div className="ns-log-sidebar-actions"><button className="ns-button ns-button--tab ns-button--compact" onClick={() => void loadLogs()} disabled={logsLoading}>{logsLoading ? "Loading…" : "Refresh"}</button><button className="ns-button ns-button--quiet ns-button--compact" onClick={() => void clearLogs()} disabled={logsLoading}>Clear logs</button></div>
        </div>
      </aside>
      <section className="ns-logs-content" aria-label="Notify Studio log events">
        <div className="ns-logs-content__head"><div><h2>Recent activity</h2><p>{visibleLogs.length} event{visibleLogs.length === 1 ? "" : "s"}{logLevelFilter ? ` matching ${logLevelLabel(logLevelFilter).toLowerCase()}` : ""}</p></div></div>
        {logsLoading && <div className="ns-empty">Loading Notify Studio application logs…</div>}
        {!logsLoading && !visibleLogs.length && <div className="ns-empty">No Notify Studio events match this filter yet. Use Run test, Send test, or Scan now to create diagnostic entries.</div>}
        {!logsLoading && visibleLogs.length > 0 && <section className="ns-log-list">{visibleLogs.map((entry, index) => <article className={`ns-card ns-log-entry ns-log-entry--${entry.level}`} key={`${entry.timestamp}:${entry.event}:${index}`}><div className="ns-log-entry__head"><div><span className={logBadgeClass(entry.level)}>{logLevelLabel(entry.level)}</span><strong>{entry.message}</strong></div><time dateTime={entry.timestamp}>{formatDate(entry.timestamp)}</time></div>{entry.entity_id && <code className="ns-log-entry__entity">{entry.entity_id}</code>}{entry.detail && <p className="ns-log-entry__detail">{entry.detail}</p>}<span className="ns-log-entry__event">{entry.event.replaceAll("_", " ")}</span></article>)}</section>}
      </section>
    </section>}

    {tab === "audit" && <>
      {renderCustomGroupToggleBar()}
      {renderCustomGroupManager()}
      <section className="notify-studio__notifications-layout">
        <div className="notify-studio__notifications-main">
          <section className="ns-card"><div className="ns-card__head"><div><h2 className="ns-card__title">Notifications</h2><p className="ns-muted">Review notification sources in merged YAML, organise them with Notify Studio-only categories and areas, and run or enable matching automations.</p></div><div className="ns-notifications-toolbar"><button type="button" className="ns-button ns-button--quiet" onClick={() => setCustomGroupManagerOpen(true)}>Manage groups</button><button type="button" className="ns-button ns-button--tab" onClick={() => void loadAudit()} disabled={auditLoading}>{auditLoading ? "Scanning…" : "Scan now"}</button></div></div><div className="ns-card__body"><div className="ns-filter-grid">
            <Field label="Type"><select value={auditSourceFilter} onChange={(event) => setAuditSourceFilter(event.target.value as "" | "automation" | "script")}><option value="">All sources</option><option value="automation">Automation</option><option value="script">Script</option></select></Field>
            <Field label="Home Assistant category"><select value={auditCategoryFilter} onChange={(event) => setAuditCategoryFilter(event.target.value)}><option value="">All categories</option>{auditFilterOptions.categories.map((category) => <option key={category} value={category}>{category}</option>)}</select></Field>
            <Field label="Home Assistant label"><select value={auditLabelFilter} onChange={(event) => setAuditLabelFilter(event.target.value)}><option value="">All labels</option>{auditFilterOptions.labels.map((label) => <option key={label} value={label}>{label}</option>)}</select></Field>
            <Field label="Notify device"><select value={auditDeviceFilter} onChange={(event) => setAuditDeviceFilter(event.target.value)}><option value="">All notify devices</option>{auditFilterOptions.devices.map((device) => <option key={device} value={device}>{device}</option>)}</select></Field>
            <Field label="Notify Studio group"><select value={auditStudioGroupFilter} onChange={(event) => setAuditStudioGroupFilter(event.target.value)}><option value="">All custom groups</option>{customGroups.map((group) => <option key={group.id} value={group.id}>{group.kind === "category" ? "Category" : "Area"}: {group.name}</option>)}</select></Field>
          </div></div></section>
          {auditLoading && <div className="ns-empty">Scanning merged Home Assistant YAML…</div>}
          {!auditLoading && usage?.length === 0 && <div className="ns-empty">No notification calls were found in the merged YAML configuration.</div>}
          {!auditLoading && usage && filteredAuditUsage.length === 0 && <div className="ns-empty">No notification sources match the selected filters.</div>}
          {!auditLoading && usage && filteredAuditUsage.length > 0 && <section className="ns-audit-group"><h3>All notification sources</h3><div className="ns-source-grid ns-source-grid--audit">{filteredAuditUsage.map(renderAuditSource)}</div></section>}
        </div>
        <aside className="notify-studio__notifications-activity">
          <section className="ns-card ns-recent-card"><div className="ns-card__head"><div><h2 className="ns-card__title">Recently triggered push activity</h2><p className="ns-muted">Notification-related automations and scripts.</p></div></div><div className="ns-card__body">
            {recentPushLoading && <p className="ns-muted">Loading recent push automations and scripts…</p>}
            {!recentPushLoading && !recentPushRunnables.length && <p className="ns-muted">No triggered push automation or script has been found yet.</p>}
            {!recentPushLoading && recentPushRunnables.length > 0 && <div className="ns-recent-list">{recentPushRunnables.map((runnable) => <article className="ns-recent-item" key={runnable.entity_id}><div className="ns-recent-item__head"><strong>{runnable.name}</strong><span className={`ns-badge ns-badge--${runnable.kind}`}>{runnable.kind}</span></div><span>Triggered {formatDate(runnable.last_triggered)}</span></article>)}</div>}
          </div></section>
        </aside>
      </section>
    </>}


  </main>;
}

function Field({ label, children, full = false }: { label: string; children: ReactNode; full?: boolean }) {
  return <label className={`ns-field ${full ? "ns-field--full" : ""}`}><span>{label}</span>{children}</label>;
}

