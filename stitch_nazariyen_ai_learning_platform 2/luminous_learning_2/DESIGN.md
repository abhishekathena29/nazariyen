---
name: Luminous Learning
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#505f76'
  on-secondary: '#ffffff'
  secondary-container: '#d0e1fb'
  on-secondary-container: '#54647a'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d3e4fe'
  secondary-fixed-dim: '#b7c8e1'
  on-secondary-fixed: '#0b1c30'
  on-secondary-fixed-variant: '#38485d'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  metadata:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  margin-page: 2.5rem
  section-gap: 4rem
  gutter: 1.5rem
  container-max: 1280px
---

## Brand & Style

The design system is centered on clarity, cognitive ease, and a modern educational aesthetic. The brand personality is encouraging and sophisticated, aiming to reduce learning fatigue through a "clean" and expansive interface. 

The visual style is **Minimalist-Modern**, prioritizing high-quality typography and intentional whitespace. By stripping away unnecessary decorative elements and heavy fills, the focus remains entirely on the educational content and user progression. The emotional response should be one of calm focus and professional reliability.

## Colors

The palette is anchored by a high-energy Primary Blue, used sparingly and strategically for primary actions, progress indicators, and active states to maintain high impact. 

Surface colors are softened to near-white to maximize the sense of space. Secondary and tertiary information utilizes a refined neutral gray scale to establish a quiet hierarchy. Backgrounds should favor pure white or the softest gray tint to ensure the UI feels "airy."

## Typography

This design system utilizes Plus Jakarta Sans exclusively to maintain a cohesive, friendly, and modern tone. The hierarchy is defined by generous line-heights (1.5x to 1.6x for body text) to enhance readability and reduce visual density. 

Metadata and secondary labels are intentionally smaller and use a slightly wider letter-spacing to maintain legibility while clearly receding in the visual stack.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop and a fluid model for mobile, emphasizing generous margins. Content is organized with significant vertical breathing room; section gaps are intentionally large to signify transitions without the need for background color blocks.

- **Desktop:** 12-column grid with 24px gutters and 40px+ page margins.
- **Mobile:** Single column with 20px side margins.
- **Spacing Principle:** Use whitespace as a functional grouping tool. If two elements are related, use tight spacing; if they are distinct sections, use a minimum of 64px (4rem) separation.

## Elevation & Depth

To maintain the "clean" aesthetic, the design system avoids heavy drop shadows. Depth is communicated primarily through:
1.  **Subtle Outlines:** Use `border-outline-variant` at 50% opacity for cards and containers.
2.  **Soft Tonal Layering:** Very light gray backgrounds (`#F8FAFC`) to distinguish hover states or inset sections.
3.  **Minimal Shadows:** If an element must float (like a dropdown or modal), use an "Ambient Shadow"—a very high blur (24px+), low-opacity (4-6%) neutral shadow with no offset.

## Shapes

The shape language is "Rounded," utilizing a base 12px (0.75rem) radius for standard components. This softens the interface and aligns with the friendly nature of the typography. 

- **Small elements (tags, small buttons):** 8px radius.
- **Standard elements (cards, inputs, buttons):** 12px radius.
- **Large containers:** 24px radius.

## Components

- **Buttons:** Primary buttons use the brand blue with white text. Secondary buttons should use a subtle border-only (ghost) style or a very light gray fill to avoid competing for attention.
- **Input Fields:** Use a 1px border (`#E2E8F0`). On focus, transition the border to the primary blue with a soft 2px outer glow.
- **Cards:** White background with a 1px soft border. No shadow by default. Use internal padding of at least 24px to maintain the whitespace narrative.
- **Chips/Badges:** Use a light tint of the primary color (5-10% opacity) for background and the full-strength color for text to denote categories or status.
- **Progress Bars:** Thin (4px - 6px) with rounded caps. Use a neutral track and the primary blue for the fill.
- **Lists:** Increase vertical padding between list items to 16px to prevent a cramped appearance.