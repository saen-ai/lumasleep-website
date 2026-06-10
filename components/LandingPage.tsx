import { Reveal } from "./Reveal";
import { StoreButtons } from "./Brand";
import { Wave } from "./ui";
import { ChevronDownIcon, ArrowRightIcon, PlayIcon } from "./icons";
import type { Landing } from "@/lib/sounds";

// Renders one keyword-targeted landing page (sound type or noise colour).
// Nav/Footer and JSON-LD are supplied by the route; this is the <main>.
export function LandingPage({
  page,
  hub,
  siblings,
  relatedLabel = "Related sounds",
}: {
  page: Landing;
  // The silo this page belongs to, for the breadcrumb + back link.
  hub: { label: string; path: string };
  // Resolved sibling pages for the "related" cross-links.
  siblings: { slug: string; h1: string; glyph: string; tagline: string }[];
  // Heading for the related-pages grid (e.g. "Related use cases").
  relatedLabel?: string;
}) {
  const base = hub.path; // e.g. "/sounds" or "/noise"

  return (
    <main>
      <article className="shell">
        <div className="mx-auto max-w-3xl pt-14 pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-[0.8rem] text-cedar">
            <a href="/" className="hover:text-linen">Home</a>
            <span className="px-1.5">/</span>
            <a href={`${base}/`} className="hover:text-linen">{hub.label}</a>
          </nav>

          {/* Header */}
          <Reveal>
            <span className="mt-6 inline-flex items-center gap-2 text-4xl" aria-hidden>
              {page.glyph}
            </span>
            <h1 className="mt-3 font-display text-[clamp(2rem,4.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.01em]">
              {page.h1}
            </h1>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-[1.08rem] leading-relaxed text-cedar">{page.intro}</p>
          </Reveal>

          {/* In-app preview card */}
          <Reveal delay={150}>
            <div
              className="mt-9 flex items-center gap-4 rounded-2xl p-4 sm:p-5"
              style={{
                background: "linear-gradient(120deg, rgba(108,99,255,0.18), rgba(224,64,251,0.12))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-void"
                style={{ background: "linear-gradient(150deg,#f3c06a,#e8a838)" }}
              >
                <PlayIcon width={20} height={20} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-display text-base">{page.h1}</p>
                <Wave bars={26} className="mt-2 !h-6" />
              </div>
              <span className="shrink-0 rounded-full bg-black/25 px-2.5 py-1 text-[0.62rem] font-medium text-linen/90">
                Sleep timer
              </span>
            </div>
          </Reveal>

          {/* Body sections */}
          <div className="prose mt-10">
            {page.sections.map((section) => (
              <Reveal key={section.h2}>
                <h2>{section.h2}</h2>
                {section.paras.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="font-display text-2xl">Frequently asked</h2>
            <div className="mt-4">
              {page.faqs.map((item) => (
                <Reveal key={item.q}>
                  <details className="group border-b" style={{ borderColor: "rgba(255,255,255,0.09)" }}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1rem] font-medium text-linen [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <ChevronDownIcon
                        width={19}
                        height={19}
                        className="shrink-0 text-cedar transition-transform duration-300 group-open:rotate-180"
                      />
                    </summary>
                    <p className="pb-4 pr-8 text-[0.95rem] leading-relaxed text-cedar">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div
            className="mt-12 rounded-3xl p-7 text-center sm:p-9"
            style={{
              background:
                "radial-gradient(120% 140% at 50% -30%, rgba(108,99,255,0.3), transparent 60%), linear-gradient(160deg, rgba(30,37,69,0.7), rgba(11,15,30,0.7))",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h2 className="font-display text-2xl">Try {page.h1.toLowerCase()} tonight</h2>
            <p className="mx-auto mt-2 max-w-md text-cedar">
              70+ sounds, AI-generated soundscapes, sound mixing, a sleep timer and sleep
              tracking — all in one calm app.
            </p>
            <div className="mt-6 flex justify-center">
              <StoreButtons />
            </div>
          </div>

          {/* Related */}
          {siblings.length > 0 && (
            <div className="mt-12">
              <h2 className="font-display text-xl">{relatedLabel}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {siblings.map((s) => (
                  <a
                    key={s.slug}
                    href={`${base}/${s.slug}/`}
                    className="glass flex items-center gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-2xl" aria-hidden>{s.glyph}</span>
                    <span className="min-w-0">
                      <span className="block truncate font-display text-[0.98rem]">{s.h1}</span>
                      <span className="block truncate text-[0.78rem] text-cedar">{s.tagline}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Read more / back */}
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.9rem]">
            {page.relatedPost && (
              <a href={`/blog/${page.relatedPost}/`} className="inline-flex items-center gap-1.5 text-amber">
                Read the guide <ArrowRightIcon width={16} height={16} />
              </a>
            )}
            <a href={`${base}/`} className="inline-flex items-center gap-1.5 text-cedar hover:text-linen">
              <ArrowRightIcon width={16} height={16} className="rotate-180" />
              All {hub.label.toLowerCase()}
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
