import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

const allProjects = [
  { title: "Modern Condo Full Renovation", type: "Residential", location: "Mont Kiara, Kuala Lumpur", img: residentialImg, desc: "Complete renovation of a 1,200 sqft condo including custom built-in wardrobes, kitchen cabinets, and feature wall." },
  { title: "Corporate Office Fit-Out", type: "Commercial", location: "Petaling Jaya, Selangor", img: commercialImg, desc: "Full office fit-out with glass partitions, reception counter, and modern workstations for 50 staff." },
  { title: "Custom Kitchen & Walk-In Wardrobe", type: "Built-In", location: "Bangsar, Kuala Lumpur", img: kitchenImg, desc: "Premium kitchen cabinets with quartz countertop and full walk-in wardrobe system." },
  { title: "Warehouse Racking System", type: "Warehouse", location: "Shah Alam, Selangor", img: warehouseImg, desc: "Heavy-duty pallet racking system for 10,000 sqft warehouse with industrial partitions." },
  { title: "Café & Restaurant Renovation", type: "Commercial", location: "Cheras, Kuala Lumpur", img: commercialImg, desc: "F&B renovation including ceiling works, custom bar counter, seating, and kitchen exhaust system." },
  { title: "Shopfront & Signage Works", type: "Exterior", location: "Subang Jaya, Selangor", img: exteriorImg, desc: "Complete shopfront upgrade with new aluminium façade, 3D signage, and glass door installation." },
  { title: "Semi-D Renovation with Extension", type: "Residential", location: "Petaling Jaya, Selangor", img: residentialImg, desc: "Kitchen extension, full interior renovation, and all built-in furniture for a 2-storey semi-detached house." },
  { title: "Medical Clinic Interior", type: "Commercial", location: "Mont Kiara, Kuala Lumpur", img: commercialImg, desc: "Professional medical clinic renovation with custom reception, consultation rooms, and waiting area." },
];

const categories = ["All", "Residential", "Commercial", "Built-In", "Warehouse", "Exterior"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allProjects : allProjects.filter((p) => p.type === filter);

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
          {/* Filter */}
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

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p) => (
              <div key={p.title} className="group hover-lift cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-4">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent/90 text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">{p.type}</span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold mb-1">{p.title}</h3>
                <span className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="w-3 h-3" /> {p.location}
                </span>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
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
