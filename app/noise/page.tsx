import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HubPage } from "@/components/HubPage";
import { JsonLd } from "@/components/JsonLd";
import { getAllNoise } from "@/lib/sounds";
import { abs, itemListLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "White, Pink, Brown & Green Noise for Sleep",
  description:
    "Compare the noise colours for sleep — white, pink, brown and green noise. Find the right one to mask distractions and fall asleep, free in the LumaSleep app.",
  keywords: ["white noise", "brown noise", "pink noise for sleep", "green noise sleep sounds", "noise for sleep"],
  alternates: { canonical: abs("/noise/") },
};

export default function NoiseHub() {
  const pages = getAllNoise();
  return (
    <>
      <JsonLd
        data={[
          itemListLd(pages.map((p) => ({ name: p.h1, path: `/noise/${p.slug}/` }))),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Noise Colours", path: "/noise/" },
          ]),
        ]}
      />
      <Nav />
      <HubPage
        eyebrow="Noise Colours"
        title="Find your noise colour"
        blurb="White, pink, brown and green noise each mask sound differently. Compare them and discover which one sends you off fastest — all free in LumaSleep."
        basePath="/noise"
        pages={pages}
      />
      <Footer />
    </>
  );
}
