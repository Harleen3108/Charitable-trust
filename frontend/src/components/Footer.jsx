import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assests/logo.png" alt="Ramesh Balhara Charitable Trust Logo" className="footer-logo-icon" style={{ height: '50px', width: 'auto' }} />
              <span>Ramesh Balhara Charitable Trust</span>
            </div>
            <p>
              Empowering communities through education, healthcare, and sustainable 
              development programs. Together we can make a difference.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/services">Our Campaigns</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Programs</h4>
            <div className="footer-links">
              <Link to="/services">Education</Link>
              <Link to="/services">Healthcare</Link>
              <Link to="/services">Women Empowerment</Link>
              <Link to="/services">Environment</Link>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-title">Get Involved</h4>
            <div className="footer-links">
              <Link to="/join">Become a Volunteer</Link>
              <Link to="/join">Partner With Us</Link>
              <Link to="/contact">Donate</Link>
              <Link to="/contact">Support Us</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Ramesh Balhara Charitable Trust. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
