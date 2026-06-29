import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import SiteHeader from './SiteHeader'
import Header from './Header'
import SideNav from './SideNav'
import Projects from './Projects'
import Footer from './Footer'
import { useParallax } from '../hooks/useParallax'

function Work() {
  useParallax()

  useEffect(() => {
    document.title = 'Selected Work — Kevin Jia'
  }, [])

  return (
    <>
      <SiteHeader />
      <Header />
      <SideNav />
      <main>
        <div className="work-page">
          <Link to="/" className="work-page__back">
            ← back
          </Link>
          <Projects />
        </div>
      </main>
      <Footer />
      <Analytics />
    </>
  )
}

export default Work
