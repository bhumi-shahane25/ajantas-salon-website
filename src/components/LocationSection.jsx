import { MapPin, Navigation, Clock, Building, Compass } from 'lucide-react'
import { salonData } from '../data/salonData'
import './LocationSection.css'

export default function LocationSection() {
  const { primaryAddress, landmarks, googleMapsUrl, scheduleNote } = salonData.location
  const { primaryPhoneDisplay, primaryPhoneTel } = salonData.contact

  return (
    <section id="contact" className="section section-alt location-section" aria-label="Location and Directions">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">VISIT OUR STUDIO</span>
          <h2 className="section-title">Conveniently Located in Nashik</h2>
          <p className="section-subtitle">
            Easy to find on Sharanpur Road near Rajiv Gandhi Bhavan and Kulkarni Garden.
          </p>
        </div>

        <div className="location-grid">
          {/* Address Details Card */}
          <div className="location-card">
            <div className="location-card-header">
              <div className="location-icon-box">
                <MapPin size={24} aria-hidden="true" />
              </div>
              <div>
                <span className="location-tag">Studio Address</span>
                <h3 className="location-title">Ajanta's Salon for He & She</h3>
              </div>
            </div>

            <p className="location-full-address">
              {primaryAddress}
            </p>

            <div className="location-landmarks-wrap">
              <span className="landmarks-title">
                <Compass size={15} aria-hidden="true" />
                <span>Nearby Landmarks:</span>
              </span>
              <ul className="landmarks-list">
                {landmarks.map((landmark, idx) => (
                  <li key={idx} className="landmark-tag">
                    {landmark}
                  </li>
                ))}
              </ul>
            </div>

            <div className="location-schedule-note">
              <Clock size={16} className="schedule-icon" aria-hidden="true" />
              <span>{scheduleNote}</span>
            </div>

            <div className="location-card-actions">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Open directions in Google Maps"
              >
                <Navigation size={16} aria-hidden="true" />
                <span>Get Directions on Google Maps</span>
              </a>

              <a
                href={`tel:${primaryPhoneTel}`}
                className="btn btn-secondary"
                aria-label={`Call salon for landmark assistance: ${primaryPhoneDisplay}`}
              >
                <span>Call for Directions: {primaryPhoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Map Preview Container */}
          <div className="location-map-frame">
            <div className="map-embed-container">
              <iframe
                title="Google Maps Location of Ajanta's Salon, Sharanpur Road Nashik"
                src="https://maps.google.com/maps?q=Sharanpur+Road+Rajiv+Gandhi+Bhavan+Kulkarni+Garden+Nashik+Maharashtra+422005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="map-badge-overlay">
              <Building size={14} aria-hidden="true" />
              <span>Sharanpur Road • Nashik 422005</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
