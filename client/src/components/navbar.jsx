import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/harmand-logo.png";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react";
import { NAV_LABELS } from "../utils/siteText";
const NAV_LINKS = [
  { key: "home",       path: "/"           },
  { key: "collection", path: "/collection" },
  { key: "about",      path: "/about"      },
  { key: "contact",    path: "/contact"    },
];

function LangToggle({ className = "" }) {
  const { lang, setLang } = useLanguage();
  return (
    <div
      className={`flex items-center gap-1.5 px-2 py-1.5 ${className}`}
      style={{ border: '1px solid rgba(161,118,29,0.5)', borderRadius: '4px', background: 'rgba(161,118,29,0.06)' }}    >
      <Globe size={13} style={{ color: '#A1761D' }} />
      <button
        onClick={() => setLang("en")}
        className="text-xs tracking-[0.1em] uppercase px-2 py-1 rounded transition-colors font-semibold"
        style={{
          background: lang === "en" ? "#A1761D" : "transparent",
          color: lang === "en" ? "#0a0a0a" : "rgba(255,255,255,0.7)",
        }}
      >
        EN
      </button>
      <button
        onClick={() => setLang("fr")}
        className="text-xs tracking-[0.1em] uppercase px-2 py-1 rounded transition-colors font-semibold"
        style={{
          background: lang === "fr" ? "#A1761D" : "transparent",
          color: lang === "fr" ? "#0a0a0a" : "rgba(255,255,255,0.7)",
        }}
      >
        FR
      </button>
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const { lang } = useLanguage();

  return (
    <>
      <style>{`
        .gold-underline {
          position: relative;
        }
        .gold-underline::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #A1761D;
          transition: width 0.3s ease;
        }
        .gold-underline:hover::after { width: 100%; }

        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes navLinkIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .menu-open { animation: menuSlideDown 0.4s cubic-bezier(0.34,1.56,0.64,1) both; }

        .nav-link-item { animation: navLinkIn 0.35s ease both; }
        .nav-link-item:nth-child(1) { animation-delay: 0.08s; }
        .nav-link-item:nth-child(2) { animation-delay: 0.14s; }
        .nav-link-item:nth-child(3) { animation-delay: 0.20s; }
        .nav-link-item:nth-child(4) { animation-delay: 0.26s; }

        .bar {
          display: block;
          width: 22px;
          height: 1px;
          background: #A1761D;
          transition: all 0.35s cubic-bezier(0.76,0,0.24,1);
          transform-origin: center;
        }
        .bar-top-open { transform: translateY(5px) rotate(45deg); }
        .bar-mid-open { opacity: 0; transform: scaleX(0); }
        .bar-bot-open { transform: translateY(-5px) rotate(-45deg); }
      `}</style>

      <header className="absolute top-0 left-0 right-0 z-40">

        {/* Top gold rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A1761D]/40 to-transparent" />

        <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4 sm:py-5">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center no-underline">
            <img src={logo} alt="Harmand" className="h-9 sm:h-10 md:h-12 w-auto" />
          </Link>

                 {/* ── Desktop nav links ── */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className="gold-underline font-montserrat font-light text-white/50 hover:text-[#A1761D] transition-colors duration-300 text-[10px] tracking-[0.28em] uppercase no-underline"
              >
                {NAV_LABELS[lang][key]}
              </Link>
            ))}
          </nav>

          {/* ── Tablet nav links ── */}
          <nav className="hidden md:flex lg:hidden items-center gap-7">
            {NAV_LINKS.map(({ key, path }) => (
              <Link
                key={key}
                to={path}
                className="gold-underline font-montserrat font-light text-white/50 hover:text-[#A1761D] transition-colors duration-300 text-[9px] tracking-[0.25em] uppercase no-underline"
              >
                {NAV_LABELS[lang][key]}
              </Link>
            ))}
          </nav>

          {/* ── Language toggle (always visible) + Mobile hamburger ── */}
          <div className="flex items-center gap-4">
            <LangToggle />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col justify-center gap-[5px] p-2 -mr-2"
            >
              <span className={`bar ${menuOpen ? "bar-top-open" : ""}`} />
              <span className={`bar ${menuOpen ? "bar-mid-open" : ""}`} />
              <span className={`bar ${menuOpen ? "bar-bot-open" : ""}`} />
            </button>
          </div>

        </div>

        {/* Bottom gold rule */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A1761D]/25 to-transparent" />

        {/* ── Mobile dropdown ── */}
        {menuOpen && (
          <div className="menu-open md:hidden bg-black/90 backdrop-blur-sm border-b border-[#A1761D]/15">
            <div className="flex flex-col px-6 py-6 gap-1">
              {NAV_LINKS.map(({ key, path }, i) => (
                <Link
                  key={key}
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="nav-link-item font-montserrat font-light text-white/55 hover:text-[#A1761D] transition-colors duration-300 text-[10px] tracking-[0.3em] uppercase py-3 text-left border-b border-white/5 last:border-0 no-underline"
                >
                  <span className="text-[#A1761D]/30 mr-3 font-light">0{i + 1}</span>
                  {NAV_LABELS[lang][key]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}