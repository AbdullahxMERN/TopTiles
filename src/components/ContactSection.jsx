import { ArrowUpRight, Phone, Mail, MessageSquare, Clock } from "lucide-react";

export default function ContactSection() {
  const contactList = [
    {
      label: "Call",
      value: "0318 999 7347",
      href: "tel:+92318 999 7347",
      icon: Phone,
    },
    {
      label: "Email",
      value: "info@toptiles.pk",
      href: "mailto:info@toptiles.pk",
      icon: Mail,
    },
    {
      label: "WhatsApp",
      value: "0318 851 7347",
      href: "https://wa.me/923188517347?text=Hi%20TopTiles%2C%20I%27d%20like%20to%20enquire%20about%20your%20tile%20collection.",
      icon: MessageSquare,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#6e7169] text-white py-28 md:py-40 px-6 sm:px-12 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
    >
      <div className="lg:col-span-7">
        <div className="flex items-center gap-3 text-lg tracking-[0.22em] font-bold text-white/70 mb-6">
          <span className="w-8 h-[1px] bg-white/60" />
          TopTiles
        </div>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.03] font-normal mb-8">
          Let’s select the right
          <br />
          surface for your space
        </h2>

        <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed mb-10 max-w-lg">
          Discuss project specifications request complimentary sample boxes or
          schedule a consultation with our TopTiles specialists in Pakistan
        </p>

        <a
          href="mailto:info@toptiles.pk"
          className="inline-flex items-center justify-center gap-3 bg-white text-[#1c1d1a] hover:bg-[#eae6df] transition-colors px-8 py-4 text-xs font-bold  tracking-[0.18em] w-max shadow-md"
        >
          Contact TopTiles
          <ArrowUpRight className="w-4 h-4 arrow-icon text-[#c28e5c]" />
        </a>
      </div>

      <div className="lg:col-span-5 border-t border-white/25 pt-6 flex flex-col justify-between">
        <div className="divide-y divide-white/25">
          {contactList.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "WhatsApp" ? "_blank" : undefined}
              rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
              className="py-6 grid grid-cols-3 items-center group hover:pl-2 transition-all duration-300"
            >
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5 text-[#c28e5c]" />{" "}
                {item.label}
              </span>
              <span className="col-span-2 text-sm sm:text-base font-medium text-white group-hover:text-[#eae6df]">
                {item.value}
              </span>
            </a>
          ))}

          <div className="py-6 grid grid-cols-3 items-start">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/60 flex items-center gap-2 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-[#c28e5c]" /> Hours
            </span>
            <span className="col-span-2 text-xs leading-relaxed text-white/90 font-mono">
              Mon–Sat 10:00AM-5:00PM PKT
              <br />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
