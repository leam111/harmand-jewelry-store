import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { categoryLabel } from '../utils/siteText';

const T = {
  en: {
    eyebrow: 'Catalogue',
    heading: 'Our Collections',
    sub: 'Each piece is shaped by hand — a testament to craft, heritage, and gold.',
    viewCollection: 'View Collection',
  },
  fr: {
    eyebrow: 'Catalogue',
    heading: 'Nos Collections',
    sub: "Chaque pièce est façonnée à la main — un témoignage de savoir-faire, d'héritage et d'or.",
    viewCollection: 'Voir la Collection',
  },
};

export default function CategoryBanner({ categories }) {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="py-24 px-6" style={{ background: '#101010' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#A1761D' }}>
            {t.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-light mb-5" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.06em', color: '#f5f0e8' }}>
            {t.heading}
          </h2>
          <p className="text-sm max-w-lg mx-auto leading-relaxed" style={{ color: '#7a7060' }}>
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.to}
              className="group relative overflow-hidden block aspect-[3/4]"
              style={{ background: '#1c1c1c' }}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-sm font-medium mb-3 tracking-[0.1em]" style={{ fontFamily: "'Cinzel', serif", color: '#f5f0e8' }}>
                  {categoryLabel(cat.name, lang)}
                </h3>
                <span className="text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#A1761D' }}>
                  {t.viewCollection} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}