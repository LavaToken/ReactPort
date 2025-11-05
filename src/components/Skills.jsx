import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const skills = {
  "Programming Languages": ["Java", "Python", "C++", "C", "HTML", "CSS", "JavaScript", "TypeScript"],
  "Hardware": ["Arduino", "Raspberry Pi", "STM32", "FPGA", "Quartus", "DE10-Lite Board", "Verilog", "PCB Design"],
  "Tools & Technologies": ["Git", "Docker", "VSCode", "STM32IDE", "KiCAD", "OrCAD", "Firebase", "Figma"],
  "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability", "Critical Thinking", "Leadership", "Attention to Detail"]
}

function Skills() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items], index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>
            <ul>
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
