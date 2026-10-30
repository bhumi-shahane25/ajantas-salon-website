import { useState, useEffect } from 'react'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { name, tagline, logo, logoAlt } = salonData.brand
  const { primaryPhoneTel, primaryPhoneDisplay } = salonData.contact
  const { currentPath, navigate } = useNavigation()

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

  const handleNavClick = (e, path) => {
    e.preventDefault()
    navigate(path)
    closeMenu()
  }

  const handleBookClick = (e) => {
    e.preventDefault()
    navigate('/contact', { scrollTo: 'appointment' })
    closeMenu()
  }

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'GALLERY', path: '/gallery' },
    { label: 'CONTACT', path: '/contact' },
  ]

  const isLinkActive = (path) => {
    if (path === '/') return currentPath === '/'
    return currentPath === path || currentPath.startsWith(path + '/')
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Salon Brand with Actual Logo */}
        <a
          href="/"
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, '/')}
          aria-label={`${name} - Return to Homepage`}
        >
          <div className="brand-logo-frame">
            <img
              src={logo}
              alt={logoAlt}
              className="brand-logo-img"
              width="48"
              height="48"
              loading="eager"
            />
          </div>
          <div className="brand-text-wrap">
            <span className="brand-title">Ajanta's</span>
            <span className="brand-subtitle">{tagline}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const active = isLinkActive(link.path)
              return (
                <li key={link.path} className="nav-item">
                  <a
                    href={link.path}
                    className={`nav-link ${active ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, link.path)}
                    aria-current={active ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    {active && <span className="active-dot" aria-hidden="true" />}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          <a
            href={`tel:${primaryPhoneTel}`}
            className="nav-action-tel"
            aria-label={`Call salon: ${primaryPhoneDisplay}`}
          >
            <Phone size={14} aria-hidden="true" />
            <span className="tel-text">{primaryPhoneDisplay}</span>
          </a>

          <a
            href="/contact"
            className="btn btn-primary btn-sm nav-cta"
            onClick={handleBookClick}
          >
            <Calendar size={15} aria-hidden="true" />
            <span>Book an Appointment</span>
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
          {/* Mobile Logo Showcase */}
          <div className="mobile-drawer-brand">
            <div className="mobile-logo-frame">
              <img
                src={logo}
                alt={logoAlt}
                className="mobile-logo-img"
                width="64"
                height="64"
              />
            </div>
            <div className="mobile-brand-meta">
              <span className="brand-title">Ajanta's</span>
              <span className="brand-subtitle">{tagline}</span>
              <span className="mobile-est-tag">Estd. 2007 • Nashik</span>
            </div>
          </div>

          <nav className="mobile-nav" aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link) => {
                const active = isLinkActive(link.path)
                return (
                  <li key={link.path} className="mobile-nav-item">
                    <a
                      href={link.path}
                      className={`mobile-nav-link ${active ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, link.path)}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span>{link.label}</span>
                      {active && <span className="mobile-active-badge">Current</span>}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <a
              href="/contact"
              className="btn btn-primary btn-full"
              onClick={handleBookClick}
            >
              <Calendar size={16} aria-hidden="true" />
              <span>Book an Appointment</span>
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
