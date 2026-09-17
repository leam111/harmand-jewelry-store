import { Gem, Sparkles, Target, Heart, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TECHNIQUES = {
  en: [
    { title: 'Serti Clos', desc: 'A metal edge fully surrounds the stone, offering excellent protection while giving it an elegant, contemporary finish.' },
    { title: 'Serti Rail', desc: 'Stones are set between two parallel metal rails, emphasizing their alignment and lustre — often used for rings and bracelets.' },
    { title: 'Serti Grain Descendu', desc: 'Stones are sunk slightly into the metal and held by small hammered beads, creating a smooth, raised sparkle ideal for delicate designs.' },
    { title: 'French-Cut Setting', desc: 'Precisely faceted square or rectangular stones are set for a sharp, sophisticated Art Deco-inspired finish.' },
    { title: 'Claw Setting', desc: 'A classic technique using small claws around the stone — a secure hold that still lets the gem catch the light freely.' },
    { title: 'Pavé / Snow Setting', desc: 'Small stones are set closely side by side, creating a continuous, shimmering surface of brilliance.' },
    { title: 'Baguette Setting', desc: "Baguette-cut stones are set edge to edge within precise channels, showcasing their elongated shape with a refined, linear finish." },
  ],
  fr: [
    { title: 'Serti Clos', desc: "Le serti clos entoure la pierre précieuse d'un bord métallique qui la maintient fermement en place tout en offrant une excellente protection contre les chocs et les dommages." },
    { title: 'Serti Rail', desc: "Les pierres précieuses sont placées entre deux rails métalliques parallèles qui les maintiennent fermement, mettant l'accent sur leur alignement et leur lustre." },
    { title: 'Serti Grain Descendu', desc: "Les pierres sont fixées en les enfonçant légèrement dans le métal, maintenues par de petites perles martelées, pour un éclat homogène et délicat." },
    { title: 'Serti French-Cut', desc: "Des pierres taillées avec des facettes nettes, souvent carrées ou rectangulaires, serties avec précision pour un éclat sophistiqué de style Art Déco." },
    { title: 'Sertissage à Griffes', desc: "Une méthode courante où des griffes entourent la pierre pour la maintenir en place, offrant un support solide tout en la laissant briller." },
    { title: 'Pavage / Neige', desc: "De petites pierres précieuses sont disposées côte à côte afin de créer un effet étincelant et continu." },
    { title: 'Sertissage de Baguette', desc: "Des pierres taillées en baguette sont serties côte à côte dans des rainures précises, mettant en valeur leur forme allongée et élégante." },
  ],
};

const T = {
  en: {
    heading: 'Our Story',
    tagline: "L'Art de la Perfection",
    foundedLabel: 'Founded in 2023',
    founderName: 'Barouyr Harmandayan',
    foundingText: "Harmand SARL was founded in 2023 by Barouyr Harmandayan, a gemstone-setting expert with over twenty years of experience in haute joaillerie. That depth of experience allows the atelier to understand and answer each client's needs precisely — producing pieces of exceptional quality that reflect their unique style.",
    visionTitle: 'Our Vision',
    visionText: 'To become a key name in gemstone setting, offering our clients nothing less than the highest standard of craftsmanship.',
    missionTitle: 'Our Mission',
    missionText: 'To deliver superior gemstone-setting services rooted in our core values: quality, integrity, and genuine care for every client.',
    statsYears: 'Years of Expertise',
    statsFounded: 'Founded',
    statsTechniques: 'Setting Techniques',
    expertiseLabel: 'Expertise',
    expertiseHeading: 'Portfolio of Setting Techniques',
    innovationHeading: 'Innovation & Technology',
    innovationText: 'We use cutting-edge technology to set precious stones — including 3D computer modeling, laser welding, and precision pneumatic engraving — improving the quality, precision, and efficiency behind every exceptional piece we create.',
    locationTitle: 'A Strategic Location',
    locationText: "We're privileged to sit at the heart of Paris's most prestigious haute joaillerie district, close to the industry's centers of creation and craftsmanship — keeping us connected to the finest names in the field, and accessible to our clients.",
    teamTitle: 'Our Team of Setters',
    teamText: 'Our gemstone setters are talented professionals with considerable expertise in their craft. Their passion for the work shows in every piece they create.',
    photoComingSoon: 'Photo coming soon',
  },
  fr: {
    heading: 'Notre Histoire',
    tagline: "L'Art de la Perfection",
    foundedLabel: 'Fondée en 2023',
    founderName: 'Barouyr Harmandayan',
    foundingText: "L'entreprise HARMAND SARL a été fondée en 2023 par Barouyr Harmandayan, un passionné de la haute joaillerie et expert en sertissage de pierres précieuses avec plus d'une vingtaine d'années d'expérience. Cette expertise nous permet de comprendre et de répondre aux besoins de nos clients en produisant des pièces de haute qualité qui reflètent leur style unique.",
    visionTitle: 'Notre Vision',
    visionText: "Devenir un acteur clé dans l'industrie du sertissage de pierres précieuses en offrant des services de haute qualité.",
    missionTitle: 'Notre Mission',
    missionText: "Fournir des services de sertissage de pierres précieuses de qualité supérieure en respectant nos valeurs clés de qualité, d'intégrité et de service à la clientèle.",
    statsYears: "Années d'Expertise",
    statsFounded: 'Fondation',
    statsTechniques: 'Techniques de Sertissage',
    expertiseLabel: 'Expertise',
    expertiseHeading: 'Portfolio de Services, Techniques & Expertise',
    innovationHeading: 'Innovations et Technologies Employées',
    innovationText: "Nous utilisons des technologies de pointe pour sertir les pierres précieuses, telles que la modélisation informatique en 3D, le soudage au laser et l'outil pneumatique de gravure GraverMax pour garantir une précision optimale.",
    locationTitle: 'Emplacement Stratégique',
    locationText: "Nous bénéficions d'un emplacement privilégié au sein des quartiers les plus prestigieux dédiés à la haute joaillerie, à proximité immédiate du centre de créations et de fabrication, au cœur de l'excellence joaillière parisienne.",
    teamTitle: 'Équipe de Sertisseurs de Pierres Précieuses',
    teamText: 'Notre équipe de sertisseurs de pierres précieuses est formée de professionnels talentueux qui possèdent une expertise considérable dans leur domaine. Leur passion pour leur travail se reflète dans chaque pièce qu\'ils créent.',
    photoComingSoon: 'Photo à venir',
  },
};

export default function About() {
  const { lang } = useLanguage();
  const t = T[lang];
  const techniques = TECHNIQUES[lang];

  return (
    <div style={{ backgroundColor: '#101010' }}>

      <div className="px-6 pt-28 sm:pt-36 pb-20 text-center" style={{ background: '#080808', borderBottom: '1px solid #2a2a2a' }}>
        <h1 className="text-4xl md:text-6xl font-light mb-5" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.08em', color: '#f5f0e8' }}>{t.heading}</h1>
        <p className="text-sm max-w-md mx-auto" style={{ color: '#7a7060' }}>{t.tagline}</p>
      </div>

      <section className="py-24 px-6" style={{ background: '#101010' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.35em] uppercase mb-6" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>{t.foundedLabel}</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 leading-snug" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em', color: '#f5f0e8' }}>{t.founderName}</h2>
            <p className="text-sm leading-7" style={{ color: '#d4c9b0' }}>{t.foundingText}</p>
          </div>
          <div className="w-full h-[400px] flex items-center justify-center" style={{ background: '#1c1c1c', border: '1px dashed #2a2a2a' }}>
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: '#7a7060', fontFamily: "'Cinzel', serif" }}>{t.photoComingSoon}</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#080808', borderTop: '1px solid #2a2a2a', borderBottom: '1px solid #2a2a2a' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>20+</p>
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: '#7a7060' }}>{t.statsYears}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>2023</p>
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: '#7a7060' }}>{t.statsFounded}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-light mb-2" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>7</p>
            <p className="text-xs tracking-[0.2em] uppercase" style={{ color: '#7a7060' }}>{t.statsTechniques}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#101010' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8" style={{ background: '#080808', border: '1px solid #2a2a2a' }}>
            <Target size={22} style={{ color: '#c9a84c' }} className="mb-5" />
            <h3 className="text-xl mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#f5f0e8', letterSpacing: '0.03em' }}>{t.visionTitle}</h3>
            <p className="text-sm leading-7" style={{ color: '#d4c9b0' }}>{t.visionText}</p>
          </div>
          <div className="p-8" style={{ background: '#080808', border: '1px solid #2a2a2a' }}>
            <Heart size={22} style={{ color: '#c9a84c' }} className="mb-5" />
            <h3 className="text-xl mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#f5f0e8', letterSpacing: '0.03em' }}>{t.missionTitle}</h3>
            <p className="text-sm leading-7" style={{ color: '#d4c9b0' }}>{t.missionText}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#080808' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#c9a84c' }}>{t.expertiseLabel}</p>
            <h2 className="text-3xl md:text-4xl font-light" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em', color: '#f5f0e8' }}>{t.expertiseHeading}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((tech) => (
              <div key={tech.title} className="p-6" style={{ background: '#101010', border: '1px solid #2a2a2a' }}>
                <Gem size={18} style={{ color: '#c9a84c' }} className="mb-4" />
                <h4 className="text-sm mb-3 tracking-[0.05em]" style={{ fontFamily: "'Cinzel', serif", color: '#f5f0e8' }}>{tech.title}</h4>
                <p className="text-xs leading-6" style={{ color: '#7a7060' }}>{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center" style={{ background: '#101010' }}>
        <div className="max-w-2xl mx-auto">
          <Sparkles size={22} style={{ color: '#c9a84c' }} className="mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: "'Cinzel', serif", letterSpacing: '0.05em', color: '#f5f0e8' }}>{t.innovationHeading}</h2>
          <p className="text-sm leading-7" style={{ color: '#d4c9b0' }}>{t.innovationText}</p>
        </div>
      </section>

      <section className="py-24 px-6" style={{ background: '#080808', borderTop: '1px solid #2a2a2a' }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <MapPin size={20} style={{ color: '#c9a84c' }} className="mb-4" />
            <h3 className="text-lg mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#f5f0e8', letterSpacing: '0.03em' }}>{t.locationTitle}</h3>
            <p className="text-sm leading-7" style={{ color: '#d4c9b0' }}>{t.locationText}</p>
          </div>
          <div>
            <Users size={20} style={{ color: '#c9a84c' }} className="mb-4" />
            <h3 className="text-lg mb-4" style={{ fontFamily: "'Cinzel', serif", color: '#f5f0e8', letterSpacing: '0.03em' }}>{t.teamTitle}</h3>
            <p className="text-sm leading-7" style={{ color: '#d4c9b0' }}>{t.teamText}</p>
          </div>
        </div>
      </section>

    </div>
  );
}