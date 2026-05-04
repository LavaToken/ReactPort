import React, { useEffect, useState, useRef } from 'react'

/** Matches `styles.css` — touch-first / coarse-pointer devices hide the bubble. */
const HIDE_BUBBLE_QUERY = '(hover: none) or (pointer: coarse)'

function CursorBubble() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [showBubble, setShowBubble] = useState(() =>
    typeof window !== 'undefined' ? !window.matchMedia(HIDE_BUBBLE_QUERY).matches : false
  )
  const rafRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia(HIDE_BUBBLE_QUERY)
    const sync = () => setShowBubble(!mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!showBubble) {
      return undefined
    }

    const handleMouseMove = (e) => {
      const x = Math.max(0, Math.min(e.clientX, window.innerWidth))
      const y = Math.max(0, Math.min(e.clientY, window.innerHeight))

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }

      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x, y })
        setIsVisible(true)
      })
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleResize = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [showBubble])

  if (!showBubble) {
    return null
  }

  return (
    <div
      className="cursor-bubble"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 1 : 0,
      }}
    />
  )
}

export default CursorBubble
