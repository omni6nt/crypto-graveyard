# CRYPTO GRAVEYARD — MASTER BLUEPRINT

**Tagline:** Where Failed Projects Rest in Peace.  
**Supporting line:** Investigate. Learn. Remember.  
**Creative principle:** Halloween in every pixel. Credibility in every claim.

## 1. Product vision
Crypto Graveyard is a cinematic, Halloween-themed educational investigation experience about consequential failures, collapses, security incidents, and misconduct in cryptocurrency. Visitors enter a haunted Victorian cemetery, meet the Mad Victorian Coroner, choose a grave, investigate a documented case, examine evidence, identify warning signs, and learn practical lessons.

It is not merely a directory, voting platform, crypto dashboard, or Intuition front end. Its value is the combination of atmospheric storytelling, documented historical research, guided investigation, and practical learning.

## 2. Audience and outcomes
For crypto-curious visitors, builders, developers, users, and investors. After each case, visitors should understand what the project was, what happened and when, what evidence supports the account, which warning signs were visible at the time, what happened afterward, and what lessons can reasonably be drawn without hindsight bias.

## 3. Locked initial case collection
1. FTX
2. Mt. Gox
3. Terra / LUNA
4. BitConnect
5. OneCoin
6. Three Arrows Capital
7. Celsius Network
8. Thodex

These are selected subjects, not pre-judged conclusions. Each must pass the research acceptance gate in `CASE_RESEARCH_STANDARD.md`. If a case cannot meet the evidence standard by content freeze, delay or omit it rather than weakening the standard. A collapse, bankruptcy, security incident, allegation, and criminal conviction are not interchangeable categories.

## 4. Information architecture and visitor journey
1. **Entrance:** cinematic gate sequence and Coroner introduction.
2. **Cemetery:** one primary environment with eight graves and a case-directory alternative.
3. **Case file:** reusable investigation page.
4. **Evidence and references:** primary records, official statements, credible reporting, technical analysis, and relevant Intuition references.
5. **Medical examination:** identify documented warning signs and receive explanations.
6. **Journal:** local progress tracking.
7. **Final verdict:** Coroner outro.

Main navigation: The Cemetery, Case Archives, The Journal, About the Graveyard. Intuition references belong inside a case's evidence/sources area, not as a separate community feature or required top-level destination.

## 5. Entrance sequence
1. Closed iron gate beneath a moon, with bats, fog, lanterns, crooked trees, and webs.
2. Gate opens slowly.
3. Quiet pause looking into the cemetery.
4. A hand suddenly shoots out of the ground as a distinct jump-scare beat.
5. A second hand appears; the Coroner crawls out.
6. He stands, brushes off dirt, and adjusts his spectacles.
7. He notices the visitor and welcomes them.

The hand beat must not be merged into a generic entrance animation. The sequence is skippable at any point; returning visitors are not forced to replay it; sound is optional; provide a reduced-motion alternative; avoid rapid flashing and startling audio spikes.

## 6. Cemetery
One main environment for MVP, eight individually identifiable tombstones, and a conventional directory for small screens or visitors who prefer list navigation. Each grave may show project name, relevant incident date, evidence-grounded category, and status: Unexamined, In Progress, or Examined. Visual metaphors must not be mistaken for historical evidence.

## 7. Reusable case-file structure
Every case covers:
1. Identity and project purpose.
2. Background: what it offered, how it worked, and what it promised.
3. Incident: what happened, distinguishing facts, statements, allegations, and analysis.
4. Cause and contributing factors, including uncertainty.
5. Chronological timeline.
6. Warning signs, distinguishing pre-incident signals from hindsight.
7. Aftermath: customer impact, legal proceedings, insolvency, recovery, restructuring, and current status.
8. Lessons for builders, users, and investors.
9. Sources and references.

