import type { Credit } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectCredits({ credits }: { credits: Credit[] }) {
  if (credits.length === 0) return null;

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Credits" title="Cast &amp; Crew" />
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {credits.map((credit, index) => (
            <Reveal
              as="li"
              key={`${credit.role}-${credit.name}`}
              delay={(index % 2) * 0.05}
              className="flex items-baseline justify-between gap-6 border-b border-line pb-4"
            >
              <span className="text-sm uppercase tracking-[0.1em] text-paper-faint">
                {credit.role}
              </span>
              <span className="text-right font-display text-lg text-paper">{credit.name}</span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
