# Muhammad Usman — Portfolio

Personal portfolio for Muhammad Usman, SQA Engineer building toward Test
Automation. Built from scratch with Next.js (App Router), TypeScript,
Tailwind CSS v4, and Motion.

## Stack

- **Framework:** Next.js 16 (App Router, RSC)
- **Styling:** Tailwind CSS v4 (CSS-based `@theme` design tokens in `app/globals.css`)
- **Motion:** Motion (Framer Motion successor), reduced-motion aware
- **Forms:** react-hook-form + zod, delivered via Resend
- **Theming:** next-themes (light/dark, user-toggleable)
- **Deployment target:** Vercel (free tier)

## Structure

```
app/                  Routes, layouts, metadata, API routes
  work/[slug]/         Case study pages (one per employer engagement)
  api/contact/         Contact form submission handler (Resend)
components/
  layout/              Header, Footer, theme provider/toggle
  sections/            Home page sections (Hero, FeaturedWork, Contact, ...)
  ui/                  Design system primitives (Button, Card, Badge, ...)
content/               Typed, source-of-truth content (profile, experience,
                        skills, certifications, education, artifacts, testimonials)
lib/                   Utilities, site config, validation schemas
types/                 Shared content types
```

All page content is sourced from `content/*.ts` — no copy is hardcoded
into components. Nothing in `content/` is fabricated; fields without a
verified value are left `null`/empty rather than guessed (see e.g.
`content/education.ts`, `content/testimonials.ts`).

## Environment variables

Create `.env.local` (already gitignored) with:

```
RESEND_API_KEY=          # required for the contact form to actually send mail
CONTACT_FROM_EMAIL=      # optional — defaults to Resend's sandbox sender
```

Without `RESEND_API_KEY`, the contact form still validates and renders
correctly but returns a clear error instead of silently failing.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Known pending items

- `RESEND_API_KEY` — not yet set (intentionally deferred until closer to
  deployment). Contact form validates and renders correctly but returns
  a clear error instead of sending until this is set.
- `lib/site.ts` `url` — placeholder Vercel subdomain; update once a
  custom domain is attached.
- `content/education.ts` — intentionally shows only degree + institution,
  no dates/CGPA, per explicit instruction.
- `content/testimonials.ts` — intentionally empty until real testimonials are provided.
