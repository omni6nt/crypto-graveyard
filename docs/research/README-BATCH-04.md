# Crypto Graveyard — Research Batch 04 (remaining six cases)

**Cutoff:** 2026-11-19  
**Scope:** Terra / LUNA, BitConnect, OneCoin, Three Arrows Capital, Celsius Network, Thodex.

This package contains six structured case candidates, six research dossiers, an editorial review, a dependency-free validator and a Kiro log entry. It does not overwrite `docs/kiro-log.md`.

## Included
- Six JSON files in `data/cases/`
- `data/schema.md` — exact-string answer-key convention
- `scripts/validate-remaining-cases.mjs`
- Six case dossiers in `docs/research/`
- `docs/research/REMAINING-SIX-REVIEW.md`
- `docs/research/KIRO-LOG-ENTRY.md`

## Evidence and editorial status
30 registered sources across the six cases. Each case has six examination questions, a sourced timeline, warning-sign entries and practical lessons.

**Important:** structural validation is not editorial approval. Thodex is explicitly incomplete: the reviewed material is secondary reporting and primary Turkish court judgments and the post-remand outcome have not been independently obtained. Other case-specific gaps are recorded in each dossier. Do not publish a case until it passes the project's research gate.

## Validate
From the repository root run:
`node scripts/validate-remaining-cases.mjs`

Append `KIRO-LOG-ENTRY.md` to the existing `docs/kiro-log.md` only if desired. This package was assembled outside Kiro; do not claim Kiro generated it.
