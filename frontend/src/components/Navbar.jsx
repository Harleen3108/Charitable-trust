import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const isActive = (path) => location.pathname === path

  return (
    <header className={`header ${isScrolled || location.pathname !== '/' ? 'scrolled' : 'scrolled'}`}>
      <div className="container">
        <Link to="/" className="logo">
          <img src="/assests/logo.png" alt="Ramesh Balhara Cheritable Trust Logo" className="logo-icon" />
          <span>Ramesh Balhara Cheritable Trust</span>
        </Link>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/gallery" className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}>Gallery</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contacts</Link>
          <div className="nav-cta">
            <Link to="/join" className="btn btn-primary">Donate Now</Link>
          </div>
        </nav>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
