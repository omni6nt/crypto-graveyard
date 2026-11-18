# Specification: application-foundation — Design

This document translates the requirements into concrete file layouts, module responsibilities, HTML patterns, CSS conventions, and data structures. It does not contain application code.

---

## 1. Project folder layout

```
crypto-graveyard/              ← repository root
│
├── index.html                 ← application shell (single HTML file)
│
├── src/
│   ├── css/
│   │   ├── tokens.css         ← CSS custom properties (palette, type scale, spacing)
│   │   ├── reset.css          ← minimal browser-default reset
│   │   ├── base.css           ← body, heading hierarchy, global typography
│   │   ├── layout.css         ← page grid, header, main, footer, breakpoints
│   │   ├── navigation.css     ← nav bar, mobile toggle, skip link
│   │   └── components.css     ← status badge, card, loading, empty, error states
│   │
│   ├── js/
│   │   ├── main.js            ← entry point; imports nav.js and data-loader.js only
│   │   ├── nav.js             ← mobile menu toggle and aria-expanded management
│   │   └── data-loader.js     ← loadCaseIndex() and loadCase(id) async functions
│   │
│   └── components/
│       └── README.md          ← component documentation
│
├── data/
│   ├── schema.md              ← case JSON schema reference
│   └── cases/
│       ├── index.json         ← directory array: id + name per case
│       ├── ftx.json
│       ├── mt-gox.json
│       ├── terra-luna.json
│       ├── bitconnect.json
│       ├── onecoin.json
│       ├── three-arrows-capital.json
│       ├── celsius-network.json
│       └── thodex.json
│
├── assets/
│   └── CREDITS.md             ← asset origin, tool, date, license register
│
├── docs/
│   └── kiro-log.md            ← Kiro usage log
│
└── .kiro/                     ← tracked; not modified in this phase
    ├── steering/
    └── specs/
```

**Rationale:** Separating CSS into focused single-responsibility files keeps token definitions, layout rules, and component styles independent. A single `index.html` avoids routing complexity at this phase while still supporting the four-section structure. All paths are relative, keeping the project hostable from any sub-path on GitHub Pages without reconfiguration.

---

## 2. HTML shell structure

`index.html` follows this landmark structure:

```
<body>
  <a class="skip-to-content" href="#main-content">Skip to main content</a>

  <header>
    <div class="site-brand">
      <span class="site-name">Crypto Graveyard</span>
      <span class="site-tagline">Where Failed Projects Rest in Peace</span>
    </div>
    <nav aria-label="Main navigation">
      <button class="nav-toggle" aria-expanded="false" aria-controls="nav-list">
        <span class="visually-hidden">Open navigation menu</span>
        <!-- decorative icon, aria-hidden="true" -->
      </button>
      <ul id="nav-list" role="list">
        <li><a href="#cemetery" aria-current="page">The Cemetery</a></li>
        <li><a href="#case-archives">Case Archives</a></li>
        <li><a href="#journal">The Journal</a></li>
        <li><a href="#about">About the Graveyard</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content" tabindex="-1">

    <section id="cemetery" aria-labelledby="cemetery-heading">
      <h1 id="cemetery-heading">The Cemetery</h1>
      <!-- Cemetery visual environment — later phase -->
    </section>

    <section id="case-archives" aria-labelledby="archives-heading">
      <h2 id="archives-heading">Case Archives</h2>
      <div id="case-list-region" aria-live="polite" aria-label="Cases">
        <!-- Loading / empty / error / case cards injected here by JS -->
        <!-- Falls back to static "Cases will appear here" text when JS is off -->
      </div>
    </section>

    <section id="journal" aria-labelledby="journal-heading">
      <h2 id="journal-heading">The Journal</h2>
      <!-- Progress view — later phase -->
    </section>

    <section id="about" aria-labelledby="about-heading">
      <h2 id="about-heading">About the Graveyard</h2>
      <!-- Methodology content — later phase -->
    </section>

  </main>

  <footer>
    <!-- Site credits and legal notice — later phase -->
  </footer>

  <script type="module" src="src/js/main.js"></script>
</body>
```

