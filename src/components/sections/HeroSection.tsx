import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPin, CheckCircle, Shield } from "lucide-react";
import heroImg from "@/assets/hero-renovation-hd.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background image — sharp, no animation */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="FLASH CAST luxury interior renovation showroom in Kuala Lumpur"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        {/* Lighter overlay — preserves image detail */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      </div>

      <div className="relative z-10 container-narrow px-5 md:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-xl">
          {/* Tag line */}
          <p
            className="font-body font-semibold text-[11px] tracking-[0.3em] uppercase mb-6 animate-fade-in"
            style={{ animationDelay: "0.15s", color: "hsl(var(--gold))" }}
          >
            FLASH CAST SDN. BHD. — Kuala Lumpur
          </p>

          {/* Main heading */}
          <h1
            className="font-display text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] mb-5 animate-slide-up"
            style={{
              animationDelay: "0.25s",
              opacity: 0,
              color: "#ffffff",
              textShadow: "0 1px 2px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.2)",
              letterSpacing: "-0.015em",
            }}
          >
            Complete Renovation
            <br className="hidden sm:block" />
            {" "}Solutions in
            <br className="hidden sm:block" />
            {" "}Kuala Lumpur
          </h1>

          {/* Subtitle */}
          <p
            className="text-[15px] md:text-lg leading-relaxed mb-8 max-w-md animate-fade-in"
            style={{
              animationDelay: "0.45s",
              opacity: 0,
              color: "rgba(255,255,255,0.92)",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)",
            }}
          >
            Professional interior design, custom built-in furniture, and full renovation services. From concept to completion — your trusted partner in Malaysia.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 animate-fade-in"
            style={{ animationDelay: "0.6s", opacity: 0 }}
          >
            <Button
              size="lg"
              className="btn-press bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/30 text-sm px-8 h-12"
              asChild
            >
              <Link to="/quote">
                Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/15 hover:text-white btn-press backdrop-blur-sm font-medium text-sm px-8 h-12"
              asChild
            >
              <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-8 text-[11px] font-semibold tracking-wider uppercase animate-fade-in"
            style={{ animationDelay: "0.8s", opacity: 0, color: "rgba(255,255,255,0.75)" }}
          >
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Kuala Lumpur & Selangor
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5" /> 10+ Years Experience
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" /> 200+ Projects
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
