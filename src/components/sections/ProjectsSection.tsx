import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";

const projects = [
  { title: "Modern Condo Renovation", type: "Residential", location: "Mont Kiara, KL", image: residentialImg, slug: "modern-condo-mont-kiara" },
  { title: "Corporate Office Fit-Out", type: "Commercial", location: "Petaling Jaya", image: commercialImg, slug: "corporate-office-petaling-jaya" },
  { title: "Custom Kitchen & Built-In", type: "Built-In", location: "Bangsar, KL", image: kitchenImg, slug: "custom-kitchen-bangsar" },
  { title: "Industrial Warehouse Setup", type: "Warehouse", location: "Shah Alam, Selangor", image: warehouseImg, slug: "warehouse-racking-shah-alam" },
];

const ProjectsSection = () => {
  return (
    <section className="section-padding bg-background" id="projects">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Explore completed renovation projects across Kuala Lumpur, Selangor, and surrounding areas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <Link to={`/projects/${p.slug}`} className="group rounded-lg overflow-hidden bg-card border border-border hover-lift block">
                <div className="aspect-[4/3] overflow-hidden img-zoom">
                  <img src={p.image} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 md:p-5">
                  <span className="inline-block text-accent text-[10px] font-bold uppercase tracking-widest bg-accent/10 px-2.5 py-1 rounded-sm mb-2">
                    {p.type}
                  </span>
                  <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {p.location}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="text-center mt-10">
            <Button variant="outline" className="btn-press" asChild>
              <Link to="/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ProjectsSection;
