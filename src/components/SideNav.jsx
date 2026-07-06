import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { id: 'about', label: 'About', to: '/#about' },
  { id: 'skills', label: 'Skills', to: '/#skills' },
  { id: 'contact', label: 'Contact', to: '/#contact' },
]

const HOME_SECTION_IDS = ['about', 'skills', 'contact']

function SideNav() {
  const location = useLocation()
  const isWorkPage = location.pathname === '/work'
  const isHomePage = location.pathname === '/'
  const [active, setActive] = useState(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if (isWorkPage) {
      setVisible(true)
      return undefined
    }

    const handleScroll = () => {
      const hero = document.querySelector('.hero')
      if (hero) setVisible(window.scrollY > hero.offsetHeight * 0.6)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isWorkPage])

  useEffect(() => {
    if (!isHomePage) return undefined

    const elements = HOME_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!elements.length) return undefined

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
  }, [isHomePage])

  return (
    <nav
      className={`side-nav${visible ? ' is-visible' : ''}`}
      aria-label="Section navigation"
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.id}
          to={item.to}
          className={`side-nav__item${active === item.id ? ' is-active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default SideNav
