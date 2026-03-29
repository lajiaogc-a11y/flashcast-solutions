import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Reveal from "@/components/Reveal";

const CTASection = () => {
  return (
    <section className="section-padding bg-surface-dark">
      <div className="container-narrow text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4" style={{ color: "hsl(var(--surface-dark-foreground))" }}>
            Planning to Renovate Your Space?
          </h2>
          <p className="mb-8 max-w-md mx-auto text-sm md:text-base" style={{ color: "hsl(var(--steel))" }}>
            Get a free consultation and quotation today. We serve Kuala Lumpur, Selangor, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button
              size="lg"
              className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-bold tracking-wide bg-white text-foreground hover:bg-white/90 rounded-md px-8 py-3 justify-center"
              asChild
            >
              <Link to="/quote">Get Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button
              size="lg"
              className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-semibold bg-transparent border border-white/30 hover:bg-white/10 rounded-md px-8 py-3 justify-center"
              style={{ color: "hsl(var(--surface-dark-foreground))" }}
              asChild
            >
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-[18px] h-[18px] mr-2 text-[#25D366]" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
