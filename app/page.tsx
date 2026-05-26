import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Sounds } from "@/components/sections/Sounds";
import { Studio } from "@/components/sections/Studio";
import { Community } from "@/components/sections/Community";
import { Sleep } from "@/components/sections/Sleep";
import { Faq } from "@/components/sections/Faq";
import { Download } from "@/components/sections/Download";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Sounds />
        <Studio />
        <Community />
        <Sleep />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  );
}
