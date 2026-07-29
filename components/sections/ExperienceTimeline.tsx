import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { formatDateRange } from "@/lib/utils";
import { experience } from "@/content/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Career timeline" />
        </Reveal>

        <ol className="relative mt-10 flex flex-col gap-3 sm:mt-14 sm:gap-0">
          <div
            aria-hidden="true"
            className="absolute bottom-3 left-[7px] top-3 hidden w-px bg-border sm:block"
          />

          {experience.map((item, index) => (
            <Reveal key={item.slug} delay={index * 0.06}>
              <li className="group relative border-0 sm:border-t sm:border-border sm:pl-12 sm:first:border-t-0">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-11 hidden size-[15px] rounded-full border-[3px] border-background bg-border shadow-elevated-sm transition-colors duration-300 group-hover:bg-accent sm:block"
                />

                <Link
                  href={`/work/${item.slug}`}
                  aria-label={`View the ${item.company} case study`}
                  className="group/link relative flex flex-col gap-4 rounded-[var(--radius-lg)] border border-border-strong bg-surface/70 px-4 py-5 shadow-elevated-sm transition-[background-color,border-color,transform] duration-200 active:scale-[0.995] active:border-accent/50 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:rounded-[var(--radius-md)] sm:border-0 sm:bg-transparent sm:px-4 sm:py-10 sm:shadow-none sm:hover:bg-surface/70"
                >
                  <ArrowUpRight
                    className="absolute right-4 top-5 size-[18px] text-accent/80 transition-colors group-active/link:text-accent sm:hidden"
                    aria-hidden="true"
                  />

                  <div className="sm:w-48 sm:shrink-0">
                    <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {formatDateRange(item.startDate, item.endDate)}
                    </p>
                  </div>

                  <div className="flex-1">
                    <h3 className="pr-7 text-lg font-medium text-accent transition-colors sm:pr-0 sm:text-foreground sm:group-hover:text-accent">
                      {item.title} · {item.company}
                    </h3>
                    {item.employmentType ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.employmentType}
                      </p>
                    ) : null}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.domain.map((d) => (
                        <Badge key={d}>{d}</Badge>
                      ))}
                    </div>
                  </div>

                  <ArrowRight
                    className="mt-1 hidden size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent sm:block"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
