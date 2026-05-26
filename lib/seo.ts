import { SITE, FAQS } from "./site";

// Absolute URL helper — SITE.url already includes the GitHub Pages project
// path, so everything here points at the real deployed location.
export const abs = (path = "/") => `${SITE.url}${path}`;

// ── JSON-LD structured data ───────────────────────────────────────
// No aggregateRating/review counts are included — we don't invent numbers.

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  logo: abs("/icon.svg"),
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
};

export const softwareApplicationLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE.name,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS",
  description: SITE.description,
  url: SITE.url,
  downloadUrl: SITE.appStoreUrl,
  installUrl: SITE.appStoreUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
  },
};

export const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};
