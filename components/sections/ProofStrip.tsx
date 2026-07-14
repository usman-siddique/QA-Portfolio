import { Bot, Boxes, Bug, CalendarDays } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MetricStat } from "@/components/ui/MetricStat";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "2+", label: "Years in software QA", icon: CalendarDays },
  { value: "900+", label: "Bugs reported (SAT Japan)", icon: Bug },
  {
    value: "20%",
    label: "Regression effort cut via automation",
    icon: Bot,
  },
  { value: "3", label: "Product domains tested end-to-end", icon: Boxes },
];

export function ProofStrip() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <Reveal delay={0.5}>
          <section aria-labelledby="impact-metrics-title">
            <div className="mb-4 flex items-center gap-3 px-1">
              <span
                aria-hidden="true"
                className="h-px w-10 bg-gradient-to-r from-accent to-transparent"
              />
              <h2
                id="impact-metrics-title"
                className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
              >
                Impact Metrics
              </h2>
            </div>

            <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <div className="surface-sheen relative flex h-full min-h-36 flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border-strong bg-gradient-to-br from-surface-2 via-surface to-surface px-5 py-5 shadow-elevated-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow lg:min-h-40 lg:px-6 lg:py-6">
                    <span
                      aria-hidden="true"
                      className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-3xl transition-all duration-300 group-hover:bg-accent/20"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent"
                    />

                    <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-lg border border-accent/20 bg-accent-soft/60 text-accent transition-transform duration-300 group-hover:scale-105">
                      <stat.icon className="h-4 w-4" />
                    </div>

                    <dt className="sr-only">{stat.label}</dt>

                    <dd>
                      <MetricStat
                        value={stat.value}
                        label={stat.label}
                      />
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </section>
        </Reveal>
      </Container>
    </div>
  );
}