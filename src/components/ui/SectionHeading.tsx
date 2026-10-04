import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <Reveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-accent">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance font-display text-4xl font-medium leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 max-w-xl text-balance text-base leading-relaxed text-paper-dim sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
