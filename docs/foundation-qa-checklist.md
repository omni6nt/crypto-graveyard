# Foundation QA Checklist — TASK-013

**Purpose:** Record local browser checks for the application foundation. Do not mark a check passed unless it has been performed in the browser.

## Test environment
- Browser/version:
- Operating system:
- Date:
- Local server URL:
- Extensions disabled / clean profile: Yes / No

## Viewport checks

| Width | Expected result | Result | Notes |
|---:|---|---|---|
| 360px | Single column; no horizontal scrolling; no essential clipping | Pending | |
| 768px | Tablet layout; content constrained and readable | Pending | |
| 1280px | Desktop layout; content does not stretch edge-to-edge | Pending | |

Also inspect 311px and 390px if available because the mobile menu was previously observed clipped at a narrow emulated width.

## Navigation checks

| Test | Expected result | Result |
|---|---|---|
| JavaScript disabled | All four nav links remain visible; toggle does not create a dead control | Pending |
| Open mobile menu | `aria-expanded=true`; focus moves to first link | Pending |
| Close with toggle | Menu closes; focus returns to toggle | Pending |
| Close with Escape | Menu closes; focus returns to toggle | Pending |
| Tab beyond last nav link | Menu closes; focus proceeds naturally; no focus trap | Pending |
| Shift+Tab from first link | Menu closes; focus proceeds naturally to prior element | Pending |
| Move between nav links | Menu remains open | Pending |
| Hash navigation | Matching link receives `aria-current=page` | Pending |

## Content and data states

| Test | Expected result | Result |
|---|---|---|
| Normal load | Eight case cards appear | Pending |
| Card content | Name, “Research in progress.”, “Unexamined” | Pending |
| Empty index | Clear empty state; no technical error wording | Pending |
| Failed fetch / offline | Accessible error state and working retry | Pending |
| Retry after recovery | Case list loads successfully | Pending |
| No JavaScript | Four sections and static case-list fallback remain visible | Pending |

## Accessibility and motion

| Test | Expected result | Result |
|---|---|---|
| Full keyboard pass | Skip link, navigation, and controls reachable in logical order | Pending |
| Focus visibility | Visible focus indicator on every focused control | Pending |
| Reduced motion | No nav animation, pulsing, or transitions | Pending |
| Contrast | Text and controls remain readable against approved backgrounds | Pending |
| Screen reader status | Loading and error status communicated politely | Pending |

## Console and network

- [ ] No application-owned uncaught exceptions.
- [ ] No missing application CSS/JS/data requests.
- [ ] Favicon loads successfully.
- [ ] Distinguish browser-extension injection errors from application errors; repeat in a clean profile or with wallet extensions disabled.
- [ ] Confirm Google Fonts requests succeed; if unavailable, fallback fonts render acceptably.

## Final disposition
- Browser checks passed:
- Browser checks failed:
- Outstanding defects:
- Owner approval:

**Important:** The project log must record actual observed results. Do not change Pending to Passed based only on source inspection or automated syntax checks.
