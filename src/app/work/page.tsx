import type { Metadata } from "next";

import { getAllProjects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectArchive } from "@/components/work/ProjectArchive";

export const metadata: Metadata = {
  title: "Work",
  description: "A full archive of films, documentaries, and cinematography work.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="pb-28 pt-36 sm:pt-44">
      <Container>
        <SectionHeading
          eyebrow="Archive"
          title="All Work"
          description="Narrative shorts, documentary, and cinematography — filter by category to narrow the list."
        />
        <div className="mt-16">
          <ProjectArchive projects={projects} />
        </div>
      </Container>
    </div>
  );
}
