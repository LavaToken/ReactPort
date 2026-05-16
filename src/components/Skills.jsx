import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const skillRows = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C', 'C++', 'Verilog'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'React Native', 'Vite', 'Node.js', 'Express'],
  },
  {
    label: 'Data',
    items: ['SQL', 'PostgreSQL', 'Google Analytics', 'Looker', 'A/B Testing', 'Excel'],
  },
  {
    label: 'Infra',
    items: ['Firebase', 'Docker', 'Git'],
  },
  {
    label: 'Growth',
    items: ['Content Strategy', 'SEO Basics', 'Funnel Analysis'],
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
