import Reveal from "@/components/Reveal";
import IconCardGrid from "@/components/templates/IconCardGrid";
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

        <IconCardGrid items={whyChooseUsReasons} columns={3} layout="horizontal" />
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
