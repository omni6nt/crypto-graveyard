# Mt. Gox — Research dossier (working draft)

**Research cutoff:** 2026-11-19  
**Publication status:** NOT APPROVED — examination items are draft questions; editorial review remains outstanding.  
**Classification (provisional):** Bitcoin exchange collapse followed by bankruptcy and civil rehabilitation. Do not reduce the full event to a single confirmed technical cause.

## 1. Identity and operating context

Mt. Gox Co., Ltd. operated an online bitcoin exchange. The bankruptcy trustee's July 23, 2014 report identifies the company as an online exchange and recounts its February 28, 2014 civil rehabilitation application. [M-01]

## 2. Incident reconstruction

On February 7, 2014, Mt. Gox announced that it was pausing all bitcoin withdrawals while it investigated a technical issue. The contemporaneous statement, reproduced by CoinDesk, said trading could continue while withdrawals were paused. [M-07]

Reuters reported on February 10 that the halt would continue indefinitely after Mt. Gox cited unusual activity. On February 25, Reuters reported that Mt. Gox had stopped trading and its website had gone dark. [M-08]

In its February 28, 2014 public announcement, Mt. Gox stated that its internal investigation had found approximately 750,000 bitcoins deposited by users and approximately 100,000 bitcoins belonging to the company had disappeared. It said the complete extent was not yet known, described suspected illicit transfers and a possible bug-related mechanism, and also reported a discrepancy of approximately JPY 2.8 billion between cash held and customer deposit balances. These were the company's statements at the time, not a final independent technical determination. [M-09]

The bankruptcy trustee's July 23, 2014 report recounts that the civil rehabilitation application cited insolvency, potential illicit transfers through illegal access exploiting a bug in the bitcoin system, and a decrease in cash deposits whose reason had not yet been identified. Attribute those explanations to the application as recounted by the trustee. [M-01]

The Tokyo District Court dismissed the rehabilitation application and ordered provisional administration on April 16, 2014; it ordered bankruptcy proceedings on April 24, 2014. In June 2018, civil rehabilitation proceedings commenced and the bankruptcy proceedings were stayed. [M-02, M-03, M-04]

## 3. Timeline

| Date | Event | Claim type | Source |
|---|---|---|---|
| 2013 onward | Users experienced cash-withdrawal delays, as later described in U.S. court records; treat specific allegations and findings according to the cited case's procedural context | court_record | M-10 |
| 2014-02-07 | Mt. Gox announced a pause of all bitcoin withdrawals | official_statement | M-07 |
| 2014-02-10 | Reuters reported the pause would continue indefinitely | reported_claim | M-08 |
| 2014-02-25 | Mt. Gox stopped trading and its website went dark, according to contemporaneous Reuters reporting | reported_claim | M-08 |
| 2014-02-28 | Mt. Gox announced suspected disappearance of approximately 850,000 BTC and a cash discrepancy; figures were preliminary company statements | official_statement | M-09 |
| 2014-04-16 | Tokyo District Court ordered provisional administration after dismissing the rehabilitation application | court_finding | M-02 |
| 2014-04-24 | Tokyo District Court ordered bankruptcy proceedings | court_finding | M-03 |
| 2018-06-22 | Civil rehabilitation proceedings commenced; bankruptcy proceedings were stayed | court_finding | M-04 |
| 2026-10-16 | Trustee announced repayment deadlines extended to October 31, 2027 | official_statement | M-05 |

## 4. Causal analysis — provisional

The company's February 28 announcement attributed the suspected bitcoin disappearance to possible exploitation of a bug and reported a separate cash discrepancy. It explicitly said the investigation was incomplete and the exact amounts could change. [M-09]

The trustee's July 2014 report records what the company's rehabilitation application said about potential illicit transfers and a decrease in cash deposits. Neither source should be paraphrased as proving that one bug definitively explains every missing bitcoin or the full insolvency. [M-01, M-09]

