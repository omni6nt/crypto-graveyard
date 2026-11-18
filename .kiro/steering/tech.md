---
inclusion: always
---

# Technical Architecture and Constraints

## Approved Stack

**Frontend-only static site.** No framework or build step unless a documented reason justifies the change and the project owner approves it.

| Layer | Approved choice |
|---|---|
| Markup | Plain semantic HTML |
| Styles | Plain CSS |
| Logic | JavaScript ES modules |
| Case content | Local JSON files |
| Progress persistence | Browser `localStorage` |
| External links | Research source links and Intuition reference links |
| Nomination | External third-party form provider |
| Hosting target | GitHub Pages (initial target) |

## Hard Boundaries — Never Build These

- No custom backend.
- No server-side code.
- No database.
- No user accounts or authentication.
- No wallet connection.
- No token, payment, or on-chain feature.
- No automated email system.
- No live Intuition integration (read/write transactions, attestations, votes).
- No voting, reputation scoring, or leaderboard systems.

## Case Data Model

Each case JSON file must include these fields:

```
id                    string — unique, stable identifier
name                  string
shortDescription      string — evidence-grounded, one sentence
classification        string — evidence-grounded; do not label fraudulent without record support
researchCutoff        date string
identity              object
background            object
incident              object
causeAnalysis         object
timeline[]            array — chronological, every entry dated and sourced
warningSigns[]        array
aftermath             object
lessons[]             array
sources[]             array
intuitionReferences[] array — may be empty
examination[]         array — 6–8 items
```

Every factual statement, event, or claim includes `sourceIds[]` and a `claimType`:

```
court_finding | official_statement | documented_fact |
reported_claim | allegation | analysis | community_reference
```

No `sourceId` may be missing or used to support a claim it does not support.

## localStorage Schema Rules

- Version the saved data schema; migrate safely on schema changes.
- Handle unavailable `localStorage`, exceptions, malformed JSON, and schema-version mismatches without crashing.
- Storage failure must never prevent reading a case.
- Store no personal information beyond local progress states and entrance-completion flag.
- Offer a reset option; require confirmation before clearing progress.

## Progress States

Three states per case: `Unexamined`, `In Progress`, `Examined`.
- Opening a case may set it to `In Progress`.
- `Examined` is set only after examination submission.
- Reopening or retaking must not erase an `Examined` state.
- Saving is idempotent.

## Nomination Form

Use an external form provider. The site collects: project name, submitter email, reason, supporting links. Owner accesses submissions through the form provider's interface. No custom backend, no automated email, no Crypto Graveyard account required.

## Automated Test Requirements

Validate before publishing any case content:
- Unique case IDs.
- All required fields present.
- Timeline entries are chronological and have `sourceIds`.
- Every factual claim has valid `sourceIds`.
- All referenced source IDs exist in the case's `sources[]`.
- 6–8 examination items per case, each with explanation and `sourceIds`.
- Approved `claimType` values only.
- Intuition references labelled as `community_reference`, not as primary evidence.
- Storage behavior: normal, corrupt, unavailable, reset, and repeat-completion scenarios.

## Implementation Order (Phase 4)

Follow this order. Do not skip ahead:
1. Semantic HTML shell and responsive layout.
2. Case data model and loader.
3. Directory and navigation.
4. Reusable case-file page.
5. Sources and claim labels.
6. Examination flow.
7. Local progress and storage resilience.
8. Cemetery and tombstone interactions.
9. Coroner dialogue and entrance sequence.
10. Final outro.
11. External nomination form.
12. Judge Quick Tour (P1, if time permits).

## Repository and Project Rules

- Repository is public: `omni6nt/crypto-graveyard`.
- Root `.kiro/` directory is tracked in Git.
- No secrets committed.
- Document all Kiro feature usage in `docs/kiro-log.md` with date, feature, task, generated/changed work, human review/corrections, and evidence/commit reference.
- Do not fabricate Kiro feature usage in the submission.
- Keep `assets/CREDITS.md` up to date with source, tool, date, and license for every asset.

## Definition of Done (per feature)

Implementation exists; acceptance criteria checked; tests pass; desktop and mobile behavior verified; no unsupported factual or capability claim; change documented in project log.
