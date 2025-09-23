import React from "react";
import Badge from "./ui/Badge";
import { Product } from "../lib/types";
import Image from "next/image";

/**
 * A11y notes:
 * - images have alt (placeholder today)
 * - button has a descriptive name (though non-functional)
 */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group rounded-xl border border-ink-100 bg-white p-2 shadow-card transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-ink-100/60">
        {/* Placeholder image block */}
        <div className="flex h-full items-center justify-center text-ink-300 text-4xl">
          <Image
            src={p.image ?? "/placeholder.png"}
            width={400}
            height={400}
            alt={p.title}
          />
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-ink-900">{p.title}</h4>
          {p.isNew && (
            <Badge className="bg-brand-purple/15 text-[11px] text-ink-700">
              New
            </Badge>
          )}
        </div>
        <div className="text-sm font-semibold text-ink-900">${p.price}</div>
      </div>

      <button
        className="mt-3 w-full rounded-lg border border-ink-100 bg-white py-1.5 text-sm text-ink-700 transition hover:bg-ink-100"
        aria-label={`Ver ${p.title}`}
      >
        Ver detalle
      </button>
    </article>
  );
}