import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { PromoVideo } from "../PromoVideo";

/* Product film. Plays only while on screen (see PromoVideo) so it never
   decodes off-screen; muted + playsInline so mobile browsers allow autoplay,
   poster keeps the frame painted before the video streams in. */
export function Promo() {
  return (
    <section id="promo" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="See it in action"
          title={
            <>
              From a few words to a{" "}
              <span className="aurora-text italic">perfect night</span>
            </>
          }
          blurb="Watch a sound come to life — described, generated, and playing in under a minute."
        />

        <Reveal delay={200}>
          <div className="relative mx-auto mt-12 max-w-4xl">
            {/* Aurora glow behind the frame */}
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(108,99,255,0.35), rgba(232,168,56,0.14) 45%, transparent 70%)",
              }}
            />
            <div className="glass overflow-hidden rounded-3xl p-2">
              <PromoVideo />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
