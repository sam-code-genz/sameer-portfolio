import Image from "next/image";

import type { Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative flex min-h-[85svh] items-end overflow-hidden bg-ink">
      <Image
        src={project.heroImage}
        alt={`${project.title} — hero still`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10" />

      <Container className="relative z-10 pb-16 pt-40 sm:pb-20">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {project.category}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.02] text-paper sm:text-7xl lg:text-8xl">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-sm uppercase tracking-[0.15em] text-paper-dim">
            {project.year} &middot; {project.role.join(" / ")} &middot; {project.duration}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
