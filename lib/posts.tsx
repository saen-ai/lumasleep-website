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
  {
    slug: "how-to-build-a-bedtime-routine",
    title: "How to Build a Bedtime Routine That Actually Sticks",
    description:
      "A simple, science-backed bedtime routine helps you fall asleep faster and wake up rested. Here's how to build a wind-down routine you'll actually keep.",
    date: "2026-05-26",
    readingMinutes: 6,
    keywords: ["bedtime routine", "wind down routine", "sleep hygiene", "consistent sleep schedule"],
    body: (
      <>
        <p>
          The single most powerful thing you can do for your sleep isn&apos;t a gadget or a
          supplement — it&apos;s a <strong>consistent routine</strong>. Your body runs on an
          internal clock, and a predictable wind-down tells it that sleep is coming. The
          catch is making a routine you&apos;ll actually keep. Here&apos;s how.
        </p>

        <h2>Start with a fixed wake-up time</h2>
        <p>
          Counter-intuitively, the anchor of good sleep is when you <em>wake up</em>, not
          when you go to bed. Pick a wake time you can hold seven days a week — yes,
          weekends too — and your bedtime will start to fall into place on its own as your
          body adjusts.
        </p>

        <h2>Set a wind-down alarm</h2>
        <p>
          Most people schedule a wake alarm but nothing to signal the <em>start</em> of
          bed. Set a gentle reminder 30–60 minutes before your target bedtime. That&apos;s
          your cue to stop working and begin the routine — the hardest part is simply
          starting on time.
        </p>

        <h2>Build a 30-minute wind-down</h2>
        <p>
          Keep it simple and repeatable. A solid template:
        </p>
        <ul>
          <li><strong>Dim the lights</strong> — bright light suppresses melatonin; lower it across the house.</li>
          <li><strong>Put screens away</strong> — or at least stop doom-scrolling; the content keeps your mind alert more than the blue light does.</li>
          <li><strong>Do one calming thing</strong> — a warm shower, light stretching, reading, or journaling.</li>
          <li><strong>Start your sleep sounds</strong> — the same sound each night becomes a powerful cue that it&apos;s time to sleep.</li>
        </ul>

        <h2>Make your bedroom boring (in a good way)</h2>
        <p>
          Cool, dark, and quiet. Aim for a cooler room temperature, block out light, and use
          a steady background sound to mask disruptions. The more your brain associates the
          bed only with sleep, the faster you&apos;ll drop off.
        </p>

        <h2>Give it two weeks</h2>
        <p>
          Routines feel pointless on night one and obvious by week two. Your circadian rhythm
          shifts gradually, so consistency beats intensity. Don&apos;t scrap it after a rough
          night — just repeat tomorrow.
        </p>
        <p>
          LumaSleep makes the routine automatic: set a bedtime reminder to start your
          wind-down, then drift off to the same calming sound each night with a timer that
          fades it out once you&apos;re asleep.
        </p>
      </>
    ),
  },
  {
    slug: "why-cant-i-sleep",
    title: "Why Can't I Sleep? Common Causes and What Actually Helps",
    description:
      "Lying awake at night? Here are the most common reasons you can't sleep — from stress and screens to caffeine and routine — and practical fixes for each.",
    date: "2026-05-25",
    readingMinutes: 7,
    keywords: ["why can't I sleep", "can't sleep", "trouble sleeping", "insomnia causes"],
    body: (
      <>
        <p>
          Few things are as frustrating as being exhausted but wide awake. The good news is
          that most sleeplessness comes down to a handful of fixable causes. Here are the
          usual suspects — and what actually helps with each.
        </p>

        <h2>1. A racing mind</h2>
        <p>
          Stress and an active brain are the number-one reason people can&apos;t fall asleep.
          When your thoughts won&apos;t quiet, give them somewhere to go: write tomorrow&apos;s
          to-do list before bed, or try a steady, enveloping sound (like brown noise or rain)
          that gives your attention something neutral to settle on.
        </p>

        <h2>2. Caffeine later than you think</h2>
        <p>
          Caffeine has a half-life of roughly 5–6 hours, so an afternoon coffee can still be
          in your system at bedtime. If you struggle to fall asleep, cut off caffeine by
          early afternoon and see if it helps.
        </p>

        <h2>3. Screens and light</h2>
        <p>
          Bright light — especially from phones held close to your face — tells your brain
          it&apos;s still daytime. Beyond the light, engaging content keeps you mentally
          switched on. Dim your environment and put the phone down before bed.
        </p>

        <h2>4. An irregular schedule</h2>
        <p>
          Going to bed and waking at wildly different times confuses your body clock. A
          consistent wake time — even on weekends — is one of the most effective fixes for
          chronic trouble sleeping.
        </p>

        <h2>5. A noisy or restless environment</h2>
        <p>
          Sudden sounds jolt you out of light sleep even if you don&apos;t fully wake. A
          steady background sound masks those interruptions so your night stays smooth.
        </p>

        <h2>6. Lying in bed awake</h2>
        <p>
          If you&apos;re still awake after ~20 minutes, don&apos;t force it. Get up, do
          something calm and dim-lit, and return when you feel sleepy. Tossing and turning
          teaches your brain that bed is a place for frustration.
        </p>

        <h2>When to seek help</h2>
        <p>
          The occasional bad night is normal. But if you regularly can&apos;t sleep for weeks,
          or you&apos;re exhausted during the day despite time in bed, talk to a healthcare
          professional — persistent insomnia is treatable and worth addressing.
        </p>
        <p>
          For the everyday causes — a busy mind, a noisy room — LumaSleep can help you wind
          down with calming sounds, AI-generated soundscapes, and a bedtime reminder to keep
          your schedule on track.
        </p>
      </>
    ),
  },
  {
    slug: "rain-sounds-for-sleep",
    title: "Rain Sounds for Sleep: Why They Work So Well",
    description:
      "Rain sounds are the most popular sleep sound for a reason. Here's the science behind why rain helps you sleep, and how to use it for the best results.",
    date: "2026-05-23",
    readingMinutes: 5,
    keywords: ["rain sounds for sleep", "rain sounds", "sleeping to rain", "rain white noise"],
    body: (
      <>
        <p>
          Ask people about their favourite sound to sleep to and rain wins almost every time.
          It&apos;s not just nostalgia — there are real reasons rain is so effective at
          easing you into sleep. Here&apos;s why it works, and how to get the most from it.
        </p>

        <h2>It&apos;s steady, soft, and unpredictable in the right way</h2>
        <p>
          Rain is a kind of natural &ldquo;pink-ish noise&rdquo; — a broad, gentle wash of
          sound with soft random variation. That randomness is soothing rather than
          alerting, and the steady wash masks the sudden noises that would otherwise pull you
          awake.
        </p>

        <h2>It signals safety</h2>
        <p>
          There&apos;s a cosy, sheltered feeling to listening to rain from a warm, dry bed.
          That sense of safety lowers arousal and helps your nervous system shift into
          rest-and-digest mode — exactly the state you want for sleep.
        </p>

        <h2>It quiets a busy mind</h2>
        <p>
          A continuous, low-stakes sound gives your attention something neutral to rest on,
          which can interrupt the loop of racing thoughts that keeps so many people awake.
        </p>

        <h2>Choosing your rain</h2>
        <ul>
          <li><strong>Light rain</strong> — barely-there texture for very light sleepers.</li>
          <li><strong>Steady rain</strong> — the all-rounder; enough to mask most noise.</li>
          <li><strong>Heavy rain &amp; thunder</strong> — best for blocking louder street or household sound.</li>
          <li><strong>Rain on a roof or tent</strong> — adds a cosy, enclosed feel.</li>
        </ul>

        <h2>Get the most from it</h2>
        <p>
          Keep the volume moderate — loud enough to cover interruptions, not so loud it
          becomes the focus. Use a fade-out timer so it doesn&apos;t play at full volume all
          night. And try layering: rain under a fireplace or distant thunder makes a rich,
          immersive scene.
        </p>
        <p>
          LumaSleep has multiple rain variants — light rain, heavy rain, rain on a roof,
          thunderstorms — plus the option to mix rain with fire, wind, or nature sounds and
          set a timer that fades it all out once you&apos;re asleep.
        </p>
      </>
    ),
  },
  {
    slug: "best-sounds-for-focus-and-studying",
    title: "The Best Sounds for Focus, Studying & Deep Work",
    description:
      "The right background sound can sharpen concentration and block distractions. Here are the best sounds for focus, studying, and deep work — and why they help.",
    date: "2026-05-21",
    readingMinutes: 5,
    keywords: ["focus music", "study sounds", "sounds for concentration", "white noise for focus"],
    body: (
      <>
        <p>
          Sound doesn&apos;t just help you sleep — the right background audio can help you
          focus, too. Whether you&apos;re studying, coding, or trying to finish a deep-work
          block, a steady soundscape can mask distractions and keep you in flow. Here are the
          best options.
        </p>

        <h2>Steady noise (white, pink, brown)</h2>
        <p>
          Coloured noise is the most reliable focus tool because it covers the unpredictable
          sounds — a conversation, a notification, a door — that break concentration. Many
          people find <strong>brown noise</strong> especially good for deep work since its
          low rumble is calming without being distracting.
        </p>

        <h2>Rain and nature</h2>
        <p>
          Gentle rain and nature ambience offer the masking benefit of noise with a softer,
          more pleasant character. They&apos;re a great default for long study or work
          sessions where flat noise might feel sterile.
        </p>

        <h2>Lo-fi and instrumental focus music</h2>
        <p>
          Music without lyrics keeps the language part of your brain free for the task at
          hand. Lo-fi beats, ambient pads, and gentle classical pieces provide momentum and
          rhythm without pulling your attention to the words.
        </p>

        <h2>Binaural and focus tones</h2>
        <p>
          Some people find steady tonal tracks — like alpha-wave or focus soundscapes —
          helpful for settling into concentration. Effects vary person to person, so treat
          it as one option to experiment with rather than a guarantee.
        </p>

        <h2>How to pick</h2>
        <ul>
          <li><strong>Noisy environment?</strong> Brown or white noise to block it out.</li>
          <li><strong>Long session?</strong> Rain or nature for something easier on the ears.</li>
          <li><strong>Need momentum?</strong> Lo-fi or instrumental focus music.</li>
        </ul>
        <p>
          A quick rule: if you catch yourself listening <em>to</em> the sound, it&apos;s too
          interesting — switch to something more neutral.
        </p>
        <p>
          LumaSleep includes focus music, lo-fi, and coloured-noise tracks alongside its
          sleep library, so the same app that helps you wind down at night can help you lock
          in during the day.
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
