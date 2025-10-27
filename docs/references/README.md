# Project References

Curate the docs, articles, specs, and snippets you want to keep at your fingertips while working in this repo (locally, in Dev Containers, or in GitHub Codespaces).

This page opens automatically at startup so your references are one click away.

## How to add links (quick)

- Edit `docs/references/links.json` and paste new entries following the schema below.
- Optionally add notes, tags, and a short category. Keep titles short; we’ll display the title text here.

Schema for each link object:

```
{
  "title": "Clear, short title",
  "url": "https://example.com/article",
  "tags": ["email", "css", "dark-mode"],
  "category": "Dark mode",
  "notes": "Optional: why this is useful or a usage tip"
}
```

## Suggested categories (feel free to change)

- Email HTML basics
- CSS resets and layouts
- Dark mode and color
- Client quirks (Gmail, Outlook, Apple Mail)
- Testing tools (Litmus, EoA, etc.)
- Accessibility
- Performance/Optimization

## Current links

Below is a human-friendly rollup of `links.json`. You can also just use the JSON file if you prefer.

> Tip: Use the Outline panel in the Markdown preview or `Cmd+F` to search.

<!-- The list below is intentionally hand-maintained for now. Paste top refs here as a quick index. -->

### Email resources

- Can I email – repository: https://github.com/hteumeuleu/caniemail/tree/main
- Can I email – tests: https://github.com/hteumeuleu/caniemail/tree/main/tests
- Caniemail tests: gradients, flexbox, flex-wrap, @font-face, light-dark(), line-height, prefers-color-scheme, color-scheme
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-gradients.html
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-flexbox.html
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-flex-wrap.html
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-font-face.html
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-function-light-dark.html
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-line-height.html
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-media-prefers-color-scheme.html
  - https://github.com/hteumeuleu/caniemail/blob/main/tests/css-color-scheme.html
- email-bugs issues: https://github.com/hteumeuleu/email-bugs/issues (pages 2–5 also listed)
- LT Email Module Library: https://github.com/lt-email-dev/lt-email-module-library/tree/gh-pages
  - index: https://github.com/lt-email-dev/lt-email-module-library/blob/gh-pages/index.md
  - dark mode: https://github.com/lt-email-dev/lt-email-module-library/blob/gh-pages/dark-mode.md
- Email on Acid (selected):
  - Dark mode for email: https://www.emailonacid.com/blog/article/email-development/dark-mode-for-email/
  - Code emails for Outlook: https://www.emailonacid.com/blog/article/email-development/how-to-code-emails-for-outlook/
  - Mobile optimization & retina images: https://www.emailonacid.com/blog/article/email-development/mobile-optimization-retina-images-in-email/
- Guides and references:
  - Smashing Magazine: https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/?ref=emailresourc.es
  - Campaign Monitor CSS support: https://www.campaignmonitor.com/css/?ref=emailresourc.es
  - Campaign Monitor – Coding HTML emails: https://www.campaignmonitor.com/dev-resources/guides/coding-html-emails/
  - Campaign Monitor – Mobile: https://www.campaignmonitor.com/dev-resources/guides/mobile/
- Blog posts and fixes:
  - Hteumeuleu – Gmail dark mode (blend modes): https://www.hteumeuleu.com/2021/fixing-gmail-dark-mode-css-blend-modes/
  - Hteumeuleu – Outlook rendering engine: https://www.hteumeuleu.com/2020/outlook-rendering-engine/?ref=emailresourc.es
  - Hteumeuleu – Background properties in VML: https://www.hteumeuleu.com/2021/background-properties-in-vml/
  - CM Engineering – Outlook-specific CSS: https://cm.engineering/fixing-bugs-with-outlook-specific-css-f4b8ae5be4f4
  - Tuts+ – Fix Outlook dark mode problems: https://webdesign.tutsplus.com/how-to-fix-outlook-dark-mode-problems--cms-37718t
  - Tuts+ – Fix buttons in dark mode: https://webdesign.tutsplus.com/fixing-problems-with-buttons-in-dark-mode-email-design--cms-39411a?ref=emailresourc.es
  - Medium – Dark-mode friendly mailers: https://ruwanthisulanjali.medium.com/how-i-created-dark-mode-friendly-mailers-d40e15e2a5f5
  - Dev.to – Dark mode in AMP email: https://dev.to/bdjang/exploring-dark-mode-in-amp-email-5gm7
- Good Email Code:
  - picture: https://www.goodemailcode.com/email-enhancements/picture
  - stop Gmail image popup: https://www.goodemailcode.com/email-enhancements/stop-gmail-image-popup
  - CSS art (+ Outlook support): https://www.goodemailcode.com/email-enhancements/css-art
- Campaigns and tools:
  - HowToTarget.email: https://www.howtotarget.email
  - MailNinja previewer: https://mailninja.co/email-previewer?ref=emailresourc.es
  - Badsender – ESP HTML bugs: https://github.com/Badsender-com/esp-html-bugs?ref=emailresourc.es
  - Parcel share: https://parcel.io/e/f6ce2d2f-372c-459f-82af-42c01c4a8820

### MDN (reference)

