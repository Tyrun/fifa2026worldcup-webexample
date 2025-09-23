import React from "react";
import { Product } from "../lib/types";
import ProductCard from "./ProductCard";

/** Simple responsive grid (3 cols desktop, 2 tablet, 1 mobile) */
export default function ProductGrid({ items }: { items: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </div>
  );
}