import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { projectsData } from "@/data/projects";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

const typeImageMap: Record<string, string> = {
  Residential: residentialImg,
  Commercial: commercialImg,
  "Built-In": kitchenImg,
  Warehouse: warehouseImg,
  Exterior: exteriorImg,
  Office: commercialImg,
};

const categories = ["All", "Residential", "Commercial", "Built-In", "Warehouse", "Exterior", "Office"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projectsData : projectsData.filter((p) => p.type === filter);

  return (
    <main className="pt-16">
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Our Projects</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Explore completed renovation projects by FLASH CAST across Kuala Lumpur and Selangor — from residential homes to commercial spaces and warehouses.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === c ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-accent/10"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.slug}`}
                className="group hover-lift block"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-4">
                  <img
                    src={typeImageMap[p.type] || residentialImg}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent/90 text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">{p.type}</span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                <span className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-3 h-3" /> {p.location}
                </span>
                <p className="text-muted-foreground text-sm line-clamp-2">{p.description}</p>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No projects found in this category.</p>
          )}
        </div>
      </section>

      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold mb-4">Have a Similar Project?</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Share your requirements and we'll provide a tailored proposal with accurate pricing.</p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Projects;
