import Link from "next/link";
import { Briefcase, Code2, Link2, Mail } from "lucide-react";
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
    <footer className="relative overflow-hidden border-t border-border bg-surface/45">
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-accent/60 to-transparent"
      />
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 opacity-50" />

      <Container className="relative grid gap-10 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="max-w-md">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {profile.role}
          </p>
          <p className="mt-3 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
            {profile.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            SQA Engineer · {profile.location}. Testing web and mobile
            products end-to-end, building toward test automation.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-10 sm:gap-x-16">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Navigate
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Connect
            </p>
            <ul className="mt-3 flex flex-col gap-2">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon
                        className="size-3.5 text-accent transition-transform group-hover:-translate-y-0.5"
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
      </Container>

      <Container className="relative flex flex-col gap-2 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