**Key decisions:**

- `<main id="main-content" tabindex="-1">` — `tabindex="-1"` allows the skip link to programmatically move focus to `<main>` without placing it in the natural tab order.
- `aria-current="page"` starts on "The Cemetery" link and is updated by `nav.js` when the user navigates to a different section.
- `aria-live="polite"` on `#case-list-region` causes screen readers to announce loading and content changes without interrupting the current speech stream.
- The `<h1>` belongs to the cemetery section because that is the primary entry point of the experience. All other sections use `<h2>`.
- `#case-list-region` contains a static fallback text node ("Case content will be listed here.") in the HTML so the section is not blank when JavaScript is unavailable.

---

## 3. CSS architecture

### Stylesheet loading order in `index.html`

```html
<link rel="stylesheet" href="src/css/tokens.css">
<link rel="stylesheet" href="src/css/reset.css">
<link rel="stylesheet" href="src/css/base.css">
<link rel="stylesheet" href="src/css/layout.css">
<link rel="stylesheet" href="src/css/navigation.css">
<link rel="stylesheet" href="src/css/components.css">
```

Each file has a single responsibility. No file imports another (plain CSS, no preprocessor).

### tokens.css

Defines all CSS custom properties. Groups:

- **Color palette** (`--color-*`) — all ten approved values exactly as specified in REQ-003.
- **Typography** (`--font-display`, `--font-narrative`, `--font-ui`) — font-family stacks. Cinzel for display, Merriweather for narrative, a system sans-serif stack for UI/controls.
- **Type scale** (`--text-xs` through `--text-4xl`) — `clamp()`-based fluid values where appropriate.
- **Spacing scale** (`--space-1` through `--space-16`) — multiples of a 4 px base unit.
- **Transition defaults** (`--transition-base`) — referenced only inside `prefers-reduced-motion: no-preference` blocks; never used outside them.

### reset.css

Minimal reset only:
- `*, *::before, *::after { box-sizing: border-box; }`
- `body, h1–h6, p, ul, ol, figure { margin: 0; padding: 0; }`
- `ul[role="list"] { list-style: none; }` — removes list bullets only where `role="list"` is explicitly set, so Safari keeps semantics where needed.
- `img, video { max-width: 100%; display: block; }`
- Does **not** reset `outline` or any focus property.

### base.css

- Sets `body`: background `--color-void-black`, color `--color-bone-ivory`, font-family `--font-narrative`, line-height `1.6`.
- Heading styles: `h1`–`h3` use `--font-display` (Cinzel). Body copy uses `--font-narrative` (Merriweather). UI labels and controls use `--font-ui`.
- Link colors drawn from palette tokens; hover state uses a palette token (not a computed value).
- Global focus style: `outline: 2px solid var(--color-moonlight-lavender); outline-offset: 3px;` — applied universally via `:focus-visible`, never suppressed. See §3a for contrast justification.

### layout.css

- `body` uses `display: flex; flex-direction: column; min-height: 100vh;` so the footer stays at the bottom.
- `main` grows to fill remaining space (`flex: 1`).
- Sections inside `main` use a `.container` class: `max-width: 1200px; margin-inline: auto; padding-inline: var(--space-4)`.
- **Breakpoints:**
  - Default (360 px minimum): single column, full-width sections.
  - `min-width: 48em` (≈768 px): wider containers, two-column layout available.
  - `min-width: 80em` (≈1280 px): maximum content width engaged.

### navigation.css

**Progressive enhancement approach:**

The navigation is fully visible and functional without JavaScript. CSS controls visibility at each breakpoint; JavaScript only enhances the toggle behaviour for keyboard and focus management.

- **Desktop (≥48 em):** Nav list displays as a horizontal flex row. The `.nav-toggle` button is hidden (`display: none`).
- **Mobile (<48 em):** Nav list is visible by default (`display: flex; flex-direction: column`). The `.nav-toggle` button is shown. If JavaScript loads successfully, `nav.js` adds a `js-nav-ready` class to `<nav>`, which CSS uses to switch the list to hidden-by-default toggled behaviour. Without JavaScript, the list remains visible at all times.

