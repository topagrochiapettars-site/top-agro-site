# Catalog data layer

- `types/catalog.ts` describes public product content only. Do not store costs, editorial notes, pending questions or source records in these modules. Future editorial tooling must live separately and must not be imported by public pages.
- One family owns shared content and at least one variant. Both pilots are drafts; missing content is deliberately omitted.
- `priority` is editorial priority. `featured` is an independent commercial choice. Both pilots start as P1 and not featured.
- Taxonomy and slugs are initial data identifiers, not deployed URLs. No routes or pages are created by this layer.
- `resolve-product.ts` is a pure editorial/data utility that can resolve drafts. Public route consumers must use `catalog.getByRoute` / `catalog.resolveProduct`, never load raw records or use the low-level resolver as a publication gate.
- A single variant is selected implicitly; multi-variant families have no implicit selection. An unknown variant returns undefined. Specifications/media merge by ID, replacing an existing record in place. Other supplied content fields replace family fields, including explicit empty arrays.
- `createCatalogQueries` snapshots and validates the catalog, excludes fields outside the public allowlist, and exposes only published families. Queries return copies. With the current drafts, all public lists and route lists are empty.
- Publication requires resolved summary, benefits, specifications, 3–4 highlight references and a primary image for every version. This checks structural completeness, not factual approval or remote file availability.
- Related products are manual commercial relationships. They do not establish component equivalence or compatibility.
- Run `node --test tests/catalog.test.mjs` with the project's supported Node version. Test fixtures are synthetic and never part of catalog data. Tests transpile TypeScript in memory using the existing TypeScript dependency.
- No change to Home, WhatsApp, hosting or publication behavior is required for this data-only stage.
