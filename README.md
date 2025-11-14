# Email Assets Repository

This repository serves as a public image hosting source for HTML emails and web content via GitHub Pages.

## Accessing Files

All files in this repository are publicly accessible via GitHub Pages at:
```
https://ilghar.github.io/email-assets/<folder>/<filename>
```

### Examples:
- Icons: `https://ilghar.github.io/email-assets/icons/instagram-96.png`
- Test Images: `https://ilghar.github.io/email-assets/img-test/email-96-test.png`
- Headers: `https://ilghar.github.io/email-assets/headers/<filename>`
- Footers: `https://ilghar.github.io/email-assets/footers/<filename>`
- Any folder: `https://ilghar.github.io/email-assets/<folder-name>/<filename>`

## How to Add New Files

1. **Add files to any folder** in the repository (create new folders as needed)
2. **Commit and push to the `main` branch**
3. **Wait 1-5 minutes** for GitHub Pages to rebuild and deploy
4. **Access your files** using the URL pattern above

## Important Notes

- **GitHub Pages serves from the `main` branch** - ensure your files are committed to main
- Changes typically appear within 1-5 minutes after pushing to the main branch
- All files are publicly accessible - do not upload sensitive content

## Repository Structure

```
email-assets/
├── footers/           # Email footer images
├── headers/           # Email header images
├── icons/             # Icon images
├── img-test/          # Test images
├── signatures/        # Email signature images
```

## Auto-sync helper

Run the script from the repository root to commit and push changes automatically:

```bash
cd "/Users/ilghar_studio/Documents/GitHub/email-assets"
./scripts/auto-sync.sh main
```

Set a custom interval (seconds) with `AUTO_SYNC_INTERVAL`:

```bash
cd "/Users/ilghar_studio/Documents/GitHub/email-assets"
AUTO_SYNC_INTERVAL=120 ./scripts/auto-sync.sh main
```

The script fetches, rebases onto `origin/main`, commits any local modifications, and pushes them on the defined cadence.


## Troubleshooting

If your files are not accessible after uploading:

1. **Verify files are on the main branch**: Check that your files appear in the GitHub web interface on the main branch
2. **Wait for deployment**: GitHub Pages rebuilds take 1-5 minutes
3. **Check the URL**: Ensure you're using the correct URL format: `https://ilghar.github.io/email-assets/<path>`
4. **Clear browser cache**: Your browser might be caching old content

For any issues, check the repository's GitHub Pages settings under Settings → Pages.

