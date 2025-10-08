import React from "react";

interface ProductCardProps {
  name: string;
  price: string;
  label?: string;
  image?: string;
}

export default function ProductCard({ name, price, label, image }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md w-64 flex flex-col items-center p-4">
      {/* Cuadro de imagen */}
      <div className="h-40 w-full rounded-md mb-3 overflow-hidden bg-gray-200 flex items-center justify-center">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400">Imagen no disponible</span>
        )}
      </div>

      {/* Contenedor de texto centrado verticalmente */}
      <div className="h-36 flex flex-col items-center justify-between text-center px-4">
        {/* Label con altura fija */}
        <div className="h-4 flex items-center justify-center">
          {label && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              {label}
            </span>
          )}
        </div>

        {/* Nombre del producto */}
        <h3 className="font-semibold text-base mb-1">{name}</h3>

        {/* Precio */}
        <p className="text-base font-bold text-fifaPurple mt-1">{price}</p>
      </div>

     {/* Botón */}
<button className="bg-fifaPurple text-white rounded-full px-4 py-2 text-sm hover:bg-purple-800"> 
  Agregar al Carro </button>
   </div>
    ); 
  }