import { ArrowRight, Calendar, Phone, Sparkles, CheckCircle2 } from 'lucide-react'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Hero from '../components/Hero'
import SignatureSection from '../components/SignatureSection'
import ImageWithFallback from '../components/ImageWithFallback'
import './HomePage.css'

export default function HomePage() {
  const { navigate } = useNavigation()
  const { name, establishmentYear, productsClaim } = salonData.brand
  const { primaryPhoneDisplay, primaryPhoneTel } = salonData.contact
  const { services } = salonData

  useScrollReveal()

  // Select 4 core services for the compact homepage preview
  const featuredServices = services.slice(0, 4)

  return (
    <div className="home-page-root page-transition">
      {/* 1. Hero Section with Actual Salon Context & Dual CTAs */}
      <Hero />

      {/* 2. Short Introduction to Ajanta's Salon */}
      <section className="home-intro-section" aria-label="Introduction to Ajanta's Salon">
        <div className="container home-intro-grid">
          <div className="home-intro-text reveal">
            <span className="eyebrow">ESTABLISHED 2007 • NASHIK</span>
            <h2 className="home-intro-heading">
              Thoughtful care for your hair, skin, and personal well-being.
            </h2>
            <p className="home-intro-lead">
              For over 17 years, {name} on Sharanpur Road has provided men and women in Nashik with a calm, welcoming environment for everyday grooming, restorative treatments, and special occasion artistry.
            </p>
            <div className="home-intro-badges">
              <span className="home-intro-pill">Unisex Hair & Skin Care</span>
              <span className="home-intro-pill">Authentic Product Quality</span>
              <span className="home-intro-pill">Bridal & Occasion Artistry</span>
            </div>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate('/about')}
            >
              <span>Read Our Full Story</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="home-intro-card reveal reveal-delay-1">
            <span className="eyebrow">HONEST VALUES</span>
            <h3 className="home-intro-card-title">Serving He & She Since {establishmentYear}</h3>
            <p className="home-intro-card-desc">
              {productsClaim} Whether you need a precision haircut, a rejuvenating facial, or comprehensive bridal styling, our team focuses on what suits your individuality best.
            </p>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={() => navigate('/services')}
            >
              <span>Explore Services Menu</span>
              <ArrowRight size={15} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Compact Selection of Featured Services */}
      <section className="home-featured-services" aria-label="Featured Salon Services">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">OUR SPECIALITIES</span>
            <h2 className="section-title">Popular Services for He & She</h2>
            <p className="section-subtitle">
              A curated selection of our most requested hair, skin, and occasion care services in Nashik.
            </p>
          </div>

          <div className="featured-services-grid">
            {featuredServices.map((service, idx) => (
              <div
                key={service.id}
                className={`featured-service-card reveal reveal-delay-${idx + 1}`}
                onClick={() => navigate('/services', { scrollTo: service.id })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    navigate('/services', { scrollTo: service.id })
                  }
                }}
              >
                <div className="featured-service-img-wrap">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.imageAlt}
                    aspectRatio="16/11"
                  />
                </div>
                <div className="featured-service-body">
                  <span className="featured-service-tag">{service.tag}</span>
                  <h3 className="featured-service-title">{service.title}</h3>
                  <p className="featured-service-desc">{service.summary}</p>
                  <span className="featured-service-link">
                    <span>View Details</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="home-services-bottom-cta reveal">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/services')}
            >
              <span>View All 6 Service Categories & Academy</span>
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. One Attractive Featured Beauty / Bridal Image Section */}
      <SignatureSection />

      {/* 5. Clear Appointment Booking CTA Banner */}
      <section className="home-booking-banner" aria-label="Appointment Callout">
        <div className="container">
          <div className="home-booking-card reveal">
            <div className="home-booking-text">
              <span className="eyebrow">RESERVATIONS & INQUIRIES</span>
              <h2 className="home-booking-title">Ready for Your Next Salon Visit?</h2>
              <p className="home-booking-subtitle">
                We accommodate visits throughout the week at our Sharanpur Road salon. Send a quick WhatsApp enquiry or call our desk to reserve your preferred slot.
              </p>
            </div>
            <div className="home-booking-actions">
              <button
                type="button"
                className="btn btn-champagne"
                onClick={() => navigate('/contact', { scrollTo: 'appointment' })}
              >
                <Calendar size={16} aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>
              <a
                href={`tel:${primaryPhoneTel}`}
                className="btn btn-outline-light"
              >
                <Phone size={15} aria-hidden="true" />
                <span>Call: {primaryPhoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
