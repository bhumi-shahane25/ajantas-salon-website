import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { salonData } from '../data/salonData'
import ImageWithFallback from './ImageWithFallback'
import './About.css'

export default function About() {
  const { tag, heading, paragraphs, images } = salonData.about
  const { establishmentYear, productsClaim } = salonData.brand

  return (
    <section id="about" className="section about-section" aria-label="About the Salon">
      <div className="container about-container">
        {/* Left: Asymmetric Two-Image Collage */}
        <div className="about-visuals">
          <div className="about-image-primary-wrap">
            <ImageWithFallback
              src={images.primary}
              alt={images.primaryAlt}
              aspectRatio="4/5"
              className="about-image-primary"
            />
            {/* Stamp / Heritage emblem */}
            <div className="about-heritage-stamp">
              <span className="stamp-year">{establishmentYear}</span>
              <span className="stamp-label">NASHIK</span>
            </div>
          </div>

          <div className="about-image-secondary-wrap">
            <ImageWithFallback
              src={images.secondary}
              alt={images.secondaryAlt}
              aspectRatio="1/1"
              className="about-image-secondary"
            />
          </div>
        </div>

        {/* Right: Thoughtful Editorial Narrative */}
        <div className="about-text-content">
          <span className="eyebrow">{tag}</span>
          <h2 className="about-heading">{heading}</h2>

          <div className="about-body">
            {paragraphs.map((p, idx) => (
              <p key={idx} className="about-paragraph">{p}</p>
            ))}
          </div>

          {/* Genuine commitments list */}
          <div className="about-commitments">
            <div className="about-commitment-item">
              <CheckCircle2 size={18} className="commitment-icon" aria-hidden="true" />
              <span>Dedicated unisex styling tailored for both women and men.</span>
            </div>
            <div className="about-commitment-item">
              <CheckCircle2 size={18} className="commitment-icon" aria-hidden="true" />
              <span>{productsClaim}</span>
            </div>
            <div className="about-commitment-item">
              <CheckCircle2 size={18} className="commitment-icon" aria-hidden="true" />
              <span>Conveniently located on Sharanpur Road near Rajiv Gandhi Bhavan.</span>
            </div>
          </div>

          <div className="about-actions">
            <a href="#services" className="btn btn-primary">
              <span>View Services & Specialities</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
