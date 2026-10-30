# Ajanta's Salon for He & She — Official Multi-Page Website

> **Production-ready, responsive, multi-page salon website** for **"Ajanta's Salon for He & She"** in Nashik, Maharashtra, India.
> **Established in 2007** • Sharanpur Road, Nashik • Call: +91 98603 47226

---

## 🌸 Brand Identity & Official Logo Integration

- **Official Brand Logo**: The official square emblem (black background, gold scissors-and-comb crest, ornate filigree scrollwork, and silver/gold typography) is integrated into:
  - **Desktop & Mobile Navbar**: Framed in a jewel-like champagne gold bordered container (`48px` / `58px`).
  - **Compact Site Footer**: Displayed prominently against the dark charcoal wine background (`72px`) with establishment credentials.
  - **Browser Favicon**: Configured in `index.html` as the official site favicon (`/logo.jpg`).
  - **Asset Location**: Stored at `public/logo.jpg` and `src/assets/logo.jpg`.
- **Palette Harmony**:
  - **Warm Ivory & Soft Cream Canvas**: `#FAF7F2` and `#F3ECE6`.
  - **Heritage Burgundy / Wine**: `#6A1E36` primary accent.
  - **Muted Champagne Gold**: `#C29B53` inspired directly by the logo filigree.
  - **Dark Charcoal Typography**: `#231F20` for effortless legibility.
- **Editorial Typography Pairing**: Google Fonts **Playfair Display** (editorial serif headings) with **Plus Jakarta Sans** (clean modern UI & body text).

---

## 🏛️ Multi-Page Website Structure

The website eliminates unnecessary homepage scrolling by organizing content into 5 dedicated pages:

### 1. `HOME` (`/`)
- Clean navbar with official logo, active indicator, phone link, and **Book an Appointment** CTA.
- High-impact editorial hero section with natural salon photography and dual CTAs.
- Concise introduction to Ajanta's Salon with heritage trust highlights (serving Nashik since 2007).
- Compact selection of 4 featured services with direct links to the complete menu.
- Striking signature bridal & occasion styling showcase with direct WhatsApp enquiry.
- Clean appointment booking invitation banner.
- Compact footer with official logo and quick links.

### 2. `ABOUT US` (`/about`)
- Editorial header banner: *Our Story & Philosophy*.
- Asymmetric two-photo story collage with authentic Nashik heritage stamp.
- Honest narrative highlighting the salon's journey since 2007 on Sharanpur Road.
- Verified commitments (unisex styling, genuine product formulations, central location).
- 4-point heritage & values trust strip.
- Direct booking and consultation prompt.

### 3. `SERVICES` (`/services`)
- Editorial header banner: *Complete Unisex Care & Beauty Academy*.
- 6 comprehensive service categories with itemized checklists and high-resolution photography:
  1. *Haircuts & Styling*
  2. *Hair Treatments & Colour* (Keratin, Rebonding, Hair Spa, Highlights)
  3. *Skin & Facial Care* (Cleanups, Facials, Threading, Waxing)
  4. *Makeup & Bridal Artistry* (Bridal, Engagement, Party looks)
  5. *Nails & Extensions* (Gel, Acrylics, Nail Art)
  6. *Manicure, Pedicure & Spa*
- Transparent consultation and pricing guidance banner (explaining customized quotes based on hair length/texture).
- **Ajanta's Beauty Academy** subsection with 3 professional courses (Hair Dressing, Makeup Artistry, Beauty & Skin Therapy) and direct WhatsApp enquiry.
- **Book Enquiry** buttons that navigate to the contact page with that specific service pre-selected!

### 4. `GALLERY` (`/gallery`)
- Editorial header banner: *Inspiration Gallery & Portfolio*.
- Filterable masonry grid with category tabs (*All, Hair & Styling, Bridal & Occasion, Skin Care, Nails & Spa*).
- Full interactive **Lightbox**:
  - Full-screen image preview.
  - Previous / Next navigation controls.
  - Keyboard navigation (`Escape` closes, `←` / `→` arrow keys cycle images).
  - Touch-friendly and disables background scroll when open.
- Direct link to official Instagram `[@ajantassalon](https://www.instagram.com/ajantassalon?mdxt=MWhhZHozZGVlMHI4dA==)`.

### 5. `CONTACT` (`/contact`)
- Editorial header banner: *Contact & Studio Visit*.
- Working appointment enquiry form:
  - Full Name, 10-digit Indian mobile number validation, service category dropdown (pre-selected from Services page), preferred date, time slot, and notes.
  - Automatically formats and opens WhatsApp directly to `+91 98603 47226`.
  - Clear disclaimer that bookings are confirmed after the salon verifies slot availability.
- Direct phone call cards for both listed numbers (+91 98603 47226 and +91 70281 52763).
- Studio address with nearby landmarks (*Near SBI ATM, Shraddha Hospital, Behind Kulkarni Garden*).
- Google Maps directions link and embedded interactive map frame.

---