- HTML Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference
- Elements: a, img, button
  - a: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a
  - img: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img (srcset: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#srcset)
  - button: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button
- Selectors: :link, :visited
  - :link: https://developer.mozilla.org/en-US/docs/Web/CSS/:link
  - :visited: https://developer.mozilla.org/en-US/docs/Web/CSS/:visited
- Layout and alignment:
  - Flexbox basics: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
  - Aligning items in flex: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container
  - align-content: https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
  - align-items: https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
  - align-self: https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
  - alignment-baseline: https://developer.mozilla.org/en-US/docs/Web/CSS/alignment-baseline
  - dominant-baseline: https://developer.mozilla.org/en-US/docs/Web/CSS/dominant-baseline
  - column-width: https://developer.mozilla.org/en-US/docs/Web/CSS/column-width
- Color and gradients:
  - conic-gradient(): https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/conic-gradient
  - linear-gradient(): https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
  - light-dark(): https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark
  - color-interpolation-method: https://developer.mozilla.org/en-US/docs/Web/CSS/color-interpolation-method
- Borders and effects:
  - border-radius: https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
  - Border-radius generator: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Border-radius_generator
  - Box-shadow generator: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders/Box-shadow_generator

### Specs and standards

- WHATWG HTML
  - Non‑conforming features: https://html.spec.whatwg.org/multipage/obsolete.html#non-conforming-features
  - input type=tel: https://html.spec.whatwg.org/multipage/input.html#telephone-state-(type=tel)
  - :visited selector: https://html.spec.whatwg.org/multipage/semantics-other.html#selector-visited
  - Intro – background: https://html.spec.whatwg.org/multipage/introduction.html#background
- CSSWG / W3C
  - CSS Images Level 3: https://www.w3.org/TR/css-images-3/
  - CSS Images Level 4 – conic-gradients: https://www.w3.org/TR/css-images-4/#conic-gradients
  - Selectors spec – :visited: https://drafts.csswg.org/selectors/#visited-pseudo
  - CSS Color 5 – light-dark(): https://drafts.csswg.org/css-color-5/#light-dark
  - Align – align-items: https://drafts.csswg.org/css-align/#align-items-property
  - VML NOTE: https://www.w3.org/TR/NOTE-VML#-toc416858389
  - FXTF Drafts: https://github.com/w3c/fxtf-drafts/
  - Backgrounds (draft branches):
    - css-backgrounds-3: https://github.com/w3c/csswg-drafts/tree/noamr-patch-3/css-backgrounds-3
    - css-backgrounds-4: https://github.com/w3c/csswg-drafts/tree/noamr-patch-3/css-backgrounds-4
    - ruby-1: https://github.com/w3c/csswg-drafts/tree/noamr-patch-3/css-ruby-1
    - borders-4 ridge-borders color note: https://github.com/w3c/csswg-drafts/blob/noamr-patch-3/css-borders-4/ridge-borders/color.html
  - Backgrounds 3 issues/docs:
    - issues awk: https://github.com/w3c/csswg-drafts/blob/main/css-backgrounds-3/issues-txt-to-html.awk
    - issues CR 2014: https://github.com/w3c/csswg-drafts/blob/main/css-backgrounds-3/issues-cr-2014.html
    - transition updated CR 2017: https://github.com/w3c/csswg-drafts/blob/main/css-backgrounds-3/transition-updated-cr-2017-09.md
    - radius expansion continuity: https://github.com/w3c/csswg-drafts/blob/main/css-backgrounds-3/radius-expansion-continuity.html
  - Selected commits (csswg-drafts):
    - f65d6c… • 05d9b8… • b66764… • 281749… • 930a89… • 830904… • 7afea7… • 151b22… • cecb9f… • b554cf… • b2aaa9…

### Tools and playgrounds

- Flexplorer: https://bennettfeely.com/flexplorer/
- Image effects: https://bennettfeely.com/image-effects/
- Gradients: https://bennettfeely.com/gradients/
- Fluid Typography: https://fluid-typography.netlify.app/?ref=emailresourc.es
- MailNinja previewer: https://mailninja.co/email-previewer?ref=emailresourc.es
- Parcel share (email): https://parcel.io/e/f6ce2d2f-372c-459f-82af-42c01c4a8820
- GitHub.dev workspace: https://neglected-spooky-poltergeist-p794pjr7qvjhr4xj.github.dev
- Awesome Copilot – Chat modes: https://github.com/github/awesome-copilot/tree/main/chatmodes

### Articles (general CSS)

- CSS-Tricks – Blend modes basics: https://css-tricks.com/basics-css-blend-modes/

## Using these in Codespaces or Dev Containers

- GitHub Codespaces and local VS Code both read this folder—no special setup required.
- We set `workbench.startupEditor: readme`, so this page appears on open.
- Optional: in the future we can add a dev container that pre-installs Markdown tools and opens this page on start.

## Maintenance

- Broken links are caught by CI (see `.github/workflows/link-check.yml`).
- Keep `links.json` structured; we can add a small script later to auto-generate this README list from JSON if useful.
- Legacy/archived resources are moved into `docs/references/outdated/` and not used as primary references.
