import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Shield } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroImg from "@/assets/hero-renovation-hd.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="FLASH CAST luxury interior renovation showroom in Kuala Lumpur"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
      </div>

      <div className="relative z-10 container-narrow px-5 md:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-xl">
          <p
            className="font-body font-semibold text-[11px] tracking-[0.3em] uppercase mb-6 animate-fade-in"
            style={{ animationDelay: "0.15s", color: "hsl(var(--gold))" }}
          >
            FLASH CAST SDN. BHD. — Kuala Lumpur
          </p>

          <h1
            className="font-display text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] mb-5 animate-slide-up"
            style={{
              animationDelay: "0.25s",
              opacity: 0,
              color: "#ffffff",
              textShadow: "0 2px 8px rgba(0,0,0,0.6), 0 4px 20px rgba(0,0,0,0.3)",
              letterSpacing: "-0.015em",
            }}
          >
            Complete Renovation
            <br className="hidden sm:block" />
            {" "}Solutions in
            <br className="hidden sm:block" />
            {" "}Kuala Lumpur
          </h1>

          <p
            className="text-[15px] md:text-lg leading-relaxed mb-8 max-w-md animate-fade-in"
            style={{
              animationDelay: "0.45s",
              opacity: 0,
              color: "rgba(255,255,255,0.95)",
              textShadow: "0 1px 6px rgba(0,0,0,0.5)",
            }}
          >
            Professional interior design, custom built-in furniture, and full renovation services. From concept to completion — your trusted partner in Malaysia.
          </p>

          {/* CTA Buttons — icons both on left for alignment */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <Button
              size="lg"
              className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-bold tracking-wide shadow-xl shadow-accent/40 bg-accent hover:bg-accent/90 text-accent-foreground rounded-md px-8 py-3 justify-center"
              asChild
            >
              <Link to="/quote">
                <ArrowRight className="w-4 h-4 mr-2" /> Get a Free Quote
              </Link>
            </Button>
            <Button
              size="lg"
              className="btn-press w-full sm:w-auto min-h-[3rem] text-sm font-semibold bg-white text-neutral-800 border-0 hover:bg-white/90 backdrop-blur-md shadow-md rounded-md px-8 py-3 justify-center"
              asChild
            >
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer" aria-label="Contact FLASH CAST on WhatsApp">
                <WhatsAppIcon className="w-[18px] h-[18px] mr-2 text-[#25D366]" /> WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust badges — centered with even spacing */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8 mt-10 animate-fade-in"
            style={{ animationDelay: "0.8s", opacity: 0 }}
          >
            {[
              { icon: MapPin, text: "KL & Selangor" },
              { icon: CheckCircle, text: "10+ Years" },
              { icon: Shield, text: "200+ Projects" },
            ].map((badge) => (
              <span
                key={badge.text}
                className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.85)", textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                <badge.icon className="w-3.5 h-3.5 shrink-0" />
                <span>{badge.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
