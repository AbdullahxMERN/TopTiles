import { ArrowUpRight } from "lucide-react";

export default function Intro() {
  return (
    <section className="py-28 md:py-40 px-6 sm:px-12 md:px-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-[#e3dfd7]">
      <div className="md:col-span-4">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-bold text-[#7c7d78]">
          <span className="w-8 h-[1px] bg-[#c28e5c]" />
          Our Philosophy
        </div>
      </div>

      <div className="md:col-span-8 max-w-3xl">
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-tight leading-[1.04] font-normal text-[#1c1d1a]">
          Exceptional surfaces.<br />
          <em className="text-[#c28e5c] italic font-serif">Quietly distinctive.</em>
        </h2>

        <p className="text-[#7c7d78] text-base sm:text-lg font-light leading-relaxed mt-8 mb-10 max-w-2xl">
          At TopTiles, we source tile surfaces with uncompromising integrity—surfaces defined by considered tone, authentic depth of texture, and lasting architectural performance. Each collection is calibrated to harmonize across complete living spaces.
        </p>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1c1d1a] border-b-2 border-[#1c1d1a] pb-1 hover:text-[#c28e5c] hover:border-[#c28e5c] transition-colors"
        >
          Discover TopTiles Heritage
          <ArrowUpRight className="w-4 h-4 arrow-icon text-[#c28e5c]" />
        </a>
      </div>
    </section>
  );
}
