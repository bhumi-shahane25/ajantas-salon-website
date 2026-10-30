import { Sparkles, MapPin, Phone } from 'lucide-react'
import { salonData } from '../data/salonData'
import { useScrollReveal } from '../hooks/useScrollReveal'
import AppointmentForm from '../components/AppointmentForm'
import LocationSection from '../components/LocationSection'

export default function ContactPage() {
  const { name } = salonData.brand
  const { primaryAddress } = salonData.location

  useScrollReveal()

  return (
    <div className="contact-page-root page-transition">
      {/* Subpage Header Banner */}
      <section className="page-hero-banner" aria-label="Contact and Booking Header">
        <div className="container">
          <span className="page-hero-eyebrow">
            <Sparkles size={14} aria-hidden="true" />
            <span>RESERVATIONS & STUDIO VISIT</span>
          </span>
          <h1 className="page-hero-title">Contact & Appointments</h1>
          <p className="page-hero-subtitle">
            Schedule your salon session, get customized pricing advice, or find directions to our Sharanpur Road studio in Nashik.
          </p>
        </div>
      </section>

      {/* Appointment Booking Enquiry Form & Direct Contact */}
      <AppointmentForm />

      {/* Studio Location, Landmarks & Google Maps Embed */}
      <LocationSection />
    </div>
  )
}
