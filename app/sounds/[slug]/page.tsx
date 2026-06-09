import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { LandingPage } from "@/components/LandingPage";
import { JsonLd } from "@/components/JsonLd";
import { getAllSounds, getSound } from "@/lib/sounds";
import { abs, faqPageLd, breadcrumbLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSounds().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSound(slug);
  if (!page) return {};
  const url = abs(`/sounds/${page.slug}/`);
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

export default async function SoundPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSound(slug);
  if (!page) notFound();

  const siblings = page.related
    .map((s) => getSound(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))
    .map((p) => ({ slug: p.slug, h1: p.h1, glyph: p.glyph, tagline: p.tagline }));

  return (
    <>
      <JsonLd
        data={[
          faqPageLd(page.faqs),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Sleep Sounds", path: "/sounds/" },
            { name: page.h1, path: `/sounds/${page.slug}/` },
          ]),
        ]}
      />
      <Nav />
      <LandingPage page={page} hub={{ label: "Sleep Sounds", path: "/sounds" }} siblings={siblings} />
      <Footer />
    </>
  );
}
