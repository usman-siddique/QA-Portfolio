import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MetricStat } from "@/components/ui/MetricStat";
import { TechIcon, hasTechIcon } from "@/components/ui/TechIcon";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types/content";

export function SpotlightCard({ experience }: { experience: Experience }) {
  const iconTools = experience.tools.filter(hasTechIcon);
  const isSatJapan = experience.slug === "sat-japan";

  return (
    <div className="group surface-sheen relative overflow-hidden rounded-[var(--radius-xl)] border border-border-strong bg-surface shadow-elevated-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-6 select-none font-mono text-7xl font-semibold leading-none text-accent/[0.07]"
      >
        01
      </span>

      <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:p-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge
              className={`border-accent/40 text-accent${
                isSatJapan ? " hidden md:inline-flex" : ""
              }`}
            >
              Flagship Engagement
            </Badge>
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {formatDateRange(experience.startDate, experience.endDate)}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
              {experience.title} · {experience.company}
            </h3>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              {experience.overview}
            </p>
          </div>

          {isSatJapan ? (
            <>
              <div className="flex flex-wrap gap-2 md:hidden">
                {[
                  "Automotive E-commerce",
                  "Live Auctions",
                  "Web & Mobile",
                ].map((domain) => (
                  <Badge key={domain}>{domain}</Badge>
                ))}
              </div>
              <div className="hidden flex-wrap gap-2 md:flex">
                {experience.domain.map((domain) => (
                  <Badge key={domain}>{domain}</Badge>
                ))}
              </div>
            </>
          ) : (
            <div className="flex flex-wrap gap-2">
              {experience.domain.map((domain) => (
                <Badge key={domain}>{domain}</Badge>
              ))}
            </div>
          )}

          <Link
            href={`/work/${experience.slug}`}
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent"
          >
            Read the full case study
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          <dl className="grid grid-cols-2 gap-3 rounded-[var(--radius-lg)] border border-border bg-background/35 p-3 sm:grid-cols-3">
            {experience.metrics.map((metric) => {
              const isAutomationMetric =
                metric.label === "Playwright Automation Modules Automated";

              return (
                <div
                  key={metric.label}
                  className={`surface-sheen relative flex min-h-30 flex-col justify-between rounded-[var(--radius-md)] border px-4 py-4 shadow-xs ${
                    isAutomationMetric
                      ? "col-span-2 border-accent/35 bg-accent-soft/35"
                      : "border-border bg-surface"
                  }`}
                >
                  {isAutomationMetric ? (
                    <Zap
                      className="absolute right-4 top-4 size-4 text-accent"
                      aria-hidden="true"
                    />
                  ) : null}
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <MetricStat
                      value={metric.value}
                      label={metric.label}
                      className="gap-2 [&>span:first-child]:text-3xl sm:[&>span:first-child]:text-4xl [&>span:last-child]:line-clamp-2 [&>span:last-child]:text-[10px] sm:[&>span:last-child]:text-[11px]"
                    />
                  </dd>
                </div>
              );
            })}
          </dl>

          {iconTools.length > 0 ? (
            <div
              className={`flex flex-wrap gap-2${
                isSatJapan ? " hidden md:flex" : ""
              }`}
            >
              {iconTools.map((tool) => (
                <div
                  key={tool}
                  title={tool}
                  className="flex size-9 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-surface-2 p-2 text-foreground/70"
                >
                  <TechIcon name={tool} />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
