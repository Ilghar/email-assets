**Fix #1 — Keep `.roles` on One Line**

* **Clients/Modes:** Gmail Web & App (light/dark), Outlook Windows desktop, Outlook.com, Yahoo Mail, ProtonMail, GMX

* **Selector/Target:** `.roles` (job titles line)

* **Symptom:** The list of job titles wraps onto multiple lines on smaller screens or in Outlook, causing the footer layout to break and misalign.

* **Root cause (1 line):** Several email clients ignore `white-space:nowrap`, so normal spaces allow line breaks.

* **Minimal diff:**

  * **CSS patch (preferred)**

    ```css
    /* before */
    .roles{
      color:#745A7A !important;
      white-space:nowrap !important;
      /* … */
    }

    /* after */
    .roles{
      color:#745A7A !important;
      white-space:nowrap !important;
      /* No CSS change needed; relies on HTML non‑breaking spaces */
    }
    ```
  * **HTML attribute fallback**

    ```html
    <!-- before -->
    <div class="roles">Product Designer <span class="role-divider">|</span> AI-SOC Analyst <span class="role-divider">|</span> Curator <span class="role-divider">|</span> Sculptor <span class="role-divider">|</span> Spatial Strategist</div>

    <!-- after -->
    <div class="roles">Product&nbsp;Designer&nbsp;<span class="role-divider">|</span>&nbsp;AI-SOC&nbsp;Analyst&nbsp;<span class="role-divider">|</span>&nbsp;Curator&nbsp;<span class="role-divider">|</span>&nbsp;Sculptor&nbsp;<span class="role-divider">|</span>&nbsp;Spatial&nbsp;Strategist</div>
    ```

  *Notes:* Use `&nbsp;` between words and before/after each `|` to eliminate allowable break points. Do **not** change fonts or add images; maintain the original classes.

* **Fallback & side-effects:** All clients support non‑breaking spaces. If a client still runs out of horizontal space on very narrow screens, it will reduce the font size per existing media rules, preserving layout. No negative impact on dark-mode or accessibility.

* **Why this works (1–2 lines):** `&nbsp;` prevents breaks, whereas `white-space:nowrap` alone is ignored in some clients. This simple HTML-level fix keeps the roles on one line across Gmail, Outlook, Yahoo, Proton, and GMX.

* **QA steps:** In Mailpit, preview the updated email in Gmail Web/App and Outlook Windows. Ensure the job titles remain on a single line at 320–480 px widths. Verify no horizontal scrolling is introduced. Use real device tests on iOS/Android to confirm.

---

**Fix #2 — Stabilise Umwelt Text Size on Mobile**

* **Clients/Modes:** Apple Mail (iOS), Gmail iOS/Android apps, Yahoo/Proton mobile web

* **Selector/Target:** `<head>` (meta tag) and global text sizing (`body`, `table`, etc.)

* **Symptom:** The 11 px Umwelt text inflates on iOS Mail or Gmail mobile, upsetting hierarchy and enlarging the Umwelt panel.

* **Root cause (1 line):** Without a viewport meta and text-size-adjust directives, some mobile clients automatically zoom and adjust font sizes.

* **Minimal diff:**

  * **CSS patch (preferred)**

    ```css
    /* before */
    /* no global text-size-adjust rules */

    /* after */
    body, table, td, div, p, a {
      -webkit-text-size-adjust:100% !important;
      -ms-text-size-adjust:100% !important;
      text-size-adjust:100% !important;
    }
    ```

  * **HTML attribute fallback**

    ```html
    <!-- before -->
    <head>
      <meta charset="utf-8"/>
      <meta name="x-apple-disable-message-reformatting"/>
      <!-- … -->
    </head>

    <!-- after -->
    <head>
      <meta charset="utf-8"/>
      <meta name="x-apple-disable-message-reformatting"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <!-- existing meta tags … -->
    </head>
    ```

  *Notes:* The meta viewport stops iOS from auto‑zooming; the global `text-size-adjust:100%` directive ensures all elements respect the intended font sizes.

* **Fallback & side-effects:** Older Outlook or desktop clients ignore the viewport meta and `text-size-adjust`, leaving them unaffected. Some very old Android mail apps may still upscale, but this is a low-priority Tier‑3 risk.

