import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { MetricStat } from "@/components/ui/MetricStat";
import { TechIcon, hasTechIcon } from "@/components/ui/TechIcon";
import { formatDateRange } from "@/lib/utils";
import type { Experience } from "@/types/content";

export function SpotlightCard({ experience }: { experience: Experience }) {
  const iconTools = experience.tools.filter(hasTechIcon);
  const isSatJapan = experience.slug === "sat-japan";
  const mobileDomains = experience.domain.filter((domain) =>
    [
      "Automotive E-commerce",
      "Live Auctions",
      "International Shipping",
      "Web & Mobile (Android & iOS)",
    ].includes(domain),
  );

  return (
    <div className="group surface-sheen relative overflow-hidden rounded-[var(--radius-xl)] border border-border-strong bg-surface shadow-elevated-md transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-glow">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-3 -top-6 select-none font-mono text-7xl font-semibold leading-none text-accent/[0.07]"
      >
        01
      </span>

      {isSatJapan ? (
        <div className="relative flex flex-col gap-4 p-5 sm:p-6 md:hidden">
          <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            {formatDateRange(experience.startDate, experience.endDate)}
          </span>

          <div>
            <h3 className="text-xl font-medium tracking-tight text-foreground">
              {experience.title}{" \u00b7 "}{experience.company}
            </h3>
            <p className="mt-2 line-clamp-4 text-sm leading-5 text-muted-foreground">
              {experience.overview}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {mobileDomains.map((domain) => (
              <Badge
                key={domain}
                className="min-w-0 justify-center whitespace-normal text-center"
              >
                {domain === "Web & Mobile (Android & iOS)"
                  ? "Web & Mobile"
                  : domain}
              </Badge>
            ))}
          </div>

          <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-md)] border border-border bg-border">
            {experience.metrics.map((metric) => {
              const [value, ...valueQualifier] = metric.value.split(" ");
              const label = [...valueQualifier, metric.label].join(" ");

              return (
                <div
                  key={metric.label}
                  className="flex min-w-0 flex-col bg-surface-2 px-2.5 py-3"
                >
                  <dt className="order-2 mt-1 break-words text-[10px] leading-[1.3] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="order-1 font-mono text-lg font-medium leading-none tracking-tight text-foreground">
                    {value}
                  </dd>
                </div>
              );
            })}
          </dl>

          <Link
            href={`/work/${experience.slug}`}
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-accent transition-opacity hover:opacity-80 active:opacity-70"
          >
            Read the full case study
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      ) : null}

      <div
        className={`${
          isSatJapan ? "hidden md:grid" : "grid"
        } relative gap-10 p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14 lg:p-12`}
      >
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
