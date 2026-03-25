import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Target, Shield } from "lucide-react";

const About = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">About FLASH CAST</h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg">
            FLASH CAST SDN. BHD. is a registered renovation and interior design company based in Kuala Lumpur, Malaysia. We provide complete renovation solutions — design, custom built-in, construction, and project coordination.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-muted rounded-lg">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">In-House Team</h3>
                <p className="text-muted-foreground text-sm">Experienced designers, carpenters & project managers</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">End-to-End</h3>
                <p className="text-muted-foreground text-sm">Design, build, and furnish — all under one roof</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">SSM Registered</h3>
                <p className="text-muted-foreground text-sm">Fully registered company with proper documentation</p>
              </div>
              <div className="text-center p-6 bg-muted rounded-lg">
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-1">KL Based</h3>
                <p className="text-muted-foreground text-sm">Located in Taman United, serving KL & Selangor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">Our Address</h2>
          </div>
          <div className="bg-background p-8 rounded-lg text-center max-w-md mx-auto">
            <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="font-semibold mb-1">FLASH CAST SDN. BHD.</p>
            <p className="text-muted-foreground text-sm">94, Jalan Mega Mendung, Taman United,<br />58200 Kuala Lumpur, Malaysia</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent text-accent-foreground text-center">
        <div className="container-narrow">
          <h2 className="font-display text-3xl font-bold mb-4">Work With Us</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-lg mx-auto">Whether you're renovating a home, fitting out an office, or setting up a warehouse — we're ready to help.</p>
          <Button variant="secondary" size="lg" asChild>
            <Link to="/quote">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default About;
