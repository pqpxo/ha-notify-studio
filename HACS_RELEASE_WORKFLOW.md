<!-- version 24 -->

# HACS Release Workflow

HACS shows a version selector only when this repository has published GitHub **Releases**. Git tags alone are not enough.

## Publish a version

1. Merge the release branch into `main` after GitHub Actions passes.
2. On GitHub, open **Releases** and select **Draft a new release**.
3. Under **Choose a tag**, create a new tag that matches the integration version with a `v` prefix:

   ```text
   v0.1.24
   ```

4. Set the target branch to `main`.
5. Use a title such as:

   ```text
   Notify Studio v0.1.24
   ```

6. Copy the relevant notes from `CHANGELOG.md`.
7. Do not mark the release as a draft or pre-release.
8. Select **Publish release**.

## Select a version in HACS

1. Open **HACS → Integrations → Notify Studio**.
2. Open the three-dot menu.
3. Select **Redownload**.
4. Under **Need a different version?**, choose a published release or `main`.
5. Download it, restart Home Assistant, then hard refresh the browser.

HACS displays the five latest published GitHub Releases plus the repository default branch when releases are available.

## Version consistency

For every release, keep these aligned:

```text
GitHub release tag                                      v0.1.24
VERSION                                                 0.1.24
custom_components/notify_studio/manifest.json           0.1.24
custom_components/notify_studio/const.py                 0.1.24
panel-src/package.json                                   0.1.24
README badge and frontend cache version                  0.1.24
```

Create a new GitHub Release only after the matching version has been merged into `main`.
