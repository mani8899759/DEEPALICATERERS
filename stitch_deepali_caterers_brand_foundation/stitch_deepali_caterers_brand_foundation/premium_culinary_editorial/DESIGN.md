---
name: Premium Culinary Editorial
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#785832'
  on-secondary: '#ffffff'
  secondary-container: '#fed2a2'
  on-secondary-container: '#795932'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#410003'
  on-tertiary-container: '#e3524d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#ffddb9'
  secondary-fixed-dim: '#e9bf90'
  on-secondary-fixed: '#2b1700'
  on-secondary-fixed-variant: '#5e411d'
  tertiary-fixed: '#ffdad6'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410003'
  on-tertiary-fixed-variant: '#8e1217'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0.01em
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.15em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
spacing:
  unit: 4px
  xs: 8px
  sm: 16px
  md: 32px
  lg: 64px
  xl: 128px
  gutter: 24px
  margin: 48px
---

## Brand & Style

This design system is built for a premium Indian catering brand, prioritizing an **Editorial Minimalism** aesthetic. It moves away from standard digital patterns to embrace the tactile, sophisticated feel of a high-end food journal or a bespoke restaurant menu. 

The personality is rooted in "Premium Hospitality"—where every detail is intentional and human-centric. The visual narrative uses sharp edges, ample negative space, and a refined high-contrast typographic hierarchy to evoke feelings of celebratory elegance, trust, and timelessness. The user experience should feel like flipping through a curated culinary retrospective rather than navigating a software application.

## Colors

The palette is defined by its parchment-like warmth and deep, authoritative contrast. 

- **Primary:** A deep charcoal (#121212) used for all high-level headlines and primary interactions to ensure maximum legibility against the warm backdrop.
- **Background:** A rich, cream/parchment base (#FAE5CD) that creates a softer, more organic feel than pure white.
- **Secondary (Accents):** A muted bronze-gold is used sparingly for decorative elements and sub-headers to reinforce the premium nature of the brand.
- **Tertiary:** A deep, spice-inspired red is reserved for critical status indicators or small, vibrant calls to action, nodding to the rich colors of Indian cuisine without overwhelming the editorial neutrality.

## Typography

The typography system relies on a high-contrast pairing between the dramatic, transitional serif of **Playfair Display** and the technical, modern clarity of **Manrope**.

- **Headlines:** Must always be set in Playfair Display. Large display text should use tighter letter-spacing to emphasize the editorial look.
- **Body:** Manrope provides a grounded, sophisticated counter-balance. It should be set with generous line-heights to maintain an airy, luxury feel.
- **Labels:** Small labels and navigational cues use Manrope in all-caps with wide tracking (letter spacing) to serve as distinct "stamps" or "folio notes" on the page.

## Layout & Spacing

This design system uses a **Fixed Grid** philosophy with intentional asymmetry to mirror high-end print layouts.

- **Desktop:** 12-column grid with wide 48px external margins. Content should often be "offset," leaving one or two columns empty to create focal points.
- **Rhythm:** Spacing follows a base-4 scale but favors large increments (MD/LG) to maintain a feeling of space and "luxury of room." 
- **Imagery:** Overlapping layouts are encouraged—for example, a photo of a plated dish may bleed across two columns and overlap a text block.
- **Mobile:** Transition to a 4-column grid with reduced 24px margins, ensuring the serif typography remains the dominant visual element.

## Elevation & Depth

To maintain the flat, editorial feel, traditional shadows and depth are strictly avoided. Instead, hierarchy is established through **Tonal Layering** and **Sharp Overlays**.

- **Stacked Surfaces:** Use slight variations of the parchment color (Surface #F5DDC1) to define distinct content areas.
- **Borders:** Ultra-thin, 1px solid lines in the primary color (#121212) act as separators, mimicking the ruled lines of a ledger or formal invitation.
- **No Blurs:** Transparency and blurs are replaced by solid, high-opacity overlays. Interaction depth is communicated by shifting background colors rather than adding "lift" through shadows.

## Shapes

The shape language is strictly **Sharp (0)**. 

Every UI element—from buttons to input fields to image containers—uses 90-degree corners. This evokes a sense of architectural precision and formal tradition. Curved lines are reserved exclusively for the organic curves of the typography and the food photography themselves, creating a contrast between the rigid structure of the "paper" and the fluidity of the "content."

## Components

### Buttons
Primary buttons are solid #121212 blocks with sharp corners and white or cream center-aligned text in all-caps Manrope. Secondary buttons use a 1px border with no fill.

### Input Fields
Fields consist of a single bottom border (rule line) rather than a full box. Labels sit above the line in wide-tracked uppercase Manrope. Focus states are indicated by a thickening of the bottom rule.

### Cards
Cards are defined by thin 1px outlines or slight tonal shifts in background color. They do not use shadows. Images within cards must be sharp-edged and ideally use high-quality, desaturated or warmly-toned photography.

### Chips/Tags
Small rectangular boxes with 1px borders. These are used for food categories (e.g., "VEGETARIAN", "SIGNATURE") and should never be rounded or pill-shaped.

### Lists
Menu lists are styled like traditional restaurant menus: Item names in Playfair Display (Medium), descriptions in Manrope (Regular), and prices aligned to the right, separated by a subtle dotted leader line.

### Imagery Containers
Use varied aspect ratios (3:4, 1:1, 16:9) within the same layout to create a "scrapbook" or "journal" feel. Avoid standardizing image sizes across a single view.