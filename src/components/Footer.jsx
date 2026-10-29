import { ArrowUp, Phone, MapPin, MessageCircle } from 'lucide-react'
import { InstagramIcon } from './Icons'
import { salonData } from '../data/salonData'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { name, tagline, establishmentYear } = salonData.brand
  const { primaryAddress } = salonData.location
  const { primaryPhoneDisplay, primaryPhoneTel, secondaryPhoneDisplay, secondaryPhoneTel, whatsappNumber, instagramUrl, instagramHandle, businessProfileUrl } = salonData.contact
  const { services } = salonData

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
            <a href="#appointment" className="btn btn-champagne">
              <span>Book Appointment</span>
            </a>
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
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <a href="#home" className="footer-brand-title">
              {name}
            </a>
            <span className="footer-tagline">{tagline}</span>
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
                Business Profile
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Our Salon</a></li>
              <li><a href="#services">Services & Pricing</a></li>
              <li><a href="#bridal">Bridal Artistry</a></li>
              <li><a href="#academy">Beauty Academy</a></li>
              <li><a href="#gallery">Gallery & Work</a></li>
              <li><a href="#appointment">Book an Appointment</a></li>
              <li><a href="#contact">Location & Hours</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
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
            © {currentYear} {name}. All rights reserved. • Established in 2007, Nashik, Maharashtra.
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
