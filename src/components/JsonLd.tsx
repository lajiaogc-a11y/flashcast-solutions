interface JsonLdProps {
  type: "LocalBusiness" | "FAQPage" | "Service" | "WebPage";
  data?: Record<string, unknown>;
  faqs?: { question: string; answer: string }[];
}

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "FLASH CAST SDN. BHD.",
  alternateName: "闪铸设计",
  url: "https://flashcast.com.my",
  logo: "https://flashcast.com.my/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+60123456789",
    contactType: "customer service",
    areaServed: "MY",
    availableLanguage: ["English", "Malay", "Chinese"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "94, Jalan Mega Mendung, Taman United",
    addressLocality: "Kuala Lumpur",
    postalCode: "58200",
    addressRegion: "Kuala Lumpur",
    addressCountry: "MY",
  },
  sameAs: [],
};

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://flashcast.com.my/#localbusiness",
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
    { "@type": "City", name: "Kuala Lumpur" },
    { "@type": "State", name: "Selangor" },
    { "@type": "City", name: "Petaling Jaya" },
    { "@type": "City", name: "Cheras" },
    { "@type": "City", name: "Mont Kiara" },
    { "@type": "City", name: "Bangsar" },
    { "@type": "City", name: "Subang Jaya" },
    { "@type": "City", name: "Shah Alam" },
    { "@type": "City", name: "Puchong" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  image: "https://flashcast.com.my/og-image.jpg",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Renovation Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Renovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Built-In Furniture" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Renovation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Works" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse & Shelving" } },
    ],
  },
  sameAs: [],
};

export const JsonLdOrganization = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
  />
);

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
      "@id": "https://flashcast.com.my/#localbusiness",
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

export const JsonLdBreadcrumb = ({ items }: { items: { name: string; url: string }[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://flashcast.com.my${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
