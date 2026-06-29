import React, { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import GhostNumber from './GhostNumber'

const projects = [
  {
    title: 'ClimateAware',
    year: '2025',
    category: 'Hackathon · Climate',
    description:
      "A website built for homeowners that tracks current and historical climate, disaster, and geographical data for any location and generates a detailed report on danger levels and preventative measures. Uses the OpenAI API for narrative reports. (API calls are currently inactive.)",
    image: '/assets/ClimateAwareImg.png',
    techTags: ['TypeScript', 'React', 'Firebase', 'OpenAI', 'Earth Engine'],
    links: [
      { url: 'https://hackdavis-2025.web.app/', label: 'Live' },
      { url: 'https://github.com/Orf1/hackdavis-2025/tree/main', label: 'Source' },
    ],
  },
  {
    title: 'LLM on Trolley Problems',
    year: '2025',
    category: 'Data Analytics · Ethical AI',
    description:
      "A research tool comparing how GPT, Claude, and Grok navigate ethical dilemmas — running all three models in parallel across 34 standardized trolley-problem scenarios. Built a 5-axis scoring system to score responses on ethical reasoning, generating 170+ structured data points for bias analysis. Full-stack pipeline (React + Node/Express) handles prompt orchestration, structured JSON output, and data export.",
    image: '/assets/trolleyProblemImg.png',
    techTags: ['React', 'Node.js', 'Express', 'GPT', 'Claude', 'Grok'],
    links: [
      { url: 'PLACEHOLDER', label: 'Source' },
    ],
  },
  {
    title: 'Steganography Web App',
    year: '2024',
    category: 'Full-Stack Web',
    description:
      'A website that hides messages inside images using steganography. Users upload an image and a message, get back a downloadable encoded image, and can extract messages from encoded uploads later.',
    image: '/assets/steganography-frontpage.png',
    techTags: ['TypeScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    links: [
      { url: 'https://steganography-delta.vercel.app/', label: 'Live' },
      { url: 'https://github.com/LavaToken/Steganography', label: 'Source' },
    ],
  },
  {
    title: 'Beaq',
    year: '2025',
    category: 'Mobile App · WIP',
    description:
      "A social app for coordinating spontaneous hangouts with friends — group creation, live location sharing, and AI-suggested activities based on group preferences. Built to explore how lightweight social friction (or the lack of it) affects whether plans actually happen.",
    image: '/assets/beaqLogo.png',
    techTags: ['TypeScript', 'React Native', 'Firebase', 'OpenAI', 'UI/UX'],
    links: [
      { url: 'https://github.com/LavaToken/FriendTracker', label: 'Source' },
    ],
  },
  {
    title: 'FE12 Dashboard',
    year: '2025',
    category: 'Embedded · Formula SAE',
    description:
      'Worked with the Formula Racing @ UC Davis team to develop the driver dashboard interface for the 2025 FE12 model. Including in-cockpit games (Tetris, Flappy Bird) for driver entertainment.',
    image: '/assets/frucdCarImg.png',
    techTags: ['C', 'STM32', 'STM32CubeIDE'],
    links: [
      { url: 'https://fsae.ucdavis.edu/', label: 'Team Site' },
    ],
  },
]

function Projects() {
  const sectionRef = useIntersectionObserver()
  const [openIndex, setOpenIndex] = useState(null)

  const handleRowClick = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  const handleKey = (e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleRowClick(i)
    }
  }

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <GhostNumber value="02" speed={0.22} />
      <div className="grid">
        <div className="section-header">
          <span className="section-header__label">[ Selected Work ]</span>
          <span className="section-header__index">002 / 005</span>
        </div>

        <div className="projects__list reveal">
          {projects.map((project, i) => {
            const isOpen = openIndex === i
            return (
              <article
                key={project.title}
                className={`project-row${i === 0 ? ' is-featured' : ''}${isOpen ? ' is-open' : ''}`}
                onClick={() => handleRowClick(i)}
                onKeyDown={(e) => handleKey(e, i)}
                tabIndex={0}
                role="button"
                aria-expanded={isOpen}
                aria-label={`${project.title} — click to ${isOpen ? 'collapse' : 'expand'}`}
              >
                <span className="project-row__index">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="project-row__title">{project.title}</h3>
                <span className="project-row__category">{project.category}</span>
                <span className="project-row__year">{project.year}</span>

                <div className="project-row__tags">
                  {project.techTags.join(' · ')}
                </div>

                <div className="project-row__panel" aria-hidden={!isOpen}>
                  <div className="project-row__panel-inner">
                    <div className="project-row__body">
                      <p className="project-row__desc">{project.description}</p>
                      {(project.links?.length > 0 || project.note) && (
                        <div className="project-row__links">
                          {project.links.map((link) => (
                            <a
                              key={link.url + link.label}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {link.label} ↗
                            </a>
                          ))}
                          {project.note && (
                            <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                              {project.note}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="project-row__image">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
