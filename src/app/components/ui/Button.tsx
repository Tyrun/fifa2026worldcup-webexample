"use client";
import { cn } from "@/app/lib/helpers";
import React from "react";

/**
 * Minimal button with two variants used in the page.
 * - `variant="solid"` is filled (used for "New" chip).
 * - `variant="ghost"` is subtle (used for sort/filter chips).
 */
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost";
  active?: boolean;
};

export default function Button({
  className,
  variant = "ghost",
  active,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm transition-colors",
        variant === "solid" && "bg-ink-100 text-ink-700 hover:bg-ink-100/80",
        variant === "ghost" &&
          "bg-white border border-ink-100 text-ink-700 hover:bg-ink-100/60",
        active && "ring-2 ring-brand-purple/50",
        className
      )}
    />
  );
}