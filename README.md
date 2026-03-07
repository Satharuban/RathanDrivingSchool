# Rathan Driving School

A modern, premium, mobile-first website for a UK driving school. Built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Tech stack

- **Frontend:** React 19, Vite 7, TypeScript, Tailwind CSS v4, React Router, Framer Motion, Lucide React
- **Backend-ready:** Node.js + Express placeholder in `/server` (ready for PostgreSQL)
- **Deployment target:** AWS

## Getting started

### Prerequisites

- Node.js 20+ (or 18+ for older Vite)
- npm or yarn

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Contact form and API

The contact form posts to `/api/enquiries`. In development, Vite proxies `/api` to `http://localhost:3001`.

To handle submissions:

1. Install and run the placeholder server:
   ```bash
   cd server && npm install && npm start
   ```
2. With both dev server and API running, form submissions will be received by the Express app (and can later be stored in PostgreSQL).

For production, set `VITE_API_URL` to your backend base URL (e.g. `https://api.yoursite.com/api`).

### WhatsApp

Set your business number in `src/constants/site.ts` (`WHATSAPP_NUMBER`, e.g. `447700900000`). The floating button and CTAs use a prefilled message from `WHATSAPP_MESSAGE`.

### Build

```bash
npm run build
npm run preview   # preview production build
```

## Project structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout, WhatsAppButton
│   ├── ui/           # SectionHeading, PricingCard, TestimonialCard, FAQAccordion, AreaCard, CTABanner
│   ├── home/         # Hero, WhyChooseUs, LessonPackages, HowItWorks, etc.
│   └── forms/        # ContactForm
├── constants/        # site, testimonials, pricing, faq, areas, howItWorks
├── hooks/            # usePageTitle
├── pages/            # Home, About, Lessons, Intensive, Areas, Reviews, Contact
├── services/         # enquiryService (API client)
└── utils/            # whatsapp helpers
server/               # Express placeholder for /api/enquiries
```

## Pages

1. **Home** – Hero, Why choose us, Lesson packages, How it works, Areas, Testimonials, FAQ, CTA
2. **About** – Values and intro
3. **Lessons & Pricing** – All pricing cards
4. **Intensive Courses** – Intensive course info
5. **Areas Covered** – Area grid with local SEO copy
6. **Reviews** – Testimonials
7. **Contact** – Enquiry form + phone/email/WhatsApp

## Design

- **Colours:** Dark slate (navy feel), white, amber/yellow accents
- **Fonts:** Outfit (headings), DM Sans (body) via Google Fonts
- Mobile-first, responsive, sticky navbar, smooth scroll, Framer Motion reveal animations
- Accessibility-friendly contrast and focus states

## Backend and database

The Express app in `server/` is a stub. To add PostgreSQL:

1. Add `pg` and env for `DATABASE_URL`.
2. Create an `enquiries` table (e.g. fullName, phone, email, postcode, lessonType, message, createdAt).
3. In `server/index.js`, validate the body and insert into the table, then return JSON.

## Deployment (AWS)

- **Frontend:** Build with `npm run build` and deploy the `dist/` folder to S3 + CloudFront (or Amplify).
- **Backend:** Deploy the Express app to Elastic Beanstalk, ECS, or Lambda + API Gateway.
- Set `VITE_API_URL` in your build environment to the production API URL.
