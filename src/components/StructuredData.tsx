import { Helmet } from "react-helmet-async";
import { services } from "@/data/services";

const BASE_URL = "https://sentinel-services.lovable.app";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "Sentinel Services",
  description: "Professioneller Sicherheitsdienst – Objektschutz, Veranstaltungsschutz, Baustellenbewachung & individuelle Sicherheitskonzepte. §34a-zugelassen, bundesweit einsatzbereit.",
  url: BASE_URL,
  telephone: "+4920893579970",
  email: "info@sentinel-services.de",
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sicherheitsdienstleistungen",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.desc,
        url: `${BASE_URL}/leistungen/${s.slug}`,
      },
    })),
  },
};

export const LocalBusinessJsonLd = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
  </Helmet>
);

export const FAQPageJsonLd = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
  const schema = {
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
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export const ServiceJsonLd = ({ name, description, url }: { name: string; description: string; url: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Sentinel Services",
      telephone: "+4920893579970",
      email: "info@sentinel-services.de",
    },
    areaServed: {
      "@type": "Country",
      name: "Deutschland",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
