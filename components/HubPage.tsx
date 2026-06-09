import { Reveal } from "./Reveal";
import { StoreButtons } from "./Brand";
import { ArrowRightIcon } from "./icons";
import type { Landing } from "@/lib/sounds";

// Hub / index for a silo (/sounds/ or /noise/). Links to every spoke so the
// cluster gets sitewide internal links and crawl depth stays shallow.
export function HubPage({
  eyebrow,
  title,
  blurb,
  basePath,
  pages,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  basePath: string; // "/sounds" | "/noise"
  pages: Landing[];
}) {
  return (
    <main>
      <header className="border-b py-16 text-center sm:py-20" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="shell">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.2rem)] font-medium tracking-[-0.01em]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-4 max-w-xl text-cedar">{blurb}</p>
          </Reveal>
        </div>
      </header>

      <div className="shell">
        <div className="mx-auto grid max-w-4xl gap-5 py-14 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, i) => (
            <Reveal key={page.slug} delay={(i % 3) * 80}>
              <a href={`${basePath}/${page.slug}/`} className="group block h-full">
                <article className="glass flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-3xl" aria-hidden>{page.glyph}</span>
                  <h2 className="mt-4 font-display text-lg leading-snug">{page.h1}</h2>
                  <p className="mt-2 flex-1 text-[0.9rem] leading-relaxed text-cedar">{page.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-amber">
                    Explore
                    <ArrowRightIcon
                      width={15}
                      height={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </article>
              </a>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto max-w-4xl pb-16">
          <Reveal>
            <div
              className="rounded-3xl p-8 text-center sm:p-10"
              style={{
                background:
                  "radial-gradient(120% 130% at 50% -30%, rgba(108,99,255,0.3), transparent 60%), linear-gradient(160deg, rgba(30,37,69,0.7), rgba(11,15,30,0.7))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="font-display text-2xl">Every sound, one calm app</h2>
              <p className="mx-auto mt-2 max-w-md text-cedar">
                70+ curated sounds, AI-generated soundscapes, sound mixing and a sleep timer.
              </p>
              <div className="mt-6 flex justify-center">
                <StoreButtons />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
