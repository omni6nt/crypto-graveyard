---
inclusion: always
---

# Product — Vision, Audience, Features, Journey, and Locked Decisions

## Vision

Crypto Graveyard is a cinematic, Halloween-themed educational investigation experience about consequential failures, collapses, security incidents, and misconduct in cryptocurrency. Visitors enter a haunted Victorian cemetery, meet the Mad Victorian Coroner, choose a grave, investigate a documented case, examine evidence, identify warning signs, and learn practical lessons.

Tagline: **Where Failed Projects Rest in Peace.**
Supporting line: **Investigate. Learn. Remember.**
Creative principle: **Halloween in every pixel. Credibility in every claim.**

It is not a directory, voting platform, crypto dashboard, or Intuition front end. Its value is the combination of atmospheric storytelling, documented historical research, guided investigation, and practical learning.

## Audience

Crypto-curious visitors, builders, developers, users, and investors. After each case a visitor should be able to answer: what the project was; what happened and when; what evidence supports the account; which warning signs were visible at the time; what happened afterward; and what lessons can reasonably be drawn without hindsight bias.

## Locked Case Collection — Do Not Change

The eight selected cases are fixed. Do not add, remove, or swap them without project-owner approval. Each case is a subject under investigation, not a pre-judged conclusion.

1. FTX
2. Mt. Gox
3. Terra / LUNA
4. BitConnect
5. OneCoin
6. Three Arrows Capital
7. Celsius Network
8. Thodex

If a case cannot meet the evidence standard by content freeze, delay or omit it rather than weakening the standard. A collapse, bankruptcy, security incident, allegation, and criminal conviction are not interchangeable categories.

## Approved Features (P0 — Required)

| ID | Feature | Key constraint |
|---|---|---|
| CG-ENT-001/002 | Cinematic entrance sequence | Skippable; reduced-motion alternative; no rapid flashing; returning visitors not forced to replay |
| CG-CEM-001 | Cemetery environment | Eight individually identifiable semantic graves; directory alternative; works at 360px; status not color-only |
| CG-CASE-001 | Case directory | Evidence-grounded classification; do not label fraudulent without record support |
| CG-CASE-002 | Case file | Identity, background, incident, cause, timeline, warning signs, aftermath, lessons, sources; every factual claim has source IDs; facts/allegations/statements/findings/analysis distinguished |
| CG-EXAM-001 | Examination | 6–8 items per case; defensible answers; pre-incident vs hindsight feedback; retakes allowed; no humiliating score treatment |
| CG-PROG-001/002 | Progress tracking | States: Unexamined, In Progress, Examined; Examined only after examination submission; handle unavailable/corrupt storage safely; no personal data stored |
| CG-COR-001 | Coroner dialogue | Entrance, case intro, examination, outro; does not obscure evidence; accessible; respectful toward people harmed |
| CG-OUT-001 | Final outro | Skippable/dismissible; approved Coroner copy preserved; must not block cemetery access; does not imply all cases had the same cause |
| CG-REF-001 | References | Every factual claim maps to source IDs; links work; Intuition links labelled as supplementary community references; show research cutoff date |
| CG-NOM-001 | External nomination form | Fields: project name, email, reason, supporting links; no Crypto Graveyard account; explain manual review and no publication guarantee |
| CG-ABOUT-001 | Methodology page | Selection/research methodology; claim labels; educational/non-financial-advice purpose; error reporting; research cutoff and limitations |
| CG-A11Y-001 | Accessibility | Keyboard nav; visible focus; 4.5:1 contrast; 44×44 touch targets; reduced motion; color-independent status; meaningful alt text; sound optional |
| CG-RESP-001 | Responsive design | Core flows at 360px, tablet, desktop; no essential clipped content; evidence readable without zooming |

## Approved Features (P1 — High-Value Additions, Time Permitting)

| ID | Feature | Key constraint |
|---|---|---|
| CG-TOUR-001 | Judge Quick Tour (~2 min) | Uses actual screens; skippable; never simulates unbuilt functionality |
| CG-ASSET-001 | Individual asset library | Separate implementation-ready files; `assets/CREDITS.md` with source/tool/date/license; no unauthorized logos, franchise art, or unlicensed music |
| CG-NOM-002 | Nomination confirmation copy | Explain that form submission is handled by provider and nominations are manually reviewed |

## Deferred — P2 (Do Not Build)

More than eight cases; extra cemetery districts or fully realized archive; extra characters; full detective board; live Intuition integration; voting/reputation/attestations; user accounts; custom backend; automated email; tokens/XP/leaderboards/payments; full 3D engine or complex audio.

## Visitor Journey

1. **Entrance** — Cinematic gate sequence and Coroner introduction.
2. **Cemetery** — One primary environment with eight graves and a case-directory alternative.
3. **Case file** — Reusable investigation page.
4. **Evidence and references** — Primary records, official statements, credible reporting, technical analysis, and relevant Intuition references.
5. **Medical examination** — Identify documented warning signs and receive explanations.
6. **Journal** — Local progress tracking.
7. **Final verdict** — Coroner outro.

**Main navigation:** The Cemetery, Case Archives, The Journal, About the Graveyard.

## Entrance Sequence (CG-ENT-001) — Exact Order

1. Closed iron gate beneath a moon, with bats, fog, lanterns, crooked trees, and webs.
2. Gate opens slowly.
3. Quiet pause looking into the cemetery.
4. A hand suddenly shoots out of the ground (distinct jump-scare beat — do not merge into generic animation).
5. A second hand appears; the Coroner crawls out.
6. He stands, brushes off dirt, and adjusts his spectacles.
7. He notices the visitor and welcomes them.

## Final Outro — Approved Coroner Copy

> Well, well... look at you. You've walked among the forgotten, examined the fallen, followed the evidence and uncovered the symptoms of their demise. Some were brought down by greed. Others by reckless ambition, poor decisions, fragile systems or warnings nobody cared to hear. But remember, my friend... The graveyard is not filled with projects that believed they would fail. It is filled with projects that believed they were immortal. And that, perhaps, is the most important lesson of all. Now then... shall we see who rests here next?

Do not alter this copy without project-owner approval.

## Locked Product Decisions

- **No invented features.** Scope changes require project-owner approval.
- **Eight cases only.** Do not add, remove, or reorder without approval.
- **Intuition is an additional reference source only** — not a product feature, integration, community layer, or top-level navigation destination. Intuition links belong inside a case's evidence/sources section.
- **No separate community layer:** no voting, support/opposition buttons, reputation scores, new attestations, or wallet connection.
- **Nomination is an external form only.** No custom backend, accounts, authentication, public voting, automatic publishing, or in-site email system.
- **Progress is localStorage only.** No account, no server, no personal data beyond local progress and entrance state.
- **The Coroner is the sole fully developed MVP character.**
- **Never sacrifice factual integrity or a working application for more animation.**

## Completion Definition

Entrance works and can be skipped; cemetery and directory expose published cases; each case passes research standards; case pages contain sourced history, incident, timeline, warning signs, aftermath, lessons, and references; each has 6–8 examination items; progress is resilient; Intuition links are accurate and supplementary; nomination form works externally; Coroner outro works; site is responsive, accessible, sound-optional; public repository has license and root `.kiro` files.
