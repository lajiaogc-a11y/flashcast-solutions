import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPin, Star, CheckCircle, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-renovation.jpg";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

const services = [
  { title: "Interior Renovation", desc: "Complete residential renovation from design to handover", icon: "🏠", img: residentialImg },
  { title: "Commercial Renovation", desc: "Shop, office, F&B and retail fit-out solutions", icon: "🏢", img: commercialImg },
  { title: "Custom Built-In", desc: "Wardrobes, kitchen cabinets, TV consoles & storage", icon: "🪑", img: kitchenImg },
  { title: "Exterior Works", desc: "Shopfront, signage, façade & outdoor renovation", icon: "🏗️", img: exteriorImg },
  { title: "Warehouse & Shelving", desc: "Racking systems, industrial partitions & storage", icon: "📦", img: warehouseImg },
  { title: "Design & Permitting", desc: "Space planning, 3D visuals & submission coordination", icon: "📐", img: commercialImg },
];

const materials = [
  { name: "Flooring", img: residentialImg },
  { name: "Tiles", img: kitchenImg },
  { name: "Doors", img: exteriorImg },
  { name: "Boards & Panels", img: residentialImg },
  { name: "Cabinets", img: kitchenImg },
  { name: "Glass Doors", img: commercialImg },
];

const projects = [
  { title: "Modern Condo Renovation", type: "Residential", location: "Mont Kiara, KL", img: residentialImg },
  { title: "Corporate Office Fit-Out", type: "Commercial", location: "Petaling Jaya", img: commercialImg },
  { title: "Custom Kitchen & Built-In", type: "Built-In", location: "Bangsar, KL", img: kitchenImg },
  { title: "Warehouse Racking System", type: "Warehouse", location: "Shah Alam, Selangor", img: warehouseImg },
];

const steps = [
  { num: "01", title: "Enquiry", desc: "Tell us about your project via WhatsApp, call, or our online form." },
  { num: "02", title: "Site Measurement", desc: "Our team visits your site for accurate measurements and assessment." },
  { num: "03", title: "Quotation & Proposal", desc: "Receive a detailed quotation with 3D visuals and material options." },
  { num: "04", title: "Construction & Handover", desc: "Professional execution with regular updates until project completion." },
];

const Index = () => {
  return (
    <main>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HomeAndConstructionBusiness",
            name: "FLASH CAST SDN. BHD.",
            alternateName: "闪铸设计",
            url: "https://flashcast.com.my",
            telephone: "+60123456789",
            address: {
              "@type": "PostalAddress",
              streetAddress: "94, Jalan Mega Mendung, Taman United",
              addressLocality: "Kuala Lumpur",
              postalCode: "58200",
              addressCountry: "MY",
            },
            areaServed: ["Kuala Lumpur", "Selangor", "Petaling Jaya", "Cheras", "Mont Kiara", "Bangsar", "Subang Jaya"],
            description: "Professional renovation and interior design company in Kuala Lumpur, Malaysia. Specializing in residential renovation, commercial fit-out, custom built-in furniture, and warehouse solutions.",
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional interior renovation by FLASH CAST in Kuala Lumpur" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="relative z-10 container-narrow px-4 md:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in">
              FLASH CAST SDN. BHD. — Kuala Lumpur, Malaysia
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Professional Renovation.<br />Built to Last.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Complete renovation solutions — from interior design and custom built-in furniture to commercial fit-out and warehouse systems. Serving Kuala Lumpur & Selangor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" asChild>
                <Link to="/quote">
                  Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-4 h-4" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section-padding bg-background" id="services">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              FLASH CAST provides end-to-end renovation services for residential, commercial, and industrial projects across Kuala Lumpur and Selangor.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link to="/services" key={s.title} className="group hover-lift">
                <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-display text-lg font-semibold text-primary-foreground mb-1">{s.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{s.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/services">View All Services <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Materials Preview */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Material Library</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Browse our curated selection of flooring, tiles, doors, boards, cabinets, and glass doors. View styles first, then contact us for pricing.
            </p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {materials.map((m) => (
              <Link to="/materials" key={m.name} className="snap-start shrink-0 w-48 md:w-56 group">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <img src={m.img} alt={m.name} loading="lazy" width={400} height={400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-primary-foreground font-medium text-sm">{m.name}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" asChild>
              <Link to="/materials">Explore Materials <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real completed projects by FLASH CAST across Kuala Lumpur and Selangor — residential, commercial, and industrial.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <Link to="/projects" key={p.title} className="group hover-lift">
                <div className="relative overflow-hidden rounded-lg aspect-[16/10]">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">{p.type}</span>
                    <h3 className="font-display text-lg font-semibold text-primary-foreground">{p.title}</h3>
                    <span className="flex items-center gap-1 text-primary-foreground/60 text-sm mt-1">
                      <MapPin className="w-3 h-3" /> {p.location}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/projects">View All Projects <ChevronRight className="ml-1 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">How We Work</h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto">
              A clear, reliable process from first contact to project completion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <span className="text-accent text-3xl font-display font-bold">{s.num}</span>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mt-3 mb-2">{s.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-3">
                <CheckCircle className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Registered Company</h3>
              <p className="text-muted-foreground text-sm">FLASH CAST SDN. BHD. — SSM registered renovation company based in Kuala Lumpur.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Quality Workmanship</h3>
              <p className="text-muted-foreground text-sm">Professional project management with experienced in-house teams for consistent quality.</p>
            </div>
            <div>
              <div className="flex justify-center mb-3">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">Local Team</h3>
              <p className="text-muted-foreground text-sm">Based in Taman United, KL. Serving Kuala Lumpur, Selangor, Petaling Jaya, and surrounding areas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-accent-foreground/80 mb-8 max-w-lg mx-auto">
            Get a free quotation for your renovation project. We serve residential, commercial, and industrial clients across KL & Selangor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-4 h-4" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
