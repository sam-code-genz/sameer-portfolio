"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScrollIndicator({ className }: { className?: string }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className={className} aria-hidden>
      <div className="flex flex-col items-center gap-3 text-paper-dim">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-line-strong">
          <motion.div
            className="h-full w-px bg-paper"
            animate={prefersReducedMotion ? { y: 0 } : { y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}
