import { ArrowUp, Phone, MapPin, MessageCircle } from 'lucide-react'
import { InstagramIcon } from './Icons'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { name, tagline, establishmentYear, logo, logoAlt } = salonData.brand
  const { primaryAddress } = salonData.location
  const { primaryPhoneDisplay, primaryPhoneTel, secondaryPhoneDisplay, secondaryPhoneTel, whatsappNumber, instagramUrl, instagramHandle, businessProfileUrl } = salonData.contact
  const { services } = salonData
  const { navigate } = useNavigation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNav = (e, path) => {
    e.preventDefault()
    navigate(path)
  }

  const handleServiceNav = (e, serviceId) => {
    e.preventDefault()
    navigate('/services', { scrollTo: serviceId })
  }

  const handleBookNow = (e) => {
    e.preventDefault()
    navigate('/contact', { scrollTo: 'appointment' })
  }

  return (
    <footer className="footer-root" role="contentinfo" aria-label="Site Footer">
      {/* Subtle Final Booking CTA Banner */}
      <div className="footer-cta-strip">
        <div className="container footer-cta-content">
          <div className="footer-cta-text">
            <h3>Ready for your next hair or beauty session?</h3>
            <p>Connect with our team to check convenient slots for today or this weekend.</p>
          </div>
          <div className="footer-cta-actions">
            <button type="button" onClick={handleBookNow} className="btn btn-champagne">
              <span>Book Appointment</span>
            </button>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light"
            >
              <MessageCircle size={16} aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Column with Actual Logo */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="footer-logo-frame">
                <img
                  src={logo}
                  alt={logoAlt}
                  className="footer-logo-img"
                  width="72"
                  height="72"
                  loading="lazy"
                />
              </div>
              <div className="footer-brand-meta">
                <span className="footer-brand-title">{name}</span>
                <span className="footer-tagline">{tagline}</span>
                <span className="footer-est-badge">ESTABLISHED {establishmentYear} • NASHIK</span>
              </div>
            </div>

            <p className="footer-bio">
              Thoughtful hair and beauty care to help you look and feel your best. Serving Nashik with dedicated unisex styling, bridal artistry, and beauty academy training since {establishmentYear}.
            </p>

            <div className="footer-social-row">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label={`Visit Ajanta's Salon on Instagram (${instagramHandle})`}
              >
                <InstagramIcon size={18} />
                <span>{instagramHandle}</span>
              </a>

              <a
                href={businessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-profile-link"
              >
                Verified Business Profile
              </a>
            </div>
          </div>

          {/* Quick Multi-Page Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="/" onClick={(e) => handleNav(e, '/')}>Home</a></li>
              <li><a href="/about" onClick={(e) => handleNav(e, '/about')}>About Us</a></li>
              <li><a href="/services" onClick={(e) => handleNav(e, '/services')}>Services & Pricing</a></li>
              <li><a href="/gallery" onClick={(e) => handleNav(e, '/gallery')}>Inspiration Gallery</a></li>
              <li><a href="/contact" onClick={(e) => handleNav(e, '/contact')}>Contact & Location</a></li>
              <li><a href="/contact" onClick={handleBookNow}>Book an Appointment</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`/services#${s.id}`} onClick={(e) => handleServiceNav(e, s.id)}>
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="/services#academy" onClick={(e) => handleServiceNav(e, 'academy')}>
                  Beauty Academy Courses
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Contact & Studio</h4>
            
            <div className="footer-contact-item">
              <MapPin size={16} className="footer-contact-icon" aria-hidden="true" />
              <span>{primaryAddress}</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
              <div className="footer-phones">
                <a href={`tel:${primaryPhoneTel}`}>{primaryPhoneDisplay} (Main)</a>
                <a href={`tel:${secondaryPhoneTel}`}>{secondaryPhoneDisplay}</a>
              </div>
            </div>

            <div className="footer-contact-item">
              <MessageCircle size={16} className="footer-contact-icon" aria-hidden="true" />
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp (+91 98603 47226)
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copyright">
            © {currentYear} {name}. All rights reserved. • Established in {establishmentYear}, Sharanpur Road, Nashik.
          </p>

          <button
            type="button"
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={15} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  )
}
