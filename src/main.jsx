import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App.jsx'
import Work from './components/Work.jsx'
import Photography from './components/Photography.jsx'
import Video from './components/Video.jsx'
import AnimatedRoutes from './components/AnimatedRoutes.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<Work />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/video" element={<Video />} />
      </AnimatedRoutes>
    </BrowserRouter>
  </React.StrictMode>,
)
