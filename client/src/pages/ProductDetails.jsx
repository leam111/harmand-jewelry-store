import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowLeft, Gem } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { localizedName, localizedDescription } from '../utils/localize';
import { categoryLabel } from '../utils/siteText';
import ProductCard from '../components/ProductCard';

const T = {
  en: {
    back: 'Back',
    loading: 'Loading...',
    enquire: 'Enquire About This Piece',
    category: 'Category',
    craftsmanship: 'Craftsmanship',
    craftsmanshipValue: 'Hand-set by our atelier',
    youMayAlsoLike: 'You May Also Like',
    home: 'Home',
  },
  fr: {
    back: 'Retour',
    loading: 'Chargement...',
    enquire: 'Nous Contacter',
    category: 'Catégorie',
    craftsmanship: 'Savoir-Faire',
    craftsmanshipValue: 'Serti à la main dans notre atelier',
    youMayAlsoLike: 'Vous Aimerez Aussi',
    home: 'Accueil',
  },
};

export default function ProductDetails() {
  const { id } = useParams();
  const { lang } = useLanguage();
  const t = T[lang];
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          setProduct(data);
        }
      })
      .catch(() => setError('Something went wrong'));
  }, [id]);

  useEffect(() => {
    if (!product) return;
    fetch('http://localhost:5000/api/products')
      .then((res) => res.json())
      .then((data) => {
        const others = data
          .filter((p) => p.category === product.category && p._id !== product._id)
          .slice(0, 4);
        setRelated(others);
      })
      .catch(() => {});
  }, [product]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
        <p className="text-white/50 text-sm">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
        <p className="text-white/30 text-sm">{t.loading}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-20" style={{ backgroundColor: '#0a0a0a' }}>

      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-10">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]" style={{ color: '#6b6047' }}>
          <Link to="/" className="hover:text-[#A1761D] transition-colors">{t.home}</Link>
          <span>/</span>
          <Link to={`/collection?category=${encodeURIComponent(product.category)}`} className="hover:text-[#A1761D] transition-colors">
            {categoryLabel(product.category, lang)}
          </Link>
          <span>/</span>
          <span style={{ color: '#A1761D' }}>{localizedName(product, lang)}</span>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full border" style={{ borderColor: 'rgba(161,118,29,0.3)' }} />
            <div className="relative w-full aspect-square overflow-hidden" style={{ background: '#111111', border: '1px solid rgba(161,118,29,0.2)' }}>
              {product.imageUrl && (
                <img src={product.imageUrl} alt={localizedName(product, lang)} className="w-full h-full object-cover" />
              )}
              <div className="absolute top-4 left-4 w-6 h-6" style={{ borderTop: '1px solid #A1761D', borderLeft: '1px solid #A1761D', opacity: 0.6 }} />
              <div className="absolute top-4 right-4 w-6 h-6" style={{ borderTop: '1px solid #A1761D', borderRight: '1px solid #A1761D', opacity: 0.6 }} />
              <div className="absolute bottom-4 left-4 w-6 h-6" style={{ borderBottom: '1px solid #A1761D', borderLeft: '1px solid #A1761D', opacity: 0.6 }} />
              <div className="absolute bottom-4 right-4 w-6 h-6" style={{ borderBottom: '1px solid #A1761D', borderRight: '1px solid #A1761D', opacity: 0.6 }} />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] uppercase tracking-[0.3em] mb-4" style={{ color: '#A1761D', fontFamily: "'Cormorant Garamond', serif" }}>
              Harmand
            </p>
            <h1
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#f5f0e8', letterSpacing: '0.03em' }}
              className="text-4xl md:text-5xl mb-2 leading-tight"
            >
              {localizedName(product, lang)}
            </h1>
            <div className="w-12 h-px mb-6" style={{ background: 'linear-gradient(to right, #A1761D, transparent)' }} />

            {localizedDescription(product, lang) && (
              <p className="text-white/50 text-sm leading-relaxed mb-8">{localizedDescription(product, lang)}</p>
            )}

            <div className="mb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex justify-between py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#6b6047' }}>{t.category}</span>
                <span className="text-xs" style={{ color: '#d4c9b0' }}>{categoryLabel(product.category, lang)}</span>
              </div>
              <div className="flex justify-between py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: '#6b6047' }}>{t.craftsmanship}</span>
                <span className="text-xs" style={{ color: '#d4c9b0' }}>{t.craftsmanshipValue}</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] uppercase tracking-[0.25em] w-fit"
              style={{ background: '#A1761D', color: '#0a0a0a' }}
            >
              <Phone size={14} /> {t.enquire}
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mt-24">
          <div className="flex items-center gap-4 mb-10">
            <Gem size={16} style={{ color: '#A1761D' }} />
            <h2 className="text-xs uppercase tracking-[0.3em]" style={{ fontFamily: "'Cormorant Garamond', serif", color: '#A1761D' }}>
              {t.youMayAlsoLike}
            </h2>
            <div className="flex-1 h-px" style={{ background: 'rgba(161,118,29,0.2)' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">            {related.map((p) => (
              <ProductCard
                key={p._id}
                id={p._id}
                image={p.imageUrl}
                name={localizedName(p, lang)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}