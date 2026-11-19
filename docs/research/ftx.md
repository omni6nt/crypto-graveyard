# FTX — Research dossier (working draft)

**Research cutoff:** 2026-11-19  
**Publication status:** NOT APPROVED — examination items are draft questions; editorial review remains outstanding.  
**Classification (provisional):** Centralized crypto exchange collapse; fraud convictions and court findings involving senior leadership and affiliated entities.

## 1. Identity and operating context

FTX was a cryptocurrency exchange business founded in 2019. Alameda Research was a separate affiliated trading firm founded earlier and closely associated with FTX's founder. The Second Circuit's June 12, 2026 opinion describes Sam Bankman-Fried as having founded FTX in 2019 and Alameda in 2017, holding substantial ownership stakes in both, and controlling them. The opinion describes Alameda's special privileges, including a very large credit line it could draw from FTX. [F-01]

## 2. Incident reconstruction

The Second Circuit's 2026 opinion recounts that Bankman-Fried assured customers that funds were safe while billions of dollars were transferred from FTX customer accounts to Alameda and elsewhere, used for purposes including covering Alameda losses, investments, political contributions and personal real estate, with falsified records used to conceal transactions. The opinion affirmed the judgment following the jury's fraud and conspiracy convictions. [F-01]

The Third Circuit's January 19, 2024 opinion describes the common ownership and conflict-of-interest concerns surrounding FTX and Alameda, and software used to conceal the funneling of customer funds to Alameda. Treat this as a judicial opinion in a bankruptcy-related appeal; do not represent every passage as a separate criminal verdict. [F-02]

A contemporaneous timeline compiled by Reuters records the November 2, 2022 publication of an Alameda balance sheet, the November 6 announcement by Binance that it would liquidate FTT holdings, public reassurance by Bankman-Fried on November 7, the failed proposed Binance acquisition, and the suspension of withdrawals on November 10. Reuters explicitly said it could not independently verify the leaked balance sheet report. [F-08]

## 3. Court-established legal outcomes

The Second Circuit affirmed Bankman-Fried's fraud and conspiracy judgment on June 12, 2026. [F-01]

The CFTC announced that a federal court entered a consent order against FTX Trading and Alameda requiring $12.7 billion in monetary relief: $8.7 billion restitution and $4 billion disgorgement. This was a consent order; it must not be conflated with cash already distributed to individual customers. [F-03]

## 4. Timeline

| Date | Event | Claim type | Source |
|---|---|---|---|
| 2017 | Alameda Research founded, according to the Second Circuit's account | court_finding | F-01 |
| 2019 | FTX founded, according to the Second Circuit's account | court_finding | F-01 |
| 2022-11-02 | CoinDesk published reporting on an Alameda balance sheet; Reuters later summarized the report and noted it could not independently verify it | reported_claim | F-08 |
| 2022-11-06 | Binance announced it would liquidate its FTT holdings | reported_claim | F-08 |
| 2022-11-07 | Bankman-Fried publicly said FTX was fine and assets were fine | reported_claim | F-08 |
| 2022-11-10 | FTX suspended withdrawals until further notice, according to Reuters' chronology | reported_claim | F-08 |
| 2022-11-11 | FTX entities filed Chapter 11 petitions after inability to meet withdrawal requests | court_finding | F-01 |
| 2024-08-08 | CFTC announced $12.7bn consent order | official_statement | F-03 |
| 2026-06-12 | Second Circuit affirmed Bankman-Fried's fraud/conspiracy judgment | court_finding | F-01 |
| 2026-07-31 | FTX Recovery Trust completed a fifth distribution of approximately $900m; amounts varied by claim class | official_statement | F-04, F-05 |

## 5. Aftermath and status at cutoff

FTX's court-supervised restructuring does not mean every creditor has received payment. The Recovery Trust's fifth distribution announcement described approximately $900 million distributed on July 31, 2026 to eligible holders of allowed claims, with different plan-defined recovery percentages by claim class. Those percentages do not mean every customer received their original crypto assets or that every claim was paid. [F-04]

A court-filed Q2 2026 report states that cumulative distributions through June 30, 2026 totaled approximately $10.312 billion, with a further approximately $900 million distribution completed on July 31, 2026. It distinguishes allowed and estimated allowed claims from disputed claims and amounts reserved for claims. [F-05, F-06]

## 6. Causal analysis — provisional interpretation

The evidence supports a combination of concentrated control across affiliated businesses, customer-fund misuse described in judicial opinions, inadequate governance and controls, and a liquidity run after confidence deteriorated. This is an analytical synthesis, not a claim that one factor alone caused the collapse. [F-01, F-02, F-08]

Do not say the FTT token alone caused the collapse. The balance-sheet report and FTT liquidation were part of the public crisis sequence, but the court record describes deeper customer-fund and control failures. [F-01, F-08]

## 7. Warning signs — draft, with observability labels

1. **Concentrated control across an exchange and affiliated trading firm** — important structural risk, but do not imply ordinary customers could verify the full internal relationship or special privileges. `hindsight_or_limited_visibility`. [F-01]
2. **Dependence on affiliated-party credit and privileged access** — Alameda's special privileges and credit line were material internal facts, not necessarily publicly observable before the incident. `hindsight`. [F-01]
3. **Public balance-sheet concerns and FTT concentration reporting** — visible through reporting on November 2, but Reuters noted it could not independently verify the leaked balance sheet. `pre_incident_late_signal`, with explicit uncertainty. [F-08]
4. **Public reassurance amid escalating concerns** — Bankman-Fried's November 7 reassurance was public; compare it with the subsequent withdrawal suspension and court record, but avoid treating a statement alone as proof a user should have known the full facts. `during_incident`. [F-08, F-01]
5. **Withdrawal suspension** — a clear crisis signal on November 10, not an early warning months in advance. `during_incident`. [F-08]

