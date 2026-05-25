import { Helmet } from "react-helmet-async";
import { services } from "@/data/services";
import { BASE_URL } from "@/lib/seo";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  "@id": `${BASE_URL}/#organization`,
  name: "Sentinel Services",
  description: "Professioneller Sicherheitsdienst – Objektschutz, Veranstaltungsschutz, Baustellenbewachung & individuelle Sicherheitskonzepte. §34a-zugelassen, bundesweit einsatzbereit.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  email: "info@sentinel-services.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Grusonstraße 9",
    postalCode: "39112",
    addressLocality: "Magdeburg",
    addressRegion: "Sachsen-Anhalt",
    addressCountry: "DE",
  },
  areaServed: {
    "@type": "Country",
    name: "Deutschland",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@sentinel-services.de",
    availableLanguage: ["German"],
    areaServed: "DE",
  },
  priceRange: "€€",
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

export const BreadcrumbJsonLd = ({ items }: { items: { name: string; url: string }[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

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
    serviceType: name,
    description,
    url,
    provider: {
      "@type": "SecurityService",
      "@id": `${BASE_URL}/#organization`,
      name: "Sentinel Services",
      url: BASE_URL,
      image: `${BASE_URL}/logo.png`,
      email: "info@sentinel-services.de",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Grusonstraße 9",
        postalCode: "39112",
        addressLocality: "Magdeburg",
        addressCountry: "DE",
      },
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

export const ItemListJsonLd = ({
  items,
}: {
  items: { name: string; url: string; description?: string }[];
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url,
      ...(it.description ? { description: it.description } : {}),
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export const WebPageJsonLd = ({
  type = "WebPage",
  name,
  description,
  url,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  url: string;
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "de-DE",
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};
