import React, { useEffect, useState } from 'react'

function Hero() {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    const text = "Hi, I'm Kevin"
    let i = 0

    const type = () => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1))
        i++
        setTimeout(type, 80)
      }
    }

    type()
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 style={{
          display: 'block',
          fontSize: '3.5rem',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
          fontWeight: 700,
          letterSpacing: 'normal',
          lineHeight: 1.2
        }}>
          <span className="highlight">{displayedText}</span>
          <span id="typing-cursor"></span>
        </h1>
        <p className="subtitle">Software & Hardware Developer</p>
        <div className="cta-buttons">
          <a 
            href="https://docs.google.com/document/d/1T5Q3fOj5vwIeUG6gXJ_MeGLwLf-r9CiZx8slzoa4-Yg/edit?usp=sharing" 
            className="btn primary" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a 
            href="https://www.amazon.com/photos/shared/yH1eG0HKTqyo7-iEKtYoVA.jBfIncrso6uFXPr6cexanX" 
            className="btn secondary" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Photography
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
