import { useLanguage } from '../context/LanguageContext';

export default function Marquee({ text }) {
  const { lang } = useLanguage();
  const content = text[lang];

  return (
    <div className="overflow-hidden py-3" style={{ background: '#c9a84c' }}>
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 22s linear infinite' }}>
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="text-xs tracking-[0.3em] uppercase mx-8"
            style={{ fontFamily: "'Cinzel', serif", color: '#080808' }}
          >
            {content}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}