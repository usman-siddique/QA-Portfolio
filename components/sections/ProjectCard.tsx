import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MetricStat } from "@/components/ui/MetricStat";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types/content";

export function ProjectCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <Card
      interactive
      className="group relative flex h-full flex-col justify-between gap-8 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-6 select-none font-mono text-7xl font-semibold leading-none text-accent/[0.07]"
      >
        {String(index).padStart(2, "0")}
      </span>

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              {experience.company}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {experience.title} · {formatDateRange(experience.startDate, experience.endDate)}
            </p>
          </div>
          <ArrowUpRight
            className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {experience.overview}
        </p>

        <div className="flex flex-wrap gap-2">
          {experience.domain.slice(0, 3).map((d) => (
            <Badge key={d}>{d}</Badge>
          ))}
        </div>
      </div>

      {experience.metrics.length > 0 ? (
        <div className="relative grid grid-cols-3 gap-4 border-t border-border pt-6">
          {experience.metrics.slice(0, 3).map((metric) => (
            <MetricStat
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      ) : null}

      <Link
        href={`/work/${experience.slug}`}
        className="absolute inset-0"
        aria-label={`Read the ${experience.company} case study`}
      >
        <span className="sr-only">View case study</span>
      </Link>
    </Card>
  );
}
