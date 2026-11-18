---
inclusion: always
---

# Visual Identity, Atmosphere, Coroner Design, and Accessibility

## Aesthetic Direction

Painterly, cinematic gothic Victorian horror with rich textures and expressive original character work.

The only broad quality reference is Arcane — for texture, lighting, and expressive character art. Do not imitate Arcane's characters, compositions, logos, or distinctive designs. Do not copy or reference any other franchise art.

Atmosphere must never compromise readability. Evidence panels, timelines, claim labels, and examination feedback are precise and legible at all times.

## Color Palette

| Role | Name | Hex |
|---|---|---|
| Background depth | Void black | `#100D16` |
| Secondary background | Deep charcoal | `#1B1722` |
| Environment tone | Cemetery purple | `#30213F` |
| Accent primary | Haunted violet | `#7047A3` |
| Accent secondary / fog | Moonlight lavender | `#B8A2D6` |
| Warning / danger | Blood red | `#8E252B` |
| Highlight / metalwork | Antique gold | `#B18A53` |
| Document / parchment | Aged parchment | `#D7C3A0` |
| Text light | Bone ivory | `#E7DDCF` |
| Neutral mid | Fog grey | `#8E8995` |

Do not add palette colors without project-owner approval.

## Typography

| Use | Typeface |
|---|---|
| Display headings | Cinzel |
| Narrative body text | Merriweather |
| Controls, dense evidence, UI labels | Highly legible sans-serif |

Atmospheric typefaces must never reduce legibility. Evidence text, source citations, claim labels, and examination items must be readable at comfortable sizes on all supported screen widths.

## Cemetery Environment

One main environment for MVP. Contains eight individually identifiable tombstones and a conventional list-based directory for small screens or visitors who prefer list navigation.

Each grave may display: project name, relevant incident date, evidence-grounded category, and progress status (Unexamined, In Progress, Examined).

Visual metaphors must not be mistaken for historical evidence. Status must not be conveyed by color alone.

## The Coroner — Character Design

The Coroner is the sole fully developed MVP character. All design work must stay within this specification.

**Physical description:** eccentric elderly Victorian medical examiner; messy white/grey hair; expressive wrinkled face; round spectacles; slightly sinister but welcoming grin; aged stained ivory coat; dark waistcoat; burgundy/magenta neckwear; dirty gloves; lantern; clipboard.

**Five required expressions:**
1. Neutral
2. Grin
3. Surprised
4. Thinking
5. Serious

**Animation:** subtle blinking, breathing, eye movement, small head movements, and restrained gestures. Keep animation restrained; it must not distract from evidence panels.

**Tone:** witty and curious. Respectful when discussing victims, losses, and misconduct. Humor targets hubris and fragile systems — never people harmed by them.

**Dialogue must:** be accessible without sound or animation; support reduced-motion alternatives; not obscure evidence panels; use accessible updates for screen readers without excessive announcements.

## Entrance Sequence Visual Requirements

1. Closed iron gate beneath a moon, with bats, fog, lanterns, crooked trees, and webs.
2. Gate opens slowly.
3. Quiet pause looking into the cemetery.
4. A hand suddenly shoots out of the ground — this is a distinct beat. Do not merge it into a generic entrance animation.
5. A second hand appears; the Coroner crawls out.
6. He stands, brushes off dirt, adjusts his spectacles, notices the visitor, and welcomes them.

Sound is optional. Provide a reduced-motion alternative for the full sequence. Avoid rapid flashing and startling audio spikes. No element of the entrance sequence may cause accessibility failures.

## Asset Production Standards (P1 — CG-ASSET-001)

Canonical files required: Coroner full body; five separate expression assets; cemetery background; gate closed and gate open; eight tombstone designs or reusable components; separate props and environment elements; UI icons and effects.

Each asset file must have:
- A descriptive filename.
- Clean transparency and clean crop edges.
- Corresponding entry in `assets/CREDITS.md` recording: source, tool used, date created, and license.

Prohibited: unauthorized logos; copied franchise art; unlicensed music; any asset whose origin or license is not recorded.

## Accessibility Requirements

These are non-negotiable product requirements, not optional polish:

- **Keyboard navigation:** all interactive elements reachable and operable by keyboard.
- **Visible focus indicators:** clearly visible on all interactive elements.
- **Contrast:** WCAG AA target — 4.5:1 for normal text, 3:1 for large text.
- **Touch targets:** minimum 44×44 CSS pixels.
- **Reduced motion:** a reduced-motion alternative must exist for the entrance sequence and all animations. Respect `prefers-reduced-motion`.
- **Sound optional:** the entire experience must be fully usable with sound off.
- **Color-independent status:** progress states and claim labels must never be communicated by color alone.
- **Meaningful alt text:** all images and visual assets that convey information must have accurate descriptive alt text.
- **Semantic HTML:** use correct element roles throughout.
- **No rapid flashing:** no content that could trigger photosensitive reactions.

## Responsive Design Requirements

- Core flows work at 360px, tablet, and desktop widths.
- No essential content is clipped at any supported width.
- A conventional directory alternative is available for narrow screens.
- Evidence text is readable without zooming.
- Touch targets meet the 44×44 pixel minimum on mobile.

## Writing and Readability

- Plain English throughout. Technical terms must be explained on first use.
- Avoid sensational factual headlines.
- Use dates. Attribute claims. Use "according to" when appropriate.
- Avoid causal certainty beyond the evidence.
- Define and date financial figures and percentages.
- Never imply endorsement by a project, protocol, court, or publisher.

This applies equally to Coroner dialogue and factual evidence panels. The Coroner may be theatrical; the facts must remain precise.
