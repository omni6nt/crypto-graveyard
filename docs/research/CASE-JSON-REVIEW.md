# FTX and Mt. Gox — Case JSON review record

**Research cutoff:** 2026-11-19  
**Status:** Candidate case content; not yet approved for public release.

## FTX
- Classification avoids calling the exchange itself a Ponzi scheme or treating all staff as convicted.
- The Second Circuit's June 12, 2026 opinion supports the corporate relationship, Alameda credit-line/negative-balance arrangement, collapse chronology and affirmance of Bankman-Fried's conviction.
- The November 2, 2022 balance-sheet publication is described as a trigger; Reuters' caveat that it could not independently verify the leaked balance sheet is preserved.
- The CFTC's $12.7bn monetary-relief order is distinguished from money actually distributed to creditors.
- July 2026 distributions are qualified by claim classes and eligibility. Disputed claims remain relevant.
- Six questions cover governance, affiliate credit, disclosure, liquidity, legal relief and recovery status.

## Mt. Gox
- Classification distinguishes exchange collapse, bankruptcy and later civil rehabilitation.
- February 28, 2014 missing-bitcoin and cash-discrepancy figures are attributed to the company's preliminary announcement.
- The trustee's July 2014 report is quoted for what the rehabilitation application said about suspected illicit transfers and the unexplained cash decrease; it is not presented as proof of one definitive exploit.
- The trustee's 202,106.00072 BTC figure is correctly described as bitcoin at addresses for which private keys were secured, while further investigation continued.
- Current repayment deadlines are stated as October 31, 2027 Japan Time, based on the official trustee website.
- Six questions cover withdrawal warnings, attribution, technical uncertainty, observability, recovery accounting and current repayment status.

## Schema decision
`defensibleAnswers` now uses exact option strings, not numeric indices. This is the canonical representation for these case files and avoids answer keys silently breaking when option order changes.

## Remaining human review before publication
1. Open linked primary source documents and inspect relevant pages/paragraphs, especially the Mt. Gox trustee report and February 2014 company statement.
2. Check that every displayed source link works from a logged-out browser.
3. Have a second reviewer independently solve all twelve examination items and challenge each distractor.
4. Check the case page's eventual rendering of long source titles, legal labels and dates.
5. Recheck both cases' legal and creditor status immediately before content freeze.

No Intuition references were added: none was independently identified and verified as materially useful for these two dossiers. Empty `intuitionReferences` arrays are intentional.
