import { useState, useEffect } from 'react'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { salonData } from '../data/salonData'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { name, tagline } = salonData.brand
  const { primaryPhoneTel, primaryPhoneDisplay } = salonData.contact

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Bridal', href: '#bridal' },
    { label: 'Academy', href: '#academy' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Salon Brand Typographic Wordmark */}
        <a href="#home" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-title">Ajanta's</span>
          <span className="brand-subtitle">{tagline}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <a
            href={`tel:${primaryPhoneTel}`}
            className="nav-action-tel"
            aria-label={`Call salon: ${primaryPhoneDisplay}`}
          >
            <Phone size={15} aria-hidden="true" />
            <span className="tel-text">{primaryPhoneDisplay}</span>
          </a>

          <a href="#appointment" className="btn btn-primary btn-sm nav-cta">
            <Calendar size={15} aria-hidden="true" />
            <span>Book Appointment</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-inner">
          <div className="mobile-drawer-brand">
            <span className="brand-title">Ajanta's</span>
            <span className="brand-subtitle">{tagline}</span>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => (
                <li key={link.href} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className="mobile-nav-link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="#appointment"
              className="btn btn-primary btn-full"
              onClick={closeMenu}
            >
              <Calendar size={16} aria-hidden="true" />
              <span>Book Appointment</span>
            </a>

            <a
              href={`tel:${primaryPhoneTel}`}
              className="btn btn-secondary btn-full"
              onClick={closeMenu}
            >
              <Phone size={16} aria-hidden="true" />
              <span>Call: {primaryPhoneDisplay}</span>
            </a>

            <div className="mobile-location-tag">
              Sharanpur Road, Nashik
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay Backdrop for Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}
