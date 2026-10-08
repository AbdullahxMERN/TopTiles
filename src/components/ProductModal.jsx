import { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in the ${product.name} (${product.size}). I would like to request sample tiles and material availability for my project in Pakistan.`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121311]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-[#f7f5f0] text-[#1c1d1a] w-full max-w-5xl max-h-[92vh] overflow-y-auto grid grid-cols-1 md:grid-cols-2 relative shadow-2xl border border-[#e3dfd7]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white text-[#1c1d1a] p-3 hover:bg-[#eae6df] transition-colors shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-[#eae6df] min-h-[350px] md:min-h-[550px] relative">
          <img
            src={product.image}
            alt={`${product.name} tile detail preview`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 sm:p-10 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c28e5c] block mb-2">
              {product.category} · {product.origin}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1c1d1a] font-normal mb-3">
              {product.name}
            </h2>
            <p className="text-xs text-[#7c7d78] leading-relaxed mb-6">
              {product.detail}
            </p>

            <div className="border-t border-[#e3dfd7] divide-y divide-[#e3dfd7] mb-6">
              <div className="py-3 grid grid-cols-3 text-xs">
                <span className="text-[#7c7d78]">Format</span>
                <span className="col-span-2 font-mono font-medium">{product.size}</span>
              </div>
              <div className="py-3 grid grid-cols-3 text-xs">
                <span className="text-[#7c7d78]">Material</span>
                <span className="col-span-2 font-medium">{product.material}</span>
              </div>
              <div className="py-3 grid grid-cols-3 text-xs">
                <span className="text-[#7c7d78]">Finish</span>
                <span className="col-span-2 font-medium">{product.finish}</span>
              </div>
              <div className="py-3 grid grid-cols-3 text-xs">
                <span className="text-[#7c7d78]">Applications</span>
                <span className="col-span-2 font-medium">{product.applications}</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href={`https://wa.me/923188517347?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-[#1c1d1a] text-white hover:bg-[#c28e5c] py-4 px-6 text-xs font-bold uppercase tracking-[0.18em] transition-colors flex items-center justify-center gap-2 mb-3 shadow-md"
            >
              Enquire & Order Sample <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex items-center justify-center gap-2 text-[10px] text-[#7c7d78]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#c28e5c]" />
              Complimentary sample tiles dispatched across Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