CSS selector for the JS-enhanced hidden state:

```
nav.js-nav-ready #nav-list { display: none; }
nav.js-nav-ready .nav-toggle[aria-expanded="true"] + #nav-list { display: flex; }
```

This means:
- No JS → nav list always visible on mobile. No toggle button interaction needed.
- JS loads → `js-nav-ready` class is set, hidden-by-default toggle behaviour is activated.

The skip-to-content link is visually hidden by default using `.visually-hidden` and becomes visible on `:focus-visible`.

Transitions on the mobile menu are wrapped in `@media (prefers-reduced-motion: no-preference)` only.

### components.css

Defines the following component classes:

| Class | Purpose |
|---|---|
| `.visually-hidden` | Clip-path technique; keeps content in the accessibility tree |
| `.status-badge` | Base badge; label text set in HTML |
| `.status-badge--unexamined` | Label: "Unexamined"; accent: `--color-fog-grey` |
| `.status-badge--in-progress` | Label: "In Progress"; accent: `--color-antique-gold` |
| `.status-badge--examined` | Label: "Examined"; accent: `--color-moonlight-lavender` |
| `.card` | Container with border, padding, background token |
| `.loading-indicator` | Animated ellipsis; suppressed under reduced motion |
| `.empty-state` | Centered descriptive message |
| `.error-state` | Error message with retry button |

The status badge uses a colored left border alongside a text label. The text label alone identifies the state without color. The badge is a styled CSS component only — no JavaScript, no localStorage reads.

---

## 3a. Focus indicator contrast — verified calculations

The original design proposed `--color-haunted-violet (#7047A3)` as the focus outline color. Contrast ratios have been calculated using the WCAG 2.1 relative luminance formula against the three dark backgrounds where focus indicators will appear.

| Outline color | Background | Ratio | 3:1 requirement |
|---|---|---|---|
| Haunted violet `#7047A3` | Void black `#100D16` | **2.86 : 1** | ❌ FAIL |
| Haunted violet `#7047A3` | Deep charcoal `#1B1722` | **2.62 : 1** | ❌ FAIL |
| Haunted violet `#7047A3` | Cemetery purple `#30213F` | **2.20 : 1** | ❌ FAIL |
| Moonlight lavender `#B8A2D6` | Void black `#100D16` | **8.41 : 1** | ✅ PASS |
| Moonlight lavender `#B8A2D6` | Deep charcoal `#1B1722` | **7.70 : 1** | ✅ PASS |
| Moonlight lavender `#B8A2D6` | Cemetery purple `#30213F` | **6.49 : 1** | ✅ PASS |
| Antique gold `#B18A53` | Void black `#100D16` | **6.08 : 1** | ✅ PASS |
| Antique gold `#B18A53` | Deep charcoal `#1B1722` | **5.56 : 1** | ✅ PASS |
| Antique gold `#B18A53` | Cemetery purple `#30213F` | **4.69 : 1** | ✅ PASS |

**Decision:** Use `--color-moonlight-lavender (#B8A2D6)` as the global focus outline color. It passes 3:1 on all three dark backgrounds with significant margin (minimum 6.49:1), is visually distinct and consistent with the palette, and reads as a neutral accessibility indicator rather than a semantic accent. Antique gold also passes but is reserved for the "In Progress" badge accent to avoid meaning collision.

**Additional badge contrast checks:**

| Text color | Background | Ratio | 4.5:1 requirement |
|---|---|---|---|
| Fog grey `#8E8995` (Unexamined label) | Void black `#100D16` | **5.65 : 1** | ✅ PASS |
| Antique gold `#B18A53` (In Progress label) | Void black `#100D16` | **6.08 : 1** | ✅ PASS |
| Moonlight lavender `#B8A2D6` (Examined label) | Void black `#100D16` | **8.41 : 1** | ✅ PASS |
| Bone ivory `#E7DDCF` (nav text) | Void black `#100D16` | **14.33 : 1** | ✅ PASS |
| Bone ivory `#E7DDCF` (nav text) | Deep charcoal `#1B1722` | **13.12 : 1** | ✅ PASS |

