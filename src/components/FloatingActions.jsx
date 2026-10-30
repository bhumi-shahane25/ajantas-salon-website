import { useState, useEffect } from 'react'
import { MessageCircle, Phone, Calendar } from 'lucide-react'
import { salonData } from '../data/salonData'
import { useNavigation } from '../context/NavigationContext'
import './FloatingActions.css'

export default function FloatingActions() {
  const { whatsappNumber, primaryPhoneTel } = salonData.contact
  const { currentPath, navigate } = useNavigation()
  const [showStickyBar, setShowStickyBar] = useState(false)
  const [isAtAppointment, setIsAtAppointment] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky mobile bar after scrolling down past 300px
      const scrolled = window.scrollY > 300
      setShowStickyBar(scrolled)

      // Check if user is currently looking at appointment form
      const appointmentEl = document.getElementById('appointment')
      if (appointmentEl) {
        const rect = appointmentEl.getBoundingClientRect()
        const inView = rect.top < window.innerHeight && rect.bottom > 150
        setIsAtAppointment(inView)
      } else {
        setIsAtAppointment(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentPath])

  const defaultWaText = encodeURIComponent("Hello Ajanta's Salon, I would like to enquire about your services and appointment availability.")

  const handleBookClick = (e) => {
    e.preventDefault()
    navigate('/contact', { scrollTo: 'appointment' })
  }

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultWaText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`floating-wa-btn ${showStickyBar && !isAtAppointment ? 'offset-for-mobile-bar' : ''}`}
        aria-label="Chat directly with Ajanta's Salon on WhatsApp"
      >
        <span className="wa-tooltip">Chat with us</span>
        <div className="wa-icon-circle">
          <MessageCircle size={26} aria-hidden="true" />
        </div>
      </a>

      {/* Discreet Mobile Sticky Bottom Action Bar */}
      <div
        className={`mobile-sticky-action-bar ${showStickyBar && !isAtAppointment ? 'visible' : ''}`}
        role="complementary"
        aria-label="Quick booking shortcuts"
      >
        <div className="mobile-sticky-inner">
          <a
            href={`tel:${primaryPhoneTel}`}
            className="mobile-sticky-btn secondary"
            aria-label="Call salon directly"
          >
            <Phone size={16} aria-hidden="true" />
            <span>Call</span>
          </a>

          <button
            type="button"
            className="mobile-sticky-btn primary"
            onClick={handleBookClick}
            aria-label="Jump to appointment enquiry form"
          >
            <Calendar size={16} aria-hidden="true" />
            <span>Book Appointment</span>
          </button>
        </div>
      </div>
    </>
  )
}
