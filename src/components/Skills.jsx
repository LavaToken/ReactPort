import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import GhostNumber from './GhostNumber'

const skillRows = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'React Native', 'Node.js', 'Express'],
  },
  {
    label: 'Data',
    items: ['SQL', 'PostgreSQL', 'Google Analytics', 'Looker', 'A/B Testing', 'Excel'],
  },
  {
    label: 'Infra',
    items: ['Vercel', 'Firebase', 'Docker', 'Git'],
  },
  {
    label: 'Growth',
    items: ['Funnel Analysis', 'Retention Curves', 'Cohort Analysis', 'CAC/LTV'],
  },
  {
    label: 'APIs',
    items: ['REST', 'OpenAI', 'Google Earth Engine'],
  },
]

function Skills() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <GhostNumber value="03" speed={0.22} />
      <div className="grid">
        <div className="section-header">
          <span className="section-header__label">[ Stack ]</span>
          <span className="section-header__index">003 / 004</span>
        </div>

        <div className="skills__list reveal">
          {skillRows.map((row) => (
            <div key={row.label} className="skill-row">
              <span className="skill-row__label">{row.label}</span>
              <span className="skill-row__items">{row.items.join(', ')}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
