"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

/**
 * Carrusel de productos destacados con fondo dinámico
 * Compatible con Vercel (usa imágenes desde /public/images)
 */
export default function ProductCarousel() {
  const products = [
    {
      name: "Zapatillas oficiales de Futbolista Profesional",
      price: "$1,499 MXN",
      image: "/images/zapatillas-futbol.jpg",
    },
    {
      name: "Camiseta Oficial del Equipo Más Grande del Mundo",
      price: "$5,499 MXN",
      label: "Nuevo",
      image: "/images/camisaAMERICA.webp",
    },
    {
      name: "Guantes de Portero Oficial de Profesional",
      price: "$1,119 MXN",
      image: "/images/guantes-futbol.jpeg",
    },
    {
      name: "Espinilleras de Futbol Oficiales",
      price: "$299 MXN",
      image: "/images/espinilleraOficial.webp",
    },
  ];

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
    <section className="relative py-10 text-center text-white overflow-hidden">
      {/* Fondo dinámico con transición */}
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

      {/* Contenido principal */}
      <div className="relative z-10">
        <h2
          className="text-3xl font-bold mb-3"
          style={{ color: "var(--color-title, #fff)" }}
        >
          Catálogo de Productos
        </h2>

        <p className="text-gray-200 mb-8">
          Explora nuestra enorme colección de productos oficiales FIFA 2026
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-4 w-64 text-white hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full h-48 mb-3">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover rounded-xl"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>

              {p.label && (
                <span className="inline-block bg-yellow-400 text-black px-2 py-1 text-xs font-semibold rounded-full mb-2">
                  {p.label}
                </span>
              )}

              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-yellow-300 font-bold mt-1">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
