# Design System Document: High-End Digital Experience

## 1. Overview & Creative North Star: "The Sonic Architect"

The core philosophy of this design system is **"The Sonic Architect."** It represents a bridge between raw musical creativity and precision engineering. This is not a "standard" dark-mode layout; it is a premium environment where AI technology feels tangible, professional, and evocative.

To achieve this, the system moves away from flat grids. It utilizes **Intentional Asymmetry** and **Tonal Depth** to mimic the interface of a high-end audio workstation. Elements are not just placed; they are "conducted." We use expansive negative space (breathing room) to allow high-contrast "neon" accents to pop, creating a visual rhythm that guides the user through the narrative of AI innovation.

---

## 2. Colors: Depth and Luminosity

The color palette is built on a foundation of obsidian blacks and deep teals, punctuated by high-vibrancy "neon" signals that represent the data-driven soul of the music.

### Color Tokens
*   **Background (Neutral Color):** `#0b0f0e` (A deep, atmospheric charcoal-black)
*   **Primary (Neon Accent):** `#aaffdc` (A luminous mint-teal for core CTAs)
*   **Secondary (Supporting Depth):** `#004D40` (A deep teal, complementing the primary and providing tonal depth)
*   **Tertiary (Dynamic Accent):** `#ff8b69` (A vibrant, high-energy orange-red for alerts and specific interactions, reflecting the latest theme update)
*   **Surface Hierarchy:**
*   `surface_container_lowest`: `#000000`
*   `surface_container_low`: `#101413`
*   `surface_container_high`: `#1b211f`

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for defining layout sections. Separation must be achieved through **background value shifts**. A content block should sit on a `surface_container_high` against a `surface_dim` background. The eye should perceive change through tonal transition, not structural lines.

### Signature Textures & Glassmorphism
To create a "High-Tech" feel, floating UI elements (like cards or navigation bars) must utilize **Glassmorphism**.
*   **Formula:** `surface_variant` at 40% opacity + 24px `backdrop-blur`.
*   **Visual Soul:** Use subtle linear gradients transitioning from `primary` to `primary_container` for hero elements to provide a "pulsing" digital energy.

---

## 3. Typography: The Future of Sound

The typography combines the industrial precision of **Space Grotesk** with the humanistic clarity of **Manrope**.

*   **Display (Space Grotesk):** Large-scale, high-impact titles (`display-lg`: 3.5rem). Use tight letter-spacing (-0.02em) to create an authoritative, editorial feel. These are the "headliners."
*   **Headline (Space Grotesk):** For section headers, emphasizing a technical, futuristic personality.
*   **Body (Manrope):** Optimized for legibility (`body-lg`: 1rem). Manrope provides a premium, balanced feel that offsets the aggressive tech-aesthetic of the display faces.
*   **Label (Space Grotesk):** Used for technical metadata and micro-copy, providing a "system readout" aesthetic.

---

## 4. Elevation & Depth: Tonal Layering

We eschew traditional shadows in favor of **Tonal Layering**. The interface is treated as a stack of semi-transparent layers.

*   **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` section to create a soft, recessed "pocket" effect.
*   **Ambient Shadows:** If a card must float, use an ultra-diffused shadow.
*   *Spec:* `0px 20px 40px rgba(0, 0, 0, 0.4)`. The shadow should feel like a soft glow of darkness rather than a harsh drop-shadow.
*   **The Ghost Border Fallback:** If accessibility requires a border, use the `outline_variant` token at **15% opacity**. It should be a suggestion of a boundary, not a hard stop.

---

## 5. Components

### Buttons
*   **Primary:** High-luminosity `primary` background with `on_primary` text. No border. Use `full` roundedness for a pill-shaped, modern look.
*   **Secondary:** `surface_variant` background with `primary` text. Subtle and sophisticated.
*   **Hover State:** Increase `surface_brightness` or add a subtle `primary` outer glow (4px blur).

### Cards & Features
*   **Glass Cards:** For features, use a `surface_container_high` at 60% opacity with a `backdrop-blur`.
*   **No Dividers:** Never use lines to separate list items. Use 16px–24px of vertical whitespace or alternating `surface_container` subtle shifts.

### Audio-Specific Components
*   **Waveform Progress Bars:** Use a gradient from `primary` to `secondary` for active states.
*   **Glass Control Nodes:** Small, circular handles for parameters should use high-contrast `primary_fixed` to look like glowing touch-points.
*   **Floating Navigation:** A pill-shaped nav bar pinned to the top, using the Glassmorphism formula mentioned in Section 2.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where one column is significantly wider than the other to create an editorial, non-template feel.
*   **Do** lean into "Deep Teal" gradients for background depth (e.g., a radial gradient from `surface` to `secondary_container` at 10% opacity).
*   **Do** use `letter-spacing` on labels to mimic technical instrumentation.

### Don't:
*   **Don't** use pure white (#FFFFFF) for text. Use `on_surface` or `on_background` to maintain the "Dark Studio" atmosphere.
*   **Don't** use standard box shadows. If an element doesn't feel elevated enough, check your surface container hierarchy first.
*   **Don't** use sharp corners. Stick to the `full` roundedness scale (which aligns with the `roundedness: 3` token) to keep the tech feeling sophisticated rather than aggressive.

---

## 7. Interaction Note

Transitions should be fluid and "dampened." When a user hovers over a feature card, the `backdrop-blur` should increase slightly, and the `outline_variant` "Ghost Border" should subtly brighten. Think of the UI as a responsive musical instrument: every touch should elicit a refined, luminous response.