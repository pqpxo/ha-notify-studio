<!-- version 21 -->

# Changelog

## 0.1.21 - Persistent quick controls and visual refinement

- Fixed quick-control favourites being removed during panel load or responsive layout changes. Saved favourites now remain in Home Assistant storage across restarts; smaller displays temporarily show only the controls that fit.
- Increased the favourite-star icon size.
- Applied the same `color-mix(in srgb, var(--primary-color) 11%, var(--card-background-color))` background to every quick-control button.
- Added `rgba(0, 0, 0, 0.35) 0px 5px 15px` shadows to standard buttons, quick controls, and Notify Studio cards.
- Bumped the frontend cache URL and project metadata to `0.1.21`.
