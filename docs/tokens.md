# ZAVIS Homepage Design Tokens

> Extracted from Hello Patient reference site (https://www.hellopatient.com/)
> Date: 2026-01-24
> Note: Using placeholder enterprise-appropriate values. These should be refined with actual Hello Patient DevTools inspection for production.

---

## Color Tokens

| Token | Value | Where Captured |
|-------|-------|----------------|
| `--bg-primary` | `#FFFFFF` | Body background - clean white base |
| `--bg-secondary` | `#F8F9FA` | Subtle section backgrounds for visual rhythm |
| `--surface` | `#FFFFFF` | Card backgrounds |
| `--text-primary` | `#0A0B0D` | Primary headings, high contrast |
| `--text-body` | `#1F2937` | Body copy, readable gray |
| `--text-muted` | `#6B7280` | Supporting text, eyebrow labels |
| `--text-disabled` | `#9CA3AF` | Disabled states |
| `--border-subtle` | `#E5E7EB` | Card borders, subtle dividers |
| `--border-default` | `#D1D5DB` | Input borders, default state |
| `--border-emphasis` | `#9CA3AF` | Active borders, emphasis |
| `--brand-primary` | `#2563EB` | Primary CTA background |
| `--brand-primary-hover` | `#1D4ED8` | CTA hover state |
| `--brand-primary-active` | `#1E40AF` | CTA active/pressed state |
| `--brand-ink` | `#FFFFFF` | Text on brand background |
| `--action-secondary` | `#FFFFFF` | Secondary button background |
| `--action-secondary-border` | `#D1D5DB` | Secondary button border |
| `--action-secondary-hover` | `#F9FAFB` | Secondary button hover |
| `--focus-ring` | `#3B82F6` | Focus indicator color |
| `--focus-ring-offset` | `#FFFFFF` | Focus ring offset color |
| `--success` | `#10B981` | Success states |
| `--warning` | `#F59E0B` | Warning states |
| `--danger` | `#EF4444` | Error states |

---

## Typography Tokens

| Token | Value | Where Captured |
|-------|-------|----------------|
| **Font Families** |
| `--font-display` | `"DebularDisplay", system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif` | Display typography (headings, hero) |
| `--font-body` | `ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif` | Body text, UI elements |
| **H1 - Hero Headline** |
| `--h1-size` | `56px` | Desktop hero headline |
| `--h1-size-mobile` | `36px` | Mobile hero headline |
| `--h1-line` | `1.1` | Tight line-height for impact |
| `--h1-weight` | `700` | Bold weight |
| `--h1-track` | `-0.02em` | Slight letter-spacing tightening |
| **H2 - Section Headings** |
| `--h2-size` | `40px` | Desktop section headings |
| `--h2-size-mobile` | `28px` | Mobile section headings |
| `--h2-line` | `1.2` | Controlled line-height |
| `--h2-weight` | `700` | Bold weight |
| `--h2-track` | `-0.01em` | Subtle tightening |
| **H3 - Card/Component Headings** |
| `--h3-size` | `24px` | Desktop card headings |
| `--h3-size-mobile` | `20px` | Mobile card headings |
| `--h3-line` | `1.3` | Readable line-height |
| `--h3-weight` | `600` | Semi-bold weight |
| `--h3-track` | `0` | No letter-spacing |
| **Body Text** |
| `--body-size` | `16px` | Base body text size |
| `--body-line` | `1.6` | Comfortable reading line-height |
| `--body-weight` | `400` | Regular weight |
| `--body-max-width` | `65ch` | Max line length for readability |
| **Eyebrow Labels** |
| `--eyebrow-size` | `13px` | Small section labels |
| `--eyebrow-line` | `1.4` | Line-height |
| `--eyebrow-weight` | `500` | Medium weight |
| `--eyebrow-track` | `0.05em` | Increased letter-spacing |
| `--eyebrow-case` | `lowercase` | Text transform |
| **Metrics/Numbers** |
| `--metric-size` | `48px` | Desktop oversized metrics |
| `--metric-size-mobile` | `36px` | Mobile metrics |
| `--metric-line` | `1.1` | Tight line-height |
| `--metric-weight` | `700` | Bold weight |
| **UI Text** |
| `--button-size` | `15px` | Button text size |
| `--button-weight` | `500` | Button text weight |
| `--nav-size` | `15px` | Navigation link size |
| `--nav-weight` | `500` | Navigation link weight |

---

## Spacing Tokens

| Token | Value | Where Captured |
|-------|-------|----------------|
| **Container & Layout** |
| `--container-max` | `1200px` | Maximum content width |
| `--container-padding` | `24px` | Mobile horizontal gutters |
| `--container-padding-lg` | `40px` | Desktop horizontal gutters |
| **Section Spacing** |
| `--section-y-mobile` | `64px` | Mobile vertical section padding |
| `--section-y-tablet` | `80px` | Tablet vertical section padding |
| `--section-y-desktop` | `120px` | Desktop vertical section padding |
| **Component Spacing** |
| `--grid-gap-mobile` | `24px` | Mobile grid gap |
| `--grid-gap-tablet` | `32px` | Tablet grid gap |
| `--grid-gap-desktop` | `40px` | Desktop grid gap |
| **Stack Spacing (Vertical Rhythm)** |
| `--stack-xs` | `8px` | Extra small vertical spacing |
| `--stack-sm` | `16px` | Small vertical spacing |
| `--stack-md` | `24px` | Medium vertical spacing |
| `--stack-lg` | `32px` | Large vertical spacing |
| `--stack-xl` | `48px` | Extra large vertical spacing |
| **Inline Spacing (Horizontal)** |
| `--inline-xs` | `8px` | Extra small horizontal spacing |
| `--inline-sm` | `12px` | Small horizontal spacing |
| `--inline-md` | `16px` | Medium horizontal spacing |
| `--inline-lg` | `24px` | Large horizontal spacing |

---

## Component Tokens

| Token | Value | Where Captured |
|-------|-------|----------------|
| **Border Radius** |
| `--radius-sm` | `4px` | Subtle rounding, small elements |
| `--radius-md` | `8px` | Cards, buttons, standard rounding |
| `--radius-lg` | `12px` | Larger components |
| `--radius-xl` | `16px` | Hero elements, emphasis |
| **Shadows** |
| `--shadow-sm` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1)` | Card elevation |
| `--shadow-lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1)` | Prominent elevation |
| **Button Dimensions** |
| `--button-height-sm` | `36px` | Small button height |
| `--button-height-md` | `44px` | Default button height |
| `--button-height-lg` | `52px` | Large button height (hero CTAs) |
| `--button-padding-x` | `24px` | Button horizontal padding |
| `--button-padding-x-lg` | `32px` | Large button horizontal padding |
| **Navigation Dimensions** |
| `--nav-height` | `72px` | Desktop navigation height |
| `--nav-height-mobile` | `64px` | Mobile navigation height |
| **Card Padding** |
| `--card-padding` | `32px` | Desktop card padding |
| `--card-padding-mobile` | `24px` | Mobile card padding |
| **Focus Ring** |
| `--focus-ring-width` | `2px` | Focus indicator thickness |
| `--focus-ring-offset` | `2px` | Focus indicator offset |

---

## Animation Tokens

| Token | Value | Where Captured |
|-------|-------|----------------|
| **Timing** |
| `--duration-fast` | `200ms` | Micro-interactions, quick feedback |
| `--duration-base` | `250ms` | Standard transitions |
| `--duration-slow` | `280ms` | Reveal animations, emphasis |
| **Easing** |
| `--ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | Deceleration curve |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Smooth both ways |
| **Reveal Animation** |
| `--reveal-distance` | `8px` | Subtle slide-up distance |

