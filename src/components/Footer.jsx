import React from 'react'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-divider" />
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-wordmark">Kevin Jia</div>
          <div className="footer-copyright">© 2026 Kevin Jia. All rights reserved.</div>
        </div>

        <div className="footer-right">
          <div className="footer-label">Connect</div>
          <div className="footer-links">
            <a href="mailto:kevinjia05@gmail.com">Email</a>
            <a href="https://github.com/LavaToken" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/kevin-jia-4120a2193/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
