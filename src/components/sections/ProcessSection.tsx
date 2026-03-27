import Reveal from "@/components/Reveal";
import { homepageProcessSteps, homepageProcessIntro } from "@/data/siteContent";

const ProcessSection = () => {
  return (
    <section className="section-padding bg-surface-dark" id="process">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-3">How We Work</h2>
            <p className="text-steel-light max-w-2xl mx-auto text-sm md:text-base">
              {homepageProcessIntro}
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {homepageProcessSteps.map((s, i) => (
            <Reveal key={s.num} delay={i * 100}>
              <div className="text-center group p-5 md:p-6 rounded-lg border border-white/10 bg-white/[0.03] h-full">
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
