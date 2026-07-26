import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MetricStat } from "@/components/ui/MetricStat";
import { TechIcon, hasTechIcon } from "@/components/ui/TechIcon";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types/content";

export function SpotlightCard({ experience }: { experience: Experience }) {
  const iconTools = experience.tools.filter(hasTechIcon);

  return (
    <div className="group surface-sheen relative overflow-hidden rounded-[var(--radius-xl)] border border-border-strong bg-surface shadow-elevated-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 -top-10 select-none font-mono text-[11rem] font-semibold leading-none text-accent/[0.06]"
      >
        01
      </span>

      <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:p-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="border-accent/40 text-accent">
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

          <div className="flex flex-wrap gap-2">
            {experience.domain.map((d) => (
              <Badge key={d}>{d}</Badge>
            ))}
          </div>

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
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 rounded-[var(--radius-lg)] border border-border bg-surface-2 p-6">
            {experience.metrics.map((metric) => (
              <MetricStat
                key={metric.label}
                value={metric.value}
                label={metric.label}
              />
            ))}
          </div>

          {iconTools.length > 0 ? (
            <div className="flex flex-wrap gap-2">
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
