"use client";
import React from "react";

/**
 * Search field placed at the top of the catalog area.
 * Non-functional for now; accessible label included.
 */
export default function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <input
        aria-label="Buscar productos"
        placeholder="Buscar..."
        className="w-full rounded-lg border border-ink-100 bg-white px-3 py-2 pr-8 text-sm shadow-sm placeholder:text-ink-300"
      />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-300">
        🔍
      </span>
    </div>
  );
}