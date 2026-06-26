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
    title: 'Beaq',
    year: '2025',
    category: 'Mobile App · WIP',
    description:
      'A mobile app that lets users create groups of friends, track locations, and propose activities for the group to do together.',
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
    title: 'Digital Dice Game (FPGA)',
    year: '2024',
    category: 'Hardware · Verilog',
    description:
      'A fully functional 21-roll dice game on the Intel DE10-Lite FPGA, written in Verilog. Push-button input, seven-segment LED output, and finite state machines drive player turns, dice rolls, and win conditions. Includes hardware debouncing and clock division.',
    image: '/assets/fpgaupdater.png',
    techTags: ['Verilog', 'Quartus', 'DE10-Lite'],
    links: [],
  },
  {
    title: 'Breathing Monitor',
    year: '2024',
    category: 'Hardware · Arduino',
    description:
      'A device that helps users regulate their breathing using the 4-7-8 technique — supporting better sleep, lower stress, and respiratory health.',
    image: '/assets/BreathingMonitorImg.png',
    techTags: ['C++', 'Arduino UNO', 'Arduino IDE'],
    links: [],
    note: 'Demo in progress',
  },
  {
    title: 'Portfolio',
    year: '2026',
    category: 'Web · Personal',
    description: 'This site. React + Vite, no framework on top.',
    image: '/assets/portfolioImg(new).png',
    techTags: ['React', 'Vite', 'JSX'],
    links: [
      { url: 'https://github.com/LavaToken/ReactPort', label: 'Source' },
    ],
  },
  {
    title: 'AI Video Editing Clone',
    year: '2026',
    category: 'Web · Upcoming',
    description:
      'A tool that takes a user-uploaded clip plus a trending reference video and automatically edits the upload to match the trend style.',
    image: '/assets/portfolioImg(new).png',
    techTags: ['React', 'Vite', 'AI/ML'],
    links: [],
    note: 'In planning',
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
    <section id="projects" className="section section--dark" ref={sectionRef}>
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
                            <span style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--muted-on-dark)' }}>
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
