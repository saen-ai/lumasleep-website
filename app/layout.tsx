import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { SITE } from "@/lib/site";
import { abs, organizationLd, websiteLd, softwareApplicationLd } from "@/lib/seo";
import { Starfield } from "@/components/Starfield";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

// Dreamy soft-serif display + clean grotesque body — self-hosted at build time.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.seoTitle,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "health",
  // Apple Smart App Banner — iOS Safari shows a native "View/Open" banner
  // linking to the App Store. appArgument is passed to the app on open.
  itunes: {
    appId: "6759291710",
    appArgument: SITE.url,
  },
  keywords: [
    "sleep sounds app",
    "AI sleep sounds",
    "ambient sounds for sleep",
    "AI soundscapes",
    "white noise app",
    "pink noise",
    "brown noise",
    "sleep tracking app",
    "sounds to fall asleep",
    "bedtime sounds",
    "relaxation app",
    "LumaSleep",
  ],
  alternates: {
    canonical: abs("/"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
  openGraph: {
    title: SITE.seoTitle,
    description: SITE.description,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    url: abs("/"),
    images: [
      {
        url: abs("/og.png"),
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.seoTitle,
    description: SITE.description,
    images: [abs("/og.png")],
  },
};

export const viewport: Viewport = {
  themeColor: "#050810",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable}`}>
      <body>
        <JsonLd data={[organizationLd, websiteLd, softwareApplicationLd]} />
        <Starfield />
        {children}
      </body>
    </html>
  );
}
