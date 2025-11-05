import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function About() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="about" className="about" ref={sectionRef}>
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>I'm a second year Computer Engineering major @ UC Davis. As a passionate developer with expertise in both software and hardware development, I love creating innovative solutions and bringing exciting ideas to life!</p>
          <p>In my free time, I enjoy photography shoots, speedcubing, and tinkering with mechanical keyboards.</p>
        </div>
      </div>
    </section>
  )
}

export default About
