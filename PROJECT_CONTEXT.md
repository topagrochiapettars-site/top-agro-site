# Top Agro — Project Context

## 1. Business

Top Agro is an agricultural machinery and implements retailer based in Rio Grande do Sul, Brazil, with multiple physical units and a strong remote sales operation.

The website should feel like a serious, established rural machinery business:
- Practical.
- Trustworthy.
- Commercial.
- Technically competent.
- Easy to contact.
- Modern without looking like a generic SaaS startup.

The website exists to help farmers and rural businesses quickly find the right equipment and reach a salesperson.

---

## 2. Primary audience

Primary users:
- Farmers.
- Family agriculture operations.
- Livestock producers.
- Rural contractors.
- Small and medium rural businesses.
- Buyers researching agricultural machinery and implements.

Typical characteristics:
- Many users arrive from Facebook/Instagram ads, YouTube, Google, or shared WhatsApp links.
- Many browse on mobile.
- Some users know exactly which machine they need.
- Others only know the job/problem they need to solve.
- Technical familiarity varies widely.

Therefore:
- Use plain Brazilian Portuguese.
- Make product purpose immediately clear.
- Avoid forcing users to understand internal industry jargon before finding what they need.
- Support both "I know the product" and "I know the problem" browsing behavior.

---

## 3. Current commercial model

Current launch model:
- Website generates leads.
- Product price is generally discussed with the salesperson.
- Primary conversion destination is WhatsApp.
- The site must help qualify the lead before the conversation begins.

Preferred CTA intent:
- "Falar com um especialista"
- "Solicitar cotação"
- "Consultar disponibilidade"
- "Quero saber mais"
- "Falar no WhatsApp"

Avoid ecommerce wording such as "Comprar agora" while checkout is not available.

A WhatsApp message should ideally include:
- Product/category name.
- Model when known.
- Page URL or source context.
- Optional campaign/source parameters when tracking is implemented.

---

## 4. Future direction

The long-term vision is a full ecommerce platform.

The current code and information architecture should make that future possible without forcing ecommerce complexity into the MVP.

Future capabilities may include:
- Prices.
- Stock.
- Freight calculation.
- Payment.
- Financing.
- Checkout.
- Customer account.
- Order status.
- Used machinery pricing.
- Product comparison.

Do not implement these until explicitly requested.

---

## 5. Product catalog philosophy

Top Agro sells many equipment categories, brands, and models.

The user should be able to navigate:
1. All products.
2. Category.
3. Brand/model options.
4. Model detail.
5. WhatsApp inquiry.

Example:
`Produtos → Ensacadeiras → Marca → Modelo`

Do not flatten every machine into one giant page.

Do not create unnecessary brand pages when a category page with clear brand/model grouping is simpler.

Detailed rules are in `PRODUCT_ARCHITECTURE.md`.

---

## 6. Used machinery

Used machinery is a distinct commercial experience.

Initial direction:
- Dedicated `/usados` area.
- Clear condition/year/location information when known.
- Real photos only.
- Price may be added in the future; do not assume all used items must show price now.
- Strong CTA to salesperson.
- Availability must be treated as time-sensitive.

Never show sold equipment as available.

---

## 7. Content strategy

Content should answer:
- What is this machine?
- What job does it solve?
- For whom is it appropriate?
- What are the real differentiators?
- What technical information matters?
- What should the buyer confirm before purchasing?
- How do I talk to Top Agro?

Use short sections and scannable structure.

Avoid generic marketing filler such as:
- "Revolutionize your farm."
- "The perfect solution for everyone."
- "Unmatched quality and performance."

Prefer specific, verifiable benefits.

---

## 8. Trust signals

Useful trust elements include:
- Physical store presence.
- Real team/company photos.
- Real deliveries and equipment.
- Manufacturer brands.
- Contact information.
- Warranty/service information when verified.
- Logistics/delivery context when verified.
- Customer proof only when authentic and approved.

Do not invent testimonials, numbers, partnerships, awards, or guarantees.

---

## 9. Current development state

Current focus:
- Home page.
- MVP launch.
- Conversion to WhatsApp.
- Strong visual quality.
- Mobile usability.

Do not start building the entire future catalog, used marketplace, backend, or ecommerce unless explicitly requested.

---

## 10. Implementation mindset

The goal is not to produce the maximum amount of UI.

The goal is:
- Ship.
- Learn from real traffic.
- Improve conversion.
- Expand the catalog in a maintainable way.
- Evolve toward ecommerce based on validated needs.

Prefer a clear working page over a complex unfinished system.
