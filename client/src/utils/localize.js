export function localizedName(product, lang) {
  if (lang === 'fr' && product.nameFr) return product.nameFr;
  return product.name;
}

export function localizedDescription(product, lang) {
  if (lang === 'fr' && product.descriptionFr) return product.descriptionFr;
  return product.description;
}