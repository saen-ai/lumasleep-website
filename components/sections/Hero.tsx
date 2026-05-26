import { Reveal } from "../Reveal";
import { StoreButtons } from "../Brand";
import { PhoneMockup } from "../PhoneMockup";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[0.8rem] text-linen/90">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Your personal sleep companion
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-[clamp(2.7rem,6.6vw,4.6rem)] font-medium leading-[1.04] tracking-[-0.02em]">
              Better sleep starts
              <br />
              with the right{" "}
              <span className="aurora-text italic">sounds</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-xl text-[1.12rem] leading-relaxed text-cedar lg:mx-0">
              Drift off with a curated sound library, AI-generated soundscapes, a
              creative community, and sleep tracking that learns your nights — all
              in one calm app.
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-9 flex justify-center lg:justify-start">
              <StoreButtons />
            </div>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-5 text-[0.82rem] text-cedar/80">
              Free to download · Available on iOS &amp; Android
            </p>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={240} className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Aurora glow behind the phone */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(108,99,255,0.45), rgba(232,168,56,0.18) 45%, transparent 70%)",
                animation: "breathe 8s ease-in-out infinite",
              }}
            />
            <PhoneMockup />
          </div>
        </Reveal>
      </div>

      <span className="sr-only">{SITE.description}</span>
    </section>
  );
}
