import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle, ClipboardList, Ruler, FileText, Hammer, Handshake } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Enquiry & Consultation",
    desc: "Tell us about your project — what you need, your preferences, and your budget. We'll discuss your requirements and suggest the best approach.",
    details: ["Submit enquiry via website, WhatsApp, or phone", "Discuss requirements, timeline, and budget", "We provide initial advice and recommendations"],
  },
  {
    num: "02",
    icon: Ruler,
    title: "Site Measurement",
    desc: "Our team visits your site to take precise measurements and assess the existing conditions. This step is free for all enquiries in KL and Selangor.",
    details: ["Free on-site measurement", "Assess existing conditions and constraints", "Take photos and notes for design reference"],
  },
  {
    num: "03",
    icon: FileText,
    title: "Design & Quotation",
    desc: "We prepare a detailed quotation with itemized costs, material specifications, and 3D visualizations so you can see the result before committing.",
    details: ["Space planning and layout design", "3D visualization of proposed design", "Detailed quotation with itemized pricing", "Material samples and selection"],
  },
  {
    num: "04",
    icon: Hammer,
    title: "Construction & Execution",
    desc: "Upon confirmation, we handle all permits, coordinate all trades, and execute the renovation with regular progress updates.",
    details: ["Permit application and coordination", "Demolition and preparation works", "All trades executed by our team", "Weekly progress updates with photos"],
  },
  {
    num: "05",
    icon: Handshake,
    title: "Handover & Aftercare",
    desc: "Final inspection, defect rectification, thorough cleaning, and handover. We provide warranty and post-project support.",
    details: ["Final walkthrough and inspection", "Defect list and rectification", "Professional cleaning", "Warranty and aftercare support"],
  },
];

const Process = () => {
  return (
    <main className="pt-16">
      <section className="section-padding bg-surface-dark">
        <div className="container-narrow text-center">
          <div className="accent-line mx-auto mb-4 animate-fade-in" />
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-up" style={{ opacity: 0, animationDelay: "0.1s" }}>Our Process</h1>
          <p className="text-steel-light max-w-2xl mx-auto text-lg animate-fade-in" style={{ opacity: 0, animationDelay: "0.3s" }}>
            A clear, structured process to take your renovation project from initial enquiry to final handover. No surprises, no guesswork — just reliable execution.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {steps.map((step, i) => (
                <Reveal key={step.num} delay={i * 100}>
                  <div className="relative flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-display text-lg font-bold z-10 transition-transform duration-300 hover:scale-110">
                      {step.num}
                    </div>
                    <div className="flex-1 pb-2">
                      <div className="flex items-center gap-2 mb-2">
                        <step.icon className="w-5 h-5 text-accent" />
                        <h2 className="font-display text-xl md:text-2xl font-bold">{step.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-4">{step.desc}</p>
                      <ul className="space-y-2">
                        {step.details.map((d) => (
                          <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent text-accent-foreground text-center">
        <Reveal>
          <div className="container-narrow">
            <h2 className="font-display text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="mb-6 opacity-90 max-w-md mx-auto">Get in touch today — the first step is a simple conversation.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Button size="lg" variant="secondary" className="btn-press" asChild>
                <Link to="/quote">Get a Free Quote <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10 btn-press" asChild>
                <a href="https://wa.me/60123456789" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
};

export default Process;
