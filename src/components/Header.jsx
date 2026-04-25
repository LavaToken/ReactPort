import React, { useEffect, useState } from 'react'

function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero')
      if (hero) {
        const heroHeight = hero.offsetHeight
        const scrollThreshold = heroHeight * 0.8
        setIsVisible(window.scrollY > scrollThreshold)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={isVisible ? 'visible' : ''}>
      <nav>
        <div className="nav-content">
          <div className="logo">
            <a href="#home">Kevin Jia</a>
          </div>
          <div className="nav-buttons">
            <a 
              href="https://docs.google.com/document/d/1LQC5YrZHLIYS4c5zitUuQ3uq37nd5rL9-VxeUFBXgJ0/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Resume
            </a>
            <a 
              href="https://www.amazon.com/photos/shared/yH1eG0HKTqyo7-iEKtYoVA.jBfIncrso6uFXPr6cexanX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="photos-btn"
            >
              Photography
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
