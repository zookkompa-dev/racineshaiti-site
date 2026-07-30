import React, { useState, useEffect } from "react";

const ACCENT = "#B8956A";
const ACCENT_LIGHT = "#D4C4A8";
const BG = "#FAFAF7";
const TEXT = "#1C1C1A";
const MUTED = "#8A8680";
const DIVIDER = "#E8E4DE";
const CARD_BG = "#FFFFFF";
const SAGE = "#8B9A7B";

const heroes = [
  { initials: "TL", name: "Toussaint Louverture", title: "Le précurseur", years: "1743 – 1803", desc: "Ancien esclave devenu général, il unifie l'île et rédige la première constitution. Capturé par Napoléon, il meurt au Fort de Joux." },
  { initials: "JD", name: "Jean-Jacques Dessalines", title: "Le fondateur", years: "1758 – 1806", desc: "C'est lui qui finit le travail. À la bataille de Vertières, le 18 novembre 1803, il brise définitivement l'armée française." },
  { initials: "HC", name: "Henri Christophe", title: "Le bâtisseur", years: "1767 – 1820", desc: "Roi du nord d'Haïti, il fait construire la Citadelle Laferrière — la plus grande forteresse des Amériques." },
  { initials: "CF", name: "Catherine Flon", title: "Celle qui coud le drapeau", years: "~1772 – ~1831", desc: "Le 18 mai 1803, à l'Arcahaie, elle assemble les bandes bleue et rouge du nouveau drapeau haïtien." }
];

const episodes = [
  { num: 1, title: "Ayiti avant Colomb", period: "Préhistoire – 1492", duration: "5:52", color: SAGE, desc: "Bien avant l'arrivée des Européens, l'île d'Hispaniola était le cœur d'une civilisation taïno organisée et spirituelle." },
  { num: 2, title: "Le choc de 1492", period: "1492 – 1697", duration: "5:44", color: "#9A7B6B", desc: "Ce qui commence le 5 décembre 1492 n'est pas une découverte. C'est une rencontre, puis une conquête." },
  { num: 3, title: "La perle des Antilles", period: "1697 – 1791", duration: "5:20", color: ACCENT, desc: "Saint-Domingue devient la colonie la plus riche du monde. Derrière le sucre et le champagne, l'esclavage." }
];

const culture = [
  { title: "Le vodou", desc: "Ni magie noire ni folklore : le vodou est une religion, née de la rencontre entre les spiritualités africaines et le catholicisme imposé par le Code noir." },
  { title: "La musique", desc: "Du rara des campagnes au kompa des dancings, la musique haïtienne raconte la fête et la résistance, souvent dans la même chanson." },
  { title: "La peinture naïve", desc: "Les fresques de Philomé Obin, les jungles de Préfète Duffaut — l'art haïtien a conquis les galeries du monde entier sans jamais quitter ses racines." },
  { title: "Le créole", desc: "Le kreyòl ayisyen n'est pas du français abîmé. C'est une langue à part entière, parlée par onze millions de personnes." }
];

const lieux = [
  { name: "Citadelle Laferrière", location: "Milot, Nord", desc: "La plus grande forteresse des Amériques, perchée à 900 mètres d'altitude. Construite par Henri Christophe entre 1805 et 1820." },
  { name: "Palais Sans-Souci", location: "Milot, Nord", desc: "La résidence royale d'Henri Christophe, inspirée de Versailles et de Potsdam. Ses ruines restent majestueuses après le séisme de 1842." },
  { name: "Bassin Bleu", location: "Jacmel, Sud-Est", desc: "Une série de bassins naturels d'eau turquoise nichés dans la montagne, reliés par des cascades." },
  { name: "Île-à-Vache", location: "Sud", desc: "Une île au large des Cayes, sans voiture, sans bruit, avec des plages de sable blanc et des cocotiers." }
];

