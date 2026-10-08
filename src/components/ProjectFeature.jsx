import { ArrowUpRight } from "lucide-react";
import { images } from "../data/products";

export default function ProjectFeature() {
  const services = [
    { num: "01", title: "Material consultation" },
    { num: "02", title: "Samples & specification" },
    { num: "03", title: "Technical guidance" }
  ];

  return (
    <section className="bg-[#252724] text-white grid grid-cols-1 lg:grid-cols-12 items-stretch">
      <div className="lg:col-span-7 min-h-[480px] lg:min-h-[720px] relative overflow-hidden">
        <img
          src={images.bath}
          alt="Calm stone bathroom interior with freestanding bath"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="lg:col-span-5 p-8 sm:p-12 md:p-20 flex flex-col justify-center">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-white/70 mb-6">
          <span className="w-8 h-[1px] bg-white/60" />
          Designed for real spaces
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.03] font-normal mb-8">
          From sample<br />to final surface.
        </h2>

        <p className="text-white/65 text-sm md:text-base font-light leading-relaxed mb-10 max-w-md">
          Our specialists help you refine colour, scale, finish, and layout—so every decision feels considered before installation begins.
        </p>

        <div className="border-t border-white/18 mb-10">
          {services.map((service) => (
            <div
              key={service.num}
              className="border-b border-white/18 py-4 flex items-center text-xs tracking-wider"
            >
              <span className="text-white/40 font-bold w-12 text-[10px]">{service.num}</span>
              <span className="text-white/90">{service.title}</span>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-[#20211f] hover:bg-[#e9e5dc] transition-colors px-7 py-4 text-xs uppercase font-semibold tracking-widest w-max"
        >
          Start a conversation
          <ArrowUpRight className="w-4 h-4 arrow-icon" />
        </a>
      </div>
    </section>
  );
}
