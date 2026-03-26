import { Link } from "react-router-dom";
import { Home, Building2, Ruler, PaintBucket, Warehouse, FileCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  { icon: Home, title: "Interior Renovation", desc: "Complete home transformation", link: "/services/renovation" },
  { icon: Ruler, title: "Custom Built-In", desc: "Wardrobes, cabinets & storage", link: "/services/builtin" },
  { icon: Building2, title: "Commercial Renovation", desc: "Shop, office & F&B fit-outs", link: "/services/commercial" },
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
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Complete renovation and design solutions for residential, commercial, and industrial spaces across Kuala Lumpur and Selangor.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <Link
                to={s.link}
                className="group relative p-5 md:p-7 rounded-lg border border-border bg-card hover-lift text-center block h-full transition-colors hover:border-accent/30"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                  <s.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-sm md:text-base mb-1.5 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
