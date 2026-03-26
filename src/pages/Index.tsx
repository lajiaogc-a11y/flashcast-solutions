import PageMeta from "@/components/PageMeta";
import { JsonLdLocalBusiness, JsonLdOrganization } from "@/components/JsonLd";
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
      <PageMeta
        title="Renovation Company Kuala Lumpur | Interior & Custom Built-In | FLASH CAST"
        description="FLASH CAST SDN. BHD. provides professional interior renovation, custom built-in furniture, commercial fit-out, and design services in Kuala Lumpur and Selangor, Malaysia. Get a free quote today."
        keywords="renovation company Kuala Lumpur, interior design KL, custom built-in furniture Malaysia, commercial renovation Selangor, kitchen cabinet KL"
        canonicalPath="/"
      />
      <JsonLdLocalBusiness />
      <JsonLdOrganization />
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
