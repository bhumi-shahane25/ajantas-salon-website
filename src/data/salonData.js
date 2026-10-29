/**
 * =============================================================================
 * AJANTA'S SALON FOR HE & SHE — CENTRAL BUSINESS & CONTENT CONFIGURATION
 * =============================================================================
 * 
 * NOTE FOR SALON OWNER & DEVELOPERS:
 * This file contains all primary business details, contact numbers, addresses,
 * service lists, images, and gallery data.
 * You can easily update phone numbers, links, announcements, or replace temporary
 * photography with your original salon pictures right here without editing HTML/CSS.
 * =============================================================================
 */

export const salonData = {
  // Brand Identity
  brand: {
    name: "Ajanta's Salon for He & She",
    shortName: "Ajanta's",
    tagline: "Salon for He & She",
    establishmentYear: 2007,
    experienceYears: new Date().getFullYear() - 2007,
    salonType: "Unisex Hair, Beauty, Nail Studio & Academy",
    badgeText: "ESTD. 2007 • SHARANPUR ROAD, NASHIK",
    announcement: "Welcoming He & She • Professional Unisex Hair, Beauty & Academy in Nashik • Appointments & Inquiries: +91 98603 47226",
    heroEyebrow: "AJANTA'S SALON FOR HE & SHE",
    heroHeadline: "A little time for yourself.",
    heroSubheadline: "Thoughtful hair and beauty care to help you look and feel your best. Serving men and women in Nashik with genuine care since 2007.",
    productsClaim: "We prioritise authentic, quality salon products for every hair and skin service.", // Phrased conservatively & editable
  },

  // Primary Contact & Location Info
  contact: {
    primaryPhoneDisplay: "+91 98603 47226",
    primaryPhoneTel: "+919860347226",
    whatsappNumber: "919860347226", // International format without '+' for wa.me links
    secondaryPhoneDisplay: "+91 70281 52763",
    secondaryPhoneTel: "+917028152763",
    instagramUrl: "https://www.instagram.com/ajantassalon?mdxt=MWhhZHozZGVlMHI4dA==",
    instagramHandle: "@ajantassalon",
    businessProfileUrl: "https://fabvisitingcard.in/ajantas-salon-for-he-she-1",
  },

  location: {
    city: "Nashik",
    state: "Maharashtra",
    pinCode: "422005",
    primaryAddress: "Near SBI ATM, Near Shraddha Hospital, Behind Kulkarni Garden, Sharanpur Road / Rajiv Gandhi Bhavan Area, Nashik, Maharashtra 422005",
    shortAddress: "Sharanpur Road / Rajiv Gandhi Bhavan area, Nashik 422005",
    landmarks: [
      "Near SBI ATM",
      "Near Shraddha Hospital",
      "Behind Kulkarni Garden",
      "Sharanpur Road / Rajiv Gandhi Bhavan Area"
    ],
    // Google Maps search query URL directly pointing to the exact address & landmarks
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ajantas+Salon+Near+SBI+ATM+Shraddha+Hospital+Behind+Kulkarni+Garden+Sharanpur+Road+Nashik+422005",
    // Embed map URL for iframe (interactive map preview of the Nashik Sharanpur Road vicinity)
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14997.518883584742!2d73.7661555!3d20.0028292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebb6e42be81b%3A0xc3c5452f1e67049e!2sSharanpur%20Rd%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    scheduleNote: "Salon visits are accommodated throughout the week. Please call or WhatsApp ahead to check immediate slot availability.",
  },

  // Trust / Credibility Highlights (Honest, verified facts only)
  trustHighlights: [
    {
      title: "Established 2007",
      description: "Serving Nashik residents with consistent, trusted personal grooming for over 17 years."
    },
    {
      title: "Complete Unisex Care",
      description: "Dedicated hair, skin, and grooming services customized for both men and women."
    },
    {
      title: "Quality Product Focus",
      description: "Carefully chosen professional formulations tailored for Indian hair and skin textures."
    },
    {
      title: "Bridal & Academy",
      description: "Specialized bridal & occasion styling plus practical beauty, makeup, and hair courses."
    }
  ],

  // About Section Content
  about: {
    tag: "ABOUT THE SALON",
    heading: "A warm, personal approach to hair and beauty in Nashik.",
    paragraphs: [
      "Founded in 2007 in the heart of Sharanpur Road, Ajanta's Salon for He & She was created to give individuals a calm, respectful space to unwind and take care of their hair, skin, and personal well-being.",
      "Whether you are dropping in for a clean classic haircut, a restorative hair spa after a demanding week, vibrant hair colour, or preparing for an auspicious wedding celebration, our team focuses on what suits your individuality best.",
      "Alongside our salon services, we also run beauty, makeup, and hair academy courses, sharing practical salon techniques with aspiring artists right here in Nashik."
    ],
    // High-resolution temporary royalty-free photography (easily replaceable with salon photos)
    images: {
      primary: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
      primaryAlt: "Professional hair and beauty studio interior with warm ambient lighting",
      secondary: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      secondaryAlt: "Delicate hair styling and beauty care in progress"
    }
  },

  // Services Categories (All authentic services from business profile)
  services: [
    {
      id: "haircuts-styling",
      title: "Haircuts & Styling",
      tag: "Hair Studio",
      summary: "Precision cuts, texture styling, and everyday maintenance tailored to your facial structure and hair type.",
      items: [
        "Men's classic & modern haircuts",
        "Women's customized haircuts & styling",
        "Beard shaping & grooming",
        "Blow-dry styling & thermal setting",
        "Hair wash & professional conditioning"
      ],
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Stylist performing precision haircut in salon",
      enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about haircut and styling services."
    },
    {
      id: "hair-treatments-colour",
      title: "Hair Treatments & Colour",
      tag: "Hair Chemistry",
      summary: "Deep restorative treatments, nourishing hair spas, global hair colouring, and smoothing transformations.",
      items: [
        "Deep conditioning hair spa",
        "Keratin smoothing treatment",
        "Hair straightening & rebonding",
        "Global hair colour & root touch-up",
        "Highlights, balayage & fashion streaks"
      ],
      image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Rich glossy hair colour and nourishing treatment",
      enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about hair colour, spa, or smoothing treatments."
    },
    {
      id: "skin-facial-care",
      title: "Skin & Facial Care",
      tag: "Dermal Care",
      summary: "Refreshing cleanups, rejuvenating facials, and delicate grooming designed for natural glow and relaxation.",
      items: [
        "Rejuvenating herbal & brightening facials",
        "Deep pore skin cleanup",
        "Precision eyebrow threading",
        "Full body waxing & gentle peel waxing",
        "Tan removal & skin polish"
      ],
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Relaxing facial and skincare treatment",
      enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about facial and skincare services."
    },
    {
      id: "makeup-bridal",
      title: "Makeup & Bridal Artistry",
      tag: "Celebrations",
      summary: "Artful makeup that enhances your natural elegance for weddings, engagements, receptions, and photoshoots.",
      items: [
        "Traditional & modern bridal makeup",
        "Engagement & sangeet looks",
        "Party & guest makeup",
        "Photoshoot & portfolio makeup",
        "Saree draping & dupatta setting"
      ],
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Artful bridal makeup and traditional jewelry",
      enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about bridal or occasion makeup availability."
    },
    {
      id: "nails-extensions",
      title: "Nails & Extensions",
      tag: "Nail Lounge",
      summary: "Durable extensions, creative nail artistry, and strengthening care to keep your nails immaculate.",
      items: [
        "Gel nail extensions & overlays",
        "Acrylic nail extensions",
        "Custom nail art & French tips",
        "Nail shaping, buffing & gel polish",
        "Extension removal & nail repair"
      ],
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Refined gel nail art and manicured nails",
      enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about nail extensions and nail art services."
    },
    {
      id: "manicure-pedicure-spa",
      title: "Manicure, Pedicure & Spa",
      tag: "Wellness",
      summary: "Restorative hands and feet therapies, soothing scrubs, cuticle revival, and relaxing body spa care.",
      items: [
        "Classic & deluxe manicure",
        "Aromatic spa pedicure with heel care",
        "Gentle exfoliating hand & foot scrub",
        "Relaxing head, neck & shoulder massage",
        "Body spa and de-stress therapies"
      ],
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Nourishing spa manicure and relaxation therapy",
      enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about manicure, pedicure, or spa services."
    }
  ],

  // Signature Showcase Section
  signature: {
    tag: "SIGNATURE SHOWCASE",
    title: "Bridal Styling & Special Occasions",
    subtitle: "Creating timeless memories for your most cherished moments in Nashik.",
    description: "From intimate engagement ceremonies to grand traditional wedding days, our bridal styling brings together tailored skin prep, harmonious makeup tones, hair artistry, and graceful draping. We take the time to understand your attire, jewellery, and personal comfort so you look radiant and feel completely yourself throughout your special day.",
    highlights: [
      "Personalised pre-bridal consultation",
      "Hair styling with fresh flowers or traditional accessories",
      "Long-wear makeup suited for Nashik weather & lighting",
      "Comfort-focused saree & dupatta draping"
    ],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Timeless portrait with elegant makeup and jewellery",
    enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about bridal and occasion styling packages."
  },

  // Beauty Academy Section (From public business profile)
  academy: {
    tag: "LEARN WITH US",
    title: "Ajanta's Beauty Academy",
    subtitle: "Hands-on foundation and advanced training for aspiring beauty professionals in Nashik.",
    description: "Since 2007, Ajanta's has nurtured passion into career skills. Our academy courses offer practical, step-by-step guidance in modern salon techniques, hygiene standards, and client consultation.",
    courses: [
      {
        id: "course-hair",
        title: "Hair Dressing & Chemical Treatments",
        focus: "Haircuts, blow-dry styling, colour formulation, rebonding, keratin & hair spa techniques.",
        suitableFor: "Beginners & stylists wanting to upgrade hair mastery"
      },
      {
        id: "course-makeup",
        title: "Makeup Artistry & Bridal Styling",
        focus: "Skin prep, colour correction, bridal, party looks, eye makeup, and saree draping basics.",
        suitableFor: "Aspiring makeup artists & bridal specialists"
      },
      {
        id: "course-beauty",
        title: "Beauty & Skin Therapy Courses",
        focus: "Facial procedures, skin types, hygiene protocols, threading, waxing, and salon hygiene.",
        suitableFor: "Anyone aiming to build or expand salon service expertise"
      }
    ],
    enquiryMessage: "Hello Ajanta's Academy, I am interested in knowing more about your upcoming beauty, makeup, and hair courses."
  },

  // Curated Gallery (High quality salon & beauty editorial photos)
  gallery: [
    {
      id: "gal-1",
      title: "Bridal Elegance",
      category: "Bridal & Occasion",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
      alt: "Radiant occasion makeup and subtle eye styling",
      aspect: "portrait"
    },
    {
      id: "gal-2",
      title: "Dimensional Hair Colour",
      category: "Hair & Styling",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
      alt: "Warm highlights and polished salon blow-dry",
      aspect: "landscape"
    },
    {
      id: "gal-3",
      title: "Creative Nail Artistry",
      category: "Nails & Spa",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
      alt: "Delicate artistic gel nail design",
      aspect: "square"
    },
    {
      id: "gal-4",
      title: "Precision Hair Sculpting",
      category: "Hair & Styling",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
      alt: "Clean modern haircut and grooming styling",
      aspect: "portrait"
    },
    {
      id: "gal-5",
      title: "Skin Glow & Rejuvenation",
      category: "Skin Care",
      image: "https://images.unsplash.com/photo-1512290900672-1f02e604f32a?auto=format&fit=crop&w=900&q=80",
      alt: "Nourishing facial care and relaxed hydration",
      aspect: "landscape"
    },
    {
      id: "gal-6",
      title: "Occasion Hairdo & Curls",
      category: "Hair & Styling",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=80",
      alt: "Soft romantic curls for party and engagement events",
      aspect: "portrait"
    },
    {
      id: "gal-7",
      title: "Luminous Wedding Look",
      category: "Bridal & Occasion",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      alt: "Subtle traditional wedding makeup and elegant accessories",
      aspect: "portrait"
    },
    {
      id: "gal-8",
      title: "Hand & Nail Wellness",
      category: "Nails & Spa",
      image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?auto=format&fit=crop&w=900&q=80",
      alt: "Relaxing manicure care and gentle nail polish application",
      aspect: "landscape"
    }
  ],

  // Appointment Form Configuration
  appointmentForm: {
    serviceCategories: [
      "Haircut & Styling (He & She)",
      "Hair Spa & Deep Conditioning",
      "Hair Colouring & Highlights",
      "Keratin / Smoothing / Rebonding",
      "Skin Cleanup & Herbal Facials",
      "Eyebrow Threading & Waxing",
      "Bridal & Engagement Makeup",
      "Party & Occasion Styling",
      "Nail Art & Extensions",
      "Manicure, Pedicure & Body Spa",
      "Beauty Academy Courses Enquiry",
      "General Consultation / Other"
    ],
    timeSlots: [
      "Morning (10:30 AM - 01:00 PM)",
      "Afternoon (01:00 PM - 04:00 PM)",
      "Evening (04:00 PM - 07:30 PM)",
      "Flexible / Any Time"
    ],
    disclaimer: "Please note: Submitting this form sends an appointment enquiry via WhatsApp to +91 98603 47226. Your booking is confirmed only after the salon verifies slot availability and connects back with you."
  }
}
