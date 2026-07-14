import { ArrowUpRight, Database } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MetricStat } from "@/components/ui/MetricStat";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { artifacts } from "@/content/artifacts";

const mobileMetricTitles: Record<string, string> = {
  Pattern: "Page Object Model",
  Coverage: "40+ Playwright Tests",
  Execution: "Parallel Execution",
  Reporting: "HTML Reports",
};

export function ArtifactGrid() {
  const [featured, ...rest] = artifacts;
  const isSatAutomation = featured?.name === "SAT Automation";

  return (
    <section className="border-b border-border bg-surface/25">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Independent Work"
            title="Engineering Lab"
            description="Self-directed projects where I build and sharpen automation, performance, and database testing skills outside of client work — public, inspectable, and kept separate from production engagements."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {featured ? (
            <Reveal>
              <a
                href={featured.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="surface-sheen relative overflow-hidden rounded-[var(--radius-xl)] border border-border-strong bg-surface-2 shadow-elevated-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
                  <div
                    className={`grid gap-10 p-8 sm:p-10 lg:p-12 ${
                      isSatAutomation
                        ? "lg:grid-cols-[1.1fr_1fr] lg:gap-12"
                        : "lg:grid-cols-[1.2fr_1fr] lg:gap-14"
                    }`}
                  >
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge className="border-accent/40 text-accent">
                          Primary Automation Project
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                          {featured.name}
                        </h3>
                        <p className="mt-1 text-sm text-accent">
                          {featured.tagline}
                        </p>
                        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
                          {featured.description}
                        </p>
                      </div>

                      <span className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                        View on GitHub
                        <ArrowUpRight
                          className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </span>

                      {isSatAutomation && featured.tools.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {featured.tools.map((tool) => (
                            <div
                              key={tool}
                              title={tool}
                              className="flex size-8 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface p-1.5 text-foreground/70 sm:size-9 sm:p-2"
                            >
                              <TechIcon name={tool} />
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>

                    <div
                      className={`flex flex-col gap-6${
                        isSatAutomation ? " lg:justify-center" : ""
                      }`}
                    >
                      {isSatAutomation ? (
                        <div className="grid grid-cols-2 gap-2 rounded-[var(--radius-lg)] border border-border bg-surface p-2.5 sm:gap-3 sm:p-3">
                          {featured.facts.map((fact) => (
                            <div
                              key={fact.label}
                              className="surface-sheen flex min-h-[4.75rem] flex-col justify-between rounded-[var(--radius-md)] border border-border bg-surface-2/70 p-2.5 shadow-xs sm:min-h-22 sm:p-3"
                            >
                              <div className="min-w-0 flex flex-col gap-1.5 md:hidden">
                                <span className="break-words font-mono text-[13px] font-bold leading-tight tracking-[-0.06em] text-foreground">
                                  {mobileMetricTitles[fact.label] ?? fact.value}
                                </span>
                                <span className="font-mono text-[9px] uppercase leading-tight tracking-[0.1em] text-muted-foreground">
                                  {fact.label}
                                </span>
                              </div>
                              <MetricStat
                                value={fact.value}
                                label={fact.label}
                                className="hidden min-w-0 gap-1.5 md:flex [&>span:first-child]:break-words [&>span:first-child]:whitespace-normal [&>span:first-child]:text-[9px] [&>span:first-child]:tracking-[-0.06em] min-[400px]:[&>span:first-child]:text-[11px] sm:[&>span:first-child]:text-[13px] lg:[&>span:first-child]:text-[clamp(0.65rem,1.25vw,1.125rem)] [&>span:last-child]:text-[9px] [&>span:last-child]:leading-tight sm:[&>span:last-child]:text-[10px]"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-x-6 gap-y-6 rounded-[var(--radius-lg)] border border-border bg-surface p-6">
                          {featured.facts.map((fact) => (
                            <MetricStat
                              key={fact.label}
                              value={fact.value}
                              label={fact.label}
                            />
                          ))}
                        </div>
                      )}

                      {!isSatAutomation && featured.tools.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {featured.tools.map((tool) => (
                            <div
                              key={tool}
                              title={tool}
                              className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface p-2 text-foreground/70"
                            >
                              <TechIcon name={tool} />
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ) : null}

          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((artifact, index) => (
              <Reveal key={artifact.name} delay={0.08 + index * 0.06}>
                <a
                  href={artifact.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card
                    interactive
                    className="group flex h-full flex-col gap-5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex size-11 items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface-2 text-accent">
                        {artifact.tools.length > 0 ? (
                          <TechIcon
                            name={artifact.tools[0]}
                            className="size-5"
                          />
                        ) : (
                          <Database className="size-5" aria-hidden="true" />
                        )}
                      </span>
                      <ArrowUpRight
                        className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <h3 className="text-base font-medium text-foreground">
                        {artifact.name}
                        <span className="sr-only"> (opens on GitHub)</span>
                      </h3>
                      <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent">
                        {artifact.tagline}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {artifact.description}
                      </p>
                    </div>
                  </Card>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
