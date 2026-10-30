import { ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import About from '../components/About'
import TrustStrip from '../components/TrustStrip'

export default function AboutPage() {
  const { navigate } = useNavigation()
  const { name, establishmentYear } = salonData.brand

  useScrollReveal()

  return (
    <div className="about-page-root page-transition">
      {/* Subpage Header Banner */}
      <section className="page-hero-banner" aria-label="About Us Header">
        <div className="container">
          <span className="page-hero-eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            <span>ESTABLISHED {establishmentYear} • SHARANPUR ROAD, NASHIK</span>
          </span>
          <h1 className="page-hero-title">About {name}</h1>
          <p className="page-hero-subtitle">
            A trusted unisex salon and academy dedicated to personalized hair, skin, and beauty care since {establishmentYear}.
          </p>
        </div>
      </section>

      {/* Main About Story with Asymmetric Photography */}
      <About />

      {/* Trust & Heritage Pillars */}
      <TrustStrip />

      {/* Bottom CTA to Services and Booking */}
      <section className="section" style={{ paddingTop: '56px', paddingBottom: '56px', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="eyebrow">READY TO VISIT?</span>
            <h2 className="section-title" style={{ fontSize: '2.1rem' }}>Experience the Care for Yourself</h2>
            <p className="section-subtitle" style={{ marginBottom: '28px' }}>
              Explore our full menu of haircuts, chemical treatments, skin therapies, and bridal packages.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/services')}
              >
                <span>Browse All Services</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate('/contact', { scrollTo: 'appointment' })}
              >
                <Calendar size={16} aria-hidden="true" />
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
