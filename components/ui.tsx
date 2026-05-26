import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  blurb,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  blurb?: React.ReactNode;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.01em]">
          {title}
        </h2>
      </Reveal>
      {blurb && (
        <Reveal delay={160}>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-cedar">{blurb}</p>
        </Reveal>
      )}
    </div>
  );
}

// Animated equalizer bars — a static-friendly nod to the app's ds_wave_bars.
export function Wave({ bars = 28, className = "" }: { bars?: number; className?: string }) {
  return (
    <div className={`wave ${className}`} aria-hidden="true">
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${(i % 7) * 0.12}s`,
            animationDuration: `${1 + (i % 5) * 0.14}s`,
          }}
        />
      ))}
    </div>
  );
}
