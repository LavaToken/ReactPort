import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LINKS = [
  { to: '/#about', label: 'About' },
  { to: '/work', label: 'Projects' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#contact', label: 'Contact' },
  { to: '/photography', label: 'Photography' },
  { to: '/video', label: 'Video' },
]

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className="header">
        <Link to="/" className="header__logo" onClick={close}>
          Kevin Jia
        </Link>
        <button
          type="button"
          className="hamburger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-menu"
        className={`mobile-menu${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        {LINKS.map((link) => (
          <Link key={link.to} to={link.to} onClick={close}>
            {link.label}
          </Link>
        ))}
        <div className="mobile-menu__meta">[ Kevin Jia — Davis, CA ]</div>
      </nav>
    </>
  )
}

export default Header
