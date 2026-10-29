import { Clock, Users, Sparkles, GraduationCap } from 'lucide-react'
import { salonData } from '../data/salonData'
import './TrustStrip.css'

export default function TrustStrip() {
  const { trustHighlights } = salonData

  // Match each highlight with a tasteful understated icon
  const icons = [Clock, Users, Sparkles, GraduationCap]

  return (
    <section className="trust-strip" aria-label="Salon Heritage and Values">
      <div className="container">
        <div className="trust-editorial-grid">
          {trustHighlights.map((item, index) => {
            const Icon = icons[index % icons.length]
            return (
              <div key={item.title} className="trust-editorial-item">
                <div className="trust-item-header">
                  <div className="trust-icon-box">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <h3 className="trust-item-title">{item.title}</h3>
                </div>
                <p className="trust-item-desc">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
