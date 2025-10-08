"use client";

import React, { useState } from "react";

// 🎨 Colores principales
const BUTTON_COLOR = "bg-lime-400 hover:bg-lime-500";

export default function LoginForm() {
  // ✅ Estados controlados para manejar los inputs
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
  });

  // ✅ Manejar cambios en los inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Simulación de submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Formulario enviado por ${formData.nombre} ${formData.apellido}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 w-96 mx-auto"
    >
      {/* Nombre */}
      <label className="block mb-2 text-sm font-medium">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="border rounded w-full p-2 mb-4"
      />

      {/* Apellido */}
      <label className="block mb-2 text-sm font-medium">Apellido:</label>
      <input
        type="text"
        name="apellido"
        value={formData.apellido}
        onChange={handleChange}
        className="border rounded w-full p-2 mb-4"
      />

      {/* Correo */}
      <label className="block mb-2 text-sm font-medium">
        Correo Electrónico:
      </label>
      <input
        type="email"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        className="border rounded w-full p-2 mb-4"
      />

      {/* Mensaje */}
      <label className="block mb-2 text-sm font-medium">Mensaje:</label>
      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        className="border rounded w-full p-2 mb-4"
      />

      {/* Botón */}
      <button
        type="submit"
        className={`${BUTTON_COLOR} text-black font-semibold w-full py-2 rounded`}
      >
        Iniciar
      </button>
    </form>
  );
}