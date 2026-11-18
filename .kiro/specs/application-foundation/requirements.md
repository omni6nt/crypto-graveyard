# Specification: application-foundation — Requirements

This specification covers the first working foundation of the Crypto Graveyard website: folder structure, HTML shell, global CSS, responsive layout, main navigation, shared UI components, the JavaScript ES module entry point, and the case-data loading architecture. It does not include the entrance animation, cemetery interactions, Coroner character, examination system, progress tracking, localStorage, nomination form, or any other later-phase feature.

---

## REQ-001 — Project folder and file structure

**Statement:** The repository must have a stable, clearly organised folder structure that all subsequent phases can build on without reorganisation.

**Acceptance criteria:**

- The following top-level directories exist: `src/`, `data/`, `assets/`, `docs/`.
- `src/` contains sub-directories: `css/`, `js/`, `components/`.
- `data/` contains a `cases/` sub-directory.
- `assets/` contains a `CREDITS.md` file (placeholder header only at this stage).
- `docs/` contains a `kiro-log.md` file recording this phase's work.
- `index.html` exists at the repository root.
- No build artefacts, `node_modules`, or generated output files are committed.
- The existing `README.md`, `LICENSE`, `MASTER_BLUEPRINT.md`, `MVP_REQUIREMENTS.md`, `CASE_RESEARCH_STANDARD.md`, `PROJECT_ROADMAP.md`, and all `.kiro/` files are untouched.

---

## REQ-002 — Semantic HTML application shell

**Statement:** `index.html` must be a valid, semantic HTML document that correctly structures the entire application without depending on JavaScript for initial content presentation.

**Acceptance criteria:**

- The document declares `<!DOCTYPE html>` and sets `lang="en"`.
- `<head>` includes: `<meta charset="UTF-8">`, `<meta name="viewport" content="width=device-width, initial-scale=1.0">`, a descriptive `<title>` matching the product name, and a `<meta name="description">`.
- The body uses landmark elements correctly: exactly one `<header>`, one `<nav>` with `aria-label`, one `<main>`, and one `<footer>`.
- `<main>` contains named regions for the four primary views — cemetery, case archives, journal, about. Each region uses `<section>` with a unique `id` and an `aria-labelledby` pointing to a visible heading.
- No `<div>` or `<span>` is used where a semantic element is more appropriate.
- The HTML validates without errors using the W3C validator or equivalent local check.
- The page renders meaningful structure and labelling with CSS disabled.
- The page renders meaningful structure and content with JavaScript disabled.

---

## REQ-003 — Global CSS foundation

**Statement:** A single CSS file must establish all design tokens, base typography, reset, and global layout rules derived strictly from the approved visual identity.

**Acceptance criteria:**

- All ten approved palette colors are defined as CSS custom properties on `:root` with names matching their role:
  - `--color-void-black: #100D16`
  - `--color-deep-charcoal: #1B1722`
  - `--color-cemetery-purple: #30213F`
  - `--color-haunted-violet: #7047A3`
  - `--color-moonlight-lavender: #B8A2D6`
  - `--color-blood-red: #8E252B`
  - `--color-antique-gold: #B18A53`
  - `--color-aged-parchment: #D7C3A0`
  - `--color-bone-ivory: #E7DDCF`
  - `--color-fog-grey: #8E8995`
- Cinzel is loaded for display headings; Merriweather for narrative body text; a system sans-serif stack for controls and dense evidence. All three are referenced via CSS custom properties or utility classes.
- A minimal reset removes inconsistent browser defaults (margin, padding, `box-sizing`) without suppressing focus indicators.
- Base `font-size`, `line-height`, and `color` are set on `body` using palette custom properties.
- No inline styles appear in HTML.
- No color is used anywhere in CSS that is not drawn from the approved palette custom properties.
- The stylesheet is linked from `index.html` before any other stylesheet.
- No unapproved colors are added.

---

## REQ-004 — Responsive page layout

**Statement:** The global layout must work correctly at 360 px, 768 px, and 1280 px viewport widths without clipping essential content.

**Acceptance criteria:**

- A single-column layout is active at 360 px with no horizontal scrollbar and no clipped text or controls.
- A two- or three-column layout is available at 768 px where the content calls for it.
- Maximum content width is constrained at large viewports so line lengths remain readable.
- The navigation is accessible and operable at all three widths.
- At 360 px, a toggle button (hamburger or equivalent) reveals navigation items. The toggle has an accessible name, is keyboard-operable, and communicates its expanded/collapsed state via `aria-expanded`.
- No essential content is hidden at any supported width; decorative-only elements may be suppressed on small screens.
- Layout is implemented with CSS (Flexbox or Grid); JavaScript is not required for layout correctness.
- The layout works without JavaScript enabled.

---

## REQ-005 — Main navigation

