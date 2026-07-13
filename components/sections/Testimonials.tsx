import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/content/testimonials";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-b border-border">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title="What people I've worked with say" />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 0.08}>
              <Card className="flex h-full flex-col gap-4">
                <p className="text-base leading-relaxed text-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-auto text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    {testimonial.author}
                  </span>
                  {" — "}
                  {testimonial.role}
                  {testimonial.company ? `, ${testimonial.company}` : ""}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
