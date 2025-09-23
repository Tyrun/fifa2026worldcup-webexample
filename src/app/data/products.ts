import { Product } from "../lib/types";

// Tiny mock just to render a grid. Image can be a gray block.
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "Camiseta Selección Mexicana 2025/26 Primera Equipación Hombre - Versión Hincha",
    price: 200.00,
    isNew: true,
    rating: 4.6,
    label: "Label",
    color: "black",
    size: "M",
    image: "/images/MexicoJersey.jpg",
  },
  {
    id: "p2",
    title: "Camiseta Francia 2025/26 Primera Equipación Hombre - Versión Hincha",
    price: 300.00,
    rating: 4.2,
    label: "Label",
    color: "gray",
    size: "L",
    image: "/images/France.jpeg",
  },
  {
    id: "p3",
    title: "Camiseta Brazil 2025/26 Primera Equipación Hombre - Versión Hincha",
    price: 250.00,
    rating: 4.9,
    label: "Label",
    color: "white",
    size: "S",
    image: "/images/BrazilJersey.jpg"
  },
  {
    id: "p4",
    title: "Camiseta Auténtica Club America Aguilas 2025/26 Primera Equipación - Versión Jugador",
    price: 50000.000,
    isNew: true,
    rating: 4.1,
    label: "Label",
    color: "black",
    size: "M",
    image: "/images/ElmasGrandeJersey.webp"
  },
  {
    id: "p5",
    title: "Camiseta Qatar 2025/26 Primera Equipación Hombre - Versión Hincha",
    price: 150.00,
    rating: 3.8,
    label: "Label",
    color: "gray",
    size: "S",
    image: "/images/QatarJersey.webp"
  },
  {
    id: "p6",
    title: "Camiseta Chivas 2025/26 Primera Equipación Hombre - Versión Hincha",
    price: 250.00,
    rating: 4.7,
    label: "Label",
    color: "white",
    size: "L",
    image: "/images/ChivasJersey.webp"
  },
];