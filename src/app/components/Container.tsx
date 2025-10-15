// src/app/components/Container.tsx
// Wrapper simple para centrar contenido y mantener un ancho máximo consistente.
// Usar este componente evita repetir max-width y padding en cada sección.

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-7xl mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
