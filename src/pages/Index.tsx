import { JsonLdLocalBusiness } from "@/components/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TrustSection from "@/components/sections/TrustSection";
import CTASection from "@/components/sections/CTASection";
import GeoSection from "@/components/sections/GeoSection";

const Index = () => {
  return (
    <main>
      <JsonLdLocalBusiness />
      <HeroSection />
      <ServicesSection />
      <MaterialsSection />
      <ProjectsSection />
      <ProcessSection />
      <TrustSection />
      <GeoSection />
      <CTASection />
    </main>
  );
};

export default Index;
