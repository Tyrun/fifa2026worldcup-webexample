"use client";
import React, { useState } from "react";
import Button from "./ui/Button";

/**
 * Row of "chips" to simulate sorting and the "New" toggle.
 * We'll only style the active one for feedback.
 */
export default function SortBar() {
  const [active, setActive] = useState<string>("Nuevo");

  const items = ["Nuevo", "Precio ascendente", "Precio descendente", "tendencia"];

  return (
    <div className="flex items-center gap-2">
      {items.map((item) => (
        <Button
          key={item}
          variant={item === "Nuevo" ? "solid" : "ghost"}
          active={active === item}
          onClick={() => setActive(item)}
          aria-pressed={active === item}
          style={{
            backgroundColor:
              item === "Nuevo" ? "#BFF207" : active === item ? "#A885F2" : undefined,
            color:
              item === "Nuevo"
                ? "#000000"
                : active === item
                ? "#FFFFFF"
                : undefined,
          }}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}
