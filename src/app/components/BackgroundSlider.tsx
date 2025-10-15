// src/app/components/BackgroundSlider.tsx
// Carrusel de fondo que cambia entre 3 imágenes con una transición suave.
// Usa absolute positioning para ocupar toda la pantalla detrás del contenido.

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface BackgroundSliderProps {
  images: string[]; // lista de rutas de imágenes
  interval?: number; // tiempo en milisegundos entre cambios
}

export default function BackgroundSlider({
  images,
  interval = 5000, // 5 segundos por imagen
}: BackgroundSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambia la imagen cada cierto tiempo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Imagen de fondo con blur ligero para legibilidad */}
          <Image
            src={src}
            alt={`Fondo ${index + 1}`}
            fill
            className="object-cover brightness-75"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay negro semitransparente para asegurar contraste */}
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}
