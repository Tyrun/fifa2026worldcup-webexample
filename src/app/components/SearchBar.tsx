"use client";
import React from "react";

/**
 * Search field placed at the top of the catalog area.
 * Non-functional for now; accessible label included.
 */
export default function SearchBar() {
  return (
    <div className="relative w-full max-w-xl"> {/* Más ancho */}
      <input
        aria-label="Buscar productos"
        placeholder="Buscar..."
        className="w-full rounded-full border border-white border-[1px] bg-[#148B5D] px-4 py-3 pr-10 text-white placeholder-white/70 text-sm focus:outline-none"
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-lg cursor-pointer">
        🔍
      </span>
    </div>
  );
}
