import { Star, CheckCircle, MapPin, Clock, Shield } from "lucide-react";
import Reveal from "@/components/Reveal";

const stats = [
  { icon: Star, value: "200+", label: "Projects Completed", iconClass: "text-gold" },
  { icon: CheckCircle, value: "10+ Years", label: "Industry Experience", iconClass: "text-accent" },
  { icon: MapPin, value: "KL & Selangor", label: "Service Coverage", iconClass: "text-accent" },
  { icon: Clock, value: "On-Time", label: "Delivery Guarantee", iconClass: "text-gold" },
];

const TrustSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="text-center p-5 group">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                  <item.icon className={`w-5 h-5 ${item.iconClass} transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-1">{item.value}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Testimonial */}
        <Reveal delay={200}>
          <div className="mt-12 p-6 md:p-8 bg-muted rounded-lg border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 text-gold" />
              </div>
              <div>
                <p className="italic text-foreground mb-2 text-sm md:text-base leading-relaxed">
                  "FLASH CAST delivered our office renovation on time and within budget. Professional team, quality workmanship, and excellent communication throughout the project."
                </p>
                <p className="text-sm text-muted-foreground font-medium">— Corporate Client, Petaling Jaya</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Design + Build */}
        <Reveal delay={300}>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span className="font-medium">Design + Build Under One Roof</span>
            </div>
            <div className="hidden md:block w-px h-5 bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-medium">94, Jalan Mega Mendung, 58200 Kuala Lumpur</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default TrustSection;
