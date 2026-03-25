import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Quote = () => {
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
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+60 12-345 6789" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project Type *</label>
              <select required className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                <option value="">Select project type</option>
                <option>Residential Renovation</option>
                <option>Commercial / Office Fit-Out</option>
                <option>Custom Built-In Furniture</option>
                <option>Kitchen Cabinet</option>
                <option>Shop Renovation</option>
                <option>Exterior / Shopfront Works</option>
                <option>Warehouse & Shelving</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location *</label>
              <input type="text" required className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="e.g. Mont Kiara, KL" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Property Size (approx.)</label>
              <input type="text" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="e.g. 1,200 sqft" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Project Details</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Describe your project — what do you need? Any specific requirements?" />
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
