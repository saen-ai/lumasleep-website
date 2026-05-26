import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Reveal } from "./Reveal";

// Shared chrome for the privacy / terms / support pages.
export function LegalShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b py-16 text-center sm:py-20" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="shell">
            <Reveal>
              <h1 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-medium tracking-[-0.01em]">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-3 text-cedar">{subtitle}</p>
            </Reveal>
          </div>
        </header>

        <div className="shell">
          <article className="prose-legal mx-auto max-w-3xl py-14">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}
