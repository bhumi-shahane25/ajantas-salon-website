import { useState } from 'react'

/**
 * ImageWithFallback
 * Loads images with graceful placeholders and an elegant branded fallback
 * if external network or image URLs fail.
 */
export default function ImageWithFallback({
  src,
  alt,
  className = '',
  aspectRatio = '4/3',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw'
}) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={`image-wrapper ${isLoaded ? 'loaded' : ''} ${className}`}
      style={{ aspectRatio }}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt || "Ajanta's Salon for He & She"}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          sizes={sizes}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
      ) : (
        <div className="image-fallback">
          <svg
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span style={{ marginTop: '10px', fontSize: '0.85rem', fontWeight: 600 }}>
            Ajanta's Salon
          </span>
          <span style={{ fontSize: '0.75rem', opacity: 0.8, marginTop: '2px' }}>
            Nashik
          </span>
        </div>
      )}
    </div>
  )
}
