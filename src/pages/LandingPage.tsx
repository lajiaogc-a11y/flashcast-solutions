import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MapPin, Star } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";
import warehouseImg from "@/assets/warehouse-shelving.jpg";
import exteriorImg from "@/assets/exterior-works.jpg";

interface LandingData {
  title: string;
  subtitle: string;
  heroImage: string;
  description: string;
  benefits: string[];
  relatedProjects: { title: string; location: string; image: string }[];
  faqs: { q: string; a: string }[];
}

const landingPages: Record<string, LandingData> = {
  flooring: {
    title: "Flooring Solutions in Kuala Lumpur",
    subtitle: "SPC Vinyl, Laminate & Engineered Wood Flooring — Supply & Install",
    heroImage: residentialImg,
    description: "FLASH CAST provides professional flooring supply and installation services across Kuala Lumpur and Selangor. Choose from our wide range of SPC vinyl, laminate, and engineered wood flooring — all installed by our experienced team with precision and care.",
    benefits: ["Wide range of flooring materials", "Professional installation team", "Free on-site measurement", "Competitive pricing", "Suitable for residential & commercial", "Warranty included"],
    relatedProjects: [
      { title: "SPC Vinyl Flooring for Condo", location: "Mont Kiara, KL", image: residentialImg },
      { title: "Laminate Flooring for Office", location: "Petaling Jaya", image: commercialImg },
    ],
    faqs: [
      { q: "What types of flooring do you offer?", a: "We offer SPC vinyl, laminate, engineered wood, and timber flooring in various styles and finishes." },
      { q: "Do you provide free measurement for flooring?", a: "Yes. Free site measurement is included for all flooring projects in KL and Selangor." },
      { q: "How long does flooring installation take?", a: "A typical condo unit (800-1200 sqft) takes 1-2 days for installation." },
    ],
  },
  "kitchen-cabinet": {
    title: "Custom Kitchen Cabinets in Kuala Lumpur",
    subtitle: "Made-to-Measure Kitchen Cabinets — Design, Build & Install",
    heroImage: kitchenImg,
    description: "Get custom kitchen cabinets designed and built to your exact kitchen layout. FLASH CAST manufactures high-quality kitchen cabinets using melamine, acrylic, solid wood, and other premium materials. Includes 3D design, factory manufacturing, and professional installation.",
    benefits: ["Custom-made to your kitchen size", "3D design visualization", "Multiple material options", "Soft-close hardware", "Factory-manufactured quality", "Professional installation"],
    relatedProjects: [
      { title: "Modern Kitchen in Bangsar Condo", location: "Bangsar, KL", image: kitchenImg },
      { title: "Open Kitchen Renovation", location: "Subang Jaya", image: residentialImg },
    ],
    faqs: [
      { q: "How long does a custom kitchen take?", a: "From measurement to installation, a custom kitchen typically takes 3-4 weeks." },
      { q: "What materials are available?", a: "We offer melamine, acrylic, solid wood, and laminate finishes with various countertop options including quartz and granite." },
      { q: "Can I see a 3D design first?", a: "Yes. We provide 3D kitchen design visualization before manufacturing begins." },
    ],
  },
  "office-renovation": {
    title: "Office Renovation in Kuala Lumpur",
    subtitle: "Professional Office Fit-Out & Renovation — Design to Completion",
    heroImage: commercialImg,
    description: "Transform your workspace with FLASH CAST's professional office renovation services. We handle everything from space planning and design to partitioning, ceiling, electrical, and furniture — delivering functional, modern workspaces that boost productivity.",
    benefits: ["Complete office fit-out services", "Space planning & design", "Glass & gypsum partitioning", "Workstation setup", "Meeting room & reception design", "Minimal disruption to operations"],
    relatedProjects: [
      { title: "Corporate Office in KL Sentral", location: "KL Sentral", image: commercialImg },
      { title: "Co-Working Space in PJ", location: "Petaling Jaya", image: residentialImg },
    ],
    faqs: [
      { q: "Can you renovate while we continue working?", a: "Yes. We can phase the renovation to minimize disruption to your daily operations." },
      { q: "Do you handle office permits?", a: "Yes. We manage all building management applications and permits required for office renovations." },
      { q: "What's included in office fit-out?", a: "Our office fit-out covers partitioning, ceiling, flooring, electrical, networking, painting, furniture, and reception design." },
    ],
  },
  "shop-renovation": {
    title: "Shop Renovation in Kuala Lumpur",
    subtitle: "Retail & F&B Shop Renovation — Shopfront, Interior & Signage",
    heroImage: exteriorImg,
    description: "FLASH CAST delivers complete shop renovation services including shopfront design, interior fit-out, signage installation, and display systems. From retail boutiques to F&B restaurants, we create commercial spaces that attract customers and drive business.",
    benefits: ["Shopfront & signage design", "Interior layout optimization", "Display & counter fabrication", "F&B kitchen setup", "Lighting design", "Fast turnaround"],
    relatedProjects: [
      { title: "Retail Shop in Bangsar", location: "Bangsar, KL", image: exteriorImg },
      { title: "Café Renovation in SS2", location: "Petaling Jaya", image: commercialImg },
    ],
    faqs: [
      { q: "How long does a shop renovation take?", a: "A typical shoplot renovation takes 4-8 weeks depending on scope and permit requirements." },
      { q: "Do you handle signage?", a: "Yes. We design, fabricate, and install shopfront signage including lightbox, 3D lettering, and digital signage." },
      { q: "Can you help with renovation permits for shop?", a: "Yes. We handle all management office and local council permit applications for shop renovations." },
    ],
  },
  "warehouse-shelving": {
    title: "Warehouse Shelving & Racking in Malaysia",
    subtitle: "Commercial Shelving, Heavy-Duty Racking & Industrial Storage Solutions",
    heroImage: warehouseImg,
    description: "FLASH CAST provides warehouse racking, commercial shelving, and industrial storage solutions for businesses across Kuala Lumpur and Selangor. We design, supply, and install shelving systems tailored to your storage needs and warehouse layout.",
    benefits: ["Heavy-duty warehouse racking", "Commercial shelving systems", "Custom layout design", "Professional installation", "Load capacity engineering", "Competitive pricing"],
    relatedProjects: [
      { title: "Warehouse Racking in Shah Alam", location: "Shah Alam, Selangor", image: warehouseImg },
      { title: "Storage System for Logistics Co.", location: "Puchong", image: warehouseImg },
    ],
    faqs: [
      { q: "What types of racking do you provide?", a: "We provide selective pallet racking, long-span shelving, medium-duty shelving, and boltless rack systems." },
      { q: "Do you do site surveys?", a: "Yes. We provide free site surveys to assess your warehouse layout and storage requirements." },
      { q: "Can you install in an operating warehouse?", a: "Yes. We can phase the installation to allow continued operations during setup." },
    ],
  },
};

const LandingPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const page = landingPages[slug || ""];

  if (!page) {
    return (
      <main className="pt-16 section-padding text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Page Not Found</h1>
        <Button asChild><Link to="/">Back to Home</Link></Button>
      </main>
    );
  }

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={page.heroImage} alt={page.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
        </div>
        <div className="relative z-10 container-narrow px-4 md:px-8 py-24">
          <div className="max-w-xl">
            <p className="text-accent font-medium text-sm tracking-widest uppercase mb-3">FLASH CAST SDN. BHD.</p>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              {page.title}
            </h1>
            <p className="text-steel-light text-lg mb-6">{page.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-bold tracking-wide shadow-xl shadow-accent/40 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md px-8 py-3 justify-center" asChild>
                <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-semibold bg-white text-neutral-800 border-0 hover:bg-white/90 shadow-md rounded-md px-8 py-3 justify-center" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="w-[18px] h-[18px] mr-2 text-[#25D366]" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Benefits */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="accent-line mb-4" />
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground leading-relaxed">{page.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {page.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 py-3 px-4 bg-muted rounded-lg">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                  <span className="font-medium text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">Related Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {page.relatedProjects.map((p, i) => (
              <Link key={i} to="/projects" className="group rounded-lg overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-semibold">{p.title}</h3>
                  <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {p.location}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <h2 className="font-display text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {page.faqs.map((f, i) => (
              <details key={i} className="bg-card border border-border rounded-lg group">
                <summary className="px-5 py-4 cursor-pointer font-medium text-sm md:text-base list-none flex items-center justify-between">
                  {f.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 pb-4 text-muted-foreground text-sm">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-muted">
        <div className="container-narrow max-w-2xl text-center">
          <Star className="w-6 h-6 text-gold mx-auto mb-4" />
          <p className="italic text-lg mb-4">
            "Professional team, quality work, and great communication. Highly recommend FLASH CAST for any renovation project."
          </p>
          <p className="text-muted-foreground text-sm">— Satisfied Client, Kuala Lumpur</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6 opacity-90">Contact us today for a free consultation and quotation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" variant="secondary" className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-bold tracking-wide rounded-md px-8 py-3 justify-center" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button size="lg" className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-semibold bg-white text-neutral-800 border-0 hover:bg-white/90 shadow-md rounded-md px-8 py-3 justify-center" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-[18px] h-[18px] mr-2 text-[#25D366]" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
