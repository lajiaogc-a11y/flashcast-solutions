import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";

interface LocationData {
  name: string;
  slug: string;
  description: string;
  intro: string;
  projects: { title: string; type: string; image: string }[];
  faqs: { q: string; a: string }[];
}

const locationsData: Record<string, LocationData> = {
  "kuala-lumpur": {
    name: "Kuala Lumpur",
    slug: "kuala-lumpur",
    description: "Professional renovation and interior design services in Kuala Lumpur. FLASH CAST SDN. BHD. delivers complete renovation solutions for residential, commercial, and industrial projects across KL.",
    intro: "As a Kuala Lumpur-based renovation company, FLASH CAST SDN. BHD. has completed over 200 projects across the city — from luxury condo renovations in Mont Kiara and Bangsar to commercial fit-outs in the city centre. Our local team understands KL building regulations, management office requirements, and DBKL permit processes.",
    projects: [
      { title: "Modern Condo Renovation in Mont Kiara", type: "Residential", image: residentialImg },
      { title: "Office Fit-Out in KL Sentral", type: "Commercial", image: commercialImg },
      { title: "Custom Kitchen in Bangsar", type: "Built-In", image: kitchenImg },
    ],
    faqs: [
      { q: "Do you provide renovation services throughout Kuala Lumpur?", a: "Yes. We cover all areas in Kuala Lumpur including Mont Kiara, Bangsar, Cheras, Kepong, Wangsa Maju, Sentul, Sri Hartamas, and the city centre." },
      { q: "Can you help with DBKL renovation permits?", a: "Yes. We assist with DBKL renovation permit applications, management office coordination, and all required documentation for renovation projects in KL." },
      { q: "How quickly can you start a project in KL?", a: "After site measurement and quotation approval, we can typically begin within 1-2 weeks depending on permit requirements and material availability." },
    ],
  },
  "selangor": {
    name: "Selangor",
    slug: "selangor",
    description: "Reliable renovation company serving Selangor — Shah Alam, Petaling Jaya, Subang Jaya, Puchong, and surrounding areas. Full-service interior design and construction.",
    intro: "FLASH CAST serves the entire Selangor region with professional renovation and interior design services. From landed homes in Shah Alam to shophouses in Klang, we bring the same quality workmanship and attention to detail to every project across the state.",
    projects: [
      { title: "Landed House Renovation in Shah Alam", type: "Residential", image: residentialImg },
      { title: "Shop Renovation in Klang", type: "Commercial", image: commercialImg },
      { title: "Warehouse Racking in Puchong", type: "Warehouse", image: kitchenImg },
    ],
    faqs: [
      { q: "Which areas in Selangor do you serve?", a: "We serve all major areas including Shah Alam, Petaling Jaya, Subang Jaya, Puchong, Klang, Ampang, Kajang, Rawang, and surrounding areas." },
      { q: "Is site measurement free in Selangor?", a: "Yes. We provide free site measurements for all enquiries within Selangor." },
      { q: "Do you handle renovation permits in Selangor?", a: "Yes. We handle all permit applications and coordination with management offices, local councils, and relevant authorities in Selangor." },
    ],
  },
  "petaling-jaya": {
    name: "Petaling Jaya",
    slug: "petaling-jaya",
    description: "Renovation and interior design services in Petaling Jaya. Custom built-in, office fit-outs, and residential renovation by FLASH CAST SDN. BHD.",
    intro: "Petaling Jaya is one of our most active service areas. We have completed numerous residential and commercial renovation projects across PJ — from SS2 and Damansara to Kelana Jaya and PJ New Town. Our team is familiar with PJ's diverse property types and management requirements.",
    projects: [
      { title: "Condo Renovation in Damansara", type: "Residential", image: residentialImg },
      { title: "Office Renovation in Kelana Jaya", type: "Commercial", image: commercialImg },
    ],
    faqs: [
      { q: "Do you do renovations in all PJ areas?", a: "Yes. We cover SS2, Damansara, Kelana Jaya, PJ New Town, Section 17, Taman SEA, and all surrounding areas in Petaling Jaya." },
      { q: "Can you renovate my office in PJ?", a: "Yes. We specialize in office fit-outs including partitioning, reception counters, workstation setup, and full interior renovation." },
    ],
  },
  "cheras": {
    name: "Cheras",
    slug: "cheras",
    description: "Affordable and professional renovation services in Cheras. Interior design, custom cabinets, and full renovation by FLASH CAST.",
    intro: "FLASH CAST serves the Cheras area with quality renovation services for condos, landed homes, and commercial properties. We understand the variety of property types in Cheras — from high-rise condos to older terrace houses requiring full renovation.",
    projects: [
      { title: "Terrace House Renovation in Cheras", type: "Residential", image: residentialImg },
      { title: "Custom Built-In Cabinets in Taman Connaught", type: "Built-In", image: kitchenImg },
    ],
    faqs: [
      { q: "Do you serve all areas in Cheras?", a: "Yes. We cover Taman Connaught, Taman Midah, Cheras Leisure Mall area, Taman Segar, Batu 9, and all Cheras neighborhoods." },
      { q: "Can you renovate old terrace houses?", a: "Yes. We have experience renovating older terrace houses including structural works, rewiring, replumbing, and full interior redesign." },
    ],
  },
  "mont-kiara": {
    name: "Mont Kiara",
    slug: "mont-kiara",
    description: "Luxury renovation and interior design in Mont Kiara. High-end condo renovation, custom built-in, and premium finishes by FLASH CAST.",
    intro: "Mont Kiara is home to some of Kuala Lumpur's most prestigious condominiums. FLASH CAST has completed numerous luxury renovation projects in Mont Kiara, delivering premium finishes, custom built-in furniture, and sophisticated interior designs that match the lifestyle expectations of Mont Kiara residents.",
    projects: [
      { title: "Luxury Condo Renovation in i-Zen", type: "Residential", image: residentialImg },
      { title: "Premium Kitchen in Solaris Dutamas", type: "Built-In", image: kitchenImg },
    ],
    faqs: [
      { q: "Do you have experience with Mont Kiara condos?", a: "Yes. We have completed projects in many Mont Kiara developments and are familiar with the management office requirements and building regulations in the area." },
      { q: "Can you do high-end finishes?", a: "Absolutely. We work with premium materials including marble, solid wood, high-gloss finishes, and imported fixtures to deliver luxury results." },
    ],
  },
  "bangsar": {
    name: "Bangsar",
    slug: "bangsar",
    description: "Renovation services in Bangsar and Bangsar South. Interior design, shop renovation, and residential renovation by FLASH CAST SDN. BHD.",
    intro: "Bangsar's mix of residential homes, condominiums, and commercial shophouses requires a renovation company that understands the area's unique character. FLASH CAST delivers tailored renovation solutions for both the established Bangsar neighborhood and the modern Bangsar South developments.",
    projects: [
      { title: "Semi-D Renovation in Bangsar", type: "Residential", image: residentialImg },
      { title: "Café Fit-Out in Bangsar South", type: "Commercial", image: commercialImg },
    ],
    faqs: [
      { q: "Do you renovate both old and new properties in Bangsar?", a: "Yes. We handle renovations for older bungalows and semi-detached houses as well as new high-rise condos in Bangsar and Bangsar South." },
      { q: "Can you do F&B renovation in Bangsar?", a: "Yes. We have experience with café, restaurant, and retail fit-outs in the Bangsar area." },
    ],
  },
  "subang-jaya": {
    name: "Subang Jaya",
    slug: "subang-jaya",
    description: "Professional renovation company in Subang Jaya. Residential and commercial renovation, custom built-in furniture, and full interior design services.",
    intro: "Subang Jaya is a vibrant township with diverse renovation needs. From family homes in USJ to commercial spaces along Persiaran Kewajipan, FLASH CAST provides complete renovation services backed by quality workmanship and reliable project management.",
    projects: [
      { title: "Double-Storey House Renovation in USJ", type: "Residential", image: residentialImg },
      { title: "Retail Shop Fit-Out in Subang", type: "Commercial", image: commercialImg },
    ],
    faqs: [
      { q: "Do you cover USJ and SS areas?", a: "Yes. We serve all areas in Subang Jaya including USJ, SS15, SS16, SS17, SS18, SS19, and Sunway." },
      { q: "Can you handle landed house extensions?", a: "Yes. We handle house extensions, structural modifications, and full renovations for landed properties in Subang Jaya." },
    ],
  },
};

