import { NavigationProvider, useNavigation } from './context/NavigationContext'
import AnnouncementBar from './components/AnnouncementBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

// Five Dedicated Multi-Page Views
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function AppContent() {
  const { currentPath } = useNavigation()

  // Route matching with clean normalization
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage key="about" />
      case '/services':
        return <ServicesPage key="services" />
      case '/gallery':
        return <GalleryPage key="gallery" />
      case '/contact':
        return <ContactPage key="contact" />
      case '/':
      default:
        return <HomePage key="home" />
    }
  }

  return (
    <div className="site-wrapper">
      {/* 1. Top Slim Announcement Bar with telephone shortcut */}
      <AnnouncementBar />

      {/* 2. Main Sticky Header with Actual Salon Logo & Multi-Page Navigation */}
      <Navbar />

      {/* 3. Multi-Page View Container with smooth transition */}
      <main id="main-content" role="main">
        {renderCurrentPage()}
      </main>

      {/* 4. Compact, Prestigious Site Footer with Actual Logo */}
      <Footer />

      {/* 5. Floating WhatsApp shortcut and Mobile Sticky Booking Bar */}
      <FloatingActions />
    </div>
  )
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  )
}
