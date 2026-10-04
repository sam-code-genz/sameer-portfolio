"use client";

import { cn } from "@/lib/utils";
import type { Category } from "@/data/projects";

const ALL = "All" as const;

export function FilterTabs({
  categories,
  active,
  onChange,
}: {
  categories: readonly Category[];
  active: Category | typeof ALL;
  onChange: (category: Category | typeof ALL) => void;
}) {
  const options: (Category | typeof ALL)[] = [ALL, ...categories];

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-3" role="group" aria-label="Filter projects by category">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            className={cn(
              "relative pb-1 text-sm font-medium uppercase tracking-[0.15em] text-paper-dim transition-colors duration-300 hover:text-paper",
              isActive && "text-paper"
            )}
          >
            {option}
            <span
              className={cn(
                "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300",
                isActive && "scale-x-100"
              )}
              aria-hidden
            />
          </button>
        );
      })}
    </div>
  );
}

export { ALL };
