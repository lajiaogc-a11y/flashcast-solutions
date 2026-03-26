import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPin, Star, CheckCircle, Home, Building2, Warehouse, PaintBucket, Ruler, FileCheck } from "lucide-react";
import { JsonLdLocalBusiness } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/hero-renovation.jpg";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

const services = [
  { icon: Home, title: "Interior Renovation", desc: "Complete home renovation solutions", link: "/services/renovation" },
  { icon: Building2, title: "Commercial Renovation", desc: "Shop, office & F&B fit-outs", link: "/services/commercial" },
  { icon: Ruler, title: "Custom Built-In", desc: "Wardrobes, cabinets & storage", link: "/services/builtin" },
  { icon: PaintBucket, title: "Exterior Works", desc: "Shopfront, signage & façade", link: "/services/exterior" },
  { icon: Warehouse, title: "Warehouse & Shelving", desc: "Racking & industrial solutions", link: "/services/warehouse" },
  { icon: FileCheck, title: "Design & Permitting", desc: "Plans, drawings & approvals", link: "/services/design" },
];

const materials = [
  { name: "Flooring", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop" },
  { name: "Tiles", image: "https://images.unsplash.com/photo-1502005229762-cf1b3a49f263?w=400&h=300&fit=crop" },
  { name: "Doors", image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop" },
  { name: "Cabinets", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop" },
  { name: "Glass Doors", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop" },
  { name: "Boards & Panels", image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?w=400&h=300&fit=crop" },
];

const projects = [
  { title: "Modern Condo Renovation", type: "Residential", location: "Mont Kiara, KL", image: residentialImg, slug: "modern-condo-mont-kiara" },
  { title: "Corporate Office Fit-Out", type: "Commercial", location: "Petaling Jaya", image: commercialImg, slug: "corporate-office-petaling-jaya" },
  { title: "Custom Kitchen & Built-In", type: "Built-In", location: "Bangsar, KL", image: kitchenImg, slug: "custom-kitchen-bangsar" },
  { title: "Industrial Warehouse Setup", type: "Warehouse", location: "Shah Alam, Selangor", image: warehouseImg, slug: "warehouse-racking-shah-alam" },
];

const steps = [
  { num: "01", title: "Enquiry", desc: "Tell us about your project requirements" },
  { num: "02", title: "Site Measurement", desc: "Our team visits your site for precise measurements" },
  { num: "03", title: "Quotation & Proposal", desc: "Receive a detailed proposal with 3D visuals" },
  { num: "04", title: "Construction & Handover", desc: "Professional execution and timely handover" },
];

const Index = () => {
  return (
    <main>
      <JsonLdLocalBusiness />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="FLASH CAST luxury interior renovation in Kuala Lumpur" className="w-full h-full object-cover scale-105 animate-[scale-up_1.2s_ease-out_forwards]" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
        </div>
        <div className="relative z-10 container-narrow px-4 md:px-8 py-32">
          <div className="max-w-xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              FLASH CAST SDN. BHD.
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 text-shadow-hero animate-slide-up" style={{ animationDelay: "0.3s", opacity: 0 }}>
              Complete Renovation Solutions in Kuala Lumpur
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.5s", opacity: 0 }}>
              Professional interior design, custom built-in furniture, and full renovation services.
              From concept to completion — your trusted renovation partner in Malaysia.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.7s", opacity: 0 }}>
              <Button size="lg" className="btn-press" asChild>
                <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-steel text-primary-foreground hover:bg-primary-foreground/10 btn-press" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8 text-steel-light text-sm animate-fade-in" style={{ animationDelay: "0.9s", opacity: 0 }}>
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Kuala Lumpur</span>
              <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5" /> 10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background" id="services">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Complete renovation and design solutions for residential, commercial, and industrial spaces in Kuala Lumpur and Selangor.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Link to={s.link} className="group p-5 md:p-6 rounded-lg border border-border bg-card hover-lift text-center block h-full">
                  <s.icon className="w-8 h-8 mx-auto mb-3 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  <h3 className="font-semibold text-sm md:text-base mb-1">{s.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">{s.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="section-padding bg-muted" id="materials">
        <div className="container-narrow">
          <Reveal>
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="accent-line mb-4" />
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Materials</h2>
                <p className="text-muted-foreground text-sm">Browse our quality material selections</p>
              </div>
              <Link to="/materials" className="text-accent text-sm font-medium hover:underline hidden sm:block">
                View All <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
              </Link>
            </div>
          </Reveal>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide scroll-fade-right">
            {materials.map((m, i) => (
              <Reveal key={m.name} delay={i * 60}>
                <Link
                  to="/materials"
                  className="snap-start shrink-0 w-[160px] md:w-[200px] group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-card img-zoom">
                    <img src={m.image} alt={m.name} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <p className="font-medium text-sm text-center group-hover:text-accent transition-colors">{m.name}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link to="/materials" className="text-accent text-sm font-medium hover:underline sm:hidden mt-4 block text-center">
            View All Materials <ArrowRight className="w-3.5 h-3.5 inline ml-1" />
          </Link>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-background" id="projects">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Featured Projects</h2>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Explore our completed renovation projects across Kuala Lumpur, Selangor, and surrounding areas.
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
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">{p.type}</span>
                    <h3 className="font-display text-lg font-semibold mt-1 mb-1 group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="text-muted-foreground text-sm flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {p.location}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={400}>
            <div className="text-center mt-8">
              <Button variant="outline" className="btn-press" asChild>
                <Link to="/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow">
          <Reveal>
            <div className="text-center mb-12">
              <div className="accent-line mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">How We Work</h2>
              <p className="text-steel-light max-w-lg mx-auto">
                A streamlined process to bring your renovation vision to life.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.num} delay={i * 120}>
                <div className="text-center group">
                  <span className="text-accent font-display text-3xl md:text-4xl font-bold transition-transform duration-300 inline-block group-hover:scale-110">{s.num}</span>
                  <h3 className="font-semibold text-primary-foreground mt-2 mb-1">{s.title}</h3>
                  <p className="text-steel text-sm">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, value: "200+", label: "Projects Completed", iconClass: "text-gold" },
              { icon: CheckCircle, value: "10+ Years", label: "Industry Experience", iconClass: "text-accent" },
              { icon: MapPin, value: "KL & Selangor", label: "Service Coverage Area", iconClass: "text-accent" },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 120}>
                <div className="text-center p-6 group">
                  <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.iconClass} transition-transform duration-300 group-hover:scale-110`} />
                  <h3 className="font-display text-2xl font-bold mb-1">{item.value}</h3>
                  <p className="text-muted-foreground text-sm">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 p-6 md:p-8 bg-muted rounded-lg">
              <div className="flex items-start gap-4">
                <Star className="w-5 h-5 text-gold shrink-0 mt-1" />
                <div>
                  <p className="italic text-foreground mb-2">
                    "FLASH CAST delivered our office renovation on time and within budget. Professional team, quality workmanship, and excellent communication throughout the project."
                  </p>
                  <p className="text-sm text-muted-foreground">— Corporate Client, Petaling Jaya</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-narrow text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="mb-8 max-w-md mx-auto opacity-90">
              Get a free consultation and quotation. We serve Kuala Lumpur, Selangor, and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" variant="secondary" className="btn-press" asChild>
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 btn-press" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Index;
