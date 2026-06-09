import { Reveal } from "../Reveal";
import { Wave } from "../ui";
import { SparklesIcon, ArrowRightIcon, PlayIcon, CheckIcon } from "../icons";
import { DEMO_PROMPT } from "@/lib/site";

export function Studio() {
  return (
    <section id="studio" className="py-20 sm:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">AI Sound Studio</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.01em]">
              Describe a dream.
              <br />
              <span className="aurora-text italic">Hear it</span> moments later.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-cedar">
              Type any soundscape you can imagine and LumaSleep's AI composes a
              unique 30-second sound — playing instantly and saved to your library.
              No two nights have to sound the same.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-col gap-3.5">
              {[
                "Natural-language prompts — no presets, no limits to your imagination",
                "Plays automatically, then lives in your personal library",
                "Share your favourites straight to the Community",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.98rem] text-linen/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sage/15 text-sage">
                    <CheckIcon width={13} height={13} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <a href="/ai-sleep-sounds/" className="mt-7 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-amber">
              How AI sleep sounds work <ArrowRightIcon width={16} height={16} />
            </a>
          </Reveal>
        </div>

        {/* Visual: prompt -> generated sound */}
        <Reveal delay={160}>
          <div className="glass rounded-3xl p-6 sm:p-7">
            <div className="flex items-center gap-2 text-[0.78rem] text-cedar">
              <SparklesIcon width={15} height={15} className="text-violet" />
              Sound Studio
            </div>

            {/* Prompt field */}
            <div
              className="mt-4 rounded-2xl p-4 text-[0.95rem] leading-relaxed text-linen/90"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              “{DEMO_PROMPT}”
              <span className="ml-0.5 inline-block h-4 w-0.5 translate-y-0.5 bg-amber" style={{ animation: "breathe 1.2s steps(2) infinite" }} />
            </div>

            <button
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl py-3 text-[0.95rem] font-semibold text-void"
              style={{ background: "linear-gradient(120deg,#f3c06a,#e8a838 55%,#d98f2a)" }}
              type="button"
            >
              Generate sound <ArrowRightIcon width={17} height={17} />
            </button>

            {/* Result card */}
            <div
              className="mt-5 flex items-center gap-4 rounded-2xl p-4"
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
                <p className="truncate font-display text-base">Cabin Snowfall</p>
                <Wave bars={26} className="mt-2 !h-6" />
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-black/25 px-2.5 py-1 text-[0.6rem] font-medium text-linen/90">
                <SparklesIcon width={11} height={11} /> AI
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