* **Why this works (1–2 lines):** A proper `viewport` meta with `initial-scale=1.0` prevents iOS Mail from zooming tiny text, and explicit `text-size-adjust` disables mobile auto-adjusting. This preserves the Umwelt panel hierarchy.

* **QA steps:** Render the updated email in Mailpit for iOS and Gmail mobile clients. Check that the Umwelt text stays proportionally smaller than body text. Confirm no unexpected horizontal zoom occurs when pinch‑zooming.

---

**Fix #3 — Preserve Colours and Prevent Blue Links in Dark Mode**

* **Clients/Modes:** Gmail Web and iOS/Android dark mode, ProtonMail dark mode

* **Selector/Target:** Anchor tags inside `.contact-text` (phone number and similar links)

* **Symptom:** In dark mode, Gmail and Proton override `color:inherit` on `<a>` tags, turning the phone number and other links bright blue and undermining the palette.

* **Root cause (1 line):** Gmail/Proton’s dark-mode algorithm forces default link colours when an anchor has no explicit colour.

* **Minimal diff:**

  * **CSS patch (preferred)**

    ```css
    /* before */
    .contact-text,
    .contact-text a{ color:#856A8F !important; }

    /* after */
    .contact-text,
    .contact-text a{
      color:#856A8F !important;
      text-decoration:none !important;
    }
    ```

  * **HTML attribute fallback**

    ```html
    <!-- before -->
    <a href="tel:+4915226996367" style="text-decoration:none;color:inherit;">+49 (0)1522 699 63 67</a>

    <!-- after -->
    <a href="tel:+4915226996367" style="color:#856A8F !important;text-decoration:none !important;">+49&nbsp;(0)1522&nbsp;699&nbsp;63&nbsp;67</a>
    ```

  *Notes:* Explicitly set the link colour inline with `!important` to override Gmail’s dark-mode transformation. Avoid `color:inherit` which Gmail strips. Apply similar inline colours to other anchor tags that display text (e.g. email address, website) if present. Social icons (image-only links) are unaffected.

* **Fallback & side-effects:** Clients that respect CSS (Apple Mail, Outlook, Yahoo) will keep the same colour scheme. On clients that ignore inline CSS (few), links may revert to blue; this is acceptable fallback since layout remains intact.

* **Why this works (1–2 lines):** In Gmail/Proton dark mode, declaring explicit inline colours with `!important` prevents auto‑inversion and preserves the purple palette. Removing `color:inherit` avoids Gmail’s fallback to blue.

* **QA steps:** Test in Mailpit’s Gmail dark‑mode preview and ProtonMail. Verify the phone number and other links remain the intended colour and do not turn blue. Confirm that hover/focus states still underline or highlight appropriately.

---

**Fix #4 — Avoid Clipping in Contact/Umwelt Panels**

* **Clients/Modes:** Gmail iOS/Android, Yahoo Mail, ProtonMail (mobile)

* **Selector/Target:** `<table class="panel contact-panel">` and `<table class="panel umwelt-panel">` (inline `overflow:hidden`)

* **Symptom:** On some mobile clients, text within these panels may be cut off because the container doesn’t allow vertical scrolling or content expansion.

* **Root cause (1 line):** The inline `overflow:hidden;` on these table elements prevents content from expanding and cannot be scrolled in Gmail mobile.

* **Minimal diff:**

  * **CSS patch (preferred)**

    ```css
    /* before */
    .contact-panel,
    .umwelt-panel{
      /* overflow:hidden set inline */
    }

    /* after */
    .contact-panel,
    .umwelt-panel{
      /* remove overflow:hidden; allow content to grow */
    }
    ```

  * **HTML attribute fallback**

    ```html
    <!-- before -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="panel contact-panel" style="…;overflow:hidden;">
      …
    </table>

    <!-- after -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" class="panel contact-panel" style="…;">
      …
    </table>
    ```

  *Notes:* Simply remove `overflow:hidden;` from the inline style attributes of the contact and Umwelt panels. Rounded corners will still apply because they are defined via `border-radius`.

* **Fallback & side-effects:** With `overflow:hidden` removed, if content were to exceed the panel height (unlikely), it will expand downward rather than clip. Some older clients may display square corners in dark mode, a minor cosmetic trade‑off (P2).

* **Why this works (1–2 lines):** Without `overflow:hidden`, the content can grow naturally; Gmail mobile doesn’t support scrolling within hidden overflow, so removal prevents clipping.

