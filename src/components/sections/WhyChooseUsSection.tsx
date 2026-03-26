import { Paintbrush, Wrench, Layers, Clock, MessageCircle, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

const reasons = [
  {
    icon: Paintbrush,
    title: "In-House Design Team",
    desc: "Professional interior designers create 3D visualizations and detailed construction drawings — so you see the result before any work begins.",
  },
  {
    icon: Wrench,
    title: "One-Stop Renovation",
    desc: "From demolition to painting, carpentry to electrical — we manage all trades under one contract. No need to coordinate multiple contractors.",
  },
  {
    icon: Layers,
    title: "Quality Materials",
    desc: "We source materials from trusted suppliers and maintain a curated materials library. Visit our showroom to compare options before committing.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "Every project comes with a detailed timeline and milestones. We keep you updated weekly and deliver on schedule.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    desc: "Itemized quotations, weekly progress reports, and a dedicated project manager for every project. No hidden costs, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "SSM Registered & Warranty",
    desc: "FLASH CAST SDN. BHD. is a fully SSM-registered company. All renovation works come with workmanship warranty for your peace of mind.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-muted" id="why-us">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              Why Choose FLASH CAST
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Over 200 projects completed across Kuala Lumpur and Selangor. Here's what sets us apart from other renovation companies in Malaysia.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="p-6 md:p-7 bg-background rounded-lg border border-border hover-lift group h-full">
                <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-accent/20">
                  <r.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-display font-semibold text-base mb-2 group-hover:text-accent transition-colors">
                  {r.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
