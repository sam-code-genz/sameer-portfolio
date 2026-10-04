import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAdjacentProjects, getAllProjects, getProjectBySlug } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectMeta } from "@/components/project/ProjectMeta";
import { ProjectGallery } from "@/components/project/ProjectGallery";
import { ProjectCredits } from "@/components/project/ProjectCredits";
import { ProjectNav } from "@/components/project/ProjectNav";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.logline,
    openGraph: {
      title: project.title,
      description: project.logline,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <div>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />

      <section className="border-t border-line py-24 sm:py-32">
        <Container>
          <SectionHeading eyebrow="Screener" title="Trailer" />
          <Reveal delay={0.1} className="mt-14">
            <VideoEmbed url={project.trailerUrl} poster={project.heroImage} title={project.title} />
          </Reveal>
        </Container>
      </section>

      <ProjectGallery stills={project.stills} title={project.title} />
      <ProjectCredits credits={project.credits} />
      <ProjectNav previous={previous} next={next} />
    </div>
  );
}
