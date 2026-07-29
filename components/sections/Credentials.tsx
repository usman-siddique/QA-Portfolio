import {
  Award,
  BookOpenCheck,
  CalendarDays,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { certifications } from "@/content/certifications";
import { education } from "@/content/education";

export function Credentials() {
  return (
    <section className="border-b border-border bg-surface/40">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Credentials" title="Education & certifications" />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <Reveal>
            <Card className="relative flex h-full flex-col gap-6 overflow-hidden border-border-strong">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-accent via-accent/45 to-transparent"
              />

              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-accent/25 bg-accent/[0.08] text-accent shadow-xs">
                  <GraduationCap className="size-6" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-medium leading-snug text-foreground">
                    {education.degree}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <p className="text-sm text-muted-foreground">
                      {education.institution}
                    </p>
                    <p className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] text-muted-foreground/75">
                      <CalendarDays className="size-3" aria-hidden="true" />
                      {education.period}
                    </p>
                  </div>
                </div>
              </div>

              <p className="hidden text-sm leading-relaxed text-muted-foreground md:block">
                {education.summary}
              </p>

              <div className="mt-auto border-t border-border pt-5">
                <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                  <BookOpenCheck
                    className="size-4 text-accent"
                    aria-hidden="true"
                  />
                  Key subjects
                </div>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {education.subjects.map((subject) => (
                    <li
                      key={subject}
                      className="rounded-[var(--radius-sm)] border border-border bg-surface-2/70 px-3 py-2 font-mono text-[10px] leading-snug text-muted-foreground"
                    >
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <ul className="flex flex-col divide-y divide-border">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-start gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <Award
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cert.provider}
                        {cert.issued ? ` · ${cert.issued}` : ""}
                      </p>
                      {cert.credentialUrl ? (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs text-accent hover:underline"
                        >
                          Verify credential
                          <ExternalLink className="size-3" aria-hidden="true" />
                        </a>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
