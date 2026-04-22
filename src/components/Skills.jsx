import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const skills = {
  "Technical Skills": [
    "TypeScript",
    "JavaScript & JSX",
    "React",
    "React Native",
    "Vite",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Firebase",
    "REST APIs",
    "OpenAI API",
    "Google Earth Engine",
    "Git",
    "C",
    "C++",
    "STM32",
    "Arduino",
    "Verilog",
    "Quartus",
    "Python",
    "Docker",
  ],
}

function Skills() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Skills & Technologies</h2>
      <div className="skills-grid skills-cloud">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="skill-category">
            <div className="skill-category-header">
              <span className="skill-category-label">{category}</span>
            </div>
            <div className="skill-pill-wrap">
              {items.map((item, itemIndex) => (
                <span
                  key={itemIndex}
                  className={`skill-pill ${itemIndex % 6 === 0 || itemIndex % 6 === 3 ? 'skill-pill--lg' : 'skill-pill--sm'}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
