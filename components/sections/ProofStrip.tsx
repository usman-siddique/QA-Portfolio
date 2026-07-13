import { Container } from "@/components/ui/Container";
import { MetricStat } from "@/components/ui/MetricStat";
import { Reveal } from "@/components/ui/Reveal";

const stats = [
  { value: "2+", label: "Years in software QA" },
  { value: "900+", label: "Bugs reported (SAT Japan)" },
  { value: "20%", label: "Regression effort cut via automation" },
  { value: "3", label: "Product domains tested end-to-end" },
];

export function ProofStrip() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-14">
      <Container>
        <Reveal delay={0.5}>
          <dl className="surface-sheen grid grid-cols-2 gap-x-6 gap-y-8 rounded-[var(--radius-lg)] border border-border-strong bg-surface px-6 py-8 shadow-elevated-lg sm:grid-cols-4 sm:px-10">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={
                  index > 0
                    ? "sm:border-l sm:border-border sm:pl-6"
                    : undefined
                }
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <MetricStat value={stat.value} label={stat.label} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </div>
  );
}
