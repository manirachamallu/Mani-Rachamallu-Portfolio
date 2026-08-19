import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Phone,
  X,
} from 'lucide-react';

const roles = ['Data Analyst', 'Product Analyst', 'Product Manager'];
const skillGroups = [
  { category: 'Analytics', items: ['SQL', 'Python', 'MS Excel', 'Power BI', 'Tableau', 'Google BigQuery'] },
  { category: 'Product', items: ['Product Analytics', 'Funnel Analysis', 'Cohort Analysis', 'A/B Testing', 'Product Metrics'] },
];
const projects = [
  {
    title: 'Smart Address Management System',
    desc: 'A temporary address feature for food delivery and e-commerce — lets users add a one-time delivery address without saving it to their address list.',
    tools: ['Product', 'UX'],
  },
  {
    title: 'Zepto Sales Analysis',
    desc: 'Analyzing sales, customers, products, and order performance to identify trends, top products, customer behavior, and key business insights.',
    tools: ['SQL', 'Python', 'Power BI'],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const githubUrl = 'https://github.com/manirachamallu';
  const linkedinUrl = 'https://www.linkedin.com/in/mani-rachamallu-096b83353/';
  const email = 'manirachamallu26@gmail.com';
  const phone = '7780672331';

  const downloadResume = () => {
    const resume = 'MANI RACHAMALLU\n\nData & Product Analytics Professional\n\nSkills: Python, SQL, Excel, Power BI, Tableau, Google BigQuery, Product Management\n\nContact: manirachamallu26@gmail.com\nGitHub: https://github.com/manirachamallu\nLinkedIn: https://www.linkedin.com/in/mani-rachamallu-096b83353/';
    const blob = new Blob([resume], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'MANI_RACHAMALLU_Resume1 (1).pdf';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Mani Rachamallu home">MR<span>.</span></a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      <section className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-label">Portfolio / 2026</div>
        <div className="hero-copy">
          <p className="eyebrow">Hello, I’m Mani Rachamallu</p>
          <h1>Insights<br /><em>into</em> Actions<span>.</span></h1>
          <p className="hero-intro">I turn complex questions into clear direction, useful products, and measurable momentum.</p>
        </div>
        <div className="hero-roles">
          {roles.map((role, index) => <span key={role}><b>0{index + 1}</b>{role}</span>)}
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={17} /></a>
      </section>

      <section className="about section-pad" id="about">
        <div className="section-kicker"><span>01</span><span>About me</span><span className="line" /></div>
        <div className="about-layout">
          <div className="portrait-wrap">
            <div className="portrait-frame"><img src="\mani.jpeg" alt="Mani Rachamallu" /></div>
            <div className="portrait-caption"><span>Based in</span><strong>India</strong></div>
          </div>
          <div className="about-copy">
            <p className="large-statement">I find the signal<br />inside the noise.</p>
            <p className="body-copy">I’m Mani Rachamallu, a Data & Product Analytics professional focused on turning data into actionable business insights. I use SQL, Python, Excel, Power BI, and Tableau to understand customer behavior, evaluate product performance, and support data-driven decisions.</p>
            <button className={`resume-toggle ${resumeOpen ? 'active' : ''}`} onClick={() => setResumeOpen(!resumeOpen)}>
              <span><Download size={16} /> Resume</span><span className="toggle-track"><span /></span>
            </button>
            {resumeOpen && <div className="resume-panel"><p>Grab a copy of my resume to review my background, tools, and projects in detail.</p><button onClick={downloadResume}>Download resume <ArrowDown size={14} /></button></div>}
          </div>
        </div>
      </section>

      <section className="work section-pad" id="work">
        <div className="section-kicker"><span>02</span><span>Selected work</span><span className="line" /></div>
        <div className="work-heading"><h2>Projects<br /><em>&</em> case studies<span>.</span></h2><p>A look at the analytics and product work I’ve been building. More on my GitHub.</p></div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-body">
                <p className="project-type">{project.tools.join(' · ')}</p>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
              </div>
              <a className="project-link" href={githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                <ArrowUpRight size={26} strokeWidth={1.4} />
              </a>
            </article>
          ))}
          <a className="project-more" href={githubUrl} target="_blank" rel="noreferrer">
            <span>More projects on GitHub</span><ArrowUpRight size={18} />
          </a>
        </div>
        <div className="work-tools">
          <div className="github-card">
            <div><Github size={23} /><span>Open source corner</span></div>
            <p>Explore my repositories — analytics projects, dashboards, and experiments in data and product.</p>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="saved-link">View GitHub <ArrowUpRight size={15} /></a>
          </div>
          <div className="skills-card">
            <div className="skills-title"><span>Toolbox</span><span>Skills</span></div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.category}>
                  <p className="skill-category">{group.category}</p>
                  <div className="skill-list">
                    {group.items.map((skill, index) => <span key={skill}><b>0{index + 1}</b>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <div className="section-kicker light"><span>03</span><span>Contact</span><span className="line" /></div>
        <div className="contact-content">
          <p className="eyebrow">Have a question or an idea?</p>
          <h2>Let’s make<br /><em>something</em> clear<span>.</span></h2>
          <p className="contact-sub">I’m open to data & product analytics roles, freelance projects, or just a good conversation about data. Reach out — I usually reply within a day.</p>
          <div className="contact-channels">
            {([
              { id: 'email', icon: <Mail size={20} />, label: 'Email', value: email, href: `mailto:${email}` },
              { id: 'phone', icon: <Phone size={20} />, label: 'Phone', value: `+91 ${phone}`, href: `tel:+91${phone}` },
            ] as const).map((c) => {
              const open = revealed[c.id];
              return (
                <a
                  key={c.id}
                  className={`channel ${open ? 'open' : ''}`}
                  href={open ? c.href : undefined}
                  aria-label={c.label}
                  onClick={(e) => { if (!open) { e.preventDefault(); setRevealed((r) => ({ ...r, [c.id]: true })); } }}
                >
                  <span className="channel-icon">{c.icon}</span>
                  <span className="channel-value">{c.value}</span>
                </a>
              );
            })}
            <a className="channel" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <span className="channel-icon"><Linkedin size={20} /></span>
            </a>
            <a className="channel" href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
              <span className="channel-icon"><Github size={20} /></span>
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <span>Mani Rachamallu</span>
          <span>© 2026</span>
        </div>
      </section>
    </main>
  );
}

export default App;