* **QA steps:** Use Mailpit to preview Gmail on Android and iOS. Check that the contact and Umwelt panels display all text without truncation. Confirm that the rounded corners remain visible and that dark‑mode colours are unchanged.

---

## S3 — Sanity Checklist (Preflight)

Before sending, review these items to ensure the template remains robust across clients:

1. **Preheader present & hidden:** Confirm the small preview text `<div style="display:none;…">` remains in place and contains relevant summary; `<u>` hack follows it.
2. **Base tag intact:** Ensure `<base target="_blank">` is present in `<head>`.
3. **DOCTYPE & meta tags:** Top of the file must begin with `<!DOCTYPE html>`; `<meta charset="utf‑8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`, `<meta name="x-apple-disable-message-reformatting">`, and colour-scheme meta tags should all be present.
4. **Fixed 640 px wrapper:** Verify the outer table uses `width="640"` and `max-width:100%`, with spacer rows (not margins) controlling vertical spacing.
5. **Dark-mode mirrors:** Every class with `.dm-…` in standard styles has corresponding `[data-ogsc]` and `u + .body-root` rules, plus Proton-specific overrides. Add new rules in all three places if you tweak colours.
6. **Paired images:** Each graphic that differs in dark mode must have `.light-mode-image` and `.dark-mode-image` siblings with appropriate `media` or OGSC rules.
7. **Non‑breaking roles:** Use `&nbsp;` between job titles and ensure responsive font size rules exist under `@media (max-width:480px)` and `@media (max-width:360px)`.
8. **Umwelt text size:** Check that the viewport meta and global `text-size-adjust:100%` are present; confirm Umwelt text is smaller than body text on mobile.
9. **Link styling:** All `<a>` elements that display text should have inline `color:#856A8F !important; text-decoration:none !important;` to avoid default blue links in dark mode; confirm telephone numbers and any URLs.
10. **Images configured:** Each `<img>` tag must include `width`, `height`, `alt`, and `style="display:block"`. Ensure no missing `width/height`.
11. **Responsive breakpoint consistency:** Any change under `@media (max-width:480px)` must also be mirrored, if needed, for dark‑mode/OGSC/Proton rules.
12. **Overflow removed:** Ensure the inline `overflow:hidden` is removed from the `contact-panel` and `umwelt-panel` tables, unless you intentionally want to clip content.
13. **Spacer rows not margins:** Use `<tr><td><div style="height:…"></div></td></tr>` for vertical spacing; avoid adding `margin-top` to tables.
14. **Validate with Mailpit:** Run the HTML through Mailpit for each Tier‑1 client view (Apple Mail, Gmail Web/App, Outlook Desktop, Outlook.com). Check for new errors or warnings.
15. **Spot-check real devices:** Send a test email to yourself and view it on at least an iPhone (light/dark) and an Android Gmail client; confirm colours, spacing, and text sizes.

Following this checklist and applying the minimal diffs above will help ensure your template renders consistently across Tier‑1 and Tier‑2 clients while respecting all non‑negotiables and preserving your visual language.




Additional Fix Cards (S2)
The following fixes complement the previous set of surgical patches and checklist. They focus on responsive images, dark‑mode image swaps and signature sizing. These should be applied after completing the first round of fixes.

Fix #5 — Make main images responsive
Clients/Modes: all, particularly mobile views in Gmail/Webmail/Outlook.
Target: large <img> elements (header and divider images).
Symptom: on narrow screens the fixed‑width header/divider images overflow or cause horizontal scrolling because they remain at 612 px wide.
Root cause: the images have a fixed pixel width (612 px) with no fluid fallback, so clients that ignore CSS width leave them at full size.
Minimal patch:
CSS: change the .header-image and .divider-image classes to use width:100% !important; max-width:612px !important; height:auto !important; while keeping display:block !important.
HTML: keep the width="612" attribute in the <img> tag to provide a fallback for clients that ignore CSS. Example:
<img class="header-image" src="header-612.png" width="612" alt="Header" style="display:block;width:100%;max-width:612px;height:auto;">
Notes: the CSS makes the image fluid on small screens while the width attribute preserves a fixed width for Outlook and clients that ignore CSS.
QA steps: preview on mobile (Mailpit or device) to verify the header and divider images scale down to fit narrow screens and never cause horizontal scrolling. Check Outlook desktop and web to ensure the image still displays at the intended size.
Rationale: setting width:100% with a max-width constraint allows the image to shrink with its container, while the HTML width attribute provides a consistent fallback for clients that ignore CSS.

