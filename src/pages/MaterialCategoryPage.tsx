import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { materialsData } from "@/data/materials";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";

const MaterialCategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = materialsData.find((c) => c.slug === categorySlug);

  if (!category) {
    return (
      <main className="pt-16 section-padding text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Category Not Found</h1>
        <Button asChild><Link to="/materials">View All Materials</Link></Button>
      </main>
    );
  }

  return (
    <main className="pt-16">
      <PageMeta
        title={`${category.name} | Renovation Materials Kuala Lumpur | FLASH CAST`}
        description={`${category.description} Browse ${category.name.toLowerCase()} options for your renovation project in Kuala Lumpur and Selangor.`}
        keywords={`${category.name} KL, ${category.name.toLowerCase()} renovation Malaysia, ${category.name.toLowerCase()} Kuala Lumpur`}
        canonicalPath={`/materials/category/${category.slug}`}
      />
      <JsonLdBreadcrumb items={[
        { name: "Home", url: "/" },
        { name: "Materials", url: "/materials" },
        { name: category.name, url: `/materials/category/${category.slug}` },
      ]} />

      {/* Hero */}
      <section className="bg-muted border-b border-border">
        <div className="container-narrow px-5 md:px-8 py-12 md:py-16">
          <Link to="/materials" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> All Materials
          </Link>
          <div className="accent-line mb-4" />
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2">{category.name}</h1>
          <p className="text-muted-foreground max-w-xl">{category.description}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {category.items.map((item, i) => (
              <Reveal key={item.id} delay={i * 60} direction="none">
                <Link
                  to={`/materials/${item.slug}`}
                  className="group block hover-lift"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-square mb-3 bg-muted border border-border img-zoom">
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
                  <p className="text-muted-foreground text-xs">Suitable: {item.suitableSpaces.join(", ")}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <Reveal>
          <div className="container-narrow">
            <h2 className="font-display text-3xl font-bold mb-4">Interested in {category.name}?</h2>
            <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Contact us to request samples, check availability, or get a quotation for your project.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg" className="btn-press font-semibold h-12 px-8" asChild>
                <Link to="/quote">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/15 hover:text-white btn-press h-12 px-8 font-semibold"
                style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
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

export default MaterialCategoryPage;
