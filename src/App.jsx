import { useState } from 'react'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import Services from './components/Services'
import SignatureSection from './components/SignatureSection'
import Gallery from './components/Gallery'
import Academy from './components/Academy'
import AppointmentForm from './components/AppointmentForm'
import LocationSection from './components/LocationSection'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState(null)

  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForBooking(serviceTitle)
  }

  return (
    <div className="site-wrapper">
      {/* Top Slim Announcement Bar */}
      <AnnouncementBar />

      {/* Main Sticky Header & Navigation */}
      <Navbar />

      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust & Heritage Introduction Strip */}
        <TrustStrip />

        {/* 3. About Section */}
        <About />

        {/* 4. Complete Services Section with Editorial Layout */}
        <Services onSelectService={handleSelectService} />

        {/* 5. Signature Showcase: Bridal & Occasion Styling */}
        <SignatureSection />

        {/* 6. Curated Beauty & Hair Gallery with Interactive Lightbox */}
        <Gallery />

        {/* 7. Beauty Academy Section */}
        <Academy />

        {/* 8. Appointment & Direct Contact Section */}
        <AppointmentForm selectedService={selectedServiceForBooking} />

        {/* 9. Location & Directions Section */}
        <LocationSection />
      </main>

      {/* 10. Refined Site Footer */}
      <Footer />

      {/* Floating WhatsApp and Mobile Quick Actions */}
      <FloatingActions />
    </div>
  )
}
