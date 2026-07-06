import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const VIDEO_URL = 'https://www.youtube.com/embed/uvMe7Z7_5-Q'
const CAPTION =
  'Collage of clips recorded over the past few months.\nCamera: Sony a6000\nLens 1: Viltrox 25mm f/1.7\nLens 2: TTArtisan 7.5mm f/2.0'

function Video() {
  useEffect(() => {
    document.title = 'Video — Kevin Jia'
  }, [])

  return (
    <div className="video-page">
      <header className="video-page__bar">
        <Link to="/" className="video-page__back">
          ← back
        </Link>
        <span className="video-page__title">[ Video ]</span>
        <span className="video-page__spacer" aria-hidden="true" />
      </header>

      <main className="video-page__body">
        <div className="video-page__copy">
          <h1 className="video-page__heading">Latest clip.</h1>
          <p className="video-page__subtitle">Not everything I make is code.</p>
          <p className="video-page__caption">{CAPTION}</p>
        </div>

        <div className="video-page__embed">
          <iframe
            src={VIDEO_URL}
            title="Latest creative piece"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </main>
    </div>
  )
}

export default Video
