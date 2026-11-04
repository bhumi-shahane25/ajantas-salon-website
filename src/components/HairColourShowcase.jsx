import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Sparkles, MessageCircle } from 'lucide-react'
import { salonData } from '../data/salonData'
import ImageWithFallback from './ImageWithFallback'
import './HairColourShowcase.css'

export default function HairColourShowcase() {
  const { whatsappNumber } = salonData.contact

  // Video references and states
  const videoRef1 = useRef(null)
  const videoRef2 = useRef(null)
  const [isPlaying1, setIsPlaying1] = useState(false)
  const [isPlaying2, setIsPlaying2] = useState(false)
  const [isMuted1, setIsMuted1] = useState(true)
  const [isMuted2, setIsMuted2] = useState(true)

  const togglePlay1 = () => {
    if (!videoRef1.current) return
    if (videoRef1.current.paused) {
      videoRef1.current.play()
      setIsPlaying1(true)
    } else {
      videoRef1.current.pause()
      setIsPlaying1(false)
    }
  }

  const togglePlay2 = () => {
    if (!videoRef2.current) return
    if (videoRef2.current.paused) {
      videoRef2.current.play()
      setIsPlaying2(true)
    } else {
      videoRef2.current.pause()
      setIsPlaying2(false)
    }
  }

  const toggleMute1 = (e) => {
    e.stopPropagation()
    if (!videoRef1.current) return
    videoRef1.current.muted = !videoRef1.current.muted
    setIsMuted1(videoRef1.current.muted)
  }

  const toggleMute2 = (e) => {
    e.stopPropagation()
    if (!videoRef2.current) return
    videoRef2.current.muted = !videoRef2.current.muted
    setIsMuted2(videoRef2.current.muted)
  }

  const handleEnquiry = () => {
    const text = encodeURIComponent(
      "Hello Ajanta's Salon, I saw your hair colour showcase and would like to consult about hair colouring and styling availability."
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="hair-colour-showcase-section" aria-label="Hair Colour & Transformation Showcase">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="eyebrow">
            <Sparkles size={14} aria-hidden="true" style={{ display: 'inline', marginRight: '6px' }} />
            REAL CLIENT TRANSFORMATIONS
          </span>
          <h2 className="section-title">Artistry in Hair Colour</h2>
          <p className="section-subtitle">
            From subtle sun-kissed dimension and rich brunette gloss to fashion highlights, explore real client results crafted with nourishing care at Ajanta's Salon.
          </p>
        </div>

        {/* Video Showcase Layout */}
        <div className="hair-videos-grid">
          {/* Video 1 */}
          <div className="hair-video-card">
            <div className="hair-video-wrapper" onClick={togglePlay1}>
              <video
                ref={videoRef1}
                playsInline
                muted={isMuted1}
                preload="metadata"
                loop
                onPlay={() => setIsPlaying1(true)}
                onPause={() => setIsPlaying1(false)}
                className="hair-video-player"
              >
                <source src="/videos/IMG_6793.mp4" type="video/mp4" />
                <source src="/videos/IMG_6793.mp4" type="video/mp4" />                Your browser does not support the video tag.
              </video>

              {/* Video Overlay Controls */}
              {!isPlaying1 && (
                <div className="video-play-overlay" aria-hidden="true">
                  <div className="video-play-btn">
                    <Play size={26} fill="currentColor" />
                  </div>
                  <span className="video-play-hint">Watch Transformation</span>
                </div>
              )}

              {/* Interactive Toolbar */}
              <div className="video-control-bar" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="video-ctrl-icon-btn"
                  onClick={togglePlay1}
                  aria-label={isPlaying1 ? 'Pause Video' : 'Play Video'}
                >
                  {isPlaying1 ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </button>
                <span className="video-status-text">Dimensional Balayage & Gloss</span>
                <button
                  type="button"
                  className="video-ctrl-icon-btn mute-btn"
                  onClick={toggleMute1}
                  aria-label={isMuted1 ? 'Unmute' : 'Mute'}
                >
                  {isMuted1 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>

            <div className="hair-video-info">
              <span className="hair-video-tag">Dimensional Highlights</span>
              <h3 className="hair-video-title">Multi-Tonal Gloss & Natural Movement</h3>
              <p className="hair-video-desc">
                Soft seamless blending that catches natural light, leaving hair silky, soft to touch, and visibly nourished.
              </p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="hair-video-card">
            <div className="hair-video-wrapper" onClick={togglePlay2}>
              <video
                ref={videoRef2}
                playsInline
                muted={isMuted2}
                preload="metadata"
                loop
                onPlay={() => setIsPlaying2(true)}
                onPause={() => setIsPlaying2(false)}
                className="hair-video-player"
              >
                <source src="/videos/IMG_6794.mp4" type="video/mp4" />
                <source src="/videos/IMG_6794.mp4" type="video/mp4" />                Your browser does not support the video tag.
              </video>

              {/* Video Overlay Controls */}
              {!isPlaying2 && (
                <div className="video-play-overlay" aria-hidden="true">
                  <div className="video-play-btn">
                    <Play size={26} fill="currentColor" />
                  </div>
                  <span className="video-play-hint">Watch Transformation</span>
                </div>
              )}

              {/* Interactive Toolbar */}
              <div className="video-control-bar" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="video-ctrl-icon-btn"
                  onClick={togglePlay2}
                  aria-label={isPlaying2 ? 'Pause Video' : 'Play Video'}
                >
                  {isPlaying2 ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
                </button>
                <span className="video-status-text">Lustrous Finish & Tone</span>
                <button
                  type="button"
                  className="video-ctrl-icon-btn mute-btn"
                  onClick={toggleMute2}
                  aria-label={isMuted2 ? 'Unmute' : 'Mute'}
                >
                  {isMuted2 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
              </div>
            </div>

            <div className="hair-video-info">
              <span className="hair-video-tag">Rich Warm Tone</span>
              <h3 className="hair-video-title">Radiant Brunette & Smoothing Blowout</h3>
              <p className="hair-video-desc">
                High-shine conditioning and deep tone enhancement customized for Indian hair textures and prolonged vibrancy.
              </p>
            </div>
          </div>
        </div>

        {/* Real Client Hair Colour Still Gallery */}
        <div className="hair-stills-section">
          <div className="hair-stills-header">
            <div>
              <span className="eyebrow" style={{ marginBottom: '4px' }}>PORTFOLIO STILLS</span>
              <h3 className="hair-stills-title">Real Hair Colour Results at Ajanta's</h3>
            </div>
            <button
              type="button"
              className="btn btn-whatsapp btn-sm"
              onClick={handleEnquiry}
            >
              <MessageCircle size={15} aria-hidden="true" />
              <span>Consult with Stylist</span>
            </button>
          </div>

          <div className="hair-stills-grid">
            <div className="hair-still-card">
              <ImageWithFallback
                src="/images/hair-colour/IMG_6795.jpg"
                alt="Client hair colour transformation at Ajanta's Salon"
                aspectRatio="4/5"
              />
              <div className="hair-still-caption">
                <span>Natural Golden Brown Melt</span>
              </div>
            </div>

            <div className="hair-still-card">
              <ImageWithFallback
                src="/images/hair-colour/IMG_6796.jpg"
                alt="Dimensional hair colour result at Ajanta's Salon"
                aspectRatio="4/5"
              />
              <div className="hair-still-caption">
                <span>Warm Hazelnut Texture & Curls</span>
              </div>
            </div>

            <div className="hair-still-card">
              <ImageWithFallback
                src="/images/hair-colour/IMG_6797.jpg"
                alt="Finished client hair colour result at Ajanta's Salon"
                aspectRatio="4/5"
              />
              <div className="hair-still-caption">
                <span>Lustrous Chestnut Tone & Volume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
