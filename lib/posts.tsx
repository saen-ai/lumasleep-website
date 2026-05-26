import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readingMinutes: number;
  keywords: string[];
  body: ReactNode;
};

// Articles are authored inline as JSX so they render to static HTML with full
// styling control (see the .prose styles in globals.css). Newest first is
// computed in getAllPosts().
const POSTS: Post[] = [
  {
    slug: "best-sounds-to-fall-asleep-fast",
    title: "Best Sounds to Fall Asleep Fast: A Complete Guide",
    description:
      "From rain and ocean waves to brown noise and fireplaces — here are the best sounds to fall asleep fast, why they work, and how to pick the right one for you.",
    date: "2026-05-24",
    readingMinutes: 6,
    keywords: ["best sounds for sleep", "sounds to fall asleep", "sleep sounds", "rain sounds"],
    body: (
      <>
        <p>
          If your mind races the moment your head hits the pillow, the right sound can
          be the difference between staring at the ceiling and drifting off in minutes.
          Sound works because it gives your brain something steady and predictable to
          latch onto, masking the sudden noises — a door, a car, a creak — that pull you
          back awake. Here are the most effective sounds for falling asleep fast, and how
          to choose between them.
        </p>

        <h2>1. Rain and thunderstorms</h2>
        <p>
          Rain is the most popular sleep sound for a reason: it&apos;s gentle, continuous,
          and full of soft randomness that the brain finds soothing rather than alerting.
          Light rain suits people who want barely-there background texture; heavier rain
          and distant thunder work well if you need to mask louder household or street
          noise.
        </p>

        <h2>2. Ocean waves</h2>
        <p>
          The slow rise and fall of ocean waves mirrors the rhythm of relaxed breathing,
          which can help slow your heart rate as you settle in. The long, drawn-out
          intervals make waves a favourite for winding down a busy mind.
        </p>

        <h2>3. White, pink, and brown noise</h2>
        <p>
          Coloured noise is the go-to for blocking out disruptive sound. <strong>White
          noise</strong> is bright and hiss-like; <strong>pink noise</strong> is softer
          and more balanced; <strong>brown noise</strong> is deep and rumbling, which many
          people find the most calming for sleep. If rain or waves aren&apos;t cutting
          through your environment, a noise track usually will.
        </p>

        <h2>4. Fireplace and campfire</h2>
        <p>
          The irregular crackle of a fire is warm and grounding — great for cold nights or
          anyone who associates a hearth with comfort. It pairs beautifully with rain or
          wind for a cosy-cabin effect.
        </p>

        <h2>5. Nature: forest, creek, and night sounds</h2>
        <p>
          Birdsong, a babbling creek, wind through trees, and night crickets tap into a
          deep sense of safety and calm. These work best for light sleepers who prefer
          organic texture over a flat noise wall.
        </p>

        <h2>How to choose the right sound</h2>
        <ul>
          <li><strong>Need to block noise?</strong> Reach for brown or pink noise.</li>
          <li><strong>Mind won&apos;t switch off?</strong> Try ocean waves or steady rain.</li>
          <li><strong>Want cosy and warm?</strong> A fireplace, optionally layered with rain.</li>
          <li><strong>Light sleeper?</strong> Soft nature sounds like forest or a gentle creek.</li>
        </ul>

        <h2>Two tips that make any sound work better</h2>
        <p>
          First, use a <strong>sleep timer</strong> so playback fades out after you&apos;ve
          drifted off rather than running all night. Second, keep the volume just loud
          enough to cover background noise — louder isn&apos;t better, and a sound that&apos;s
          too present can keep you alert.
        </p>
        <p>
          LumaSleep includes 70+ of these sounds across 16 categories, lets you mix several
          together, and has a built-in fade-out timer — so you can build the exact
          texture that sends you off and let it gently switch itself off.
        </p>
      </>
    ),
  },
  {
    slug: "white-noise-vs-pink-noise-vs-brown-noise",
    title: "White vs Pink vs Brown Noise: Which Is Best for Sleep?",
    description:
      "White, pink, and brown noise sound different and help in different ways. Here's how each one works and which colour of noise is best for falling and staying asleep.",
    date: "2026-05-22",
    readingMinutes: 5,
    keywords: ["white noise", "pink noise", "brown noise", "noise colours for sleep"],
    body: (
      <>
        <p>
          &ldquo;Coloured noise&rdquo; describes sounds that contain all frequencies at
          once, but with the energy weighted differently across the spectrum. That
          weighting changes how the noise feels — and which one helps you sleep. Here&apos;s
          the plain-English breakdown.
        </p>

        <h2>White noise</h2>
        <p>
          White noise has <strong>equal energy across every frequency</strong>, which makes
          it sound bright, flat, and hiss-like — think untuned radio static or a fan on
          high. Because it covers the whole spectrum evenly, it&apos;s excellent at masking
          sudden sounds. The trade-off: some people find the high-frequency content a bit
          harsh over a full night.
        </p>

        <h2>Pink noise</h2>
        <p>
          Pink noise <strong>reduces energy as frequency rises</strong>, so it&apos;s softer
          and more balanced than white noise — closer to steady rain or wind. Many people
          find it more natural and easier to sleep to, and it&apos;s often the recommended
          middle ground if white noise feels too sharp.
        </p>

        <h2>Brown noise</h2>
        <p>
          Brown noise rolls off the high frequencies even more steeply, leaving a
          <strong> deep, low rumble</strong> like heavy rainfall, a distant waterfall, or a
          jet cabin. It&apos;s the warmest and most enveloping of the three, and it&apos;s
          become a favourite for people who want to quiet a racing mind or who find higher
          frequencies distracting.
        </p>

        <h2>Which should you use?</h2>
        <ul>
          <li><strong>Blocking out a noisy environment:</strong> white noise covers the widest range.</li>
          <li><strong>A natural, balanced feel:</strong> pink noise.</li>
          <li><strong>Deep, cosy, mind-quieting:</strong> brown noise.</li>
        </ul>
        <p>
          There&apos;s no universal &ldquo;best&rdquo; — it comes down to your ears and your
          environment. The smart move is to try all three for a few nights each and notice
          which one you stop hearing fastest. The one that fades into the background quickest
          is usually the one helping you most.
        </p>

        <h2>A note on volume and timers</h2>
        <p>
          Keep coloured noise at a moderate level — loud enough to mask interruptions, not
          so loud that it becomes the thing keeping you up. And set a fade-out timer so it
          doesn&apos;t play at full volume until morning.
        </p>
        <p>
          LumaSleep includes white, pink, and brown noise alongside rain, fire, and nature
          textures, so you can A/B them in the same app — and even layer a noise track under
          rain or waves to find your perfect blend.
        </p>
      </>
    ),
  },
  {
    slug: "how-ai-sleep-sounds-work",
    title: "How AI-Generated Sleep Sounds Work (and Why They're Different)",
    description:
      "AI sleep sounds let you describe any soundscape and hear it within seconds. Here's how AI sound generation works and why it beats a fixed library of loops.",
    date: "2026-05-20",
    readingMinutes: 5,
    keywords: ["AI sleep sounds", "AI soundscapes", "AI sound generation", "custom sleep sounds"],
    body: (
      <>
        <p>
          Most sleep apps ship a fixed library of recorded loops. AI-generated sleep sounds
          flip that model: instead of choosing from what someone else recorded, you
          <strong> describe the soundscape you want in plain words</strong> and the app
          creates it for you. Want &ldquo;a warm fireplace in a snowed-in cabin with wind in
          the pines&rdquo;? You can have exactly that in seconds.
        </p>

        <h2>What &ldquo;AI sound generation&rdquo; actually means</h2>
        <p>
          You type a natural-language prompt. That description is sent to a generative audio
          model, which composes an original sound matching it — not by stitching clips
          together, but by generating new audio from your words. A short clip comes back,
          ready to play and save. No sound-design skills required.
        </p>

        <h2>Why it beats a fixed library</h2>
        <ul>
          <li>
            <strong>It&apos;s personal.</strong> The exact combination that relaxes you —
            rain on a tent, a creek beside a campfire, a thunderstorm three valleys over —
            probably isn&apos;t a preset anywhere. With AI, it is.
          </li>
          <li>
            <strong>It&apos;s endless.</strong> A library runs out. Prompts don&apos;t. If
            tonight&apos;s sound stops working, describe a new one.
          </li>
          <li>
            <strong>It&apos;s fast.</strong> You go from an idea to playback in seconds,
            without hunting through menus.
          </li>
        </ul>

        <h2>Tips for writing a great sound prompt</h2>
        <p>
          Be specific about the <strong>elements</strong> (rain, wind, fire), the
          <strong> setting</strong> (cabin, beach, forest), and the <strong>intensity</strong>
          (gentle, distant, heavy). &ldquo;Soft rain on a tin roof with occasional distant
          thunder&rdquo; will give you a more focused result than just &ldquo;rain.&rdquo; If
          the first take isn&apos;t right, tweak one detail and try again.
        </p>

        <h2>Keep the ones you love</h2>
        <p>
          A good AI sound feature saves your creations to a personal library so you can
          replay favourites instantly — and the best ones let you share what you make with a
          community of other sleepers.
        </p>
        <p>
          That&apos;s exactly how LumaSleep&apos;s AI Sound Studio works: describe any
          soundscape, hear it moments later, save it, and — if you want — share it to the
          community for others to fall asleep to.
        </p>
      </>
    ),
  },
  {
    slug: "understanding-your-sleep-score",
    title: "Understanding Your Sleep Score: Stages, REM & Deep Sleep",
    description:
      "What is a sleep score, how is it calculated, and what do light, deep, and REM stages mean? A clear guide to reading your nightly sleep data.",
    date: "2026-05-18",
    readingMinutes: 6,
    keywords: ["sleep score", "sleep stages", "deep sleep", "REM sleep", "sleep tracking"],
    body: (
      <>
        <p>
          A sleep score turns a messy night of data into a single number from 0–100, so you
          can tell at a glance whether you actually rested. But the number only helps if you
          know what feeds it. Here&apos;s how sleep scores work and what each stage means.
        </p>

        <h2>What goes into a sleep score</h2>
        <p>
          Scores vary by app, but most weigh a similar set of factors:
        </p>
        <ul>
          <li><strong>Duration</strong> — how long you actually slept.</li>
          <li><strong>Efficiency</strong> — time asleep versus time in bed.</li>
          <li><strong>Deep sleep</strong> — the share of restorative slow-wave sleep.</li>
          <li><strong>REM sleep</strong> — the dreaming stage tied to memory and mood.</li>
          <li><strong>Disruptions</strong> — how often you woke during the night.</li>
        </ul>
        <p>
          Put simply: enough sleep, mostly uninterrupted, with healthy amounts of deep and
          REM, earns a high score. A score of <strong>80+</strong> generally means an
          excellent night.
        </p>

        <h2>The sleep stages, explained</h2>
        <h3>Light sleep</h3>
        <p>
          The largest portion of your night and the bridge into deeper stages. It&apos;s
          where your body relaxes and your heart rate slows. Easy to wake from — which is
          why a well-timed alarm can leave you feeling fresher.
        </p>
        <h3>Deep sleep</h3>
        <p>
          Slow-wave sleep is when the body does its physical repair — tissue growth, immune
          support, and clearing the day&apos;s mental clutter. It&apos;s concentrated in the
          first half of the night, which is one reason a consistent bedtime matters.
        </p>
        <h3>REM sleep</h3>
        <p>
          Rapid Eye Movement sleep is when most dreaming happens and when your brain
          consolidates memories and processes emotion. REM gets longer toward morning, so
          cutting your night short tends to rob you of REM specifically.
        </p>

        <h2>How to read trends, not just one night</h2>
        <p>
          A single low score isn&apos;t worth stressing over — one bad night happens. The
          value is in the <strong>weekly trend</strong>: are your scores climbing or
          slipping, and what changed? Tracking which habits (or sounds) line up with your
          best nights is far more useful than chasing a perfect number.
        </p>

        <h2>A quick disclaimer</h2>
        <p>
          Consumer sleep tracking is for wellness and awareness, not diagnosis. If you
          consistently sleep poorly or suspect a sleep disorder, talk to a healthcare
          professional.
        </p>
        <p>
          LumaSleep syncs with Apple Health and Health Connect to show your nightly score,
          a full stage breakdown, weekly trends, and gentle insights — including which
          sounds tend to show up on your best nights.
        </p>
      </>
    ),
  },
];

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
