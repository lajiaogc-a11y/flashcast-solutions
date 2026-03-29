import { useState, useEffect, useRef } from "react";
import { Building2, Clock, Users } from "lucide-react";
import Reveal from "@/components/Reveal";

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
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref };
};

const stats = [
  { icon: Building2, end: 200, suffix: "+", label: "Completed Renovation Projects Across KL & Selangor" },
  { icon: Clock, end: 10, suffix: "+", label: "Years of Industry Experience" },
  { icon: Users, end: 0, suffix: "", label: "Trusted by Homeowners & Businesses", displayText: "✓" },
];

const StatsSection = () => {
  const projects = useCountUp(200);
  const years = useCountUp(10);

  return (
    <section className="py-12 md:py-16 bg-background border-b border-border">
      <div className="container-narrow px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Stat 1 */}
          <Reveal>
            <div ref={projects.ref} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-foreground">{projects.count}+</span>
                <p className="text-muted-foreground text-sm mt-0.5">Completed Renovation Projects Across KL & Selangor</p>
              </div>
            </div>
          </Reveal>

          {/* Stat 2 */}
          <Reveal delay={100}>
            <div ref={years.ref} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-foreground">{years.count}+</span>
                <p className="text-muted-foreground text-sm mt-0.5">Years of Industry Experience</p>
              </div>
            </div>
          </Reveal>

          {/* Stat 3 */}
          <Reveal delay={200}>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-foreground">100%</span>
                <p className="text-muted-foreground text-sm mt-0.5">Trusted by Homeowners & Businesses</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
