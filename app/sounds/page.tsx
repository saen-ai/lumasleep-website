import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HubPage } from "@/components/HubPage";
import { JsonLd } from "@/components/JsonLd";
import { getAllSounds } from "@/lib/sounds";
import { abs, itemListLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Sounds — 70+ Sounds to Help You Sleep",
  description:
    "Browse LumaSleep's sleep sounds — rain, ocean, fan, thunderstorm, fire and more. Find the perfect sounds to help you sleep, with a sleep timer and mixing.",
  keywords: ["sleep sounds", "sounds to help you sleep", "sounds for sleeping", "bedtime sounds"],
  alternates: { canonical: abs("/sounds/") },
};

export default function SoundsHub() {
  const pages = getAllSounds();
  return (
    <>
      <JsonLd
        data={[
          itemListLd(pages.map((p) => ({ name: p.h1, path: `/sounds/${p.slug}/` }))),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Sleep Sounds", path: "/sounds/" },
          ]),
        ]}
      />
      <Nav />
      <HubPage
        eyebrow="Sound Library"
        title="Sleep sounds for every night"
        blurb="From rain and ocean to fan, thunderstorm and fire — explore the sounds to help you sleep, each with multiple variants, mixing and a sleep timer."
        basePath="/sounds"
        pages={pages}
      />
      <Footer />
    </>
  );
}
