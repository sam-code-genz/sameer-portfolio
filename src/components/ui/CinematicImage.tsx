"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { curtainReveal, imageScaleIn, viewportOnce } from "@/lib/motion";

type CinematicImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  /** Disable the hover zoom, e.g. inside already-interactive elements. */
  zoom?: boolean;
  /** Disable the scroll-triggered reveal (curtain + scale-in). */
  reveal?: boolean;
};

/**
 * Standard image treatment across the site: fills its parent, reveals with a
 * curtain wipe + slow scale-in on first view, and zooms gently on hover.
 * The parent element controls aspect ratio / sizing.
 */
export function CinematicImage({
  src,
  alt,
  sizes = "100vw",
  priority,
  className,
  zoom = true,
  reveal = true,
}: CinematicImageProps) {
  return (
    <motion.div
      className={cn("relative h-full w-full overflow-hidden", className)}
      initial={reveal ? "hidden" : "show"}
      whileInView="show"
      viewport={viewportOnce}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0 } } }}
    >
      <motion.div className="h-full w-full" variants={reveal ? imageScaleIn : undefined}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            zoom && "transition-transform duration-[1200ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
          )}
        />
      </motion.div>
      {reveal && (
        <motion.div
          aria-hidden
          className="absolute inset-0 origin-left bg-ink"
          variants={curtainReveal}
        />
      )}
    </motion.div>
  );
}
