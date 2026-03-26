import { Link } from "react-router-dom";
import { Home, Building2, Ruler, PaintBucket, Warehouse, FileCheck, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const allServices = [
  {
    icon: Home,
    title: "Interior Design & Renovation",
    desc: "Complete residential renovation — space planning, 3D design, carpentry, electrical, plumbing, and finishing across KL and Selangor.",
    link: "/services/renovation",
  },
  {
    icon: Ruler,
    title: "Custom Built-In Furniture",
    desc: "Made-to-measure wardrobes, kitchen cabinets, TV consoles, shoe cabinets, vanities, and storage solutions with premium hardware.",
    link: "/services/builtin",
  },
  {
    icon: Building2,
    title: "Commercial & Shop Renovation",
    desc: "Office fit-outs, shop lot renovation, F&B interiors, retail displays, and showroom works within your business timeline.",
    link: "/services/commercial",
  },
  {
    icon: Palette,
    title: "Artistic Wall Coating — Remmers",
    desc: "Authorized German Remmers applicator. Premium textured wall finishes for feature walls, accent areas, and luxury interiors.",
    link: "/services/artistic-coating",
  },
  {
    icon: PaintBucket,
    title: "Exterior Works",
    desc: "Shopfront renovation, signage installation, and building façade upgrades for commercial and residential properties.",
    link: "/services/exterior",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Shelving",
    desc: "Industrial racking systems, warehouse shelving, and storage solutions for manufacturing and logistics operations.",
    link: "/services/warehouse",
  },
  {
    icon: FileCheck,
    title: "Design & Permitting",
    desc: "Architectural plans, construction drawings, permit applications, and regulatory approval coordination.",
    link: "/services/design",
  },
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

        {/* Top row: 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {allServices.slice(0, 4).map((s, i) => (
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

        {/* Bottom row: 3 cards — same style as top */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {allServices.slice(4).map((s, i) => (
            <Reveal key={s.title} delay={(i + 4) * 80}>
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
