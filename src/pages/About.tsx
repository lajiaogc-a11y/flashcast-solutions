import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Target, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";

const About = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4 animate-fade-in" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up" style={{ opacity: 0, animationDelay: "0.1s" }}>About FLASH CAST</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            FLASH CAST SDN. BHD. is a registered renovation and interior design company based in Kuala Lumpur, Malaysia. We provide complete renovation solutions — design, custom built-in, construction, and project coordination.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal direction="left">
              <div>
                <div className="accent-line mb-4" />
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
                <p className="text-muted-foreground mb-4">
                  Founded with a commitment to quality workmanship and professional project management, FLASH CAST serves residential, commercial, and industrial clients across Kuala Lumpur and Selangor.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our team handles every aspect of the renovation process — from initial design consultation and space planning to material selection, custom fabrication, construction, and final handover.
                </p>
                <p className="text-muted-foreground">
                  We believe in transparent pricing, clear communication, and delivering projects on time. Whether it's a full home renovation, a commercial fit-out, or a warehouse racking system, we bring the same level of professionalism and attention to detail.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Users, title: "In-House Team", desc: "Experienced designers, carpenters & project managers" },
                  { icon: Target, title: "End-to-End", desc: "Design, build, and furnish — all under one roof" },
                  { icon: Shield, title: "SSM Registered", desc: "Fully registered company with proper documentation" },
                  { icon: MapPin, title: "KL Based", desc: "Located in Taman United, serving KL & Selangor" },
                ].map((item, i) => (
                  <div key={item.title} className="text-center p-6 bg-muted rounded-lg group hover-lift" style={{ animationDelay: `${i * 100}ms` }}>
                    <item.icon className="w-8 h-8 text-accent mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <Reveal>
          <div className="container-narrow">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Our Location</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-3xl mx-auto">
              <div className="bg-background p-8 rounded-lg text-center hover-lift flex flex-col items-center justify-center">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="font-semibold mb-1">FLASH CAST SDN. BHD.</p>
                <p className="text-muted-foreground text-sm">94, Jalan Mega Mendung, Taman United,<br />58200 Kuala Lumpur, Malaysia</p>
              </div>
              <div className="rounded-lg overflow-hidden bg-background border border-border min-h-[220px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d101.68!3d3.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDYnMzYuMCJOIDEwMcKwNDAnNDguMCJF!5e0!3m2!1sen!2smy!4v1600000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "220px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FLASH CAST office location"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-padding bg-accent text-accent-foreground text-center">
        <Reveal>
          <div className="container-narrow">
            <h2 className="font-display text-3xl font-bold mb-4">Work With Us</h2>
            <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Whether you're renovating a home, fitting out an office, or setting up a warehouse — we're ready to help.</p>
            <Button variant="secondary" size="lg" className="btn-press" asChild>
              <Link to="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default About;
