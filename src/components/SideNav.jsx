import React, { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'about',    label: 'About'   },
  { id: 'projects', label: 'Work'    },
  { id: 'skills',   label: 'Skills'  },
  { id: 'contact',  label: 'Contact' },
]

function SideNav() {
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  const [onDark, setOnDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero')
      if (hero) setVisible(window.scrollY > hero.offsetHeight * 0.6)

      const projects = document.getElementById('projects')
      if (projects) {
        const rect = projects.getBoundingClientRect()
        setOnDark(rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const elements = SECTIONS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`side-nav${visible ? ' is-visible' : ''}${onDark ? ' on-dark' : ''}`}
      aria-label="Section navigation"
    >
      {SECTIONS.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`side-nav__item${active === section.id ? ' is-active' : ''}`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )
}

export default SideNav
