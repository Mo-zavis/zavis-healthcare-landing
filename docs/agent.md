# agent.md — Master Execution Plan for Claude Code (ZAVIS Homepage)
> This is the single source of truth for how to build the ZAVIS homepage end-to-end.
> Outputs must be production-ready, responsive, accessible, and visually aligned to the specified design system.
>
> Inputs in repo:
> - `zavis_homepage_wireframe_annotated.png` (layout truth)
> - `hello_patient_design_language.md` (design language spec + extraction checklist)
> - `zavis_website_content_control.md` (copy/positioning truth)
>
> Do NOT reference any inspiration brand names in final website copy.

---

## 0) Non-negotiables
1. **Follow layout from the wireframe image first.** If a design-language pattern conflicts with the wireframe, the wireframe wins.
2. **Follow design tokens, hierarchy, and interaction rules from `hello_patient_design_language.md`.** If a token is marked `TODO:inspect`, you must *inspect and fill it* (DevTools) before finalizing styles.
3. **All copy must come from `zavis_website_content_control.md`.** No placeholder, no fabricated metrics, no invented customer claims.
4. **Font:** Use `DebularDisplay` for display styles per repo-provided font setup. Do not change the font choice.
5. **No layout breakage:** no section overlap, no clipped text, no unexpected horizontal scroll.
6. **Performance + accessibility:** pass basic Lighthouse checks (no blocking scripts above fold, good contrast, focus states, alt text, reduced-motion support).
7. **Smooth scroll + subtle motion:** add motion, but keep it minimal and performant; respect `prefers-reduced-motion`.

---

## 1) Required Deliverables (files)
Create these files in the project root (or `/src` if you already use it):
- `index.html` — homepage
- `styles.css` — all CSS (or split into `tokens.css` + `components.css` if you prefer)
- `app.js` — minimal JS for nav, scroll behavior, and reveal animations
- `README.md` — how to run locally + how to deploy + what was inspected/extracted
- `tokens.md` — final extracted token table (colors/type/spacing/radius) with “where captured” notes
- `agent_output_checklist.md` — completed checklist with pass/fail and screenshots

Optional but recommended:
- `/assets/` — exported static images (placeholders allowed but aspect ratios must match)
- `sitemap.xml`, `robots.txt` (if deploying publicly)

---

## 2) Step-by-step Execution Plan

### Step A — Understand the homepage layout from the wireframe image
Input: `zavis_homepage_wireframe_annotated.png`

1. Open the image and list the section order exactly as shown.
2. For every split layout, follow the rule:
   - **LEFT = Copy**
   - **RIGHT = Visual / Proof / CTA**
3. Extract a concrete layout outline:
   - section name
   - column count per breakpoint (desktop/tablet/mobile)
   - which blocks exist in each section
   - which blocks are “content” vs “visual placeholders”
4. Write this outline into `README.md` under “Wireframe mapping” (so it’s auditable).

Hard rule:
- Do not invent new sections.
- Do not remove sections.
- Do not change order unless the wireframe explicitly shows it.

---

### Step B — Implement design language (visual system) using Hello Patient spec
Input: `hello_patient_design_language.md`

#### B1) Token extraction (must do, no guessing)
1. Open https://www.hellopatient.com/ in a browser.
2. Use DevTools to inspect computed styles for:
   - background colors
   - heading color
   - body color
   - muted color
   - border color
   - primary CTA background/text
   - secondary CTA border/text
   - focus ring
   - container max-width
   - section padding (vertical)
   - grid gap
   - border radius (cards/buttons)
   - shadow (if any)
3. Fill `tokens.md` with:
   - exact values
   - where captured (selector/element)
4. Convert `tokens.md` into CSS variables in `styles.css` (or `tokens.css`).
5. If you cannot extract an item, mark as `TODO` and stop before final build — do not invent.

#### B2) Typography hierarchy (Kylo-level)
Even though we use DebularDisplay, replicate Hello Patient’s “texture”:
- strong H1
- clear H2s
- eyebrow labels
- short, readable body blocks
- prominent metrics

Do:
- define a typography scale with variables: `--h1`, `--h2`, `--h3`, `--body`, `--eyebrow`
- define line-heights and letter-spacing
- enforce max body line length `60–72ch`

Deliverable:
- add a “Type scale” section in `tokens.md` with exact sizes and mapping.

#### B3) Components to build (must exist)
Build these reusable components to assemble sections cleanly:
- `Container` pattern (max width + consistent gutters)
- `Section` pattern (vertical padding + optional background variant)
- `Grid` utilities (2/3/4 column with responsive collapse)
- `Button` (primary/secondary + focus/hover/active)
- `Card` (radius, border, padding)
- `Eyebrow` label
- `MetricTile`
- `LogoWall`
- `TestimonialCard`
- `WorkflowRow` (copy-left, visual-right)

