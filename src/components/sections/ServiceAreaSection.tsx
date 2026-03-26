import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";

const areas = [
  { name: "Kuala Lumpur", slug: "kuala-lumpur", areas: "Mont Kiara, Bangsar, Cheras, Kepong, Sentul, Sri Hartamas, City Centre" },
  { name: "Petaling Jaya", slug: "petaling-jaya", areas: "SS2, Damansara, Kelana Jaya, PJ New Town, Section 17, Taman SEA" },
  { name: "Subang Jaya", slug: "subang-jaya", areas: "USJ, SS15, SS16, Sunway, Putra Heights" },
  { name: "Shah Alam", slug: "selangor", areas: "All sections, Setia Alam, Kota Kemuning, Bukit Jelutong" },
  { name: "Puchong", slug: "selangor", areas: "Bandar Puteri, IOI Boulevard, Taman Puchong" },
  { name: "Cheras", slug: "cheras", areas: "Taman Connaught, Taman Midah, Taman Segar, Batu 9" },
];

const ServiceAreaSection = () => {
  return (
    <section className="section-padding bg-muted" id="service-area">
      <div className="container-narrow">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <div className="accent-line mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Service Areas</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
              FLASH CAST SDN. BHD. is based in Kuala Lumpur and provides renovation services across the entire KL and Selangor region. Free site measurement for all enquiries within our coverage area.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {areas.map((area, i) => (
            <Reveal key={area.name} delay={i * 70}>
              <Link
                to={`/locations/${area.slug}`}
                className="group p-5 md:p-6 bg-background rounded-lg border border-border hover-lift block h-full transition-colors hover:border-accent/30"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <h3 className="font-display font-semibold text-base group-hover:text-accent transition-colors">
                    {area.name}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{area.areas}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm">
              Don't see your area? We may still be able to help.{" "}
              <Link to="/contact" className="text-accent hover:underline font-medium">Contact us</Link> to check availability.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ServiceAreaSection;
