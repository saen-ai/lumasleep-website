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
  operatingSystem: "iOS, Android",
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

// ItemList for hub pages — tells search engines the set of pages a hub
// links to, which helps surface them as a related cluster.
// (faqPageLd lives further down — added by the parallel blog work.)
export function itemListLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: abs(item.path),
    })),
  };
}

// BlogPosting structured data for an individual article.
export function articleLd(post: {
  slug: string;
  title: string;
  description: string;
  date: string;
  cover?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    image: abs(post.cover ?? "/og.png"),
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(`/blog/${post.slug}/`) },
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: abs("/icon.svg") },
    },
  };
}

// FAQPage structured data for an article's FAQ section.
export function faqPageLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// BreadcrumbList for nav trails like Home › Blog › Post.
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
