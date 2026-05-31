---
name: Luminous Learning
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  container-max: 1200px
---

## Brand & Style
This design system is engineered to transform the educational experience for K-12 students into a vibrant, encouraging journey. The brand personality is **optimistic, supportive, and celebratory**, aiming to lower the barrier to learning through a "gamified-lite" aesthetic. 

The visual style blends **Corporate Modern** structure with **Tactile/Playful** elements. It prioritizes clarity and accessibility while using soft shadows and high-saturation accents to evoke a sense of progress and achievement. Every interaction should feel like a small "win," utilizing movement and depth to keep students engaged without being overstimulating. The UI acts as a digital companion—reliable enough for parents and teachers, yet friendly enough for a first-grader.

## Colors
The palette is built on three emotional pillars:
- **Educational Blue (Primary):** A deep yet vibrant blue that signals trust and intelligence. Used for primary actions, navigation, and core branding.
- **Encouraging Green (Secondary):** A fresh, growth-oriented green used for success states, completed lessons, and "Go" actions.
- **Achievement Gold (Tertiary):** A warm, sunny yellow-gold reserved for rewards, star ratings, and gamified milestones.

The background uses a soft, off-white "Ice Blue" (`#F8FAFC` to `#F0F7FF`) instead of pure white to reduce eye strain during long study sessions and provide a warmer, more inviting canvas.

## Typography
**Plus Jakarta Sans** is the soul of this design system. Its modern, rounded terminals and open apertures provide exceptional legibility and a friendly, contemporary rhythm.

- **Headlines:** Use Bold and ExtraBold weights to create a strong hierarchy. These should feel "bouncy" and prominent to guide the student's attention.
- **Body Text:** Set with generous line height (1.6) to support readability for younger users and multi-language scripts (like Hindi), which often require more vertical space than Latin characters.
- **Localization Note:** When rendering Indic scripts, ensure the line height expands by 20% to prevent vowel markers from clipping, maintaining the same optical rhythm as the English text.

## Layout & Spacing
The design system employs a **fluid 12-column grid** that breathes through generous white space. The layout philosophy is "Content as Cards"—every lesson, quiz, or video is housed in a distinct container to reduce cognitive load.

- **Rhythm:** An 8px base unit governs all dimensions.
- **Touch Targets:** For the younger demographic (Class 1-5), interactive elements must have a minimum height of 48px to accommodate developing motor skills.
- **Flow:** Layouts should prioritize a vertical "learning stream," with clear start and end points for each session.

## Elevation & Depth
Depth is used to simulate a "physical learning board." We avoid harsh drop shadows in favor of **Ambient Tints**:
- **Level 1 (Cards):** Very soft, diffused shadows with a slight blue tint (`rgba(37, 99, 235, 0.08)`) to make elements feel like they are floating just above the surface.
- **Level 2 (Active/Hover):** Shadows increase in spread and slightly in opacity to indicate "clickability."
- **Level 3 (Modals/Chat):** High-diffusion shadows to focus the student's attention on the primary task.

Glassmorphism is used sparingly for navigation bars and progress overlays to maintain a sense of "layered" information without losing the warm background color.

## Shapes
The shape language is defined by **high-radius curves**. Sharp corners are avoided entirely to maintain the friendly persona.
- **Standard Cards:** Use `rounded-lg` (16px/1rem) for a soft, approachable container.
- **Interactive Elements:** Buttons and Input fields use `rounded-xl` (24px/1.5rem) or full pill shapes to feel "squishy" and tactile.
- **Icon Enclosures:** Always circular or heavily rounded squircles to keep the visual language consistent with the mascot's aesthetic.

## Components
- **Gamified Progress Bars:** Thick, rounded tracks with a vibrant green fill. Include a "sparkle" or star icon at the end of the bar that animates when progress is made.
- **Chat Bubbles:** Used for the AI Tutor. The student’s bubbles are Blue, while the Tutor’s bubbles are white with a soft border. The Tutor’s avatar (the robot) should always be anchored to the bottom-left of the chat interface.
- **Library Cards:** Each card features a large illustrative header, a clear title, and a "Lesson Count" chip. The primary action (e.g., "Start Learning") should be a full-width pill button at the bottom of the card.
- **Career Flowcharts:** Nodes are represented as rounded bubbles connected by thick, dashed paths. Active paths are highlighted in Gold, while locked paths are semi-transparent Gray.
- **Feedback Toasts:** Small, centered overlays that use Achievement Gold for "Well Done!" messages, accompanied by a star icon.
- **Buttons:** Use a "3D" effect with a slightly darker bottom border (2px) to make them look like physical buttons that can be pressed, enhancing the tactile experience.