**Statement:** The site must have persistent, keyboard-accessible navigation with the four approved destinations and no others.

**Acceptance criteria:**

- The navigation contains exactly these four links in this order: "The Cemetery", "Case Archives", "The Journal", "About the Graveyard".
- Each link has an `href` targeting the corresponding section by `id` in `index.html`.
- The navigation is wrapped in a `<nav aria-label="Main navigation">`.
- Each link is a plain `<a>` element.
- The currently active destination is indicated with `aria-current="page"` (or the equivalent for single-page section tracking).
- All four links are reachable and activatable by keyboard (Tab to focus, Enter to activate).
- Focus indicators on navigation links are visible and meet 3:1 contrast against the adjacent background.
- The navigation does not require JavaScript to display on desktop viewports.
- Link text matches the approved labels exactly; no abbreviations or rewording.
- No fifth link or additional navigation item is added.

---

## REQ-006 — Shared UI components

**Statement:** Reusable HTML/CSS patterns for the components needed across this and future phases must be defined so all phases use consistent, accessible implementations.

Components required at this stage:

| Component | Purpose |
|---|---|
| Skip-to-content link | Bypasses navigation for keyboard users |
| Page heading hierarchy | `h1`–`h3` visual styles and usage rules |
| Status badge | Displays one of three progress state labels (styling only — no state logic) |
| Card | Bordered, focusable container representing a case entry in the directory |
| Loading indicator | Communicates that content is being fetched |
| Empty state | Communicates that no content is available |
| Error state | Communicates that content could not be loaded, with a retry affordance |
| Visually hidden utility | Hides content visually while keeping it accessible |

**Acceptance criteria:**

- The skip-to-content link is the first focusable element on the page, visually hidden until focused, and moves focus to `<main>` when activated.
- The status badge displays one of three labels — "Unexamined", "In Progress", "Examined" — using both a visible text label and a color indicator. The text label alone is sufficient to identify the state without seeing the color.
- The status badge is a styled CSS component only. It has no JavaScript behaviour, no connection to localStorage, and no state-management logic. Its displayed label is set by whatever HTML or later JavaScript renders it.
- The card component has a visible focus indicator when focused by keyboard and uses a semantic interactive element (`<button>` or `<a>`) as its activatable target.
- The loading indicator uses an `aria-live="polite"` region so screen readers announce when loading begins and ends.
- The error state includes a "Try again" button (styled as a button, `type="button"`).
- The visually hidden utility class uses the standard clip-path/clip technique, not `display:none` or `visibility:hidden`, so content stays in the accessibility tree.
- All component text and UI elements meet WCAG AA contrast: 4.5:1 for normal text, 3:1 for large text and UI boundaries.
- Each component is documented in `src/components/README.md` with its purpose, expected HTML structure, required ARIA attributes, and CSS class names.

---

## REQ-007 — JavaScript ES module entry point

**Statement:** A single JavaScript entry point must bootstrap the application without blocking the initial render, and must establish the module loading pattern used by subsequent phases. The scope of JavaScript at this phase is limited to: navigation behaviour, section visibility management, and invoking the data loader.

**Acceptance criteria:**

- `src/js/main.js` is the sole entry point and is loaded via `<script type="module" src="src/js/main.js">` in `index.html`.
- No other `<script>` tag loads application logic.
- `main.js` imports from named sub-modules. The only sub-modules introduced at this phase are `nav.js` (navigation behaviour) and `data-loader.js` (case data fetching). No store, progress manager, state machine, or other module is introduced at this phase.
- The module structure is documented with a comment block at the top of `main.js` listing its imports and their responsibilities.
- If JavaScript fails to load or execute, the page still displays meaningful HTML content (progressive enhancement).
- No global variables are leaked onto `window`.
- The browser console shows no errors on page load.

---

## REQ-008 — Case-data directory and loading architecture

**Statement:** The data loading layer must define the case-data schema, establish a directory of all eight cases by name and ID, and provide a loader module — without inventing or fabricating any factual case content.

**Acceptance criteria:**

- `data/cases/` contains exactly one JSON file per locked case, named by stable ID:
  `ftx.json`, `mt-gox.json`, `terra-luna.json`, `bitconnect.json`, `onecoin.json`, `three-arrows-capital.json`, `celsius-network.json`, `thodex.json`.
- Each JSON file contains the full schema skeleton with **all required fields present and set to clearly marked placeholder strings**. Placeholder values must be unambiguous (e.g., `"[PLACEHOLDER — research required]"` for strings, `[]` for arrays, `{}` for objects) and must never resemble, imply, or be mistaken for real historical content.
- No JSON file contains fabricated dates, financial figures, names of real people or entities, allegations, or any content that could be read as a factual claim about the named project.
- `data/cases/index.json` contains a directory array with each case's `id` and `name`. The `classification` field in the index is also a placeholder value.
- `src/js/data-loader.js` exports exactly two async functions:
  - `loadCaseIndex()` — fetches `data/cases/index.json`, returns the parsed array, or throws a typed `DataLoadError` if the fetch fails or JSON is invalid.
  - `loadCase(id)` — fetches `data/cases/<id>.json`, validates that the returned object contains an `id` field matching the requested ID, returns the parsed object, or throws a typed `DataLoadError`.
