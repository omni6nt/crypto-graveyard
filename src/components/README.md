# Shared UI Components

This document is the implementation reference for reusable HTML/CSS patterns in the foundation. Components are intentionally presentation-focused. They do not introduce application state, storage, routing, or backend behavior.

## 1. Skip-to-content link

**Purpose:** Lets keyboard users bypass repeated navigation and move directly to the main content.

**Expected HTML:**
```html
<a class="skip-to-content" href="#main-content">Skip to main content</a>
```

**Required semantics and accessibility:**
- Must be the first focusable element in `<body>`.
- `href` must target the unique `id="main-content"`.
- Must remain in the accessibility tree while visually hidden.
- Must become visibly rendered on `:focus-visible`.

**CSS classes:** `.skip-to-content`

## 2. Page heading hierarchy

**Purpose:** Establishes a meaningful document outline and consistent visual hierarchy.

**Expected HTML:**
```html
<h1 class="section-heading">The Cemetery</h1>
<h2 class="section-heading">Case Archives</h2>
<h3 class="card__title">FTX</h3>
```

**Required semantics and accessibility:**
- Use heading levels in logical order; do not choose a heading level only for its visual size.
- Each named section heading must have an ID referenced by its section's `aria-labelledby`.
- Use one primary `<h1>` for the page's main view/title.

**CSS classes:** `.section-heading`, `.card__title`; global `h1`–`h6` styles apply.

## 3. Status badge

**Purpose:** Communicates a case's progress status using visible text plus a supplementary color accent.

**Expected HTML:**
```html
<span class="status-badge status-badge--unexamined">Unexamined</span>
<span class="status-badge status-badge--in-progress">In Progress</span>
<span class="status-badge status-badge--examined">Examined</span>
```

**Required semantics and accessibility:**
- The text label must identify the state without relying on color.
- Color is supplementary and must not be the only status indicator.
- The badge is presentational; it does not manage or persist state.

**CSS classes:** `.status-badge`, `.status-badge--unexamined`, `.status-badge--in-progress`, `.status-badge--examined`

## 4. Card

**Purpose:** Provides a bordered visual container for a case directory entry.

**Expected HTML at foundation stage:**
```html
<li>
  <article class="card">
    <h3 class="card__title">FTX</h3>
    <span class="status-badge status-badge--unexamined">Unexamined</span>
    <p class="card__description">Research in progress.</p>
  </article>
</li>
```

**Required semantics and accessibility:**
- The current foundation card is display-only and must not pretend to be interactive.
- Do not add `tabindex`, pointer cursor, or a fake link before a real case destination exists.
- When a future phase makes a card actionable, use a real `<a>` or `<button>` with a meaningful accessible name and visible focus indicator.

**CSS classes:** `.card`, `.card__title`, `.card__description`

## 5. Loading indicator

**Purpose:** Communicates that case data is being requested.

**Expected HTML:**
```html
<p class="loading-indicator" role="status" aria-label="Loading cases">
  Loading cases…
</p>
```

**Required semantics and accessibility:**
- Place inside the case-list live region.
- Use `role="status"` so assistive technology receives a polite status announcement.
- Animation must be suppressed when reduced motion is requested.

**CSS classes:** `.loading-indicator`

## 6. Empty state

**Purpose:** Explains that no case entries are currently available without presenting the condition as a technical failure.

**Expected HTML:**
```html
<p class="empty-state">No cases are available yet.</p>
```

**Required semantics and accessibility:**
- Use plain explanatory text.
- Do not show a retry control unless a request actually failed.

**CSS classes:** `.empty-state`

## 7. Error state

**Purpose:** Explains that case data could not be loaded and offers a retry action.

**Expected HTML:**
```html
<div class="error-state" role="alert">
  <p>We couldn't load the case archive. Please try again.</p>
  <button class="btn-retry" type="button">Try again</button>
</div>
```

**Required semantics and accessibility:**
- Explain the failure in plain language.
- Retry must be a real `<button type="button">`.
- The button must be keyboard reachable and have a visible focus indicator.
- Do not expose raw stack traces to visitors.

**CSS classes:** `.error-state`, `.btn-retry`

## 8. Visually hidden utility

**Purpose:** Hides supporting text visually while keeping it available to assistive technology.

**Expected HTML:**
```html
<span class="visually-hidden">Open navigation menu</span>
```

**Required semantics and accessibility:**
- Must use clipping/clip-path, not `display: none` or `visibility: hidden`.
- Use for accessible labels and supporting text, not for content that should be visually discoverable.

**CSS classes:** `.visually-hidden`

## Shared implementation rules

- Use semantic HTML before adding ARIA.
- Preserve visible keyboard focus.
- Do not introduce interactive behavior into presentation-only components.
- Respect `prefers-reduced-motion`.
- Use approved color tokens from `src/css/tokens.css`.
- Keep case facts out of the foundation UI until the research gate is satisfied.
