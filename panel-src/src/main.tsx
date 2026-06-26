// version 16
import { createRoot, type Root } from "react-dom/client";

import App from "./App";
import type { HomeAssistant } from "./types";

class NotifyStudioPanel extends HTMLElement {
  private root?: Root;
  private currentHass?: HomeAssistant;

  set hass(value: HomeAssistant) {
    this.currentHass = value;
    this.renderPanel();
  }

  connectedCallback(): void {
    this.renderPanel();
  }

  disconnectedCallback(): void {
    this.root?.unmount();
    this.root = undefined;
  }

  private renderPanel(): void {
    if (!this.root) {
      this.root = createRoot(this);
    }
    this.root.render(<App hass={this.currentHass} />);
  }
}

if (!customElements.get("notify-studio-panel")) {
  customElements.define("notify-studio-panel", NotifyStudioPanel);
}
