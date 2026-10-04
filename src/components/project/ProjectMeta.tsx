import type { Project } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const fields = (project: Project) => [
  { label: "Director", value: project.director },
  { label: "Role", value: project.role.join(", ") },
  { label: "Duration", value: project.duration },
  { label: "Genre", value: project.genre },
  { label: "Production", value: project.production },
  { label: "Year", value: String(project.year) },
];

export function ProjectMeta({ project }: { project: Project }) {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-4 lg:grid-cols-1">
          {fields(project).map((field, index) => (
            <Reveal key={field.label} delay={index * 0.04}>
              <dt className="text-xs font-medium uppercase tracking-[0.2em] text-paper-faint">
                {field.label}
              </dt>
              <dd className="mt-2 text-base text-paper">{field.value}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="lg:col-span-7 lg:col-start-6">
          <Reveal>
            <p className="text-balance font-display text-2xl italic leading-snug text-paper sm:text-3xl">
              {project.logline}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-paper-dim">
              {project.synopsis}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
