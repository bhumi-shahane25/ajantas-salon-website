import { GraduationCap, MessageCircle, BookOpen, Sparkles, CheckCircle } from 'lucide-react'
import { salonData } from '../data/salonData'
import './Academy.css'

export default function Academy() {
  const { tag, title, subtitle, description, courses, enquiryMessage } = salonData.academy
  const { whatsappNumber } = salonData.contact

  const handleAcademyWhatsApp = (courseTitle) => {
    const text = encodeURIComponent(
      courseTitle
        ? `Hello Ajanta's Academy, I am interested in knowing more details about the ${courseTitle}.`
        : enquiryMessage
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="academy" className="section section-alt academy-section" aria-label="Beauty Academy">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="eyebrow">{tag}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        {/* Narrative & Course Cards */}
        <div className="academy-overview-card">
          <div className="academy-overview-text">
            <p className="academy-lead">{description}</p>
            <div className="academy-features">
              <div className="academy-feature-pill">
                <CheckCircle size={15} className="academy-feature-icon" aria-hidden="true" />
                <span>One-on-one practical training</span>
              </div>
              <div className="academy-feature-pill">
                <CheckCircle size={15} className="academy-feature-icon" aria-hidden="true" />
                <span>Real salon environment in Nashik</span>
              </div>
              <div className="academy-feature-pill">
                <CheckCircle size={15} className="academy-feature-icon" aria-hidden="true" />
                <span>Beginner to advanced modules</span>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="academy-courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="academy-course-card">
              <div className="course-icon-badge">
                <BookOpen size={20} aria-hidden="true" />
              </div>

              <h3 className="course-title">{course.title}</h3>
              <p className="course-focus">{course.focus}</p>

              <div className="course-meta">
                <span className="course-meta-label">Ideal for:</span>
                <span className="course-meta-val">{course.suitableFor}</span>
              </div>

              <button
                type="button"
                className="btn btn-secondary btn-sm course-btn"
                onClick={() => handleAcademyWhatsApp(course.title)}
                aria-label={`Enquire about ${course.title} via WhatsApp`}
              >
                <MessageCircle size={15} aria-hidden="true" />
                <span>Enquire About Course</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="academy-cta-strip">
          <div className="academy-cta-info">
            <GraduationCap size={24} className="academy-cta-icon" aria-hidden="true" />
            <div>
              <h4>Looking for upcoming batch dates or custom schedules?</h4>
              <p>Speak directly with our instructors to find a schedule suited to your routine.</p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-whatsapp academy-cta-action"
            onClick={() => handleAcademyWhatsApp()}
          >
            <MessageCircle size={16} aria-hidden="true" />
            <span>Enquire on WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  )
}
