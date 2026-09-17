export const NAV_LABELS = {
  en: { home: 'Home', collection: 'Collection', about: 'About Us', contact: 'Contact' },
  fr: { home: 'Accueil', collection: 'Collection', about: 'À Propos', contact: 'Contact' },
};

export const CATEGORY_LABELS = {
  en: { Rings: 'Rings', Necklaces: 'Necklaces', Bracelets: 'Bracelets', Earrings: 'Earrings' },
  fr: { Rings: 'Bagues', Necklaces: 'Colliers', Bracelets: 'Bracelets', Earrings: "Boucles d'Oreilles" },
};

export function categoryLabel(category, lang) {
  return CATEGORY_LABELS[lang]?.[category] || category;
}