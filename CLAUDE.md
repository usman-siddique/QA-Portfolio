# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Personal portfolio site for Muhammad Usman (SQA Engineer). Next.js 16 App Router + React 19 + TypeScript (strict) + Tailwind CSS v4 + Motion. Deploys to Vercel.

**Next.js 16 has breaking changes vs. training data** — consult `node_modules/next/dist/docs/` before writing Next.js code. One convention already used throughout this repo: `params` in pages/`generateMetadata` is a `Promise` and must be awaited.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also the de facto type check)
npm run lint     # eslint
```

There is no test suite. `npm run build` is the main verification step.

## Architecture

**Content-driven pages.** All copy lives in `content/*.ts` (profile, experience, skills, certifications, education, artifacts, testimonials), typed by `types/content.ts`. Components never hardcode copy — to change what the site says, edit `content/`; to change how it looks, edit `components/`. Site-wide config (name, description, canonical URL, nav items) is in `lib/site.ts`.

**Content integrity rule:** nothing in `content/` is fabricated. Fields without a verified value stay `null`/empty rather than guessed. Intentional gaps: `education.ts` shows only degree + institution (no dates/CGPA), `testimonials.ts` is empty until real testimonials exist, and `siteConfig.url` is a placeholder Vercel subdomain until a custom domain is attached.

**Routes.** Single home page (`app/page.tsx`) composed of section components from `components/sections/`, plus one case-study page per employer at `app/work/[slug]/` — slugs come from `content/experience.ts` via `generateStaticParams`. SEO surface (sitemap, robots, OG images, icons, JSON-LD in the root layout) is generated from `lib/site.ts` + `content/profile.ts`.

**Contact form flow.** `components/sections/ContactForm.tsx` (react-hook-form) and `app/api/contact/route.ts` share the zod schema in `lib/validations.ts` — keep client and server validation in sync by editing only that schema. The route sends mail via Resend, includes a honeypot field (`company` — must stay empty; bots trip it and get a fake success), and returns a clear 503 when `RESEND_API_KEY` is unset rather than failing silently. Env vars are documented in `.env.example`; local values go in `.env.local`.

**Styling.** Tailwind v4 with CSS-based configuration — there is no `tailwind.config`. All design tokens (colors, radii, shadows, mesh/grid backgrounds) are CSS variables defined in `app/globals.css` and mapped to Tailwind utilities via `@theme inline`. The palette is warm ink/paper neutrals with a single amber accent; accent values are contrast-checked (AA 4.5:1+) against their paired background — keep that property when adjusting colors. Use the `cn()` helper from `lib/utils.ts` for conditional classes.

**Theming.** next-themes with `attribute="data-theme"`, `defaultTheme="dark"`, `enableSystem={false}` — dark is the default for all visitors regardless of system preference, per explicit instruction. Dark-mode CSS lives under `:root[data-theme="dark"]` in `globals.css`; `viewport.themeColor` in `app/layout.tsx` matches the dark background.

**Motion.** Animations use the `motion` package (`import { motion } from "motion/react"` — not framer-motion) and must respect reduced motion via `useReducedMotion`. `components/ui/Reveal.tsx` is the standard scroll-reveal wrapper — reuse it rather than writing new entrance animations.

**Components.** Server components by default; `"use client"` only where interactivity requires it (theme toggle, form, motion wrappers). `components/ui/` holds design-system primitives (Button, Card, Badge, Container, ...), `components/sections/` holds home-page sections, `components/layout/` holds Header/Footer/theme. Path alias `@/*` maps to the repo root.
