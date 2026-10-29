import { useState } from 'react'
import { Calendar, Send, Phone, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { InstagramIcon } from './Icons'
import { salonData } from '../data/salonData'
import './AppointmentForm.css'

export default function AppointmentForm({ selectedService }) {
  const { serviceCategories, timeSlots, disclaimer } = salonData.appointmentForm
  const { primaryPhoneDisplay, primaryPhoneTel, secondaryPhoneDisplay, secondaryPhoneTel, whatsappNumber, instagramUrl, instagramHandle } = salonData.contact

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: selectedService || serviceCategories[0],
    date: '',
    time: timeSlots[0],
    message: ''
  })

  // Synchronize when selectedService changes from outside
  useState(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }))
    }
  }, [selectedService])

  const [errors, setErrors] = useState({})
  const [submissionState, setSubmissionState] = useState(null) // 'prepared' or null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.'
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '')
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your phone number.'
    } else if (cleanPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service category.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    // Build the clean WhatsApp appointment enquiry text
    const lines = [
      `*New Appointment Enquiry — Ajanta's Salon*`,
      `----------------------------------------`,
      `*Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      `*Service:* ${formData.service}`,
      `*Preferred Date:* ${formData.date ? formData.date : 'Flexible / Earliest available'}`,
      `*Preferred Slot:* ${formData.time}`,
      formData.message.trim() ? `*Notes:* ${formData.message.trim()}` : null,
      `----------------------------------------`,
      `_Enquiry sent via Ajanta's Salon website. Awaiting salon availability confirmation._`
    ].filter(Boolean)

    const fullMessage = lines.join('\n')
    const encodedText = encodeURIComponent(fullMessage)
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`

    // Open WhatsApp in a new tab/app
    const newWindow = window.open(waUrl, '_blank', 'noopener,noreferrer')
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Fallback if popup blocker intercepted
      window.location.href = waUrl
    }

    setSubmissionState('prepared')
  }

  // Get today's date in YYYY-MM-DD for date input min attribute
  const todayDateString = new Date().toISOString().split('T')[0]

  return (
    <section id="appointment" className="section appointment-section" aria-label="Book an Appointment Enquiry">
      <div className="container">
        <div className="appointment-wrapper">
          {/* Form Header */}
          <div className="section-header text-left">
            <span className="eyebrow">RESERVATIONS & INQUIRIES</span>
            <h2 className="section-title">Schedule Your Salon Visit</h2>
            <p className="section-subtitle">
              Send your preferred service and time directly to our salon desk via WhatsApp or give us a quick call.
            </p>
          </div>

          <div className="appointment-grid">
            {/* Form Column */}
            <div className="appointment-form-card">
              <form onSubmit={handleSubmit} noValidate>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Radhika Sharma / Rohan Patil"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="form-error-text" role="alert">{errors.name}</p>}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Mobile Number <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 98603 47226"
                    className={`form-input ${errors.phone ? 'error' : ''}`}
                    required
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="form-error-text" role="alert">{errors.phone}</p>}
                </div>

                {/* Service Selection */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    Service Category <span className="req">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`form-select ${errors.service ? 'error' : ''}`}
                  >
                    {serviceCategories.map((cat, idx) => (
                      <option key={idx} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label">
                      Preferred Date (Optional)
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      min={todayDateString}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="time" className="form-label">
                      Preferred Time Slot (Optional)
                    </label>
                    <select
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="form-select"
                    >
                      {timeSlots.map((slot, idx) => (
                        <option key={idx} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Specific Requests or Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any specific styling, hair length details, skin sensitivities, or occasion notes..."
                    className="form-textarea"
                  />
                </div>

                {/* Mandatory Disclaimer */}
                <div className="appointment-disclaimer" role="note">
                  <AlertCircle size={17} className="disclaimer-icon" aria-hidden="true" />
                  <p>{disclaimer}</p>
                </div>

                {/* Submit Action */}
                <button type="submit" className="btn btn-whatsapp btn-submit">
                  <Send size={16} aria-hidden="true" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                {submissionState === 'prepared' && (
                  <div className="submission-notice" role="status">
                    <CheckCircle2 size={18} className="notice-icon" aria-hidden="true" />
                    <span>
                      Enquiry transferred to WhatsApp! If the app did not open automatically, you can also reach us directly at <strong>{primaryPhoneDisplay}</strong>.
                    </span>
                  </div>
                )}
              </form>
            </div>

            {/* Direct Contact Column */}
            <div className="appointment-sidebar">
              {/* Telephone Card */}
              <div className="contact-quick-card">
                <div className="quick-card-icon">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <h3>Prefer a Direct Phone Call?</h3>
                <p>
                  You are welcome to speak directly with our front desk for immediate inquiries or same-day scheduling.
                </p>
                <div className="quick-phone-actions">
                  <a href={`tel:${primaryPhoneTel}`} className="btn btn-primary btn-sm">
                    <Phone size={14} aria-hidden="true" />
                    <span>{primaryPhoneDisplay} (Primary)</span>
                  </a>
                  <a href={`tel:${secondaryPhoneTel}`} className="btn btn-secondary btn-sm">
                    <Phone size={14} aria-hidden="true" />
                    <span>{secondaryPhoneDisplay}</span>
                  </a>
                </div>
              </div>

              {/* Instagram Card */}
              <div className="contact-quick-card">
                <div className="quick-card-icon insta">
                  <InstagramIcon size={22} />
                </div>
                <h3>Connect on Instagram</h3>
                <p>
                  Explore recent hairstyles, bridal work, and salon highlights on our official Instagram page.
                </p>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm insta-link-btn"
                >
                  <InstagramIcon size={14} />
                  <span>Visit {instagramHandle}</span>
                </a>
              </div>

              {/* Helpful Tips Card */}
              <div className="contact-tips-card">
                <div className="tips-header">
                  <Clock size={16} aria-hidden="true" />
                  <span>Salon Visit Guidelines</span>
                </div>
                <ul className="tips-list">
                  <li>Advance enquiry recommended for weekend appointments.</li>
                  <li>Bridal and occasion consultations require advance notice.</li>
                  <li>Comfortable waiting lounge and hygienic environment.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
