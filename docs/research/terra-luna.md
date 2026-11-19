# Terra / LUNA — research dossier

**Research cutoff:** 2026-11-19  
**Status:** Structured candidate; not yet approved for public release.

## Classification
Algorithmic stablecoin and crypto-ecosystem collapse; civil fraud liability and criminal conviction established

## Core reconstruction
UST de-pegged from the dollar in May 2022. The SEC's trial summary states that UST and Terraform's other tokens then fell close to zero, wiping out more than $40 billion in combined market value nearly overnight. The SEC's amended complaint describes the algorithm failing to maintain the peg after large UST sales beginning around May 7, 2022. LFG's own audit reports substantial UST purchases and transfers of bitcoin to trading firms during May 8–12 in an attempt to defend the peg. On April 5, 2024, a jury found Terraform and Do Kwon liable for securities fraud; on June 12, 2024, a final consent judgment followed. In December 2025, Do Kwon was sentenced to 15 years in the separate U.S. criminal case.

## Causal analysis
Analysis: the collapse exposed a reflexive design dependency. As confidence in UST weakened, the redemption mechanism placed pressure on LUNA; falling LUNA value in turn undermined confidence in the mechanism backing UST. The SEC's complaint and government financial-stability report describe the run dynamics and vulnerabilities of algorithmic stablecoins. High advertised Anchor yields amplified the ecosystem's dependence on continued demand and confidence. LFG's own report documents extraordinary attempts to defend the peg, but should not be treated as an independent audit of the complete defense operation. The legal fraud findings concern specific misrepresentations and should not be simplified into a court finding that every aspect of the algorithm was fraudulent.

## Current status and limits
Terraform entered Chapter 11 in January 2024 and a liquidating plan was approved in September 2024. In the SEC civil case, a jury found Terraform and Do Kwon liable for securities fraud in April 2024; a final consent judgment followed in June 2024. The SEC states that the judgment includes $4.47 billion in disgorgement, prejudgment interest and civil penalties, with payments credited through the bankruptcy process and investor/creditor priority. Do Kwon was sentenced to 15 years in the U.S. criminal case on December 11, 2025. The liquidation and claims process remained active according to SEC information last reviewed September 18, 2025; this research does not assert that all harmed investors have been paid.

## Warning-sign discipline
Warning signs distinguish what was reasonably observable before the incident, what became visible during it, and what only became clear through later proceedings. Do not relabel hindsight evidence as a pre-incident warning.

## Source register
- **terra-luna-src-001 — SEC v. Terraform Labs PTE Ltd. and Do Hyeong Kwon — amended complaint** (U.S. Securities and Exchange Commission, 2023-04-03; primary). https://www.sec.gov/files/terraform-labs-pte-ltd-amended-complaint.pdf
  - Supports: UST/LUNA mechanism and marketing claims as alleged by SEC; Anchor advertised yields up to 20%; May 2021 depeg and alleged third-party intervention; May 2022 UST depeg and collapse sequence
  - Reliability: SEC complaint: allegations in the complaint must be distinguished from later jury findings.
- **terra-luna-src-002 — Terraform and Kwon to Pay $4.5 Billion Following Fraud Verdict** (U.S. Securities and Exchange Commission, 2024-06-13; primary). https://www.sec.gov/newsroom/press-releases/2024-73
  - Supports: April 5 2024 jury liability verdict; May 2022 depeg and near-total price collapse; More than $40bn market value wiped out as described by SEC; June 2024 settlement and wind-down
  - Reliability: No special caveat recorded.
- **terra-luna-src-003 — United States v. Kwon — sentencing update** (U.S. Attorney's Office, Southern District of New York, 2025-12-12; primary). https://www.justice.gov/usao-sdny/united-states-v-kwon-23-cr-151-pae-terraform-labs-fraud
  - Supports: Do Kwon sentenced to 15 years on December 11 2025; Forfeiture exceeding $19m; Criminal case status
  - Reliability: No special caveat recorded.
- **terra-luna-src-004 — SEC v. Terraform Labs — investor distribution and bankruptcy information** (U.S. Securities and Exchange Commission, 2025-09-18; primary). https://www.sec.gov/enforcement-litigation/distributions-harmed-investors/sec-v-terraform-labs-pte-ltd-do-hyeong-kwon-no-23-cv-1346-jsr-sdny
  - Supports: June 12 2024 final consent judgment; Terraform Chapter 11 liquidation plan approved September 20 2024; Liquidating trust and claims process; Court-ordered amounts and investor/creditor priority
  - Reliability: No special caveat recorded.
- **terra-luna-src-005 — Report on Digital Asset Financial Stability Risks and Regulation 2022** (U.S. Financial Stability Oversight Council, 2022-10-03; primary). https://home.treasury.gov/system/files/FSOC-Digital-Assets-Report-2022.pdf
  - Supports: Algorithmic stablecoin fragility and run risk; UST depeg contagion and market stress context
  - Reliability: U.S. government interagency report; system-level analysis, not a forensic audit of every Terra transaction.
- **terra-luna-src-006 — Luna Foundation Guard Audit — UST peg defense transactions** (Luna Foundation Guard, 2022-11-14; primary). https://lfg.org/audit/LFG-Audit-2022-11-14.pdf
  - Supports: LFG and Terraform reported asset deployments between May 8 and May 12 2022 to defend UST peg; Reported transfers and purchases through trading firms
  - Reliability: Commissioned/issued by the foundation itself; useful as an official self-report, not an independent audit of all underlying counterparties.

## Editorial gaps before publication
- Recheck liquidation trust claims and investor distribution progress before content freeze.
- Obtain underlying final judgment and Do Kwon criminal judgment.
- Add independent technical reconstruction of the UST/LUNA mechanism.
