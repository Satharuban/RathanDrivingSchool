# Rathan's Driving School

A professional driving school website for Greater Manchester, built with React + Vite + TypeScript + Tailwind CSS.

## Architecture

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, React Router v6
- **Backend**: Express.js (Node.js) — lightweight placeholder API for enquiry form submissions
- **Ports**: Frontend on 5000, Backend on 3001

## Project Structure

```
/
├── src/               # React frontend source
│   ├── components/    # UI components (forms, home, layout, ui)
│   ├── constants/     # Static data (areas, FAQ, pricing, testimonials, etc.)
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Page components (Home, About, Lessons, Areas, Reviews, Contact, Intensive)
│   ├── services/      # API service layer (enquiryService.ts)
│   └── main.tsx       # App entry point
├── server/            # Express backend
│   └── index.js       # Placeholder API (POST /api/enquiries)
├── public/            # Static assets (images, logo)
├── vite.config.ts     # Vite config (port 5000, allowedHosts: true, proxy /api → 3001)
└── index.html         # HTML entry point
```

## Development

- **Frontend**: `npm run dev` — starts Vite dev server on 0.0.0.0:5000
- **Backend**: `cd server && npm start` — starts Express on localhost:3001
- The Vite dev server proxies `/api` requests to `http://localhost:3001`

## Deployment

Configured as a **static** deployment:
- Build: `npm run build` (outputs to `dist/`)
- Public dir: `dist`

## Key Features

- Multi-page React SPA (Home, About, Lessons, Intensive Courses, Areas, Reviews, Contact)
- Enquiry/booking form with Express API integration
- Responsive design with Tailwind CSS and Framer Motion animations
- SEO-friendly with page titles and meta descriptions
