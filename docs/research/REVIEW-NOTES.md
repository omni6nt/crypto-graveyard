# Research Batch 03 — FTX and Mt. Gox case-data candidates

**Cutoff:** 2026-11-19

## Deliverables
- `data/cases/ftx.json`
- `data/cases/mt-gox.json`
- Canonical answer-key rule in `data/schema.md`: `defensibleAnswers` stores exact option strings.
- `scripts/validate-case-data.mjs`: dependency-free Node validator for the two researched files.
- `docs/research/CASE-JSON-REVIEW.md`: editorial review record.

## Important attribution safeguards
- FTX's November 2, 2022 balance-sheet leak is a public report and withdrawal catalyst; Reuters said it could not independently verify the leaked document.
- The CFTC's $12.7bn order is not the amount paid to every FTX customer.
- FTX plan recovery percentages apply to defined claim classes and eligibility requirements.
- Mt. Gox's missing BTC numbers are preliminary company-disclosed estimates.
- Mt. Gox's trustee described what the rehabilitation application alleged about a possible bug-related mechanism; the trustee also said investigation continued.
- The trustee's 202,106.00072 BTC figure is not a total repayment figure or a complete recovery rate.

## Validation performed
- Both JSON files parsed successfully.
- Required top-level fields and nested structures checked.
- Source references resolve to source-register entries.
- Claim, visibility and difficulty labels use allowed values.
- Examination answer keys exactly match option text.
- Six examination items are present in each case.

## Publication gate still open
A second reviewer must verify underlying source passages and independently challenge the answer keys and distractors. Recheck changing legal and repayment status before deployment.
