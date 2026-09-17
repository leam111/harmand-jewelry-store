import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { NAV_LABELS } from "../utils/siteText";
import logo from "../assets/harmand-logo.png";

const NAV_LINKS = [
  { key: "home",       path: "/"           },
  { key: "collection", path: "/collection" },
  { key: "about",      path: "/about"      },
  { key: "contact",    path: "/contact"    },
];

const T = {
  en: {
    tagline: "More than two decades of gemstone-setting mastery, brought to the heart of Paris.",
    pages: "Pages",
    contact: "Contact",
    rights: "All rights reserved.",
    note: "Catalogue only · No online payment",
  },
  fr: {
    tagline: "Plus de vingt ans de maîtrise en sertissage de pierres précieuses, au cœur de Paris.",
    pages: "Pages",
    contact: "Contact",
    rights: "Tous droits réservés.",
    note: "Catalogue uniquement · Pas de paiement en ligne",
  },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = T[lang];

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #2a2a2a' }} className="px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div>
          <img src={logo} alt="Harmand" className="h-12 w-auto mb-5" />
          <p className="text-xs leading-6 max-w-xs" style={{ color: '#7a7060' }}>
            {t.tagline}
          </p>
        </div>

        {/* Pages */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>
            {t.pages}
          </p>
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map(({ key, path }) => (
              <button
                key={key}
                onClick={() => handleNav(path)}
                className="text-left text-xs tracking-[0.15em] uppercase transition-colors duration-300"
                style={{ color: '#7a7060', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#c9a84c'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#7a7060'}
              >
                {NAV_LABELS[lang][key]}
              </button>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>
            {t.contact}
          </p>
          <div className="flex flex-col gap-2 text-xs" style={{ color: '#7a7060' }}>
            <p>4, Rue de la Michodière</p>
            <p>75002 Paris</p>
            <p className="mt-1">contact@atelier-harmand.fr</p>
            <p>06.34.47.45.17</p>
            <p>01.70.60.76.56</p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderTop: '1px solid #2a2a2a' }}>
        <p className="text-xs tracking-wider" style={{ color: '#2a2a2a' }}>
          © {year} Harmand. {t.rights}
        </p>
        <p className="text-xs" style={{ color: '#2a2a2a' }}>
          {t.note}
        </p>
      </div>
    </footer>
  );
}