import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, ArrowRight, CheckCircle, Home, Building2 } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import residentialImg from "@/assets/residential-renovation.jpg";
import commercialImg from "@/assets/commercial-renovation.jpg";
import kitchenImg from "@/assets/kitchen-cabinet.jpg";

interface LocationData {
  name: string;
  slug: string;
  metaTitle: string;
  description: string;
  intro: string;
  propertyTypes: string[];
  commonNeeds: string[];
  constructionNotes: string;
  projects: { title: string; type: string; image: string }[];
  faqs: { q: string; a: string }[];
}

const locationsData: Record<string, LocationData> = {
  "kuala-lumpur": {
    name: "Kuala Lumpur",
    slug: "kuala-lumpur",
    metaTitle: "Renovation Services in Kuala Lumpur | Interior Design KL | FLASH CAST",
    description: "Professional renovation and interior design services in Kuala Lumpur. FLASH CAST SDN. BHD. delivers complete renovation solutions for residential, commercial, and industrial projects across KL.",
    intro: "As a Kuala Lumpur-based renovation company, FLASH CAST SDN. BHD. has completed over 200 projects across the city — from luxury condo renovations in Mont Kiara and Bangsar to commercial fit-outs in the city centre. Our local team understands KL building regulations, management office requirements, and DBKL permit processes.",
    propertyTypes: ["High-rise condominiums (Mont Kiara, KLCC, Bangsar)", "Serviced apartments", "Landed houses (semi-D, bungalows, terraces)", "Shop lots and commercial units", "Office spaces in commercial towers", "F&B outlets and retail stores"],
    commonNeeds: ["Full condo renovation with management office permit", "Kitchen cabinet replacement and built-in furniture", "Master bedroom and wardrobe upgrade", "Bathroom renovation with waterproofing", "Open-concept living room redesign", "Office partition and fit-out"],
    constructionNotes: "Most KL condominiums require renovation permits from the management office. Typical renovation hours are 9 AM – 5 PM, Monday to Saturday. DBKL permits are required for structural changes, external modifications, and signage. FLASH CAST handles all permit applications and coordination on your behalf.",
    projects: [
      { title: "Modern Condo Renovation in Mont Kiara", type: "Residential", image: residentialImg },
      { title: "Office Fit-Out in KL Sentral", type: "Commercial", image: commercialImg },
      { title: "Custom Kitchen in Bangsar", type: "Built-In", image: kitchenImg },
    ],
    faqs: [
      { q: "Do you provide renovation services throughout Kuala Lumpur?", a: "Yes. We cover all areas in Kuala Lumpur including Mont Kiara, Bangsar, Cheras, Kepong, Wangsa Maju, Sentul, Sri Hartamas, Damansara Heights, Taman Tun Dr Ismail, and the city centre." },
      { q: "Can you help with DBKL renovation permits and condo management approvals?", a: "Yes. We handle all documentation — DBKL renovation permit applications, management office coordination, deposit processing, and site inspection scheduling. This is included in our project management service." },
      { q: "How quickly can you start a project in KL?", a: "After site measurement and quotation approval, we can typically begin within 1-2 weeks depending on permit requirements and material availability. Urgent projects may start sooner." },
      { q: "What is the average cost of a condo renovation in Kuala Lumpur?", a: "A typical KL condo renovation ranges from RM 30,000 – RM 150,000+ depending on scope, size, and materials. We provide a detailed itemized quotation after a free site measurement." },
    ],
  },
  "selangor": {
    name: "Selangor",
    slug: "selangor",
    metaTitle: "Renovation Company Selangor | Shah Alam, PJ, Subang | FLASH CAST",
    description: "Reliable renovation company serving Selangor — Shah Alam, Petaling Jaya, Subang Jaya, Puchong, Klang, and surrounding areas. Full-service interior design and construction.",
    intro: "FLASH CAST serves the entire Selangor region with professional renovation and interior design services. From landed homes in Shah Alam to shophouses in Klang, we bring the same quality workmanship and attention to detail to every project. Selangor's diverse property types — from modern condos to older terrace houses and commercial shop lots — require versatile expertise, and our team is equipped to handle them all.",
    propertyTypes: ["Double-storey terrace houses", "Semi-detached and bungalows", "Condominiums and apartments", "Shop lots (single and double storey)", "Industrial units and warehouses", "Office units in commercial complexes"],
    commonNeeds: ["Full landed house renovation and extension", "Kitchen and bathroom overhaul for older homes", "Shop lot renovation for new business setup", "Warehouse racking and storage solutions", "Custom built-in furniture for family homes", "Office renovation and partitioning"],
    constructionNotes: "Renovation requirements in Selangor vary by local council — MBSA (Shah Alam), MBPJ (Petaling Jaya), MPSJ (Subang Jaya), etc. Landed property extensions may require council approval. Strata properties require management office permits. FLASH CAST handles all permit coordination across Selangor.",
    projects: [
      { title: "Landed House Renovation in Shah Alam", type: "Residential", image: residentialImg },
      { title: "Shop Renovation in Klang", type: "Commercial", image: commercialImg },
      { title: "Custom Kitchen in Subang Jaya", type: "Built-In", image: kitchenImg },
    ],
    faqs: [
      { q: "Which areas in Selangor do you serve?", a: "We serve all major areas including Shah Alam, Petaling Jaya, Subang Jaya, Puchong, Klang, Ampang, Kajang, Rawang, Setia Alam, Kota Kemuning, and surrounding areas." },
      { q: "Is site measurement free in Selangor?", a: "Yes. We provide free site measurements for all enquiries within Selangor — no obligation, no hidden charges." },
      { q: "Can you handle landed house extensions in Selangor?", a: "Yes. We handle house extensions including structural works, foundations, roofing, and all relevant council permit applications." },
      { q: "Do you handle renovation permits across different Selangor councils?", a: "Yes. We coordinate with MBSA, MBPJ, MPSJ, MPK, and other local councils in Selangor for permit applications and compliance." },
    ],
  },
  "petaling-jaya": {
    name: "Petaling Jaya",
    slug: "petaling-jaya",
    metaTitle: "Renovation Services Petaling Jaya | Interior Design PJ | FLASH CAST",
    description: "Renovation and interior design services in Petaling Jaya. Custom built-in, office fit-outs, and residential renovation by FLASH CAST SDN. BHD.",
    intro: "Petaling Jaya is one of our most active service areas with a diverse mix of residential and commercial properties. From the established neighborhoods of SS2 and Section 17 to modern developments in Damansara and Kelana Jaya, PJ homeowners and businesses trust FLASH CAST for quality renovation work. Our familiarity with MBPJ requirements and PJ's various property types ensures smooth project delivery.",
    propertyTypes: ["Terrace houses (SS2, Section 17, Taman SEA)", "Condominiums (Kelana Jaya, Damansara)", "Semi-detached and bungalows (Damansara Heights area)", "Shop lots (SS2, PJ New Town)", "Office units (Kelana Jaya, PJ Trade Centre)"],
    commonNeeds: ["Terrace house full renovation", "Condo interior redesign", "Office partition and modern fit-out", "Kitchen cabinet replacement", "Bathroom waterproofing and upgrade", "Feature wall and built-in furniture"],
    constructionNotes: "PJ properties fall under MBPJ (Majlis Bandaraya Petaling Jaya). Renovation permits are required for structural work and extensions. Condo management offices in PJ typically allow renovations Monday to Saturday, 9 AM – 5 PM. FLASH CAST coordinates all MBPJ permits and management office approvals.",
    projects: [
      { title: "Condo Renovation in Damansara", type: "Residential", image: residentialImg },
      { title: "Office Renovation in Kelana Jaya", type: "Commercial", image: commercialImg },
    ],
    faqs: [
      { q: "Do you do renovations in all PJ areas?", a: "Yes. We cover SS2, Damansara, Kelana Jaya, PJ New Town, Section 17, Taman SEA, SS15, Tropicana, and all surrounding areas in Petaling Jaya." },
      { q: "Can you renovate my office in PJ?", a: "Yes. We specialize in office fit-outs including glass partitioning, reception counters, workstation setup, and full interior renovation. Many of our commercial projects are in PJ." },
      { q: "How much does a terrace house renovation cost in PJ?", a: "A typical PJ terrace house renovation ranges from RM 50,000 – RM 200,000+ depending on scope. We provide free site measurement and detailed quotation." },
    ],
  },
  "cheras": {
    name: "Cheras",
    slug: "cheras",
    metaTitle: "Renovation Services Cheras | Affordable Quality | FLASH CAST",
    description: "Affordable and professional renovation services in Cheras. Interior design, custom cabinets, and full renovation by FLASH CAST.",
    intro: "FLASH CAST serves the Cheras area with quality renovation services for condos, landed homes, and commercial properties. Cheras has a unique mix of older terrace houses needing modernization and newer condominiums wanting premium upgrades. Our team is experienced with both — from full structural renovation of 1970s-era terraces to modern condo fit-outs in developments like EkoCheras and Southgate.",
    propertyTypes: ["Older terrace houses (Taman Connaught, Taman Midah)", "Modern condominiums (EkoCheras, Southgate)", "Apartments and flats", "Shop lots along Jalan Cheras", "Commercial units"],
    commonNeeds: ["Older terrace house modernization with rewiring and replumbing", "Kitchen and bathroom renovation for aging properties", "Built-in wardrobes and storage maximization", "Condo interior design for new units", "Shop lot renovation for F&B and retail"],
    constructionNotes: "Older properties in Cheras may require additional attention to electrical wiring, plumbing, and waterproofing. Some terrace houses have non-standard layouts that need creative design solutions. FLASH CAST has extensive experience handling the specific challenges of Cheras properties.",
    projects: [
      { title: "Terrace House Renovation in Cheras", type: "Residential", image: residentialImg },
      { title: "Custom Built-In Cabinets in Taman Connaught", type: "Built-In", image: kitchenImg },
    ],
    faqs: [
      { q: "Do you serve all areas in Cheras?", a: "Yes. We cover Taman Connaught, Taman Midah, Cheras Leisure Mall area, Taman Segar, Batu 9, Taman Yulek, Bandar Tun Razak, and all Cheras neighborhoods." },
      { q: "Can you renovate old terrace houses in Cheras?", a: "Yes. We have extensive experience renovating older terrace houses including structural works, rewiring, replumbing, waterproofing, and full interior redesign. We understand the specific challenges of Cheras-era houses." },
      { q: "Is renovation in Cheras cheaper than in KL city?", a: "Labour and material costs are generally consistent. However, older properties may require additional preparation work (rewiring, waterproofing). We always provide transparent, itemized quotations." },
    ],
  },
  "mont-kiara": {
    name: "Mont Kiara",
    slug: "mont-kiara",
    metaTitle: "Luxury Renovation Mont Kiara | Premium Interior Design | FLASH CAST",
    description: "Luxury renovation and interior design in Mont Kiara. High-end condo renovation, custom built-in, and premium finishes by FLASH CAST.",
    intro: "Mont Kiara is home to some of Kuala Lumpur's most prestigious condominiums — i-Zen, 28 Mont Kiara, Arcoris, Residensi 22, and Solaris Dutamas. FLASH CAST has completed numerous luxury renovation projects here, delivering premium finishes, custom built-in furniture, and sophisticated interior designs. Our team is familiar with Mont Kiara management requirements, typical unit layouts, and the lifestyle expectations of residents in this upscale neighborhood.",
    propertyTypes: ["Premium condominiums (i-Zen, 28 Mont Kiara, Arcoris)", "Serviced apartments (Solaris Dutamas)", "Penthouse units", "Landed properties in surrounding areas"],
    commonNeeds: ["Premium condo full renovation with luxury finishes", "Walk-in wardrobe with LED lighting systems", "Kitchen upgrade with quartz countertops and premium cabinets", "Feature walls with imported materials (marble, artistic coating)", "Smart home integration", "Master bedroom suite renovation"],
    constructionNotes: "Mont Kiara condominiums have strict renovation guidelines — designated renovation hours, noise restrictions, and material delivery scheduling. Some developments require a renovation deposit of RM 5,000 – RM 10,000. FLASH CAST is experienced with all Mont Kiara management offices and handles the entire permit process.",
    projects: [
      { title: "Luxury Condo Renovation in i-Zen", type: "Residential", image: residentialImg },
      { title: "Premium Kitchen in Solaris Dutamas", type: "Built-In", image: kitchenImg },
    ],
    faqs: [
      { q: "Do you have experience with Mont Kiara condos?", a: "Yes. We have completed projects in multiple Mont Kiara developments including i-Zen, 28 Mont Kiara, Arcoris, and Solaris Dutamas. We're familiar with each building's management requirements." },
      { q: "Can you do high-end finishes like marble and artistic coating?", a: "Absolutely. We work with premium materials including marble, natural stone, solid wood, high-gloss acrylic, imported fixtures, and German Remmers artistic wall coatings to deliver luxury results." },
      { q: "What is the cost range for a Mont Kiara condo renovation?", a: "Premium renovations in Mont Kiara typically range from RM 80,000 – RM 300,000+ depending on size and material selections. We provide a detailed quotation after a free site measurement." },
    ],
  },
  "bangsar": {
    name: "Bangsar",
    slug: "bangsar",
    metaTitle: "Renovation Services Bangsar | Interior Design Bangsar South | FLASH CAST",
    description: "Renovation services in Bangsar and Bangsar South. Interior design, shop renovation, F&B fit-out, and residential renovation by FLASH CAST SDN. BHD.",
    intro: "Bangsar's unique mix of heritage bungalows, modern condominiums, and vibrant commercial shophouses requires a renovation company that understands the area's character. FLASH CAST delivers tailored renovation solutions for both the established Bangsar neighborhood and the contemporary Bangsar South developments. From renovating a 1960s bungalow to fitting out a café on Jalan Telawi, our team brings local expertise and quality craftsmanship.",
    propertyTypes: ["Heritage bungalows and semi-detached houses", "Modern condominiums (Bangsar South, The Vertical)", "Shophouses along Jalan Telawi", "F&B outlets and cafés", "Office units in Bangsar South towers"],
    commonNeeds: ["Heritage home renovation preserving character", "Modern condo interior redesign", "Café and restaurant fit-out", "Shop renovation on Jalan Telawi", "Boutique retail interior", "Custom built-in furniture for character homes"],
    constructionNotes: "Bangsar heritage properties may have specific conservation considerations. Bangsar South developments have modern management office requirements. F&B renovations require compliance with fire safety, ventilation, and grease trap regulations. FLASH CAST handles all compliance aspects.",
    projects: [
      { title: "Semi-D Renovation in Bangsar", type: "Residential", image: residentialImg },
      { title: "Café Fit-Out in Bangsar South", type: "Commercial", image: commercialImg },
    ],
    faqs: [
      { q: "Do you renovate both old and new properties in Bangsar?", a: "Yes. We handle renovations for older bungalows and semi-detached houses as well as new high-rise condos in Bangsar and Bangsar South. Each property type requires different expertise, and our team has experience with both." },
      { q: "Can you do F&B renovation in Bangsar?", a: "Yes. We have experience with café, restaurant, and retail fit-outs in the Bangsar area including kitchen setup, dining area design, bar counters, and compliance with health and safety regulations." },
      { q: "What about parking and material delivery in Bangsar?", a: "We coordinate delivery schedules to minimize disruption, especially in busy areas like Jalan Telawi. For condos, we follow building management's designated delivery slots." },
    ],
  },
  "subang-jaya": {
    name: "Subang Jaya",
    slug: "subang-jaya",
    metaTitle: "Renovation Company Subang Jaya | USJ, SS Areas | FLASH CAST",
    description: "Professional renovation company in Subang Jaya. Residential and commercial renovation, custom built-in furniture, and full interior design services.",
    intro: "Subang Jaya is a vibrant township with diverse renovation needs. From family homes in USJ to commercial spaces along Persiaran Kewajipan, FLASH CAST provides complete renovation services backed by quality workmanship. The area's established neighborhoods (SS15, SS16, SS17) have many well-loved family homes ready for modernization, while newer developments offer opportunities for premium interior fit-outs.",
    propertyTypes: ["Double-storey terrace houses (USJ, SS areas)", "Semi-detached and bungalows", "Condominiums (Sunway area)", "Shop lots and commercial units", "Office spaces"],
    commonNeeds: ["Family home renovation and modernization", "Kitchen and bathroom upgrade for older terraces", "Double-storey house extension", "Shop lot renovation for new businesses", "Built-in furniture for growing families", "Home office setup"],
    constructionNotes: "Subang Jaya falls under MPSJ (Majlis Perbandaran Subang Jaya). House extensions require MPSJ approval and must comply with setback and coverage requirements. FLASH CAST handles all MPSJ permit applications and ensures compliance with local building regulations.",
    projects: [
      { title: "Double-Storey House Renovation in USJ", type: "Residential", image: residentialImg },
      { title: "Retail Shop Fit-Out in Subang", type: "Commercial", image: commercialImg },
    ],
    faqs: [
      { q: "Do you cover USJ and SS areas in Subang Jaya?", a: "Yes. We serve all areas in Subang Jaya including USJ 1-27, SS15, SS16, SS17, SS18, SS19, Sunway, Putra Heights, and surrounding neighborhoods." },
      { q: "Can you handle landed house extensions in Subang?", a: "Yes. We handle house extensions, structural modifications, roofing, and full renovations for landed properties in Subang Jaya. We also manage MPSJ permit applications." },
      { q: "How long does a typical terrace house renovation take in Subang?", a: "A full renovation for a standard double-storey terrace in Subang Jaya typically takes 8-12 weeks. Partial renovations (kitchen, bathroom) take 3-6 weeks." },
    ],
  },
};

