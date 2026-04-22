import React from 'react'

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p className="contact-subtitle">Open to opportunities, collaborations, and conversations.</p>
      <div className="contact-content">
        <div className="contact-cards">
          <a className="contact-card" href="mailto:kevinjia05@gmail.com">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <div className="contact-card-label">Email</div>
            <div className="contact-card-subtext">kevinjia05@gmail.com</div>
          </a>

          <a
            className="contact-card"
            href="https://github.com/LavaToken"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github" aria-hidden="true"></i>
            <div className="contact-card-label">GitHub</div>
          </a>

          <a
            className="contact-card"
            href="https://www.linkedin.com/in/kevin-jia-4120a2193/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" aria-hidden="true"></i>
            <div className="contact-card-label">LinkedIn</div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
