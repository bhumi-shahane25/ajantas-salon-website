import { Sparkles, Calendar } from 'lucide-react'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Services from '../components/Services'
import Academy from '../components/Academy'

export default function ServicesPage() {
  const { navigate } = useNavigation()
  const { name } = salonData.brand

  useScrollReveal()

  return (
    <div className="services-page-root page-transition">
      {/* Subpage Header Banner */}
      <section className="page-hero-banner" aria-label="Services Header">
        <div className="container">
          <span className="page-hero-eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            <span>COMPLETE UNISEX CARE & BEAUTY ACADEMY</span>
          </span>
          <h1 className="page-hero-title">Services & Academy Menu</h1>
          <p className="page-hero-subtitle">
            Tailored hair cutting, restorative treatments, skin wellness, nail enhancements, bridal artistry, and professional beauty training in Nashik.
          </p>
        </div>
      </section>

      {/* Full Services Catalogue with Itemized Inclusions & Direct Enquiries */}
      <Services />

      {/* Beauty Academy Subsection */}
      <Academy />

      {/* Consultation Banner */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '56px', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="eyebrow">NEED RECOMMENDATIONS?</span>
            <h2 className="section-title" style={{ fontSize: '2.1rem' }}>Personalised Consultation</h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              Unsure about which treatment or facial suits your skin and hair texture? Our specialists on Sharanpur Road will happily advise you.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/contact', { scrollTo: 'appointment' })}
            >
              <Calendar size={16} aria-hidden="true" />
              <span>Request Appointment or Advice</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
