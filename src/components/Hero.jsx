import { ArrowRight, Calendar, Sparkles, MapPin, Award } from 'lucide-react'
import { salonData } from '../data/salonData'
import ImageWithFallback from './ImageWithFallback'
import './Hero.css'

export default function Hero() {
  const { heroEyebrow, heroHeadline, heroSubheadline } = salonData.brand
  const { shortAddress } = salonData.location

  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      <div className="container hero-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-content">
          <div className="hero-badge-wrap">
            <span className="badge-pill">
              <Sparkles size={13} aria-hidden="true" />
              <span>Established in 2007 • Sharanpur Road</span>
            </span>
          </div>

          <span className="hero-eyebrow">{heroEyebrow}</span>
          
          <h1 className="hero-title">
            A little time <br className="hero-br" />
            <em>for yourself.</em>
          </h1>

          <p className="hero-lead">
            {heroSubheadline}
          </p>

          <div className="hero-cta-group">
            <a href="#appointment" className="btn btn-primary">
              <Calendar size={17} aria-hidden="true" />
              <span>Book an Appointment</span>
            </a>
            
            <a href="#services" className="btn btn-secondary">
              <span>Explore Our Services</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Natural verified details bar */}
          <div className="hero-meta-bar">
            <div className="hero-meta-item">
              <MapPin size={16} className="hero-meta-icon" aria-hidden="true" />
              <div className="hero-meta-text">
                <span className="hero-meta-label">Location</span>
                <span className="hero-meta-val">{shortAddress}</span>
              </div>
            </div>

            <div className="hero-meta-divider" aria-hidden="true" />

            <div className="hero-meta-item">
              <Award size={16} className="hero-meta-icon" aria-hidden="true" />
              <div className="hero-meta-text">
                <span className="hero-meta-label">Experience</span>
                <span className="hero-meta-val">17+ Years of Trusted Unisex Styling</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Editorial Visual Articulation */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
              alt="Artful salon studio with warm lighting and comfortable client styling stations"
              aspectRatio="4/5"
              priority={true}
              className="hero-main-img"
            />
            {/* Subtle floating editorial tag */}
            <div className="hero-float-card">
              <span className="float-card-eyebrow">UNISEX SALON & ACADEMY</span>
              <span className="float-card-text">Hair • Beauty • Makeup • Nails</span>
            </div>
          </div>

          {/* Secondary architectural accent block */}
          <div className="hero-accent-block" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
