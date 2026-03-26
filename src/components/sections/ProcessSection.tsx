import Reveal from "@/components/Reveal";

const steps = [
  { num: "01", title: "Enquiry", desc: "Tell us about your project requirements" },
  { num: "02", title: "Site Visit", desc: "Precise on-site measurements & assessment" },
  { num: "03", title: "Proposal", desc: "Detailed quotation with 3D visuals" },
  { num: "04", title: "Handover", desc: "Professional execution & timely completion" },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-surface-dark">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">How We Work</h2>
            <p className="text-steel-light max-w-lg mx-auto text-sm md:text-base">
              A streamlined process to bring your renovation vision to life.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 120}>
              <div className="text-center group">
                <span className="text-gold font-display text-3xl md:text-4xl font-bold transition-transform duration-300 inline-block group-hover:scale-110">
                  {s.num}
                </span>
                <h3 className="font-semibold text-primary-foreground mt-2 mb-1 text-sm md:text-base">{s.title}</h3>
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