All text color and focus indicator choices are verified to pass their respective WCAG AA thresholds.

---

## 4. JavaScript module design

### main.js

Responsibilities at this phase only:
- Import `initNav` from `./nav.js`.
- Import `loadCaseIndex` from `./data-loader.js`.
- Call `initNav()` on `DOMContentLoaded`.
- Call `loadCaseIndex()` and render the result into `#case-list-region`, handling loading, empty, and error states.

No store, no progress manager, no state machine, and no other modules are introduced at this phase.

### nav.js

Responsibilities:
- Select `.nav-toggle` and `#nav-list`.
- Add the `js-nav-ready` class to the `<nav>` element, activating the CSS-controlled hidden-by-default mobile nav behaviour.
- Toggle `aria-expanded` on the button between `"false"` and `"true"` on click.
- When the menu opens, move focus to the first `<a>` inside `#nav-list`.
- When the menu closes, return focus to `.nav-toggle`.
- Close the menu when focus leaves the nav entirely (`focusout` event).
- Close the menu when Escape is pressed while it is open.
- Update `aria-current="page"` on the matching nav link based on the current URL hash.

This module has no knowledge of case data, progress states, or any other application concern.

### data-loader.js

Responsibilities:
- Define a `DataLoadError` class extending `Error` with a `code` property: `"FETCH_FAILED"` or `"INVALID_DATA"`.
- Export `async function loadCaseIndex()`:
  - Fetch `data/cases/index.json`.
  - Throw `DataLoadError` with code `"FETCH_FAILED"` on a non-200 response.
  - Throw `DataLoadError` with code `"INVALID_DATA"` on a JSON parse failure.
  - Return the parsed array.
- Export `async function loadCase(id)`:
  - Validate that `id` is a non-empty string; throw `DataLoadError("INVALID_DATA")` otherwise.
  - Fetch `data/cases/${id}.json`.
  - Throw `DataLoadError` with the appropriate code on failure.
  - Validate that the returned object's `id` field matches the requested `id`; throw `DataLoadError("INVALID_DATA")` if not.
  - Return the parsed object.
- No case content is hard-coded or generated inside this module.

---

## 5. Case data design

### index.json structure

```json
[
  { "id": "ftx",                  "name": "FTX" },
  { "id": "mt-gox",               "name": "Mt. Gox" },
  { "id": "terra-luna",           "name": "Terra / LUNA" },
  { "id": "bitconnect",           "name": "BitConnect" },
  { "id": "onecoin",              "name": "OneCoin" },
  { "id": "three-arrows-capital", "name": "Three Arrows Capital" },
  { "id": "celsius-network",      "name": "Celsius Network" },
  { "id": "thodex",               "name": "Thodex" }
]
```

The `classification` field is omitted from the index at this phase. It requires research and will be added in Phase 2.

### Individual case JSON skeleton

Each case file contains every required schema field, all set to unambiguous placeholder values. The skeleton for `ftx.json` is representative of all eight files:

```json
{
  "id": "ftx",
  "name": "FTX",
  "shortDescription": "[PLACEHOLDER — research required]",
  "classification": "[PLACEHOLDER — research required]",
  "researchCutoff": "[PLACEHOLDER — research required]",
  "identity": {
    "description": "[PLACEHOLDER — research required]",
    "sourceIds": []
  },
  "background": {
    "description": "[PLACEHOLDER — research required]",
    "sourceIds": []
  },
  "incident": {
    "description": "[PLACEHOLDER — research required]",
    "claimType": "[PLACEHOLDER]",
    "sourceIds": []
  },
  "causeAnalysis": {
    "description": "[PLACEHOLDER — research required]",
    "sourceIds": []
  },
  "timeline": [],
  "warningSigns": [],
  "aftermath": {
    "description": "[PLACEHOLDER — research required]",
    "sourceIds": []
  },
  "lessons": [],
  "sources": [],
  "intuitionReferences": [],
  "examination": []
}
```

