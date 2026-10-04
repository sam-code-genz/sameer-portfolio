import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { LinkButton } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section className="border-t border-line py-32 sm:py-44">
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
            Let&apos;s Work Together
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] text-paper sm:text-6xl">
            Open to directing, DP, and collaboration inquiries.
          </h2>
        </Reveal>
        <Reveal delay={0.16} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href="/contact">Get In Touch</LinkButton>
          <LinkButton href={`mailto:${site.email}`} variant="ghost" showArrow={false}>
            {site.email}
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
