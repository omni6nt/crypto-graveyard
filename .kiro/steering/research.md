---
inclusion: always
---

# Research Standards — Evidence, Sources, Claims, Citations, and Integrity

## Non-Negotiable Principles

These apply to every word of case content, timelines, examination items, and lesson text:

- Evidence before atmosphere.
- A failed project is not automatically fraudulent.
- Allegations are not findings; charges are not convictions.
- Bankruptcy is not, by itself, proof of fraud.
- A security incident does not mean the entire network permanently died.
- Community sentiment is not proof.
- Do not use hindsight to call a warning obvious if the evidence was not reasonably available at the time.
- State uncertainty and disagreement explicitly.
- Every factual claim must be traceable to a source.

The Coroner may be theatrical. Factual panels, timelines, claim labels, and examination feedback must be precise.

## Claim Labels

Every factual statement in case content must carry one of these labels:

| Label | When to use |
|---|---|
| `documented_fact` | Supported by reliable records or multiple credible sources |
| `court_finding` | Finding or conclusion by an identified court; state the court and procedural context |
| `official_statement` | Statement by a company, regulator, law-enforcement body, administrator, or authority; not automatically independently verified |
| `reported_claim` | Reported by a credible publication but not independently established in project materials |
| `allegation` | Accusation not established as a finding; identify source and status |
| `analysis` | Reasoned interpretation of cited evidence, not a source quotation |
| `community_reference` | Community-created claim, attestation, or discussion, including Intuition; not proof |

Do not apply a stronger label than the evidence supports. Do not label something `documented_fact` or `court_finding` without the corresponding primary source.

## Source Hierarchy

**Tier 1 — Primary (strongest)**
Court judgments, indictments, and filings; bankruptcy and trustee reports; regulator and law-enforcement releases; official company statements and incident reports; protocol governance records; technical postmortems; reproducible on-chain analyses.

**Tier 2 — High-quality secondary**
Established news organizations with editorial standards; specialist investigative publications with transparent sourcing; credible security and forensic reports; academic papers; recognized research institutions.

**Tier 3 — Context and community (weakest)**
Intuition claims and attestations; community discussions; social posts; personal blogs and commentary. Useful for leads, community perception, and additional references. Not sufficient alone to establish serious allegations or legal conclusions.

Two sources are a minimum baseline, not permission to use weak sources. Serious allegations require stronger direct evidence from Tier 1 or credible Tier 2 sources.

## Intuition Handling

Intuition is an **additional reference source only** — not a product feature, not a primary evidence source, and not a live integration.

When including an Intuition reference:
- Record the exact public URL or stable ID.
- Record what it claims.
- Record creator/attester details if public and relevant.
- Record date/timestamp if available.
- Record object type and relevance.
- Apply the `community_reference` label visibly.

Do not:
- Describe Intuition content as verified fact solely because it exists on Intuition.
- Invent vote counts or attestation numbers.
- Add voting, attestation, or reputation features.
- Claim live integration when only linking externally.
- Include a reference that is inaccessible.

## Case Dossier Structure

One dossier for each of the eight locked cases. Each contains these sections:

**Identity and context:** what it was; stated purpose and operating model; relevant dates and jurisdictions; relevant founders/executives where properly sourced; what was offered to users, customers, or counterparties.

**Event reconstruction:** dated timeline; triggering incident; sequence of material decisions and developments; known, disputed, and unknown points.

**Causal analysis:** immediate trigger; underlying vulnerabilities and contributing factors; governance, operational, technical, economic, and legal dimensions as relevant; distinction between causal evidence and later interpretation.

**Warning signs:** for each — description; evidence available at the time; when it became visible; who could reasonably observe it; why it mattered; whether it is hindsight; source IDs.

**Consequences and current status:** customer impact; financial impact with definitions and dates; legal proceedings and current procedural status; bankruptcy, liquidation, restructuring, recovery, or ongoing operations. Do not imply unresolved cases are concluded.

