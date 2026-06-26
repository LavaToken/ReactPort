import React from 'react'

function GhostNumber({ value, speed = 0.22 }) {
  return (
    <span className="ghost-number" data-speed={speed} aria-hidden="true">
      {value}
    </span>
  )
}

export default GhostNumber
