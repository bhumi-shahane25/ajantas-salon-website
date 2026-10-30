import { Sparkles, Calendar } from 'lucide-react'
import { InstagramIcon } from '../components/Icons'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import { useScrollReveal } from '../hooks/useScrollReveal'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  const { navigate } = useNavigation()
  const { instagramUrl, instagramHandle } = salonData.contact

  useScrollReveal()

  return (
    <div className="gallery-page-root page-transition">
      {/* Subpage Header Banner */}
      <section className="page-hero-banner" aria-label="Gallery Header">
        <div className="container">
          <span className="page-hero-eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            <span>PORTFOLIO & WORK INSPIRATION</span>
          </span>
          <h1 className="page-hero-title">Inspiration Gallery</h1>
          <p className="page-hero-subtitle">
            A curated showcase of haircut textures, dimensional colour, bridal makeup artistry, and nail enhancements that inspire our salon craft.
          </p>
        </div>
      </section>

      {/* Main Filterable Gallery with Lightbox */}
      <Gallery />

      {/* Instagram Spotlight & Booking Callout */}
      <section className="section" style={{ paddingTop: '40px', paddingBottom: '64px', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span className="eyebrow">SEE OUR LATEST CLIENT WORK</span>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Connect on Instagram</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Follow our daily salon updates, transformations, bridal trials, and academy highlights directly on Instagram.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <InstagramIcon size={16} />
                <span>Follow {instagramHandle}</span>
              </a>
              <button
                type="button"
                className="btn btn-primary"
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
