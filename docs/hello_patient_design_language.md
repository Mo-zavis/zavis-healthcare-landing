# Hello Patient — Design Language Deconstruction (for Claude agent)
Reference (must open + inspect): https://www.hellopatient.com/

> Non‑negotiable: You MUST open the site in a real browser and inspect computed styles (DevTools). This file gives you (a) the full section patterns + interaction logic visible from content, and (b) a strict extraction procedure so you can capture exact colors/spacing/type without guessing.

---

## 0) What this file is for
Create a **portable design system spec** distilled from Hello Patient that you can **re-implement** for ZAVIS pages (not copy layouts 1:1), covering:
- tokens (colors, spacing, radius, shadows)
- typography hierarchy + “texture” (case, weight, tracking, line-height)
- layout patterns + section transitions
- component library (hero, nav, metric tiles, testimonial, logo wall, feature rows)
- interaction + scroll behavior
- responsive rules
- accessibility + guardrails
- edge cases (missing proof, long copy, too many logos, slow devices)

If you can’t extract a value, you must mark it `TODO:inspect`—no invented tokens.

---

## 1) High-level aesthetic (what “Hello Patient” feels like)
**Primary feel:** clean, enterprise‑serious, minimal chrome, high readability, **performance‑first**.
**Texture cues (copy + UI):**
- strong H1 statement at top (“Run leaner. Grow faster. Deliver better care.”)
- short supporting line (“…handles the whole conversation across voice, text, and chat.”)
- frequent **lowercase micro-headings** / section labels (e.g., “hearing is believing”, “works with what you’ve got”) mixed with bold H2s
- proof-forward (metrics and case studies)
- large whitespace + low visual noise

Source content confirms these exact phrases/sections on the homepage:
- “Run leaner. Grow faster. Deliver better care.”
- “hearing is believing” and live call demo concept
- “Built for high-volume healthcare” with “Run Leaner / Grow Faster / Improve Care”
- “works with what you’ve got” integrations grid
- “Take these off your team’s plate” (front office / back office / grow your practice)
- “Why Hello Patient is different” with 4 bullets (“Scales like software, feels like staff”, etc.)
(Confirm by opening homepage.)

---

## 2) Typography system (Kylo-level breakdown)
You said ZAVIS will use **DebularDisplay**. That’s fine. Still replicate **Hello Patient’s hierarchy + texture** (sizes/weights/case/spacing).

### 2.1 Global typography rules to mimic
- Headings: tight, bold, minimal line breaks, high contrast
- Body: short lines, high legibility, moderate line-height
- Labels: smaller, sometimes lowercase, often used as “section eyebrow”
- Numbers/metrics: oversized, visually “anchored”

### 2.2 Extract EXACT values (DevTools checklist)
For each of these nodes, capture computed style values:
- `H1` on homepage
- `H2` on first major section after hero
- `H3` inside cards (e.g., “Relieve the pressure to do more with less”)
- body paragraph near hero
- eyebrow labels (“hearing is believing”, “works with what you’ve got”)
- button text (primary CTA)
- nav items

Record:
- font-family
- font-size (px)
- font-weight
- line-height (px or unitless)
- letter-spacing
- text-transform
- paragraph max-width (ch/px)

### 2.3 Target hierarchy mapping (implementation template)
> Replace the font-family with DebularDisplay for display styles + a neutral sans for body if needed (your choice). Keep the scale + texture.

```css
:root{
  --font-display: "DebularDisplay", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  --font-body: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;

  /* TODO:inspect exact values from Hello Patient */
  --h1-size: TODO;
  --h1-line: TODO;
  --h1-weight: TODO;
  --h1-track: TODO;

  --h2-size: TODO;
  --h2-line: TODO;
  --h2-weight: TODO;

  --body-size: TODO;
  --body-line: TODO;

  --eyebrow-size: TODO;
  --eyebrow-track: TODO;
  --eyebrow-case: TODO; /* lowercase? */
}
```

### 2.4 “Texture” guardrails
- Avoid decorative flourishes. No heavy gradients behind type.
- Prefer **short sentence blocks** over long paragraphs.
- Max line length: `~60–72ch` for body.
- Use eyebrow label before H2 when transitioning sections.

---

