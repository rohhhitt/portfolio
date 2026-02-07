import { profile } from './data'
import './index.css'

const SECTION_IDS = [
  'contact',
  'about',
  'skills',
  'experience',
  'education',
  'certifications',
  'achievements',
]

const SECTION_LABELS = {
  contact: 'Contact',
  about: 'About',
  skills: 'Skills',
  experience: 'Experience',
  education: 'Education',
  certifications: 'Certifications',
  achievements: 'Achievements',
}

function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <input type="checkbox" id="nav-toggle" className="nav-checkbox" aria-hidden="true" />
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          {profile.name.split(' ')[0]}
        </a>
        <ul className="nav-links">
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="nav-link" onClick={() => { document.getElementById('nav-toggle')?.click() }}>
                {SECTION_LABELS[id]}
              </a>
            </li>
          ))}
        </ul>
        <label htmlFor="nav-toggle" className="nav-toggle" aria-label="Toggle menu">
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </label>
      </div>
    </nav>
  )
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

function App() {
  const { contact, socials, skills, experience, education, certifications, achievements } = profile

  return (
    <div className="app">
      <Nav />

      <header className="hero">
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>
        <p className="hero-location">{profile.location}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get in touch
          </a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            LinkedIn
          </a>
        </div>
      </header>

      <main className="main">
        <Section id="contact" title="Contact & Socials">
          <div className="contact-grid">
            <a href={`tel:${contact.phone}`} className="contact-card">
              <span className="contact-icon" aria-hidden>📞</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{contact.phone}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="contact-card">
              <span className="contact-icon" aria-hidden>✉️</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">{contact.email}</span>
            </a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon" aria-hidden>in</span>
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">rksinghkan</span>
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon contact-icon-gh" aria-hidden>⌘</span>
              <span className="contact-label">GitHub</span>
              <span className="contact-value">rohhhitt</span>
            </a>
          </div>
        </Section>

        <Section id="about" title="About">
          <p className="about-text">{profile.summary}</p>
        </Section>

        <Section id="skills" title="Core Skills">
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <ul className="skill-list">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" title="Professional Experience">
          <div className="experience-list">
            {experience.map((job, i) => (
              <article key={i} className="experience-item">
                <div className="experience-header">
                  <h3 className="experience-role">{job.role}</h3>
                  <p className="experience-company">
                    {job.company} · {job.location}
                  </p>
                  <p className="experience-period">{job.period}</p>
                </div>
                <ul className="experience-bullets">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="education-block">
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-school">{education.school}</p>
            <p className="education-year">{education.year}</p>
          </div>
        </Section>

        <Section id="certifications" title="Certifications & Awards">
          <ul className="cert-list">
            {certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </Section>

        <Section id="achievements" title="Achievements">
          <ul className="achievements-list">
            {achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Section>
      </main>

      <footer className="footer">
        <p>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span className="footer-dot">·</span>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="footer-dot">·</span>
          <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </footer>
    </div>
  )
}

export default App
