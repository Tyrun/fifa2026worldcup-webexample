"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

/**
 * Carrusel de productos destacados con fondo dinámico
 */
export default function ProductCarousel() {
  const products = [
    {
      name: "Zapatillas oficiales de Futbolista Profesional",
      price: "USD 74.99",
      image: "/images/zapatillas-futbol.jpg",
    },
    {
      name: "Camiseta Oficial del Equipo Más Grande del Mundo",
      price: "USD 299.99",
      label: "Nuevo",
      image: "/images/camisaAMERICA.webp",
    },
    {
      name: "Guantes de Portero Oficial de Profesional",
      price: "USD 59.99",
      image: "/images/guantes-futbol.jpeg",
    },
    {
      name: "Espinilleras de Futbol Oficiales",
      price: "USD 14.99",
      image: "/images/espinilleraOficial.webp",
    },
  ];

  // Fondo dinámico del carrusel
  const backgrounds = [
    "/images/futbol1.jpg",
    "/images/futbol2.jpeg",
    "/images/futbol3.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // Cambiar fondo cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section className="relative py-10 text-black text-center overflow-hidden">
      {/* Fondo con transición */}
      {backgrounds.map((bg, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Contenido */}
      <div className="relative z-10">
        <h2
          className="text-3xl font-bold mb-3"
          style={{ color: "var(--color-title)" }}
        >
          Catálogo de Productos
        </h2>

        <p className="text-gray-200 mb-8">
          Explora nuestra enorme colección de productos oficiales FIFA 2026
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
