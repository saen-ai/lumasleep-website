import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { FEATURES } from "@/lib/site";
import {
  LibraryIcon,
  SparklesIcon,
  UsersIcon,
  MoonIcon,
  TimerIcon,
  BellIcon,
} from "../icons";

const ICONS = {
  library: LibraryIcon,
  sparkles: SparklesIcon,
  users: UsersIcon,
  moon: MoonIcon,
  timer: TimerIcon,
  bell: BellIcon,
} as const;

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Everything for better sleep"
          title={
            <>
              One calm home for your
              <br className="hidden sm:block" /> whole bedtime ritual
            </>
          }
          blurb="LumaSleep brings science-backed wind-down tools together with a design made for the dark."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => {
            const Icon = ICONS[feature.icon];
            return (
              <Reveal key={feature.title} delay={(i % 3) * 90} as="div">
                <article
                  className="group glass h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <span
                    className="grid h-12 w-12 place-items-center rounded-xl text-amber transition-colors duration-300"
                    style={{ background: "rgba(232,168,56,0.12)", border: "1px solid rgba(232,168,56,0.2)" }}
                  >
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="mt-5 font-display text-xl">{feature.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-cedar">{feature.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
