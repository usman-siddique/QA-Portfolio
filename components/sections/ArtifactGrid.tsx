import { ArrowUpRight, Database } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { artifacts } from "@/content/artifacts";
import { profile } from "@/content/profile";

export function ArtifactGrid() {
  return (
    <section className="border-b border-border bg-surface/25">
      <Container className="py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Independent Work"
              title="Engineering Lab"
              description="Public code samples for automation, performance, and database testing."
            />

            <Button
              href={profile.github}
              variant="secondary"
              size="sm"
              className="w-full shrink-0 text-accent sm:w-auto sm:text-foreground"
            >
              View all on GitHub
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 md:grid-cols-3 md:gap-4">
          {artifacts.map((artifact, index) => (
            <Reveal
              key={artifact.name}
              delay={0.06 + index * 0.05}
              className="h-full"
            >
              <a
                href={artifact.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${artifact.name} on GitHub`}
                className="group surface-sheen flex h-full min-w-0 items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-surface p-4 shadow-elevated-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-elevated-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-5 md:items-start"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface-2 text-accent">
                  {artifact.tools.length > 0 ? (
                    <TechIcon
                      name={artifact.tools[0]}
                      className="size-[22px]"
                    />
                  ) : (
                    <Database className="size-[22px]" aria-hidden="true" />
                  )}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-[15px] font-medium leading-snug text-foreground sm:text-base">
                    {artifact.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                    {artifact.tagline}
                  </span>
                </span>

                <ArrowUpRight
                  className="mt-0.5 size-4 shrink-0 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
