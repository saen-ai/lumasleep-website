import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HubPage } from "@/components/HubPage";
import { JsonLd } from "@/components/JsonLd";
import { getAllUseCases } from "@/lib/sounds";
import { abs, itemListLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sounds for Focus, Sleep, Anxiety & More",
  description:
    "Find the right sounds for your goal — focus, studying, ADHD, anxiety, relaxation and work. Curated soundscapes and noise to match what you need, free with LumaSleep.",
  keywords: ["sounds for focus", "sounds for anxiety", "sounds for adhd", "sounds for studying", "sounds for relaxation"],
  alternates: { canonical: abs("/sounds-for/") },
};

export default function UseCasesHub() {
  const pages = getAllUseCases();
  return (
    <>
      <JsonLd
        data={[
          itemListLd(pages.map((p) => ({ name: p.h1, path: `/sounds-for/${p.slug}/` }))),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Use Cases", path: "/sounds-for/" },
          ]),
        ]}
      />
      <Nav />
      <HubPage
        eyebrow="By Use Case"
        title="Sounds for whatever you need"
        blurb="Focus, studying, ADHD, anxiety, relaxation or work — find the sounds that match your goal, each with the right mix to get you there."
        basePath="/sounds-for"
        pages={pages}
      />
      <Footer />
    </>
  );
}
