import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

function About() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="grid">
        <div className="section-header">
          <span className="section-header__label">[ About ]</span>
          <span className="section-header__index">001 / 005</span>
        </div>

        <div className="about__copy reveal">
          <h2 className="about__heading">
            Engineer who treats software like a craft.
          </h2>
          <div className="about__body">
            <p>
              I'm a Computer Engineering student at UC Davis with a focus
              on full-stack development, data analytics, and building
              products people actually use. I care about the intersection
              of engineering and growth — writing clean code that ships
              and measuring what happens after.
            </p>
            <p>
              Outside of engineering, I run marketing and content for
              Google Developer Student Club, shoot street and documentary
              photography, and build mechanical keyboards. I like making
              things — digital and physical.
            </p>
          </div>
        </div>

        <div className="about__photo reveal">
          <img src="/assets/profilepic.png" alt="Kevin Jia portrait" />
        </div>

        <div className="about__stats reveal">
          <div className="about__stat">
            <span className="about__stat-value">3rd</span>
            <span className="about__stat-label">Year — UC Davis CE</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">8+</span>
            <span className="about__stat-label">Shipped projects</span>
          </div>
          <div className="about__stat">
            <span className="about__stat-value">San Jose</span>
            <span className="about__stat-label">California, USA</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
