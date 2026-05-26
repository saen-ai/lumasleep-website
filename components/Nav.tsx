"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Brand";
import { NAV_LINKS, SITE } from "@/lib/site";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(5,8,16,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
      }}
    >
      <nav className="shell flex h-16 items-center justify-between">
        <a href="/" aria-label={SITE.name}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.9rem] text-cedar transition-colors hover:text-linen"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/#download"
            className="rounded-full bg-amber px-5 py-2.5 text-[0.9rem] font-semibold text-void transition-transform duration-300 hover:-translate-y-0.5"
            style={{ boxShadow: "0 12px 34px -14px rgba(232,168,56,0.8)" }}
          >
            Get the app
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          <span
            className="block h-0.5 w-6 rounded bg-linen transition-transform duration-300"
            style={open ? { transform: "translateY(7px) rotate(45deg)" } : undefined}
          />
          <span
            className="block h-0.5 w-6 rounded bg-linen transition-opacity duration-300"
            style={open ? { opacity: 0 } : undefined}
          />
          <span
            className="block h-0.5 w-6 rounded bg-linen transition-transform duration-300"
            style={open ? { transform: "translateY(-7px) rotate(-45deg)" } : undefined}
          />
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden"
          style={{
            background: "rgba(5,8,16,0.96)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <ul className="shell flex flex-col gap-5 py-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-linen"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/#download"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full bg-amber px-5 py-2.5 font-semibold text-void"
              >
                Get the app
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
