import { useEffect, useRef } from "react";
import contactImg from "../assets/image.png";
import { useLanguage } from "../context/LanguageContext";

const GoldLineH = ({ className = "" }) => (
  <div
    className={`h-px ${className}`}
    style={{ background: "linear-gradient(to right, transparent, #c9a96e, transparent)" }}
  />
);

function useFadeIn(delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          obs.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return {
    ref,
    style: {
      opacity: 0,
      transform: "translateY(24px)",
      transition: "opacity 0.9s ease, transform 0.9s ease",
    },
  };
}

const AddressIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-4-4-7-7.5-7-11a7 7 0 0 1 14 0c0 3.5-3 7-7 11z"/>
    <circle cx="12" cy="10" r="2.5"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9 9.9A16 16 0 0 0 14.1 15l1.5-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9z"/>
  </svg>
);

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m2 7 10 7 10-7"/>
  </svg>
);

function ContactRow({ icon, label, value, delay }) {
  const fade = useFadeIn(delay);
  return (
    <div ref={fade.ref} style={fade.style}>
      <div className="flex items-center gap-4">
        <div
          className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full"
          style={{ border: "1px solid rgba(201,169,110,0.35)", background: "rgba(201,169,110,0.07)" }}
        >
          {icon}
        </div>
        <div>
          <p className="uppercase tracking-[0.28em] mb-0.5" style={{ color: "#c9a96e", fontFamily: "'Tenor Sans', sans-serif", fontSize: "0.58rem" }}>
            {label}
          </p>
          <p className="font-light leading-snug" style={{ color: "#e5e7eb", fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem" }}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

const T = {
  en: {
    tag: "✦ Contact Us",
    heading1: "Contact",
    heading2: "Us",
    intro: "We welcome every inquiry with the same devotion we bring to our craft.",
    introLong: "We welcome every inquiry with the same devotion we bring to our craft. Reach out and let us guide you to your perfect piece.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    maison: "Maison Harmand · Since 2023",
  },
  fr: {
    tag: "✦ Nous Contacter",
    heading1: "Nous",
    heading2: "Contacter",
    intro: "Nous accueillons chaque demande avec la même passion que nous mettons dans notre art.",
    introLong: "Nous accueillons chaque demande avec la même passion que nous mettons dans notre art. Contactez-nous et laissez-nous vous guider vers la pièce parfaite.",
    addressLabel: "Adresse",
    phoneLabel: "Téléphone",
    emailLabel: "Email",
    maison: "Maison Harmand · Depuis 2023",
  },
};

export default function Contact() {
  const { lang } = useLanguage();
  const t = T[lang];
  const imgRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imgRef.current) imgRef.current.style.transform = "scale(1.06)";
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const headFade = useFadeIn(200);
  const infoFade = useFadeIn(400);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Tenor+Sans&display=swap');

        .contact-grain::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 100;
          opacity: 0.35;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
        }

        .corner-tl { position: absolute; top: 12px; left: 12px; width: 18px; height: 18px; border-top: 1px solid rgba(201,169,110,0.5); border-left: 1px solid rgba(201,169,110,0.5); }
        .corner-tr { position: absolute; top: 12px; right: 12px; width: 18px; height: 18px; border-top: 1px solid rgba(201,169,110,0.5); border-right: 1px solid rgba(201,169,110,0.5); }
        .corner-bl { position: absolute; bottom: 12px; left: 12px; width: 18px; height: 18px; border-bottom: 1px solid rgba(201,169,110,0.5); border-left: 1px solid rgba(201,169,110,0.5); }
        .corner-br { position: absolute; bottom: 12px; right: 12px; width: 18px; height: 18px; border-bottom: 1px solid rgba(201,169,110,0.5); border-right: 1px solid rgba(201,169,110,0.5); }
      `}</style>

      <div className="contact-grain min-h-screen" style={{ backgroundColor: "#0d0d0d", color: "#f5f0e8" }}>

        {/* MOBILE */}
        <div className="lg:hidden relative min-h-screen flex flex-col">
          <img
            ref={imgRef}
            src={contactImg}
            alt="Harmand Jewellery"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "60% top", filter: "brightness(0.88) contrast(1.06) saturate(0.85)", transition: "transform 10s ease" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.55) 0%, rgba(13,13,13,0.1) 25%, transparent 45%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.92) 35%, rgba(13,13,13,0.4) 60%, transparent 80%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(13,13,13,0.3) 0%, transparent 60%)" }} />

          <div className="relative z-10 mt-auto px-6 pb-14 pt-32">
            <div ref={headFade.ref} style={headFade.style}>
              <h1 className="font-light leading-none mt-5 mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 9vw, 3rem)", color: "#f5f0e8" }}>
                {t.heading1}
              </h1>
              <h1 className="font-light leading-none mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 9vw, 3rem)", color: "#e8d5a3", fontStyle: "italic" }}>
                {t.heading2}
              </h1>
              <p className="text-xs leading-loose mb-8 max-w-xs" style={{ color: "rgba(209,213,219,0.75)", fontFamily: "'Tenor Sans', sans-serif" }}>
                {t.intro}
              </p>
              <div className="flex items-center gap-3 mb-5">
                <GoldLineH className="w-6" />
                <span className="uppercase tracking-[0.4em]" style={{ color: "#c9a96e", fontFamily: "'Tenor Sans', sans-serif", fontSize: "0.6rem" }}>
                  {t.tag}
                </span>
                <GoldLineH className="flex-1" />
              </div>
            </div>

            <div
              ref={infoFade.ref}
              style={{ ...infoFade.style, background: "rgba(13,13,13,0.55)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", border: "1px solid rgba(201,169,110,0.18)", position: "relative" }}
              className="p-6"
            >
              <div className="corner-tl" /><div className="corner-tr" /><div className="corner-bl" /><div className="corner-br" />
              <div className="flex flex-col gap-6">
                <ContactRow icon={<AddressIcon />} label={t.addressLabel} value="4, Rue de la Michodière — 75002 Paris" delay={500} />
                <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />
                <ContactRow icon={<PhoneIcon />} label={t.phoneLabel} value="06.34.47.45.17" delay={580} />
                <ContactRow icon={<PhoneIcon />} label={t.phoneLabel} value="01.70.60.76.56" delay={650} />
                <div style={{ height: "1px", background: "rgba(201,169,110,0.12)" }} />
                <ContactRow icon={<EmailIcon />} label={t.emailLabel} value="contact@atelier-harmand.fr" delay={720} />
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mt-8">
              <GoldLineH className="w-8" />
              <span className="uppercase tracking-[0.4em]" style={{ color: "rgba(201,169,110,0.4)", fontFamily: "'Tenor Sans', sans-serif", fontSize: "0.55rem" }}>
                {t.maison}
              </span>
              <GoldLineH className="w-8" />
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <section className="hidden lg:flex flex-row min-h-screen">
          <div className="relative w-1/2 overflow-hidden">
            <img
              src={contactImg}
              alt="Harmand Jewellery"
              className="absolute inset-0 w-full h-full object-cover object-bottom"
              style={{ top: "160px", filter: "brightness(0.92) contrast(1.08) saturate(0.88)", transition: "transform 9s ease" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.35) 0%, transparent 40%, rgba(13,13,13,0.15) 100%)" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 55%, rgba(13,13,13,0.7))" }} />
            <div className="absolute bottom-12 left-10 flex items-center gap-3" style={{ opacity: 0.7 }}>
              <GoldLineH className="w-8" />
              <span className="uppercase tracking-[0.4em]" style={{ color: "#c9a96e", fontFamily: "'Tenor Sans', sans-serif", fontSize: "0.6rem" }}>
                {t.maison}
              </span>
            </div>
          </div>

          <div className="relative w-1/2 flex flex-col justify-center px-14 xl:px-24 py-32">
            <h1 className="font-light leading-tight mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem,5.5vw,4.5rem)", color: "#f5f0e8" }}>
              {t.heading1}<br />
              <em style={{ color: "#e8d5a3" }}>{t.heading2}</em>
            </h1>
            <GoldLineH className="w-20 mb-8" />
            <p className="text-xs leading-loose mb-12 max-w-sm" style={{ color: "#9ca3af", fontFamily: "'Tenor Sans', sans-serif" }}>
              {t.introLong}
            </p>
            <div className="flex flex-col gap-7">
              <ContactRow icon={<AddressIcon />} label={t.addressLabel} value="4, Rue de la Michodière, 75002 Paris" delay={250} />
              <div style={{ height: "1px", background: "rgba(201,169,110,0.1)", marginLeft: "52px" }} />
              <ContactRow icon={<PhoneIcon />} label={t.phoneLabel} value="06.34.47.45.17" delay={350} />
              <ContactRow icon={<PhoneIcon />} label={t.phoneLabel} value="01.70.60.76.56" delay={400} />
              <div style={{ height: "1px", background: "rgba(201,169,110,0.1)", marginLeft: "52px" }} />
              <ContactRow icon={<EmailIcon />} label={t.emailLabel} value="contact@atelier-harmand.fr" delay={450} />
            </div>
          </div>
        </section>

        <GoldLineH className="w-full opacity-30" />
      </div>
    </>
  );
}