import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { materialsData } from "@/data/materials";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import heroImg from "@/assets/hero-materials.jpg";

const Materials = () => {
  return (
    <main className="pt-16">
      <PageMeta
        title="Renovation Materials Library | Flooring, Tiles, Cabinets | Kuala Lumpur"
        description="Browse FLASH CAST's curated material library — flooring, tiles, doors, cabinet finishes, glass, and boards for your renovation project in Kuala Lumpur and Selangor. Request samples and pricing."
        keywords="renovation materials KL, flooring Kuala Lumpur, kitchen cabinet materials Malaysia, tiles Selangor, SPC vinyl flooring"
        canonicalPath="/materials"
      />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "Materials", url: "/materials" }]} />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="FLASH CAST material library" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container-narrow px-5 md:px-8 py-20 md:py-28">
          <p className="font-body font-semibold text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--gold))" }}>Browse & Select</p>
          <h1
            className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-lg"
            style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Material Library
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            Browse our curated material selection for your renovation project. View finishes, textures, and styles — then contact us for samples and pricing.
          </p>
        </div>
      </section>

      {materialsData.map((cat) => (
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
                        alt={`${item.name} - ${item.category} material for renovation in Kuala Lumpur`}
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg" className="btn-press font-semibold h-12 px-8" asChild>
                <Link to="/quote">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/15 hover:text-white btn-press h-12 px-8 font-semibold"
                asChild
              >
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-[18px] h-[18px] mr-2" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Materials;
