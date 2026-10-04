"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so every Framer Motion animation respects the OS-level
 * "reduce motion" setting automatically (collapses transform/opacity
 * transitions to instant), without each component checking it manually.
 */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
