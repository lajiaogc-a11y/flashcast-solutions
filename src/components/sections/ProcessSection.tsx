import Reveal from "@/components/Reveal";

const steps = [
  { num: "01", title: "Free Consultation", desc: "Tell us about your project — we'll discuss your requirements, preferences, and budget." },
  { num: "02", title: "Site Measurement", desc: "Our team visits the site for precise on-site measurements and condition assessment." },
  { num: "03", title: "Design & 3D Proposal", desc: "We create layout plans, material recommendations, and 3D visualizations for your approval." },
  { num: "04", title: "Detailed Quotation", desc: "You receive an itemized quotation with clear pricing — no hidden costs, no lump-sum guesswork." },
  { num: "05", title: "Construction", desc: "Our team executes the renovation with weekly progress updates and professional project management." },
  { num: "06", title: "Handover & Warranty", desc: "Final inspection, defect rectification, thorough cleaning, and workmanship warranty handover." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-surface-dark" id="process">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">How We Work</h2>
            <p className="text-steel-light max-w-2xl mx-auto text-sm md:text-base">
              A clear, structured process from first contact to project handover. Every step is designed to give you confidence and control over your renovation.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <div className="text-center group">
                <span className="text-gold font-display text-3xl md:text-4xl font-bold transition-transform duration-300 inline-block group-hover:scale-110">
                  {s.num}
                </span>
                <h3 className="font-semibold text-primary-foreground mt-2 mb-1.5 text-sm md:text-base">{s.title}</h3>
                <p className="text-steel text-xs md:text-sm leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
