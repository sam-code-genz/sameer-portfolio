"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { EASE } from "@/lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
