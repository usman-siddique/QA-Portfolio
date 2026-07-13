import { GraduationCap, Award, ExternalLink } from "lucide-react";
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

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <Card className="h-full">
              <div className="flex items-start gap-4">
                <GraduationCap
                  className="mt-0.5 size-6 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-foreground">
                        {education.degree}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {education.institution}
                      </p>
                    </div>
                    <span className="shrink-0 pt-0.5 text-xs font-medium tracking-wide text-muted-foreground">
                      {education.dateRange}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {education.summary}
                  </p>
                </div>
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
