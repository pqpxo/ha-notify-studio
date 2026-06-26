// version 15
import type { HomeAssistant } from "./types";

export async function callWs<T>(
  hass: HomeAssistant,
  type: string,
  payload: Record<string, unknown> = {},
): Promise<T> {
  return hass.connection.sendMessagePromise<T>({ type, ...payload });
}
