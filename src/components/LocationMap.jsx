import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Clock, ArrowUpRight, Navigation } from "lucide-react";

const MAPS_EMBED =
  "https://maps.google.com/maps?q=33.7257,73.0876&z=17&output=embed";
const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Centaurus+Mall+Islamabad+Pakistan";

const info = [
  {
    icon: MapPin,
    label: "Address",
    value: "Jinnah Avenue, Near Centaurus\nBlue Area, Islamabad 44000",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0318 999 9347",
    href: "tel:+923189999347",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon – Sat  10:00  AM – 5:00  PM",
  },
];

export default function LocationMap() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="bg-[#f0ede7] py-24 md:py-36 px-6 sm:px-12 md:px-20"
    >
      <div
        className={`max-w-[1400px] mx-auto transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center gap-3 text-xs  font-semibold uppercase tracking-[0.24em] font-bold text-[#4f16ac] mb-10">
          Pakistan number 1 tiles
        </div>

        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-14">
          {/* LEFT — info panel */}
          <div className="lg:w-[360px] shrink-0 flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight leading-[1.06] font-normal text-[#1c1d1a] mb-4">
                Visit
                <br />
                <em className="italic font-serif text-[#c28e5c]">TopTiles</em>
              </h2>
              <p className="text-[#7c7d78] text-sm font-light leading-relaxed max-w-xs">
                Walk the full slab displays feel surface finishes under natural
                light and take home curated sample boards
              </p>
            </div>

            <div className="divide-y divide-[#e3dfd7] border-t border-b border-[#e3dfd7]">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 py-5">
                  <div className="w-9 h-9 bg-white border border-[#e3dfd7] flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#c28e5c]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7c7d78] block mb-1">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-[#1c1d1a] font-medium hover:text-[#c28e5c] transition-colors whitespace-pre-line"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-sm text-[#1c1d1a] font-medium whitespace-pre-line leading-relaxed">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — map */}
          <div
            className="flex-1 relative group border border-[#c28e5c]/25  group-hover:border-[#c28e5c]/50"
            style={{ minHeight: "520px" }}
          >
            <div className="absolute -top-3 -left-3 w-full h-full   pointer-events-none z-10 transition-all duration-500 " />
            <div className="absolute inset-0 border border-[#e3dfd7] overflow-hidden bg-[#eae6df]">
              <iframe
                title="TopTiles Islamabad – Near Centaurus"
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                className=""
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Pin badge */}
              <div className="absolute bottom-5 left-5 bg-white border border-[#e3dfd7] px-4 py-3 shadow-lg flex items-center gap-3 z-20 pointer-events-none">
                <div className="w-2 h-2 rounded-full bg-[#c28e5c] shrink-0 animate-pulse" />
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1c1d1a] block leading-tight">
                    TopTiles Pakistan
                  </span>
                  <span className="text-[9px] text-[#7c7d78] tracking-wide">
                    Near Centaurus · Islamabad
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <div className="flex flex-col gap-3">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-[#1c1d1a] text-[#1c1d1a] hover:bg-[#1c1d1a] hover:text-white transition-colors duration-300 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em]"
            >
              Open in Google Maps
              <ArrowUpRight className="w-3.5 h-3.5 arrow-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
