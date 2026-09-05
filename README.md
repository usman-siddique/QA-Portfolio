# Muhammad Usman — SQA Portfolio

A responsive portfolio presenting Muhammad Usman's professional software
quality assurance experience, production case studies, testing capabilities,
automation work, credentials, and contact channels.

**Live site:** [usman-sqa.vercel.app](https://usman-sqa.vercel.app)

## Highlights

- Production case studies for SAT Japan, YolKar, and Cross Solutions
- Manual, API, database, performance, mobile, and automation testing coverage
- Responsive experience timeline, education, certifications, and resume access
- Functional contact form with validation, spam protection, and Resend delivery
- Light and dark themes with reduced-motion support
- Dynamic metadata, Open Graph images, `robots.txt`, and `sitemap.xml`

## SEO and search visibility

- Google Search Console ownership is verified for the production site.
- `/sitemap.xml` is submitted successfully and currently exposes the homepage
  plus all three case-study pages.
- The homepage passes Google's live URL inspection and is available for
  crawling and indexing.
- Search performance and page-indexing coverage are monitored in Search
  Console; newly deployed or substantially updated pages can be submitted for
  recrawling through URL Inspection.
- Page metadata includes descriptive titles, summaries, canonical URLs for
  case studies, Open Graph cards, Twitter cards, and Person structured data.

## Technology stack

- **Framework:** Next.js 16 App Router with React Server Components
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with CSS-based design tokens
- **Motion:** Motion, with reduced-motion support
- **Forms:** React Hook Form and Zod
- **Email delivery:** Resend
- **Icons:** Lucide React and React Icons
- **Theming:** next-themes
- **Hosting:** Vercel

## Project structure

```text
app/                    Pages, layouts, metadata, API routes, and SEO files
  api/contact/          Server-side contact form handler
  work/[slug]/          Individual case-study pages
components/
  layout/               Header, footer, and theme controls
  sections/             Portfolio sections
  ui/                   Shared design-system components
content/                Typed portfolio data
lib/                    Site configuration, utilities, and validation schemas
public/                 Resume and other static assets
types/                  Shared content types
```

Most portfolio data is maintained in `content/*.ts`. Presentation-specific
headings and supporting copy live alongside their components.

## Updating portfolio content

| Content | File |
| --- | --- |
| Personal details and social links | `content/profile.ts` |
| Employment and case-study content | `content/experience.ts` |
| Skills and tools | `content/skills.ts` |
| Engineering Lab projects | `content/artifacts.ts` |
| Education | `content/education.ts` |
| Certifications | `content/certifications.ts` |
| Resume | Replace `public/resume.pdf` using the same filename |
| Production URL and navigation | `lib/site.ts` |

## Environment variables

Copy `.env.example` to `.env.local` and add the required Resend key:

```env
RESEND_API_KEY=re_your_api_key
CONTACT_FROM_EMAIL=
```

- `RESEND_API_KEY` is required for contact-form email delivery.
- `CONTACT_FROM_EMAIL` is optional. If omitted, the API route uses Resend's
  sandbox sender.
- Environment variables must also be configured in Vercel for deployed builds.
  Redeploy after adding or changing them.

Secrets must never be committed to the repository.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

The repository is configured for Vercel. Connect the GitHub repository, add
the required environment variables, and deploy the `main` branch.
