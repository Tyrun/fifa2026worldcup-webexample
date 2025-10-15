"use client";

import { ShoppingCart, Menu } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("Inicio");

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Contactanos", href: "/contacto" },
    { name: "Descuentos", href: "/descuentos" },
  ];

  return (
    <header className="bg-fifaGreen text-white py-2 px-4 md:px-6 relative z-50 shadow-sm">
      {/* Contenedor principal */}
      <div className="flex items-center justify-between">
        {/* Logo + buscador */}
        <div className="flex items-center space-x-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/fifalogo.png"
              alt="FIFA 2026 Logo"
              width={40} // 🔹 Logo más pequeño
              height={40}
              className="object-contain"
              priority
            />
            <h1 className="font-bold text-sm sm:text-base whitespace-nowrap">
              FIFA Shop 2026
            </h1>
          </Link>

          {/* Barra de búsqueda */}
          <input
            type="text"
            placeholder="Buscar..."
            className="rounded-full px-3 py-[3px] text-white outline-none border border-white w-28 sm:w-52 md:w-64 bg-transparent placeholder-white/70 text-sm"
          />
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Carrito */}
          <button className="flex items-center gap-1 text-sm hover:opacity-90 transition">
            <ShoppingCart size={16} /> <span>Carro (0)</span>
          </button>

          {/* Navegación */}
          <nav className="flex space-x-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={`px-2 py-[3px] rounded-md text-sm transition-all duration-200 ${
                  activeLink === link.name
                    ? "bg-[#7AB317] text-white"
                    : "hover:bg-[#7AB317]/60"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Botón menú móvil */}
        <div className="md:hidden flex items-center">
          <button
            className="p-1.5 rounded-md hover:bg-white/20 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="flex flex-col w-full bg-fifaGreen text-white mt-2 space-y-1 md:hidden px-3 py-3 rounded-md shadow-md">
          <button className="flex items-center gap-1 mb-2 text-sm">
            <ShoppingCart size={16} /> <span>Carro (0)</span>
          </button>

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveLink(link.name);
                setMenuOpen(false);
              }}
              className={`text-left px-3 py-1.5 rounded-md text-sm transition-all duration-200 ${
                activeLink === link.name
                  ? "bg-[#7AB317] text-white"
                  : "hover:bg-[#7AB317]/60"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
