# CRYPTO GRAVEYARD — MVP REQUIREMENTS

**Priority:** P0 required; P1 important if time permits; P2 deferred. No feature is complete until its acceptance criteria are checked. Scope changes require project-owner approval.

## P0 — Core experience

### CG-ENT-001 Entrance
First-time visitors see the cinematic sequence: closed gate; slow opening; quiet look into cemetery; distinct hand emerging; second hand and Coroner crawling out; Coroner stands, brushes off dirt, adjusts spectacles, notices and greets visitor. Skippable at any point; returning visitors do not replay automatically; sound optional; reduced-motion alternative; no rapid flashing.

### CG-ENT-002 Entrance state
Remember completed/skipped state locally. If storage is unavailable, entrance still works for the current session.

### CG-CEM-001 Cemetery
One primary environment with the eight selected case entries. Graves are individually identifiable, semantic buttons with accessible names. Directory alternative exists. Status is not conveyed by color alone. Works at 360px width.

### CG-CASE-001 Directory
All published cases appear with project name and concise evidence-grounded classification. Selecting one opens the correct case. Do not label a project fraudulent unless supported by the record.

### CG-CASE-002 Case file
Each published case contains identity, background, incident, cause/contributing factors, timeline, warning signs, aftermath/current status, lessons, and sources. Every factual claim has source references. Facts, allegations, official statements, court findings, and analysis are distinguished. Missing/disputed information is marked, not guessed.

### CG-EXAM-001 Examination
Each published case has 6–8 items. Every item has prompt, options, defensible answer, explanation, and source IDs. Feedback distinguishes pre-incident visibility from hindsight. Retakes allowed; no humiliating score treatment.

### CG-PROG-001 Progress
Statuses: Unexamined, In Progress, Examined. Opening may set In Progress. Examined only after examination submission. Reopening/retaking does not erase completion. Saving idempotent; reset requires confirmation.

### CG-PROG-002 Storage resilience
Handle unavailable localStorage, exceptions, malformed/corrupt JSON, and schema versions safely. Storage failure never prevents reading a case. Version saved data; test migration if schema changes. Store no personal information beyond local progress/entrance state.

### CG-COR-001 Coroner
Contextual dialogue for entrance, case introduction, examination, and outro. Does not obscure evidence; works without sound/animation; accessible updates; respectful tone toward affected users.

### CG-OUT-001 Final outro
Provide a clear completion path and skippable/dismissible Coroner outro. Suggested copy:

> Well, well... look at you. You've walked among the forgotten, examined the fallen, followed the evidence and uncovered the symptoms of their demise. Some were brought down by greed. Others by reckless ambition, poor decisions, fragile systems or warnings nobody cared to hear. But remember, my friend... The graveyard is not filled with projects that believed they would fail. It is filled with projects that believed they were immortal. And that, perhaps, is the most important lesson of all. Now then... shall we see who rests here next?

Do not imply every case had the same cause; outro must not block cemetery access.

### CG-REF-001 References
Every factual claim in case content, timelines, examination explanations, and material lessons maps to one or more source IDs. Links work. Intuition links are supplementary community references, not proof. Broken sources flagged. Show research cutoff date.

### CG-NOM-001 External nomination
External form fields: project name, submitter email, reason, supporting links. No Crypto Graveyard account/sign-in. Explain manual review and no guarantee of publication. Review provider privacy terms. Owner can access submissions. No custom backend or automated email.

### CG-ABOUT-001 Methodology
Explain selection/research methodology; claim labels; facts vs allegations vs statements vs findings vs interpretation; educational/non-financial-advice purpose; error reporting; research cutoff and limitations.

### CG-A11Y-001 Accessibility
Keyboard navigation, visible focus, 4.5:1 contrast target, 44×44 target target, reduced motion, color-independent status, meaningful alt text, sound optional.

### CG-RESP-001 Responsive
Core flows work at 360px, tablet, desktop. No essential clipped content. Directory alternative on narrow screens. Evidence readable without zooming.

## P1 — High-value additions
- **CG-TOUR-001 Judge Quick Tour:** roughly two minutes using actual screens; introduces premise, cemetery, case file, evidence, examination, lessons; skippable; never simulates unbuilt functionality.
- **CG-ASSET-001 Individual asset library:** separate implementation-ready files, descriptive filenames, clean alpha edges, separate backgrounds/characters/props, `assets/CREDITS.md` recording source/tool/date/license. No unauthorized logos, copied franchise art, or unlicensed music.
- **CG-NOM-002 Confirmation copy:** explain that external form submission is handled by provider and nominations are manually reviewed.

## P2 — Deferred
More than eight cases; extra cemetery districts or fully realized archive; extra characters; full detective board; live Intuition integration; voting/reputation/attestations; user accounts; custom backend; automated email; tokens/XP/leaderboards/payments; full 3D engine or complex audio.

## Data requirements
Each case file should include `id`, `name`, `shortDescription`, `classification`, `researchCutoff`, `identity`, `background`, `incident`, `causeAnalysis`, `timeline[]`, `warningSigns[]`, `aftermath`, `lessons[]`, `sources[]`, `intuitionReferences[]` (may be empty), and `examination[]`.

Every factual statement/event includes `sourceIds[]` and a `claimType`: `court_finding`, `official_statement`, `documented_fact`, `reported_claim`, `allegation`, `analysis`, or `community_reference`. No source ID may be missing or used to support a claim it does not support.

## Automated tests
Validate unique case IDs; required fields; dated/sourced chronological timeline; every factual claim's source IDs; valid source references; 6–8 examination items each with explanation/source IDs; approved claim labels; Intuition references not mislabeled as primary evidence; storage normal/corrupt/unavailable/reset/repeat-completion behavior.

## Definition of done
Implementation exists; acceptance criteria checked; tests pass; desktop/mobile behavior checked; no unsupported factual or capability claim; change documented in project log.
