# Specification: application-foundation — Tasks

Tasks are ordered for sequential execution. Each task is small enough to review in one sitting. Complete and verify each task before beginning the next. Do not write application code for features outside this specification's scope.

---

## TASK-001 — Create the folder structure and placeholder files

**Depends on:** nothing

**Work:**
- Create directories: `src/css/`, `src/js/`, `src/components/`, `data/cases/`, `assets/`, `docs/`.
- Create empty placeholder files:
  - `src/components/README.md` (placeholder header)
  - `data/schema.md` (placeholder header)
  - `assets/CREDITS.md` (placeholder header row)
  - `docs/kiro-log.md` (placeholder header)
- Do not create `index.html` or any CSS/JS files yet.
- Do not modify any existing repository file.

**Verify:**
- All directories exist.
- All placeholder files exist with at least a heading line.
- `README.md`, `LICENSE`, foundation documents, and `.kiro/` files are unmodified.
- No build artefacts or `node_modules` directory is present.

---

## TASK-002 — Write the case JSON skeleton files

**Depends on:** TASK-001

**Work:**
- Create `data/cases/index.json` containing an array with `id` and `name` for all eight locked cases, in the order specified in design §5.
- Create all eight case JSON files (`ftx.json`, `mt-gox.json`, `terra-luna.json`, `bitconnect.json`, `onecoin.json`, `three-arrows-capital.json`, `celsius-network.json`, `thodex.json`) in `data/cases/`.
- Each file must follow the skeleton from design §5 exactly. Only `"id"` and `"name"` differ between files. All other fields use `"[PLACEHOLDER — research required]"` for strings, `[]` for arrays, and `{}` for empty objects.
- No field may contain real dates, financial figures, real people's names, allegations, or any content resembling a factual claim about the named project.

**Verify:**
- `data/cases/index.json` parses as valid JSON and contains exactly eight entries.
- Each case file parses as valid JSON.
- Each case file's `"id"` field matches its filename (e.g., `"id": "ftx"` in `ftx.json`).
- All string fields other than `"id"` and `"name"` contain `"[PLACEHOLDER — research required]"`.
- No case file contains real historical content.

---

## TASK-003 — Write the case data schema document

**Depends on:** TASK-002

**Work:**
- Write `data/schema.md` documenting every field in the case JSON schema.
- For each field: name, type (string/object/array), required or optional, purpose, and constraints.
- Document all allowed `claimType` values and when to apply each, drawn from the research steering file.
- Explain the placeholder convention and how to transition fields to real content.
- Include a pointer to `CASE_RESEARCH_STANDARD.md` for the research gate requirements.

**Verify:**
- Every field in the case JSON skeleton is documented.
- All seven `claimType` values are listed.
- The document references `CASE_RESEARCH_STANDARD.md` by name.

---

## TASK-004 — Write the CSS tokens file

**Depends on:** TASK-001

**Work:**
- Create `src/css/tokens.css`.
- Define all ten palette color custom properties on `:root` with names and values exactly matching REQ-003 and design §3.
- Define `--font-display`, `--font-narrative`, `--font-ui` custom properties with appropriate font-family stacks. Cinzel for display, Merriweather for narrative, a system sans-serif stack for UI.
- Add `@import` rules (or `<link>` notes) for Google Fonts: Cinzel and Merriweather. Font loading is handled in `index.html` via `<link rel="preconnect">` and `<link rel="stylesheet">` — document this in a comment.
- Define a type scale (`--text-xs` through `--text-4xl`) and a spacing scale (`--space-1` through `--space-16`).
- Define `--transition-base` for use only inside `prefers-reduced-motion: no-preference` blocks.
- Include a comment at the top of the file stating: "All color values are drawn from the approved palette. Do not add colors outside this file without project-owner approval."

**Verify:**
- All ten palette color properties are present with correct hex values.
- Font stacks are defined.
- No color value appears in this file that is not in the approved palette.

---

## TASK-005 — Write the CSS reset and base files

**Depends on:** TASK-004

**Work:**
- Create `src/css/reset.css` with the minimal reset described in design §3: box-sizing, margin/padding zeroing, `ul[role="list"]` list-style removal, and `img/video` max-width. Do not reset `outline` or any focus property.
- Create `src/css/base.css` setting:
  - `body` background, color, font-family, and line-height using palette and font tokens.
  - Heading styles for `h1`–`h3` using `--font-display`.
  - Global `:focus-visible` outline: `2px solid var(--color-moonlight-lavender); outline-offset: 3px;` — applied universally, never suppressed.
  - Link color and hover state using palette tokens.
  - Add a comment beside the `:focus-visible` rule citing the contrast verification: "Moonlight lavender #B8A2D6 on void-black #100D16: 8.41:1. On deep-charcoal #1B1722: 7.70:1. On cemetery-purple #30213F: 6.49:1. All exceed the 3:1 minimum."

