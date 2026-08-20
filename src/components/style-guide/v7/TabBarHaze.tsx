import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TabBarHaze({
  items,
  active,
  accent = "brand",
}: {
  items: { icon: ReactNode; label: string }[];
  active: number;
  accent?: "brand" | "go";
}) {
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 flex h-[76px] items-start justify-around border-t border-ink/8 bg-haze-bottom px-2 pt-2.5">
      {items.map((it, i) => (
        <div
          key={it.label}
          className={cn(
            "flex w-16 flex-col items-center gap-1 text-[11px] font-medium",
            i === active
              ? accent === "brand"
                ? "text-brand"
                : "text-go"
              : "text-ink-soft/70",
          )}
        >
          {it.icon}
          <span>{it.label}</span>
        </div>
      ))}
    </nav>
  );
}
