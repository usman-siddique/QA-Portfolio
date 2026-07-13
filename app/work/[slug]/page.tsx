import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { MetricStat } from "@/components/ui/MetricStat";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon, hasTechIcon } from "@/components/ui/TechIcon";
import { formatDateRange } from "@/lib/utils";
import { experience } from "@/content/experience";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

function getCaseStudy(slug: string) {
  return experience.find((item) => item.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudy(slug);
  if (!item) return {};

  const title = `${item.title} at ${item.company}`;
  const description = item.overview;

  return {
    title,
    description,
    alternates: { canonical: `${siteConfig.url}/work/${item.slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/work/${item.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseStudy(slug);

  if (!item) notFound();

  const otherEngagements = experience.filter((e) => e.slug !== item.slug);
  const iconTools = item.tools.filter(hasTechIcon);
  const otherTools = item.tools.filter((t) => !hasTechIcon(t));

  return (
    <article>
      <section className="bg-mesh relative overflow-hidden">
        <div aria-hidden="true" className="bg-dot-grid absolute inset-0 -z-10" />
        <Container className="relative py-16 sm:py-24">
          <Reveal>
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to case studies
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {item.isFlagship ? (
                <Badge className="border-accent/40 text-accent">
                  Flagship Engagement
                </Badge>
              ) : null}
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {formatDateRange(item.startDate, item.endDate)}
              </span>
            </div>

            <h1 className="mt-4 max-w-3xl text-[clamp(2rem,4.5vw,3.25rem)] font-medium leading-[1.1] tracking-tight text-foreground">
              {item.title} · {item.company}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {item.overview}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={item.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Visit {item.company}
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.domain.map((d) => (
                <Badge key={d}>{d}</Badge>
              ))}
            </div>
          </Reveal>

          {item.metrics.length > 0 ? (
            <Reveal delay={0.16}>
              <dl className="surface-sheen mt-12 grid grid-cols-2 gap-x-6 gap-y-8 rounded-[var(--radius-lg)] border border-border-strong bg-surface px-6 py-8 shadow-elevated-lg sm:grid-cols-3 sm:px-10 lg:grid-cols-6">
                {item.metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={
                      index > 0
                        ? "border-l border-border pl-4 sm:pl-6"
                        : undefined
                    }
                  >
                    <dt className="sr-only">{metric.label}</dt>
                    <dd>
                      <MetricStat value={metric.value} label={metric.label} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ) : null}
        </Container>
      </section>

      <section className="border-b border-border">
        <Container className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div>
              <h2 className="text-xl font-medium tracking-tight text-foreground">
                What I did
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <h2 className="text-xl font-medium tracking-tight text-foreground">
                Tools &amp; technologies
              </h2>

              {iconTools.length > 0 ? (
                <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-5">
                  {iconTools.map((tool) => (
                    <div
                      key={tool}
                      title={tool}
                      className="flex flex-col items-center gap-2 rounded-[var(--radius-md)] border border-border bg-surface px-2 py-4 text-center shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-elevated-sm"
                    >
                      <span className="flex size-6 items-center justify-center text-foreground/70">
                        <TechIcon name={tool} />
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        {tool}
                      </span>
                    </div>
                  ))}
                </div>
              ) : null}

              {otherTools.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {otherTools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </div>
              ) : null}
            </div>
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Card className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-medium text-foreground">
                  More case studies
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {otherEngagements.map((e) => e.company).join(" · ")}
                </p>
              </div>
              <Button href="/#work" variant="secondary">
                View all work
              </Button>
            </Card>
          </Reveal>
        </Container>
      </section>
    </article>
  );
}
