import type { Metadata } from "next";

import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal, RevealGroup } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";

export const metadata: Metadata = {
  title: "About",
  description: site.bio[0],
};

export default function AboutPage() {
  return (
    <div className="pb-28 pt-36 sm:pt-44">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface lg:col-span-5">
          <CinematicImage src="/images/about/portrait.svg" alt={site.name} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">About</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.05] text-paper sm:text-5xl">
              {site.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-paper-dim">
              {site.profession}
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-5">
            {site.bio.map((paragraph, index) => (
              <Reveal key={index} delay={0.14 + index * 0.05}>
                <p className="max-w-xl text-base leading-relaxed text-paper-dim">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-10 border-l-2 border-accent pl-6">
            <p className="max-w-lg font-display text-xl italic leading-snug text-paper">
              {site.philosophy}
            </p>
          </Reveal>
        </div>
      </Container>

      <Container className="mt-28 grid grid-cols-1 gap-14 border-t border-line pt-20 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Education
          </p>
          <ul className="flex flex-col gap-6">
            {site.education.map((item) => (
              <Reveal as="li" key={item.title}>
                <p className="font-display text-lg text-paper">{item.title}</p>
                <p className="mt-1 text-sm text-paper-dim">{item.place}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-paper-faint">
                  {item.period}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Experience
          </p>
          <ul className="flex flex-col gap-6">
            {site.experience.map((item) => (
              <Reveal as="li" key={item.title}>
                <p className="font-display text-lg text-paper">{item.title}</p>
                <p className="mt-1 text-sm text-paper-dim">
                  {item.place} &middot; {item.period}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">{item.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-accent">Skills</p>
          <RevealGroup className="flex flex-wrap gap-2" stagger={0.03}>
            {site.skills.map((skill) => (
              <Reveal
                as="span"
                key={skill}
                className="rounded-full border border-line-strong px-4 py-1.5 text-sm text-paper-dim"
              >
                {skill}
              </Reveal>
            ))}
          </RevealGroup>
        </div>

        <div>
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Selected Recognition
          </p>
          <ul className="flex flex-col gap-4">
            {site.achievements.map((achievement) => (
              <Reveal as="li" key={achievement} className="text-sm leading-relaxed text-paper-dim">
                {achievement}
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-28 flex flex-col items-start gap-8 border-t border-line pt-20 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-balance font-display text-2xl leading-snug text-paper sm:text-3xl">
          Interested in working together?
        </p>
        <LinkButton href="/contact">Get In Touch</LinkButton>
      </Container>
    </div>
  );
}
