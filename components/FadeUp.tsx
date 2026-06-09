import type { ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  /** Stagger delay in ms, applied via CSS custom property. */
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span";
};

// JS-free entrance animation for above-the-fold content. Unlike <Reveal>,
// which hides content until an IntersectionObserver fires after hydration,
// this is a pure CSS load animation — so the wrapped element (e.g. the hero
// LCP heading) paints at first render and isn't blocked on JavaScript.
export function FadeUp({ children, delay = 0, className = "", as: Tag = "div" }: FadeUpProps) {
  return (
    <Tag
      className={`fade-in-up ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
