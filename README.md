# Ajanta's Salon for He & She — Official Website

> **Production-ready, responsive, editorial website** built for **"Ajanta's Salon for He & She"** in Nashik, Maharashtra, India.
> Established in 2007 • Sharanpur Road, Nashik • Call: +91 98603 47226

---

## 🌸 Visual Identity & Design Direction

- **Warm Ivory & Cream Canvas**: `#FAF7F2` and `#F3ECE6` provide a warm, welcoming editorial backdrop.
- **Deep Heritage Burgundy / Wine**: `#6A1E36` provides sophisticated contrast and brand character.
- **Understated Champagne & Soft Rose Accents**: `#C29B53` and `#C78A98` deliver refined accents.
- **High-Contrast Dark Charcoal Typography**: `#231F20` ensures effortless readability.
- **Editorial Typography Pairing**: Google Fonts **Playfair Display** (headings) with **Plus Jakarta Sans** (clean, modern UI & body text).
- **Human & Authentic Aesthetic**: Avoids artificial AI gimmicks (no neon purple gradients, no fake countdowns, no fake statistics or fabricated testimonials).

---

## 🚀 Quick Start (Windows & Visual Studio Code)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer installed on your machine)
- [Visual Studio Code](https://code.visualstudio.com/)

### 1. Open the Project in VS Code
1. Launch **Visual Studio Code**.
2. Click **File** > **Open Folder...** and select:
   ```
   C:\Users\vaish\Desktop\AjantaSalon
   ```

### 2. Run the Development Server
Open the built-in terminal in VS Code (`Ctrl + ` `~` or **Terminal** > **New Terminal**) and run:

```bash
npm run dev
```

Vite will start the local server in ~200ms:
```
  VITE v6.4.5  ready in 210 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Hold `Ctrl` and click the `http://localhost:5173/` link in your terminal to open it in your browser.

### 3. Build for Production Deployment
To create an optimized production build:
```bash
npm run build
```
This outputs clean minified assets into the `dist/` directory, ready to deploy to Netlify, Vercel, Hostinger, or GitHub Pages.

---

## 📁 Project Architecture

```
AjantaSalon/
├── index.html                   # HTML template with Google Fonts & SEO meta tags
├── package.json                 # Project configuration & npm scripts
├── vite.config.js               # Vite configuration
├── README.md                    # Documentation & owner guide
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Main site component assembler
│   ├── index.css                # Global design system & CSS variables
│   │
│   ├── data/
│   │   └── salonData.js         # ⭐ CENTRAL CONTENT & BUSINESS CONFIGURATION
│   │
│   └── components/
│       ├── AnnouncementBar.jsx  # Slim top announcement banner with phone link
│       ├── Navbar.jsx           # Responsive header, wordmark, navigation & mobile menu
│       ├── Hero.jsx             # Editorial beauty hero section with dual CTAs
│       ├── TrustStrip.jsx       # 4-point verified heritage & trust strip (since 2007)
│       ├── About.jsx            # Asymmetric 2-photo story collage & philosophy
│       ├── Services.jsx         # Varied editorial grid for 6 service categories
│       ├── SignatureSection.jsx # Striking bridal & occasion makeup showcase
│       ├── Gallery.jsx          # Filterable beauty gallery with interactive Lightbox
│       ├── Academy.jsx          # Beauty, makeup, and hair academy course details
│       ├── AppointmentForm.jsx  # Validated appointment form + direct WhatsApp handoff
│       ├── LocationSection.jsx  # Nashik address, landmarks, map preview & directions
│       ├── Footer.jsx           # Wordmark, links, social connections & dynamic year
│       ├── FloatingActions.jsx  # Floating WhatsApp button + mobile sticky booking bar
│       ├── ImageWithFallback.jsx# Image wrapper with graceful loading & error fallback
│       └── Icons.jsx            # Accessible SVG brand icons (Instagram)
```

---

## 🛠️ How to Update Salon Details (For the Owner)

All business details are centralized in **one single file**:  
[`src/data/salonData.js`](file:///c:/Users/vaish/Desktop/AjantaSalon/src/data/salonData.js)

You do **not** need to touch any HTML or CSS files to make updates!

### 1. Updating Phone Numbers or WhatsApp
Open `src/data/salonData.js` and edit the `contact` block:
```javascript
contact: {
  primaryPhoneDisplay: "+91 98603 47226",
  primaryPhoneTel: "+919860347226",
  whatsappNumber: "919860347226", // International format without '+'
  secondaryPhoneDisplay: "+91 70281 52763",
  secondaryPhoneTel: "+917028152763",
}
```

### 2. Updating Address or Landmarks
In `src/data/salonData.js`, locate `location`:
```javascript
location: {
  primaryAddress: "Near SBI ATM, Near Shraddha Hospital, Behind Kulkarni Garden, Sharanpur Road / Rajiv Gandhi Bhavan Area, Nashik, Maharashtra 422005",
  shortAddress: "Sharanpur Road / Rajiv Gandhi Bhavan area, Nashik 422005",
  landmarks: [
    "Near SBI ATM",
    "Near Shraddha Hospital",
    "Behind Kulkarni Garden",
    "Sharanpur Road / Rajiv Gandhi Bhavan Area"
  ],
}
```

### 3. Replacing Temporary Stock Photos with Real Salon Photos
1. Copy your original photographs into a new folder: `src/assets/photos/` (e.g. `salon-front.jpg`, `bridal-work-1.jpg`).
2. In `src/data/salonData.js`, import your local image or replace the Unsplash URLs with your photo filenames or CDN links.
3. Every image component automatically uses `ImageWithFallback.jsx`, which shows an elegant fallback if any image URL fails to load.

### 4. Updating Services or Academy Courses
In `src/data/salonData.js`, modify the `services` array or `academy.courses` array to add, rename, or reword any service item.

---

## 📲 How the WhatsApp Appointment Flow Works

1. A client visits the **Schedule Your Salon Visit** section.
2. They enter their name, phone number (validated for 10 digits), select a service category, and optional date/time/notes.
3. Upon clicking **Send Enquiry via WhatsApp**, the site composes a cleanly formatted message and opens WhatsApp directly to `+91 98603 47226`:
   ```
   *New Appointment Enquiry — Ajanta's Salon*
   ----------------------------------------
   *Name:* Radhika Sharma
   *Phone:* 9860347226
   *Service:* Bridal & Engagement Makeup
   *Preferred Date:* 2026-11-15
   *Preferred Slot:* Morning (10:30 AM - 01:00 PM)
   *Notes:* Saree draping included?
   ----------------------------------------
   Enquiry sent via Ajanta's Salon website. Awaiting salon availability confirmation.
   ```
4. A clear disclaimer explains to the client that this is an enquiry and their appointment is confirmed only after the salon verifies slot availability.
5. If the client doesn't use WhatsApp, direct click-to-call buttons for both phone numbers are available right next to the form.

---

## 🌐 Deploying to the Web

### Free Deployment via Vercel or Netlify
1. Run `npm run build` in VS Code to ensure everything compiles.
2. Push your project to a GitHub repository or drag-and-drop the `dist` folder directly onto [Netlify Drop](https://app.netlify.com/drop).
3. Connect your custom domain (e.g., `ajantassalon.com`).

---

© 2007–Present Ajanta's Salon for He & She • Nashik, Maharashtra.
