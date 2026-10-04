"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

/** True once the page has scrolled past `threshold` px. */
export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > threshold);
  });

  return scrolled;
}