const servicesList = [
  { name: "Interior Renovation", link: "/services/renovation" },
  { name: "Custom Built-In Furniture", link: "/services/builtin" },
  { name: "Commercial Renovation", link: "/services/commercial" },
  { name: "Artistic Wall Coating", link: "/services/artistic-coating" },
  { name: "Kitchen Cabinets", link: "/services/builtin" },
  { name: "Exterior & Shopfront Works", link: "/services/exterior" },
  { name: "Warehouse & Shelving", link: "/services/warehouse" },
  { name: "Design & Permit Coordination", link: "/services/design" },
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
      <PageMeta
        title={location.metaTitle}
        description={location.description}
        keywords={`renovation ${location.name}, interior design ${location.name}, custom built-in ${location.name}, commercial renovation ${location.name}`}
        canonicalPath={`/locations/${location.slug}`}
      />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "Locations", url: "/" }, { name: location.name, url: `/locations/${location.slug}` }]} />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "FLASH CAST SDN. BHD.",
            description: location.description,
            address: { "@type": "PostalAddress", streetAddress: "94, Jalan Mega Mendung, Taman United", addressLocality: "Kuala Lumpur", postalCode: "58200", addressCountry: "MY" },
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
          <p className="text-steel-light max-w-2xl text-lg mb-2">{location.description}</p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button size="lg" asChild>
              <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-steel text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-[18px] h-[18px] mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro + Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Reveal direction="left">
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
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div>
                <h3 className="font-semibold mb-4">Services Available in {location.name}</h3>
                <div className="grid grid-cols-1 gap-2">
                  {servicesList.map((s) => (
                    <Link key={s.name} to={s.link} className="flex items-center gap-2 py-2 px-3 bg-muted rounded-md text-sm hover:bg-accent/10 transition-colors">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      <span>{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Property Types & Common Needs */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Home className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-xl md:text-2xl font-bold">Property Types in {location.name}</h2>
                </div>
                <ul className="space-y-2">
                  {location.propertyTypes.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-accent" />
                  <h2 className="font-display text-xl md:text-2xl font-bold">Common Renovation Needs</h2>
                </div>
                <ul className="space-y-2">
                  {location.commonNeeds.map((cn) => (
                    <li key={cn} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      {cn}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Construction Notes */}
          <Reveal delay={200}>
            <div className="mt-8 p-5 bg-background rounded-lg border border-border">
              <h3 className="font-semibold text-sm mb-2">Permit & Construction Notes — {location.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{location.constructionNotes}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local Projects */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8">
              Projects in {location.name}
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {location.projects.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <Link to="/projects" className="group rounded-lg overflow-hidden bg-card border border-border hover-lift">
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
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="btn-press" asChild>
              <Link to="/projects">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-narrow max-w-3xl">
          <Reveal>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
              Renovation FAQ — {location.name}
            </h2>
          </Reveal>
          <Accordion type="single" collapsible className="space-y-2">
            {location.faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-4">
                <AccordionTrigger className="text-left font-medium text-sm md:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">{f.a}</AccordionContent>
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
          <p className="mb-6 opacity-90">Free consultation and site measurement for projects in {location.name} and surrounding areas.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" variant="secondary" className="btn-press font-semibold h-12 px-8" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-neutral-800 hover:bg-white/90 border-0 btn-press h-12 px-8 font-semibold shadow-md" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="w-[18px] h-[18px] mr-2" /> WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container-narrow text-center">
          <p className="text-muted-foreground text-sm">
            <Link to="/services" className="text-accent hover:underline">Services</Link>{" · "}
            <Link to="/materials" className="text-accent hover:underline">Materials</Link>{" · "}
            <Link to="/projects" className="text-accent hover:underline">Projects</Link>{" · "}
            <Link to="/blog" className="text-accent hover:underline">Blog</Link>{" · "}
            <Link to="/faq" className="text-accent hover:underline">FAQ</Link>{" · "}
            <Link to="/contact" className="text-accent hover:underline">Contact</Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LocationPage;
