"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CATEGORIES, type Category, type Project } from "@/data/projects";
import { EASE } from "@/lib/motion";
import { FilterTabs, ALL } from "@/components/work/FilterTabs";
import { ProjectCard } from "@/components/work/ProjectCard";

export function ProjectArchive({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | typeof ALL>(ALL);

  const filtered = useMemo(
    () => (active === ALL ? projects : projects.filter((p) => p.category === active)),
    [projects, active]
  );

  return (
    <div>
      <FilterTabs categories={CATEGORIES} active={active} onChange={setActive} />

      <motion.div layout className="mt-14 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE, delay: index * 0.04 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-14 text-sm text-paper-dim">No projects in this category yet.</p>
      )}
    </div>
  );
}
