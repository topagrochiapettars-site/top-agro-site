# Top Agro — Product Architecture

This document defines the intended catalog architecture. It is NOT permission to build all pages immediately.

## 1. Principle

Users should be able to move from broad discovery to specific equipment without facing one giant undifferentiated catalog.

Target hierarchy:

`Produtos → Categoria → Marca/Modelo → Detalhe → WhatsApp`

---

## 2. Products overview

Future route:
`/produtos`

Purpose:
- Show major product categories.
- Help users who know the equipment type.
- Offer an alternate path for users who know only the job/application.

The overview should not list every SKU by default.

Category card should contain:
- Category image.
- Category name.
- One short explanation.
- Link to category.

---

## 3. Category pages

Example:
`/produtos/ensacadeiras`

A category page may contain multiple brands and multiple models.

Recommended structure:
1. H1 and short category explanation.
2. Buyer guidance / main selection criteria.
3. Brand/model groups.
4. Product cards.
5. "Not sure which model?" CTA.
6. Supporting FAQ/content when useful.

This directly answers the business requirement:
- Yes, several brands of the same equipment can live on the same category page.
- Each brand can contain multiple models.

Do not create a separate brand page by default.

---

## 4. When to create a brand page

Create a dedicated brand page only when at least one is true:
- The brand has many products across categories.
- The brand has significant search/business value.
- Manufacturer partnership content justifies it.
- Users frequently browse by brand.

Possible route:
`/marcas/[marca]`

Do not force:
`Produtos → Categoria → Brand page → Model`
when the extra click provides no value.

---

## 5. Model detail pages

Preferred route:
`/produtos/[categoria]/[marca-modelo]`

A real model detail page should include:
- Canonical name.
- Brand.
- Model.
- Real media.
- Short use-case summary.
- Verified benefits.
- Verified specs.
- Use/compatibility notes.
- CTA.
- Related alternatives when relevant.

No placeholder model should be indexable.

---

## 6. Product data model

Design data so the same product can be reused in:
- Home highlights.
- Category cards.
- Search.
- Product detail.
- Related products.
- WhatsApp prefill.
- Future ecommerce.

Suggested conceptual fields:

```ts
type Product = {
  id: string
  slug: string
  name: string
  categoryId: string
  brandId: string
  model?: string
  status: "active" | "inactive" | "coming-soon"
  shortDescription?: string
  benefits?: string[]
  specifications?: Specification[]
  applications?: string[]
  images?: ProductImage[]
  videos?: ProductVideo[]
  whatsappContext?: string
  publicPrice?: number | null
  availability?: string | null
}
```

This is conceptual guidance, not a mandate to create a database now.

For the MVP, static typed data may be better than premature backend complexity.

---

## 7. Categories and taxonomy

Category names should reflect how customers search and speak.

Avoid internal supplier grouping if customers do not recognize it.

A product should have one canonical primary category.

Secondary relationships can be tags/applications, but avoid multiple duplicate category URLs for the same product.

---

## 8. Application-based discovery

Future alternate discovery can include job/application concepts such as:
- Silagem.
- Fenação.
- Armazenagem.
- Ração.
- Movimentação de grãos.
- Distribuição/adubação.
- Pecuária.
- Florestal.

This should complement the product taxonomy, not duplicate the same pages under many URLs.

---

## 9. Used equipment architecture

Dedicated area:
`/usados`

Used items are separate from new product model pages.

Suggested route:
`/usados/[slug]`

Conceptual used data:

```ts
type UsedEquipment = {
  id: string
  slug: string
  title: string
  brand?: string
  model?: string
  year?: number
  location?: string
  conditionNotes?: string[]
  includedItems?: string[]
  images: ProductImage[]
  price?: number | null
  status: "available" | "reserved" | "sold"
  updatedAt: string
}
```

Rules:
- Real photos.
- Real condition.
- Clear status.
- Sold items must not appear as available.
- If keeping sold pages for SEO/history, mark them clearly and offer alternatives.

---

## 10. Price architecture

Current:
- Most products: no public price.
- CTA goes to sales.

Future:
- Product model may gain `publicPrice`.
- Used item may gain price earlier.
- Ecommerce may introduce Offers/variants.

Do not hardcode "price hidden" logic in many components.

Centralize pricing display behavior so the future change is easy.

---

## 11. Variants

Do not create separate pages for tiny technical variants unless they are commercially distinct.

A model can have options such as:
- Motor.
- Width.
- Capacity.
- Hitch.
- Voltage.

If options materially change the machine and purchase decision:
- Model them clearly.

If options are only configuration choices:
- Keep them within one product page.

---

## 12. Related products

Related products should be useful, not random.

Good relationships:
- Alternative capacity.
- Same category/brand.
- Complementary equipment.
- New alternative to a used listing.

Avoid "related" based only on the newest inventory.

---

## 13. Home page product exposure

Home should feature:
- Strategic categories.
- Selected products.
- Used highlights when active.
- Commercial campaigns.

Home is not the catalog database.

Do not manually duplicate full product data inside Home components. Reference shared product data where practical.

---

## 14. MVP implementation

Current priority is Home/MVP.

Therefore:
- Build only the product structures required by the current page.
- Use architecture that can expand later.
- Do not create empty future routes.
- Do not create a CMS/backend solely because future ecommerce is planned.

---

## 15. Ecommerce evolution

When the site becomes ecommerce, preserve:
- Category URLs.
- Model URLs.
- Shared product IDs/slugs.
- Media.
- SEO metadata.
- Product relationships.

Add commerce capabilities around the existing product entity rather than rebuilding the catalog from scratch when possible.

Potential future additions:
- SKU/variant.
- Price.
- Inventory.
- Shipping.
- Payment.
- Tax.
- Customer/order data.

These are future requirements, not current MVP scope.
