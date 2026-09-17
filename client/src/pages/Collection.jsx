import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useLanguage } from '../context/LanguageContext';
import { localizedName } from '../utils/localize';
import { categoryLabel } from '../utils/siteText';

const T = {
  en: {
    heading: 'Our Collection',
    sub: "Every piece, in one place — filter by category to find what you're after.",
    all: 'All',
    empty: 'No products in this category yet.',
  },
  fr: {
    heading: 'Notre Collection',
    sub: 'Toutes nos pièces réunies — filtrez par catégorie pour trouver ce que vous cherchez.',
    all: 'Tout',
    empty: 'Aucun produit dans cette catégorie pour le moment.',
  },
};

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');
  const { lang } = useLanguage();
  const t = T[lang];

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log('Error:', err));
  }, []);

  const categories = ['All', ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#101010' }}>

      <div className="px-6 pt-28 sm:pt-36 pb-16 text-center" style={{ background: '#080808', borderBottom: '1px solid #2a2a2a' }}>
        <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#A1761D' }}>
          {t.eyebrow}
        </p>
        <h1 className="text-4xl md:text-6xl font-light mb-5" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.08em', color: '#f5f0e8' }}>
          {t.heading}
        </h1>
        <p className="text-sm max-w-md mx-auto" style={{ color: '#7a7060' }}>
          {t.sub}
        </p>
      </div>

      <div className="sticky top-0 z-30 px-6 py-4" style={{ background: '#101010', borderBottom: '1px solid #2a2a2a' }}>
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto no-scrollbar">          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="whitespace-nowrap text-xs tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-200"
              style={{
                fontFamily: "'Cinzel', serif",
                background: activeCategory === cat ? '#A1761D' : 'transparent',
                color: activeCategory === cat ? '#080808' : '#7a7060',
                borderColor: activeCategory === cat ? '#A1761D' : '#2a2a2a',
                fontWeight: activeCategory === cat ? 600 : 400,
              }}
            >
              {cat === 'All' ? t.all : categoryLabel(cat, lang)}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 py-16 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-sm" style={{ color: '#7a7060' }}>{t.empty}</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.imageUrl}
                name={localizedName(product, lang)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}