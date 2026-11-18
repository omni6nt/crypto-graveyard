# Case Data JSON Schema

This document is the reference for all case JSON files in `data/cases/`. Every field listed here must be present in every case file. No field may be omitted, and no field may be added without updating this document and the data-loader validation.

For evidence standards, source requirements, and the research acceptance gate that every case must pass before publication, see `CASE_RESEARCH_STANDARD.md`.

---

## Top-level fields

### `id`
- **Type:** string
- **Required:** yes
- **Purpose:** Stable, unique identifier for this case. Used as the filename (`<id>.json`) and as the key for localStorage progress entries.
- **Constraints:** Lowercase, hyphen-separated. Must match the filename exactly (e.g., the file `ftx.json` must contain `"id": "ftx"`). Never changed after first publication — changing an ID breaks progress records.

---

### `name`
- **Type:** string
- **Required:** yes
- **Purpose:** Human-readable display name shown in the directory, case cards, and page headings.
- **Constraints:** Use the officially recognised name of the project. The eight locked values are: `"FTX"`, `"Mt. Gox"`, `"Terra / LUNA"`, `"BitConnect"`, `"OneCoin"`, `"Three Arrows Capital"`, `"Celsius Network"`, `"Thodex"`. Do not alter these without project-owner approval.

---

### `shortDescription`
- **Type:** string
- **Required:** yes
- **Purpose:** One-sentence evidence-grounded summary shown in the case directory listing.
- **Constraints:** Must be supported by at least one source in `sources[]`. Must not make a stronger claim than the evidence supports. Do not label a project fraudulent without a court finding or equivalent primary record. Maximum recommended length: 160 characters.

---

### `classification`
- **Type:** string
- **Required:** yes
- **Purpose:** Evidence-grounded category label (e.g., "Exchange collapse", "Ponzi scheme — court-established", "Algorithmic stablecoin failure"). Used in the directory and on tombstones.
- **Constraints:** Must reflect what the primary record establishes, not suspicion or community consensus. A collapse, bankruptcy, security incident, allegation, and criminal conviction are not interchangeable. Do not use a classification stronger than the evidence supports.

---

### `researchCutoff`
- **Type:** string (ISO 8601 date, e.g., `"2026-10-01"`)
- **Required:** yes
- **Purpose:** Records the date through which sources were reviewed. Displayed on the methodology page. Reminds researchers and readers that legal proceedings, distributions, and status may have changed after this date.
- **Constraints:** Must be a real date, not a placeholder, before the case is published. Recheck legal and current-status information before the deployment release and update this date if research is refreshed.

---

## Object fields

Each object field has a `description` string and a `sourceIds` array. The `description` carries the narrative for that section. `sourceIds` lists the IDs of every source in `sources[]` that supports statements made in that description.

---

### `identity`
- **Type:** object `{ description: string, sourceIds: string[] }`
- **Required:** yes
- **Purpose:** Describes what the project was — its stated purpose, operating model, relevant dates and jurisdictions, relevant founders or executives (where properly sourced), and what it offered to users, customers, or counterparties.
- **Constraints:** `description` must be supported by sources in `sourceIds`. Do not name individuals without a credible source. Do not assert the stated purpose was false here — that belongs in `incident` or `causeAnalysis` with appropriate `claimType`.

---

### `background`
- **Type:** object `{ description: string, sourceIds: string[] }`
- **Required:** yes
- **Purpose:** Provides context on how the project operated, what it promised, how it grew, and what its relationship with users looked like before the incident.
- **Constraints:** `description` must be sourced. Distinguish documented facts from promotional claims made by the project itself (`official_statement`).

---

### `incident`
- **Type:** object `{ description: string, claimType: string, sourceIds: string[] }`
- **Required:** yes
- **Purpose:** Describes what happened — the triggering event and the sequence of material developments. This is the core narrative of the case.
- **Constraints:** `claimType` must be one of the seven approved values (see **Claim types** below). Choose the label that most accurately reflects the strongest claim made in `description`. If the description contains claims of different strengths, split the section or use the weakest applicable label and qualify the stronger claims inline (e.g., "according to the indictment…"). `sourceIds` must cover every material factual claim in `description`.

---

### `causeAnalysis`
- **Type:** object `{ description: string, sourceIds: string[] }`
- **Required:** yes
- **Purpose:** Analyses the immediate trigger, underlying vulnerabilities, and contributing factors. May cover governance, operational, technical, economic, and legal dimensions as the evidence supports.
- **Constraints:** Distinguish causal evidence from later interpretation. Label interpretive content as `analysis` inline where needed. Do not assert causation beyond what the sources establish. Avoid hindsight framing — if a factor was not observable at the time, say so.

