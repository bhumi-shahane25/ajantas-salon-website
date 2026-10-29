import { Phone, Sparkles } from 'lucide-react'
import { salonData } from '../data/salonData'
import './AnnouncementBar.css'

export default function AnnouncementBar() {
  const { announcement } = salonData.brand
  const { primaryPhoneDisplay, primaryPhoneTel } = salonData.contact

  return (
    <div className="announcement-bar" role="region" aria-label="Salon Announcement">
      <div className="container announcement-content">
        <div className="announcement-left">
          <Sparkles size={14} className="announcement-icon" aria-hidden="true" />
          <span className="announcement-text">{announcement}</span>
        </div>
        <a
          href={`tel:${primaryPhoneTel}`}
          className="announcement-phone-link"
          aria-label={`Call salon at ${primaryPhoneDisplay}`}
        >
          <Phone size={13} aria-hidden="true" />
          <span>Call: {primaryPhoneDisplay}</span>
        </a>
      </div>
    </div>
  )
}
