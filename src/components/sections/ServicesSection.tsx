import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { servicesData } from "@/data/services";

const featuredServices = [
  {
    slug: "renovation",
    title: "Full Renovation",
    desc: "Complete renovation for condos and landed properties, including hacking, tiling, electrical, and finishing works.",
  },
  {
    slug: "design",
    title: "Interior Design",
    desc: "We design spaces that are functional, modern, and tailored to your lifestyle.",
  },
  {
    slug: "builtin",
    title: "Custom Built-In Furniture",
    desc: "Custom carpentry including kitchen cabinets, wardrobes, and storage solutions built for durability.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Renovation Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              From concept to completion — professional renovation solutions for every space.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredServices.map((service, i) => {
            const data = servicesData.find(s => s.slug === service.slug);
            return (
              <Reveal key={service.slug} delay={i * 120}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block rounded-lg overflow-hidden bg-card border border-border hover-lift h-full"
                >
                  {data?.image && (
                    <div className="aspect-[4/3] overflow-hidden img-zoom">
                      <img
                        src={data.image}
                        alt={service.title}
                        loading="lazy"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
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
