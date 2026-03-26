import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { homepageServices } from "@/data/siteContent";

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background" id="services">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Complete renovation and design solutions for residential, commercial, and industrial spaces across Kuala Lumpur and Selangor, Malaysia.
            </p>
          </div>
        </Reveal>

        {/* Top row: first 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
          {homepageServices.slice(0, 4).map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link to={s.link} className="group relative p-6 md:p-7 rounded-lg border border-border bg-card hover-lift block h-full transition-colors hover:border-accent/30">
                <div className="w-12 h-12 mb-4 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                  <s.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bottom row: remaining cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {homepageServices.slice(4).map((s, i) => (
            <Reveal key={s.title} delay={(i + 4) * 80}>
              <Link to={s.link} className="group relative p-6 md:p-7 rounded-lg border border-border bg-card hover-lift block h-full transition-colors hover:border-accent/30">
                <div className="w-12 h-12 mb-4 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                  <s.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-base md:text-lg mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="text-center mt-10">
            <Button variant="outline" className="btn-press" asChild>
              <Link to="/services">View All Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServicesSection;
