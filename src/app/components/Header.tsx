"use client";
import { ShoppingCart, Menu } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-fifaGreen text-white py-3 px-6 relative">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between">
        {/* Logo + buscador */}
        <div className="flex items-center space-x-4">
          <h1 className="font-bold text-lg">FIFA Shop 2026</h1>
          <input
          type="text"
          placeholder="Buscar..."
          className="rounded-full px-4 py-1 text-white outline-none border border-white w-32 md:w-64"
          />

        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <button className="flex items-center gap-1">
            <ShoppingCart size={18} /> <span>Carro (0)</span>
          </button>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Productos</a>
            <a href="#" className="hover:underline">Contactanos</a>
            <a href="#" className="hover:underline">Descuentos</a>
          </nav>
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden flex items-center">
          <button
            className="p-2 rounded-md hover:bg-white/20"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="flex flex-col w-full bg-fifaGreen text-white mt-2 space-y-2 md:hidden px-4 py-4">
          <button className="flex items-center gap-1">
            <ShoppingCart size={18} /> <span>Carro (0)</span>
          </button>
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Productos</a>
          <a href="#" className="hover:underline">Contactanos</a>
          <a href="#" className="hover:underline">Descuentos</a>
        </div>
      )}
    </header>
  );
}
