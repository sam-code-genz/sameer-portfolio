import Link from "next/link";

import { site } from "@/data/site";

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={className ?? "font-display text-lg font-medium tracking-wide text-paper"}
      aria-label={`${site.name} — Home`}
    >
      {initials}
      <span className="text-accent">.</span>
    </Link>
  );
}
