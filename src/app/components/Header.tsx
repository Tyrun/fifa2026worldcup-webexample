"use client";
import { ShoppingCart, Menu } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Inicio"); // 🔹 Guarda el enlace activo

  const links = ["Inicio", "Productos", "Contactanos", "Descuentos"];

  return (
    <header className="bg-fifaGreen text-white py-3 px-6 relative">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between">
        {/* Logo + buscador */}
        <div className="flex items-center space-x-4">
          {/* Logo + texto */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/fifalogo.png"
              alt="FIFA 2026 Logo"
              className="w-14 h-14 object-contain"
            />
            <h1 className="font-bold text-lg">FIFA Shop 2026</h1>
          </div>

          {/* Barra de búsqueda */}
          <input
            type="text"
            placeholder="Buscar..."
            className="rounded-full px-4 py-1 text-white outline-none border border-white w-36 md:w-72 ml-2"
          />
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Carrito */}
          <button className="flex items-center gap-1">
            <ShoppingCart size={18} /> <span>Carro (0)</span>
          </button>

          {/* Navegación */}
          <nav className="flex space-x-2">
            {links.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`px-3 py-1 rounded-md transition-all duration-200 ${
                  activeLink === link
                    ? "bg-[#7AB317] text-white"
                    : "hover:bg-[#7AB317]/60"
                }`}
              >
                {link}
              </button>
            ))}
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

          {links.map((link) => (
            <button
              key={link}
              onClick={() => setActiveLink(link)}
              className={`text-left px-3 py-2 rounded-md transition-all duration-200 ${
                activeLink === link
                  ? "bg-[#7AB317] text-white"
                  : "hover:bg-[#7AB317]/60"
              }`}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
