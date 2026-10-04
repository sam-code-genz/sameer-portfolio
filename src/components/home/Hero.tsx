import Image from "next/image";

import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <Image
        src="/images/home/hero.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-transparent" />

      <Container className="relative z-10 flex w-full flex-col gap-10 pb-20 pt-40 sm:pb-28">
        <div>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
              {site.profession}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance font-display text-6xl font-medium leading-[0.98] text-paper sm:text-8xl lg:text-[7.5rem]">
              {site.name}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-lg text-balance font-display text-xl italic leading-snug text-paper-dim sm:text-2xl">
              {site.statement}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.24}>
          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href="/work">View My Work</LinkButton>
            <LinkButton href="/about" variant="ghost">
              About Me
            </LinkButton>
          </div>
        </Reveal>
      </Container>

      <ScrollIndicator className="absolute bottom-10 right-6 z-10 hidden sm:right-10 md:block" />
    </section>
  );
}
