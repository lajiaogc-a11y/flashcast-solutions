import Reveal from "@/components/Reveal";
import IconCardGrid from "@/components/templates/IconCardGrid";
import { whyChooseUsReasons, sectionHeaders } from "@/data/siteContent";

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-muted" id="why-us">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">{sectionHeaders.whyChooseUs.title}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              {sectionHeaders.whyChooseUs.subtitle}
            </p>
          </div>
        </Reveal>

        <IconCardGrid items={whyChooseUsReasons} columns={3} layout="horizontal" />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
