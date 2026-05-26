import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon for "Add to Home Screen" — the moon mark on midnight.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(120% 120% at 30% 20%, #1e2545, #050810)",
        }}
      >
        <svg width="112" height="112" viewBox="0 0 24 24">
          <path d="M20 14.5A8 8 0 1 1 9.5 4a6.3 6.3 0 0 0 10.5 10.5Z" fill="#e8a838" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
