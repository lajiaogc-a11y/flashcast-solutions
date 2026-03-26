import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Phone, Clock, MapPin } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import heroImg from "@/assets/hero-quote.jpg";

const projectTypes = [
  "Residential Renovation",
  "Commercial / Office Fit-Out",
  "Custom Built-In Furniture",
  "Kitchen Cabinet",
  "Shop Renovation",
  "Artistic Wall Coating (Remmers)",
  "Exterior / Shopfront Works",
  "Warehouse & Shelving",
  "Other",
];

const budgetRanges = [
  "Below RM 30,000",
  "RM 30,000 – RM 60,000",
  "RM 60,000 – RM 100,000",
  "RM 100,000 – RM 200,000",
  "Above RM 200,000",
  "Not sure yet",
];

const trustPoints = [
  "Free site measurement & consultation",
  "Detailed itemized quotation — no hidden costs",
  "3D design visualization before construction",
  "SSM-registered company with workmanship warranty",
];

const Quote = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", projectType: "", location: "", propertySize: "", budget: "", details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Quote Request Submitted!", description: "We'll contact you within 24 hours to arrange a site visit." });
    setForm({ name: "", phone: "", email: "", projectType: "", location: "", propertySize: "", budget: "", details: "" });
  };

  return (
    <main className="pt-16">
      <PageMeta
        title="Get a Free Renovation Quote | Kuala Lumpur & Selangor | FLASH CAST"
        description="Request a free renovation quotation from FLASH CAST SDN. BHD. Free site measurement included for Kuala Lumpur and Selangor. Interior renovation, custom built-in, commercial works, and artistic wall coating."
        keywords="free renovation quote KL, renovation quotation Malaysia, site measurement Kuala Lumpur"
        canonicalPath="/quote"
      />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "Get a Quote", url: "/quote" }]} />

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Get a free renovation quote from FLASH CAST" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container-narrow px-5 md:px-8 py-20 md:py-28">
          <p className="font-body font-semibold text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--gold))" }}>Free Consultation</p>
          <h1
            className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-lg"
            style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Get a Free Quote
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            Tell us about your renovation project and we'll provide a detailed, itemized quotation. Free site measurement included for KL & Selangor.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
                <h2 className="font-display text-xl font-bold mb-6">Tell Us About Your Project</h2>
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name *</label>
                      <Input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone / WhatsApp *</label>
                      <Input type="tel" required placeholder="+60 12-345 6789" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <Input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Project Type *</label>
                      <select
                        required
                        value={form.projectType}
                        onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Location *</label>
                      <Input required placeholder="e.g. Mont Kiara, KL" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Property Size (approx.)</label>
                      <Input placeholder="e.g. 1,200 sqft" value={form.propertySize} onChange={(e) => setForm({ ...form, propertySize: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Project Details</label>
                    <Textarea rows={5} placeholder="Describe your project — what rooms need renovation? Any specific materials or style preferences? Timeline requirements?" value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Upload Photos (optional)</label>
                    <div className="border-2 border-dashed border-border rounded-md p-8 text-center text-muted-foreground text-sm cursor-pointer hover:border-accent/50 transition-colors">
                      <p>Drag & drop site photos here, or click to browse</p>
                      <p className="text-xs mt-1">Supports JPG, PNG up to 10MB each</p>
                    </div>
                  </div>
                  <Button type="submit" size="lg" className="w-full btn-press font-semibold h-12">
                    Submit Quote Request <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar — trust signals */}
            <div className="space-y-6">
              <Reveal>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-display font-semibold text-base mb-4">What You'll Get</h3>
                  <ul className="space-y-3">
                    {trustPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="font-display font-semibold text-base mb-4">Prefer to Chat?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Get an instant response via WhatsApp. Our team typically replies within 30 minutes during business hours.
                  </p>
                  <Button className="w-full btn-press font-semibold h-11" asChild>
                    <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                      <WhatsAppIcon className="w-[18px] h-[18px] mr-2" /> WhatsApp Us Now
                    </a>
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-card p-6 rounded-lg border border-border space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">+60 12-345 6789</p>
                      <p className="text-xs text-muted-foreground">Phone / WhatsApp</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Mon – Sat: 9 AM – 6 PM</p>
                      <p className="text-xs text-muted-foreground">Sun: By Appointment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Taman United, KL</p>
                      <p className="text-xs text-muted-foreground">94, Jalan Mega Mendung, 58200</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="text-center text-xs text-muted-foreground space-y-1">
                  <p>
                    <Link to="/services" className="text-accent hover:underline">Our Services</Link>{" · "}
                    <Link to="/projects" className="text-accent hover:underline">Projects</Link>{" · "}
                    <Link to="/faq" className="text-accent hover:underline">FAQ</Link>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quote;
