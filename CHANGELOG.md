<!-- version 15 -->
# Changelog

## 0.1.15 - Custom notification categories and areas

- Added persistent per-instance **custom categories** and **custom areas** for Notification-page sources.
- Added custom group management with create, rename, delete, and per-source assignment controls.
- Added a full-width row of equal-width group controls above Notifications. Each control can bulk-enable or bulk-disable its assigned automations after confirmation.
- Custom group storage is intentionally independent of Home Assistant's own Area, Category, and Label registries.
- Scripts and alerts can be assigned to custom groups but bulk group toggles only affect automation entities.
- Added Notify Studio group badges to source cards and a custom-group filter.
- Added custom group actions to the Notify Studio Logs page.
- Updated the panel bundle, cache version, metadata, and documentation to `0.1.15`.

## 0.1.13 - Run-test diagnostics and application logs

- Added a **Logs** navigation page beside Notifications, Compose, and Templates.
- Added a bounded in-memory application log for Notify Studio operation records, warnings, and errors.
- Added `Run test` logging that records rejected, blocked, requested, queued, and service-failure states.
- Added logging for test notifications, notification scans, YAML generation, templates, automation toggles, and recent-activity scan failures.
- Updated automation Run test behaviour to bypass top-level conditions, matching Home Assistant's manual trigger behaviour for condition-gated tests.
- Added clear and level-filter controls for application logs.
- Detects an already-active `single`-mode automation or script and reports a clear, actionable error instead of silently appearing not to run.

## 0.1.12 - Button spacing and theme-border refinement

- Removed the forced white button-outline custom property. Buttons now use Home Assistant theme divider borders.
- Increased standard button horizontal padding to `0px 20px`.
- Updated compact-button padding to `10px 13px 10px 13px`.
- Updated repository documentation and issue-tracker URLs for `pqpxo/ha-notify-studio`.

## 0.1.11 - Notification-card refinement

- Updated card heading padding.
- Removed notification call-detail controls from source cards.
- Increased source-card title size.
- Standardised View Automation/View Script labels and Save Template wording.

## 0.1.10 - Notification layout and entity controls

- Set Notifications as the opening page.
- Added confirmed automation/script editor shortcuts and runtime state controls.
- Increased dashboard working width and equalised notification-source cards.

## 0.1.9 - Larger header logo

- Increased the Notify Studio header logo to 90 × 90 pixels.

## 0.1.8 - Notifications layout and documentation

- Rebuilt the Notifications page as two dedicated source and recent-activity columns.
- Regenerated GitHub documentation with the current project structure, logo, custom repository URL, and release workflow.

## 0.1.3 - Browser bundle compatibility fix

- Fixed the blank panel caused by `ReferenceError: process is not defined`.

## 0.1.0 - Initial MVP

- Added the HACS-compatible integration, admin-only panel, rich notification composer, test sending, templates, generated YAML, and merged-YAML audit.
