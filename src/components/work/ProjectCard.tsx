import Link from "next/link";

import type { Project } from "@/data/projects";
import { CinematicImage } from "@/components/ui/CinematicImage";

export function ProjectCard({
  project,
  priority = false,
  sizes = "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, 100vw",
}: {
  project: Project;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Link href={`/work/${project.slug}`} className="group block focus-visible:outline-none">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface">
        <CinematicImage
          src={project.poster}
          alt={`${project.title} poster`}
          sizes={sizes}
          priority={priority}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 border-t border-line pt-4">
        <div>
          <h3 className="font-display text-xl text-paper transition-colors duration-300 group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-paper-dim">{project.role.join(" · ")}</p>
        </div>
        <div className="shrink-0 text-right text-xs uppercase tracking-[0.15em] text-paper-faint">
          <p>{project.year}</p>
          <p className="mt-1">{project.category}</p>
        </div>
      </div>
    </Link>
  );
}
