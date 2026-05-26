import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ChevronDownIcon } from "@/components/icons";
import { SITE } from "@/lib/site";
import { abs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Help & Support",
  description: "Answers to common LumaSleep questions, and how to reach our team.",
  alternates: { canonical: abs("/support/") },
};

const GROUPS: { heading: string; items: { q: string; a: string }[] }[] = [
  {
    heading: "Getting Started",
    items: [
      {
        q: "What is LumaSleep?",
        a: "LumaSleep helps you sleep better with calming ambient sounds, AI-generated soundscapes, a creative community, smart sleep tracking, and bedtime reminders. Browse the Sounds tab to explore categories like rain, nature, fire and more, then tap any sound to start playing instantly.",
      },
      {
        q: "How do I create an account?",
        a: "When you first open LumaSleep you'll be prompted to sign in. You can create an account using your email address, Google account, or Apple ID. All your preferences, playlists, and sleep data will sync to your account.",
      },
    ],
  },
  {
    heading: "Sounds & Playback",
    items: [
      {
        q: "How many sounds are available?",
        a: "LumaSleep has 70+ curated ambient sounds across 16 categories — including Nature, Meditative, Focus Music, Classical, Relaxing, Fire, Ambient, Noise, ASMR, Water, Weather, Spaces, Baby & Sleep, Electronic, AI Generated and Community.",
      },
      {
        q: "Can I swap sound variants and mix sounds?",
        a: "Yes. Many sounds have multiple variants — tap the swap icon on a sound card to browse alternatives, and your preferred variant is remembered. You can also layer several sounds together and set each one's volume to build your own mix.",
      },
      {
        q: "How does the sleep timer work?",
        a: "Tap the timer icon in the now-playing screen to set a countdown. When the timer expires, playback gently fades out. Choose from preset durations or set a custom time.",
      },
    ],
  },
  {
    heading: "AI Sound Studio",
    items: [
      {
        q: "How does AI sound generation work?",
        a: "Open the AI Studio and describe the sound you'd like to hear — for example, “gentle rain on a cabin roof with distant thunder.” Our AI generates a unique soundscape based on your description, plays it instantly, and saves it to your library for anytime replay.",
      },
      {
        q: "Can I share what I create?",
        a: "Yes! From a generated sound you can share it to the Community with a title and mood tags. Other dreamers can then discover, play, and save your creation.",
      },
    ],
  },
  {
    heading: "Community",
    items: [
      {
        q: "What can I do in the Community?",
        a: "Browse sounds shared by other dreamers, filter the feed by mood (Rain, Ocean, Calm, Deep Sleep, Focus), save the ones you love, and explore creator profiles. You can publish your own AI creations and shape your profile with a cosmic avatar and handle.",
      },
      {
        q: "How is my content moderated?",
        a: "Shared sounds go through moderation before appearing widely in the feed. We may remove content that breaks our community guidelines to keep the space calm and welcoming.",
      },
    ],
  },
  {
    heading: "Sleep Tracking",
    items: [
      {
        q: "How do I connect sleep tracking?",
        a: "Go to Settings and tap “Sleep Tracker.” On iOS, LumaSleep connects to Apple Health; on Android, to Health Connect. You'll be asked to grant permission to read your sleep data. LumaSleep only ever reads sleep information — it never writes to your health data.",
      },
      {
        q: "What does the sleep score mean?",
        a: "Your daily sleep score (0–100) is calculated from sleep duration, sleep efficiency, deep-sleep percentage, REM-sleep percentage, and wake disruptions. A score of 80+ indicates excellent sleep quality.",
      },
      {
        q: "Is LumaSleep a medical device?",
        a: "No. LumaSleep is a wellness app, not a medical device. Sleep scores, stage breakdowns, and insights are for informational purposes only and shouldn't replace professional medical advice. If you have concerns about your sleep, please consult a healthcare professional.",
      },
    ],
  },
  {
    heading: "Bedtime Reminders",
    items: [
      {
        q: "How do I set up bedtime reminders?",
        a: "Go to Settings and tap “Bedtime Reminder.” Choose your preferred bedtime and enable the reminder. LumaSleep will send a gentle notification each night at your chosen time to help you build a consistent sleep routine.",
      },
    ],
  },
  {
    heading: "Subscription & Billing",
    items: [
      {
        q: "What's included in premium?",
        a: "Premium unlocks the full sound library, unlimited AI sound generation, community publishing, full sleep analytics and insights, and an ad-free experience.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "You can cancel anytime through your device's subscription settings. On iOS: Settings › Apple ID › Subscriptions. On Android: Google Play Store › Menu › Subscriptions. Your premium access continues until the end of your current billing period.",
      },
      {
        q: "How do I restore my purchase?",
        a: "If you've reinstalled the app or switched devices, open LumaSleep and go to Settings › “Restore Purchases.” Your subscription will be detected automatically through your App Store or Play Store account.",
      },
    ],
  },
  {
    heading: "Troubleshooting",
    items: [
      {
        q: "Sounds aren't playing",
        a: "Make sure your device isn't on silent mode and the volume is turned up. Check your internet connection — sounds are streamed from our servers. If the issue persists, try closing and reopening the app, or check that LumaSleep has permission to use your network connection.",
      },
      {
        q: "Sleep data isn't showing up",
        a: "Ensure you've granted LumaSleep permission to read sleep data in your device's health settings. On iOS, check Settings › Health › Data Access › LumaSleep. Sleep data requires a compatible device (Apple Watch, Fitbit, etc.) or a sleep tracking app that writes to Apple Health or Health Connect.",
      },
      {
        q: "AI generation failed",
        a: "AI sound generation needs a stable internet connection. If generation fails, check your connection and try again. If the problem continues, try a simpler or shorter prompt. Contact us if it keeps happening.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main>
        <header className="border-b py-16 text-center sm:py-20" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="shell">
            <Reveal>
              <h1 className="font-display text-[clamp(2.2rem,5vw,3.2rem)] font-medium tracking-[-0.01em]">
                Help &amp; Support
              </h1>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-3 text-cedar">Find answers or get in touch with our team</p>
            </Reveal>
          </div>
        </header>

        <div className="shell">
          <div className="mx-auto max-w-3xl py-14">
            {/* Contact banner */}
            <Reveal>
              <div
                className="rounded-3xl p-8 text-center"
                style={{
                  background:
                    "radial-gradient(120% 130% at 50% -30%, rgba(108,99,255,0.3), transparent 60%), linear-gradient(160deg, rgba(30,37,69,0.7), rgba(11,15,30,0.7))",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h2 className="font-display text-2xl">Need a hand?</h2>
                <p className="mx-auto mt-2 max-w-md text-cedar">
                  Our team is here to help. Reach out and we&apos;ll get back to you as soon as we can.
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-5 inline-block rounded-full bg-amber px-6 py-2.5 font-semibold text-void transition-transform duration-300 hover:-translate-y-0.5"
                >
                  {SITE.email}
                </a>
              </div>
            </Reveal>

            {/* Grouped FAQ */}
            {GROUPS.map((group) => (
              <section key={group.heading} className="mt-12">
                <Reveal>
                  <h2 className="font-display text-xl text-linen">{group.heading}</h2>
                </Reveal>
                <div className="mt-3">
                  {group.items.map((item) => (
                    <Reveal key={item.q}>
                      <details className="group border-b" style={{ borderColor: "rgba(255,255,255,0.09)" }}>
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-[1rem] font-medium text-linen [&::-webkit-details-marker]:hidden">
                          {item.q}
                          <ChevronDownIcon
                            width={19}
                            height={19}
                            className="shrink-0 text-cedar transition-transform duration-300 group-open:rotate-180"
                          />
                        </summary>
                        <p className="pb-4 pr-8 text-[0.95rem] leading-relaxed text-cedar">{item.a}</p>
                      </details>
                    </Reveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
