# Crypto Graveyard — Cross-Case Editorial & Evidence Audit

**Audit date / research cutoff reviewed:** 2026-11-19  
**Scope:** All eight case-data candidates, both research batches, the supplied project archive, schema, case index, and current public-status spot checks.  
**Status:** **Not publication-approved.** This is a cross-case audit and integration correction, not a second independent legal or technical review.

## Executive result

The eight research candidates are substantial enough to move into a structured editorial review, but they are **not ready to publish unchanged**. The audit found one hard integration defect, several case-specific evidence/status gaps, and a set of publication gates that must be closed before the cases are presented as definitive educational records.

### Blocking integration defect

1. **Celsius identifier mismatch — corrected in this package.** The six-case batch used `celsius.json` with `"id": "celsius"`, while the locked project index and original foundation schema use `celsius-network` and `celsius-network.json`. The site loader constructs the filename from the index ID, so the original index would request `data/cases/celsius-network.json` and fail if only `celsius.json` were installed. This package renames the file and sets `"id": "celsius-network"`. It preserves the locked case name and index contract.

## Cross-case checks performed

- Parsed all eight JSON records.
- Confirmed the expected eight locked IDs and names.
- Confirmed every case has the same 16 top-level fields.
- Confirmed all source IDs referenced in `sourceIds` resolve to a source entry in that case.
- Confirmed every examination answer key is represented by exact option text.
- Confirmed six examination items per case (48 total).
- Confirmed populated timelines, warning signs, lessons, and source registers.
- Compared the case identifiers against the supplied project archive's locked `data/cases/index.json`.
- Compared the schema's canonical `defensibleAnswers` rule with the case data.
- Reviewed the bundled editorial caveats and ran current-status spot checks for FTX, Mt. Gox, and Celsius.

**Important limitation:** These checks establish structural consistency, not that every sentence, causal interpretation, link, or examination distractor has been independently verified against every source document. A source register entry existing does not prove that it supports every nearby claim.

## Case-by-case editorial findings

### 1. FTX — conditional review

**Strengths**
- Strong primary-source base, including appellate/court material, regulator material, and bankruptcy/trust reporting.
- The case distinguishes the founder's criminal conviction from the bankruptcy and creditor-distribution process.
- The Second Circuit affirmance is reflected in the classification.

**Required before publication**
- Keep creditor recovery language class-specific. The FTX Recovery Trust's Q2 2026 report states $10.312 billion distributed through June 30, 2026 and a further approximately $900 million distribution on July 31, 2026. It says allowed and estimated allowed interest-bearing claims had received or been reserved for at least 100% cumulative recovery. This must not be rewritten as every customer receiving cash, every claim being allowed, or every claimant being fully paid.
- The FTX support FAQ updated September 13, 2026 says disputed claims may remain under reconciliation and may later become allowed. Keep disputed/eligible claim distinctions visible.
- Recheck the exact class-level treatment and distribution definitions against the latest trust report before any headline recovery percentage is shown.

### 2. Mt. Gox — conditional review

**Strengths**
- The dossier distinguishes the 2014 bankruptcy process from the later civil rehabilitation process.
- It avoids treating an early trustee application's suspected illicit transfers as a final technical finding.

**Required before publication**
- The official trustee notice dated October 16, 2026 reportedly extends the repayment deadline to October 31, 2027. The currently included October 2025 notice is stale for the November 19, 2026 cutoff. Add the October 2026 official trustee notice and update the aftermath. A current secondary report corroborates the change, but the trustee's own notice should be the controlling source.
- Do not imply that a deadline extension means no repayments have happened; distinguish completed categories for eligible creditors from remaining unpaid creditors and processing issues.
- Keep any historical BTC-loss figure clearly defined and sourced; do not equate missing exchange balances with a proven single-cause theft narrative.

### 3. Terra / LUNA — conditional review

