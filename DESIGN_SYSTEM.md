# Top Agro — Design System

This file defines design direction for new work. Existing approved UI should not be rewritten solely to match this document unless the user requests a redesign.

## 1. Brand character

The interface should feel:
- Rural/agricultural, but not rustic.
- Commercial, but not aggressive.
- Modern, but not futuristic.
- Strong and practical.
- Clean and trustworthy.
- Product-led.

Avoid:
- Generic SaaS aesthetics.
- Excessive glassmorphism.
- Neon tech effects.
- Cartoon agriculture visuals.
- Overly luxury/minimal fashion styling.
- Busy marketplace clutter.

---

## 2. Brand palette

Brand identity assets provide these anchor colors:

- Top Agro Yellow: `#F9AE00`
- Top Agro Green: `#01762F`
- Top Agro Red: `#D20909`
- Brand off-white: `#FBFBFB`

Use these as brand anchors, not as equal competing colors.

Recommended role hierarchy:
- Green: primary brand/action color where appropriate.
- Yellow: highlight/accent/attention.
- Red: strong brand accent; use sparingly so it does not overwhelm or conflict with error semantics.
- Off-white: clean section/background base.

Use a neutral scale for text, borders, surfaces, and disabled states.

If the current project already has approved neutral tokens, preserve them.

Do not introduce a new dominant brand color without approval.

---

## 3. Color usage

Rules:
- Never use all three brand colors at high saturation in the same small component.
- One element should have one clear visual role.
- Primary CTA must have strong accessible contrast.
- Secondary CTA must remain visible but should not compete with the primary CTA.
- Avoid low-contrast grey text on colored backgrounds.
- Do not use color as the only indicator of state.
- Keep decorative patterns/gradients low contrast behind text.

Gradients:
- Allowed when subtle and purposeful.
- Prefer nearby hues or dark-to-transparent image overlays.
- Do not use gradients to compensate for poor text contrast.

---

## 4. Typography

Brand materials include Open Sauce.

Preferred:
- Use Open Sauce if it is already approved/licensed/available in the project.
- If not available, preserve the current project font or use a clean system sans-serif until the user approves font integration.
- Do not automatically add or redistribute font binaries.

Typography principles:
- Use a deliberate type scale.
- Body text should generally be at least 16px on mobile.
- Use no more font weights than necessary.
- Avoid ultra-light weights for small UI text.
- Headings should have tighter line-height than body copy.
- Keep paragraph line length comfortable.
- Do not center long paragraphs.

Suggested hierarchy:
- Display/Hero: bold, concise.
- H1/H2: strong but not oversized for spectacle.
- H3/card title: clear scannable hierarchy.
- Body: readable and calm.
- Caption/meta: visibly secondary, never illegible.

---

## 5. Spacing system

Use a consistent spacing scale rather than arbitrary values.

Preferred base rhythm:
- 4
- 8
- 12
- 16
- 24
- 32
- 48
- 64
- 80
- 96

Rules:
- Related items should be closer together.
- Unrelated groups should have clearly more separation.
- Section spacing should be larger than internal component spacing.
- Start with more whitespace, then reduce only when needed.
- Avoid ambiguous spacing where a label looks equally related to two elements.

Do not fill empty space simply because it exists.

---

## 6. Alignment

Use strong, consistent alignment.

Default:
- Left-align most content and product information.
- Use centered alignment mainly for short hero statements, isolated CTAs, or deliberate campaign sections.
- Align cards, headings, icons, and metadata to a clear grid/edge.
- Break alignment only intentionally.

Do not mix random center/left/right alignment in the same content block.

---

## 7. Contrast and hierarchy

Users should understand the page structure at a glance.

Use:
- Size.
- Weight.
- Contrast.
- Space.
- Position.
- Background separation.

Do not rely on font size alone.

Every section should answer:
- What should the user notice first?
- What is supporting information?
- What action matters most?

Primary action > secondary action > tertiary action.

---

## 8. Repetition and consistency

Repeat:
- Button styles.
- Card patterns.
- Section labels.
- Icon treatment.
- Border radii.
- Shadows.
- Product metadata format.
- CTA wording conventions.
- Spacing patterns.

Repeated elements should strengthen recognition of Top Agro.

Avoid one-off component styling unless the content genuinely requires a new pattern.

---

## 9. Borders, radii, and shadows

Prefer separation through:
1. Whitespace.
2. Background contrast.
3. Subtle shadow.
4. Border only when useful.

Avoid "everything in a bordered card".

Use radii consistently. Do not mix many radius sizes without purpose.

Shadows should be subtle and functional:
- Distinguish layered surfaces.
- Lift a CTA/card when needed.
- Avoid heavy floating-card effects across the entire page.

---

## 10. Buttons

Primary button:
- Highest contrast.
- Strong label.
- Clear action.
- Large enough for touch.
- No vague "Saiba mais" when a more specific action exists.

Secondary button:
- Clear but lower visual weight.

Tertiary action:
- Link-style when appropriate.

Avoid:
- Multiple primary buttons side by side.
- Icon-only CTAs when meaning is not obvious.
- Tiny buttons on mobile.

---

## 11. Product cards

Product cards should prioritize:
1. Real product image.
2. Product name/model.
3. Short utility/differentiator.
4. Relevant factual metadata.
5. CTA.

Do not overload cards with every specification.

Keep technical depth for the detail page or expanded section.

Cards should be easily tappable on mobile.

---

## 12. Imagery

Use authentic product/company imagery.

Preferred image qualities:
- Clear product silhouette.
- Real scale.
- Clean background.
- Natural color.
- Consistent crop.
- High enough resolution for target display.
- Web-optimized file size.

Image editing may improve presentation but must preserve factual reality.

Avoid:
- AI-generated machinery.
- Fake farms presented as real Top Agro locations.
- Random stock images when real Top Agro assets exist.
- Decorative image clutter behind important text.

---

## 13. Hero sections

Hero must communicate in seconds:
- Who/what Top Agro is.
- Why the visitor should care.
- The primary next step.

Keep hero copy short.

If text overlays a photo:
- Use a deliberate dark overlay/gradient.
- Protect contrast across responsive crops.
- Test mobile crop separately.
- Do not place critical text over visually noisy machinery details.

---

## 14. Section design

Different sections may use different backgrounds to create rhythm.

Prefer:
- White/off-white.
- Subtle light neutral.
- Dark section when it supports contrast.
- Brand accents used selectively.

Do not alternate backgrounds mechanically just to make every section different.

---

## 15. Mobile design

Mobile is a first-class layout, not a compressed desktop page.

On mobile:
- Keep one clear primary action.
- Keep text short.
- Stack content naturally.
- Use full-width cards where appropriate.
- Use 44px+ touch targets as a practical minimum.
- Avoid tiny carousels and cramped multi-column grids.
- Make filters/navigation easy to close and recover from.
- Keep sticky WhatsApp CTA from covering content or browser controls.

---

## 16. Accessibility baseline

Target:
- WCAG AA contrast for normal text.
- Visible keyboard focus.
- Semantic headings.
- Alt text for meaningful images.
- Decorative images should not create screen-reader noise.
- Buttons must be buttons; links must be links.
- Form labels must be explicit.
- Error messages must be text, not color-only.

---

## 17. Reference principles

Design decisions should reflect the supplied references:
- *Refactoring UI*: hierarchy, spacing systems, typography scale, restrained borders, meaningful contrast, deliberate surfaces.
- *Don't Make Me Think, Revisited*: self-evident pages, conventional interactions, scanning, clear navigation.
- *The Non-Designer's Design Book*: contrast, repetition, alignment, proximity.
