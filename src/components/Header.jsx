import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.scrollY > 30) !== scrolled) {
        setScrolled(window.scrollY > 30);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:text-[#1c1d1a] focus:px-4 focus:py-2 focus:shadow-xl">
        Skip to content
      </a>

      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 flex items-center justify-between px-6 md:px-14 ${
        scrolled
          ? "h-20 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#1c1d1a]/10 text-[#1c1d1a]"
          : "h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent text-white"
      }`}>
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex gap-[3px] h-6 w-6 -skew-y-6">
            <span className="bg-current w-1.5 h-full transition-transform group-hover:scale-y-110" />
            <span className="bg-current w-1.5 h-[80%] mt-[20%] transition-transform group-hover:scale-y-110 delay-75" />
            <span className="bg-current w-1.5 h-[60%] mt-[40%] transition-transform group-hover:scale-y-110 delay-150" />
          </div>
          <div className="flex flex-col tracking-[0.2em] leading-none">
            <span className="font-serif text-2xl font-bold">TopTiles</span>
            <span className="text-[7px] font-bold tracking-[0.35em] opacity-70 mt-0.5 uppercase">Pakistan</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[11px] font-semibold uppercase tracking-[0.14em]">
          <a href="#home" className="hover:text-[#c28e5c] transition-colors py-2">Home</a>
          <a href="#collection" className="hover:text-[#c28e5c] transition-colors py-2">Collection</a>

          <a href="#location" className="hover:text-[#c28e5c] transition-colors py-2">Location</a>
          <a href="#contact" className="hover:text-[#c28e5c] transition-colors py-2">Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+923188517347"
            className="text-[11px] font-semibold tracking-wider flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5 text-[#c28e5c]" /> 0318 851 7347
          </a>
          <a
            href="#collection"
            className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] px-5 py-2.5 transition-all border ${
              scrolled
                ? "border-[#1c1d1a] bg-[#1c1d1a] text-white hover:bg-[#c28e5c] hover:border-[#c28e5c]"
                : "border-white/80 bg-white/10 text-white hover:bg-white hover:text-[#1c1d1a] backdrop-blur-xs"
            }`}
          >
            Explore Collection
            <ArrowUpRight className="w-3.5 h-3.5 arrow-icon" />
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-current"
          aria-label="Toggle Navigation"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#151614] text-white z-30 flex flex-col justify-between p-8 pt-28 md:hidden">
          <nav className="flex flex-col gap-6 font-serif text-3xl font-light">
            <a href="#home" onClick={closeMenu} className="border-b border-white/15 pb-4">Home</a>
            <a href="#collection" onClick={closeMenu} className="border-b border-white/15 pb-4">Collection</a>

            <a href="#location" onClick={closeMenu} className="border-b border-white/15 pb-4">Location</a>
            <a href="#contact" onClick={closeMenu} className="border-b border-white/15 pb-4">Get in Touch</a>
          </nav>

          <div className="space-y-4 pt-6">
            <a
              href="#collection"
              onClick={closeMenu}
              className="w-full bg-[#c28e5c] text-white py-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em]"
            >
              Explore Collection <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-[10px] text-white/50 text-center uppercase tracking-widest">
              Jinnah Avenue, Near Centaurus · Islamabad
            </p>
          </div>
        </div>
      )}
    </>
  );
}