**Strengths**
- The dossier separates the UST/LUNA mechanism from civil fraud liability and Do Kwon's criminal conviction.
- It identifies the LFG audit as an official self-report rather than an independent audit.

**Required before publication**
- Keep allegations in the SEC complaint explicitly attributed as allegations; distinguish them from the later jury verdict, civil settlement/judgment, and Do Kwon's separate criminal sentence.
- Avoid treating the collapse as proof that every algorithmic stablecoin is fraudulent or that the same failure mode applies to every design.
- Add an independent technical reconstruction of the UST/LUNA redemption mechanism, liquidity feedback, and May 2022 sequence. Do not rely solely on litigation summaries for the technical explanation.
- Refresh the liquidation/distribution status from the SEC distribution page immediately before content freeze.

### 4. BitConnect — conditional review

**Strengths**
- DOJ and SEC source entries provide a strong primary-source base.
- The dossier explicitly warns that the founder's indictment is not a conviction and that judgments/pleas are person-specific.

**Required before publication**
- Keep the founder's indictment status separate from Arcaro's guilty plea and the SEC judgments against named promoters.
- The classification phrase “Ponzi-style investment fraud” needs a careful scope label: identify whose conduct was adjudicated or admitted and whose conduct remains an allegation in the materials used.
- Add primary contemporaneous January 2018 platform shutdown/withdrawal notices or a clearly sourced archive. The current set is stronger on later prosecutions than on the user-visible shutdown sequence.
- Verify the founder's current procedural status from a current primary court or law-enforcement record before saying he remains a fugitive.

### 5. OneCoin — conditional review

**Strengths**
- The dossier uses primary DOJ/FBI material for Greenwood's guilty plea and sentence and for the victim-remission process.
- It distinguishes Greenwood's conviction from Ruja Ignatova's fugitive status.

**Required before publication**
- Keep every legal outcome person-specific. Greenwood's sentence does not itself establish the legal status of every OneCoin participant.
- Explain the remission program's eligibility and filing deadline without implying that recovered assets guarantee a payment to every victim.
- Add stronger independent technical evidence about the OneCoin ledger and the claims made about its blockchain functionality. The legal record is strong on the fraud scheme, but the technical explanation should not overstate what the cited sources establish.
- Check whether any remission distribution date or new official notice has been announced since the cited FAQ.

### 6. Three Arrows Capital — conditional review

**Strengths**
- The case is correctly framed as an investment-fund collapse and cross-border liquidation, not an exchange or stablecoin failure.
- The reported $3.5 billion creditor exposure is caveated as a reported figure, not a final allowed-claims or recovery total.
- Singapore court material supports later disclosure/examination developments.

**Required before publication**
- Obtain the latest joint liquidators' report or official creditor circular and update the distribution/recovery status. The current dossier does not establish a current total recovery percentage.
- Separate BVI liquidation, U.S. Chapter 15 recognition, Singapore court proceedings, and any individual criminal proceedings; do not merge them into one “case outcome.”
- Any contagion narrative should distinguish documented counterparties/exposures from causal interpretation. Do not claim that 3AC alone caused later failures.
- Treat the $3.5 billion figure as a dated reported creditor claim figure with attribution and methodology.

### 7. Celsius Network — conditional review

**Strengths**
- The dossier distinguishes Mashinsky's criminal plea/sentence from Celsius's bankruptcy distributions.
- It avoids claiming universal full creditor recovery.

**Required before publication**
- Identifier corrected in this package to `celsius-network`.
- Refresh the FTC status. The FTC case page was updated July 20, 2026 and lists the matter as pending while recording stipulated orders entered against named defendants on April 28, June 29, and July 20, 2026. Avoid describing the FTC matter as wholly closed or treating one defendant's order as an outcome for every defendant.
- Add and verify the January 22, 2026 fourth-distribution notice and subsequent status from the Celsius claims administrator/Plan Administrator. A 2024 distribution page is not enough for a November 2026 current-status statement.
- Keep Mashinsky's criminal sentence, FTC civil relief, bankruptcy plan, and creditor distributions distinct.