The case should be presented as a combination of custody, operational security, accounting, withdrawal, and insolvency failures, with precise attribution for each asserted mechanism.

## 5. Aftermath and current status

The Tokyo District Court commenced civil rehabilitation proceedings in June 2018, staying the earlier bankruptcy proceedings. [M-04]

The trustee's official website states that repayment deadlines for base, early lump-sum, and intermediate repayments were changed on October 16, 2026 from October 31, 2026 to October 31, 2027, with court permission. It also warns creditors about fraudulent websites and emails impersonating Mt. Gox or the trustee. [M-05]

## 6. Warning signs — draft, with observability labels

1. **Cash withdrawal delays** — later court records describe users reporting substantial cash withdrawal difficulties from 2013. The source must be presented with its procedural context; this is a potentially observable signal, not proof every customer knew the company's solvency position. `pre_incident_signal`. [M-10]
2. **Bitcoin withdrawal suspension on February 7, 2014** — an explicit public announcement that all bitcoin withdrawals were paused. `during_incident`. [M-07]
3. **Indefinite continuation of the withdrawal halt** — Reuters reported on February 10 that the halt would continue indefinitely. `during_incident`. [M-08]
4. **Trading suspension and website going dark** — reported February 25. This is a terminal crisis signal, not an early warning. `during_incident`. [M-08]
5. **Company disclosure of missing bitcoin and cash discrepancy** — Mt. Gox's February 28 announcement disclosed preliminary estimates and uncertainty. `post_shutdown_disclosure`. [M-09]

## 7. Lessons — draft

- **Users:** Custodial exchange balances expose users to the operator's custody, accounting, security, and solvency risks.
- **Builders/operators:** Maintain independently auditable asset and liability records, robust withdrawal controls, and transparent incident communication.
- **Users and creditors:** During long-running recovery proceedings, verify repayment instructions only through official trustee channels; impersonation scams remain a documented risk.
These are analytical lessons, not quotations from the trustee. [M-01, M-05, M-09]

## 8. Examination design — draft, not yet approved

1. **What did Mt. Gox announce on February 7, 2014?**  
   A. That all customer funds had been repaid.  
   B. That bitcoin withdrawals were temporarily paused while a technical issue was investigated.  
   C. That the exchange had entered civil rehabilitation.  
   D. That all trading was permanently closed.  
   **Editorial key:** B. **Evidence:** M-07. **Skill:** timeline and official communications.

2. **Which statement best preserves the status of the February 28 missing-bitcoin figures?**  
   A. They were final figures established by an independent court audit.  
   B. They were preliminary estimates disclosed by Mt. Gox while it said its investigation was ongoing.  
   C. They referred only to bitcoins owned by the company.  
   D. They were a later creditor repayment total.  
   **Editorial key:** B. **Evidence:** M-09. **Skill:** claim attribution and uncertainty.

3. **What is the most defensible way to describe the suspected technical mechanism?**  
   A. A court conclusively proved one bug caused every missing bitcoin.  
   B. Mt. Gox's application and public announcement attributed suspected illicit transfers to possible exploitation of a bug, while the investigation remained incomplete.  
   C. Bitcoin's protocol was permanently disabled.  
   D. The trustee confirmed no bitcoin had disappeared.  
   **Editorial key:** B. **Evidence:** M-01, M-09. **Skill:** technical claim precision.

4. **Which signal was publicly observable before the final shutdown?**  
   A. The trustee's 2026 repayment extension.  
   B. The February 7, 2014 announcement pausing bitcoin withdrawals.  
   C. The June 2018 civil rehabilitation order.  
   D. The July 2014 trustee report.  
   **Editorial key:** B. **Evidence:** M-07. **Skill:** observability and chronology.