**Verify:**
- `outline` and `outline-offset` are only set, never removed or set to `none` without an equivalent replacement.
- All color references use `var(--color-*)` tokens.
- The focus contrast comment is present.

---

## TASK-006 — Write the layout CSS

**Depends on:** TASK-005

**Work:**
- Create `src/css/layout.css`.
- Implement the `body` flex column, `main` flex-grow, and `.container` max-width pattern from design §3.
- Define the three breakpoints: default (360 px), `min-width: 48em`, `min-width: 80em`.
- Ensure sections inside `main` use the `.container` class for consistent horizontal padding.
- Wrap any animated layout transitions in `@media (prefers-reduced-motion: no-preference)`.

**Verify:**
- At 360 px viewport width: no horizontal scrollbar, no clipped text.
- At 768 px: layout is wider and `.container` constrains content.
- At 1280 px: content does not stretch to full viewport width.
- No JavaScript is required for the layout to render correctly.

---

## TASK-007 — Write the navigation CSS

**Depends on:** TASK-006

**Work:**
- Create `src/css/navigation.css`.
- Implement the skip-to-content link: visually hidden by default using `.visually-hidden`, visible on `:focus-visible`.
- Implement desktop nav: horizontal flex row of links, `.nav-toggle` hidden.
- Implement mobile nav (below 48 em):
  - `.nav-toggle` button is visible.
  - `#nav-list` is visible by default (no JavaScript required).
  - When the `js-nav-ready` class is present on the `<nav>` element, `#nav-list` is hidden by default and the toggle controls its visibility via `[aria-expanded="true"]`.
- Wrap all navigation transitions in `@media (prefers-reduced-motion: no-preference)` with a comment explaining the purpose.
- Apply focus indicators using `--color-moonlight-lavender` consistent with `base.css`.

**Verify:**
- With JavaScript disabled: nav list is visible at all widths. Toggle button does not control or hide anything.
- With JavaScript enabled: nav list is toggled by the button on mobile. Desktop layout is unchanged.
- Skip link appears on focus and targets `#main-content`.
- No nav element has `outline: none` without a replacement.

---

## TASK-008 — Write the components CSS

**Depends on:** TASK-005

**Work:**
- Create `src/css/components.css`.
- Implement `.visually-hidden` using the clip-path technique (not `display:none`).
- Implement `.status-badge` with three modifier classes:
  - `.status-badge--unexamined`: text color `--color-fog-grey`, left border in that color.
  - `.status-badge--in-progress`: text color `--color-antique-gold`, left border in that color.
  - `.status-badge--examined`: text color `--color-moonlight-lavender`, left border in that color.
  - Each badge renders its label text in HTML; color is supplementary, not the sole indicator.
- Implement `.card`: border, padding, background using palette tokens. No `cursor: pointer` or interactive styles yet (cards are non-interactive at this phase).
- Implement `.loading-indicator`: a simple animated ellipsis or pulsing text. Animation wrapped in `@media (prefers-reduced-motion: no-preference)`.
- Implement `.empty-state`: centered text, `--font-narrative`, appropriate padding.
- Implement `.error-state`: error message text and a `.btn-retry` button styled using palette tokens.

**Verify:**
- Each badge is distinguishable by its text label alone with color disabled (e.g., in a browser high-contrast mode or grayscale view).
- The loading indicator animation is absent when `prefers-reduced-motion: reduce` is active.
- `.visually-hidden` content is announced by a screen reader but not visible.
- All text in components meets 4.5:1 contrast against their backgrounds.

---

## TASK-009 — Write index.html

**Depends on:** TASK-004, TASK-007

**Work:**
- Create `index.html` at the repository root.
- Implement the full HTML structure from design §2.
- Link Google Fonts (Cinzel and Merriweather) via `<link rel="preconnect">` and `<link rel="stylesheet">` in `<head>`.
- Link all six stylesheets in the order specified in design §3.
- Add the `<script type="module" src="src/js/main.js">` tag at the end of `<body>`.
- Add a static fallback text node inside `#case-list-region`: "Case content will be listed here." This text is replaced by JavaScript when cases load; it remains visible if JavaScript is unavailable.
- Do not use any `<div>` or `<span>` where a semantic element is more appropriate.
- Do not add any inline styles.

