import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { HeartIcon, BookmarkIcon, PlayIcon } from "../icons";
import { MOODS } from "@/lib/site";

// Procedural cosmic-gradient avatar, like the app's ds_cosmic_avatar.
function CosmicAvatar({ from, to, size = 38 }: { from: string; to: string; size?: number }) {
  return (
    <span
      aria-hidden
      className="inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 25%, ${from}, ${to})`,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.18)",
      }}
    />
  );
}

const FEED = [
  {
    title: "Rain on a Tin Roof",
    handle: "Quiet Bay",
    moods: ["Rain", "Calm"],
    from: "#6c63ff",
    to: "#0b0f1e",
    used: true,
  },
  {
    title: "Tide Under Moonlight",
    handle: "Drift Mountain",
    moods: ["Ocean", "Deep Sleep"],
    from: "#4a6cf7",
    to: "#121a34",
    used: false,
  },
  {
    title: "Embers & Pine",
    handle: "Amber Hollow",
    moods: ["Calm", "Focus"],
    from: "#e040fb",
    to: "#1e2545",
    used: true,
  },
];

export function Community() {
  return (
    <section id="community" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Community"
          title={
            <>
              Sounds from real
              <br className="hidden sm:block" /> dreamers, for real nights
            </>
          }
          blurb="Publish your AI creations, explore the feed by mood, save the ones you love, and grow your own creator profile with a cosmic avatar."
        />

        {/* Mood filter row */}
        <Reveal className="mt-10 flex flex-wrap justify-center gap-2.5">
          {MOODS.map((m) => (
            <span key={m.label} className="chip">
              <span aria-hidden>{m.glyph}</span> {m.label}
            </span>
          ))}
        </Reveal>

        {/* Feed cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEED.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <article className="glass h-full rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <CosmicAvatar from={item.from} to={item.to} />
                  <div className="min-w-0">
                    <p className="truncate text-[0.95rem] font-medium text-linen">{item.handle}</p>
                    <p className="text-[0.72rem] text-cedar">Creator</p>
                  </div>
                  <span
                    className="ml-auto grid h-10 w-10 place-items-center rounded-full text-void"
                    style={{ background: "linear-gradient(150deg,#f3c06a,#e8a838)" }}
                  >
                    <PlayIcon width={16} height={16} />
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg">{item.title}</h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.moods.map((mood) => (
                    <span
                      key={mood}
                      className="rounded-full px-2.5 py-0.5 text-[0.7rem] text-linen/80"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                    >
                      {mood}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 border-t pt-3.5 text-cedar" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <span className="inline-flex items-center gap-1.5 text-[0.8rem]">
                    <HeartIcon width={15} height={15} /> Resonate
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[0.8rem]">
                    <BookmarkIcon width={15} height={15} /> Save
                  </span>
                  {item.used && (
                    <span className="ml-auto text-[0.72rem] text-sage">Often used in sleep</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
