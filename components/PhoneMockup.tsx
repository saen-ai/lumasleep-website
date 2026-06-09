import { PlayIcon, MoonIcon, SparklesIcon } from "./icons";
import { Wave } from "./ui";

// A faux "Now Playing" screen rendered entirely in markup — no screenshots to
// keep the static export light and crisp at any resolution. Mirrors the app's
// glass + amber/violet now_playing aesthetic.
export function PhoneMockup() {
  return (
    <div className="phone" style={{ animation: "drift 7s ease-in-out infinite" }}>
      <div className="phone__notch" />
      <div className="phone__screen">
        <div className="flex h-full flex-col px-5 pb-6 pt-12 text-linen">
          {/* Status row */}
          <div className="flex items-center justify-between text-[0.62rem] text-cedar">
            <span>9:41</span>
            <span className="inline-flex items-center gap-1">
              <MoonIcon width={11} height={11} /> Night Shift
            </span>
          </div>

          {/* Artwork */}
          <div
            className="relative mt-5 aspect-square w-full overflow-hidden rounded-3xl"
            style={{
              background:
                "radial-gradient(120% 100% at 30% 20%, rgba(232,168,56,0.55), transparent 55%), linear-gradient(150deg, #6c63ff, #4a6cf7 45%, #e040fb)",
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0"
              style={{
                background: "radial-gradient(70% 50% at 70% 80%, rgba(5,8,16,0.45), transparent)",
              }}
            />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/30 px-2.5 py-1 text-[0.6rem] font-medium backdrop-blur">
              <SparklesIcon width={11} height={11} /> AI Generated
            </span>
            <MoonIcon
              width={70}
              height={70}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-linen/90"
              style={{ animation: "breathe 5s ease-in-out infinite" }}
            />
          </div>

          {/* Title */}
          <div className="mt-5">
            <p className="font-display text-lg leading-tight">Cabin Snowfall</p>
            <p className="text-[0.8rem] text-cedar">Mountain fireplace · 30s loop</p>
          </div>

          {/* Waveform */}
          <Wave bars={32} className="mt-4" />

          {/* Scrubber */}
          <div className="mt-4">
            <div className="h-1 w-full overflow-hidden rounded-full bg-white/12">
              <div className="h-full w-2/5 rounded-full" style={{ background: "linear-gradient(90deg,#e8a838,#6c63ff)" }} />
            </div>
            <div className="mt-1.5 flex justify-between text-[0.6rem] text-cedar">
              <span>0:12</span>
              <span>0:30</span>
            </div>
          </div>

          {/* Transport */}
          <div className="mt-auto flex items-center justify-center gap-7 pt-5">
            <span className="text-cedar text-sm">10:00</span>
            <span
              className="grid h-16 w-16 place-items-center rounded-full text-void"
              style={{
                background: "linear-gradient(150deg,#f3c06a,#e8a838)",
                boxShadow: "0 0 36px -6px rgba(232,168,56,0.85)",
              }}
            >
              <PlayIcon width={26} height={26} />
            </span>
            <span className="text-cedar text-sm">Mix</span>
          </div>
        </div>
      </div>
    </div>
  );
}
