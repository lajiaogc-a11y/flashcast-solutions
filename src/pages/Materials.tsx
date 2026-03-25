import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { materialsData } from "@/data/materials";
import Reveal from "@/components/Reveal";

const Materials = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4 animate-fade-in" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up" style={{ opacity: 0, animationDelay: "0.1s" }}>Material Library</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            Browse our curated material selection for your renovation project. View finishes, textures, and styles — then contact us for samples and pricing.
          </p>
        </div>
      </section>

      {materialsData.map((cat, catIdx) => (
        <section key={cat.slug} className="section-padding bg-background border-b border-border">
          <div className="container-narrow">
            <Reveal>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">{cat.name}</h2>
                  <p className="text-muted-foreground text-sm mt-1">{cat.description}</p>
                </div>
              </div>
            </Reveal>
            <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
              {cat.items.map((item, i) => (
                <Reveal key={item.id} delay={i * 80} direction="none">
                  <Link
                    to={`/materials/${item.slug}`}
                    className="snap-start shrink-0 w-64 md:w-72 group cursor-pointer hover-lift block"
                  >
                    <div className="relative overflow-hidden rounded-lg aspect-square mb-3 bg-muted img-zoom">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-1 group-hover:text-accent transition-colors">{item.name}</h3>
                    <p className="text-muted-foreground text-xs">Color: {item.color}</p>
                    <p className="text-muted-foreground text-xs">Suitable for: {item.suitableSpaces.join(", ")}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-accent text-accent-foreground text-center">
        <Reveal>
          <div className="container-narrow">
            <h2 className="font-display text-3xl font-bold mb-4">Interested in a Material?</h2>
            <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Contact us to request samples, check availability, or get a quotation for your project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="btn-press" asChild>
                <Link to="/quote">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 btn-press" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Materials;
