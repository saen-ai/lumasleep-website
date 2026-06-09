import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { CATEGORIES } from "@/lib/site";

function Marquee({ items, duration, reverse = false }: { items: typeof CATEGORIES[number][]; duration: number; reverse?: boolean }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div
        className="marquee__track"
        style={{
          ["--marquee-duration" as string]: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {loop.map((cat, i) => (
          <span key={`${cat.label}-${i}`} className="chip">
            <span aria-hidden>{cat.glyph}</span>
            {cat.label}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Sounds() {
  const half = Math.ceil(CATEGORIES.length / 2);
  const rowA = CATEGORIES.slice(0, half);
  const rowB = CATEGORIES.slice(half);

  return (
    <section id="sounds" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Sound Library"
          title="70+ sounds across 16 categories"
          blurb="From rain sounds and ocean waves to fire, white noise, ASMR and focus beats — every sound has multiple variants, so you can find the exact texture that sends you off."
        />
        <Reveal>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="/sounds/" className="chip">Browse all sleep sounds →</a>
            <a href="/noise/" className="chip">White, pink & brown noise →</a>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14 flex flex-col gap-4">
        <Marquee items={rowA} duration={42} />
        <Marquee items={rowB} duration={48} reverse />
      </Reveal>

      <div className="shell mt-12">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center">
            {[
              { stat: "70+", label: "Curated sounds" },
              { stat: "16", label: "Categories" },
              { stat: "∞", label: "Sound mixes" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl text-linen">{s.stat}</div>
                <div className="mt-1 text-[0.85rem] uppercase tracking-wider text-cedar">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
