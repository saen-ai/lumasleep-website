// Central source of truth for site content. Pulled from the LumaSleep app
// (lib/data, lib/models, lib/features) so the site stays faithful to the product.

export const SITE = {
  name: "LumaSleep",
  tagline: "Better sleep starts with the right sounds",
  // SEO title for the homepage (keyword-targeted, ~58 chars).
  seoTitle: "LumaSleep — AI Sleep Sounds, Soundscapes & Sleep Tracking",
  description:
    "A sleep sounds app with 70+ ambient sounds, AI-generated soundscapes, white noise, sleep tracking and a creative community — your calm bedtime companion.",
  email: "support@lumasleep.ai",
  url: "https://www.lumasleep.ai",
  // Editorial byline for blog articles (honest team attribution — no
  // fabricated person or credentials, which matters for health-adjacent content).
  authorName: "The LumaSleep Team",
  appStoreUrl: "https://apps.apple.com/app/luma-sleep/id6759291710",
} as const;

// Section anchors are prefixed with "/" so they work from any page (blog,
// legal) — not just the homepage.
export const NAV_LINKS = [
  { label: "Sounds", href: "/sounds/" },
  { label: "Noise", href: "/noise/" },
  { label: "AI Studio", href: "/#studio" },
  { label: "Sleep", href: "/#sleep" },
  { label: "Blog", href: "/blog/" },
] as const;

// The six pillars shown on the home screen of the app.
export const FEATURES = [
  {
    icon: "library",
    title: "Sound Library",
    body: "70+ curated ambient sounds across 16 categories — rain, ocean, fire, ASMR, classical and beyond. Swap variants to find your perfect match.",
  },
  {
    icon: "sparkles",
    title: "AI Sound Studio",
    body: "Describe any soundscape in plain words and our AI conjures a unique 30-second sound, ready to play and save to your library.",
  },
  {
    icon: "users",
    title: "Community",
    body: "Share your AI creations, explore sounds from fellow dreamers by mood, save favourites, and build your own creator profile.",
  },
  {
    icon: "moon",
    title: "Sleep Tracking",
    body: "Sync with Apple Health or Health Connect for a nightly sleep score, stage breakdown, weekly trends and gentle insights.",
  },
  {
    icon: "timer",
    title: "Sleep Timer",
    body: "Set a countdown that softly fades your sounds out, so playback never runs all night long.",
  },
  {
    icon: "bell",
    title: "Bedtime Reminders",
    body: "A gentle nightly nudge at your chosen time helps you wind down and build a routine that sticks.",
  },
] as const;

// All 16 SoundCategory values from lib/models/sound.dart.
export const CATEGORIES = [
  { label: "Nature", glyph: "🌲" },
  { label: "Meditative", glyph: "🧘" },
  { label: "Focus Music", glyph: "🧠" },
  { label: "Classical", glyph: "🎼" },
  { label: "Relaxing", glyph: "💗" },
  { label: "Fire", glyph: "🔥" },
  { label: "Ambient", glyph: "🌌" },
  { label: "Noise", glyph: "📻" },
  { label: "ASMR", glyph: "👂" },
  { label: "Water", glyph: "💧" },
  { label: "Weather", glyph: "🌦️" },
  { label: "Spaces", glyph: "🏠" },
  { label: "Baby & Sleep", glyph: "🍼" },
  { label: "Electronic", glyph: "💿" },
  { label: "AI Generated", glyph: "✨" },
  { label: "Community", glyph: "🌟" },
] as const;

// Mood tags from the Community feed (models/community/mood_tag.dart).
export const MOODS = [
  { label: "Rain", glyph: "🌧" },
  { label: "Ocean", glyph: "🌊" },
  { label: "Calm", glyph: "🌙" },
  { label: "Deep Sleep", glyph: "💤" },
  { label: "Focus", glyph: "🎯" },
] as const;

// The natural-language prompt used in the in-app AI demo.
export const DEMO_PROMPT =
  "A warm fireplace crackling softly in a cozy mountain cabin while snow falls outside and a gentle wind whispers through pine trees";

export const FAQS = [
  {
    q: "What is LumaSleep?",
    a: "LumaSleep helps you sleep better with calming ambient sounds, AI-generated soundscapes, smart sleep tracking, and bedtime reminders. Browse the Sounds tab to explore categories like rain, nature, fire and more, then tap any sound to start playing instantly.",
  },
  {
    q: "How does AI sound generation work?",
    a: "Open the AI Studio and describe the sound you'd like to hear — for example, “gentle rain on a cabin roof with distant thunder.” Our AI generates a unique soundscape from your description, plays it instantly, and saves it to your library for anytime replay.",
  },
  {
    q: "What is the Community?",
    a: "The Community lets you share your AI creations with other dreamers and discover theirs. Browse by mood, save the sounds you love, follow creators, and shape your own profile with a cosmic avatar and handle.",
  },
  {
    q: "How do I connect sleep tracking?",
    a: "Head to Settings and tap “Sleep Tracker.” On iOS, LumaSleep connects to Apple Health; on Android, to Health Connect. You grant permission to read your sleep data — LumaSleep only ever reads it, never writes to it.",
  },
  {
    q: "What does the sleep score mean?",
    a: "Your daily sleep score (0–100) is calculated from sleep duration, efficiency, deep-sleep percentage, REM percentage, and wake disruptions. A score of 80+ indicates excellent sleep quality.",
  },
  {
    q: "Is LumaSleep a medical device?",
    a: "No. LumaSleep is a wellness app, not a medical device. Sleep scores, stage breakdowns, and insights are for informational purposes only and shouldn't replace professional medical advice. If you have concerns about your sleep, please consult a healthcare professional.",
  },
  {
    q: "How do I manage my subscription?",
    a: "Premium unlocks the full sound library, unlimited AI generation, community publishing, and full sleep analytics. You can manage or cancel anytime in your device's subscription settings — on iOS via Settings › Apple ID › Subscriptions, on Android via Google Play › Subscriptions.",
  },
] as const;
