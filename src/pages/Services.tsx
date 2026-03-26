import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import Reveal from "@/components/Reveal";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

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
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4 animate-fade-in" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up" style={{ opacity: 0, animationDelay: "0.1s" }}>Our Services</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            FLASH CAST SDN. BHD. provides comprehensive renovation services across Kuala Lumpur and Selangor — from interior design and custom built-in to commercial fit-out and warehouse systems.
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
                  <img src={imageMap[cat.slug] || residentialImg} alt={cat.title} loading="lazy" width={800} height={600} className="w-full object-cover aspect-[4/3]" />
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-press" asChild>
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-steel text-primary-foreground hover:bg-primary-foreground/10 btn-press" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Services;
