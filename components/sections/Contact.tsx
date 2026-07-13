import { Mail, Link2, Code2, Briefcase, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { profile } from "@/content/profile";

const channels = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Link2,
  },
  {
    label: "GitHub",
    href: profile.github,
    icon: Code2,
  },
  ...(profile.upwork
    ? [{ label: "Upwork", href: profile.upwork, icon: Briefcase }]
    : []),
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-mesh-inverse relative scroll-mt-16 overflow-hidden"
    >
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 -z-10" />
      <Container className="relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Let's talk about your QA needs"
              description="Whether you're hiring for a QA or automation role, or need testing support for a project, I usually reply within a day."
            />

            <div className="mt-8 flex flex-col gap-1">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      channel.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-3 rounded-[var(--radius-md)] border border-transparent px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-border hover:bg-surface hover:text-foreground hover:shadow-elevated-sm"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface text-accent transition-colors group-hover:border-accent/40">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    {channel.label}
                  </a>
                );
              })}
              <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface text-accent">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                {profile.location}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="shadow-elevated-md">
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
