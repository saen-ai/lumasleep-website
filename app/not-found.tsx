import type { Metadata } from "next";
import { Logo } from "@/components/Brand";
import { MoonIcon, ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <a href="/" aria-label="LumaSleep home" className="absolute left-1/2 top-8 -translate-x-1/2">
        <Logo />
      </a>

      <span
        aria-hidden
        className="grid h-16 w-16 place-items-center rounded-2xl text-amber"
        style={{
          background: "rgba(232,168,56,0.12)",
          border: "1px solid rgba(232,168,56,0.25)",
          animation: "breathe 5s ease-in-out infinite",
        }}
      >
        <MoonIcon width={30} height={30} />
      </span>

      <h1 className="mt-8 font-display text-[clamp(3.5rem,12vw,6rem)] font-medium leading-none aurora-text">
        404
      </h1>
      <p className="mt-4 font-display text-2xl text-linen">Lost in the dark</p>
      <p className="mx-auto mt-3 max-w-sm text-cedar">
        This page drifted off somewhere. Let&apos;s get you back to a calmer place.
      </p>

      <a
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-6 py-3 font-semibold text-void transition-transform duration-300 hover:-translate-y-0.5"
        style={{ boxShadow: "0 14px 38px -16px rgba(232,168,56,0.8)" }}
      >
        Back home <ArrowRightIcon width={18} height={18} />
      </a>
    </main>
  );
}
