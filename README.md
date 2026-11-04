# Deetya Behl — Curated Personal Portfolio

An award-winning, editorial personal portfolio website designed for **Deetya Behl**—an IB Diploma student at Invictus International School, Amritsar; psychology researcher (IRIS National Fair APA Special Award winner); founder of Project Nazariya; wearable-tech engineer (FlickerScope); and classical dancer.

Built around the core narrative:
> *"When someone struggles, is it the brain, the task, or the room around them?"*

---

## ✦ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, latest v15) + TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom CSS variables for warm paper palettes, ink tones, and subtle grain
- **Motion & Interactions**: [Framer Motion](https://www.framer-motion.com/) (staggered reveals, mask animations) + [Lenis](https://lenis.darkroom.engineering/) (momentum smooth scroll)
- **Typography**: Google Fonts via `next/font`:
  - `Cormorant Garamond` (high-contrast editorial serif)
  - `Plus Jakarta Sans` (clean modern geometric sans)
  - `JetBrains Mono` (tabular numbers & badges)
- **Icons**: `lucide-react` + bespoke SVGs
- **Gallery & Lightbox**: `yet-another-react-lightbox` with zoom, captions, counter, and swipe support
- **Form Handling & Validation**: `react-hook-form` + `@hookform/resolvers` + `zod`
- **Celebration Effects**: `canvas-confetti`

---

## ✦ Quick Start

### 1. Prerequisites
- Node.js 18+ or 20+ installed
- npm or pnpm or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✦ How to Edit Content

All text, statistics, awards, project descriptions, letters of recommendation, and artwork details are maintained in **one single typed data file**:

📂 `src/data/content.ts`

You can edit any text without touching React components:
- **Bio & taglines**: `HERO_CONTENT`
- **Three-Theme matrix**: `THREE_THEMES`
- **Research projects**: `RESEARCH_CONTENT`
- **FlickerScope details & metrics**: `TOOLS_CONTENT`
- **Project Nazariya spaces**: `ENVIRONMENTS_CONTENT`
- **Leadership & special school initiatives**: `LEADERSHIP_CONTENT`
- **Honours & certificates**: `HONOURS_AWARDS`
- **Recommendation letters**: `RECOMMENDATION_LETTERS`
- **Dance & 14 Fine Artworks**: `ART_DANCE_CONTENT`
- **Footer, education & social links**: `SITE_METADATA` & `FOOTER_CONTENT`

---

## ✦ How to Add or Replace Images

All images are organized in `/public/images/` with kebab-case naming:
- **Hero Profile**: `/public/images/hero/profile.jpg`
- **Fine Art (Watercolours, Pastels, Graphite)**: `/public/images/art/watercolour/watercolour-1.jpg` .. `14.jpg`
- **Classical Dance**: `/public/images/art/dance/art-dance-1.jpg` .. `3.jpg`
- **IBADAT Special School Workshops**: `/public/images/art/workshops/art-workshop-1.jpg` .. `4.jpg`
- **Police Station Handbooks**: `/public/images/design/stress-free/`
- **K-12 PRASHAST Handbooks**: `/public/images/design/k12/`
- **FlickerScope & Project Photos**: `/public/images/projects/`
- **Head Girl Leadership**: `/public/images/leadership/`
- **Nazariya Workplaces**: `/public/images/experience/`
- **Certificates & LORs**: `/public/images/recognition/certificates/` and `/public/images/recognition/lor/`

To add a new image:
1. Place your `.jpg`, `.png`, or `.webp` file in the appropriate subfolder in `public/images/`.
2. Reference the path (e.g. `/images/art/watercolour/my-new-piece.jpg`) in `src/data/content.ts`.

---

## ✦ Contact Form & Environment Variables

The contact form submits to `/api/contact` (Next.js Route Handler) validated with Zod.
By default, submissions log cleanly to the server console and return a success response with confetti animation.

To integrate automated email delivery (e.g., via Resend):
1. Create a `.env.local` file in the project root:
```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECIPIENT_EMAIL=your_email@domain.com
```
2. In `src/app/api/contact/route.ts`, plug in Resend:
```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: process.env.CONTACT_RECIPIENT_EMAIL,
  subject: `[Portfolio Inquiry] ${category} from ${name}`,
  text: message,
});
```

---

## ✦ Deploying to Vercel

1. Push the project to GitHub, GitLab, or Bitbucket.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Select this repository.
4. Framework Preset will auto-detect **Next.js**.
5. Click **Deploy**.

---

## ✦ License & Credits

Designed and developed for **Deetya Behl**. All artworks, research documents, and credentials belong to their respective creators and issuers.
