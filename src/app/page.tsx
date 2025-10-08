import Header from "./components/Header";
import ProductCarousel from "./components/ProductCarousel";
import HighlightSection from "./components/HighlightSection";
import Footer from "./components/Footer";

/**
 * Página principal de la tienda FIFA 2026
 */
export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <ProductCarousel />
      <HighlightSection />
      <Footer />
    </main>
  );
}
