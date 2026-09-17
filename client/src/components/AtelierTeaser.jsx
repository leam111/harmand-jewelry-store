import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const T = {
  en: {
    eyebrow: 'Our Atelier',
    heading: 'Twenty Years of Mastery',
    text: "Founded in 2023 by Barouyr Harmandayan, a gemstone-setting expert with over twenty years of experience in haute joaillerie, Harmand brings together traditional craftsmanship and modern precision — every piece set by hand, in the heart of Paris.",
    cta: 'Our Story',
    badge: 'Est. 2023',
    photoComingSoon: 'Photo coming soon',
  },
  fr: {
    eyebrow: 'Notre Atelier',
    heading: 'Vingt Ans de Maîtrise',
    text: "Fondée en 2023 par Barouyr Harmandayan, expert en sertissage de pierres précieuses avec plus de vingt ans d'expérience en haute joaillerie, la maison Harmand allie savoir-faire traditionnel et précision moderne — chaque pièce sertie à la main, au cœur de Paris.",
    cta: 'Notre Histoire',
    badge: 'Fondée en 2023',
    photoComingSoon: 'Photo à venir',
  },
};

export default function AtelierTeaser() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <section className="py-24 px-6" style={{ background: '#080808' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full border" style={{ borderColor: '#2a2a2a' }} />
          <div
            className="w-full h-[480px] relative z-10 flex items-center justify-center"
            style={{ background: '#1c1c1c', border: '1px dashed #2a2a2a' }}
          >
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: '#7a7060', fontFamily: "'Cinzel', serif" }}>
              {t.photoComingSoon}
            </p>
          </div>
          <div className="absolute bottom-6 right-6 z-20 px-5 py-3" style={{ background: '#101010', border: '1px solid rgba(201,168,76,0.3)' }}>
            <p className="text-xs tracking-[0.25em] uppercase" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>
              {t.badge}
            </p>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>
            {t.eyebrow}
          </p>
          <h2
            className="text-3xl md:text-4xl font-light mb-6 leading-snug"
            style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em', color: '#f5f0e8' }}
          >
            {t.heading}
          </h2>
          <p className="text-sm leading-7 mb-8" style={{ color: '#d4c9b0' }}>
            {t.text}
          </p>
          <Link
            to="/about"
            className="inline-block border text-xs tracking-[0.25em] uppercase px-8 py-3 transition-all duration-300"
            style={{ borderColor: '#c9a84c', color: '#c9a84c', fontFamily: "'Cinzel', serif" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#080808'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c'; }}
          >
            {t.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}