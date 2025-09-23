"use client";

import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortBar from "./components/SortBar";
import FilterSidebar from "./components/FilterSidebar";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import { PRODUCTS } from "./data/products";

/**
 * Page layout strategy:
 * - Header (sticky, brand purple)
 * - Main "catalog" section with a 2-column layout:
 *      left: filters; right: search + sort + grid
 * - Footer (brand lime)
 *
 * The grid and filters are intentionally non-functional now.
 * Focus is on clean structure, naming, a11y, and future extension.
 */
export default function Page() {
  return (
    <>
      <Header />

      {/* Main content area */}
      <main className="container my-6 grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        {/* Filters (left) */}
        <FilterSidebar />

        {/* Catalog (right) */}
        <section className="space-y-4">
          {/* Top row: search (left) + sort chips (right) */}
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <SearchBar />
            <SortBar />
          </div>

          {/* Product grid */}
          <ProductGrid items={PRODUCTS} />
        </section>
      </main>

      <Footer />
    </>
  );
}