- Neither function hard-codes, interpolates, or invents factual case content.
- `data/schema.md` documents every field in the case JSON schema: its name, type, purpose, allowed `claimType` values (where applicable), and constraints. This document is the reference for Phase 2 research work.

---

## REQ-009 — Loading, empty, and error states

**Statement:** Every view that depends on fetched data must handle three states — loading, empty, and error — without crashing or displaying a blank screen.

**Acceptance criteria:**

- While data is being fetched, a loading indicator is shown in the target container with an accessible label (e.g., `aria-label="Loading cases"` on the live region).
- If the case index returns an empty array, an empty-state message explains that no cases are available yet, without implying a technical error.
- If a fetch fails (network error, non-200 response, or JSON parse failure), an error-state message is shown with a plain-English explanation and a "Try again" button that retriggers the fetch.
- None of these three states produces an uncaught JavaScript exception in the browser console.
- Transitions between states do not cause layout shift that pushes visible content off-screen.

---

## REQ-010 — Keyboard navigation and focus management

**Statement:** Every interactive element in the foundation must be reachable and operable by keyboard. Focus must be managed correctly when states change.

**Acceptance criteria:**

- Tab order from the top of the page reaches, in logical DOM order: skip-to-content link, navigation links, mobile menu toggle (if present), and all interactive controls in the visible view.
- No interactive element is unreachable by keyboard.
- Visible focus indicators are present on every focused element and are never removed by `outline: none` without an equivalent custom replacement meeting 3:1 contrast.
- When the mobile navigation opens, focus moves into the navigation menu. When it closes, focus returns to the toggle button.
- When a loading state transitions to a loaded state, the live region announces the change to screen readers without moving visible focus.

---

## REQ-011 — Reduced-motion support

**Statement:** Every CSS transition or animation introduced at this phase must be suppressed or replaced when the user has requested reduced motion.

**Acceptance criteria:**

- Every CSS `transition` and `@keyframes` block is either scoped inside `@media (prefers-reduced-motion: no-preference)` or overridden to `transition: none` / `animation: none` inside `@media (prefers-reduced-motion: reduce)`.
- With reduced motion active, no element moves, fades, or pulses.
- This applies to the mobile navigation toggle and any other animated element in this phase.
- Each reduced-motion override is accompanied by a comment in the CSS explaining its purpose.

---

## REQ-012 — Local development setup

**Statement:** Developers must be able to run the site locally using a simple static HTTP server so that `fetch()` requests for JSON files resolve correctly. No build tool or framework is required or permitted.

**Acceptance criteria:**

- `docs/kiro-log.md` or a `CONTRIBUTING.md` file documents the local development setup with at least two options for serving the project over HTTP (e.g., `python -m http.server 8080` and the VS Code Live Server extension).
- The documentation explains why a static server is required (browsers block `fetch()` requests to `file://` URLs due to CORS policy).
- The documentation does not introduce or recommend any build tool, bundler, or framework.
- Opening `index.html` directly from the filesystem (`file://`) is not a supported development workflow and this limitation is noted.

---

## REQ-013 — Foundation documentation

**Statement:** The work done in this phase must be documented so future contributors understand the project structure and conventions.

**Acceptance criteria:**

- `docs/kiro-log.md` contains an entry for this phase recording: date, features built, tasks completed, files created or modified, and any human corrections made during review.
- `src/components/README.md` documents each shared UI component: purpose, HTML structure, required ARIA attributes, and CSS class names.
- `data/schema.md` fully documents the case-data JSON schema per REQ-008.
- `assets/CREDITS.md` exists with a placeholder header row, ready to receive asset entries.

---

## Out of scope for this specification

The following items are explicitly deferred and must not be built in this phase:

- Entrance animation and gate sequence (CG-ENT-001)
- Coroner character, dialogue, and expressions (CG-COR-001)
- Cemetery visual environment and tombstone interactions (CG-CEM-001)
- Examination system (CG-EXAM-001)
- Progress tracking, state persistence, and localStorage integration (CG-PROG-001/002)
- Case research content (Phase 2)
- Nomination form (CG-NOM-001)
- Final outro (CG-OUT-001)
- Judge Quick Tour (CG-TOUR-001, P1)
- Asset production beyond placeholder structure (CG-ASSET-001, P1)

---

## Conflicts and open questions

None identified. All requirements are consistent with the steering files and foundation documents. If a conflict is discovered during implementation, stop and report it rather than guessing.
