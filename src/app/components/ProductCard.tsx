import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  label?: string;
  image?: string;
}

export default function ProductCard({ name, price, label, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md w-64 flex flex-col items-center p-4 relative">
      {/* Cuadro de imagen con etiqueta */}
      <div className="relative h-40 w-full rounded-md mb-3 overflow-hidden bg-gray-200 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">Imagen no disponible</span>
        )}

        {/* Etiqueta "Nuevo" sobre la imagen */}
        {label && (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
            {label}
          </span>
        )}
      </div>

      {/* Contenedor de texto centrado verticalmente */}
      <div className="h-36 flex flex-col items-center justify-between text-center px-4">
        {/* Nombre del producto */}
        <h3 className="font-semibold text-base mb-1">{name}</h3>

        {/* Precio */}
        <p className="text-base font-bold text-fifaPurple mt-1">{price}</p>
      </div>

{/* Botón */}
<button className="bg-purple-700 text-white rounded-full px-4 py-2 text-sm transform transition-transform duration-200 hover:scale-105">
  Agregar al Carro
</button>

    </div>
  );
}
