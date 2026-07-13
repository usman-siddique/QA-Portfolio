import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";
import { profile } from "@/content/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${profile.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "SQA Engineer",
    "QA Automation",
    "Playwright Testing",
    "Software Quality Assurance",
    "Test Automation Engineer",
    "SDET",
    "Manual Testing",
    "API Testing",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Dark is the default theme for all visitors (regardless of system
// preference) per explicit instruction — theme-color matches it.
export const viewport: Viewport = {
  themeColor: "#0a0c0e",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteConfig.url,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location,
  },
  sameAs: [profile.linkedin, profile.github, ...(profile.upwork ? [profile.upwork] : [])],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem={false}
        >
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-sm)] focus:bg-accent focus:px-4 focus:py-2 focus:text-background"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
