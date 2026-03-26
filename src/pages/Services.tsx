import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { servicesData } from "@/data/services";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";
import heroImg from "@/assets/hero-renovation-hd.jpg";

const imageMap: Record<string, string> = {
  design: commercialImg,
  builtin: kitchenImg,
  renovation: residentialImg,
  commercial: commercialImg,
  exterior: exteriorImg,
  warehouse: warehouseImg,
  approval: commercialImg,
};

const Services = () => {
  return (
    <main className="pt-16">
      <PageMeta
        title="Renovation Services Kuala Lumpur | Interior, Built-In & Commercial"
        description="Explore FLASH CAST's comprehensive renovation services in Kuala Lumpur and Selangor — interior design, custom built-in furniture, commercial fit-out, exterior works, and warehouse solutions."
        keywords="renovation services KL, interior design Kuala Lumpur, custom built-in Malaysia, commercial renovation Selangor, shop renovation KL"
        canonicalPath="/services"
      />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="FLASH CAST renovation services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container-narrow px-5 md:px-8 py-20 md:py-28">
          <p className="font-body font-semibold text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--gold))" }}>What We Do</p>
          <h1
            className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-lg"
            style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Our Services
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            Comprehensive renovation services across Kuala Lumpur and Selangor — from interior design and custom built-in to commercial fit-out and warehouse systems.
          </p>
        </div>
      </section>

      {servicesData.map((cat, i) => (
        <section key={cat.id} className={`section-padding ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container-narrow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <Reveal direction={i % 2 !== 0 ? "right" : "left"}>
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="accent-line mb-4" />
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{cat.title}</h2>
                  <p className="text-muted-foreground mb-6">{cat.summary}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {cat.items.slice(0, 8).map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                    {cat.items.length > 8 && (
                      <li className="text-sm text-muted-foreground">+{cat.items.length - 8} more</li>
                    )}
                  </ul>
                  <Button className="btn-press" asChild>
                    <Link to={`/services/${cat.slug}`}>Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal direction={i % 2 !== 0 ? "left" : "right"} delay={150}>
                <div className={`${i % 2 !== 0 ? "lg:order-1" : ""} overflow-hidden rounded-lg img-zoom`}>
                  <img src={imageMap[cat.slug] || residentialImg} alt={`${cat.title} service by FLASH CAST in Kuala Lumpur`} loading="lazy" width={800} height={600} className="w-full object-cover aspect-[4/3]" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-surface-dark text-center">
        <Reveal>
          <div className="container-narrow">
            <div className="accent-line mx-auto mb-4" style={{ backgroundColor: "hsl(var(--gold))" }} />
            <h2 className="font-display text-3xl font-bold mb-4 text-primary-foreground">Not Sure What You Need?</h2>
            <p className="text-steel-light mb-6 max-w-lg mx-auto">Contact us for a free consultation. We'll assess your space and recommend the right approach.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="btn-press font-semibold h-12 px-8" asChild>
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/50 text-white hover:bg-white/15 hover:text-white btn-press h-12 px-8 font-semibold"
                asChild
              >
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Services;