## 3) Color palette (NO guessing)
This must be extracted. Agent must not invent hex values.

### 3.1 Extraction procedure
1) In DevTools, inspect:
   - body background
   - primary heading color
   - body text color
   - muted text color
   - border color
   - primary CTA background + text
   - secondary CTA style (border/text)
   - link color
   - focus ring color
2) Capture computed values (hex/rgba).
3) Also inspect any CSS variables in `:root`.

### 3.2 Token schema (fill after inspection)
```css
:root{
  --bg: TODO:inspect;
  --surface: TODO:inspect; /* cards / subtle panels */
  --text: TODO:inspect;
  --muted: TODO:inspect;
  --border: TODO:inspect;

  --brand: TODO:inspect;  /* primary CTA */
  --brand-ink: TODO:inspect;

  --success: TODO:inspect;
  --warning: TODO:inspect;
  --danger: TODO:inspect;

  --focus: TODO:inspect;
}
```

### 3.3 Color guardrails
- Only 1 dominant accent for CTAs.
- “Muted” text must remain readable (AA).
- Use subtle borders instead of heavy shadows where possible.

---

## 4) Layout system (grid + spacing)
### 4.1 Global structure
- Sticky top nav with CTA (“Book a Call” appears prominently on homepage)
- Hero section with interactive demo (“Start Talking” / “Try It”)
- Alternating content blocks: proof → features → integrations → proof → CTA

### 4.2 Container + grid (extract)
Inspect and record:
- max-width of main container
- page padding left/right at desktop
- section vertical padding
- gap between cards (grid gap)

### 4.3 Spacing token schema
```css
:root{
  --container: TODO:inspect; /* e.g., 1120px/1200px */
  --pad-x: TODO:inspect;
  --section-y: TODO:inspect;
  --grid-gap: TODO:inspect;

  --radius-sm: TODO:inspect;
  --radius-md: TODO:inspect;
  --radius-lg: TODO:inspect;
}
```

### 4.4 Layout guardrails
- Each section must have a single “job” (one dominant message).
- Do not stack 3 complex components back-to-back without whitespace.
- Keep primary CTA visible at least in nav and in 2 more points down the page.

---

## 5) Component library (what to build)
### 5.1 Top announcement bar (optional)
Homepage includes an announcement line (“Announcing our $22.5M series A!”). Build as dismissible or static.

**Spec**
- height: TODO
- background: TODO
- link style: TODO

### 5.2 Navigation
- Left: Logo + primary nav (Solutions / The Product / Proof / Company etc.)
- Right: CTAs (“Try It”, “Book a Call”)

**Behavior**
- Sticky after scroll (TODO confirm).
- Mobile: hamburger + CTA pinned.

### 5.3 Hero + live demo module
Homepage centers on **interactive demo**:
- “Start Talking” button
- live transcript panel
- specialty selector (Vet, Derm, Ortho, ENT, Dentist, Urgent Care)
- secondary “Prefer to text? Mia does that, too.” with +1 Text Me

**Build requirement**
- Provide **degraded fallback** when JS fails:
  - show a recorded demo video or static transcript
  - show CTA “Book a Call”
- Never block page render on the demo module (load after first paint).

### 5.4 Proof / metrics triad
“Built for high-volume healthcare” with three pillars:
- Run Leaner
- Grow Faster
- Improve Care
Each has a metric + explanation.

**Pattern**
- 3 column (desktop) → stack (mobile)
- short H3 + big number + 1–2 lines

### 5.5 Testimonial block
Single large quote with role + org type (e.g., CEO, 96-location urgent care practice).

**Pattern**
- Quote text dominant
- Identity line smaller and muted

### 5.6 Integrations logo wall
“Seamlessly integrates with your EHR and CRM” with many logos.

**Rules**
- Normalize logo heights.
- Use grayscale or brand-safe coloring (confirm from site).
- On mobile: 2–3 columns; lazy-load images.

### 5.7 “Take these off your team’s plate” feature sections
3 sub-sections:
- Streamline your front office
- Simplify your back office
- Grow your practice

Each includes:
- short supporting line
- 2 bullet outcomes
- supporting media (image/video)

**Guardrail**
- Do not exceed 2 bullets per sub-section unless hidden under “See more”.

