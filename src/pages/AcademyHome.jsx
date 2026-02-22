import "../styles/academy.css";

export default function AcademyHome() {
  const year = new Date().getFullYear();

  const modules = [
    { key: "intro",   title: "Intro",   desc: "Course map & learning outcomes", href: "/ppt/pharmacotherapy-01-intro.pptx" },
    { key: "pkpd",    title: "PK/PD",    desc: "Doseresponse & kinetics",       href: "/ppt/pharmacotherapy-02-pkpd.pptx" },
    { key: "abx",     title: "ABX",     desc: "Antimicrobials essentials",       href: "/ppt/pharmacotherapy-03-abx.pptx" },
    { key: "cvs",     title: "CVS",     desc: "Hypertension & heart failure",    href: "/ppt/pharmacotherapy-04-cvs.pptx" },
    { key: "dm",      title: "DM",      desc: "Diabetes therapeutics",           href: "/ppt/pharmacotherapy-05-dm.pptx" },
    { key: "resp",    title: "Resp",    desc: "Asthma/COPD approach",            href: "/ppt/pharmacotherapy-06-resp.pptx" },
    { key: "gi",      title: "GI",      desc: "Acid disorders & IBD",            href: "/ppt/pharmacotherapy-07-gi.pptx" },
    { key: "neuro",   title: "Neuro",   desc: "Pain & neuro therapeutics",       href: "/ppt/pharmacotherapy-08-neuro.pptx" },
    { key: "renal",   title: "Renal",   desc: "Renal dosing & safety",           href: "/ppt/pharmacotherapy-09-renal.pptx" },
    { key: "hep",     title: "Hep",     desc: "Hepatic impairment",              href: "/ppt/pharmacotherapy-10-hep.pptx" },
    { key: "heme",    title: "Heme",    desc: "Anticoagulation basics",          href: "/ppt/pharmacotherapy-11-heme.pptx" },
    { key: "onc",     title: "Onc",     desc: "Supportive oncology care",        href: "/ppt/pharmacotherapy-12-onc.pptx" },
    { key: "endo",    title: "Endo",    desc: "Thyroid & adrenal",               href: "/ppt/pharmacotherapy-13-endo.pptx" },
    { key: "toxico",  title: "Toxic",   desc: "Toxicology & antidotes",          href: "/ppt/pharmacotherapy-14-toxic.pptx" },
    { key: "cases",   title: "Cases",   desc: "Case-based decisions",            href: "/ppt/pharmacotherapy-15-cases.pptx" },
  ];

  const openPpt = (href, key) => {
    // Progress tracking (C)
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
    } catch { return 0; }
  })();

  return (
    <div className="acad">
      <header className="acadHero">
        <div className="acadHeroInner">
          <div className="acadId">
            <h1>Haitham Osama Abdelghaffar</h1>
            <h2>Teaching Assistant of Pharmacology</h2>
            <p>Faculty of Pharmacy  Al-Azhar University</p>

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
                onClick={() => { localStorage.removeItem("academy_done"); location.reload(); }}
                type="button"
              >
                Reset
              </button>
            </div>
          </div>

          <div className="acadLogo">
            <div className="logoCard" title="Al-Azhar University">
              <img src="/logos/alazhar.png" alt="Al-Azhar University" />
            </div>
          </div>
        </div>
      </header>

      <main className="acadMain">
        <section className="acadSection">
          <div className="secHead">
            <h3>Pharmacotherapy Modules</h3>
            <p>15 circular modules  each opens a professional PowerPoint deck</p>
          </div>

          <div className="ringGrid" role="list">
            {modules.map((m, idx) => (
              <button
                key={m.key}
                className={"ringBtn ringBtn--" + ((idx % 5) + 1)}
                onPointerDown={() => openPpt(m.href, m.key)}
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
            <p>Professional academic subdomain  portfolio + teaching + research direction</p>
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
        <p> {year}  Haitham Osama Abdelghaffar  Al-Azhar University</p>
      </footer>
    </div>
  );
}
