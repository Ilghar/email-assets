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
- Headers: `https://ilghar.github.io/email-assets/headers/<your-file>`
- Footers: `https://ilghar.github.io/email-assets/footers/<your-file>`

## How to Add New Files

1. **Add files to any folder** in the repository (create new folders as needed)
2. **Commit and push to the `main` branch**
3. **Wait 1-5 minutes** for GitHub Pages to rebuild and deploy
4. **Access your files** using the URL pattern above

## Important Notes

- **GitHub Pages serves from the `main` branch** - ensure your files are committed to main
- The `.nojekyll` file in the root directory disables Jekyll processing, allowing all file types to be served directly
- Changes typically appear within 1-5 minutes after pushing to the main branch
- All files are publicly accessible - do not upload sensitive content

## Repository Structure

```
email-assets/
├── .nojekyll          # Disables Jekyll processing
├── footers/           # Email footer images
├── headers/           # Email header images
├── icons/             # Icon images
├── img-test/          # Test images
├── signatures/        # Email signature images
└── oklch-picker/      # Color picker files
```

## Troubleshooting

If your files are not accessible after uploading:

1. **Verify files are on the main branch**: Check that your files appear in the GitHub web interface on the main branch
2. **Wait for deployment**: GitHub Pages rebuilds take 1-5 minutes
3. **Check the URL**: Ensure you're using the correct URL format: `https://ilghar.github.io/email-assets/<path>`
4. **Clear browser cache**: Your browser might be caching old content

For any issues, check the repository's GitHub Pages settings under Settings → Pages.