### 8. Thodex — publication hold

**Strengths**
- The JSON is cautious about the 2025 appellate reversal/remand and does not treat the 2023 trial outcome as necessarily final.
- The user-impact count is attributed rather than presented as independently verified.

**Required before publication**
- **Do not publish this case yet.** All four registered sources are secondary reporting. Obtain primary Turkish trial and appellate decisions, the remand/retrial outcome, and a current official custody/status record.
- Translate or summarize Turkish primary records carefully, retaining court, date, procedural posture, and any uncertainty in translation.
- Do not state a final conviction/sentence, release, or current detention status until the post-remand procedural history is verified.
- Do not present the reported 400,000-member figure or customer-loss total as established without a primary record or independently corroborated methodology.

## Examination-system review

All eight cases currently contain six questions each, for 48 total. Every `defensibleAnswers` entry is an exact string that appears in the corresponding `options` array, and every question's source IDs resolve.

That is a **mechanical check only**. Before publication, a second reviewer must challenge:
- whether the correct answer is uniquely defensible from the cited sources;
- whether any distractor is accidentally also true;
- whether the question tests a signal reasonably observable at the stated visibility stage;
- whether the explanation distinguishes evidence from inference;
- whether it asks visitors to infer guilt from conduct that was only suspicious at the time;
- whether question coverage spans the relevant risk categories rather than repeating one lesson six times.

## Project/schema integration findings

- The supplied project archive's index uses `celsius-network`, not `celsius`. The corrected package now matches that contract.
- The case data uses exact-string `defensibleAnswers`, consistent with the canonical schema in the research batches.
- The foundation `data-loader.js` validates safe IDs and matching IDs but does not perform full schema validation. That is acceptable for the foundation phase; a separate content validator must be run before publication.
- The current foundation `main.js` renders only the directory shell and placeholder card text (“Research in progress.”). It does not yet render the full case narratives, timelines, warning signs, or examination data. Do not assume installing the research JSON makes the case experience visible.
- The site foundation's index is the source of truth for the locked case IDs. Keep IDs stable once progress tracking is introduced.

## Current-status spot-check sources

- FTX Recovery Trust Q2 2026 report, filed August 17, 2026: https://document.epiq11.com/document/getdocumentbycode?docId=4606498&projectCode=FTX&source=DM
- FTX distributions FAQ, updated September 13, 2026: https://support.ftx.com/hc/en-us/articles/34522100742804-Distributions-Dashboard-FAQs
- Mt. Gox official trustee notice (October 16, 2026; obtain and register the exact primary notice PDF before publication). Current secondary corroboration: https://crypto.news/mt-gox-delays-creditor-repayments-by-another-year-to-october-2027/
- FTC Celsius matter page, updated July 20, 2026: https://www.ftc.gov/legal-library/browse/cases-proceedings/222-3137-celsius-network-inc-et-al-ftc-v
- Celsius distribution administrator: https://celsiusdistribution.stretto.com/

## Publication decision

| Case | Decision | Main reason |
|---|---|---|
| FTX | Conditional | Refresh class-level creditor-status language |
| Mt. Gox | Conditional | Add October 2026 official trustee notice; deadline now stale |
| Terra / LUNA | Conditional | Independent technical reconstruction and current liquidation status |
| BitConnect | Conditional | Person-specific adjudication labels; contemporaneous shutdown evidence |
| OneCoin | Conditional | Stronger independent technical evidence; refresh remission status |
| Three Arrows Capital | Conditional | Latest liquidator circular/recovery status missing |
| Celsius Network | Conditional | Refresh FTC and 2026 distribution status |
| Thodex | **Hold** | No primary Turkish court decisions/current post-remand outcome in source register |

**Overall: Do not mark all eight cases “publication ready.”** The package is a research candidate set. The next gate is targeted primary-source completion followed by independent editorial review.
