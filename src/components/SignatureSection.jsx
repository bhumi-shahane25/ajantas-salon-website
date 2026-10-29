import { MessageCircle, Sparkles, Check } from 'lucide-react'
import { salonData } from '../data/salonData'
import ImageWithFallback from './ImageWithFallback'
import './SignatureSection.css'

export default function SignatureSection() {
  const { tag, title, subtitle, description, highlights, image, imageAlt, enquiryMessage } = salonData.signature
  const { whatsappNumber } = salonData.contact

  const handleBridalWhatsApp = () => {
    const text = encodeURIComponent(enquiryMessage)
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="bridal" className="section section-dark signature-section" aria-label="Bridal & Occasion Artistry">
      <div className="container">
        <div className="signature-layout">
          {/* Left Column: Visual Portrait */}
          <div className="signature-visual">
            <div className="signature-image-wrapper">
              <ImageWithFallback
                src={image}
                alt={imageAlt}
                aspectRatio="4/5"
                className="signature-img"
              />
              <div className="signature-border-ornament" aria-hidden="true" />
            </div>
          </div>

          {/* Right Column: Editorial Copy & Champagne Details */}
          <div className="signature-content">
            <div className="signature-eyebrow-wrap">
              <Sparkles size={14} className="signature-sparkle" aria-hidden="true" />
              <span className="eyebrow">{tag}</span>
            </div>

            <h2 className="signature-title">{title}</h2>
            <p className="signature-subtitle">{subtitle}</p>

            <p className="signature-desc">{description}</p>

            {/* Curated highlights list */}
            <ul className="signature-highlights-list" aria-label="Bridal highlights">
              {highlights.map((item, index) => (
                <li key={index} className="signature-highlight-item">
                  <div className="signature-highlight-icon">
                    <Check size={14} aria-hidden="true" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="signature-actions">
              <button
                type="button"
                className="btn btn-champagne"
                onClick={handleBridalWhatsApp}
              >
                <MessageCircle size={16} aria-hidden="true" />
                <span>Enquire for Bridal Dates on WhatsApp</span>
              </button>

              <a href="#appointment" className="btn btn-outline-light">
                <span>Request Consultation</span>
              </a>
            </div>

            <span className="signature-disclaimer">
              Pre-wedding trials and personalized consultations scheduled upon request.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
