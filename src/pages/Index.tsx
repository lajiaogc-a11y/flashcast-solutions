import PageMeta from "@/components/PageMeta";
import { JsonLdLocalBusiness, JsonLdOrganization } from "@/components/JsonLd";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import BrandLogosSection from "@/components/sections/BrandLogosSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <main>
      <PageMeta
        title="Renovation Company Kuala Lumpur | Interior Design & Custom Built-In | FLASH CAST"
        description="FLASH CAST SDN. BHD. — Professional interior renovation, custom built-in furniture, commercial fit-out, and design services in Kuala Lumpur and Selangor, Malaysia. Get a free quote today."
        keywords="renovation company Kuala Lumpur, interior design KL, custom built-in furniture Malaysia, commercial renovation Selangor, kitchen cabinet KL"
        canonicalPath="/"
      />
      <JsonLdLocalBusiness />
      <JsonLdOrganization />
      <HeroSection />
      <StatsSection />
      <BrandLogosSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