---

### `aftermath`
- **Type:** object `{ description: string, sourceIds: string[] }`
- **Required:** yes
- **Purpose:** Records customer impact, financial impact (with definitions and dates), legal proceedings and their current procedural status, and any bankruptcy, liquidation, restructuring, recovery, or ongoing operations.
- **Constraints:** Do not imply unresolved proceedings are concluded. Define and date all financial figures. Check and date recovery or distribution status before publication. For ongoing proceedings, note the status as of `researchCutoff`.

---

## Array fields

### `timeline`
- **Type:** array of timeline-entry objects
- **Required:** yes (may be empty only while in placeholder state; must be populated before publication)
- **Purpose:** Chronological record of material events. The primary evidence trail for the case.
- **Each entry must include:**
  - `date` — string, ISO 8601 (e.g., `"2022-11-08"`) or best-available precision (e.g., `"2022-11"`)
  - `event` — string, brief description of what happened
  - `claimType` — one of the seven approved values
  - `sourceIds` — string array; at least one source ID per entry
- **Constraints:** Entries must be in chronological order (earliest first). Every entry must have at least one source ID. Do not include events that cannot be sourced. Mark disputed or uncertain dates explicitly in the `event` text.

---

### `warningSigns`
- **Type:** array of warning-sign objects
- **Required:** yes (may be empty only while placeholder; must be populated before publication)
- **Purpose:** Documents signals that were observable before or during the incident. Used in the examination system.
- **Each entry must include:**
  - `title` — string, short label
  - `description` — string, what the signal was
  - `evidenceAvailable` — string, what a user or builder could have seen at the time
  - `visibility` — one of `"pre_incident"`, `"during_incident"`, `"hindsight"`
  - `claimType` — one of the seven approved values
  - `sourceIds` — string array
- **Constraints:** Do not label a warning sign `"pre_incident"` if the evidence was not reasonably available at the time. If the signal is only clear with hindsight, use `"hindsight"`. Every warning sign must be traceable to a source.

---

### `lessons`
- **Type:** array of lesson objects
- **Required:** yes (may be empty only while placeholder; must be populated before publication)
- **Purpose:** Practical takeaways for users and for builders/operators. The educational payoff of the case.
- **Each entry must include:**
  - `audience` — one of `"users"` or `"builders"`
  - `lesson` — string
  - `sourceIds` — string array (the evidence that supports the lesson)
- **Constraints:** Lessons must be grounded in the case evidence. Do not generalise beyond what the case supports. State limitations. Do not present a lesson as universally applicable if it depends on specific circumstances of this case.

---

### `sources`
- **Type:** array of source objects
- **Required:** yes (may be empty only while placeholder; must be populated before publication)
- **Purpose:** The source register for the entire case. Every source ID referenced elsewhere in the case file must have a corresponding entry here.
- **Each entry must include:**
  - `id` — string, unique within this case file (e.g., `"ftx-src-001"`)
  - `title` — string
  - `publisher` — string (issuing body, publication, court, regulator, etc.)
  - `author` — string or `null` if not applicable
  - `date` — string, publication or filing date (ISO 8601 where possible)
  - `url` — string, direct link to the source
  - `sourceType` — one of `"primary"`, `"secondary"`, `"community"`
  - `claimsSupported` — string array, brief list of the claims this source supports
  - `accessDate` — string, ISO 8601 date when the URL was last verified
  - `reliabilityNotes` — string or `null`
- **Constraints:** Every source ID used in `sourceIds[]` anywhere in the case file must exist here. A source may not be used to support a claim it does not actually support. Broken links must be flagged. Sources are classified into tiers per `CASE_RESEARCH_STANDARD.md`: Tier 1 (primary), Tier 2 (high-quality secondary), Tier 3 (community). Serious legal or financial claims require Tier 1 or strong Tier 2 support.

---

### `intuitionReferences`
- **Type:** array of Intuition-reference objects
- **Required:** yes (may be empty; an empty array is valid and expected for most cases)
- **Purpose:** Optional supplementary community references from Intuition. These are Tier 3 sources only. They may show that a claim or discussion exists in the community but are not proof of anything.
- **Each entry (if any) must include:**
  - `url` — string, exact public URL or stable ID
  - `claimSummary` — string, what the reference claims
  - `creatorDetails` — string or `null`, attester/creator details if public and relevant
  - `timestamp` — string or `null`, date/time if available
  - `objectType` — string, type of Intuition object
  - `relevance` — string, why this reference is included
  - `claimType` — must be `"community_reference"` for every entry without exception
