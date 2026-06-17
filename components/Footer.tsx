import { Logo } from "./Brand";
import { SITE } from "@/lib/site";

// Sitewide footer links. Every standalone landing page lives here so it gets a
// crawlable inbound link from every page — prevents "Discovered – not indexed"
// orphans (e.g. /sound-machine/ previously had no inbound links at all).
const FOOTER_LINKS = [
  { label: "Sleep Sounds", href: "/sounds/" },
  { label: "Noise Colours", href: "/noise/" },
  { label: "Sounds for…", href: "/sounds-for/" },
  { label: "AI Sleep Sounds", href: "/ai-sleep-sounds/" },
  { label: "Noise Generator", href: "/noise-generator/" },
  { label: "Sound Machine", href: "/sound-machine/" },
  { label: "Blog", href: "/blog/" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms of Service", href: "/terms/" },
  { label: "Delete Account", href: "/delete-account/" },
  { label: "Support", href: "/support/" },
];

export function Footer() {
  return (
    <footer
      className="mt-10 border-t py-14"
      style={{ borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="shell flex flex-col items-center gap-6 text-center">
        <Logo />
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.9rem] text-cedar transition-colors hover:text-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[0.88rem] text-cedar">
          Questions?{" "}
          <a href={`mailto:${SITE.email}`} className="text-amber">
            {SITE.email}
          </a>
        </p>
        <p className="text-[0.8rem] text-cedar">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
