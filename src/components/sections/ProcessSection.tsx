import Reveal from "@/components/Reveal";
import { MessageSquare, PenTool, FileText, HardHat, CheckCircle } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", desc: "We understand your needs, budget, and preferences." },
  { icon: PenTool, title: "Design Proposal", desc: "We create layout plans and 3D concepts." },
  { icon: FileText, title: "Quotation", desc: "Transparent pricing with clear breakdown." },
  { icon: HardHat, title: "Construction", desc: "Managed by experienced supervisors." },
  { icon: CheckCircle, title: "Handover", desc: "Final quality check and project delivery." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background" id="process">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Our Renovation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              A clear, structured approach from first meeting to final handover.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="text-center group p-5 md:p-6 rounded-lg border border-border bg-card h-full">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-muted flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-gold transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="text-gold font-display text-sm font-bold mb-1">0{i + 1}</div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1.5">{step.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
