"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import { site } from "@/data/site";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="fixed inset-0 z-40 flex flex-col justify-center bg-ink"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
        >
          <nav className="container-px flex flex-col gap-2">
            {links.map((link, index) => {
              const active = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.08 * index + 0.1 }}
                >
                  <Link
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={onClose}
                    className={cn(
                      "font-display text-5xl font-medium tracking-tight text-paper/50 transition-colors duration-300 hover:text-paper sm:text-6xl",
                      active && "text-paper"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
          <motion.div
            className="container-px mt-16 flex flex-col gap-1 text-sm text-paper-dim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href={`mailto:${site.email}`} className="w-fit hover:text-paper">
              {site.email}
            </a>
            <span>{site.location}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
