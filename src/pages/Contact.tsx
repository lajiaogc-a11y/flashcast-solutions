import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            Get in touch with FLASH CAST for your renovation project. We serve Kuala Lumpur, Selangor, and surrounding areas.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">94, Jalan Mega Mendung, Taman United, 58200 Kuala Lumpur, Malaysia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground text-sm">+60 12-345 6789</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">info@flashcast.com.my</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-accent mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground text-sm">Mon – Sat: 9:00 AM – 6:00 PM<br />Sun: By Appointment</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                </Button>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="+60 12-345 6789" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Tell us about your project..." />
                </div>
                <Button type="submit" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
