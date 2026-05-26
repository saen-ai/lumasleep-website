import { SITE } from "@/lib/site";
import { AppleIcon } from "./icons";

// Crescent-moon mark with a soft amber glow — the website's logo lockup.
export function Logo({ withWord = true }: { withWord?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <span
        aria-hidden="true"
        style={{
          position: "relative",
          width: 30,
          height: 30,
          borderRadius: 10,
          display: "grid",
          placeItems: "center",
          background: "linear-gradient(150deg, #1e2545, #0b0f1e)",
          boxShadow: "0 0 18px rgba(232,168,56,0.35), inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 14.5A8 8 0 1 1 9.5 4a6.3 6.3 0 0 0 10.5 10.5Z"
            fill="#e8a838"
          />
        </svg>
      </span>
      {withWord && (
        <span style={{ fontWeight: 600, fontSize: "1.12rem", letterSpacing: "-0.01em" }}>
          {SITE.name}
        </span>
      )}
    </span>
  );
}

function StoreBadge({
  href,
  icon,
  top,
  bottom,
}: {
  href: string;
  icon: React.ReactNode;
  top: string;
  bottom: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="store-badge glass"
      aria-label={`${top} ${bottom}`}
    >
      <span className="store-badge__icon">{icon}</span>
      <span className="store-badge__text">
        <span className="store-badge__top">{top}</span>
        <span className="store-badge__bottom">{bottom}</span>
      </span>
    </a>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`store-row ${className}`}>
      <StoreBadge
        href={SITE.appStoreUrl}
        icon={<AppleIcon width={22} height={22} />}
        top="Download on the"
        bottom="App Store"
      />
    </div>
  );
}
