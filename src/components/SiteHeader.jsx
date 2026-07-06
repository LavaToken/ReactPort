import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const RESUME_URL =
  'https://docs.google.com/document/d/1jIyBYGgwHdbalqo_ZQLSnzOqcqsGyzJVM8EHtnwwA8w/edit?usp=sharing'

function formatClock(date) {
  const hh = String(date.getHours()).padStart(2, '0')
  const mm = String(date.getMinutes()).padStart(2, '0')
  const ss = String(date.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

function SiteHeader() {
  const [time, setTime] = useState(() => formatClock(new Date()))
  const [hobbiesOpen, setHobbiesOpen] = useState(false)
  const hobbiesRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => setTime(formatClock(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    if (!hobbiesOpen) return undefined

    const handlePointerDown = (event) => {
      if (!hobbiesRef.current?.contains(event.target)) {
        setHobbiesOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setHobbiesOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [hobbiesOpen])

  const tz = 'San Francisco'

  return (
    <div className="meta-strip" role="banner">
      <div className="meta-strip__left">Kevin Jia</div>
      <div className="meta-strip__center">UC Davis — Computer Science</div>
      <div className="meta-strip__right">
        <a
          className="meta-strip__link"
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↗
        </a>
        <Link className="meta-strip__link" to="/work">
          Projects →
        </Link>
        <div
          className={`meta-strip__dropdown${hobbiesOpen ? ' is-open' : ''}`}
          ref={hobbiesRef}
        >
          <button
            type="button"
            className="meta-strip__link meta-strip__dropdown-trigger"
            aria-expanded={hobbiesOpen}
            aria-haspopup="true"
            onClick={() => setHobbiesOpen((open) => !open)}
          >
            Hobbies →
          </button>
          <div className="meta-strip__dropdown-menu" role="menu">
            <Link
              className="meta-strip__dropdown-item"
              to="/photography"
              role="menuitem"
              onClick={() => setHobbiesOpen(false)}
            >
              Photography
            </Link>
            <Link
              className="meta-strip__dropdown-item"
              to="/video"
              role="menuitem"
              onClick={() => setHobbiesOpen(false)}
            >
              Video
            </Link>
          </div>
        </div>
        <span className="meta-strip__clock">
          {tz} · {time}
        </span>
      </div>
    </div>
  )
}

export default SiteHeader
