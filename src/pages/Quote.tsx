import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

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
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Get a Free Quote</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Tell us about your renovation project and we'll provide a detailed quotation. Free site measurement included for KL & Selangor.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-2xl">
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
            <Button type="submit" size="lg" className="w-full">Submit Quote Request</Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm mb-3">Prefer to chat directly?</p>
            <Button variant="outline" size="lg" asChild>
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