### 5.8 “Why different” feature grid (4 tiles)
Tiles visible on homepage:
- Scales like software, feels like staff
- Plays nice with your tools
- No IT team required
- Conversations, not phone trees

**Pattern**
- 2x2 grid desktop → stack mobile
- icon + short headline + 1 line

### 5.9 Final CTA
Repeat “Book a Call” with a short reassurance line.

### 5.10 Footer
Standard columns + social link (LinkedIn is present).

---

## 6) Motion + scroll behavior
You asked for “section switch to scroll” and “everything”. You must **verify** these visually; don’t assume.

### 6.1 Required motion primitives (implement regardless)
- Fade+slide up on section entry (subtle)
- Button hover: slight darken + shadow micro-lift
- Nav: sticky + background blur OR solid fill (inspect)
- Accordion/expand: ease-out

### 6.2 Motion guardrails
- No parallax unless site uses it (verify).
- Keep transitions under 200–280ms.
- Respect `prefers-reduced-motion`.

```css
@media (prefers-reduced-motion: reduce){
  *{animation:none!important; transition:none!important; scroll-behavior:auto!important;}
}
```

---

## 7) Interaction states (must be consistent)
Extract and document:
- hover, active, focus styles for:
  - primary button
  - secondary button
  - links
  - nav items
  - specialty selector tabs

**Accessibility requirement**
- visible focus ring; do not remove outlines without replacement.

---

## 8) Responsiveness & breakpoints
Confirm from CSS / DevTools; don’t guess. But implement standard:
- `<=640` mobile
- `641–1024` tablet
- `>=1025` desktop

Rules:
- Hero becomes stacked (demo below copy)
- Logo wall becomes 2–3 columns
- Metric triad stacks into cards

---

## 9) Content density rules (anti-chaos)
Hello Patient keeps things tight:
- Short headlines
- Few bullets
- Proof-first

Guardrails for ZAVIS pages using this style:
- Max 2 lines for subhead in hero.
- Max 2 bullets per card.
- Avoid walls of logos; paginate or collapse beyond first row.

---

## 10) Edge cases & guardrails (no random execution)
### 10.1 If proof is missing
- Replace numeric claims with:
  - qualitative benefit phrasing (“Reduce wait times”) OR
  - “Pilot results coming soon”
- Never invent metrics.

### 10.2 If a section needs more than 4 items
- Use:
  - “Show more” expansion OR
  - carousel only if site uses it (verify).
- Prefer 2 rows max before collapsing.

### 10.3 If images are not ready
- Use neutral placeholders with strict aspect ratios.
- Do not let layout shift (reserve space).

### 10.4 If JS fails / slow devices
- Demo module must degrade to static.
- Avoid heavy third-party scripts above the fold.

---

## 11) Implementation blueprint (how Claude should execute)
### 11.1 Build order
1) Extract tokens (colors/type/spacing/radius) via DevTools.
2) Build base layout primitives:
   - container, grid, section, buttons, cards
3) Implement nav + hero layout
4) Implement proof blocks + testimonial + logo wall
5) Implement feature sections (front/back/grow)
6) Implement “why different” grid
7) Add motion primitives + reduced motion
8) Run accessibility pass (focus, contrast, alt text)
9) Performance pass (lazy load, defer demo JS)

### 11.2 Deliverables required from agent
- `tokens.css` (variables only)
- `components.css` (buttons/cards/sections)
- `index.html` (homepage)
- `app.js` minimal (only for demo module + small interactions)
- `README.md` documenting extracted tokens + where they came from

---

## 12) Mandatory: token capture table (fill this after inspection)
Paste this back into the repo once inspected:

| Token | Value | Where captured |
|---|---|---|
| --bg | TODO | body background |
| --text | TODO | H1 computed |
| --muted | TODO | eyebrow label |
| --border | TODO | card border |
| --brand | TODO | primary button bg |
| --radius-md | TODO | card radius |
| --section-y | TODO | section padding |
| --container | TODO | max-width |
| H1 size/weight/track | TODO | hero H1 |
| H2 size/weight | TODO | “Built for high-volume…” |
| Button height/padding | TODO | primary CTA |

---

## 13) Reminder
Reference link again (must open and inspect): https://www.hellopatient.com/
