<!-- version 22 -->

# Changelog

## 0.1.22 - Reliable quick controls and theme-aware surfaces

- Fixed quick-control capacity recalculation when leaving and returning to Notifications. The hidden panel is no longer measured at zero width, so saved favourites continue to show at the available desktop capacity rather than collapsing to one control.
- Restored correct favourite selection limits after navigation, allowing additional controls to be starred whenever the current quick row has space.
- Applied one Home Assistant theme-derived control surface to standard buttons, quick controls, cards, and action buttons. Manage groups, Scan now, Run test, and View Automation now use the same themed background as favourite controls.
- Replaced remaining fixed accent colours in buttons, custom-area tags, status chips, and favourite-star controls with Home Assistant theme variables.
- Bumped the frontend cache URL and project metadata to `0.1.22`.

## 0.1.21 - Persistent quick controls and visual refinement

- Fixed quick-control favourites being removed during panel load or responsive layout changes. Saved favourites now remain in Home Assistant storage across restarts; smaller displays temporarily show only the controls that fit.
- Increased the favourite-star icon size.
- Applied the same `color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color))` background to every quick-control button.
- Added `rgba(0, 0, 0, 0.35) 0px 5px 15px` shadows to standard buttons, quick controls, and Notify Studio cards.
- Bumped the frontend cache URL and project metadata to `0.1.21`.
