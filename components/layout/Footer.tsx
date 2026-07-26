import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";
import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  const channels = [
    { label: "Email", href: `mailto:${profile.email}` },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "GitHub", href: profile.github },
    ...(profile.upwork ? [{ label: "Upwork", href: profile.upwork }] : []),
  ];

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-mono text-sm text-foreground">{profile.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            SQA Engineer · {profile.location}. Testing web and mobile
            products end-to-end, building toward test automation.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-8">
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
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-xs text-muted-foreground">
          © {year} {profile.name}. Built from scratch with Next.js.
        </p>
      </Container>
    </footer>
  );
}
