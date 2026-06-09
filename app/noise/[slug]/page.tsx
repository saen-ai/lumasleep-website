import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { JsonLd } from "@/components/JsonLd";
import { getAllNoise, getNoise } from "@/lib/sounds";
import { abs, faqPageLd, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllNoise().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getNoise(slug);
  if (!page) return {};
  const url = abs(`/noise/${page.slug}/`);
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url,
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description },
  };
}

export default async function NoisePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getNoise(slug);
  if (!page) notFound();

  const siblings = page.related
    .map((s) => getNoise(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ slug: p.slug, h1: p.h1, glyph: p.glyph, tagline: p.tagline }));

  return (
    <>
      <JsonLd
        data={[
          faqPageLd(page.faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Noise Colours", path: "/noise/" },
            { name: page.h1, path: `/noise/${page.slug}/` },
          ]),
        ]}
      />
      <Nav />
      <LandingPage page={page} hub={{ label: "Noise Colours", path: "/noise" }} siblings={siblings} />
      <Footer />
    </>
  );
}