**Lessons:** practical lessons for users and for builders/operators; limitations and what cannot be generalized.

**Source register:** for each source — source ID, title, publisher/issuing body, author, publication/filing date, URL, source type, claims supported, access/review date, and reliability notes.

## Minimum Research Acceptance Gate

A case may not be published without:
- At least two independent credible sources (this is a floor, not a target).
- Primary-source support for central legal and technical claims wherever available.
- A sourced, chronological timeline.
- Accurate classification.
- Aftermath and current-status check.
- 6–8 defensible examination items.
- Source IDs for all factual statements, events, explanations, and material lessons.
- Final review for misleading language, unsupported numbers, and hindsight bias.

If a case cannot pass this gate by content freeze, omit or delay it rather than lowering the standard.

## Case-Specific Cautions

**FTX:** Separate court-established facts, allegations, reporting, exchange and affiliated entities, executives, and proceedings. Define and date financial figures. Recheck bankruptcy and legal status.

**Mt. Gox:** Distinguish the collapse, theft/loss events, insolvency, and creditor repayment. Do not imply all losses had the same cause or recovery status. Date any distributions.

**Terra / LUNA:** Distinguish UST, LUNA, the wider ecosystem, and later entities. Explain the mechanism accurately. Separate market events, design issues, and legal findings. Date proceedings and settlements.

**BitConnect:** Distinguish promotional claims, regulatory actions, criminal proceedings, and court outcomes. Do not assign identical legal status to all promoters and participants.

**OneCoin:** Distinguish the organization and its promotional claims from an independently functioning blockchain. Use primary legal records. Do not treat every associated person as equally culpable.

**Three Arrows Capital:** Distinguish market losses, leverage, counterparty exposure, insolvency, and legal findings. Verify liability and recovery claims.

**Celsius Network:** Distinguish products, customer liabilities, liquidity events, bankruptcy, and legal findings. Date recovery and distribution status.

**Thodex:** Distinguish the shutdown, founder departure/extradition, customer losses, charges, trial outcomes, appeals, and later proceedings. Do not present an earlier judgment as final current status without checking for later appellate developments. Verify Turkish legal records and reliable reporting. Check names and transliteration.

## Examination Design Rules

Each case requires 6–8 examination items. Items must span relevant risk categories, which may include: governance and control, custody and counterparty risk, liquidity and leverage, technical and security risk, incentive and economic design, transparency and disclosure.

For each item record: prompt; answer options; defensible answer(s); explanation; source IDs; visibility (`pre_incident`, `during_incident`, or `hindsight`); difficulty; and learning objective.

Never ask visitors to infer guilt from suspicious behavior alone. Feedback must explain whether the item was observable before the incident or only clear afterward, and what a careful user or builder could reasonably have done.

## Writing Rules

- Plain English. Explain technical terms.
- Avoid sensational factual headlines.
- Use dates. Attribute claims. Write "according to" when appropriate.
- Avoid causal certainty beyond the evidence.
- Define and date all financial figures and percentages.
- Never imply endorsement by a project, protocol, court, or publisher.

## Editorial Checklist

Before publishing a case, confirm every item:

- [ ] Accurate classification.
- [ ] Central narrative supported by reliable sources.
- [ ] All material factual claims have source IDs.
- [ ] Allegations, official statements, court findings, and analysis are correctly labelled.
- [ ] Chronological sourced timeline.
- [ ] Financial figures defined and dated.
- [ ] Legal status current as of the research cutoff date.
- [ ] Warning signs were observable at the time claimed.
- [ ] Examination answers are defensible and explained.
- [ ] Intuition references are supplementary and labelled `community_reference`.
- [ ] No accusation goes beyond what the record supports.
- [ ] Reviewed for misleading omissions and hindsight bias.

## Research Cutoff

Each case file must record a `researchCutoff` date. The methodology page must display this date and explain its limitations. Recheck legal and current-status information before the deployment release.
