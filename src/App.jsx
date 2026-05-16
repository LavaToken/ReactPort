import React from 'react'
import MetadataStrip from './components/MetadataStrip'
import Header from './components/Header'
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <MetadataStrip />
      <Header />
      <SideNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
