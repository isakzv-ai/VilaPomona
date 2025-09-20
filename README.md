# Villa Pomona - Boutique Hotel Website

A modern, responsive React website for Villa Pomona, a charming art-nouveau boutique villa in Bled, Slovenia.

## Features

- Single-page application with smooth scrolling navigation
- Responsive design optimized for mobile, tablet, and desktop
- Accessibility-focused with semantic HTML and ARIA attributes
- SEO optimized with meta tags and schema.org structured data
- Performance optimized with lazy loading and preconnect hints
- Contact form with client-side validation
- Interactive gallery with masonry layout
- Embedded Google Maps integration

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Helmet Async (for SEO)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd villa-pomona
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization Guide

### Replacing Placeholder Images with Authentic Villa Pomona Photos

The project currently uses placeholder images. To showcase the real Villa Pomona, replace them with authentic photos from official sources:

#### 🏨 **Where to Find Authentic Villa Pomona Images:**

1. **Villa Pomona's Booking.com Page**: Search for "Villa Pomona Bled" on Booking.com
2. **Official Website**: villapomona.si (if available)
3. **Sister Property**: Hotel Adora Bled website
4. **Google Images**: Search "Villa Pomona Bled Slovenia" and filter for high-resolution images
5. **Travel Sites**: TripAdvisor, Agoda, or other booking platforms

#### 📸 **Image Replacement Guide:**

**Current Structure:**
```
assets/
├── images/
│   ├── hero/
│   │   └── hero-image.jpg (main villa exterior)
│   └── gallery/
│       ├── pool-image.jpg (pool area)
│       ├── terrace-image.jpg (outdoor terrace)
│       ├── yoga-studio.jpg (interior/spa area)
│       └── outdoor-1.jpg & outdoor-2.jpg (garden/grounds)
```

**Recommended Image Types:**
- Hero image: Main villa facade/building exterior (1920x1080px landscape)
- Gallery images: Pool, terraces, interiors, gardens (800x600px minimum)
- Room images: Individual room interiors and exteriors (600x400px)

Update the `alt` text in `src/components/Gallery.jsx` to match your actual images.

### Enabling Google Maps

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the "Maps Embed API"
4. Create credentials (API Key)
5. Replace `YOUR_GOOGLE_MAPS_EMBED_KEY` in `src/components/Location.jsx` with your actual API key

### Customizing Colors

The design uses a soft color palette. To modify colors, update the Tailwind configuration or use custom CSS variables in `src/index.css`.

### Adding Booking Backend

The contact form currently uses a `mailto:` fallback. To integrate with a booking system:

1. Replace the form submission handler in `src/components/ContactForm.jsx`
2. Add your booking API endpoint (example: `https://your-backend.example/api/book`)
3. Implement proper error handling and success states

### SEO and Meta Tags

Meta tags are configured in `src/App.jsx` using React Helmet. Update the title, description, and Open Graph tags as needed.

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy!

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx
│   ├── Navigation.jsx
│   ├── About.jsx
│   ├── Rooms.jsx
│   ├── RoomCard.jsx
│   ├── Amenities.jsx
│   ├── Gallery.jsx
│   ├── Location.jsx
│   ├── Reviews.jsx
│   ├── ContactForm.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
assets/
└── placeholder-*.jpg
```

## License

This project is private and proprietary to Villa Pomona.
