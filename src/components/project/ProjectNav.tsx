import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { cn } from "@/lib/utils";

function NavLink({
  project,
  direction,
}: {
  project: Project;
  direction: "previous" | "next";
}) {
  const isNext = direction === "next";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cn(
        "group relative flex min-h-64 flex-1 flex-col justify-end overflow-hidden bg-surface p-8 sm:p-10",
        isNext ? "items-end text-right" : "items-start text-left"
      )}
    >
      <div className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60">
        <CinematicImage src={project.poster} alt="" reveal={false} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />

      <div className="relative z-10">
        <span
          className={cn(
            "flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-paper-dim",
            isNext && "flex-row-reverse"
          )}
        >
          {isNext ? (
            <>
              Next Project <ArrowRight className="size-3.5" aria-hidden />
            </>
          ) : (
            <>
              <ArrowLeft className="size-3.5" aria-hidden /> Previous Project
            </>
          )}
        </span>
        <p className="mt-3 font-display text-2xl text-paper sm:text-3xl">{project.title}</p>
      </div>
    </Link>
  );
}

export function ProjectNav({
  previous,
  next,
}: {
  previous?: Project;
  next?: Project;
}) {
  if (!previous && !next) return null;

  return (
    <section className="border-t border-line">
      <div className="flex flex-col sm:flex-row">
        {previous && <NavLink project={previous} direction="previous" />}
        {next && <NavLink project={next} direction="next" />}
      </div>
    </section>
  );
}
