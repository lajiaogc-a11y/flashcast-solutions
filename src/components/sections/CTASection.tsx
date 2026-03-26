import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Reveal from "@/components/Reveal";

const CTASection = () => {
  return (
    <section className="section-padding bg-accent text-accent-foreground">
      <div className="container-narrow text-center">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="mb-8 max-w-md mx-auto opacity-90 text-sm md:text-base">
            Get a free consultation and quotation. We serve Kuala Lumpur, Selangor, and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button size="lg" variant="secondary" className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-bold tracking-wide rounded-md px-8 py-3 justify-center" asChild>
              <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button
              size="lg"
              className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-semibold bg-white text-neutral-800 border-0 hover:bg-white/90 shadow-md rounded-md px-8 py-3 justify-center"
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
