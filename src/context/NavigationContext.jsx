import { createContext, useContext, useState, useEffect } from 'react'

const NavigationContext = createContext({
  currentPath: '/',
  navigate: () => {},
  selectedService: null,
  setSelectedService: () => {},
})

export function NavigationProvider({ children }) {
  // Normalize initial path: strip trailing slash if not root
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/'
    const path = window.location.pathname.toLowerCase()
    if (path.length > 1 && path.endsWith('/')) {
      return path.slice(0, -1)
    }
    // Also check for hash route support (e.g. #/about or #about) if loaded from hash
    const hash = window.location.hash
    if (hash && hash.startsWith('#/')) {
      return hash.slice(1)
    }
    return path || '/'
  }

  const [currentPath, setCurrentPath] = useState(getInitialPath)
  const [selectedService, setSelectedService] = useState(null)

  // Listen for browser Back/Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      let path = window.location.pathname.toLowerCase()
      if (path.length > 1 && path.endsWith('/')) {
        path = path.slice(0, -1)
      }
      const hash = window.location.hash
      if (hash && hash.startsWith('#/')) {
        path = hash.slice(1)
      }
      setCurrentPath(path || '/')
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (toPath, options = {}) => {
    let cleanPath = toPath.toLowerCase()
    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1)
    }

    if (cleanPath !== currentPath) {
      window.history.pushState({}, '', cleanPath)
      setCurrentPath(cleanPath)
    }

    if (options.service) {
      setSelectedService(options.service)
    }

    // Scroll handling: scroll to top or target anchor
    if (options.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(options.scrollTo)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        selectedService,
        setSelectedService,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  return useContext(NavigationContext)
}
