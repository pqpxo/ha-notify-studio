<!-- version 25 -->

# Changelog

## 0.1.25 - Save generated automations

- Added **Save Automation** in the Composer’s Preview and YAML panel. It creates a UI-managed Home Assistant automation using the generated notification action, then opens the native Automation Editor so the trigger and conditions can be reviewed or added.
- Actionable-notification handlers are saved as a separate generated automation when needed, matching Home Assistant’s event-driven Companion notification model.
- Uses Home Assistant’s authenticated automation configuration endpoint rather than writing files directly, keeping the UI-managed `automations.yaml` workflow intact.

## 0.1.24 - Favourite control status alignment

- Added a small theme-aware status circle before the **Enabled** or **Disabled** text in favourite automation controls.
- Improved favourite control alignment by bringing automation/script titles and state text into line with the group tag.
- Added a little extra spacing between each group tag and its automation/script title.
- Bumped frontend cache, manifest, package, documentation, and integration version metadata to `0.1.24`.

## 0.1.23 - Reliable actions and resilient favourites

- Replaced browser-native confirmation prompts with an in-panel confirmation dialog for **Run Test**, **View Automation**, **View Script**, and **Automations**. This avoids browser-dialog suppression that could make those controls appear unresponsive.
- Run Test now waits for Home Assistant to accept the requested service call before reporting success or an error in Notify Studio.
- Editor navigation now uses Home Assistant's frontend navigation helper when available, with an in-panel route-event fallback.
- Hardened quick-control capacity measurement after moving between pages: hidden or incomplete layout reads are ignored, and capacity is measured again after the Notifications panel finishes rendering.
- Kept favourite stars gold and increased their visual prominence.
- Standardized action labels to title case, including **Manage Groups**, **Scan Now**, **Run Test**, and **Send Test**.
- Standard buttons and quick controls share the same active-theme surface. Card header divider lines are removed.
- Bumped frontend cache, manifest, package, documentation, and integration version metadata to `0.1.23`.

## 0.1.22 - Theme-aware quick controls

- Added Home Assistant theme-derived control surfaces for buttons, cards, and quick controls.
- Fixed favourites persistence across restart and responsive layout changes.