**Verify:**
- HTML validates without errors (W3C validator or equivalent).
- Page renders a coherent structure with CSS disabled.
- Page renders a coherent structure with JavaScript disabled (all four sections visible, nav visible at all sizes, fallback text visible in case-archives section).
- No inline styles.
- `lang="en"` is set on `<html>`.
- `<meta charset>` and `<meta name="viewport">` are present.

---

## TASK-010 — Write the data-loader JavaScript module

**Depends on:** TASK-002, TASK-009

**Work:**
- Create `src/js/data-loader.js`.
- Implement `DataLoadError` class extending `Error` with a `code` property accepting `"FETCH_FAILED"` or `"INVALID_DATA"`.
- Implement `async function loadCaseIndex()` as described in design §4.
- Implement `async function loadCase(id)` as described in design §4.
- Export both functions as named exports.
- Add a module-level comment block stating the module's purpose, its two exports, and what `DataLoadError` codes it can throw.

**Verify:**
- `loadCaseIndex()` returns the parsed array when served via a local HTTP server.
- `loadCaseIndex()` throws `DataLoadError` with code `"FETCH_FAILED"` when the file is unreachable.
- `loadCase("ftx")` returns the parsed `ftx.json` object.
- `loadCase("ftx")` throws `DataLoadError` with code `"INVALID_DATA"` when given a mismatched ID.
- `loadCase("")` throws `DataLoadError` with code `"INVALID_DATA"`.
- No case content is generated or hard-coded in this module.
- Browser console shows no errors on a successful load.

---

## TASK-011 — Write the nav JavaScript module

**Depends on:** TASK-009

**Work:**
- Create `src/js/nav.js`.
- Export a single function `initNav()`.
- Add a module-level comment block stating the module's purpose and its one export.
- Inside `initNav()`, implement the following behavior:

**Setup:**
- Select the `<nav>` element, the `.nav-toggle` button, and `#nav-list`.
- Add the `js-nav-ready` class to the `<nav>` element, activating the CSS-controlled hidden-by-default mobile nav behavior.

**Opening the menu (toggle button clicked while closed):**
- Set `aria-expanded="true"` on `.nav-toggle`.
- Move focus to the first `<a>` inside `#nav-list`.

**Closing the menu — toggle button:**
- Set `aria-expanded="false"` on `.nav-toggle`.
- Return focus to `.nav-toggle`.

**Closing the menu — Escape key:**
- When Escape is pressed while the menu is open, set `aria-expanded="false"` on `.nav-toggle`.
- Return focus to `.nav-toggle`.

**Closing the menu — focus leaves the nav naturally (focusout):**
- When a `focusout` event fires on the `<nav>` and the new focus target (`event.relatedTarget`) is outside the `<nav>` element, set `aria-expanded="false"`.
- Do **not** call `.focus()` on the toggle button in this case. The user's focus has already moved naturally to their intended destination. Pulling it back to the toggle would interrupt their Tab flow.

**aria-current update:**
- Set `aria-current="page"` on the nav link whose `href` matches the current URL hash. Remove it from all other links.

**No other concerns belong in this module.** It must not import or reference data-loader, localStorage, progress states, or any other application module.

**Verify:**
- With JavaScript disabled: nav list remains visible at all widths; no broken or hidden state.
- **Toggle open:** clicking the toggle button opens the menu and moves focus to the first nav link.
- **Toggle close:** clicking the toggle button again closes the menu and returns focus to the toggle button.
- **Escape close:** pressing Escape while the menu is open closes the menu and returns focus to the toggle button.
- **focusout close:** pressing Tab from the last nav link closes the menu. Focus continues forward to the next logical element on the page (e.g., the first interactive element in `<main>`). Focus is not pulled back to the toggle button.
- **focusout close:** pressing Shift+Tab from the first nav link closes the menu. Focus continues backward to the previous logical element. Focus is not pulled back to the toggle button.
- `aria-expanded` on the toggle correctly reflects the menu state at all times.
- The module has no knowledge of data loading, case content, progress, or localStorage.

---

## TASK-012 — Write the main JavaScript entry point and wire the case list

**Depends on:** TASK-010, TASK-011

**Work:**
- Create `src/js/main.js`.
- Add a module-level comment block listing its imports (`nav.js`, `data-loader.js`) and their responsibilities.
- Call `initNav()` on `DOMContentLoaded`.
- Implement the case list rendering sequence from design §6:
  1. Show loading indicator in `#case-list-region`.
  2. Call `loadCaseIndex()`.
  3. On success with items: render a `<ul>` of non-interactive `.card` elements showing case name, "Research in progress." description, and an "Unexamined" status badge.
  4. On success with empty array: render empty-state markup.
  5. On `DataLoadError`: render error-state markup with a "Try again" button.