Fix #6 — Hide light‑mode images under dark‑mode selectors
Clients/Modes: Gmail/Webmail (all), Outlook.com dark mode, ProtonMail dark theme.
Target: images with the .light-mode-image and .dark-mode-image classes.
Symptom: in dark mode the “light‑mode” images (e.g. purple header) may still appear, or the “dark‑mode” images may not show, because only media queries are used to swap them.
Root cause: dark‑mode CSS currently relies on media queries, but Gmail/Outlook Web use a [data-ogsc] attribute to signal dark mode. Without [data-ogsc] selectors, the images are not swapped.
Minimal patch:
CSS: add selectors targeting [data-ogsc] and the Gmail <u> + .body-root hack to hide the light‑mode image and show the dark‑mode image:

[data-ogsc] .light-mode-image,
u + .body-root .light-mode-image {
 display:none !important;
}
[data-ogsc] .dark-mode-image,
u + .body-root .dark-mode-image {
 display:block !important;
}

HTML: no changes needed; the paired images already have the correct classes.
QA steps: preview in Mailpit or real dark‑mode previews for Gmail and Outlook.com. Ensure the light‑mode image is hidden and the dark‑mode image is shown when dark mode is active. Confirm that in light mode the dark image remains hidden and other clients (Apple Mail) continue to swap images via media queries.
Rationale: by targeting [data-ogsc] (used by Gmail/Outlook dark mode) and the Gmail <u> hack, we explicitly control which image is displayed in dark mode, following community best practices.
Fix #7 — Use pixel width for the signature image
Clients/Modes: all, notably Outlook and other clients sensitive to CSS units.
Target: the hand‑signature <img> element (currently styled with width:2.4in).
Symptom: some clients (especially Outlook) may misinterpret inch units, causing the signature to render at an incorrect size or not scale predictably.
Root cause: CSS inch units (in) are unreliable across platforms; the image lacks a width attribute.
Minimal patch:
CSS/HTML: replace the width:2.4in style with a pixel value and add a matching width attribute. For example, width:230px; and width="230" (approximate conversion of 2.4 in at 96 dpi):
<img src="signature-600-purple.png" alt="Hand-signature: Ilgar Dadgostari"
    width="230" style="display:block; border:0; width:230px; height:auto; margin:0 0 20px 0; opacity:0.88;">
Notes: choose the pixel width that best matches the original design. The height should remain auto to preserve aspect ratio.
QA steps: test the signature across clients (Outlook, Gmail, iOS/Android) to confirm it appears at the intended size and opacity. Verify the change does not disrupt layout or spacing.
Rationale: explicit pixel widths with a matching width attribute prevent inconsistent rendering. Many email clients default to the HTML width when CSS is ignored, so supplying both ensures consistency.
Updated sanity checklist
The following items extend the original sanity checklist. All previous points still apply.

Responsive images: header and divider images should use width:100%; max-width:612px; height:auto; in CSS and retain a width="612" attribute so they shrink on small screens.
OGSC image swap: verify that dark‑mode image swapping works in Gmail/Outlook Web by confirming that .light-mode-image elements are hidden and .dark-mode-image elements are shown when [data-ogsc] is present or when the Gmail <u> hack triggers.
Signature image width: ensure the signature image uses a pixel width (e.g. 230 px) with a matching width attribute. Confirm no remaining in units in image styles.
Overflow removed: verify that overflow:hidden has been removed from the inline styles of the contact and Umwelt panels.
Image attributes: every <img> must include width, height, alt, and style="display:block". Large images should have a max-width or width:100% in CSS.
Spacer rows, not margins: continue to use spacer rows (<tr><td><div style="height:…"></div></td></tr>) for vertical spacing; avoid CSS margins on tables.
Validate with Mailpit: preview the updated email in each Tier‑1 client (Apple Mail, Gmail Web/App, Outlook Desktop, Outlook.com, Yahoo, Proton) to ensure the new fixes do not introduce regressions.
Spot‑check real devices: send test emails to actual devices in light and dark modes to confirm images resize correctly, dark‑mode images swap, and the signature image displays at the intended size.
Applying these additional fixes alongside the original S2 patches will further improve the robustness and responsiveness of the email template.

