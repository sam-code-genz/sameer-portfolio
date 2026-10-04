import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoEmbed } from "@/components/ui/VideoEmbed";

export function Showreel() {
  return (
    <section className="border-t border-line py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Showreel"
          title="A Minute of the Work"
          description="A running reel of selected scenes — updated as new work is finished."
        />
        <Reveal delay={0.1} className="mt-14">
          <VideoEmbed
            // TODO: set to your showreel's Vimeo/YouTube URL once it's cut.
            url={undefined}
            poster="/images/home/showreel.svg"
            title="Showreel"
          />
        </Reveal>
      </Container>
    </section>
  );
}
