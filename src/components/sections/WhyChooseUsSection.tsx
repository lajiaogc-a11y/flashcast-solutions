import Reveal from "@/components/Reveal";
import { whyChooseUsReasons } from "@/data/siteContent";

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-muted" id="why-us">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Why Choose FLASH CAST</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              Over 200 projects completed across Kuala Lumpur and Selangor. Here's what sets us apart from other renovation companies in Malaysia.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {whyChooseUsReasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="flex items-start gap-4 p-5 md:p-6 bg-background rounded-lg border border-border hover-lift group h-full">
                <div className="w-10 h-10 shrink-0 rounded-full bg-accent/10 flex items-center justify-center transition-colors group-hover:bg-accent/20">
                  <r.icon className="w-5 h-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-base mb-1 group-hover:text-accent transition-colors">{r.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