- The retry button re-runs the full sequence from step 1.
- Do not render `<a>` links pointing to case detail pages. Cards are display-only at this phase.
- Import only `nav.js` and `data-loader.js`. Do not import or create any other module.

**Verify:**
- Serving the project via a local HTTP server: eight case cards appear in the case archives section.
- Each card shows the case name and "Research in progress." text. No historical claims appear.
- Each card shows an "Unexamined" badge.
- No card contains an `<a>` link.
- With the JSON files temporarily renamed to trigger a 404: the error state is shown and "Try again" button re-fetches successfully after restoring the files.
- Browser console shows no errors during normal load.
- `window` has no leaked global variables.

---

## TASK-013 — Responsive and accessibility verification

**Depends on:** TASK-012

**Work:**
- Test the full page at 360 px, 768 px, and 1280 px viewport widths. Document findings in `docs/kiro-log.md`.
- Test keyboard navigation: Tab through the full page and confirm that the skip link, all nav links, and retry button are reachable in logical DOM order.
- Test mobile nav — opening: Tab to the toggle button, press Enter, confirm the menu opens and focus moves to the first nav link.
- Test mobile nav — closing with toggle: press Enter on the toggle button while the menu is open, confirm the menu closes and focus returns to the toggle.
- Test mobile nav — closing with Escape: open the menu, press Escape, confirm the menu closes and focus returns to the toggle.
- Test mobile nav — Tab past the navigation: open the menu, Tab through all nav links to the last one, press Tab again. Confirm that the menu closes and focus moves forward to the next logical interactive element on the page, not back to the toggle button.
- Test mobile nav — Shift+Tab before the navigation: open the menu, Shift+Tab from the first nav link. Confirm that the menu closes and focus moves backward to the previous logical element, not back to the toggle button.
- Test with JavaScript disabled: confirm nav is visible, four sections are visible, fallback text appears in case archives.
- Test with `prefers-reduced-motion: reduce` active: confirm no animations or transitions are visible.
- Test loading, empty, and error states using browser DevTools to simulate offline or by temporarily removing the JSON files.
- Check the browser console for errors across all tests.

**Verify:**
- No horizontal scroll at 360 px.
- No essential content clipped at any tested width.
- All interactive elements reachable by keyboard with visible focus indicators.
- No focus indicator uses `outline: none` without a replacement.
- Tabbing past the last nav link does not trap focus or return it to the toggle button.
- Shift+Tab from the first nav link does not trap focus or return it to the toggle button.
- Animations absent under reduced-motion.
- No uncaught exceptions in the browser console under any tested condition.

---

## TASK-014 — Write component documentation and update the project log

**Depends on:** TASK-013

**Work:**
- Write `src/components/README.md` documenting each shared UI component from REQ-006: purpose, expected HTML structure, required ARIA attributes, and CSS class names.
- Update `docs/kiro-log.md` with the Phase 1 entry: date, all features built, all files created or modified, and any corrections made during review.
- Confirm `assets/CREDITS.md` exists with a placeholder header row.

**Verify:**
- Every component from REQ-006 has an entry in `src/components/README.md`.
- `docs/kiro-log.md` contains an entry for this phase.
- `assets/CREDITS.md` exists.
- `data/schema.md` is complete per TASK-003.

---

## Completion checklist

Before marking this specification complete, confirm all of the following:

- [ ] All thirteen requirements in `requirements.md` have passing acceptance criteria.
- [ ] Folder structure matches design §1 exactly.
- [ ] `index.html` validates and works without CSS and without JavaScript.
- [ ] All ten palette color tokens are defined with correct values.
- [ ] Focus outline uses `--color-moonlight-lavender` with verified contrast.
- [ ] Mobile nav is visible without JavaScript; JS-enhanced toggle works with JavaScript.
- [ ] No case JSON file contains real historical content.
- [ ] `data/schema.md` documents all fields and all `claimType` values.
- [ ] No case card contains an `<a>` link pointing to a nonexistent page.
- [ ] Loading, empty, and error states all function without console errors.
- [ ] `npx serve` or any npm/build tooling is not documented or used.
- [ ] Local development instructions cover Python and VS Code Live Server only.
- [ ] No localStorage, progress tracking, or storage module has been introduced.
- [ ] No store, state machine, or module beyond `nav.js` and `data-loader.js` has been created.
- [ ] Reduced-motion media query is applied to every transition and animation.
- [ ] Tabbing past the nav does not trap focus or pull it back to the toggle button.
- [ ] `docs/kiro-log.md` records this phase's work.
- [ ] `src/components/README.md` documents all shared components.
- [ ] `assets/CREDITS.md` exists.
- [ ] All existing repository files are unmodified.
