import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

const serviceCategories = [
  {
    id: "design",
    title: "Design Services",
    desc: "From space planning to 3D visualization and submission drawings — we handle every design stage.",
    img: commercialImg,
    items: ["Space Planning & Layout", "Residential Interior Design", "Commercial Interior Design", "3D Visualizations & Construction Drawings", "Submission & Drawing Coordination"],
  },
  {
    id: "builtin",
    title: "Custom Built-In Solutions",
    desc: "Custom wardrobes, kitchen cabinets, TV consoles, vanities, and all built-in furniture — made to your exact specifications.",
    img: kitchenImg,
    items: ["Custom Wardrobes", "Kitchen Cabinets", "Bathroom Vanities", "Shoe & Storage Cabinets", "TV Cabinets", "Walk-In Wardrobes", "Study Desks", "Timber Paneling & Partitions"],
  },
  {
    id: "renovation",
    title: "Renovation Works",
    desc: "Full-scope renovation from demolition to finishing — carpentry, ceiling, flooring, electrical, plumbing, and more.",
    img: residentialImg,
    items: ["Demolition & Preliminary Works", "Structural & Masonry Works", "Carpentry & Custom Works", "Ceiling Works", "Painting & Finishing", "Flooring Works", "Electrical Works", "Plumbing & Sanitary", "Air-Conditioning & Ventilation", "Waterproofing Works"],
  },
  {
    id: "commercial",
    title: "Commercial Works",
    desc: "Shop renovation, office fit-out, F&B interiors, retail displays, and reception counters for businesses across KL.",
    img: commercialImg,
    items: ["Shop Renovation", "Office Fit-Out", "F&B Renovation", "Retail Display Works", "Reception & Cashier Counter", "Showroom Works"],
  },
  {
    id: "exterior",
    title: "Exterior Works",
    desc: "Shopfront renovation, signage installation, façade upgrades, and outdoor renovation works.",
    img: exteriorImg,
    items: ["Shopfront Works", "Signage Installation", "Façade Works", "Exterior Renovation"],
  },
  {
    id: "warehouse",
    title: "Warehouse & Shelving",
    desc: "Commercial shelving, warehouse racking systems, industrial partitions, and back-of-house solutions.",
    img: warehouseImg,
    items: ["Commercial Shelving", "Warehouse Racking", "Industrial Partitions", "Back-of-House Areas"],
  },
  {
    id: "approval",
    title: "Approval & Documentation",
    desc: "We assist with management office applications, DBKL permits, drawing submissions, and inspection coordination.",
    img: commercialImg,
    items: ["Management Office Renovation Application", "DBKL Renovation Permit Assistance", "Drawing Submission Coordination", "Documentation Preparation", "Site Inspection Coordination"],
  },
];

const Services = () => {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Services</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            FLASH CAST SDN. BHD. provides comprehensive renovation services across Kuala Lumpur and Selangor — from interior design and custom built-in to commercial fit-out and warehouse systems.
          </p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((cat, i) => (
        <section key={cat.id} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container-narrow">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="accent-line mb-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{cat.title}</h2>
                <p className="text-muted-foreground mb-6">{cat.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button asChild>
                  <Link to="/quote">Get a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <img src={cat.img} alt={cat.title} loading="lazy" width={800} height={600} className="w-full rounded-lg object-cover aspect-[4/3]" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Contact us for a free consultation. We'll assess your space and recommend the right approach.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
