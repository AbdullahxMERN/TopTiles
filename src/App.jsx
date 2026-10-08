import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import ProjectFeature from "./components/ProjectFeature";
import LocationMap from "./components/LocationMap";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProductModal from "./components/ProductModal";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProduct]);

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#1c1d1a] font-sans antialiased selection:bg-[#c28e5c] selection:text-white">
      <Header />
      <main id="main-content">
        <Hero />
        <Collection onSelectProduct={(p) => setSelectedProduct(p)} />
        <ProjectFeature />
        <LocationMap />
        <ContactSection />
      </main>
      <Footer />
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
