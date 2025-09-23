"use client";
import { cn } from "@/app/lib/helpers";
import React from "react";

/** Removable keyword chip (e.g., "Spring", "Smart") */
export default function Chip({
  children,
  onRemove,
  className,
}: {
  children: React.ReactNode;
  onRemove?: () => void;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-ink-100 bg-white px-2 py-0.5 text-xs text-ink-700",
        className
      )}
    >
      {children}
      {onRemove && (
        <button
          aria-label="Eliminar etiqueta"
          onClick={onRemove}
          className="ml-1 rounded-full px-1 text-ink-500 hover:bg-ink-100"
        >
          ×
        </button>
      )}
    </span>
  );
}