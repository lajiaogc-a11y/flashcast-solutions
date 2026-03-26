import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import flooringImg from "@/assets/material-flooring.jpg";
import tilesImg from "@/assets/material-tiles.jpg";
import doorsImg from "@/assets/material-doors.jpg";
import cabinetsImg from "@/assets/material-cabinets.jpg";
import glassImg from "@/assets/material-glass.jpg";
import boardsImg from "@/assets/material-boards.jpg";

const materials = [
  { name: "Flooring", image: flooringImg, slug: "flooring" },
  { name: "Tiles", image: tilesImg, slug: "tiles" },
  { name: "Doors", image: doorsImg, slug: "doors" },
  { name: "Cabinets", image: cabinetsImg, slug: "cabinets" },
  { name: "Glass", image: glassImg, slug: "glass" },
  { name: "Boards", image: boardsImg, slug: "boards" },
];

const MaterialsSection = () => {
  return (
    <section className="section-padding bg-muted" id="materials">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-8">
              <div className="accent-line mb-4 mx-auto" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Material Library</h2>
              <p className="text-muted-foreground text-sm">Browse quality materials — then request a quote</p>
          </div>
        </Reveal>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-6 md:overflow-visible md:mx-0 md:px-0 md:pb-0">
          {materials.map((m, i) => (
            <Reveal key={m.name} delay={i * 60}>
                <Link
                  to={`/materials/category/${m.slug}`}
                  className="snap-start shrink-0 w-36 md:w-auto group block"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-2.5 bg-card border border-border img-zoom">
                  <img src={m.image} alt={`${m.name} - renovation material sample Kuala Lumpur`} loading="lazy" className="w-full h-full object-cover" width={200} height={200} />
                </div>
                <p className="font-medium text-xs md:text-sm text-center group-hover:text-accent transition-colors leading-tight">{m.name}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link to="/materials" className="text-accent text-sm font-medium hover:underline sm:hidden mt-6 flex items-center justify-center gap-1">
          View All Materials <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};

export default MaterialsSection;
