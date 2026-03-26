import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, ArrowRight } from "lucide-react";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import heroImg from "@/assets/hero-renovation-hd.jpg";

const projectTypes = [
  "Residential Renovation",
  "Commercial / Office Fit-Out",
  "Custom Built-In Furniture",
  "Kitchen Cabinet",
  "Shop Renovation",
  "Exterior / Shopfront Works",
  "Warehouse & Shelving",
  "Other",
];

const Quote = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", projectType: "", location: "", propertySize: "", details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Quote Request Submitted!", description: "We'll contact you within 24 hours to arrange a site visit." });
    setForm({ name: "", phone: "", email: "", projectType: "", location: "", propertySize: "", details: "" });
  };

  return (
    <main className="pt-16">
      <PageMeta
        title="Get a Free Renovation Quote | Kuala Lumpur & Selangor | FLASH CAST"
        description="Request a free renovation quotation from FLASH CAST SDN. BHD. Free site measurement included for Kuala Lumpur and Selangor. Interior renovation, custom built-in, and commercial works."
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
            Tell us about your renovation project and we'll provide a detailed quotation. Free site measurement included for KL & Selangor.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-2xl">
          <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name *</label>
                  <Input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone *</label>
                  <Input type="tel" required placeholder="+60 12-345 6789" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
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
                <label className="block text-sm font-medium mb-1">Location *</label>
                <Input required placeholder="e.g. Mont Kiara, KL" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Property Size (approx.)</label>
                <Input placeholder="e.g. 1,200 sqft" value={form.propertySize} onChange={(e) => setForm({ ...form, propertySize: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Project Details</label>
                <Textarea rows={5} placeholder="Describe your project — what do you need? Any specific requirements?" value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} />
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

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-3">Prefer to chat directly?</p>
            <Button variant="outline" size="lg" className="btn-press h-12 px-8" asChild>
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-4 h-4" /> WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Quote;
