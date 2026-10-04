import type { Transition, Variants } from "framer-motion";

/** Shared easing — a soft "expo-out" curve that reads as deliberate, not bouncy. */
export const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

export const staggerContainer = (stagger = 0.12, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

/** For image panels: a curtain that sits over the image, then slides off. */
export const curtainReveal: Variants = {
  hidden: { scaleX: 1 },
  show: {
    scaleX: 0,
    transition: { duration: 1.1, ease: EASE },
  },
};

export const imageScaleIn: Variants = {
  hidden: { scale: 1.12 },
  show: {
    scale: 1,
    transition: { duration: 1.4, ease: EASE },
  },
};

export const viewportOnce = { once: true, margin: "-80px 0px -80px 0px" } as const;
