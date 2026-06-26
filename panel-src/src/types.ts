// version 18
export type Platform = "android" | "ios" | "other" | "unknown";
export type RunnableKind = "automation" | "script";
export type ActionRouteType = "event" | "script" | "service" | "uri" | "reply";
export type ActionHandlerType = "event" | "script" | "service" | "reply";
export type LogLevel = "info" | "warning" | "error";
export type CustomGroupKind = "category" | "area";

export interface HassConnection {
  sendMessagePromise<T>(message: Record<string, unknown>): Promise<T>;
}

export interface HomeAssistant {
  connection: HassConnection;
}

export interface TargetCapabilities {
  common: string[];
  platform: string[];
}

export interface NotifierTarget {
  id: string;
  name: string;
  service: string;
  kind: "legacy_mobile_app_service";
  platform: Platform;
  os_name?: string | null;
  model?: string | null;
  capabilities: TargetCapabilities;
  warnings: string[];
}

export interface NotifyEntity {
  entity_id: string;
  name: string;
  kind: "notify_entity";
}

export interface NotifierResponse {
  services: NotifierTarget[];
  entities: NotifyEntity[];
}

export interface ComposerAction {
  id: string;
  title: string;
  route: ActionRouteType;
  uri?: string;
  scriptEntityId?: string;
  service?: string;
  serviceData?: string;
}

export interface ActionHandler {
  action: string;
  type: ActionHandlerType;
  script_entity_id?: string;
  service?: string;
  service_data?: Record<string, unknown>;
}

export interface NotificationPayload {
  message: string;
  title?: string;
  data?: Record<string, unknown>;
}

export interface NotificationDraft {
  payload: NotificationPayload;
  action_handlers: ActionHandler[];
  target_platform?: Platform;
}

export interface NotificationTemplate {
  id: string;
  name: string;
  description: string;
  draft: NotificationDraft;
  created_at: string;
  updated_at: string;
}


export interface CustomGroupMember {
  source_key: string;
  name: string;
  entity_id: string;
}

export interface CustomGroup {
  id: string;
  name: string;
  kind: CustomGroupKind;
  members: CustomGroupMember[];
  created_at: string;
  updated_at: string;
}

export interface PreviewResponse {
  rendered: Partial<Record<"message" | "title", string>>;
  errors: Partial<Record<"message" | "title", string>>;
}

export interface ValidationResponse {
  valid: boolean;
  target: NotifierTarget;
  payload: NotificationPayload;
  warnings: string[];
}

export interface GeneratedYamlResponse {
  yaml: string;
  warnings: string[];
}

export interface RecentPushRunnable {
  entity_id: string;
  name: string;
  kind: RunnableKind;
  last_triggered: string;
}

export interface RunnableSummary {
  entity_id: string;
  name: string;
  kind: RunnableKind;
  state: string;
  enabled: boolean | null;
  status: "enabled" | "disabled" | "ready" | "running";
  id?: string | null;
  last_triggered?: string | null;
  mode?: string | null;
  current?: number | null;
  supports_run: boolean;
}

export interface IntegrationLogEntry {
  timestamp: string;
  level: LogLevel;
  event: string;
  message: string;
  entity_id?: string;
  detail?: string;
}

export interface NotifyHit {
  service: string;
  path: string;
  data: Record<string, unknown>;
  target: Record<string, unknown>;
}

export interface NotifyUsage {
  source: "automation" | "script" | "alert";
  origin: "merged_yaml";
  name: string;
  id: string;
  notifiers: string[];
  notify_devices?: string[];
  category?: string;
  labels?: string[];
  hits: NotifyHit[];
  runtime?: RunnableSummary;
}

export interface InfoResponse {
  version: string;
  has_notify_entities: boolean;
  mobile_app_services: number;
  template_count: number;
  custom_group_count?: number;
}