## 8. Lessons — draft

- **Users:** Custodial exchange balances create counterparty exposure; an account balance is not independent proof that assets are segregated and available.
- **Builders/operators:** Separate affiliated trading from customer custody through enforceable governance, accounting, access controls and independent oversight.
- **Users and builders:** Liquidity and solvency are different. A platform can display balances while being unable to meet withdrawals.
These are analytical lessons drawn from the case, not quotations from a court. [F-01, F-02]

## 9. Examination design — draft, not yet approved

Questions are designed to test evidence literacy and transferable risk understanding, not to invite hindsight-based blame. Correct answers below are for editorial use and should be hidden from visitors until the product's quiz interaction is implemented.

1. **Which statement is best supported by the appellate record?**  
   A. Alameda was an unrelated third-party customer with no special access.  
   B. FTX and Alameda were under substantial common ownership and control, and Alameda had special privileges.  
   C. FTX's collapse was caused solely by a public FTT price decline.  
   D. Every FTX customer knowingly consented to lending funds to Alameda.  
   **Editorial key:** B. **Evidence:** F-01, F-02. **Skill:** governance and conflicts of interest.

2. **What is the most accurate description of the November 2 balance-sheet reporting?**  
   A. A final audited proof of insolvency.  
   B. A reported trigger for concern, which Reuters said it could not independently verify.  
   C. A court judgment.  
   D. A formal bankruptcy filing.  
   **Editorial key:** B. **Evidence:** F-08. **Skill:** source quality and uncertainty.

3. **Which event is a clear during-incident warning rather than an early warning months ahead?**  
   A. FTX's November 10 withdrawal suspension.  
   B. FTX's founding in 2019.  
   C. Alameda's founding in 2017.  
   D. The 2026 appellate decision.  
   **Editorial key:** A. **Evidence:** F-08. **Skill:** timeline and observability.

4. **Why is a displayed exchange balance not sufficient proof that customer assets are safe?**  
   A. A user interface is a cryptographic proof of reserves.  
   B. An intermediary's internal accounting and custody practices determine whether assets are actually held and available.  
   C. All exchanges invest customer assets in the same way.  
   D. Market prices never affect withdrawals.  
   **Editorial key:** B. **Evidence:** F-01, F-02. **Skill:** custody and counterparty risk.

5. **How should the CFTC's $12.7 billion order be described?**  
   A. Cash already paid to every FTX customer.  
   B. A consent order comprising $8.7bn restitution and $4bn disgorgement.  
   C. The exact amount of bitcoin stolen.  
   D. A criminal sentence imposed on all FTX employees.  
   **Editorial key:** B. **Evidence:** F-03. **Skill:** legal and financial precision.

6. **Which explanation best captures the collapse without oversimplifying it?**  
   A. FTT alone caused everything.  
   B. A single social-media post caused the entire failure.  
   C. Governance and affiliated-party control failures, customer-fund misuse, and a liquidity run interacted.  
   D. The collapse was only a user-interface outage.  
   **Editorial key:** C. **Evidence:** F-01, F-02, F-08. **Skill:** causal reasoning.

## 10. Source register

| ID | Source | Publisher | Date | Type | Use |
|---|---|---|---|---|---|
| F-01 | *United States v. Bankman-Fried*, No. 24-961 | U.S. Court of Appeals, Second Circuit (opinion mirrored by FindLaw) | 2026-06-12 | primary / court opinion | Corporate relationship, customer-fund misuse, collapse, appellate outcome |
| F-02 | *FTX Trading, Ltd. v. Vara*, No. 23-2297 | U.S. Court of Appeals, Third Circuit | 2024-01-19 | primary / court opinion | Affiliate relationship and concealment described in opinion |
| F-03 | CFTC Release 8938-24 | U.S. Commodity Futures Trading Commission | 2024-08-08 | primary / regulator release | Consent order and monetary relief |
| F-04 | Fifth distribution announcement | FTX Recovery Trust / PR Newswire | 2026-07-17 | official statement | Fifth distribution and class-based recovery |
| F-05 | Q2 2026 financial report, Case 22-11068-KBO, Doc. 36154 | U.S. Bankruptcy Court filing | 2026-08-17 | primary / court filing | Cumulative distributions and reserves |
| F-06 | Distributions Dashboard FAQs | FTX Customer Support | 2026-09-13 | official statement | Claim eligibility and disputed claims |
| F-08 | Rise and fall of crypto exchange FTX | Reuters (syndicated by Investing.com) | 2022-11-14 | contemporaneous secondary | Public chronology; Reuters notes it could not verify leaked balance sheet |

### Direct source URLs
- F-01: https://caselaw.findlaw.com/court/us-2nd-circuit/131143.html
- F-02: https://law.justia.com/cases/federal/appellate-courts/ca3/23-2297/23-2297-2024-01-19.html
- F-03: https://www.cftc.gov/PressRoom/PressReleases/8938-24
- F-04: https://www.prnewswire.com/news-releases/ftx-announces-fifth-distribution-of-approximately-900-million-to-creditors-on-july-31-2026-302828726.html
- F-05: https://document.epiq11.com/document/getdocumentbycode?docId=4606498&projectCode=FTX&source=DM
- F-06: https://support.ftx.com/hc/en-us/articles/34522100742804-Distributions-Dashboard-FAQs
- F-08: https://www.investing.com/news/economy/rise-and-fall-of-crypto-exchange-ftx-2946299

**Editorial limitations:** The question set is a draft. Review wording and distractors, add direct primary-source support for operational controls, and verify all case JSON fields against the project's schema before publication.
