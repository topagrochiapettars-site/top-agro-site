# Top Agro — UX Rules

## 1. Core law: make the next step obvious

A visitor should not need to stop and decode the interface.

At a glance, each important page should make clear:
- Where am I?
- What is this?
- What can I do here?
- How do I contact Top Agro?

If the user has to read instructions to understand a basic interaction, simplify the interaction.

---

## 2. Design for scanning

Assume users scan before reading.

Use:
- Clear headings.
- Short paragraphs.
- Bullets.
- Strong card titles.
- Meaningful labels.
- Highlighted factual differentiators.
- Visual grouping.

Put the most useful words first.

Avoid:
- Dense walls of copy.
- Introductory "welcome" filler.
- Repetitive paragraphs.
- Long explanations before the product/action appears.

---

## 3. Navigation

Navigation must be predictable.

Preferred top-level concepts:
- Início
- Produtos
- Usados
- Conteúdo/Blog when active
- Sobre/Empresa when useful
- Contato

Do not add top-level navigation items for sections that do not yet exist.

Always provide a clear way back to:
- Home.
- Products.
- Parent category.

When deeper catalog pages exist, breadcrumbs may be used.

Navigation labels should use language customers understand, not internal company terminology.

---

## 4. Home page clarity

The Home page should prioritize:
1. Value proposition.
2. Primary CTA.
3. Product/category discovery.
4. Trust.
5. Real company/product proof.
6. Additional conversion opportunities.

Do not turn the Home page into a directory of every SKU.

---

## 5. Clickability and affordance

Interactive elements must look interactive.

Rules:
- Buttons look like buttons.
- Links are visually distinguishable.
- Clickable cards have consistent hover/focus/touch feedback.
- Do not make non-interactive decoration look clickable.
- Do not hide essential actions behind hover.
- Use familiar icons; pair icons with labels when meaning is not universal.

---

## 6. Search and browse behavior

Future catalog experience should support two user modes:

Known-item user:
- Searches for a product/category/model directly.

Problem-oriented user:
- Browses by task/application.

Do not force every user through a single hierarchy.

When search is introduced:
- Search product/category/brand/model terms.
- Handle common spelling variations.
- Show useful no-result recovery.
- Do not show a blank dead end.

---

## 7. Product comparison

Do not implement comparison until requested.

When implemented:
- Compare only facts that are available across the selected products.
- Highlight meaningful differences.
- Avoid huge specification tables on mobile.
- Never auto-declare a "winner" without a justified business rule.

---

## 8. Forms

Use as few fields as necessary.

For lead generation:
- Prefer WhatsApp deep-link flow unless a form provides a clear advantage.
- If using a form, ask only information the sales team will actually use.
- Keep labels visible.
- Use correct input types.
- Make validation messages specific.
- Preserve entered data after validation errors.

Avoid:
- Asking for full address before it is needed.
- Mandatory fields with no sales purpose.
- Long forms before the user understands the product.

---

## 9. WhatsApp UX

WhatsApp CTA is a core conversion path.

Rules:
- The CTA should be explicit.
- Prefill useful context, not a giant message.
- Never open multiple WhatsApp windows from one click.
- Use one canonical contact-routing function if possible.
- Ensure links work on mobile and desktop.
- Track intent cleanly when analytics is implemented.

For product pages, prefilled text should identify the product/model.

---

## 10. Mobile UX

Mobile users may arrive from an ad with low patience and incomplete context.

Priorities:
- Fast first paint.
- Clear product/title immediately.
- CTA easy to reach.
- No horizontal overflow.
- No tiny text.
- No controls too close together.
- No carousels that trap scrolling.
- No modal that is hard to close.
- Do not hide critical specs in hover tooltips.

Test at narrow widths, not only common device presets.

---

## 11. Sticky elements

Sticky CTA/header can help but must not dominate.

Rules:
- Do not stack multiple sticky bars.
- Do not cover content.
- Respect safe areas on mobile.
- Keep sticky WhatsApp action compact.
- If sticky navigation reduces useful viewport too much, simplify it.

---

## 12. Accessibility and keyboard

Even if most visitors use mobile, desktop/keyboard accessibility matters.

Requirements:
- Logical tab order.
- Visible focus state.
- Escape closes dismissible overlays.
- Modal focus is trapped correctly.
- No keyboard dead ends.
- Semantic heading order.
- Landmark elements where appropriate.

---

## 13. Loading and empty states

Do not leave users guessing.

For loading:
- Show stable placeholders when useful.
- Avoid layout shifts.
- Do not fake instant success.

For empty states:
- Explain what happened.
- Give a recovery action.
- Example: no used machines available → offer WhatsApp contact or related categories.

---

## 14. Error states

Errors should answer:
- What failed?
- What can the user do now?

Avoid technical stack traces in customer-facing UI.

If WhatsApp/contact action fails, provide an alternative contact method when available.

---

## 15. Visual noise

Every element competes for attention.

Remove or de-emphasize:
- Decorative badges with no value.
- Repeated CTA blocks that all look primary.
- Excessive borders.
- Redundant icons.
- Long legal/disclaimer copy inside the main purchase path.

Preserve hierarchy.

---

## 16. Performance is UX

Do not ship a visually impressive page that is slow on rural/mobile connections.

Prioritize:
- Optimized images.
- Responsive image sizes.
- Lazy-load below-the-fold media.
- Minimal JS.
- No autoplay-heavy media by default.
- Stable layout.

A simpler fast page is better than a complex slow page.

---

## 17. Usability check

Before considering a page done, perform a "5-second scan":
- Can a new visitor say what page this is?
- Can they identify the main product/category?
- Can they find the main CTA?
- Can they identify Top Agro?
- Can they move to another relevant page without thinking?

If not, simplify.