## 8. Medical examination
Each case has 6–8 items. Visitors identify which warning signs apply. Feedback explains whether each item is supported, why it mattered, what source supports it, whether it was observable before the incident or only clear afterward, and what a careful user or builder could reasonably have done. No humiliating pass/fail treatment; this is educational, not financial advice.

## 9. The Coroner
The sole fully developed MVP character: an eccentric elderly Victorian medical examiner with messy white/grey hair, expressive wrinkled face, round spectacles, slightly sinister but welcoming grin, aged stained ivory coat, dark waistcoat, burgundy/magenta neckwear, dirty gloves, lantern, and clipboard.

Five expressions: Neutral, Grin, Surprised, Thinking, Serious. Subtle blinking, breathing, eye movement, small head movements, and restrained gestures. Witty and curious, but respectful when discussing victims, losses, and misconduct. Humor targets hubris and fragile systems, not people harmed by them.

## 10. Intuition's role
Intuition is an **additional reference source only**. The site may link to relevant public Intuition claims, atoms, triples, or attestations where relevant and verifiable. Label these as community-sourced references; they may show that claims or community information exist on Intuition, but they are not proof.

No separate community layer, voting, support/opposition buttons, reputation scores, new attestations, wallet connection, transactions, or claims of live integration unless actually implemented and tested.

## 11. Nominations
Use a simple external form with project name, submitter email, reason for nomination, and supporting links. Visitor submits; owner receives it through the form provider; owner manually investigates and reviews; if accepted and later added, owner can notify the submitter by email. No custom backend, accounts, authentication, public voting, automatic publishing, or in-site email system. Review the form provider's privacy terms and state that nomination does not guarantee publication.

## 12. Journal and progress
Use browser localStorage; no account. States: Unexamined, In Progress, Examined. A case becomes Examined only after the visitor submits its warning-sign examination. Reopening or retaking must not erase completion. Handle corrupted/unavailable storage safely; version the schema; offer reset; explain that clearing browser data may erase progress.

## 13. Visual direction
Painterly, cinematic gothic Victorian horror with rich textures and expressive original character work. Arcane is only a broad quality reference for texture, lighting, and expressive art; do not imitate its characters, compositions, logos, or distinctive designs.

Palette: void black `#100D16`; deep charcoal `#1B1722`; cemetery purple `#30213F`; haunted violet `#7047A3`; moonlight lavender `#B8A2D6`; blood red `#8E252B`; antique gold `#B18A53`; aged parchment `#D7C3A0`; bone ivory `#E7DDCF`; fog grey `#8E8995`.

Typography: Cinzel for display; Merriweather for narrative; highly legible sans-serif for controls and dense evidence. Atmosphere must never compromise readability.

## 14. Accessibility and responsive behavior
Keyboard navigation, visible focus, semantic HTML, WCAG AA contrast target (4.5:1 normal text), 44×44 CSS-pixel touch target target, 360px mobile support, reduced-motion support, sound-off usability, meaningful alt text, and no color-only status meaning. Dialogue must be accessible without excessive announcements.

## 15. Technical boundary
Frontend-only static site: plain HTML, CSS, JavaScript ES modules; no framework/build step unless a documented reason justifies changing this. Case content in local JSON; localStorage for progress; external research links; external nomination form; static hosting (GitHub Pages initial target). No custom backend, accounts, authentication, database, wallet connection, token, payment, or on-chain feature.

## 16. Exclusions
No live Intuition integration/transactions; voting/reputation/attestations; user accounts; custom nomination backend or automated email; multiple fully built environments; additional playable characters; full 3D engine; complex detective board; audio-dependent storytelling; token rewards, XP farming, or leaderboards.

## 17. Completion definition
Entrance works and can be skipped; cemetery and directory expose published cases; each case passes research standards; case pages contain sourced history, incident, timeline, warning signs, aftermath, lessons, and references; each has 6–8 examination items; progress is resilient; Intuition links are accurate and supplementary; nomination form works externally; Coroner outro works; site is responsive, accessible, sound-optional; public repository has license and root `.kiro` files.
