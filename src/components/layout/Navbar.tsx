"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/useScrolled";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-500",
          scrolled
            ? "border-b border-line bg-ink/80 py-3 backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-6"
        )}
      >
        <div className="container-px mx-auto flex max-w-[1440px] items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
            {links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-medium uppercase tracking-[0.15em] text-paper-dim transition-colors duration-300 hover:text-paper",
                    active && "text-paper"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300",
                      active && "scale-x-100"
                    )}
                    aria-hidden
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="relative z-50 flex size-10 items-center justify-center text-paper md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
