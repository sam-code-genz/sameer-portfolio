import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CinematicImage } from "@/components/ui/CinematicImage";
import { cn } from "@/lib/utils";

export function ProjectGallery({
  stills,
  title,
}: {
  stills: string[];
  title: string;
}) {
  if (stills.length === 0) return null;

  return (
    <section className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Gallery" title="Stills" />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stills.map((still, index) => (
            <Reveal
              key={still}
              delay={(index % 2) * 0.08}
              className={cn("relative aspect-[16/10] overflow-hidden bg-surface", index === 0 && "sm:col-span-2")}
            >
              <CinematicImage
                src={still}
                alt={`${title} — film still ${index + 1}`}
                sizes={index === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