Hard rule:
- do not hard-code per-section magic numbers; use tokens.

---

### Step C — Apply ZAVIS content and constraints
Input: `zavis_website_content_control.md`

1. For each section from wireframe mapping:
   - write copy using the rules and intent in `zavis_website_content_control.md`
2. Copy must be:
   - operational, enterprise, GCC-aware
   - no hype words
   - no fabricated metrics/logos/customers
3. If a section requires proof but none exists:
   - follow the “proof missing” rule from the content file: use qualitative statements or remove numeric claims (but do NOT remove the section; adjust it).
4. Keep copy density low:
   - hero subhead <= 2 lines
   - cards max 2 bullets
   - avoid long paragraphs; prefer short blocks

Hard rule:
- Do NOT mention any competitor or reference site names in the final copy.

---

## 3) Interactions, Scroll, and Motion (production-ready)

### 3.1 Smooth scrolling
- Implement CSS `scroll-behavior: smooth;` for anchor navigation
- For Safari consistency, optionally implement JS smooth-scroll fallback

### 3.2 Sticky navigation
- Nav remains sticky on scroll
- Add subtle background + border after scroll threshold
- Ensure nav does not overlap content (add top padding offset)

### 3.3 Reveal animations (subtle)
Implement IntersectionObserver to apply:
- `opacity: 0 -> 1`
- `transform: translateY(8px) -> 0`
Duration 200–280ms, ease-out.

Respect reduced motion:
```css
@media (prefers-reduced-motion: reduce){
  *{animation:none!important;transition:none!important;scroll-behavior:auto!important;}
}
```

### 3.4 No layout shift
- Reserve space for images/visual placeholders with fixed aspect ratios
- Lazy-load below-the-fold images using `loading="lazy"`
- Avoid webfont layout shift (use `font-display: swap` if applicable)

---

## 4) Quality Gates (must pass before “done”)

### Gate 1 — Layout integrity
- No overlapping sections
- No clipped text
- No horizontal scroll at any breakpoint
- Grids collapse cleanly to 1 column on mobile

### Gate 2 — Typographic hierarchy
- Clear H1 → H2 → H3 structure
- Eyebrow labels used where specified
- Body text line length controlled (60–72ch)
- Buttons consistent sizing + padding

### Gate 3 — Content correctness
- Copy aligned to ZAVIS positioning file
- No invented numbers
- No invented customer names/logos
- No mention of inspiration brands

### Gate 4 — Interaction quality
- Sticky nav works
- Smooth anchor scroll works
- Reveal animations subtle + not janky
- Focus states visible and consistent

### Gate 5 — Accessibility (minimum)
- Contrast AA for text
- Keyboard navigable
- Alt text for images/logos (or `aria-hidden` for decorative)
- Form inputs labeled (if any)

### Gate 6 — Performance (minimum)
- No heavy JS bundles
- Images optimized
- No render-blocking external scripts above fold
- Lighthouse baseline: reasonable scores for a static page

---

## 5) Required “No-surprises” Implementation Rules
1. **Do not add new libraries** unless essential.
2. Prefer **vanilla HTML/CSS/JS**.
3. If you use libraries, limit to:
   - AOS (optional) for reveal animation OR implement IntersectionObserver yourself (preferred).
   - No heavy frameworks unless already in the repo.
4. Do not implement a “live call demo” feature. Use a **static product composite placeholder** area only (per wireframe).
5. Replace any unverified claims with safe phrasing.

---

## 6) Output Evidence (must attach)
In `agent_output_checklist.md`, include:
- Desktop screenshot (full page)
- Mobile screenshot (full page)
- Tablet screenshot (full page)
- Notes on any TODOs that were resolved via inspection
- Token table confirmation (colors, spacing, radius, type)

If your environment supports it, export screenshots to `/assets/screens/`:
- `desktop.png`
- `mobile.png`
- `tablet.png`

---

## 7) Deployment
Deploy as a static site (choose one, based on repo context):
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

In `README.md`, include:
- local run instructions
- deployment command/steps
- final URL (after deploy)

---

## 8) Section Contract (exact sections expected)
You must implement all sections (in this order):
1. Top Nav
2. Hero (Copy | Product UI composite)
3. Who it’s for (3 ICP cards)
4. Outcomes (4 tiles)
5. Core services (Context line + 4 cards)
6. Workflows showcase (3 rows, each row = Copy | UI snippet)
7. Integrations (logo wall)
8. Security & compliance (3 tiles)
9. Proof (Quote | Case metrics)
10. Final CTA (Reassurance | CTA)
11. Footer (4 columns)

---

## 9) Final reminder
The goal is not to copy another website.
The goal is to:
- match the **design quality and cleanliness**
- with **ZAVIS positioning and content**
- in the exact homepage structure from the wireframe
- delivered as a fast, responsive, production-ready static page.
