import { siteConfig } from "../data/siteConfig";

export const absoluteUrl = (path = "/") => new URL(path, `${siteConfig.siteUrl}/`).toString();

export function pageHead({ title, description, path = "/", type = "website" }) {
  const url = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl(siteConfig.logo),
    image: absoluteUrl(siteConfig.logo),
    telephone: siteConfig.phoneHref.replace("tel:", ""),
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1331 Sedona Dr",
      addressLocality: "Pingree Grove",
      addressRegion: "IL",
      postalCode: "60140",
      addressCountry: "US",
    },
    areaServed: siteConfig.areasServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
  };
}

export function serviceSchema(service, path) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: absoluteUrl(path),
    provider: { "@id": `${siteConfig.siteUrl}/#business` },
    areaServed: siteConfig.areasServed.map((name) => ({ "@type": "City", name })),
    serviceType: service.categoryTitle,
  };
}

export function serviceFaqSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
