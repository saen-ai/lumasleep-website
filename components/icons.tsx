import type { SVGProps } from "react";

// Lightweight inline icons in the Lucide stroke style the app uses
// (lucide_icons), so the site shares the app's visual language.

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function LibraryIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  );
}

export function SparklesIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3v0c.3 2.4 2.3 4.4 4.7 4.7l.3 0v0c-2.4.3-4.4 2.3-4.7 4.7l0 .3v0c-.3-2.4-2.3-4.4-4.7-4.7l-.3 0v0c2.4-.3 4.4-2.3 4.7-4.7l0-.3Z" />
      <path d="M18 14.5c.15 1.2 1.1 2.2 2.3 2.35.15 0-.05 0 0 0-1.2.15-2.15 1.15-2.3 2.35-.15-1.2-1.1-2.2-2.3-2.35 1.2-.15 2.15-1.15 2.3-2.35Z" />
      <path d="M5.5 13c.12 1 .9 1.78 1.9 1.9-1 .12-1.78.9-1.9 1.9-.12-1-.9-1.78-1.9-1.9 1-.12 1.78-.9 1.9-1.9Z" />
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function TimerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10 2h4" />
      <path d="M12 14v-4" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
}

export function BellIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M10.27 21a2 2 0 0 0 3.46 0" />
      <path d="M3.26 15.33A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.67C19.41 13.95 19 12.48 19 11a7 7 0 1 0-14 0c0 1.48-.41 2.95-1.74 4.33Z" />
    </svg>
  );
}

export function PlayIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l11-6.86a1 1 0 0 0 0-1.72l-11-6.86A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

export function BookmarkIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M17.05 12.54c-.02-2.06 1.68-3.05 1.76-3.1-.96-1.4-2.45-1.6-2.98-1.62-1.27-.13-2.48.75-3.12.75-.64 0-1.64-.73-2.7-.71-1.39.02-2.67.81-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.12 2.57 2.08 1.03-.04 1.42-.67 2.67-.67 1.24 0 1.6.67 2.69.65 1.11-.02 1.81-1.02 2.49-2.02.78-1.16 1.1-2.28 1.12-2.34-.02-.01-2.15-.82-2.17-3.26Z" />
      <path d="M15.0 6.3c.57-.69.95-1.65.85-2.6-.82.03-1.81.55-2.4 1.23-.53.61-.99 1.58-.87 2.51.91.07 1.85-.46 2.42-1.14Z" />
    </svg>
  );
}

export function GooglePlayIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M3.6 2.3a1 1 0 0 0-.6.92v17.56a1 1 0 0 0 .6.92l10.2-9.7L3.6 2.3Z" opacity="0.95" />
      <path d="m17.1 8.86-3-1.74-3.43 3.26 3.43 3.26 3.06-1.78a1.27 1.27 0 0 0 0-2.2l-.06-.04Z" />
      <path d="m4.2 2.06 9.9 5.06 2.94-2.8L6.1 1.04a1.2 1.2 0 0 0-1.9 1.02Z" opacity="0.85" />
      <path d="m4.2 21.94 12.84-7.34-2.94-2.8-9.9 5.07a1.2 1.2 0 0 0 0 5.07Z" opacity="0.75" />
    </svg>
  );
}
