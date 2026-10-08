export const images = {
  // HERO OPTIONS — uncomment one, comment the others:
  hero: "/hero.jpg",
  // hero: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=2400&q=90", // stone tile corridor
  // hero: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=90", // marble bathroom tiles
  // hero: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=2400&q=90", // modern tile kitchen
  shower: "https://images.unsplash.com/photo-1763485956343-61b0163a3e7e?auto=format&fit=crop&w=1200&q=85",
  bath: "https://images.unsplash.com/photo-1728486885790-1454260d9246?auto=format&fit=crop&w=1400&q=85",
  kitchen: "https://images.unsplash.com/photo-1738748444602-8e95197f4dbd?auto=format&fit=crop&w=1200&q=85",
  interior: "https://images.unsplash.com/photo-1681739867179-1e6009bf9071?auto=format&fit=crop&w=1400&q=85",
  vanity: "https://images.unsplash.com/photo-1763485955497-f5ef5d178698?auto=format&fit=crop&w=1400&q=85",
  darkKitchen: "https://images.unsplash.com/photo-1781249144389-4174c1164955?auto=format&fit=crop&w=1400&q=85"
};

export const products = [
  {
    id: "calacatta-oro",
    name: "Calacatta Oro Extra",
    category: "Marble Porcelain",
    size: "120 × 120 cm",
    thickness: "9 mm",
    detail: "Warm alabaster base traversed by fluid caramel and pale grey veining.",
    material: "Full-Body Porcelain Slabs",
    finish: "Honed Velvet / Polished",
    applications: "Floors, Feature Walls, Bathrooms",
    origin: "Modena, Italy",
    rating: 4.95,
    image: images.kitchen,
    tag: "Architect's Choice"
  },
  {
    id: "dune-travertine",
    name: "Dune Vein-Cut Travertine",
    category: "Stone Effect",
    size: "60 × 120 cm",
    thickness: "10 mm",
    detail: "Subtle linear strata reproducing cross-cut Italian travertine with tactile warmth.",
    material: "Rectified Porcelain",
    finish: "Silk Matt Touch",
    applications: "Living Spaces, Spa Suites, Wet Rooms",
    origin: "Castellón, Spain",
    rating: 4.88,
    image: images.shower,
    tag: "Tactile Finish"
  },
  {
    id: "noir-saint-laurent",
    name: "Noir Saint Laurent",
    category: "Marble Porcelain",
    size: "80 × 160 cm",
    thickness: "9.5 mm",
    detail: "Intense obsidian charcoal crossed with dramatic copper and calcite threads.",
    material: "Satin Glazed Porcelain",
    finish: "Deep Satin Satinato",
    applications: "Statement Walls, Reception Lounges",
    origin: "Bologna, Italy",
    rating: 4.98,
    image: images.darkKitchen,
    tag: "High Contrast"
  },
  {
    id: "pietra-alba",
    name: "Pietra Alba Limestone",
    category: "Limestone Effect",
    size: "90 × 90 cm",
    thickness: "10 mm",
    detail: "Soft limestone granular surface inspired by ancient Mediterranean stone.",
    material: "Color-Body Porcelain",
    finish: "Natural R10 Anti-Slip",
    applications: "Indoors & Covered Patios",
    origin: "Coimbra, Portugal",
    rating: 4.92,
    image: images.vanity,
    tag: "Indoor & Outdoor"
  },
  {
    id: "verona-terrazzo",
    name: "Verona Aggregate Terrazzo",
    category: "Terrazzo",
    size: "60 × 60 cm",
    detail: "Calibrated marble chips embedded in a soft warm bone matrix.",
    material: "Agglomerate Porcelain",
    finish: "Micro-Polished",
    applications: "Boutique Retail, Kitchen Floors",
    origin: "Verona, Italy",
    rating: 4.79,
    image: images.interior,
    tag: "Artisanal Look"
  },
  {
    id: "nordic-slate",
    name: "Nordic Slate Charcoal",
    category: "Stone Effect",
    size: "60 × 120 cm",
    thickness: "20 mm",
    detail: "Textured cleft slate structure designed for high traffic and wet areas.",
    material: "Heavy-Duty Porcelain",
    finish: "Structured Matt R11",
    applications: "External Terraces, Pool Decks",
    origin: "Oslo Series",
    rating: 4.91,
    image: images.bath,
    tag: "20mm Paver"
  }
];

export const categories = [
  {
    name: "Marble Porcelain",
    count: "28 Surfaces",
    subtitle: "Bookmatched slabs & rare veining",
    image: images.interior,
    filter: "Marble Porcelain"
  },
  {
    name: "Stone Effect",
    count: "42 Surfaces",
    subtitle: "Travertine, slate & basalt character",
    image: images.bath,
    filter: "Stone Effect"
  },
  {
    name: "Limestone & Terrazzo",
    count: "20 Surfaces",
    subtitle: "Tactile grains & warm aggregates",
    image: images.shower,
    filter: "Limestone Effect"
  }
];
