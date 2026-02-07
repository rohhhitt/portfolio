import { profile } from './data'
import './index.css'

import { useState } from 'react'

function openMailto(email) {
  const a = document.createElement('a')
  a.href = `mailto:${email}`
  a.rel = 'noopener noreferrer'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

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
              <a href={`#${id}`} className="nav-link" onClick={() => document.getElementById('nav-toggle')?.click()}>
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
  const [showEmail, setShowEmail] = useState(false)

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
            <button
              type="button"
              onClick={() => setShowEmail(true)}
              className="contact-card contact-card-masked"
            >
              <span className="contact-icon" aria-hidden>✉️</span>
              <span className="contact-label">Email</span>
              <span className="contact-value contact-value-masked">
                {showEmail ? contact.email : 'Click to reveal'}
              </span>
            </button>
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
            <a href={socials.leetcode} target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon" aria-hidden>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </span>
              <span className="contact-label">LeetCode</span>
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
          <button type="button" className="footer-link-btn" onClick={() => openMailto(contact.email)}>
            Email
          </button>
          <span className="footer-dot">·</span>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="footer-dot">·</span>
          <a href={socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <span className="footer-dot">·</span>
          <a href={socials.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
        </p>
      </footer>
    </div>
  )
}

export default App
