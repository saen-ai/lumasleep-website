import { Reveal } from "../Reveal";
import { CheckIcon } from "../icons";

// Circular sleep-score orb — sage ring like the app's scoreColor for 80+.
function SleepOrb({ score = 84 }: { score?: number }) {
  const r = 52;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - score / 100);
  return (
    <div className="relative grid h-40 w-40 place-items-center">
      <svg width="160" height="160" viewBox="0 0 140 140" className="-rotate-90">
        <circle cx="70" cy="70" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
        <circle
          cx="70"
          cy="70"
          r={r}
          fill="none"
          stroke="url(#orb)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
        <defs>
          <linearGradient id="orb" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#e8a838" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className="font-display text-4xl leading-none text-linen">{score}</div>
        <div className="mt-1 text-[0.7rem] uppercase tracking-wider text-cedar">Sleep score</div>
      </div>
    </div>
  );
}

const STAGES = [
  { label: "Deep", pct: 24, color: "#6c63ff" },
  { label: "REM", pct: 22, color: "#4a6cf7" },
  { label: "Light", pct: 48, color: "#8b8aa0" },
  { label: "Awake", pct: 6, color: "#e8a838" },
];

const WEEK = [62, 71, 58, 80, 74, 88, 84];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

export function Sleep() {
  return (
    <section id="sleep" className="py-20 sm:py-28">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        {/* Dashboard visual */}
        <Reveal>
          <div className="glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
              <SleepOrb score={84} />
              <div className="flex-1">
                <div className="flex justify-between text-[0.85rem]">
                  <div>
                    <div className="font-display text-2xl text-linen">7h 42m</div>
                    <div className="text-[0.75rem] text-cedar">Time asleep</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl text-linen">14m</div>
                    <div className="text-[0.75rem] text-cedar">To fall asleep</div>
                  </div>
                </div>

                {/* Stage bar */}
                <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full">
                  {STAGES.map((s) => (
                    <span key={s.label} style={{ width: `${s.pct}%`, background: s.color }} />
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.72rem] text-cedar">
                  {STAGES.map((s) => (
                    <span key={s.label} className="inline-flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full" style={{ background: s.color }} />
                      {s.label} {s.pct}%
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Weekly trend */}
            <div className="mt-7 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
              <div className="flex justify-between gap-2" style={{ height: 116 }}>
                {WEEK.map((v, i) => (
                  <div key={i} className="flex h-full flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-1 items-end">
                      <div
                        className="w-full rounded-md"
                        style={{
                          height: `${v}%`,
                          background:
                            i === WEEK.length - 1
                              ? "linear-gradient(180deg,#4ade80,#e8a838)"
                              : "rgba(255,255,255,0.12)",
                        }}
                      />
                    </div>
                    <span className="text-[0.65rem] text-cedar">{DAYS[i]}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[0.82rem] text-cedar">
                <span className="text-sage">Insight ·</span> You slept best on nights you played rain sounds.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">Sleep Tracking</span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.01em]">
              See how your nights
              <br />
              <span className="aurora-text italic">actually</span> unfold
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-cedar">
              Connect Apple Health or Health Connect and LumaSleep turns your data
              into a nightly sleep score, a clear stage breakdown, weekly trends and
              gentle insights — so you can spot what helps you rest.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-8 flex flex-col gap-3.5">
              {[
                "A 0–100 sleep score every morning",
                "Deep, REM, light and awake stage breakdown",
                "Weekly trends that connect sounds to better sleep",
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

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="chip">Apple Health</span>
              <span className="chip">Health Connect</span>
              <span className="chip text-cedar">Read-only · never written to</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
