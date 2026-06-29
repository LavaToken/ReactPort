import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Work from './components/Work.jsx'
import Photography from './components/Photography.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work" element={<Work />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