- **Constraints:** Never describe Intuition content as verified fact. Never invent vote counts or attestation numbers. Do not include inaccessible references. `claimType` must be `"community_reference"` on every entry — no stronger label is ever permitted here.

---

### `examination`
- **Type:** array of examination-item objects
- **Required:** yes (may be empty only while placeholder; must have 6–8 items before publication)
- **Purpose:** The interactive warning-sign examination. Visitors identify which signals apply and receive explanations.
- **Each entry must include:**
  - `id` — string, unique within this case (e.g., `"ftx-exam-001"`)
  - `prompt` — string, the question posed to the visitor
  - `options` — string array, the answer choices
  - `defensibleAnswers` — string array, indices or values of the correct answer(s)
  - `explanation` — string, why the answer is correct, what the evidence shows, and what a careful user or builder could have done
  - `visibility` — one of `"pre_incident"`, `"during_incident"`, `"hindsight"`
  - `difficulty` — one of `"low"`, `"medium"`, `"high"`
  - `learningObjective` — string
  - `sourceIds` — string array
- **Constraints:** Every case must have 6–8 items before publication. Items must span relevant risk categories (governance and control, custody and counterparty risk, liquidity and leverage, technical and security risk, incentive and economic design, transparency and disclosure). Answers must be defensible and explained. Never ask a visitor to infer guilt from suspicious behaviour alone. See `CASE_RESEARCH_STANDARD.md` §9 for full examination design rules.

---

## Claim types

Every field that carries a `claimType` must use exactly one of these seven values. Apply the label that most accurately describes the nature of the claim — never apply a stronger label than the evidence supports.

| Value | When to use |
|---|---|
| `documented_fact` | Supported by reliable records or multiple credible sources. The claim is well-established and not seriously disputed. |
| `court_finding` | A finding or conclusion by an identified court. Must name the court and state the procedural context (indictment, conviction, civil judgment, etc.). Do not use for charges alone — charges are `allegation`. |
| `official_statement` | A statement made by a company, regulator, law-enforcement body, administrator, or other authority. Not automatically independently verified — the source is the statement itself. |
| `reported_claim` | Reported by a credible publication but not independently established in project materials. The publication's credibility and sourcing should be noted. |
| `allegation` | An accusation or charge not yet established as a finding. Identify the source of the allegation and its current status. Do not present allegations as conclusions. |
| `analysis` | A reasoned interpretation of cited evidence. Not a source quotation. The reasoning must be traceable to the cited sources but represents the researcher's interpretation. |
| `community_reference` | A claim, attestation, or discussion from community sources, including Intuition. Not proof of anything on its own. Must never be used to support serious legal or financial claims without independent Tier 1 or Tier 2 corroboration. |

---

## Placeholder convention

While a field has not yet been researched, it must be set to the following values:

| Field type | Placeholder value |
|---|---|
| String | `"[PLACEHOLDER — research required]"` |
| `claimType` specifically | `"[PLACEHOLDER]"` |
| Array | `[]` |
| Object | The object must be present with its sub-fields set to string/array placeholders as above |

**Placeholder values must never be published.** Before a case is published, every placeholder must be replaced with real, sourced content. Run the automated schema validation tests (see `MVP_REQUIREMENTS.md`) before marking a case as ready.

### Transitioning a field from placeholder to real content

1. Research the field thoroughly following the standards in `CASE_RESEARCH_STANDARD.md`.
2. Add all relevant sources to the `sources[]` array first, assigning each a unique `id`.
3. Write the field content and assign the correct `claimType`.
4. Populate `sourceIds[]` with the IDs of every source that supports the content.
5. Run the automated validation tests.
6. Have the entry reviewed against the editorial checklist in `CASE_RESEARCH_STANDARD.md` §10 before merging.

---

## Research gate

A case may not be published until it passes every criterion in the minimum research acceptance gate defined in `CASE_RESEARCH_STANDARD.md` §6. Key requirements include:

- At least two independent credible sources (this is a floor, not a target).
- Primary-source support for central legal and technical claims wherever available.
- A sourced, chronological `timeline[]`.
- Accurate `classification`.
- Current `aftermath` and legal status as of `researchCutoff`.
- 6–8 defensible `examination[]` items.
- Source IDs on all factual statements, events, explanations, and material lessons.
- Final review for misleading language, unsupported numbers, and hindsight bias.

If a case cannot pass this gate by content freeze, omit or delay it rather than lowering the standard.
