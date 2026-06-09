import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { StoreButtons } from "@/components/Brand";
import { Wave } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { ChevronDownIcon, ArrowRightIcon, PlayIcon, CheckIcon, SparklesIcon } from "@/components/icons";
import { abs, faqPageLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Noise Generator — Make Your Own Background Noise",
  description:
    "A noise generator and sound maker for sleep. Mix white, brown, rain and fan sounds — or create custom background noise with AI. Free in the LumaSleep app.",
  keywords: [
    "noise generator",
    "background noise",
    "noise creator",
    "sound maker for sleep",
    "custom white noise generator",
    "sleep noise generator",
  ],
  alternates: { canonical: abs("/noise-generator/") },
  openGraph: {
    type: "website",
    title: "Sleep Noise Generator — Make Your Own Background Noise",
    description:
      "Mix white, brown, rain and fan sounds — or generate custom background noise with AI. Free in the LumaSleep app.",
    url: abs("/noise-generator/"),
  },
};

const FAQS = [
  {
    q: "What is a noise generator?",
    a: "A noise generator creates continuous background sound — like white, pink or brown noise — that masks distractions so you can fall asleep, focus, or relax. LumaSleep is a noise generator you carry in your pocket: pick a sound, set the volume, and play it on a timer or all night.",
  },
  {
    q: "Can I make my own custom noise?",
    a: "Yes. You can layer several sounds together — for example brown noise plus rain plus a fan — and set each one's volume to build your own custom background noise. You can also describe a soundscape in plain words and let the AI generate a brand-new sound for you.",
  },
  {
    q: "Is the noise generator free?",
    a: "LumaSleep is free to download and includes noise and ambient sounds. Premium unlocks the full library, sound mixing, and unlimited AI sound generation.",
  },
  {
    q: "Does it work without internet?",
    a: "Browsing and AI generation need a connection, but you can keep a chosen sound playing reliably through the night with the sleep timer.",
  },
];

const MIXER = [
  { label: "Brown noise", level: 70, color: "#a16207" },
  { label: "Rain on a roof", level: 55, color: "#4a6cf7" },
  { label: "Box fan", level: 40, color: "#6c63ff" },
];

export default function NoiseGeneratorPage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageLd(FAQS),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Noise Generator", path: "/noise-generator/" },
          ]),
        ]}
      />
      <Nav />
      <main>
        {/* Hero */}
        <section className="shell pt-14 pb-16 sm:pt-20">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="eyebrow">Noise Generator</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.01em]">
                  Build your own
                  <br />
                  <span className="aurora-text italic">background noise</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-lg text-[1.08rem] leading-relaxed text-cedar">
                  LumaSleep is a sound maker for sleep that fits in your pocket. Pick a noise,
                  layer in rain or a fan, and dial each one to taste — or let AI generate a
                  custom soundscape from a sentence. Then play it on a timer or all night long.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <StoreButtons />
                </div>
              </Reveal>
            </div>

            {/* Mixer mock */}
            <Reveal delay={160}>
              <div className="glass rounded-3xl p-6 sm:p-7">
                <div className="flex items-center justify-between text-[0.78rem] text-cedar">
                  <span>Your mix</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" /> Playing
                  </span>
                </div>
                <div className="mt-5 flex flex-col gap-5">
                  {MIXER.map((track) => (
                    <div key={track.label}>
                      <div className="flex items-center justify-between text-[0.9rem] text-linen/90">
                        <span>{track.label}</span>
                        <span className="text-cedar">{track.level}%</span>
                      </div>
                      <div className="mt-2 h-2 w-full overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                        <div className="h-full rounded-full" style={{ width: `${track.level}%`, background: track.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-6 flex items-center gap-4 rounded-2xl p-4"
                  style={{ background: "linear-gradient(120deg, rgba(108,99,255,0.18), rgba(224,64,251,0.12))", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-void" style={{ background: "linear-gradient(150deg,#f3c06a,#e8a838)" }}>
                    <PlayIcon width={18} height={18} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-[0.98rem]">My night mix</p>
                    <Wave bars={24} className="mt-2 !h-5" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section className="shell py-16">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-medium tracking-[-0.01em]">
                Three ways to generate your sound
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                { n: "1", t: "Pick a noise", d: "Start from white, pink, brown or green noise — the classic generator sounds for masking distractions." },
                { n: "2", t: "Layer & mix", d: "Add rain, a fan, fire or ocean over the top and set each volume to build custom background noise." },
                { n: "3", t: "Generate with AI", d: "Or describe a soundscape in words and let the AI create a brand-new sound, saved to your library." },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 90}>
                  <div className="glass h-full rounded-2xl p-6">
                    <span className="grid h-9 w-9 place-items-center rounded-full font-display text-amber" style={{ background: "rgba(232,168,56,0.12)", border: "1px solid rgba(232,168,56,0.25)" }}>
                      {step.n}
                    </span>
                    <h3 className="mt-4 font-display text-lg">{step.t}</h3>
                    <p className="mt-2 text-[0.92rem] leading-relaxed text-cedar">{step.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What you can make */}
        <section className="shell py-12">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-medium tracking-[-0.01em]">
                A custom white noise generator and more
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-cedar">
                Most noise generators give you a handful of fixed tracks. LumaSleep gives you a
                full sound maker: combine coloured noise with real-world textures, save your
                favourite mixes, and fall back on the timer so nothing runs longer than you want.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {[
                  "White, pink, brown & green noise",
                  "Layer rain, fan, fire, ocean and more",
                  "Per-sound volume for a custom mix",
                  "AI-generated soundscapes from text",
                  "Sleep timer with a gentle fade-out",
                  "Plays in the background, all night",
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
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/noise/" className="chip">Explore noise colours →</a>
                <a href="/sounds/" className="chip">Browse all sleep sounds →</a>
                <a href="/ai-sleep-sounds/" className="chip"><SparklesIcon width={14} height={14} className="text-violet" /> AI sleep sounds →</a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="shell py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl">Frequently asked</h2>
            <div className="mt-4">
              {FAQS.map((item) => (
                <Reveal key={item.q}>
                  <details className="group border-b" style={{ borderColor: "rgba(255,255,255,0.09)" }}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1rem] font-medium text-linen [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <ChevronDownIcon width={19} height={19} className="shrink-0 text-cedar transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <p className="pb-4 pr-8 text-[0.95rem] leading-relaxed text-cedar">{item.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="shell pb-20">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div
                className="rounded-3xl p-8 text-center sm:p-10"
                style={{
                  background: "radial-gradient(120% 130% at 50% -30%, rgba(108,99,255,0.3), transparent 60%), linear-gradient(160deg, rgba(30,37,69,0.7), rgba(11,15,30,0.7))",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h2 className="font-display text-2xl">Make your perfect sleep sound</h2>
                <p className="mx-auto mt-2 max-w-md text-cedar">
                  Download LumaSleep and build background noise that is truly yours.
                </p>
                <div className="mt-6 flex justify-center">
                  <StoreButtons />
                </div>
                <a href="/sounds/" className="mt-6 inline-flex items-center gap-1.5 text-[0.9rem] text-amber">
                  Or browse ready-made sounds <ArrowRightIcon width={16} height={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
