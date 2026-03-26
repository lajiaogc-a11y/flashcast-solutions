import { Link } from "react-router-dom";
import { Home, Building2, Ruler, PaintBucket, Warehouse, FileCheck, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

/* 4 core businesses highlighted at the top, then secondary services below */
const coreServices = [
  {
    icon: Home,
    title: "Interior Design & Renovation",
    desc: "Complete residential renovation — from space planning and 3D design to carpentry, electrical, plumbing, and finishing. Condos, landed houses, and apartments across KL and Selangor.",
    link: "/services/renovation",
  },
  {
    icon: Ruler,
    title: "Custom Built-In Furniture",
    desc: "Made-to-measure wardrobes, kitchen cabinets, TV consoles, shoe cabinets, vanities, and storage solutions. Premium materials with soft-close hardware as standard.",
    link: "/services/builtin",
  },
  {
    icon: Building2,
    title: "Commercial & Shop Renovation",
    desc: "Office fit-outs, shop lot renovation, F&B interiors, retail displays, and showroom works. We work within your business timeline to minimize downtime.",
    link: "/services/commercial",
  },
  {
    icon: Palette,
    title: "Artistic Wall Coating — Remmers",
    desc: "Authorized applicator for German Remmers artistic coatings. Premium textured wall finishes for feature walls, accent areas, and luxury interiors with authentic European quality.",
    link: "/services/artistic-coating",
  },
];

const secondaryServices = [
  { icon: PaintBucket, title: "Exterior Works", desc: "Shopfront, signage & façade", link: "/services/exterior" },
  { icon: Warehouse, title: "Warehouse & Shelving", desc: "Racking & industrial solutions", link: "/services/warehouse" },
  { icon: FileCheck, title: "Design & Permitting", desc: "Plans, drawings & approvals", link: "/services/design" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Complete renovation and design solutions for residential, commercial, and industrial spaces across Kuala Lumpur and Selangor, Malaysia.
            </p>
          </div>
        </Reveal>

        {/* 4 Core Services — larger cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-5">
          {coreServices.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link
                to={s.link}
                className="group relative p-6 md:p-7 rounded-lg border border-border bg-card hover-lift block h-full transition-colors hover:border-accent/30"
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                  <s.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Secondary Services — smaller cards */}
        <div className="grid grid-cols-3 gap-4 md:gap-5">
          {secondaryServices.map((s, i) => (
            <Reveal key={s.title} delay={(i + 4) * 80}>
              <Link
                to={s.link}
                className="group p-5 md:p-6 rounded-lg border border-border bg-card hover-lift text-center block h-full transition-colors hover:border-accent/30"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                  <s.icon className="w-4 h-4 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-sm mb-1 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="text-center mt-10">
            <Button variant="outline" className="btn-press" asChild>
              <Link to="/services">View All Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
