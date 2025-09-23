"use client";

import React from "react";

export default function SidebarFilters() {
  return (
    <aside className="w-64 p-4 bg-white rounded shadow-sm">
      {/* Palabras clave */}
      <section className="mb-6">
        <h3 className="font-bold mb-2">Palabras Clave</h3>
        <div className="flex gap-2 flex-wrap">
          <span className="bg-purple-200 px-2 py-1 rounded text-sm">Primavera ✕</span>
          <span className="bg-purple-200 px-2 py-1 rounded text-sm">Smart ✕</span>
          <span className="bg-purple-200 px-2 py-1 rounded text-sm">Moderno ✕</span>
        </div>
      </section>

      {/* Filtros */}
      <section className="mb-6">
        <h3 className="font-bold mb-2">Categorías</h3>
        <ul className="space-y-2 text-sm">
          <li><input type="checkbox" /> Label Descripción</li>
          <li><input type="checkbox" /> Label Descripción</li>
          <li><input type="checkbox" /> Label Descripción</li>
        </ul>
      </section>

      {/* Rango de precio */}
      <section className="mb-6">
        <h3 className="font-bold mb-2">Precio</h3>
        <input type="range" min="0" max="100" className="w-full accent-purple-600" />
        <p className="text-sm mt-1">$0 - $100</p>
      </section>

      {/* Colores */}
      <section className="mb-6">
        <h3 className="font-bold mb-2">Color</h3>
        <ul className="space-y-1 text-sm">
          <li><input type="checkbox" /> Label</li>
          <li><input type="checkbox" /> Label</li>
          <li><input type="checkbox" /> Label</li>
        </ul>
      </section>

      {/* Tamaños */}
      <section>
        <h3 className="font-bold mb-2">Tamaño</h3>
        <ul className="space-y-1 text-sm">
          <li><input type="checkbox" /> Label</li>
          <li><input type="checkbox" /> Label</li>
          <li><input type="checkbox" /> Label</li>
        </ul>
      </section>
    </aside>
  );
}
