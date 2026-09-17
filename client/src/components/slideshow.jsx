import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./slideshow.css";

import l1 from '../assets/1.jpg'
import l2 from '../assets/2.jpg'
import l3 from '../assets/3.jpg'
import l4 from '../assets/4.jpg'
import l5 from '../assets/5.jpg'
import l6 from '../assets/6.jpg'

const slides = [
  {
    id: 1,
    image: l1,
    title: { en: "Touched by", fr: "Façonnée par" },
    subtitle: { en: "Gold", fr: "l'Or" },
    description: { en: "Rare. Eternal. Yours.", fr: "Rare. Éternelle. La Vôtre." },
    accentClass: "text-amber-200",
  },
  {
    id: 2,
    image: l2,
    title: { en: "Cut from", fr: "Taillée dans" },
    subtitle: { en: "Pure Light", fr: "la Pure Lumière" },
    description: { en: "Brilliance that outlasts time.", fr: "Un éclat qui traverse le temps." },
    accentClass: "text-sky-200",
  },
  {
    id: 3,
    image: l3,
    title: { en: "Crafted for", fr: "Créée pour" },
    subtitle: { en: "Forever", fr: "l'Éternité" },
    description: { en: "A piece. A promise. A legacy.", fr: "Une pièce. Une promesse. Un héritage." },
    accentClass: "text-rose-200",
  },
  {
    id: 4,
    image: l4,
    title: { en: "Born from", fr: "Née de" },
    subtitle: { en: "The Earth", fr: "la Terre" },
    description: { en: "Where luxury finds its form.", fr: "Là où le luxe prend forme." },
    accentClass: "text-emerald-900",
  },
  {
    id: 5,
    image: l5,
    title: { en: "Deep as", fr: "Profonde comme" },
    subtitle: { en: "The Ocean", fr: "l'Océan" },
    description: { en: "Colour so rare, it has no equal.", fr: "Une couleur si rare, elle n'a pas d'égale." },
    accentClass: "text-blue-300",
  },
  {
    id: 6,
    image: l6,
    title: { en: "Worn by", fr: "Portée par" },
    subtitle: { en: "Desire", fr: "le Désir" },
    description: { en: "The stone that speaks for itself.", fr: "La pierre qui parle d'elle-même." },
    accentClass: "text-red-300",
  },
];

const DURATION = 3000;

export default function Slideshow() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const currentRef = useRef(0);
  const transitioningRef = useRef(false);

  const goTo = (index) => {
    if (transitioningRef.current || index === currentRef.current) return;
    transitioningRef.current = true;
    setTransitioning(true);
    setPrev(currentRef.current);
    currentRef.current = index;
    setCurrent(index);
    setProgress(0);
    startTimeRef.current = performance.now();
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
      transitioningRef.current = false;
    }, 900);
  };

  useEffect(() => {
    startTimeRef.current = performance.now();
    const tick = (now) => {
      const elapsed = now - startTimeRef.current;
      const p = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        const nextIdx = (currentRef.current + 1) % slides.length;
        goTo(nextIdx);
      }
      progressRef.current = requestAnimationFrame(tick);
    };
    progressRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(progressRef.current);
  }, []);

  const slide = slides[current];
  const prevSlide = prev !== null ? slides[prev] : null;

  return (
    <div className="grain relative w-full h-screen min-h-[420px] overflow-hidden bg-black flex items-center justify-center">

      {prevSlide && (
        <div className="absolute inset-0">
          <div
            className="anim-exit-bg absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: `url(${prevSlide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
        </div>
      )}

      <div className="absolute inset-0">
        <div
          className={`${transitioning ? "anim-enter-bg" : ""} absolute inset-0 bg-cover bg-top`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-20 max-w-xl lg:max-w-2xl mr-auto">

        <div className="overflow-hidden mb-1">
          <span className={`${transitioning ? "anim-t1" : "opacity-100"} font-cormorant font-light text-white/70 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] block`}>
            {slide.title[lang]}
          </span>
        </div>

        <div className="overflow-hidden mb-6 sm:mb-8">
          <span className={`${transitioning ? "anim-t2" : "opacity-100"} font-cormorant italic font-light text-6xl sm:text-7xl lg:text-8xl xl:text-[6.5rem] leading-[0.88] block ${slide.accentClass}`}>
            {slide.subtitle[lang]}
          </span>
        </div>

        <div className={`${transitioning ? "anim-line" : "opacity-100"} w-8 h-px bg-white/15 mb-5 origin-left`} />

        <p className={`${transitioning ? "anim-desc" : "opacity-100"} font-montserrat font-extralight text-white/35 text-[10px] sm:text-[11px] leading-loose tracking-[0.2em] uppercase max-w-[220px]`}>
          {slide.description[lang]}
        </p>
      </div>

      <div className="hidden lg:flex absolute right-12 xl:right-16 top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4">
        <span className="font-montserrat font-extralight text-white/15 text-[7px] tracking-[0.35em] uppercase [writing-mode:vertical-rl]">
          {lang === 'en' ? 'Discover' : 'Découvrir'}
        </span>
        <div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />
      </div>


    </div>
  );
}