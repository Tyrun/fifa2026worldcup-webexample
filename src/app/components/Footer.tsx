import React from "react";

/**
 * Footer del sitio FIFA Shop 2026
 */
export default function Footer() {
  return (
    <footer className="bg-fifaBlue text-white py-10 px-6 grid md:grid-cols-4 gap-6 text-sm">
      <div>
        <h4 className="font-bold mb-2">FIFA Shop 2026</h4>
        <p>
          La Tienda Oficial del Mundial FIFA 2026. Productos de la más alta
          calidad y envíos a todo el mundo.
        </p>
      </div>

      <div>
        <h4 className="font-bold mb-2">Enlaces Rápidos</h4>
        <ul className="space-y-1">
          <li>Sobre Nosotros</li>
          <li>Socios Participantes</li>
          <li>Calendario de Partidos</li>
          <li>Noticias</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">Atención al Cliente</h4>
        <ul className="space-y-1">
          <li>Centro de Ayuda</li>
          <li>Políticas de Envío</li>
          <li>Reembolsos</li>
          <li>Términos y Condiciones</li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-2">Contacto</h4>
        <ul className="space-y-1">
          <li>support@fifa2026shop.com</li>
          <li>+1 (555) 456-7890</li>
          <li>FIFA HQ, Zurich</li>
        </ul>
      </div>
    </footer>
  );
}
