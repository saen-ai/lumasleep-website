import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { ArrowRightIcon } from "../icons";
import { getAllUseCases } from "@/lib/sounds";

// Links the /sounds-for use-case silo from the homepage (highest-authority
// page) — helps those pages get crawled and indexed faster.
export function UseCases() {
  const cases = getAllUseCases();
  return (
    <section id="use-cases" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="By Use Case"
          title="Sounds for your goal"
          blurb="Focus, studying, ADHD, anxiety, relaxation or work — jump straight to the sounds that match what you need tonight."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 80}>
              <a href={`/sounds-for/${c.slug}/`} className="group block h-full">
                <article className="glass flex h-full items-center gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-2xl" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }} aria-hidden>
                    {c.glyph}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-[1.02rem] leading-tight">{c.h1}</span>
                    <span className="block truncate text-[0.8rem] text-cedar">{c.tagline}</span>
                  </span>
                  <ArrowRightIcon
                    width={16}
                    height={16}
                    className="shrink-0 text-cedar transition-transform duration-300 group-hover:translate-x-1 group-hover:text-amber"
                  />
                </article>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 text-center">
            <a href="/sounds-for/" className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-amber">
              Browse all use cases <ArrowRightIcon width={16} height={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
