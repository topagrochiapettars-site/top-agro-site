import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import { createRequire } from 'node:module';
const load = createRequire(import.meta.url);
// Compile local TypeScript in memory; no generated files or extra dependencies.
load.extensions['.ts'] = (module, filename) => module._compile(ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, filename);
const { catalog, createCatalogQueries } = load('../lib/catalog/index.ts');
const { resolveProduct } = load('../lib/catalog/resolve-product.ts');
const { validateCatalog } = load('../lib/catalog/validate.ts');
const { datecAreaTotal } = load('../data/catalog/products/datec-area-total.ts');
const { metalAgroMiniFabrica } = load('../data/catalog/products/metal-agro-mini-fabrica.ts');
const { cimisaMicroCs3b } = load('../data/catalog/products/cimisa-micro-cs-3b.ts');
const { trevisanLinhaTms } = load('../data/catalog/products/trevisan-linha-tms.ts');
const { categories } = load('../data/catalog/categories.ts');
const { brands } = load('../data/catalog/brands.ts');
const data = () => structuredClone({ categories, brands, families: [datecAreaTotal, metalAgroMiniFabrica, cimisaMicroCs3b, trevisanLinhaTms] });

test('draft catalog is valid but unavailable through every public lookup', () => {
  assert.deepEqual(validateCatalog(data()), []);
  assert.deepEqual(catalog.listProducts(), []);
  assert.deepEqual(catalog.listRoutes(), []);
  assert.deepEqual(catalog.listCategories(), []);
  assert.deepEqual(catalog.listBrands(), []);
  for (const family of data().families) {
    const category = categories.find(item => item.id === family.categoryId);
    assert.deepEqual(catalog.listProducts({ categoryId: family.categoryId, featured: false }), []);
    assert.equal(catalog.getProduct(family.id), undefined);
    assert.equal(catalog.resolveProduct(family.id), undefined);
    for (const variant of family.variants) assert.equal(catalog.resolveProduct(family.id, variant.id), undefined);
    assert.equal(catalog.getByRoute(category.slug, family.slug), undefined);
    assert.deepEqual(catalog.getRelated(family.id), []);
  }
});
test('variants preserve nominal names and resolve only approved throughput', () => {
  assert.equal(resolveProduct(datecAreaTotal).model, 'PACA 1000');
  assert.equal(resolveProduct(metalAgroMiniFabrica).variantId, undefined);
  assert.equal(resolveProduct(metalAgroMiniFabrica, 'missing'), undefined);
  for (const [id, value] of [['500-kg', 'Aproximadamente 500 kg/h'], ['1000-kg', 'Aproximadamente 1.000 kg/h']]) assert.equal(resolveProduct(metalAgroMiniFabrica, id).content.specifications.find(item => item.id === 'producao').value, value);
});
test('stable-ID overrides replace specs; explicit empty lists replace common lists', () => {
  const family = structuredClone(datecAreaTotal);
  family.content.specifications = [{ id: 'test', label: 'Test', value: 'base' }];
  family.content.benefits = [{ title: 'Test only' }];
  family.variants[0].content = { specifications: [{ id: 'test', label: 'Test', value: 'override' }], benefits: [] };
  const result = resolveProduct(family);
  assert.equal(result.content.specifications.length, 1);
  assert.equal(result.content.specifications[0].value, 'override');
  assert.deepEqual(result.content.benefits, []);
  assert.equal(family.content.specifications[0].value, 'base');
  result.content.specifications[0].value = 'mutated';
  assert.equal(family.variants[0].content.specifications[0].value, 'override');
});

test('TMS variants inherit common content without leaking configuration-specific options', () => {
  const common = resolveProduct(trevisanLinhaTms);
  assert.equal(common.variantId, undefined);
  assert.equal(common.content.specifications.some(item => item.id === 'capacidade-tratamento'), false);
  const models = [
    ['tms-350', '300 a 350 kg', 'Não', false],
    ['tms-650', '550 a 650 kg', 'Sim', false],
    ['tms-1000', '900 a 1.000 kg', 'Sim', true],
  ];
  for (const [id, capacity, discharge, dualDoser] of models) {
    const product = resolveProduct(trevisanLinhaTms, id);
    const specs = new Map(product.content.specifications.map(item => [item.id, item]));
    assert.equal(specs.get('capacidade-tratamento').value, capacity);
    assert.equal(specs.get('descarga-plantadeira').value, discharge);
    assert.equal(specs.get('garantia').value, '1 ano');
    assert.equal(specs.has('opcional-dosador-duplo'), dualDoser);
    assert.equal(specs.has('opcional-motoredutor'), id === 'tms-650');
    assert.equal(specs.has('aplicacao-calda'), id === 'tms-350');
    const options = product.content.specifications.filter(item => item.group === 'Opcionais');
    assert.equal(options.length > 0, id !== 'tms-350');
    assert.ok(options.every(item => /opciona(?:l|is)/i.test(item.value) && item.value.includes('não incluso')));
    assert.deepEqual(product.content.steps, trevisanLinhaTms.content.steps);
    assert.deepEqual(product.content.media, []);
  }
});
test('invalid references, duplicates and incomplete publication fail closed', () => {
  const input = data();
  input.families[0].status = 'published';
  input.families[0].brandId = 'missing';
  input.families.push(structuredClone(input.families[0]));
  assert.ok(validateCatalog(input).length >= 5);
  assert.throws(() => createCatalogQueries(input));
});
test('published fixture is queryable, independent of priority/featured; internal extras excluded', () => {
  const input = data();
  const family = input.families[0];
  family.status = 'published'; family.priority = 'P2'; family.featured = true;
  family.content = { summary: 'Test fixture only', benefits: [{ title: 'Test' }], specifications: ['a','b','c'].map(id => ({ id, label: id, value: 'test' })), highlightSpecIds: ['a','b','c'], media: [{ id: 'photo', type: 'image', src: '/test-only.jpg', description: 'Test', origin: 'top-agro' }], primaryImageId: 'photo' };
  family.internalNotes = 'PRIVATE'; family.content.cost = 123;
  family.related = [{ familyId: metalAgroMiniFabrica.id, type: 'complementary' }];
  const queries = createCatalogQueries(input);
  assert.equal(queries.listProducts({ featured: true }).length, 1);
  assert.equal(queries.listRoutes().length, 1);
  assert.equal(queries.getByRoute(categories[0].slug, family.slug).id, family.id);
  assert.deepEqual(queries.getRelated(family.id), []);
  assert.deepEqual(queries.getProduct(family.id).related, []);
  assert.deepEqual(queries.listProducts()[0].related, []);
  assert.deepEqual(queries.getByRoute(categories[0].slug, family.slug).related, []);
  assert.equal(JSON.stringify(queries.getProduct(family.id)).includes('PRIVATE'), false);
  assert.equal(queries.getProduct(family.id).content.cost, undefined);
  queries.getProduct(family.id).name = 'mutated';
  assert.equal(queries.getProduct(family.id).name, family.name);
});

test('duplicate highlights and commercial relations are rejected', () => {
  const input = data();
  input.families[1].content.highlightSpecIds = ['producao', 'producao'];
  input.families[0].related = Array.from({ length: 2 }, () => ({ familyId: input.families[1].id, type: 'complementary' }));
  assert.ok(validateCatalog(input).some(error => error.includes('.highlights')));
  assert.ok(validateCatalog(input).some(error => error.includes('.related')));
  assert.throws(() => createCatalogQueries(input));
});