---

## Responsive Breakpoints

| Breakpoint | Value | Usage |
|------------|-------|-------|
| **Mobile** | `≤640px` | Base styles (mobile-first) |
| **Tablet** | `641px - 1024px` | `@media (min-width: 641px)` |
| **Desktop** | `≥1025px` | `@media (min-width: 1025px)` |
| **Large Desktop** | `≥1441px` | `@media (min-width: 1441px)` (optional) |

---

## Usage Notes

1. **Token Extraction:** These tokens follow the Hello Patient design language guidelines but use enterprise-appropriate placeholder values. For production, inspect https://www.hellopatient.com/ using DevTools to capture exact values.

2. **Typography Hierarchy:** The scale maintains the "tight, bold headings + readable body + lowercase eyebrows" texture described in the design language file.

3. **Color Philosophy:** Clean, minimal palette with single dominant accent (brand blue). Muted tones for supporting text maintain readability while reducing visual noise.

4. **Spacing System:** Mobile-first with progressive enhancement. Generous whitespace at desktop for enterprise cleanliness.

5. **Motion:** All animations respect `prefers-reduced-motion` and stay under 280ms for performance.

6. **Accessibility:** Focus states, contrast ratios, and semantic structure prioritized throughout.

---

## Implementation Reference

These tokens are implemented as CSS custom properties in `styles.css`:

```css
:root {
  /* Colors */
  --bg-primary: #FFFFFF;
  --text-primary: #0A0B0D;
  /* ... all tokens ... */
}
```

All component styles reference these tokens for consistency and easy theming.
