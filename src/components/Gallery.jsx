import { useState, useEffect } from 'react'
import { Eye, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { salonData } from '../data/salonData'
import ImageWithFallback from './ImageWithFallback'
import './Gallery.css'

export default function Gallery() {
  const { gallery } = salonData
  const [activeFilter, setActiveFilter] = useState('All')
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null)

  const categories = ['All', 'Hair & Styling', 'Bridal & Occasion', 'Skin Care', 'Nails & Spa']

  const filteredItems = activeFilter === 'All'
    ? gallery
    : gallery.filter((item) => item.category === activeFilter)

  // Keyboard navigation for Lightbox (Escape, ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeLightboxIndex === null) return

      if (e.key === 'Escape') {
        setActiveLightboxIndex(null)
      } else if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length)
      } else if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
      }
    }

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeLightboxIndex, filteredItems.length])

  const openLightbox = (index) => {
    setActiveLightboxIndex(index)
  }

  const closeLightbox = () => {
    setActiveLightboxIndex(null)
  }

  const nextImage = (e) => {
    e.stopPropagation()
    setActiveLightboxIndex((prev) => (prev + 1) % filteredItems.length)
  }

  const prevImage = (e) => {
    e.stopPropagation()
    setActiveLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length)
  }

  return (
    <section id="gallery" className="section gallery-section" aria-label="Salon Inspiration Gallery">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">PORTFOLIO & INSPIRATION</span>
          <h2 className="section-title">The Art of Care & Styling</h2>
          <p className="section-subtitle">
            A glimpse into the hair transformations, makeup looks, and grooming care that inspire our work every day.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="gallery-filter-bar" role="tablist" aria-label="Gallery category filters">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeFilter === cat}
              className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => {
            const aspect = item.aspect === 'portrait' ? '3/4' : item.aspect === 'landscape' ? '16/11' : '1/1'

            return (
              <div
                key={item.id}
                className={`gallery-item gallery-item-${item.aspect}`}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openLightbox(index)
                  }
                }}
                aria-label={`View ${item.title}`}
              >
                <div className="gallery-image-container">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.alt}
                    aspectRatio={aspect}
                    className="gallery-img"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <span className="gallery-overlay-cat">{item.category}</span>
                      <h3 className="gallery-overlay-title">{item.title}</h3>
                      <span className="gallery-overlay-hint">
                        <Eye size={15} aria-hidden="true" /> Click to enlarge
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="gallery-footnote">
          <Sparkles size={14} className="gallery-footnote-icon" aria-hidden="true" />
          <span>Follow our journey on Instagram: <a href={salonData.contact.instagramUrl} target="_blank" rel="noopener noreferrer">@ajantassalon</a></span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview"
        >
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={closeLightbox}
            aria-label="Close Lightbox (Escape)"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className="lightbox-nav-btn prev"
            onClick={prevImage}
            aria-label="Previous Image (Left Arrow)"
          >
            <ChevronLeft size={30} />
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={filteredItems[activeLightboxIndex].alt}
              className="lightbox-main-img"
            />
            <div className="lightbox-caption">
              <span className="lightbox-cat">{filteredItems[activeLightboxIndex].category}</span>
              <h4 className="lightbox-title">{filteredItems[activeLightboxIndex].title}</h4>
              <span className="lightbox-counter">
                {activeLightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="lightbox-nav-btn next"
            onClick={nextImage}
            aria-label="Next Image (Right Arrow)"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </section>
  )
}
