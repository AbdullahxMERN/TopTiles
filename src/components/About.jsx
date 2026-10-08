import { images } from "../data/products";

export default function About() {
  const stats = [
    { value: "20+", label: "Years of expertise" },
    { value: "140+", label: "Curated surfaces" },
    { value: "12", label: "Maker partners" }
  ];

  return (
    <section id="about" className="py-28 md:py-40 px-6 sm:px-12 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <div className="lg:col-span-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-bold text-[#7c7d78] mb-6">
          <span className="w-8 h-[1px] bg-[#c28e5c]" />
          About TopTiles
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.07] font-normal text-[#1c1d1a] mb-8">
          Twenty years of surface expertise.
        </h2>

        <p className="text-[#7c7d78] text-base font-light leading-relaxed mb-12 max-w-xl">
          TopTiles is an independent architectural tile and stone studio serving homeowners, interior designers, and leading architects across Pakistan. Our collection brings together enduring natural character and modern precision manufacturing from trusted international makers.
        </p>

        <div className="border-t border-[#e3dfd7] pt-8 grid grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-3xl sm:text-4xl font-normal text-[#1c1d1a]">
                {stat.value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c7d78] mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 relative">
        <div className="aspect-[4/5] bg-[#eae6df] overflow-hidden shadow-md">
          <img
            src={images.interior}
            alt="Material-focused contemporary interior tile setting"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#151614] text-white p-6 text-[10px] uppercase tracking-widest leading-relaxed max-w-[200px] shadow-xl border border-white/10">
          Thoughtfully Sourced & Crafted
        </div>
      </div>
    </section>
  );
}
