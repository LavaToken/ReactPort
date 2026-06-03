import React, { useEffect, useState } from 'react'

const RESUME_URL =
  'https://docs.google.com/document/d/1jIyBYGgwHdbalqo_ZQLSnzOqcqsGyzJVM8EHtnwwA8w/edit?usp=sharing'
const PHOTOS_URL =
  'https://www.amazon.com/photos/shared/yH1eG0HKTqyo7-iEKtYoVA.jBfIncrso6uFXPr6cexanX'

function formatClock(date) {
  const hh = String(date.getHours()).padStart(2, '0')
  const mm = String(date.getMinutes()).padStart(2, '0')
  const ss = String(date.getSeconds()).padStart(2, '0')
  return `${hh}:${mm}:${ss}`
}

function MetadataStrip() {
  const [time, setTime] = useState(() => formatClock(new Date()))

  useEffect(() => {
    const id = setInterval(() => setTime(formatClock(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

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
        <a
          className="meta-strip__link"
          href={PHOTOS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Photography ↗
        </a>
        <span className="meta-strip__clock">
          {tz} · {time}
        </span>
      </div>
    </div>
  )
}

export default MetadataStrip
