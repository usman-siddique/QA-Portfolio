import {
  Mail,
  Link2,
  Code2,
  Briefcase,
  MapPin,
  MessageCircle,
} from "lucide-react";
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
  {
    label: "WhatsApp",
    href: `https://wa.me/${profile.phone.replace(/\D/g, "")}`,
    icon: MessageCircle,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-mesh-inverse relative scroll-mt-16 overflow-hidden"
    >
      <div aria-hidden="true" className="bg-dot-grid absolute inset-0 -z-10" />
      <Container className="relative py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about your QA needs"
            description="Whether you're hiring for a QA or automation role, or need testing support for a project, I usually reply within a day."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid items-stretch gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          <Reveal className="h-full">
            <Card className="flex h-full flex-col p-6 shadow-elevated-md sm:p-8">
              <div className="border-b border-border pb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Contact Details
                </p>
                <h3 className="mt-2 text-xl font-medium text-foreground">
                  Reach me directly
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Choose the channel that works best for you.
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2.5">
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
                    className={`group flex min-h-12 min-w-0 items-center gap-3 rounded-[var(--radius-md)] border border-border bg-surface-2/70 px-3 py-2.5 text-sm text-muted-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground hover:shadow-elevated-sm ${
                      channel.label === profile.email ? "col-span-2" : ""
                    }`}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border-strong bg-surface text-accent transition-colors group-hover:border-accent/50">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 break-all text-[12px] sm:text-sm">
                      {channel.label}
                    </span>
                  </a>
                );
              })}
              </div>

              <div className="mt-2.5 flex min-h-12 items-center gap-3 rounded-[var(--radius-md)] border border-border bg-surface-2/70 px-3 py-2.5 text-sm text-muted-foreground shadow-xs">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-border-strong bg-surface text-accent">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                {profile.location}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <Card className="flex h-full flex-col p-6 shadow-elevated-md sm:p-8">
              <div className="mb-6 border-b border-border pb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  Send a Message
                </p>
                <h3 className="mt-2 text-xl font-medium text-foreground">
                  Tell me what you need tested
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Share the role, product, or quality challenge you&apos;re working on.
                </p>
              </div>
              <ContactForm />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
