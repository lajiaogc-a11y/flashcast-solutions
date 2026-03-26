import PageMeta from "@/components/PageMeta";
import { JsonLdLocalBusiness, JsonLdOrganization } from "@/components/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import MaterialsSection from "@/components/sections/MaterialsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TrustSection from "@/components/sections/TrustSection";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import HomeFAQSection from "@/components/sections/HomeFAQSection";
import GeoSection from "@/components/sections/GeoSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main>
      <PageMeta
        title="Renovation Company Kuala Lumpur | Interior Design & Custom Built-In | FLASH CAST"
        description="FLASH CAST SDN. BHD. — Professional interior renovation, custom built-in furniture, commercial fit-out, artistic wall coating (German Remmers), and design services in Kuala Lumpur and Selangor, Malaysia. Get a free quote today."
        keywords="renovation company Kuala Lumpur, interior design KL, custom built-in furniture Malaysia, commercial renovation Selangor, kitchen cabinet KL, artistic wall coating Malaysia, Remmers Malaysia"
        canonicalPath="/"
      />
      <JsonLdLocalBusiness />
      <JsonLdOrganization />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <MaterialsSection />
      <ProjectsSection />
      <ProcessSection />
      <TrustSection />
      <ServiceAreaSection />
      <HomeFAQSection />
      <GeoSection />
      <CTASection />
    </main>
  );
};

export default Index;
