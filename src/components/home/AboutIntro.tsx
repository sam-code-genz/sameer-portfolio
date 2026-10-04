import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";
import { CinematicImage } from "@/components/ui/CinematicImage";

export function AboutIntro() {
  return (
    <section className="border-t border-line py-28 sm:py-36">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden bg-surface lg:col-span-5">
          <CinematicImage
            src="/images/about/portrait.svg"
            alt={site.name}
            sizes="(min-width: 1024px) 40vw, 100vw"
            zoom={false}
          />
        </div>

        <div className="lg:col-span-7 lg:pl-6">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">About</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-5 text-balance font-display text-3xl font-medium leading-snug text-paper sm:text-4xl">
              {site.shortBio}
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim">
              {site.philosophy}
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-10">
            <LinkButton href="/about" variant="ghost">
              More About Me
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
