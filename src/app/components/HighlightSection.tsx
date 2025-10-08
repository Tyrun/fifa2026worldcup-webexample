import React from "react";

/**
 * Sección de descuentos destacados
 */
export default function HighlightSection() {
  return (
    <section className="bg-fifaGreen text-white py-8 text-center">
      <h3 className="text-2xl font-bold">Grandes Descuentos Destacados</h3>
      <p className="mb-4">Grandes ofertas en algunos de nuestros mejores productos</p>
      <button className="bg-fifaBlue text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-900">
        VER TODO
      </button>
    </section>
  );
}
