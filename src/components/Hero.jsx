import React, { useEffect, useRef, useState } from 'react'

const ROLES = [
  'Full Stack',
  'Data Analytics',
  'Growth Engineering',
  'Product Thinking',
  'Photography',
]

const TYPE_MS = 70
const ERASE_MS = 40
const HOLD_MS = 1400

function Hero() {
  const [text, setText] = useState('')
  const indexRef = useRef(0)
  const phaseRef = useRef('typing')
  const charRef = useRef(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const tick = () => {
      const word = ROLES[indexRef.current]
      if (phaseRef.current === 'typing') {
        const next = word.slice(0, charRef.current + 1)
        setText(next)
        charRef.current += 1
        if (charRef.current === word.length) {
          phaseRef.current = 'holding'
          timeoutRef.current = setTimeout(tick, HOLD_MS)
        } else {
          timeoutRef.current = setTimeout(tick, TYPE_MS)
        }
      } else if (phaseRef.current === 'holding') {
        phaseRef.current = 'erasing'
        timeoutRef.current = setTimeout(tick, ERASE_MS)
      } else if (phaseRef.current === 'erasing') {
        if (charRef.current === 0) {
          phaseRef.current = 'typing'
          indexRef.current = (indexRef.current + 1) % ROLES.length
          timeoutRef.current = setTimeout(tick, TYPE_MS)
        } else {
          charRef.current -= 1
          setText(word.slice(0, charRef.current))
          timeoutRef.current = setTimeout(tick, ERASE_MS)
        }
      }
    }
    timeoutRef.current = setTimeout(tick, 400)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <section id="home" className="hero section">
      <div className="grid hero__inner">
        <div className="hero__role" aria-label="Current focus">
          <span className="hero__role-bracket">[</span>
          <span className="hero__role-value">{text}</span>
          <span className="hero__role-caret" aria-hidden="true" />
          <span className="hero__role-bracket">]</span>
        </div>

        <h1 className="hero__name">
          <span>Kevin</span>
          <span>Jia</span>
        </h1>

        <div className="hero__rule" aria-hidden="true" />

        <div className="hero__meta-left">
          <strong>Computer Science Student</strong> — Davis, CA
          <br />
          UC Davis · Class of 2027
        </div>

        <p className="hero__pitch">
          I build full-stack products and data pipelines — from React
          frontends to backend APIs and analytics dashboards. Currently
          a Data Analyst Intern at Travis Credit Union, with a focus on
          growth and product.
        </p>

        <div className="hero__scroll">
          <a href="#about">View Work ↓</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
