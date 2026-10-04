import { getFeaturedProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";

export function FeaturedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="py-28 sm:py-36">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
          <Reveal delay={0.1}>
            <LinkButton href="/work" variant="ghost" className="hidden sm:inline-flex">
              View Full Archive
            </LinkButton>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} priority={index === 0} />
            </Reveal>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 flex justify-center sm:hidden">
          <LinkButton href="/work" variant="ghost">
            View Full Archive
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