const actualites = [
  { date: "Juillet 2026", tag: "Production", title: "Épisode 3 terminé : La perle des Antilles", text: "Le troisième volet de la série documentaire est en ligne. Cinq minutes vingt sur Saint-Domingue, le sucre, le Code noir." },
  { date: "Juillet 2026", tag: "Annonce", title: "Lancement de racineshaiti.com", text: "Le site compagnon de la chaîne Haïti Décryptée est en ligne. Tous les épisodes, les scripts téléchargeables, et des ressources." },
  { date: "Août 2026", tag: "En production", title: "Épisode 4 : La Révolution", text: "De Bois Caïman à l'indépendance. Treize ans de guerre, trois empires vaincus. Le prochain épisode est en cours d'écriture." }
];

const SectionTitle = ({ eyebrow, title, subtitle }) => (
  <div style={{ textAlign: "center", marginBottom: 64 }}>
    {eyebrow && <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, marginBottom: 16, fontWeight: 500 }}>{eyebrow}</div>}
    <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 40, fontWeight: 400, color: TEXT, margin: 0, lineHeight: 1.2 }}>{title}</h2>
    {subtitle && <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 16, color: MUTED, marginTop: 20, maxWidth: 560, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7, fontWeight: 300 }}>{subtitle}</p>}
  </div>
);

const Divider = () => <div style={{ width: 48, height: 1, background: ACCENT_LIGHT, margin: "96px auto" }} />;

const Hero = () => (
  <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "140px 32px 80px", background: BG, textAlign: "center" }}>
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: ACCENT, marginBottom: 32, fontWeight: 500 }}>Plateforme documentaire</div>
    <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 72, fontWeight: 400, color: TEXT, margin: 0, lineHeight: 1.05, letterSpacing: "-0.01em" }}>Racines Haïti</h1>
    <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, color: MUTED, marginTop: 24, fontWeight: 300, fontStyle: "italic", maxWidth: 480 }}>L'histoire d'Haïti, racontée depuis le début.</p>
    <div style={{ width: 1, height: 64, background: ACCENT_LIGHT, margin: "48px auto" }} />
    <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 15, color: MUTED, maxWidth: 520, lineHeight: 1.8, fontWeight: 300 }}>
      Avant Colomb, avant la France, avant l'indépendance — il y avait une île, un peuple, et une histoire que personne ne raconte. Épisode par épisode, siècle par siècle, des Taïnos jusqu'à aujourd'hui.
    </p>
    <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
      <button style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", background: TEXT, color: BG, border: "none", cursor: "pointer", fontWeight: 400 }}>Regarder les épisodes</button>
      <button style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", padding: "16px 40px", background: "transparent", color: TEXT, border: `1px solid ${DIVIDER}`, cursor: "pointer", fontWeight: 400 }}>Découvrir le projet</button>
    </div>
  </section>
);

