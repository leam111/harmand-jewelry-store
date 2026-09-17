import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const T = {
  en: {
    code: '404',
    heading: 'Page Not Found',
    text: "The page you're looking for doesn't exist, or may have moved.",
    cta: 'Return Home',
  },
  fr: {
    code: '404',
    heading: 'Page Introuvable',
    text: "La page que vous recherchez n'existe pas, ou a peut-être été déplacée.",
    cta: "Retour à l'Accueil",
  },
};

export default function NotFound() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <p
        className="text-xs tracking-[0.35em] uppercase mb-4"
        style={{ fontFamily: "'Cinzel', serif", color: '#A1761D' }}
      >
        Harmand
      </p>
      <h1
        className="text-7xl md:text-9xl font-light mb-4"
        style={{ fontFamily: "'Cinzel', serif", color: '#f5f0e8', letterSpacing: '0.05em' }}
      >
        {t.code}
      </h1>
      <div className="w-16 h-px mb-6" style={{ background: 'linear-gradient(to right, transparent, #A1761D, transparent)' }} />
      <h2
        className="text-xl md:text-2xl mb-4"
        style={{ fontFamily: "'Cinzel', serif", color: '#A1761D', letterSpacing: '0.03em' }}
      >
        {t.heading}
      </h2>
      <p className="text-sm max-w-sm mb-10" style={{ color: '#7a7060' }}>
        {t.text}
      </p>
      <Link
        to="/"
        className="inline-block border px-8 py-3 text-[11px] uppercase tracking-[0.25em] transition-all duration-300"
        style={{ borderColor: '#A1761D', color: '#A1761D', fontFamily: "'Cinzel', serif" }}
        onMouseEnter={(e) => { e.currentTarget.style.background = '#A1761D'; e.currentTarget.style.color = '#0a0a0a'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#A1761D'; }}
      >
        {t.cta}
      </Link>
    </div>
  );
}