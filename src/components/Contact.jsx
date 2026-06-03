import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const RESUME_URL =
  'https://docs.google.com/document/d/1jIyBYGgwHdbalqo_ZQLSnzOqcqsGyzJVM8EHtnwwA8w/edit?usp=sharing'
const PHOTOS_URL =
  'https://www.amazon.com/photos/shared/yH1eG0HKTqyo7-iEKtYoVA.jBfIncrso6uFXPr6cexanX'

function Contact() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="grid">
        <div className="section-header">
          <span className="section-header__label">[ Contact ]</span>
          <span className="section-header__index">005 / 005</span>
        </div>

        <div className="contact__inner reveal">
          <h2 className="contact__cta">Let&rsquo;s build something.</h2>

          <a className="contact__email" href="mailto:kevinjia05@gmail.com">
            kevinjia05@gmail.com
          </a>

          <div className="contact__socials">
            <a
              href="https://github.com/LavaToken"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kevin-jia-4120a2193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="contact__external">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
            <a href={PHOTOS_URL} target="_blank" rel="noopener noreferrer">
              Photography ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
