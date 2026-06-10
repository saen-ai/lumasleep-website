import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { StoreButtons } from "@/components/Brand";
import { Wave } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { ChevronDownIcon, ArrowRightIcon, PlayIcon, CheckIcon } from "@/components/icons";
import { abs, faqPageLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Sound Machine — Free Sound Machine App",
  description:
    "LumaSleep is a sleep sound machine in your pocket — white noise, rain, fan and ocean with a sleep timer and mixing. The sound machine for sleep that travels with you.",
  keywords: [
    "sound machine for sleep",
    "sleep sound machine",
    "sound machines for sleeping",
    "best sound machine for sleep",
    "rain sound machine",
    "white noise sound machine",
    "sound machine app",
  ],
  alternates: { canonical: abs("/sound-machine/") },
  openGraph: {
    type: "website",
    title: "Sleep Sound Machine — Free Sound Machine App",
    description:
      "A sleep sound machine in your pocket — white noise, rain, fan and ocean with a timer and mixing. Free with LumaSleep.",
    url: abs("/sound-machine/"),
  },
};

const FAQS = [
  {
    q: "What is a sleep sound machine?",
    a: "A sleep sound machine plays steady, soothing sound — white noise, rain, a fan, ocean waves — to mask disruptions and help you fall asleep and stay asleep. LumaSleep is a sound machine in app form: the same calming sounds, plus mixing, a sleep timer, and the freedom to take it anywhere.",
  },
  {
    q: "Do sleep sound machines work?",
    a: "Yes. A consistent background sound masks the sudden noises — traffic, a snoring partner, a creaky house — that pull you out of light sleep, and gives a racing mind something neutral to settle on. Used nightly it also becomes a cue that tells your brain it's time to rest.",
  },
  {
    q: "Are sound machines bad for sleep?",
    a: "For most adults they're safe and helpful. The only real caution is volume: keep it moderate — around the level of a soft shower — and a few feet from your head. LumaSleep's fade-out timer also lets the sound switch off once you're asleep if you prefer.",
  },
  {
    q: "Is a sound machine app as good as a physical machine?",
    a: "Often better. You get far more sounds, the ability to layer and save your own mixes, a sleep timer, and it travels with you to hotels, flights, and a partner's place — without buying extra hardware. The one tip: plug your phone in overnight.",
  },
  {
    q: "What's the best sound machine for sleep?",
    a: "The best one is whichever sound you stop noticing fastest. LumaSleep lets you compare white, pink, brown and green noise plus rain, fan, ocean and fire in a single app, so you can find your match instead of being stuck with a machine's fixed sounds.",
  },
];

const SOUNDS = [
  { label: "White noise", href: "/noise/white-noise/" },
  { label: "Brown noise", href: "/noise/brown-noise/" },
  { label: "Rain", href: "/sounds/rain/" },
  { label: "Fan", href: "/sounds/fan/" },
  { label: "Ocean", href: "/sounds/ocean/" },
  { label: "Fire", href: "/sounds/fire/" },
];

export default function SoundMachinePage() {
  return (
    <>
      <JsonLd
        data={[
          faqPageLd(FAQS),
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Sound Machine", path: "/sound-machine/" },
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
                <span className="eyebrow">Sleep Sound Machine</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-[1.06] tracking-[-0.01em]">
                  Your sleep sound machine,
                  <br />
                  <span className="aurora-text italic">in your pocket</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-lg text-[1.08rem] leading-relaxed text-cedar">
                  LumaSleep does everything a sound machine for sleep does — steady white noise,
                  rain, a fan, ocean waves — then goes further with sound mixing, a fade-out sleep
                  timer, and AI-generated soundscapes. No extra hardware, and it travels with you.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex justify-center lg:justify-start">
                  <StoreButtons />
                </div>
              </Reveal>
            </div>

            {/* Player mock */}
            <Reveal delay={160}>
              <div className="glass rounded-3xl p-6 sm:p-7">
                <div className="flex items-center justify-between text-[0.78rem] text-cedar">
                  <span>Sound machine</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-sage" /> All night
                  </span>
                </div>
                <div
                  className="mt-5 flex items-center gap-4 rounded-2xl p-4"
                  style={{ background: "linear-gradient(120deg, rgba(108,99,255,0.18), rgba(224,64,251,0.12))", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full text-void" style={{ background: "linear-gradient(150deg,#f3c06a,#e8a838)" }}>
                    <PlayIcon width={20} height={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display text-base">Rain + Brown noise</p>
                    <Wave bars={26} className="mt-2 !h-6" />
                  </div>
                  <span className="shrink-0 rounded-full bg-black/25 px-2.5 py-1 text-[0.62rem] font-medium text-linen/90">
                    Timer 45m
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {SOUNDS.map((s) => (
                    <span key={s.label} className="chip">{s.label}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Why */}
        <section className="shell py-16">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] font-medium tracking-[-0.01em]">
                Everything a sound machine does — and more
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-[1.02rem] leading-relaxed text-cedar">
                Sound machines work by masking the sudden noises that fragment your sleep and
                giving your mind a steady, low-stakes sound to settle on. LumaSleep does exactly
                that — then adds the things a fixed-button machine can&apos;t.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mt-7 grid gap-3.5 sm:grid-cols-2">
                {[
                  "70+ sounds vs a handful of presets",
                  "Layer & mix several sounds into one",
                  "White, pink, brown & green noise",
                  "Fade-out sleep timer for all-night use",
                  "AI-generated soundscapes from text",
                  "Travels with you — no extra hardware",
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
                <a href="/sounds/" className="chip">Browse all sleep sounds →</a>
                <a href="/noise/" className="chip">White, pink & brown noise →</a>
                <a href="/noise-generator/" className="chip">Build your own mix →</a>
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
                <h2 className="font-display text-2xl">A sound machine that goes everywhere</h2>
                <p className="mx-auto mt-2 max-w-md text-cedar">
                  Download LumaSleep — your sleep sounds, mixer and timer in one free app.
                </p>
                <div className="mt-6 flex justify-center">
                  <StoreButtons />
                </div>
                <a href="/blog/sleeping-with-a-sound-machine/" className="mt-6 inline-flex items-center gap-1.5 text-[0.9rem] text-amber">
                  Is it OK to sleep with a sound machine every night? <ArrowRightIcon width={16} height={16} />
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
