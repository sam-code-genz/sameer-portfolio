import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "ghost";

const base =
  "group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-paper text-ink hover:bg-accent hover:text-ink",
  ghost: "border border-line-strong text-paper hover:border-paper hover:bg-paper hover:text-ink",
};

function ButtonContent({
  children,
  showArrow,
}: {
  children: React.ReactNode;
  showArrow: boolean;
}) {
  return (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      )}
    </>
  );
}

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
};

export function Button({
  children,
  className,
  variant = "primary",
  showArrow = true,
  ...rest
}: SharedProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...rest}>
      <ButtonContent showArrow={showArrow}>{children}</ButtonContent>
    </button>
  );
}

export function LinkButton({
  children,
  className,
  variant = "primary",
  showArrow = true,
  href,
  ...rest
}: SharedProps & { href: string } & Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...rest}>
      <ButtonContent showArrow={showArrow}>{children}</ButtonContent>
    </Link>
  );
}
