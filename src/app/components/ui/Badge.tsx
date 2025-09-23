import { cn } from "@/app/lib/helpers";
import React from "react";

/** Tiny label chip for the product card */
export default function Badge({
  className,
  children,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-ink-100 px-2 py-0.5 text-xs text-ink-700",
        className
      )}
    >
      {children}
    </span>
  );
}