import { Helmet } from "react-helmet-async";

interface JsonLdProps {
  type: "LocalBusiness" | "FAQPage" | "Service" | "WebPage";
  data?: Record<string, unknown>;
  faqs?: { question: string; answer: string }[];
}

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FLASH CAST SDN. BHD.",
  alternateName: "闪铸设计",
  description:
    "Professional renovation, interior design, custom built-in furniture, and commercial fit-out services in Kuala Lumpur and Selangor, Malaysia.",
  url: "https://flashcast.com.my",
  telephone: "+60123456789",
  email: "info@flashcast.com.my",
  address: {
    "@type": "PostalAddress",
    streetAddress: "94, Jalan Mega Mendung, Taman United",
    addressLocality: "Kuala Lumpur",
    postalCode: "58200",
    addressRegion: "Kuala Lumpur",
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "3.1100",
    longitude: "101.6800",
  },
  areaServed: [
    "Kuala Lumpur",
    "Selangor",
    "Petaling Jaya",
    "Cheras",
    "Mont Kiara",
    "Bangsar",
    "Subang Jaya",
    "Shah Alam",
    "Puchong",
  ],
  openingHours: "Mo-Sa 09:00-18:00",
  priceRange: "$$",
  image: "https://flashcast.com.my/og-image.jpg",
  sameAs: [],
};

export const JsonLdLocalBusiness = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
  />
);

export const JsonLdFAQ = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export const JsonLdService = ({
  name,
  description,
  areaServed,
}: {
  name: string;
  description: string;
  areaServed?: string;
}) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "FLASH CAST SDN. BHD.",
    },
    areaServed: areaServed || "Kuala Lumpur, Selangor, Malaysia",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
