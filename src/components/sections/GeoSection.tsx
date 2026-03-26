import Reveal from "@/components/Reveal";

const GeoSection = () => {
  return (
    <section className="py-10 md:py-14 bg-muted border-t border-border">
      <div className="container-narrow px-5 md:px-8">
        <Reveal>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-center max-w-3xl mx-auto">
            <strong className="text-foreground">FLASH CAST SDN. BHD.</strong> is a professional renovation company based in{" "}
            <strong className="text-foreground">Kuala Lumpur, Malaysia</strong>, offering{" "}
            <strong className="text-foreground">interior renovation</strong>,{" "}
            <strong className="text-foreground">custom built-in furniture</strong>,{" "}
            <strong className="text-foreground">commercial fit-out</strong>,{" "}
            materials showcase, and project management solutions across{" "}
            <strong className="text-foreground">Selangor</strong> and the Klang Valley.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default GeoSection;