const HeroesSection = () => (
  <section style={{ padding: "96px 32px", background: CARD_BG }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionTitle eyebrow="Les fondateurs" title="Ceux qui ont fait Haïti" subtitle="Quatre figures, un seul combat : prouver qu'un peuple asservi pouvait se libérer, fonder un État, et bâtir." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
        {heroes.map((h, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ width: 160, height: 200, margin: "0 auto 28px", background: `linear-gradient(145deg, ${DIVIDER}, ${BG})`, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2 }}>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 48, color: ACCENT_LIGHT, fontWeight: 300 }}>{h.initials}</span>
            </div>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: 8, fontWeight: 500 }}>{h.title}</div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, fontWeight: 400, color: TEXT, margin: "0 0 4px" }}>{h.name}</h3>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, color: MUTED, marginBottom: 16, fontWeight: 300 }}>{h.years}</div>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: MUTED, lineHeight: 1.75, fontWeight: 300 }}>{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EpisodesSection = () => (
  <section style={{ padding: "96px 32px", background: CARD_BG }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionTitle eyebrow="Épisodes" title="La série documentaire" subtitle="Chaque épisode couvre une époque. Chaque image est générée par IA à partir de recherches historiques. Chaque script est téléchargeable." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {episodes.map((ep, i) => (
          <div key={i} style={{ border: `1px solid ${DIVIDER}`, background: BG }}>
            <div style={{ height: 220, background: `linear-gradient(135deg, ${ep.color}22, ${ep.color}44)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 96, color: `${ep.color}33`, fontWeight: 300 }}>{ep.num}</span>
              <div style={{ position: "absolute", bottom: 16, right: 16, fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, color: MUTED, background: "rgba(255,255,255,0.85)", padding: "4px 12px", letterSpacing: "0.05em" }}>{ep.duration}</div>
            </div>
            <div style={{ padding: 32 }}>
              <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: 12, fontWeight: 500 }}>{ep.period}</div>
              <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 400, color: TEXT, margin: "0 0 16px" }}>{ep.title}</h3>
              <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, color: MUTED, lineHeight: 1.75, fontWeight: 300, margin: "0 0 24px" }}>{ep.desc}</p>
              <button style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", padding: "12px 28px", background: "transparent", color: TEXT, border: `1px solid ${DIVIDER}`, cursor: "pointer", fontWeight: 400 }}>Regarder</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CultureSection = () => (
  <section style={{ padding: "96px 32px", background: BG }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionTitle eyebrow="Culture & Patrimoine" title="Ce qui reste quand tout a été pris" subtitle="La culture haïtienne n'est pas un vestige. C'est une force vive, forgée dans la résistance et transmise par la parole, le rythme et la couleur." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 32 }}>
        {culture.map((item, i) => (
          <div key={i} style={{ padding: 40, background: CARD_BG, border: `1px solid ${DIVIDER}` }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 400, color: TEXT, margin: "0 0 16px" }}>{item.title}</h3>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, color: MUTED, lineHeight: 1.8, fontWeight: 300, margin: 0 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LieuxSection = () => (
  <section style={{ padding: "96px 32px", background: CARD_BG }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionTitle eyebrow="Lieux historiques & Tourisme culturel" title="L'île se visite aussi" subtitle="Haïti n'est pas qu'une histoire. C'est un territoire, avec des pierres, des rivières et des montagnes qui portent encore la trace de tout ce qui s'y est passé." />
      {lieux.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 48, marginBottom: i < lieux.length - 1 ? 48 : 0, paddingBottom: i < lieux.length - 1 ? 48 : 0, borderBottom: i < lieux.length - 1 ? `1px solid ${DIVIDER}` : "none", alignItems: "flex-start" }}>
          <div style={{ minWidth: 280, height: 180, background: `linear-gradient(135deg, ${SAGE}22, ${SAGE}44)`, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 2, flexShrink: 0 }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 18, color: SAGE, fontWeight: 300, fontStyle: "italic", opacity: 0.6 }}>Photo</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, marginBottom: 8, fontWeight: 500 }}>{item.location}</div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 24, fontWeight: 400, color: TEXT, margin: "0 0 12px" }}>{item.name}</h3>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, color: MUTED, lineHeight: 1.8, fontWeight: 300, margin: 0 }}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ActualitesSection = () => (
  <section style={{ padding: "96px 32px", background: BG }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <SectionTitle eyebrow="Actualités" title="Ce qui se passe" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {actualites.map((item, i) => (
          <div key={i} style={{ padding: 36, background: CARD_BG, border: `1px solid ${DIVIDER}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, color: MUTED, fontWeight: 300 }}>{item.date}</span>
              <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: ACCENT, fontWeight: 500, background: `${ACCENT}11`, padding: "4px 10px" }}>{item.tag}</span>
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, fontWeight: 400, color: TEXT, margin: "0 0 14px", lineHeight: 1.3 }}>{item.title}</h3>
            <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: MUTED, lineHeight: 1.75, fontWeight: 300, margin: 0 }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const newErrors = {};
    if (!email?.trim()) {
      newErrors.email = "Email requis";
      return newErrors;
    }
    if (email.length > 254) {
      newErrors.email = "Email trop long (max 254 caractères)";
      return newErrors;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Format email invalide";
      return newErrors;
    }
    if (/[<>\"'%;()&+]/.test(email)) {
      newErrors.email = "Caractères non autorisés";
      return newErrors;
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setEmail(value);
    if (value && value.length > 0) {
      const errs = validateEmail(value);
      setErrors(errs);
    } else {
      setErrors({});
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateEmail(email);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setSuccess(true);
      setEmail("");
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }, 1000);
  };

  return (
    <section style={{ padding: "96px 32px", background: BG }}>
      <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
        <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT, marginBottom: 16, fontWeight: 500 }}>Newsletter</div>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 32, fontWeight: 400, color: TEXT, margin: "0 0 16px" }}>Restez connectés aux racines</h2>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, color: MUTED, lineHeight: 1.7, fontWeight: 300, marginBottom: 32 }}>Nouveaux épisodes, coulisses de la production et repères historiques inédits. Un email par épisode, c'est tout.</p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", gap: 8 }}>
            <input type="email" placeholder="votre@email.com" value={email} onChange={handleChange} maxLength={254} style={{ flex: 1, fontFamily: "'Inter', system-ui, sans-serif", fontSize: 14, padding: "14px 20px", border: errors.email ? "2px solid #C4463A" : `1px solid ${DIVIDER}`, background: CARD_BG, outline: "none", color: TEXT }} />
            <button type="submit" disabled={loading || success} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", padding: "14px 28px", background: loading || success ? "#D4C4A8" : TEXT, color: BG, border: "none", cursor: "pointer", fontWeight: 400, whiteSpace: "nowrap" }}>
              {loading ? "..." : success ? "✓" : "S'inscrire"}
            </button>
          </div>
          {errors.email && <p style={{ color: "#C4463A", fontSize: 12, marginTop: 12, fontFamily: "'Inter', system-ui, sans-serif" }}>⚠️ {errors.email}</p>}
          {success && <p style={{ color: SAGE, fontSize: 12, marginTop: 12, fontFamily: "'Inter', system-ui, sans-serif" }}>✓ Inscrit avec succès!</p>}
        </form>
        <p style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, color: `${MUTED}99`, marginTop: 12, fontWeight: 300 }}>Pas de spam. Désinscription en un clic.</p>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer style={{ padding: "64px 32px 40px", background: TEXT }}>
    <div style={{ maxWidth: 1100, margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 48 }}>
        <div>
          <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, color: BG, letterSpacing: "0.05em", marginBottom: 8 }}>RACINES HAÏTI</div>
          <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 12, color: `${BG}66`, fontWeight: 300 }}>Un projet Haïti Décryptée</div>
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          <div>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: `${BG}44`, marginBottom: 16 }}>Navigation</div>
            {["Accueil", "Histoire", "Épisodes", "Culture", "Lieux"].map(s => (
              <div key={s} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: `${BG}88`, marginBottom: 10, fontWeight: 300, cursor: "pointer" }}>{s}</div>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: `${BG}44`, marginBottom: 16 }}>Ressources</div>
            {["Scripts", "Contact", "Mentions légales"].map(s => (
              <div key={s} style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 13, color: `${BG}88`, marginBottom: 10, fontWeight: 300, cursor: "pointer" }}>{s}</div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${BG}15`, paddingTop: 24, display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, color: `${BG}44`, fontWeight: 300 }}>© 2026 Racines Haïti. Tous droits réservés.</span>
        <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontSize: 11, color: `${BG}44`, fontWeight: 300 }}>contact@racineshaiti.com</span>
      </div>
    </div>
  </footer>
);

export default function RacinesHaiti() {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />
      <Hero />
      <Divider />
      <HeroesSection />
      <Divider />
      <EpisodesSection />
      <Divider />
      <CultureSection />
      <Divider />
      <LieuxSection />
      <Divider />
      <ActualitesSection />
      <Newsletter />
      <Footer />
    </div>
  );
}
