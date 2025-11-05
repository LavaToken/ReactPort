import React, { useEffect, useState, useRef } from 'react'

function CursorBubble() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const rafRef = useRef(null)

  useEffect(() => {
    // Detect if device supports touch
    const checkTouchDevice = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      )
    }

    const touchDevice = checkTouchDevice()
    setIsTouchDevice(touchDevice)

    // Only set up cursor tracking for non-touch devices
    if (touchDevice) {
      return
    }

    const handleMouseMove = (e) => {
      // Ensure coordinates are within viewport bounds
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
      // Hide bubble when window is resized to prevent it from being off-screen
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
  }, [])

  // Don't render on touch devices
  if (isTouchDevice) {
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

