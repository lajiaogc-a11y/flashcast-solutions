import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
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
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" variant="secondary" className="btn-press font-semibold h-12 px-8" asChild>
              <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/15 hover:text-white btn-press h-12 px-8 font-semibold"
              asChild
            >
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