const servicesList = [
  "Interior Renovation",
  "Commercial Renovation",
  "Custom Built-In Furniture",
  "Kitchen Cabinets",
  "Wardrobes & Storage",
  "Exterior & Shopfront Works",
  "Warehouse & Shelving",
  "Design & Permit Coordination",
];

const LocationPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locationsData[slug || ""];

  if (!location) {
    return (
      <main className="pt-16 section-padding text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Location Not Found</h1>
        <Button asChild><Link to="/">Back to Home</Link></Button>
      </main>
    );
  }

  return (
    <main className="pt-16">
      {/* JSON-LD for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "FLASH CAST SDN. BHD.",
            description: location.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: "94, Jalan Mega Mendung, Taman United",
              addressLocality: "Kuala Lumpur",
              postalCode: "58200",
              addressCountry: "MY",
            },
            areaServed: location.name,
            url: `https://flashcast.com.my/locations/${location.slug}`,
          }),
        }}
      />

      {/* Hero */}
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link to="/" className="hover:text-accent">Home</Link>
            <span>/</span>
            <span>Locations</span>
            <span>/</span>
            <span className="text-primary-foreground">{location.name}</span>
          </div>
          <div className="accent-line mb-4" />
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Renovation Services in {location.name}
          </h1>
          <p className="text-steel-light max-w-2xl text-lg">{location.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button size="lg" asChild>
              <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-steel text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Your Trusted Renovation Partner in {location.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{location.intro}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Based in Kuala Lumpur · Serving {location.name} & surrounding areas</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services Available in {location.name}</h3>
              <div className="grid grid-cols-1 gap-2">
                {servicesList.map((s) => (
                  <div key={s} className="flex items-center gap-2 py-2 px-3 bg-muted rounded-md text-sm">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
            Projects in {location.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {location.projects.map((p, i) => (
              <Link key={i} to="/projects" className="group rounded-lg overflow-hidden bg-card border border-border hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className="text-accent text-xs font-medium uppercase tracking-wider">{p.type}</span>
                  <h3 className="font-display text-base font-semibold mt-1">{p.title}</h3>
                  <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" /> {location.name}
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
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
            Renovation FAQ — {location.name}
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {location.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-lg border border-border px-4">
                <AccordionTrigger className="text-left font-medium text-sm md:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold mb-4">
            Start Your {location.name} Renovation Project
          </h2>
          <p className="mb-6 opacity-90">Free consultation and site measurement for projects in {location.name}.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LocationPage;