5. **Why should cash-withdrawal delays be treated as a warning sign rather than conclusive proof of insolvency?**  
   A. A withdrawal delay always proves theft.  
   B. Delays can signal operational or liquidity stress, but do not alone establish the cause or full financial condition.  
   C. Delays are irrelevant to custodial services.  
   D. All exchanges have identical withdrawal procedures.  
   **Editorial key:** B. **Evidence:** M-10. **Skill:** inference boundaries.

6. **What is the current official repayment deadline stated by the trustee website at the research cutoff?**  
   A. October 31, 2024.  
   B. October 31, 2025.  
   C. October 31, 2026.  
   D. October 31, 2027.  
   **Editorial key:** D. **Evidence:** M-05. **Skill:** current-status verification.

## 9. Source register

| ID | Source | Publisher | Date | Type | Use |
|---|---|---|---|---|---|
| M-01 | Report under Article 157 of the Bankruptcy Act | Mt. Gox Bankruptcy Trustee, filed with Tokyo District Court | 2014-07-23 | primary / trustee report | Identity, insolvency application, attributed explanations |
| M-02 | Announcement of the Order for Provisional Administration | Mt. Gox Provisional Administrator | 2014-04-16 | primary / official announcement | Provisional administration |
| M-03 | Announcement of Commencement of Bankruptcy Proceedings | Mt. Gox Bankruptcy Trustee | 2014-04-24 | primary / official announcement | Bankruptcy order |
| M-04 | Announcement of Commencement of Civil Rehabilitation Proceedings | Mt. Gox Civil Rehabilitation Trustee | 2018-06-22 | primary / official announcement | Civil rehabilitation and stay of bankruptcy |
| M-05 | Mt. Gox official website, repayment notices | Rehabilitation Trustee / mtgox.com | 2026-10-16 | primary / official source | Current repayment deadline and anti-impersonation warning |
| M-07 | Mt. Gox withdrawal pause announcement, reproduced contemporaneously | Mt. Gox / CoinDesk | 2014-02-07 | primary statement reproduced by contemporaneous reporting | Withdrawal suspension wording |
| M-08 | Reuters reports on withdrawal halt and shutdown | Reuters | 2014-02-10 and 2014-02-25 | contemporaneous secondary | Public chronology |
| M-09 | Mt. Gox announcement concerning civil rehabilitation application | Mt. Gox Co., Ltd. | 2014-02-28 | primary / company statement | Preliminary missing-BTC and cash discrepancy disclosures |
| M-10 | U.S. court records concerning Mt. Gox customer withdrawal delays | U.S. District Court records (GovInfo-hosted) | 2019 | court record | Retrospective description of reported customer difficulties; read procedural context carefully |

### Direct source URLs
- M-01: https://www.mtgox.com/img/pdf/20140723_report_en.pdf
- M-02: https://www.mtgox.com/img/pdf/20140416_002_announce_en.pdf
- M-03: https://www.mtgox.com/img/pdf/20140424_announce_qa_en.pdf
- M-04: https://www.mtgox.com/img/pdf/20180622_announcement_en.pdf
- M-05: https://www.mtgox.com/
- M-07: https://www.coindesk.com/markets/2014/02/07/mt-gox-halts-all-bitcoin-withdrawals-price-drop-follows
- M-08: https://www.cbsnews.com/news/bitcoin-plunges-after-marketplace-indefinitely-halts-withdrawals/ ; https://finance.yahoo.com/news/bitcoin-exchange-mt-goxs-website-053727859.html
- M-09: https://www.mtgox.com/img/pdf/20140228-announcement_eng.pdf
- M-10: https://www.govinfo.gov/content/pkg/USCOURTS-paed-2_18-cv-00306/pdf/USCOURTS-paed-2_18-cv-00306-2.pdf

**Editorial limitations:** M-10 is a court record in civil litigation and should not be treated as a criminal conviction or universal finding about every customer. Confirm the precise procedural status and paragraph references before publication. The missing-bitcoin figures remain attributed to Mt. Gox's February 28 announcement, not presented as independently audited final amounts.
