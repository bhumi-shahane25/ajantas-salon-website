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
    announcement: "Professional Unisex Hair, Beauty & Academy in Nashik • Appointments & Inquiries: +91 98603 47226",
    heroEyebrow: "AJANTA'S SALON FOR HE & SHE",
    heroHeadline: "A little time for yourself.",
    heroSubheadline: "Thoughtful hair and beauty care to help you look and feel your best. Serving men and women in Nashik with genuine care since 2007.",
    productsClaim: "We prioritise authentic, quality salon products for every hair and skin service.",
    logo: "/ajantas-salon-logo.png",
    logoAlt: "Official Logo of Ajanta's Salon for He & She",
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
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Ajantas+Salon+Near+SBI+ATM+Shraddha+Hospital+Behind+Kulkarni+Garden+Sharanpur+Road+Nashik+422005",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14997.518883584742!2d73.7661555!3d20.0028292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebb6e42be81b%3A0xc3c5452f1e67049e!2sSharanpur%20Rd%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    scheduleNote: "Salon visits are accommodated throughout the week. Please call or WhatsApp ahead to check immediate slot availability.",
  },

  // Trust / Credibility Highlights
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

  // About Section Content (Original photography preserved)
  about: {
    tag: "ABOUT THE SALON",
    heading: "A warm, personal approach to hair and beauty in Nashik.",
    paragraphs: [
      "Founded in 2007 in the heart of Sharanpur Road, Ajanta's Salon for He & She was created to give individuals a calm, respectful space to unwind and take care of their hair, skin, and personal well-being.",
      "Whether you are dropping in for a clean classic haircut, a restorative hair spa after a demanding week, vibrant hair colour, or preparing for an auspicious wedding celebration, our team focuses on what suits your individuality best.",
      "Alongside our salon services, we also run beauty, makeup, and hair academy courses, sharing practical salon techniques with aspiring artists right here in Nashik."
    ],
    images: {
      primary: "/images/salon/IMG_8811_upright.jpg",
      primaryAlt: "Client hair styling and dimensional colour seen from the back at Ajanta's Salon Nashik",
      secondary: "/images/salon/IMG_8780_upright.jpg",
      secondaryAlt: "Client hair styling and luminous blowout at Ajanta's Salon"
    }
  },

  // Services Categories (All six original categories preserved with verified authentic & local images)
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
      image: "/images/salon/haircut-styling.jpg",
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
      image: "/images/hair-colour/IMG_6795.jpg",
      imageAlt: "Client's rich dimensional hair colour transformation at Ajanta's Salon",
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
      image: "/images/salon/skin-facial-care.jpg",
      imageAlt: "Professional facial treatment and relaxing skincare care at Ajanta's Salon",
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
      image: "/images/salon/IMG_5025.jpg",
      imageAlt: "Traditional bridal artistry and graceful makeup by Ajanta's Salon",
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
      image: "/images/salon/nail-extensions.jpg",
      imageAlt: "Artisan gel nail extensions and delicate French tip manicure",
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
      image: "/images/salon/spa-manicure.jpg",
      imageAlt: "Nourishing spa manicure, pedicure and relaxation therapy",
      enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about manicure, pedicure, or spa services."
    }
  ],

  // Signature Showcase Section (Client bridal styling retained)
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
    image: "/images/salon/IMG_5026_salon.jpg",
    imageAlt: "Traditional wedding styling by Ajanta's Salon Nashik",
    enquiryMessage: "Hello Ajanta's Salon, I would like to enquire about bridal and occasion styling packages."
  },

  // Beauty Academy Section
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

  // Curated Gallery: Authentic salon work across all categories, including Men's Grooming, Hair & Colour, Bridal, Skin, and Nails
  gallery: [
    // 1. Men's Grooming (Real client work at Ajanta's Salon)
    {
      id: "gal-men-1",
      title: "Precision Fade & Textured Top",
      category: "Men's Grooming",
      image: "/images/gallery/IMG_3108.JPG.jpeg",
      alt: "Men's precision fade haircut and styled pomp at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-men-2",
      title: "Classic Taper & Modern Side Part",
      category: "Men's Grooming",
      image: "/images/gallery/IMG_3128.JPG.jpeg",
      alt: "Men's classic taper and clean side-part styling at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-men-3",
      title: "Contoured High-Fade & Grooming",
      category: "Men's Grooming",
      image: "/images/gallery/IMG_3143.JPG.jpeg",
      alt: "Men's contoured fade haircut and beard grooming at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-men-4",
      title: "Executive Styling & Subtle Highlights",
      category: "Men's Grooming",
      image: "/images/gallery/IMG_3146.JPG.jpeg",
      alt: "Men's executive scissor haircut with textured finish at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-men-5",
      title: "Precision Neckline & Hair Sculpting",
      category: "Men's Grooming",
      image: "/images/gallery/IMG_3162.JPG.jpeg",
      alt: "Back profile of precision neckline taper and scissor sculpting",
      aspect: "portrait",
      objectPosition: "center center"
    },

    // 2. Hair & Styling (Real client work at Ajanta's Salon)
    {
      id: "gal-hair-1",
      title: "Voluminous Layers & Blowout",
      category: "Hair & Styling",
      image: "/images/salon/IMG_8780_upright.jpg",
      alt: "Client's voluminous layered haircut and blowout styling at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-hair-2",
      title: "Warm Honey Balayage Waves",
      category: "Hair & Styling",
      image: "/images/salon/IMG_8811_upright.jpg",
      alt: "Client's long styled waves with warm honey balayage seen from back",
      aspect: "portrait",
      objectPosition: "center top"
    },
    {
      id: "gal-hair-3",
      title: "Rich Brunette Waves & Shine",
      category: "Hair & Styling",
      image: "/images/salon/IMG_8795_upright.jpg",
      alt: "Textured brunette blowout and gloss therapy at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-hair-4",
      title: "Dimensional Copper Balayage",
      category: "Hair & Styling",
      image: "/images/hair-colour/IMG_6795.jpg",
      alt: "Client's dimensional hair colour transformation at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-hair-5",
      title: "Auburn Reflections & Gloss",
      category: "Hair & Styling",
      image: "/images/hair-colour/IMG_6796.jpg",
      alt: "Rich auburn hair colour makeover at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-hair-6",
      title: "Special Occasion Waves & Curls",
      category: "Hair & Styling",
      image: "/images/hair-colour/IMG_6797.jpg",
      alt: "Defined occasion curls and colour enhancement at Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center center"
    },

    // 3. Bridal & Occasion (Real wedding and bridal work at Ajanta's Salon)
    {
      id: "gal-bridal-1",
      title: "Maharashtrian Bridal Grace",
      category: "Bridal & Occasion",
      image: "/images/salon/IMG_5025.jpg",
      alt: "Traditional bridal makeup and floral jewelry by Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center top"
    },
    {
      id: "gal-bridal-2",
      title: "Luminous Wedding Couple Styling",
      category: "Bridal & Occasion",
      image: "/images/salon/IMG_5026_salon.jpg",
      alt: "Wedding couple in traditional ceremonial attire styled by Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center top"
    },
    {
      id: "gal-bridal-3",
      title: "Timeless Ceremony Portrait",
      category: "Bridal & Occasion",
      image: "/images/salon/IMG_5027.jpg",
      alt: "Bride and groom outdoor portrait with elegant hair and makeup",
      aspect: "portrait",
      objectPosition: "center top"
    },
    {
      id: "gal-bridal-4",
      title: "Royal Wedding Portrait Styling",
      category: "Bridal & Occasion",
      image: "/images/salon/IMG_5028.jpg",
      alt: "Bride and groom elegant wedding portrait by Ajanta's Salon",
      aspect: "portrait",
      objectPosition: "center top"
    },
    {
      id: "gal-bridal-5",
      title: "Celebration & Sangeet Radiance",
      category: "Bridal & Occasion",
      image: "/images/salon/IMG_4974.jpg",
      alt: "Sangeet occasion styling with custom floral accessories",
      aspect: "portrait",
      objectPosition: "center top"
    },

    // 4. Skin Care (Professional Facial & Dermal Rejuvenation)
    {
      id: "gal-skin-1",
      title: "Rejuvenating Herbal Facial Mask",
      category: "Skin Care",
      image: "/images/salon/skin-facial-care.jpg",
      alt: "Professional skincare therapist applying facial treatment at Ajanta's Salon",
      aspect: "landscape",
      objectPosition: "center center"
    },
    {
      id: "gal-skin-2",
      title: "Deep Hydration & Serum Therapy",
      category: "Skin Care",
      image: "/images/salon/skin-hydration.jpg",
      alt: "Restorative skin hydration and targeted dermal serum therapy",
      aspect: "portrait",
      objectPosition: "center center"
    },

    // 5. Nails & Spa (Artisan Gel Nails & Hand/Foot Wellness)
    {
      id: "gal-nails-1",
      title: "Sculpted Gel Extensions & French Tips",
      category: "Nails & Spa",
      image: "/images/salon/nail-extensions.jpg",
      alt: "Nail technician crafting delicate French tip gel extensions",
      aspect: "landscape",
      objectPosition: "center center"
    },
    {
      id: "gal-nails-2",
      title: "Artisan Tortoise & Gloss Nail Art",
      category: "Nails & Spa",
      image: "/images/salon/nail-art.jpg",
      alt: "Custom hand-painted tortoise shell artisan nail art design",
      aspect: "portrait",
      objectPosition: "center center"
    },
    {
      id: "gal-nails-3",
      title: "Floral Botanical Spa Pedicure",
      category: "Nails & Spa",
      image: "/images/salon/spa-manicure.jpg",
      alt: "Aromatic floral soak spa pedicure therapy for soothing relaxation",
      aspect: "landscape",
      objectPosition: "center center"
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

