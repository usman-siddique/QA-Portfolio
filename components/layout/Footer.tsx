import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Code2,
  Link2,
  Mail,
  MapPin,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  const channels = [
    { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", href: profile.linkedin, icon: Link2 },
    { label: "GitHub", href: profile.github, icon: Code2 },
    ...(profile.upwork
      ? [{ label: "Upwork", href: profile.upwork, icon: Briefcase }]
      : []),
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface">
      <div
        aria-hidden="true"
        className="bg-dot-grid absolute inset-0 -z-10 opacity-40"
      />

      <Container className="relative py-10 sm:py-12">
        <div className="grid gap-0 lg:grid-cols-[1.25fr_0.7fr_1fr] lg:gap-12">
          <div className="max-w-md pb-7 lg:pb-0">
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border-strong bg-surface-2 font-mono text-xs font-semibold text-accent">
                MU
              </span>
              <div>
                <p className="font-medium text-foreground">{profile.name}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {profile.role}
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Testing web and mobile products end-to-end across manual, API,
              database, performance, and automation coverage.
            </p>

            <p className="mt-4 flex items-center gap-2 text-xs text-foreground/75">
              <MapPin className="size-3.5 text-accent" aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="border-t border-border py-7 lg:border-0 lg:py-0"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              Explore
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                    <ArrowRight
                      className="size-3 text-accent/70 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border pt-7 lg:border-0 lg:pt-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
              Connect
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const opensNewTab = channel.href.startsWith("http");

                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={opensNewTab ? "_blank" : undefined}
                      rel={opensNewTab ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon
                        className="size-3.5 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                      {channel.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <p className="text-xs text-muted-foreground">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <Link
            href="#main-content"
            className="group inline-flex w-fit items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-accent"
          >
            Back to top
            <ArrowRight
              className="size-3 -rotate-90 transition-transform group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
