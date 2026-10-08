import { useState, useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, Tag, SlidersHorizontal } from "lucide-react";
import { products } from "../data/products";

export default function Collection({ onSelectProduct }) {
  const [filter, setFilter] = useState("All");
  const scrollContainerRef = useRef(null);

  const filteredProducts = products.filter((item) => {
    if (filter === "All") return true;
    if (filter === "Limestone Effect") return item.category.includes("Limestone") || item.category.includes("Terrazzo");
    return item.category === filter;
  });

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const categoriesList = ["All", "Marble Porcelain", "Stone Effect", "Limestone Effect"];

  return (
    <section id="collection" className="py-24 md:py-36 px-6 sm:px-12 md:px-20 bg-white border-b border-[#e3dfd7]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-bold text-[#7c7d78] mb-4">
            <span className="w-8 h-[1px] bg-[#c28e5c]" />
            Curated Surfaces · 2025 Edition
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl tracking-tight text-[#1c1d1a]">
            Signature Collection
          </h2>
        </div>
        <p className="text-[#7c7d78] text-sm sm:text-base font-light leading-relaxed max-w-md">
          Explore our architectural tile surfaces. Swipe or scroll horizontally to browse materials engineered for bespoke Pakistani interiors.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10 pb-4 border-b border-[#e3dfd7]">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7c7d78] mr-2 flex items-center gap-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#c28e5c]" /> Filter:
          </span>
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all ${filter === cat
                  ? "bg-[#1c1d1a] text-white shadow-xs"
                  : "bg-[#eae6df] text-[#1c1d1a] hover:bg-[#e3dfd7]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 border border-[#1c1d1a] flex items-center justify-center text-[#1c1d1a] hover:bg-[#1c1d1a] hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 border border-[#1c1d1a] flex items-center justify-center text-[#1c1d1a] hover:bg-[#1c1d1a] hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-6 pt-2 transition-all"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {filteredProducts.map((product, idx) => (
          <article
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="snap-start shrink-0 w-[300px] sm:w-[380px] lg:w-[420px] bg-[#f7f5f0] border border-[#e3dfd7] p-5 sm:p-6 group cursor-pointer flex flex-col justify-between hover:shadow-xl transition-all duration-300"
          >
            <div>
              <div className="relative aspect-[4/3] bg-[#eae6df] overflow-hidden mb-6">
                <img
                  src={product.image}
                  alt={`${product.name} surface tile design detail`}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#151614]/85 text-white backdrop-blur-md text-[9px] font-semibold tracking-widest uppercase px-3 py-1 flex items-center gap-1.5 border border-white/10">
                  <Tag className="w-3 h-3 text-[#c28e5c]" /> {product.tag}
                </div>
                <span className="absolute bottom-0 left-0 bg-[#f7f5f0] text-xs font-mono font-semibold tracking-widest px-4 py-2">
                  0{idx + 1}
                </span>
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#1c1d1a] px-5 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4 text-[#c28e5c]" /> Quick View
                  </span>
                </div>
              </div>

              <div className="flex items-baseline justify-between border-b border-[#e3dfd7] pb-3 mb-3">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-[#c28e5c] block mb-1">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-[#1c1d1a] group-hover:text-[#c28e5c] transition-colors">
                    {product.name}
                  </h3>
                </div>
                <span className="text-xs font-mono font-semibold text-[#1c1d1a] shrink-0 ml-2">{product.size}</span>
              </div>

              <p className="text-xs text-[#7c7d78] font-light leading-relaxed mb-6 line-clamp-2">
                {product.detail}
              </p>
            </div>

            <div className="pt-3 border-t border-[#e3dfd7] flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-[#1c1d1a] group-hover:text-[#c28e5c] transition-colors">
              <span>View Specifications</span>
              <ArrowUpRight className="w-4 h-4 arrow-icon text-[#c28e5c]" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-3 border-2 border-[#1c1d1a] text-[#1c1d1a] hover:bg-[#1c1d1a] hover:text-white transition-all duration-300 px-9 py-4 text-xs font-bold uppercase tracking-[0.18em]"
        >
          Request Architectural Specification Binder
          <ArrowUpRight className="w-4 h-4 arrow-icon text-[#c28e5c]" />
        </a>
      </div>
    </section>
  );
}
