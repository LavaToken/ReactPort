import React, { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about',    label: 'About'   },
  { href: '#projects', label: 'Work'    },
  { href: '#skills',   label: 'Skills'  },
  { href: '#contact',  label: 'Contact' },
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
        <a href="#home" className="header__logo" onClick={close}>
          Kevin Jia
        </a>
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
          <a key={link.href} href={link.href} onClick={close}>
            {link.label}
          </a>
        ))}
        <div className="mobile-menu__meta">[ Kevin Jia — Davis, CA ]</div>
      </nav>
    </>
  )
}

export default Header
