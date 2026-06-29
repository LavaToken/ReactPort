import React from 'react'
import { Link } from 'react-router-dom'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import GhostNumber from './GhostNumber'

const VIDEO_URL = 'https://www.youtube.com/embed/uvMe7Z7_5-Q'
const CAPTION = 'Collage of clips recorded over the past few months.\nCamera: Sony a6000\nLens 1: Viltrox 25mm f/1.7\nLens 2: TTArtisan 7.5mm f/2.0'

function Creative() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="creative" className="section section--dark" ref={sectionRef}>
      <GhostNumber value="02" speed={0.22} />
      <div className="grid">
        <div className="section-header">
          <span className="section-header__label">[ Creative ]</span>
          <span className="section-header__index">002 / 004</span>
        </div>

        <div className="creative__copy reveal">
          <h2 className="creative__heading">Latest clip.</h2>
          <p className="creative__subtitle">
            Not everything I make is code.
          </p>
          <p className="creative__caption">{CAPTION}</p>
          <Link className="creative__photos-link" to="/photography">
            Photography portfolio →
          </Link>
        </div>

        <div className="creative__video reveal">
          <iframe
            src={VIDEO_URL}
            title="Latest creative piece"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Creative
