export type TaxonomyEntry = { id: string; slug: string; name: string };
export type Specification = { id: string; label: string; value: string; group?: string };
export type Media = {
  id: string;
  type: 'image' | 'video';
  src: string;
  description: string;
  origin: 'top-agro' | 'manufacturer' | 'customer';
  nature?: 'real' | 'treated' | 'illustration';
  usage?: 'isolated' | 'installed' | 'working';
  width?: number;
  height?: number;
  poster?: string;
};
export type Benefit = { title: string; description?: string };
export type ProductContent = {
  summary?: string;
  benefits?: Benefit[];
  specifications: Specification[];
  highlightSpecIds?: string[];
  media: Media[];
  primaryImageId?: string;
  applications?: string[];
  steps?: { title: string; description: string; mediaId?: string }[];
  impactMediaId?: string;
  faq?: { question: string; answer: string }[];
  documents?: { id: string; title: string; type: 'manual' | 'catalog' | 'technical-sheet' | 'other'; src: string }[];
  testimonials?: { id: string; name?: string; city?: string; state?: string; text?: string; mediaId?: string }[];
};
// Version lists replace family lists when supplied; specs/media merge by stable ID.
export type ProductVariant = { id: string; name: string; model?: string; content?: Partial<ProductContent> };
export type ProductFamily = {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  brandId: string;
  status: 'draft' | 'published';
  priority: 'P1' | 'P2';
  featured: boolean;
  content: ProductContent;
  variants: ProductVariant[];
  comparisonSpecIds?: string[];
  related?: { familyId: string; variantId?: string; type: 'complementary' | 'alternative' }[];
};
export type Catalog = { categories: TaxonomyEntry[]; brands: TaxonomyEntry[]; families: ProductFamily[] };