## ✨ Subtle Animations & Micro-Interactions

- **Page Transitions**: Smooth 0.35s fade-in with 8px upward slide between route changes (`@keyframes pageFadeIn`).
- **Scroll Reveals**: Intersection Observer (`useScrollReveal.js`) gracefully reveals cards and headings as they enter the viewport.
- **Active Navigation Indicators**: Underline expansion with wine accent and champagne dot indicating the active page.
- **Subtle Image Zoom**: Refined 1.06x hover scale with smooth bezier transitions.
- **Mobile Menu Drawer**: Smooth slide-in drawer with backdrop blur and touch-optimized controls.
- **Accessibility**: Strict respect for `prefers-reduced-motion` to disable animations for users who require reduced motion.

---

## 📁 Project Architecture

```
AjantaSalon/
├── index.html                   # HTML template with official favicon & SEO metadata
├── package.json                 # Scripts and dependencies
├── vite.config.js               # Vite bundler configuration
├── vercel.json                  # Vercel SPA rewrites for direct URL access
├── README.md                    # Documentation & maintenance guide
├── public/
│   └── logo.jpg                 # ⭐ Official Ajanta's Salon Logo (500x500)
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Multi-page router & layout assembler
│   ├── index.css                # Global design system, variables & animations
│   │
│   ├── context/
│   │   └── NavigationContext.jsx# Zero-dependency SPA router with History API & scroll restoration
│   │
│   ├── hooks/
│   │   └── useScrollReveal.js   # Lightweight IntersectionObserver scroll reveal hook
│   │
│   ├── data/
│   │   └── salonData.js         # ⭐ CENTRAL BUSINESS CONFIGURATION & IMAGERY
│   │
│   ├── pages/
│   │   ├── HomePage.jsx         # Compact high-impact homepage
│   │   ├── HomePage.css
│   │   ├── AboutPage.jsx        # Dedicated About story & heritage page
│   │   ├── ServicesPage.jsx     # Full services catalogue + Beauty Academy
│   │   ├── GalleryPage.jsx      # Filterable gallery with interactive Lightbox
│   │   └── ContactPage.jsx      # Appointment form, direct calls & Google Maps
│   │
│   └── components/
│       ├── AnnouncementBar.jsx  # Top slim announcement banner
│       ├── Navbar.jsx           # Responsive header with official logo & active page links
│       ├── Hero.jsx             # Editorial beauty hero section
│       ├── TrustStrip.jsx       # 4-point verified heritage & trust strip (since 2007)
│       ├── About.jsx            # Asymmetric 2-photo story collage & philosophy
│       ├── Services.jsx         # Varied editorial grid for 6 service categories
│       ├── SignatureSection.jsx # Striking bridal & occasion styling showcase
│       ├── Academy.jsx          # Beauty, makeup, and hair academy course details
│       ├── Gallery.jsx          # Filterable beauty gallery with interactive Lightbox
│       ├── AppointmentForm.jsx  # Validated appointment form + direct WhatsApp handoff
│       ├── LocationSection.jsx  # Nashik address, landmarks, map preview & directions
│       ├── Footer.jsx           # Wordmark, official logo, links & dynamic copyright year
│       ├── FloatingActions.jsx  # Floating WhatsApp button + mobile sticky booking bar
│       ├── ImageWithFallback.jsx# Image wrapper with graceful loading & error fallback
│       └── Icons.jsx            # Accessible SVG brand icons (Instagram)
```

---

## ⚙️ Running Locally in VS Code (Windows)

1. Open **Visual Studio Code**.
2. Open the project folder: `C:\Users\vaish\Desktop\AjantaSalon`.
3. Open the terminal (<kbd>Ctrl</kbd> + <kbd>`</kbd>) and start the development server:
   ```powershell
   npm run dev
   ```
4. Click `http://localhost:5173/` in the terminal to view in your browser.
5. To test the production build:
   ```powershell
   npm run build
   ```
   *(Compiled cleanly in ~7.9s with 0 errors).*

---

## ✏️ How the Owner Can Update Content

All business details, phone numbers, addresses, service items, and temporary stock image URLs remain centralized in **one single file**:
[**`src/data/salonData.js`**](file:///c:/Users/vaish/Desktop/AjantaSalon/src/data/salonData.js)

- **Logo**: Stored at `/logo.jpg` (`public/logo.jpg` and `src/assets/logo.jpg`).
- **Phone & WhatsApp**: Update `contact.primaryPhoneDisplay`, `contact.whatsappNumber`, or `contact.secondaryPhoneDisplay`.
- **Address & Landmarks**: Update `location.primaryAddress` and `location.landmarks`.
- **Replacing Gallery/Service Images**: Drop photos into `src/assets/` and update the paths in `salonData.js`. If any image URL ever fails to load, `ImageWithFallback.jsx` will gracefully display an elegant branded placeholder.

---

© 2007–Present Ajanta's Salon for He & She • Sharanpur Road, Nashik, Maharashtra.
