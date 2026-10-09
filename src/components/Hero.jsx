import { ArrowUpRight, ArrowDown, Layers } from "lucide-react";
import { images } from "../data/products";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[740px] max-h-[1120px] overflow-hidden text-white flex items-end pb-24 md:pb-28"
    >
      <img
        src={images.hero}
        alt="TopTiles luxury architectural marble interior"
        className="absolute inset-0 w-full h-full object-cover object-[50%_40%] md:object-center scale-105 transition-transform duration-[2000ms]"
        fetchPriority="high"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#151614]/90 via-[#151614]/50 to-transparent md:from-[#151614]/85 md:via-[#151614]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#151614] via-[#151614]/30 to-transparent md:hidden" />

      <div className="relative z-10 px-6 sm:px-12 md:px-20 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-[10px]  tracking-[0.2em] font-semibold text-white/90 mb-8">
          TopTiles Pakistan
        </div>

        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.95] font-normal mb-8 text-white">
          Tiles that
          <br />
          <em className="font-serif italic font-normal text-[#eae6df]">
            shape a space
          </em>
        </h1>

        <p className="text-white/85 text-base sm:text-lg font-light leading-relaxed max-w-xl mb-10 drop-shadow-xs">
          TopTiles brings curated porcelain and stone collections engineered for
          enduring residential and commercial interiors across Pakistan
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
          <a
            href="#collection"
            className="inline-flex items-center justify-center gap-3 bg-[#c28e5c] hover:bg-[#8c6747] text-white transition-all duration-300 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] shadow-lg"
          >
            Explore Collection
            <ArrowUpRight className="w-4 h-4 arrow-icon" />
          </a>
          <a
            href="#location"
            className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white hover:text-[#eae6df] border-b border-white/40 hover:border-white pb-1 py-3 transition-colors"
          >
            Visit TopTiles
            <span className="text-sm">→</span>
          </a>
        </div>
      </div>

      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 rotate-90 origin-right text-[9px] font-mono tracking-[0.3em] text-white/40 uppercase">
        Volume 05 / 2025
      </div>
    </section>
  );
}
