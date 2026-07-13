# Muhammad Usman | Software QA & Test Automation Portfolio

A modern, high-performance portfolio showcasing my experience as a Software Quality Assurance Engineer with a growing focus on Test Automation.

The portfolio highlights real client work, automation projects, technical skills, case studies, and professional experience while following modern frontend best practices for performance, accessibility, and SEO.

---

## Live Demo

> Coming soon (Vercel)

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Motion
- **Forms:** React Hook Form + Zod
- **Email Service:** Resend
- **Theme:** next-themes (Dark / Light Mode)
- **Deployment:** Vercel

---

## Features

- Responsive design for desktop, tablet, and mobile
- Dark & Light theme support
- SEO optimized
- Dynamic Open Graph images
- Structured metadata
- Accessible UI
- Contact form with validation
- Resume download
- Featured project case studies
- Technical skills showcase
- Professional experience timeline
- Certifications section
- GitHub project showcase
- Performance-focused architecture

---

## Project Structure

```text
app/
├── api/contact/         Contact form API (Resend)
├── work/[slug]/         Individual case study pages
├── layout.tsx
├── page.tsx
└── ...

components/
├── layout/              Header, Footer, Navigation
├── sections/            Homepage sections
└── ui/                  Reusable UI components

content/                 Portfolio content
lib/                     Utilities & helpers
types/                   Shared TypeScript types
public/                  Static assets
```

All portfolio content is managed from the `content/` directory, making it easy to update experience, projects, certifications, skills, and profile information without modifying UI components.

---

## Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL=
```

The contact form is fully functional once a valid `RESEND_API_KEY` is configured.

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Production Build

```bash
npm run build
```

---

## Lint

```bash
npm run lint
```

---

## Deployment

This project is configured for deployment on **Vercel**.

After importing the repository into Vercel, configure the required environment variables and deploy.

---

## License

This repository represents my personal portfolio website.

The source code is available for learning and reference purposes. Portfolio content, branding, and personal information belong to Muhammad Usman.
