// src/app/contacto/page.tsx
// Página "Contactanos" con fondo dinámico tipo carrusel y formulario centrado.
// Usa los mismos Header y Footer de la página principal.

import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import BackgroundSlider from "../components/BackgroundSlider";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Fondo dinámico (tres imágenes de ejemplo) */}
      <BackgroundSlider
        images={[
          "/images/fulbo1.jpg", // <- coloca tus imágenes en public/images/
          "/images/fulbo2.webp",
          "/images/fulbo3.jpg",
        ]}
      />

      {/* Contenido principal */}
      <Header />

      {/* Sección del formulario */}
      <main className="relative z-10 flex-1 flex items-center justify-center py-20">
        <Container>
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 max-w-lg mx-auto text-center">
            {/* Título principal */}
            <h1 className="text-3xl font-extrabold text-[#0B2E59]">
              <span className="text-[#0D6759]">FIFA </span>2026
            </h1>
            <h2 className="text-xl font-semibold mt-1 text-[#4c1270]">
              Contactanos:
            </h2>

            {/* Descripción */}
            <p className="text-gray-700 text-sm mt-4">
              ¿Te interesa formar parte de nuestra comunidad o tienes algún diseño que te gustaría compartir?
            </p>
            <p className="text-gray-700 text-sm mt-2">
              Manda tu idea a través de este sitio y forma parte de la marca oficial del Mundial FIFA 2026.
            </p>

            {/* Subtítulo de formulario */}
            <p className="mt-6 font-semibold text-sm text-gray-800">
              Comparte tus datos aquí:
            </p>

            {/* Formulario */}
            <form className="mt-4 space-y-4 text-left">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Nombre:
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre..."
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-fifaGreen outline-none"
                />
              </div>

              {/* Correo */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Correo electrónico:
                </label>
                <input
                  type="email"
                  placeholder="tuemail@ejemplo.com"
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-fifaGreen outline-none"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  Mensaje:
                </label>
                <textarea
                  placeholder="Escribe tu mensaje..."
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm resize-none focus:ring-2 focus:ring-fifaGreen outline-none"
                />
              </div>

              {/* Botón de envío */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-fifaGreen hover:opacity-90 text-white font-semibold px-6 py-2 rounded-md"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}