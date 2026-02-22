import "../styles/academy.css";

function AcademyLogoSvg() {
  return (
    <svg
      className="academyMark"
      viewBox="0 0 360 180"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="iPharmEGY Academy Logo"
      role="img"
    >
      <rect x="54" y="28" width="6" height="6" rx="1" fill="#00c853" />
      <rect x="46" y="42" width="6" height="6" rx="1" fill="#00c853" />
      <rect x="62" y="20" width="6" height="6" rx="1" fill="#00c853" />
      <circle cx="100" cy="72" r="40" fill="#1565c0" />
      <path d="M72 84 Q100 62 128 76" stroke="#00c853" strokeWidth="4" fill="none" />
      <path d="M74 104 Q100 96 126 104" stroke="#D4AF37" strokeWidth="3" fill="none" />
      <text x="150" y="86" fontFamily="Segoe UI" fontSize="36" fill="#1e40af">
        iPharm<tspan fill="#00c853">EGY</tspan>
      </text>
      <line x1="120" y1="120" x2="260" y2="120" stroke="#0b1220" strokeWidth="3" />
      <text x="170" y="150" fontFamily="Segoe UI" fontSize="22" fill="#0f172a">
        Academy
      </text>
    </svg>
  );
}

export default function AcademyHome() {
  const year = new Date().getFullYear();

  const modules = [
    { key: "cardio",       title: "Cardio",   desc: "Cardiology",               href: "/pharmacotherapy/Cardiology.html" },
    { key: "biostats",     title: "Biostats", desc: "Biostatistics",            href: "/pharmacotherapy/Biostatistics.html" },
    { key: "study",        title: "Study",    desc: "Study Design",             href: "/pharmacotherapy/StudyDesign.html" },
    { key: "immunization", title: "Immun",    desc: "Immunization",             href: "/pharmacotherapy/Immunization.html" },
    { key: "infectious",   title: "ID",       desc: "Infectious Diseases",      href: "/pharmacotherapy/InfectiousDiseases.html" },
    { key: "hiv",          title: "HIV",      desc: "HIV",                      href: "/pharmacotherapy/HIV.html" },
    { key: "peds",         title: "Peds",     desc: "Pediatrics",               href: "/pharmacotherapy/Pediatrics.html" },
    { key: "pulm",         title: "Pulm",     desc: "Pulmonary",                href: "/pharmacotherapy/Pulmonary.html" },
    { key: "sexual",       title: "SexHlth",  desc: "Sexual & Reproductive",    href: "/pharmacotherapy/SexualHealth.html" },
    { key: "onco",         title: "Onco",     desc: "Oncology Supportive Care", href: "/pharmacotherapy/OncologySupportiveCare.html" },
    { key: "neuro",        title: "Neuro",    desc: "Neurology",                href: "/pharmacotherapy/Neurology.html" },
    { key: "nephro",       title: "Nephro",   desc: "Nephrology",               href: "/pharmacotherapy/Nephrology.html" },
  ];

  const openModule = (href, key) => {
    try {
      const done = JSON.parse(localStorage.getItem("academy_done") || "{}");
      done[key] = { openedAt: new Date().toISOString() };
      localStorage.setItem("academy_done", JSON.stringify(done));
    } catch {}
    window.location.href = href;
  };

  const progressCount = (() => {
    try {
      const done = JSON.parse(localStorage.getItem("academy_done") || "{}");
      return Object.keys(done).length;
    } catch {
      return 0;
    }
  })();

  return (
    <div className="acad">
      <header className="acadHero">
        <div className="acadHeroInner">

          {/* ✅ Brand bar (Logo + title) */}
          <div className="brandBar">
            <div className="brandLeft">
              <div className="brandLogo" title="iPharmEGY Academy">
                <AcademyLogoSvg />
              </div>
              <div className="brandText">
                <div className="brandName">iPharmEGY Academy</div>
                <div className="brandTag">Pharmacotherapy • Clinical Pharmacology</div>
              </div>
            </div>

            <div className="brandRight">
              <div className="logoCard" title="Al-Azhar University">
                <img src="/logos/alazhar.png" alt="Al-Azhar University" />
              </div>
            </div>
          </div>

          <div className="acadId">
            <h1>Haitham Osama Abdelghaffar</h1>
            <h2>Teaching Assistant of Pharmacology</h2>
            <p>Faculty of Pharmacy • Al-Azhar University</p>

            <div className="acadMeta">
              <span className="chip">Pharmacotherapy</span>
              <span className="chip">Clinical Pharmacology</span>
              <span className="chip">Evidence-Based Therapeutics</span>
              <span className="chip">Drug Safety</span>
            </div>

            <div className="acadProgress" aria-label="Progress">
              <span className="progNum">{progressCount}</span>
              <span className="progTxt">Modules opened</span>
              <button
                className="ghostBtn"
                onClick={() => {
                  localStorage.removeItem("academy_done");
                  location.reload();
                }}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="acadMain">
        <section className="acadSection">
          <div className="secHead">
            <h3>Pharmacotherapy Modules</h3>
            <p>{modules.length} topic modules • each opens an embedded HTML page</p>
          </div>

          <div className="ringGrid" role="list">
            {modules.map((m, idx) => (
              <button
                key={m.key}
                className={"ringBtn ringBtn--" + ((idx % 5) + 1)}
                onClick={() => openModule(m.href, m.key)}
                type="button"
                role="listitem"
                aria-label={m.title}
                title={m.desc}
              >
                <div className="ringTitle">{m.title}</div>
                <div className="ringDesc">{m.desc}</div>
              </button>
            ))}
          </div>
        </section>

        <section className="acadSection">
          <div className="secHead">
            <h3>Academic Identity</h3>
            <p>Professional academic subdomain • portfolio + teaching + research direction</p>
          </div>

          <div className="twoCol">
            <div className="card">
              <h4>Teaching Portfolio</h4>
              <ul>
                <li>Integrated pharmacotherapy modules</li>
                <li>Mechanism-of-action visual systems</li>
                <li>Case-based therapeutic decisions</li>
                <li>Evidence-based algorithms</li>
              </ul>
            </div>

            <div className="card">
              <h4>Research Interests</h4>
              <ul>
                <li>Translational pharmacology</li>
                <li>Drug response optimization</li>
                <li>Rational therapeutics</li>
                <li>Clinical outcomes improvement</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="acadFooter">
        <p>{year} • Haitham Osama Abdelghaffar • Al-Azhar University</p>
      </footer>
    </div>
  );
}