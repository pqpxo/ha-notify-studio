<!-- version 9 -->
# Changelog

## 0.1.12 - Button spacing and theme-border refinement

- Removed the forced white button-outline custom property. Buttons now use Home Assistant theme divider borders.
- Increased standard button horizontal padding to `0px 20px`.
- Updated compact-button padding to `10px 13px 10px 13px`.
- Updated repository documentation and issue-tracker URLs for `pqpxo/ha-notify-studio`.


## 0.1.9 - Larger header logo

- Increased the Notify Studio header logo to 90 × 90 pixels.
- Bumped the panel cache version so Home Assistant loads the updated frontend bundle.


## 0.1.9 - Notifications layout and documentation

- Rebuilt the Notifications page as two dedicated desktop columns.
- Kept the Notifications filters and all notification-source cards in the left column.
- Moved Recently triggered push activity into its own right-hand column.
- Retained the three-card audit grid inside the source column on wide displays, with responsive two- and one-card fallbacks.
- Regenerated the README to reflect the current logo, repository location, navigation, features, installation path, and HACS release workflow.
- Updated the integration manifest and Config Flow-only setup for Hassfest compatibility.
- Bumped the panel cache-busting version to `0.1.9`.

## 0.1.7 - Notifications navigation and audit improvements

- Renamed Audit to Notifications and moved it to the first navigation position.
- Added category, label, source type, and notify-device audit filters.
- Added category and label display-name resolution for registered runtime entities.
- Removed the audit grid/list switch and standardised a three-column audit-card layout.

## 0.1.6 - Audit controls and panel refinement

- Removed the standalone Automations navigation tab.
- Added a browser-compatible Copy fallback and a shortcut to Home Assistant Automations.
- Moved recent push activity into the Notifications workflow.
- Added runtime controls and organisation filters to audit results.

## 0.1.5 - Preview and recent activity

- Added live template preview rendering for title and message fields.
- Added recent notification-related automation and script activity.
- Simplified the Composer action row.

## 0.1.3 - Browser bundle compatibility fix

- Fixed the blank panel caused by `ReferenceError: process is not defined`.
- Replaced `process.env.NODE_ENV` at build time for browser library builds.

## 0.1.0 - Initial MVP

- Added the HACS-compatible integration, admin-only panel, rich notification composer, test sending, templates, generated YAML, and merged-YAML audit.
