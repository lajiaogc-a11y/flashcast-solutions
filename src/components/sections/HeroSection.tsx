import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroImg from "@/assets/hero-renovation-hd.jpg";

const useCountUp = (end: number, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref };
};
const HeroStats = () => {
  const projects = useCountUp(200);
  const years = useCountUp(10);

  return (
    <div className="mt-10 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
      <div className="flex flex-col sm:flex-row items-center sm:justify-center gap-6 sm:gap-0">
        <div ref={projects.ref} className="text-center">
          <span className="font-display text-2xl sm:text-3xl font-bold leading-none block" style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            {projects.count}+
          </span>
          <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-1.5 block" style={{ color: "rgba(255,255,255,0.45)" }}>Projects Completed</span>
        </div>
        <div className="hidden sm:block w-px h-10 mx-6" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div ref={years.ref} className="text-center">
          <span className="font-display text-2xl sm:text-3xl font-bold leading-none block" style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>
            {years.count}+
          </span>
          <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-1.5 block" style={{ color: "rgba(255,255,255,0.45)" }}>Years Experience</span>
        </div>
        <div className="hidden sm:block w-px h-10 mx-6" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="text-center">
          <span className="font-display text-2xl sm:text-3xl font-bold leading-none block" style={{ color: "rgba(255,255,255,0.95)", textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}>KL</span>
          <span className="text-[10px] sm:text-xs font-medium tracking-wider uppercase mt-1.5 block" style={{ color: "rgba(255,255,255,0.45)" }}>& Selangor Coverage</span>
        </div>
      </div>
    </div>
  );
};

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
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent md:bg-black/40 md:bg-none" />
      </div>

      <div className="relative z-10 container-narrow px-5 md:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-xl md:max-w-2xl md:mx-auto md:text-center">
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
            className="text-[15px] md:text-lg leading-relaxed mb-8 max-w-md md:mx-auto animate-fade-in"
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

          {/* Trust stats */}
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
