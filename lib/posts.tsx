import type { ReactNode } from "react";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readingMinutes: number;
  keywords: string[];
  cover: string; // /blog/<slug>.webp — 1200×630
  coverAlt: string;
  faqs?: { q: string; a: string }[]; // optional — rendered + emitted as FAQPage schema
  body: ReactNode;
};

// Articles are authored inline as JSX so they render to static HTML with full
// styling control (see the .prose styles in globals.css). Newest first is
// computed in getAllPosts().
const POSTS: Post[] = [
  {
    slug: "best-sounds-to-fall-asleep-fast",
    cover: "/blog/best-sounds-to-fall-asleep-fast.webp",
    coverAlt: "Glowing soundwaves beneath a crescent moon on a starry night — best sounds to fall asleep fast",
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
          <li><strong>Mind won&apos;t switch off?</strong> Try <a href="/sounds/ocean/">ocean waves</a> or <a href="/sounds/rain/">steady rain</a>.</li>
          <li><strong>Want cosy and warm?</strong> A <a href="/sounds/fire/">fireplace</a>, optionally layered with rain.</li>
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
          LumaSleep includes <a href="/sounds/">70+ of these sounds across 16 categories</a>, lets you mix several
          together, and has a built-in fade-out timer — so you can build the exact
          texture that sends you off and let it gently switch itself off.
        </p>
      </>
    ),
  },
  {
    slug: "white-noise-vs-pink-noise-vs-brown-noise",
    cover: "/blog/white-noise-vs-pink-noise-vs-brown-noise.webp",
    coverAlt: "Coloured soundwaves over a night sky — white vs pink vs brown noise for sleep",
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
          LumaSleep includes <a href="/noise/white-noise/">white</a>, <a href="/noise/pink-noise/">pink</a>, and <a href="/noise/brown-noise/">brown</a> noise alongside rain, fire, and nature
          textures, so you can A/B them in the same app — and even layer a noise track under
          rain or waves to find your perfect blend.
        </p>
      </>
    ),
  },
  {
    slug: "how-ai-sleep-sounds-work",
    cover: "/blog/how-ai-sleep-sounds-work.webp",
    coverAlt: "Violet soundwaves over a starfield — how AI-generated sleep sounds work",
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
          That&apos;s exactly how <a href="/ai-sleep-sounds/">LumaSleep&apos;s AI Sound Studio</a> works: describe any
          soundscape, hear it moments later, save it, and — if you want — share it to the
          community for others to fall asleep to.
        </p>
      </>
    ),
  },
  {
    slug: "understanding-your-sleep-score",
    cover: "/blog/understanding-your-sleep-score.webp",
    coverAlt: "Teal soundwaves over a night sky — understanding your sleep score, stages and REM",
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
          <a href="/sounds/deep-sleep/">sleep sounds</a> tend to show up on your best nights.
        </p>
      </>
    ),
  },
  {
    slug: "how-to-build-a-bedtime-routine",
    cover: "/blog/how-to-build-a-bedtime-routine.webp",
    coverAlt: "Amber soundwaves beneath a moon — how to build a bedtime routine that sticks",
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
          <li><strong><a href="/sounds/">Start your sleep sounds</a></strong> — the same sound each night becomes a powerful cue that it&apos;s time to sleep.</li>
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
    cover: "/blog/why-cant-i-sleep.webp",
    coverAlt: "Restless blue soundwaves over a starry sky — why can't I sleep and what helps",
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
          to-do list before bed, or try a steady, enveloping sound (like <a href="/noise/brown-noise/">brown noise</a> or <a href="/sounds/rain/">rain</a>)
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
          down with calming sounds, <a href="/ai-sleep-sounds/">AI-generated soundscapes</a>, and a bedtime reminder to keep
          your schedule on track.
        </p>
      </>
    ),
  },
  {
    slug: "rain-sounds-for-sleep",
    cover: "/blog/rain-sounds-for-sleep.webp",
    coverAlt: "Blue soundwaves over a night sky — rain sounds for sleep and why they work",
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
          LumaSleep has <a href="/sounds/rain/">multiple rain variants</a> — light rain, heavy rain, rain on a roof,
          <a href="/sounds/thunderstorm/">thunderstorms</a> — plus the option to mix rain with fire, wind, or nature sounds and
          set a timer that fades it all out once you&apos;re asleep.
        </p>
      </>
    ),
  },
  {
    slug: "best-sounds-for-focus-and-studying",
    cover: "/blog/best-sounds-for-focus-and-studying.webp",
    coverAlt: "Cyan soundwaves over a starfield — the best sounds for focus, studying and deep work",
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
          people find <strong><a href="/noise/brown-noise/">brown noise</a></strong> especially good for deep work since its
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
          LumaSleep includes focus music, lo-fi, and <a href="/noise/">coloured-noise tracks</a> alongside its
          sleep library, so the same app that helps you wind down at night can help you lock
          in during the day.
        </p>
      </>
    ),
  },
  {
    slug: "white-noise-vs-green-noise",
    cover: "/blog/white-noise-vs-green-noise.webp",
    coverAlt: "Green and white soundwaves over a starry night sky — white noise vs green noise for sleep",
    title: "White Noise vs Green Noise: What's the Difference for Sleep?",
    description:
      "Green noise sounds like nature; white noise sounds like static. Here's the real difference between white and green noise — and which one helps you sleep better.",
    date: "2026-06-09",
    readingMinutes: 5,
    keywords: ["white noise vs green noise", "what is green noise", "green noise for sleep", "green noise benefits"],
    faqs: [
      {
        q: "What is the difference between white noise and green noise?",
        a: "White noise spreads sound energy evenly across all frequencies, giving it a bright, hissy quality like static. Green noise concentrates energy in the middle of the spectrum — around the ambient sounds of nature — so it sounds softer and more like a steady stream or gentle rainfall.",
      },
      {
        q: "Is green noise good for sleep?",
        a: "Yes. Many people find green noise especially relaxing because its mid-range, nature-like character is gentler than white noise while still masking background disturbances. It is a good choice if white noise feels too sharp.",
      },
      {
        q: "Is green noise better than white noise?",
        a: "Neither is universally better — it depends on your ears and your environment. White noise masks sudden sounds slightly more effectively across the whole spectrum, while green noise feels more natural and soothing. Try both and keep whichever quiets your mind faster.",
      },
      {
        q: "What does green noise sound like?",
        a: "Green noise sounds like the natural world at rest — a steady stream, light rainfall, ocean swell, or wind through trees. It is the background hum of nature rather than the flat hiss of static.",
      },
    ],
    body: (
      <>
        <p>
          If you&apos;ve been exploring sleep sounds, you&apos;ve probably met the
          &ldquo;colours&rdquo; of noise — white, pink, brown, and the newer favourite,
          green. In short: <strong>white noise is bright and hiss-like</strong>, while
          <strong> green noise is softer and sounds like nature</strong> — a steady stream
          or gentle rain. Here&apos;s the difference, and how to pick the right one for sleep.
        </p>

        <h2>What is green noise?</h2>
        <p>
          Green noise emphasises the <strong>middle of the frequency spectrum</strong> —
          right around the ambient sounds of the natural world. That mid-range focus is why
          it sounds like a babbling creek, soft rainfall, or distant ocean swell rather than
          a flat wall of static. It&apos;s often described as the &ldquo;background hum of
          nature,&rdquo; which makes it feel calming and organic.
        </p>

        <h2>What is white noise?</h2>
        <p>
          White noise contains <strong>every frequency at equal intensity</strong>, which
          gives it that sharp, even hiss — think an untuned radio or a fan on high. Because
          it covers the whole spectrum, it&apos;s excellent at masking sudden sounds like a
          slamming door or passing car. Some people find it a little harsh over a full night.
          (For a deeper comparison, see our guide to{" "}
          <a href="/blog/white-noise-vs-pink-noise-vs-brown-noise/">white vs pink vs brown noise</a>.)
        </p>

        <h2>White noise vs green noise: the key differences</h2>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>White noise</th>
              <th>Green noise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sounds like</strong></td>
              <td>Static, hiss, a fan</td>
              <td>A stream, light rain, nature</td>
            </tr>
            <tr>
              <td><strong>Frequency focus</strong></td>
              <td>Even across all frequencies</td>
              <td>Concentrated in the mid-range</td>
            </tr>
            <tr>
              <td><strong>Feel</strong></td>
              <td>Bright, sharp</td>
              <td>Soft, natural, calming</td>
            </tr>
            <tr>
              <td><strong>Best for</strong></td>
              <td>Blocking sudden noise</td>
              <td>Gentle, all-night relaxation</td>
            </tr>
          </tbody>
        </table>

        <h2>Which is better for sleep?</h2>
        <p>
          There&apos;s no universal winner — sleep is personal. If you live somewhere noisy
          and need to block sudden sounds, <strong>white noise</strong> covers the widest
          range. If white noise feels too harsh, or you simply relax to the sound of nature,
          <strong> green noise</strong> is gentler while still masking disturbances. A good
          rule: the sound you stop noticing fastest is the one helping you most.
        </p>

        <h2>How to try both tonight</h2>
        <p>
          The easiest way to choose is to test them back to back in bed and notice which one
          quiets your mind first. Keep the volume moderate — loud enough to cover
          interruptions, not so loud it becomes the focus — and use a fade-out timer so it
          doesn&apos;t play at full volume until morning.
        </p>
        <p>
          LumaSleep includes <a href="/noise/white-noise/">white</a>, pink, brown, and <a href="/noise/green-noise/">green noise</a> alongside rain, ocean, and
          AI-generated soundscapes, so you can compare them all in one app — and even layer a
          noise track under rain or waves to build your perfect blend.
        </p>
      </>
    ),
  },
  {
    slug: "sleeping-with-a-sound-machine",
    cover: "/blog/sleeping-with-a-sound-machine.webp",
    coverAlt: "Amber soundwaves beneath a crescent moon — is it bad to sleep with a sound machine every night",
    title: "Is It Bad to Sleep With a Sound Machine On Every Night?",
    description:
      "Is sleeping with a sound machine bad for you? Here's what to know about nightly white noise, safe volume levels, dependency, and how long to use it.",
    date: "2026-06-07",
    readingMinutes: 5,
    keywords: ["sleeping with a sound machine", "is it bad to sleep with a sound machine", "sound machine every night", "white noise safe volume"],
    faqs: [
      {
        q: "Is it bad to sleep with a sound machine on every night?",
        a: "For most adults, sleeping with a sound machine every night is safe as long as the volume is moderate. The main consideration is volume: keep it around the level of a soft shower (roughly 50 decibels or lower) and place it a few feet from your head to protect your hearing over the long term.",
      },
      {
        q: "Can you become dependent on a sound machine to sleep?",
        a: "Your brain can come to associate the sound with sleep, which is actually useful — it becomes a cue that it is time to rest. If you ever need to sleep without it you may take a few nights to adjust, but it is not a harmful dependency.",
      },
      {
        q: "What volume should a sound machine be?",
        a: "Keep it just loud enough to mask background noise — typically under 50 decibels, similar to a soft shower or light rainfall. Louder is not better and can strain your hearing or keep you alert.",
      },
      {
        q: "How far should a sound machine be from your bed?",
        a: "Place it at least a few feet (about a metre) away rather than right next to your head, especially for children and babies. The greater distance lowers the sound level reaching your ears while still masking disturbances.",
      },
    ],
    body: (
      <>
        <p>
          Sound machines are one of the most popular sleep aids around — but if you use one
          every single night, it&apos;s natural to wonder whether that&apos;s actually fine.
          The short answer: <strong>for most adults, sleeping with a sound machine every
          night is perfectly safe</strong>, as long as you keep the volume moderate.
          Here&apos;s what matters.
        </p>

        <h2>Is sleeping with a sound machine bad for you?</h2>
        <p>
          There&apos;s no evidence that nightly use of a sound machine harms a healthy adult.
          A steady background sound simply masks the sudden noises — a creak, a car, a snoring
          partner — that would otherwise pull you out of light sleep. Used sensibly, it helps
          you fall asleep faster and stay asleep, which is the whole point.
        </p>

        <h2>The one thing that matters: volume</h2>
        <p>
          The only real caution is <strong>loudness</strong>. Running any sound too loud for
          hours, night after night, isn&apos;t great for your hearing. Keep your machine
          around or below <strong>50 decibels</strong> — roughly the level of a soft shower or
          gentle rainfall — and position it <strong>a few feet from your head</strong> rather
          than right beside your ear. That&apos;s enough to mask disruptions without strain.
        </p>

        <h2>Can you get &ldquo;addicted&rdquo; to a sound machine?</h2>
        <p>
          Not in any harmful sense. What happens is that your brain forms an association
          between the sound and sleep, so the sound becomes a powerful cue that it&apos;s time
          to wind down — the same way a bedtime routine works. If you travel or need to sleep
          without it, you might take a night or two to adjust, but that&apos;s a mild habit,
          not a dependency to worry about.
        </p>

        <h2>How long should you use it?</h2>
        <p>
          All night is fine. Some people prefer a <strong>fade-out timer</strong> so the sound
          gently switches off once they&apos;re asleep, which can save a little battery or
          power and suits lighter sleepers. Others like continuous sound to mask noise right
          through till morning. Both approaches are reasonable — choose whichever leaves you
          more rested.
        </p>

        <h2>Sound machine vs a sleep-sounds app</h2>
        <p>
          A dedicated machine is simple and always on your nightstand. A{" "}
          <a href="/blog/white-noise-on-iphone-all-night/">sleep-sounds app on your phone</a>{" "}
          gives you far more variety — dozens of sounds, the ability to mix several together,
          and a built-in fade-out timer — without buying extra hardware. If you like having
          options, a <a href="/sound-machine/">sound machine app</a> like LumaSleep is the more flexible choice.
        </p>
        <p>
          LumaSleep offers <a href="/sounds/">70+ sounds</a> with a fade-out timer, so you can set the exact texture
          that sends you off and let it switch itself off — every night, safely.
        </p>
      </>
    ),
  },
  {
    slug: "white-noise-on-iphone-all-night",
    cover: "/blog/white-noise-on-iphone-all-night.webp",
    coverAlt: "Blue soundwaves over a starry sky — how to play white noise on iPhone all night",
    title: "How to Play White Noise on iPhone All Night",
    description:
      "Want white noise on your iPhone all night? Here's how to keep sleep sounds playing with the screen off — using Background Sounds and a dedicated sleep app.",
    date: "2026-06-05",
    readingMinutes: 5,
    keywords: ["white noise on iphone", "play white noise iphone all night", "iphone background sounds", "iphone sleep sounds"],
    faqs: [
      {
        q: "How do I play white noise on my iPhone all night?",
        a: "You have two options. iPhone's built-in Background Sounds (Settings → Accessibility → Audio & Visual → Background Sounds) can play white, pink, or brown noise plus rain or ocean continuously. For more sounds, mixing, and a fade-out timer, use a dedicated sleep-sounds app with all-night background playback.",
      },
      {
        q: "Does iPhone have a built-in white noise feature?",
        a: "Yes. iPhone includes Background Sounds under Accessibility, offering Balanced, Bright, and Dark Noise (white, pink, brown) plus Ocean, Rain, and Stream. You can set them to keep playing when other audio is active and continue with the screen locked.",
      },
      {
        q: "Why does my white noise stop playing when the screen locks?",
        a: "Most music and video apps pause to save battery. To keep audio going with the screen off, use iPhone's Background Sounds or a sleep-sounds app built for continuous background playback — those keep playing all night while locked.",
      },
      {
        q: "Will playing white noise all night drain my iPhone battery?",
        a: "Audio playback uses relatively little power, but to be safe keep your iPhone plugged in overnight. Locking the screen and lowering brightness also helps minimise battery use while the sound continues.",
      },
    ],
    body: (
      <>
        <p>
          Your iPhone can play <a href="/noise/white-noise/">white noise</a> all night long — and there are two good ways to do
          it. The quickest uses a hidden feature built into iOS; the other uses a dedicated
          sleep-sounds app for more variety and control. Here&apos;s how to set up both so the
          sound keeps playing with the screen off.
        </p>

        <h2>Option 1: iPhone&apos;s built-in Background Sounds</h2>
        <p>
          iOS has a white-noise feature tucked away in Accessibility. To turn it on:
        </p>
        <ul>
          <li>Open <strong>Settings → Accessibility</strong></li>
          <li>Tap <strong>Audio &amp; Visual → Background Sounds</strong></li>
          <li>Toggle <strong>Background Sounds</strong> on</li>
          <li>Tap <strong>Sound</strong> and pick one — Balanced, Bright, or Dark Noise (white, pink, brown), or Ocean, Rain, and Stream</li>
        </ul>
        <p>
          Set <strong>&ldquo;Use When Media Is Playing&rdquo;</strong> and the volume to taste.
          It&apos;ll keep playing with the screen locked — all night, for free. You can also
          add it to your Control Centre for one-tap access.
        </p>

        <h2>Option 2: a dedicated sleep-sounds app</h2>
        <p>
          Background Sounds is handy but limited to a few options. A sleep-sounds app gives you
          dozens of sounds — rain on a roof, a fireplace, a thunderstorm — plus the ability to
          <strong> mix several together</strong> and set a <strong>fade-out timer</strong>.
          Good sleep apps are built specifically for continuous overnight playback, so the
          audio keeps going when your phone is locked.
        </p>

        <h2>Why your sound stops when the screen locks</h2>
        <p>
          If you&apos;ve tried playing white noise from a video or some music apps, you&apos;ve
          probably noticed it pauses when the screen turns off. That&apos;s the app saving
          battery. The fix is to use a source designed for background audio — either iOS
          Background Sounds or a proper sleep app — both of which are allowed to keep playing
          all night.
        </p>

        <h2>Keep it playing all night</h2>
        <p>
          Two quick tips: <strong>plug your iPhone in</strong> overnight so battery is never a
          concern, and decide whether you want the sound to run continuously or{" "}
          <a href="/blog/sleeping-with-a-sound-machine/">fade out on a timer</a> once
          you&apos;re asleep. Lighter sleepers often prefer continuous masking; others like a
          gentle fade.
        </p>
        <p>
          LumaSleep is built for exactly this: <a href="/sounds/">70+ sounds</a>, layering, and a fade-out timer, all
          playing reliably in the background while your iPhone is locked — so you drift off and
          it keeps going as long as you need.
        </p>
      </>
    ),
  },
  {
    slug: "best-white-noise-for-babies",
    cover: "/blog/best-white-noise-for-babies.webp",
    coverAlt: "Soft pink soundwaves beneath a moon — best white noise for babies and safe volume",
    title: "Best White Noise for Babies (and How Long to Use It)",
    description:
      "What's the best white noise for babies, how loud is safe, and how long should you use it? A practical, safety-first guide to helping your baby sleep.",
    date: "2026-06-03",
    readingMinutes: 6,
    keywords: ["white noise for babies", "best white noise for baby", "baby sleep sounds", "is white noise safe for babies"],
    faqs: [
      {
        q: "Is white noise safe for babies?",
        a: "Yes, when used at a safe volume and distance. Common pediatric guidance is to keep the sound machine below about 50 decibels and place it at least 2 metres (around 7 feet) from the crib rather than right beside it. Used this way, white noise can help babies settle by mimicking the constant whoosh they heard in the womb.",
      },
      {
        q: "What is the best white noise for a baby?",
        a: "Low, steady sounds tend to work best — a gentle shushing or rainfall rather than sharp, high-pitched noise. Many parents find that deeper brown noise, a fan-like hum, or recorded womb sounds settle babies fastest because they resemble what the baby heard before birth.",
      },
      {
        q: "How long should you use white noise for a baby?",
        a: "It is generally fine to use it for the whole nap or night while the baby is settling and sleeping. Some experts suggest turning it off once the baby is in deep sleep or using a timer, but continuous low-level white noise through the night is widely considered acceptable when the volume is safe.",
      },
      {
        q: "Is it OK to use a hairdryer or vacuum sound for baby sleep?",
        a: "A recording of these household sounds can work because they resemble womb noise, but never place an actual running appliance near a baby. Use a recorded version at a safe volume and distance instead.",
      },
    ],
    body: (
      <>
        <p>
          White noise can be a parent&apos;s best friend at bedtime — it mimics the constant
          whoosh a baby heard in the womb and helps them settle. The keys are choosing the
          <strong> right kind of sound</strong> and using it at a <strong>safe volume and
          distance</strong>. Here&apos;s a practical, safety-first guide.
        </p>

        <h2>Why white noise helps babies sleep</h2>
        <p>
          The womb is a surprisingly loud place — a steady rush of blood flow and muffled
          sound. To a newborn, total silence can feel unfamiliar, while a soft, continuous
          &ldquo;shhh&rdquo; feels reassuring and familiar. White noise also masks household
          sounds — a doorbell, a sibling, the TV — that might otherwise startle a sleeping baby.
        </p>

        <h2>The best type of white noise for babies</h2>
        <p>
          Go for <strong>low, steady, and smooth</strong> rather than sharp or high-pitched:
        </p>
        <ul>
          <li><strong>Shushing or fan-like hum</strong> — closest to womb sounds.</li>
          <li><strong><a href="/noise/brown-noise/">Brown noise</a></strong> — deep and low, often more soothing than bright white noise.</li>
          <li><strong>Steady rainfall</strong> — gentle and continuous.</li>
        </ul>
        <p>
          Avoid sounds with sudden peaks or tinny high frequencies, which can be more alerting
          than calming.
        </p>

        <h2>Is white noise safe for babies?</h2>
        <p>
          Yes — with two simple rules around <strong>volume and distance</strong>:
        </p>
        <ul>
          <li><strong>Keep it below ~50 decibels</strong> — about the level of a soft shower. If you have to raise your voice to talk over it, it&apos;s too loud.</li>
          <li><strong>Place it at least ~2 metres (7 feet) from the crib</strong> — never right next to your baby&apos;s head.</li>
        </ul>
        <p>
          A baby&apos;s hearing is still developing, so erring on the quieter side is always the
          safer choice.
        </p>

        <h2>How long should you use white noise for a baby?</h2>
        <p>
          Using it for the whole nap or night, while your baby is settling and sleeping, is
          widely considered fine when the volume is safe. Some parents use a timer so it fades
          once the baby is in deep sleep; others keep it on low all night to mask household
          noise. Either approach works — do what helps your baby sleep best.
        </p>

        <h2>What about hairdryer or vacuum sounds?</h2>
        <p>
          You&apos;ll see &ldquo;hairdryer&rdquo; and &ldquo;vacuum&rdquo; tracks recommended
          for fussy babies, and they can work because they resemble womb noise. The important
          rule: use a <strong>recording</strong> at a safe distance — never run an actual
          appliance near your baby.
        </p>

        <p style={{ fontStyle: "italic" }}>
          This article is general information, not medical advice. If you have concerns about
          your baby&apos;s sleep or hearing, talk to your pediatrician.
        </p>
        <p>
          LumaSleep includes gentle, baby-friendly sounds — soft shushing, brown noise, and
          <a href="/sounds/rain/">steady rain</a> — with a fade-out timer, so you can settle your little one and let the
          sound ease off on its own.
        </p>
      </>
    ),
  },
  {
    slug: "alexa-sleep-sounds-all-night",
    cover: "/blog/alexa-sleep-sounds-all-night.webp",
    coverAlt: "Teal soundwaves over a night sky — can you leave Alexa playing sleep sounds all night",
    title: "Can You Leave Alexa Playing Sleep Sounds All Night?",
    description:
      "Yes — you can leave Alexa playing white noise or sleep sounds all night. Here's how to loop sounds, add a timer, and whether it's safe to run overnight.",
    date: "2026-06-01",
    readingMinutes: 4,
    keywords: ["alexa sleep sounds", "alexa white noise all night", "leave alexa on all night", "alexa sleep sounds loop"],
    faqs: [
      {
        q: "Can you leave Alexa playing sleep sounds all night?",
        a: "Yes. Alexa can play white noise and sleep sounds continuously through the night. The built-in sounds and most sleep-sound skills loop automatically, so you can say a command like 'Alexa, play white noise' and it will keep playing until you stop it or a timer ends.",
      },
      {
        q: "Is it safe to leave Alexa on all night?",
        a: "Leaving an Alexa device running overnight is generally safe — it uses little power and is designed for continuous use. Keep the volume moderate to protect your hearing, and plug it in rather than running on battery if it is a portable model.",
      },
      {
        q: "How do I make Alexa loop white noise?",
        a: "Say 'Alexa, play white noise' or enable a sleep-sounds skill such as Sleep Sounds: White Noise. These loop by default. To stop it automatically, add a sleep timer: 'Alexa, set a sleep timer for 8 hours.'",
      },
      {
        q: "What sleep sounds can Alexa play?",
        a: "Alexa offers white noise, rain, ocean, fan, fireplace, thunderstorm and many more through built-in sounds and free skills. You can also ask for green noise or brown noise if you prefer a softer or deeper tone.",
      },
    ],
    body: (
      <>
        <p>
          Yes — you can absolutely leave Alexa playing sleep sounds all night. The built-in
          sounds and most sleep-sound skills <strong>loop automatically</strong>, so a single
          command keeps white noise or rain going until morning. Here&apos;s how to set it up,
          loop it, and whether it&apos;s safe to run overnight.
        </p>

        <h2>How to play sleep sounds on Alexa all night</h2>
        <p>
          The simplest way is a voice command. Try any of these:
        </p>
        <ul>
          <li>&ldquo;Alexa, play white noise&rdquo;</li>
          <li>&ldquo;Alexa, play rain sounds&rdquo;</li>
          <li>&ldquo;Alexa, play ocean sounds&rdquo;</li>
          <li>&ldquo;Alexa, open Sleep Sounds&rdquo; (a free skill with dozens of options)</li>
        </ul>
        <p>
          These keep playing on a loop — they won&apos;t stop after one track.
        </p>

        <h2>How to make Alexa loop sounds (and add a timer)</h2>
        <p>
          Built-in sounds and sleep skills already loop indefinitely, so you don&apos;t need to
          do anything special to keep them going all night. If you&apos;d rather they stop on
          their own, add a <strong>sleep timer</strong>:
        </p>
        <ul>
          <li>&ldquo;Alexa, set a sleep timer for 8 hours&rdquo; — the audio fades out when the timer ends.</li>
        </ul>

        <h2>Is it safe to leave Alexa on all night?</h2>
        <p>
          Generally, yes. Echo devices are designed to run continuously and use very little
          power. Two sensible tips: keep the <strong>volume moderate</strong> to protect your
          hearing over time, and if it&apos;s a portable Echo, keep it <strong>plugged in</strong>
          rather than on battery.
        </p>

        <h2>White noise, green noise, or brown noise on Alexa?</h2>
        <p>
          Alexa can do more than plain white noise — just ask for <a href="/noise/green-noise/">&ldquo;green noise&rdquo;</a> or
          <a href="/noise/brown-noise/">&ldquo;brown noise&rdquo;</a> if you prefer something softer or deeper. Not sure which
          suits you? Our guide to{" "}
          <a href="/blog/white-noise-vs-green-noise/">white noise vs green noise</a> breaks
          down how each one sounds and what it&apos;s best for.
        </p>

        <h2>Want more control than Alexa?</h2>
        <p>
          Alexa is great for hands-free playback, but a dedicated app lets you mix sounds,
          fine-tune the blend, and take your sleep sounds with you when you travel. LumaSleep
          offers <a href="/sounds/">70+ sounds</a>, <a href="/ai-sleep-sounds/">AI-generated soundscapes</a>, and a fade-out timer — your sleep setup
          in your pocket, wherever you are.
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
