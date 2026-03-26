import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageMeta from "@/components/PageMeta";
import { JsonLdBreadcrumb } from "@/components/JsonLd";
import heroImg from "@/assets/hero-contact.jpg";

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

      {/* Hero Banner */}
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Contact FLASH CAST renovation company" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container-narrow px-5 md:px-8 py-20 md:py-28">
          <p className="font-body font-semibold text-[11px] tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(var(--gold))" }}>Get In Touch</p>
          <h1
            className="font-display text-3xl md:text-5xl font-bold leading-tight mb-4 max-w-lg"
            style={{ color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}
          >
            Contact Us
          </h1>
          <p className="max-w-xl text-base md:text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            Get in touch with FLASH CAST for your renovation project. We serve Kuala Lumpur, Selangor, and surrounding areas.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal direction="left">
              <div>
                <div className="accent-line mb-4" />
                <h2 className="font-display text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, title: "Address", text: "94, Jalan Mega Mendung, Taman United, 58200 Kuala Lumpur, Malaysia" },
                    { icon: Phone, title: "Phone / WhatsApp", text: "+60 12-345 6789" },
                    { icon: Mail, title: "Email", text: "info@flashcast.com.my" },
                    { icon: Clock, title: "Business Hours", text: "Mon – Sat: 9:00 AM – 6:00 PM\nSun: By Appointment" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 group p-4 rounded-lg border border-border hover-lift">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" className="btn-press font-semibold h-12 px-8" asChild>
                    <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={150}>
              <div className="bg-card p-6 md:p-8 rounded-lg border border-border">
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
                  <Button type="submit" size="lg" className="w-full btn-press font-semibold h-12">
                    Send Message <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
