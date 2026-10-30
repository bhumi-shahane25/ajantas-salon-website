import { MessageCircle, Check, HelpCircle } from 'lucide-react'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import ImageWithFallback from './ImageWithFallback'
import './Services.css'

export default function Services() {
  const { services } = salonData
  const { whatsappNumber } = salonData.contact
  const { navigate } = useNavigation()

  const handleEnquireWhatsApp = (serviceTitle) => {
    const text = encodeURIComponent(`Hello Ajanta's Salon, I would like to enquire about details and pricing for: ${serviceTitle}.`)
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  const handleBookService = (serviceTitle) => {
    navigate('/contact', {
      scrollTo: 'appointment',
      service: serviceTitle,
    })
  }

  return (
    <section id="services-list" className="section section-alt services-section" aria-label="Salon Services Menu">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">OUR SERVICE MENU</span>
          <h2 className="section-title">Thoughtfully Crafted Services</h2>
          <p className="section-subtitle">
            Personalised hair, beauty, and grooming care delivered with genuine attention to detail for men and women.
          </p>
        </div>

        {/* Editorial Varied Grid */}
        <div className="services-editorial-grid">
          {services.map((service, index) => {
            const isWide = index === 0 || index === 3

            return (
              <article
                key={service.id}
                className={`service-card ${isWide ? 'service-card-wide' : ''}`}
                id={service.id}
              >
                <div className="service-card-media">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.imageAlt}
                    aspectRatio={isWide ? '16/10' : '4/3'}
                    className="service-img"
                  />
                  <span className="service-category-badge">{service.tag}</span>
                </div>

                <div className="service-card-body">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>

                  <ul className="service-items-list" aria-label={`Included in ${service.title}`}>
                    {service.items.map((item, i) => (
                      <li key={i} className="service-item">
                        <Check size={14} className="service-check" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-actions">
                    <button
                      type="button"
                      className="btn btn-secondary btn-sm"
                      onClick={() => handleBookService(service.title)}
                    >
                      Book Enquiry
                    </button>

                    <button
                      type="button"
                      className="btn btn-whatsapp btn-sm"
                      onClick={() => handleEnquireWhatsApp(service.title)}
                      aria-label={`Enquire about ${service.title} on WhatsApp`}
                    >
                      <MessageCircle size={15} aria-hidden="true" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Transparent Pricing & Consultation Note */}
        <div className="pricing-note-banner">
          <div className="pricing-note-icon">
            <HelpCircle size={22} aria-hidden="true" />
          </div>
          <div className="pricing-note-text">
            <h4>Personalised Consultation & Transparent Pricing</h4>
            <p>
              Every hair length, density, skin type, and bridal requirement is unique. We provide clear, honest pricing guidance after a brief conversation or in-person consultation at our Sharanpur Road salon. Feel free to call or WhatsApp us anytime for custom quotes.
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Ajanta's Salon, I would like to consult with you about service pricing and recommendations.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm pricing-note-btn"
          >
            <span>Ask for Pricing</span>
          </a>
        </div>
      </div>
    </section>
  )
}