All eight files follow this identical skeleton with only `"id"` and `"name"` differing. No other field contains the project's name, real dates, real people, financial figures, allegations, or any content that could be read as a factual claim about the named project.

### schema.md outline

The schema reference document will cover:
- Purpose and usage context.
- Field-by-field reference: name, type, required/optional, purpose, constraints.
- Allowed `claimType` values and when to use each.
- Placeholder convention and how to transition fields to real content in Phase 2.
- Pointer to `CASE_RESEARCH_STANDARD.md` for the research gate.

---

## 6. Rendering the case directory

`main.js` renders the case list into `#case-list-region` using this sequence:

1. Replace `#case-list-region` contents with the loading indicator markup (`.loading-indicator` with `role="status"` and an accessible label).
2. Call `loadCaseIndex()`.
3. On success:
   - If the array is empty, replace with the empty-state markup.
   - If the array has items, replace with a `<ul>` of card elements, one per case.
4. On `DataLoadError`, replace with the error-state markup including a "Try again" button whose click handler repeats from step 1.

### Case card structure at this phase

Each card in the list displays:
- The case name as an `<h3>` heading.
- A status badge with the text "Unexamined" (static, no localStorage at this phase).
- The case name in a `<p>` description area reading "Research in progress." — this communicates clearly that content is not yet available.

**Case links:** No `<a>` link pointing to a case detail page is rendered at this phase. Case detail pages do not exist yet. Linking to a nonexistent destination would create broken navigation. Instead, the card is a non-interactive display element (`<div class="card">`). Once case pages exist in a later phase, the card will be updated to use a `<button>` or `<a>` as its activatable target.

---

## 7. Local development setup

Developers serve the project root with a plain HTTP server. No build step is required or supported.

**Recommended options** (documented in `docs/kiro-log.md`):

1. **Python 3** (available on most systems):
   ```
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in a browser.

2. **VS Code Live Server extension**: right-click `index.html` in the Explorer panel and select "Open with Live Server". The extension reloads the browser on file save.

**Why a local server is required:** Browsers enforce CORS restrictions on `fetch()` requests made from `file://` URLs. Opening `index.html` directly from the filesystem will cause all `fetch()` calls for JSON data to fail silently or with a CORS error. A local HTTP server resolves this by serving files over `http://localhost`.

Opening `index.html` directly via `file://` is not a supported development workflow. This limitation must be noted in `docs/kiro-log.md`.

---

## 8. Accessibility design decisions

| Decision | Rationale |
|---|---|
| `<main tabindex="-1">` | Allows the skip link to move focus programmatically without placing `<main>` in the tab order |
| Focus outline: moonlight lavender `#B8A2D6` | Passes 3:1 on all dark backgrounds (minimum 6.49:1); haunted violet was verified to fail (maximum 2.86:1) |
| `aria-live="polite"` on case list region | Announces loading/content changes to screen readers without interrupting speech |
| Nav always visible without JS | Prevents the navigation becoming permanently hidden if the JS module fails to load |
| CSS-driven nav hide/show via `js-nav-ready` class | JS enhances the toggle; without JS the nav list remains visible — no functionality lost |
| Status badge: text label + colored border | Color-independent state communication; text alone identifies the state |
| Non-interactive cards at this phase | No broken links; cards become interactive only when case pages exist |
| `ul[role="list"]` for nav | Removes list bullets in Safari while preserving semantics in other assistive technology |
| Global `:focus-visible` outline, never suppressed | No interactive element can lose its focus indicator |

---

## 9. What this design deliberately excludes

- No router or hash-change listener for section management (all sections remain in the DOM; navigation uses anchor links).
- No localStorage reads or writes (progress tracking is a later phase).
- No store or shared state module (the only state at this phase is the nav toggle open/closed flag managed locally inside `nav.js`).
- No CSS preprocessor, bundler, or build script.
- No third-party JavaScript library.
- No `npx` or npm-based tooling for local development.
- No Coroner, entrance animation, examination, cemetery interactions, or any later-phase feature.
