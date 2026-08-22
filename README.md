# [Company Name] — Self-Heating Food Box Website

Homepage build (Phase 1) for the self-heating food container brand: React + Vite + TypeScript + Tailwind CSS v4, with Framer Motion animation.

## Run it locally

1. Install Node.js 18 or newer (https://nodejs.org).
2. Unzip this project, open a terminal in the folder, and run:

   npm install
   npm run dev

3. Open the URL it prints (usually http://localhost:5173).

To produce a production build:

   npm run build   # outputs to dist/
   npm run preview # serve the production build locally

## What's here

- src/sections/ — one file per homepage section (Hero, HowItWorks, DemoVideo, TenMinuteExperience, Products, WhyChoose, Benefits, Applications, CompatibleFood, Technology, B2B, Testimonials, FAQ, ContactCTA)
- src/pages/ — routed pages (Home, ProductDetail, SolutionDetail, BuyNow, Blog, Privacy, Terms)
- src/components/ — reusable pieces (Navbar, Footer, Button, PullCord, SectionHeading, Container)
- src/data/ — structured placeholder content (products, applications, solutions, blog, compatibleFoods, FAQ, testimonials, contact, media) — edit these files to update copy without touching JSX
- src/index.css — design tokens (colors, fonts) as Tailwind v4 @theme variables

## Routes

- `/` — homepage
- `/products/:slug` — product detail (rectangular-box, circular-container)
- `/solutions/:slug` — segmented solution pages (ready-to-cook, heat-and-eat, food-delivery, defence-forces)
- `/buy-now` — order path (WhatsApp/email — no checkout backend yet)
- `/blog` — blog & videos listing
- `/privacy`, `/terms`

## Placeholders to replace

Search the codebase for square-bracket placeholders before launch:

- [COMPANY NAME], [CONTACT EMAIL], [PHONE NUMBER], [ADDRESS] and src/data/contact.ts (email, phone, WhatsApp number, registered office, manufacturing facility, social links, brochureUrl)
- [PRODUCT IMAGE — RECTANGULAR], [PRODUCT IMAGE — CIRCULAR]
- [IMAGE — ...] in src/data/applications.ts and src/data/solutions.ts
- TBD values in src/data/products.ts (capacity, dimensions, weight, material)
- Testimonials in src/data/nav.ts
- src/data/media.ts — add a real YouTube video ID for the homepage demo video (shows a "coming soon" placeholder until then)
- src/data/blog.ts — replace with real articles/videos before publishing the Blog page
- src/data/compatibleFoods.ts — confirm against verified food-safety testing before publishing

## Not yet built

Per the project scope, this phase covers the homepage plus supporting pages. Still to build: real e-commerce checkout on /buy-now (currently WhatsApp/email order flow), contact backend (Express + PostgreSQL + Prisma), and the admin dashboard. See the architecture document for the full plan.
