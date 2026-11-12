A public host for HTML email and web images, served from GitHub Pages.

<p align="center"><a href="https://ilghar.github.io/email-assets/">Open the live host</a> · <a href="https://github.com/Ilghar/email-assets">Repository</a> · <a href="https://ilghar.studio">ilghar.studio</a></p>

## How it's used

Files are public at:

```
https://ilghar.github.io/email-assets/<folder>/<filename>
```

Examples that are in this repo:

- Icons: `https://ilghar.github.io/email-assets/icons/instagram-192.png`
- Test images: `https://ilghar.github.io/email-assets/img-test/email-96-test.png`

Folders: `footers/`, `headers/`, `icons/`, `img-test/`, `signatures/`, and `webdings/`.

To add a file, commit it to `main`. Pages usually refreshes within a few minutes. Do not upload sensitive content.

## Auto-sync helper

From the repository root:

```bash
./scripts/auto-sync.sh main
```

Set a custom interval in seconds with `AUTO_SYNC_INTERVAL`:

```bash
AUTO_SYNC_INTERVAL=120 ./scripts/auto-sync.sh main
```

The script fetches, rebases onto `origin/main`, commits any local modifications, and pushes them on that cadence.

## Troubleshooting

If a file is not reachable after you upload it:

1. Check that it appears on the `main` branch in the GitHub interface.
2. Wait a few minutes for Pages to rebuild.
3. Confirm the URL follows `https://ilghar.github.io/email-assets/<path>`.
4. Try a shifted-reload if your browser is holding an old copy.

<sub>ilghar.studio</sub>
