import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const VIDEO_URL = 'https://www.youtube.com/embed/uvMe7Z7_5-Q'
const CAPTION = 'Collage of clips recorded over the past few months.\nCamera: Sony a6000\nLens 1: Viltrox 25mm f/1.7\nLens 2: TTArtisan 7.5mm f/2.0'

function Creative() {
  const sectionRef = useIntersectionObserver()

  return (
    <section id="creative" className="section" ref={sectionRef}>
      <div className="grid">
        <div className="section-header">
          <span className="section-header__label">[ Creative ]</span>
          <span className="section-header__index">003 / 005</span>
        </div>

        <div className="creative__copy reveal">
          <h2 className="creative__heading">Latest clip.</h2>
          <p className="creative__subtitle">
            Not everything I make is code.
          </p>
          <p className="creative__caption">{CAPTION}</p>
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
