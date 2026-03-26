import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="pt-16">
      <PageMeta
        title="Contact FLASH CAST | Renovation Company Kuala Lumpur"
        description="Get in touch with FLASH CAST SDN. BHD. for your renovation project in Kuala Lumpur and Selangor. Visit us at Taman United, KL or contact via WhatsApp, phone, or email."
        keywords="contact renovation company KL, FLASH CAST address, renovation enquiry Kuala Lumpur"
        canonicalPath="/contact"
      />
      <JsonLdBreadcrumb items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4 animate-fade-in" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up" style={{ opacity: 0, animationDelay: "0.1s" }}>Contact Us</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            Get in touch with FLASH CAST for your renovation project. We serve Kuala Lumpur, Selangor, and surrounding areas.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal direction="left">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: "Address", text: "94, Jalan Mega Mendung, Taman United, 58200 Kuala Lumpur, Malaysia" },
                    { icon: Phone, title: "Phone / WhatsApp", text: "+60 12-345 6789" },
                    { icon: Mail, title: "Email", text: "info@flashcast.com.my" },
                    { icon: Clock, title: "Business Hours", text: "Mon – Sat: 9:00 AM – 6:00 PM\nSun: By Appointment" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 group">
                      <item.icon className="w-5 h-5 text-accent mt-1 shrink-0 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" className="btn-press" asChild>
                    <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Name</label>
                    <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Phone</label>
                    <Input type="tel" placeholder="+60 12-345 6789" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Email</label>
                    <Input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Message</label>
                    <Textarea rows={4} placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <Button type="submit" size="lg" className="w-full btn-press">Send Message</Button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
