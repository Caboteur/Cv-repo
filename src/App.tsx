import { useRef } from "react";

const BODY = "'DM Sans', sans-serif";
const MONO = "'DM Mono', monospace";

async function downloadPDF(el: HTMLElement) {
  // @ts-expect-error no types
  const html2pdf = (await import("html2pdf.js")).default;
  html2pdf(el, {
    margin: [14, 16, 14, 16],
    filename: "Adrien_Blanchot_CV.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  });
}

export default function App() {
  const cvRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen text-[#1a1a1a]" style={{ fontFamily: BODY, backgroundColor: "#ffffff" }}>
      <button
        className="print-btn"
        onClick={() => cvRef.current && downloadPDF(cvRef.current)}
      >
        ↓ Télécharger PDF
      </button>
      <div ref={cvRef}>
      <div className="max-w-2xl mx-auto px-8 md:px-12" style={{ backgroundColor: "#ffffff", paddingTop: "28px" }}>

        {/* Header */}
        <header className="mb-10 border-t-4 border-b-4 pt-8 pb-8" style={{ borderColor: "#000dff", borderStyle: "solid" }}>
          <div className="flex items-start justify-between gap-4">
          <h1
            className="leading-none mb-4"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "40px",
              lineHeight: "var(--text-7xl--line-height, 1)",
              fontWeight: 700,
              color: "#000dff",
              letterSpacing: "4px",
            }}
          >
            Adrien<br />Blanchot
          </h1>
          <svg viewBox="0 0 80 120" width="47" height="70" className="shrink-0 mt-1" aria-hidden="true">
              <polygon points="55,0 80,0 25,120 0,120" fill="#000dff" />
            </svg>
          </div>
          <p className="text-[13px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a] mb-5" style={{ fontFamily: MONO }}>
            Designer UX
          </p>
          <div className="flex items-center justify-start flex-wrap gap-x-6 gap-y-1 text-[12px] text-[#555]" style={{ fontFamily: MONO }}>
            <span style={{ fontFamily: MONO }}>adblanchot@gmail.com</span>
            <span style={{ fontFamily: MONO }}>06 88 88 68 57</span>
            <span>Paris, France</span>
          </div>
        </header>

        {/* Profil */}
        <Section label="Profil">
          <p className="text-[13px] leading-6 text-[#444] font-light">
            Designer UX avec une double compétence en développement web, formé à Gobelins et à l'IIM Paris. Expérience en agence et en freelance sur des projets de design d'interface, de recherche utilisateur et de développement front-end.
          </p>
        </Section>

        {/* Expérience */}
        <Section label="Expérience professionnelle">
          <div className="space-y-8">
            <ExpItem role="UX Designer" company="Agence Indivisible" location="Paris" period="2021 — 2025"
              desc={[
                "UX Designer en alternance de 2021 à 2023, puis en poste de 2023 à 2025.",
                "Recherche utilisateur, conception d'interfaces, prototypage et tests utilisateurs.",
              ]}
            />
            <ExpItem role="Web Designer / Développeur" company="Freelance" location="" period="2018 — 2021"
              desc={["Conception et développement de sites web pour des clients variés."]}
            />
            <ExpItem role="Développeur Web" company="Brewster Studio" location="Paris 5ème" period="Mai — Nov. 2018"
              desc={["Développement web au sein d'un studio créatif parisien."]}
            />
            <ExpItem role="Service civique" company="AFEV — Maison de l'étudiant" location="La Rochelle" period="Fév. — Juil. 2016"
              desc={["Mission d'accompagnement et d'engagement citoyen auprès d'étudiants."]}
            />
          </div>
        </Section>

        {/* Formation */}
        <Section label="Études & Formations">
          <div className="space-y-5">
            <EduItem degree="Master Designer Interactif (alternance)" school="IIM — Institut de l'Internet et du Multimédia" location="Paris" year="2021 — 2023" />
            <EduItem degree="Formation Développeur & Designer Interactif" school="Gobelins, l'école de l'image" location="Paris 13ème" year="2017 — 2018" />
            <EduItem degree="Formation Développeur Fullstack" school="Simplon.co" location="" year="2016 — 2017" />
            <EduItem degree="DESRA — Diplôme de l'École Supérieure de Réalisation Audiovisuelle" school="ESRA" location="Paris 15ème" year="2014" />
            <EduItem degree="Baccalauréat ES, mention Assez Bien" school="Lycée Teilhard de Chardin" location="Saint-Maur-des-Fossés" year="2011" />
          </div>
        </Section>


        {/* Compétences */}
        <Section label="Compétences">
          <div className="space-y-3">
            {[
              { cat: "Design", items: "Figma, Maze, Adobe Premiere" },
              { cat: "Code", items: "JavaScript, HTML, CSS, Node.js, Nuxt.js" },
              { cat: "Méthodes UX", items: "Recherche utilisateur, Entretiens (quanti/quali), Tests utilisateurs, Personas, User Journey, User Flows, Wireframing, Prototypage, Architecture de l'information, Ateliers de co-conception, Design System" },
            ].map(({ cat, items }) => (
              <div key={cat} className="flex gap-3">
                <span className="w-28 shrink-0 text-[11px] tracking-[0.1em] uppercase text-[#999] pt-0.5" style={{ fontFamily: MONO }}>{cat}</span>
                <span className="text-[13px] leading-6 text-[#444] font-light">{items}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Langues */}
        <Section label="Langues">
          <div className="space-y-2">
            {[
              { lang: "Anglais", level: "Courant" },
              { lang: "Allemand", level: "Basique" },
              { lang: "Espagnol", level: "Basique" },
            ].map(({ lang, level }) => (
              <div key={lang} className="flex gap-3">
                <span className="w-28 shrink-0 text-[13px] text-[#444]">{lang}</span>
                <span className="text-[13px] text-[#888] font-light">{level}</span>
              </div>
            ))}
          </div>
        </Section>

      </div>
      </div>
    </div>
  );
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <p
        className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a] mb-4 pb-3 border-b border-[#e0e0e0]"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {label}
      </p>
      {children}
    </section>
  );
}

function ExpItem({ role, company, location, period, desc }: {
  role: string; company: string; location: string; period: string; desc: string[];
}) {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-baseline gap-2 mb-0.5">
        <h3 className="text-[14px] font-medium text-[#1a1a1a]">{role}</h3>
        <span className="text-[11px] text-[#bbb] shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{period}</span>
      </div>
      <p className="text-[11px] tracking-[0.08em] uppercase text-[#888] mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>
        {company}{location ? ` — ${location}` : ""}
      </p>
      <ul className="space-y-1">
        {desc.map((line, i) => (
          <li key={i} className="text-[13px] leading-6 text-[#555] font-light flex gap-2">
            <span className="text-[#ccc] shrink-0">—</span>
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EduItem({ degree, school, location, year }: {
  degree: string; school: string; location: string; year: string;
}) {
  return (
    <div>
      <div className="flex flex-wrap justify-between items-baseline gap-2">
        <p className="text-[14px] font-medium text-[#1a1a1a]">{degree}</p>
        <span className="text-[11px] text-[#bbb] shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>{year}</span>
      </div>
      <p className="text-[12px] text-[#888] mt-0.5">{school}{location ? ` — ${location}` : ""}</p>
    </div>
  );
}
