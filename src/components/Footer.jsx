import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#151614] text-white pt-20 pb-10 px-6 sm:px-12 md:px-20 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/15">
        <div className="md:col-span-4">
          <a href="#home" className="flex items-center gap-3 font-semibold text-lg tracking-[0.16em] mb-4">
            <div className="flex gap-[3px] h-6 w-6 -skew-y-6">
              <span className="bg-white w-1.5 h-full" />
              <span className="bg-white w-1.5 h-[80%] mt-[20%]" />
              <span className="bg-white w-1.5 h-[60%] mt-[40%]" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-2xl font-bold">TopTiles</span>
              <span className="text-[7px] font-bold tracking-[0.35em] text-white/60 mt-0.5 uppercase">Pakistan</span>
            </div>
          </a>
        </div>

        <div className="md:col-span-5">
          <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-sm font-light">
            Architectural tile and stone surfaces,<br />thoughtfully selected in Pakistan.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-3 text-xs uppercase tracking-[0.14em] font-semibold">
          <a href="#collection" className="text-white/80 hover:text-[#c28e5c] transition-colors">Collection</a>

          <a href="#location" className="text-white/80 hover:text-[#c28e5c] transition-colors">Location</a>
          <a href="#contact" className="text-white/80 hover:text-[#c28e5c] transition-colors">Contact</a>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/50">
        <span>© 2025 TopTiles Pakistan</span>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
          <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Pinterest</a>
        </div>
        <a href="#home" className="flex items-center gap-1 hover:text-white transition-colors">
          Back to top <ArrowUp className="w-3.5 h-3.5 text-[#c28e5c]" />
        </a>
      </div>
    </footer>
  );
}
