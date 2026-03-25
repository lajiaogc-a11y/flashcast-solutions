import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import residentialImg from "@/assets/residential-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

const categories = [
  {
    name: "Flooring",
    items: [
      { name: "SPC Vinyl Flooring", color: "Warm Oak", space: "Living Room, Bedroom", img: residentialImg },
      { name: "Laminate Flooring", color: "Grey Walnut", space: "Study, Hallway", img: residentialImg },
      { name: "Engineered Timber", color: "Natural Teak", space: "Master Bedroom", img: kitchenImg },
      { name: "Homogeneous Tiles", color: "Marble White", space: "Kitchen, Bathroom", img: kitchenImg },
    ],
  },
  {
    name: "Tiles",
    items: [
      { name: "Porcelain Floor Tile", color: "Calacatta Gold", space: "Living Room", img: kitchenImg },
      { name: "Subway Wall Tile", color: "Matte White", space: "Kitchen Backsplash", img: kitchenImg },
      { name: "Mosaic Accent Tile", color: "Black & Gold", space: "Bathroom Feature Wall", img: commercialImg },
    ],
  },
  {
    name: "Doors",
    items: [
      { name: "Solid Timber Door", color: "Dark Walnut", space: "Main Entrance", img: exteriorImg },
      { name: "Bi-Fold Glass Door", color: "Black Frame", space: "Kitchen, Balcony", img: commercialImg },
      { name: "Sliding Barn Door", color: "Whitewash Pine", space: "Bedroom, Study", img: residentialImg },
    ],
  },
  {
    name: "Glass Doors",
    items: [
      { name: "Tempered Glass Swing Door", color: "Clear / Frosted", space: "Bathroom, Office", img: commercialImg },
      { name: "Aluminium Sliding Door", color: "Black Anodized", space: "Balcony, Patio", img: exteriorImg },
    ],
  },
  {
    name: "Boards & Panels",
    items: [
      { name: "Melamine Board", color: "Various Wood Grains", space: "Cabinets, Wardrobes", img: kitchenImg },
      { name: "Plywood (Birch)", color: "Natural", space: "Structural, Shelving", img: residentialImg },
      { name: "Fluted Panel", color: "Natural Oak / Walnut", space: "Feature Wall, TV Console", img: residentialImg },
    ],
  },
  {
    name: "Cabinets",
    items: [
      { name: "Modular Kitchen Cabinet", color: "White + Grey", space: "Kitchen", img: kitchenImg },
      { name: "Walk-In Wardrobe System", color: "Dark Wood", space: "Master Bedroom", img: residentialImg },
      { name: "Shoe Cabinet", color: "Matte White", space: "Entrance Foyer", img: residentialImg },
    ],
  },
];

const Materials = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Material Library</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Browse our curated material selection for your renovation project. View finishes, textures, and styles — then contact us for samples and pricing.
          </p>
        </div>
      </section>

      {categories.map((cat) => (
        <section key={cat.name} className="section-padding bg-background border-b border-border">
          <div className="container-narrow">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{cat.name}</h2>
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
              {cat.items.map((item) => (
                <div key={item.name} className="snap-start shrink-0 w-64 md:w-72 group cursor-pointer hover-lift">
                  <div className="relative overflow-hidden rounded-lg aspect-square mb-3">
                    <img src={item.img} alt={item.name} loading="lazy" width={400} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                  <p className="text-muted-foreground text-xs">Color: {item.color}</p>
                  <p className="text-muted-foreground text-xs">Suitable for: {item.space}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold mb-4">Interested in a Material?</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Contact us to request samples, check availability, or get a quotation for your project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/quote">Request a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Materials;
