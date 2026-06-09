// Keyword-targeted landing pages for sound types and noise colours.
// Built the same way as the blog (lib/posts.tsx): one data array per silo,
// rendered by a single [slug] route. Content here is genuine and substantial
// (not thin doorway pages) so each can rank for its target keyword while
// staying faithful to what LumaSleep actually does.

export type Landing = {
  slug: string;
  glyph: string;
  // Exact-match H1 / primary keyword.
  h1: string;
  // SEO <title> (~55-60 chars; the layout appends " — LumaSleep").
  title: string;
  description: string;
  keywords: string[];
  // Short blurb shown on the hub card.
  tagline: string;
  // Lead paragraph under the H1.
  intro: string;
  sections: { h2: string; paras: string[] }[];
  faqs: { q: string; a: string }[];
  // Slugs of sibling pages in the SAME silo to cross-link.
  related: string[];
  // Optional related blog article slug (topical cluster signal).
  relatedPost?: string;
};

// ── /sounds/ silo — ambient sound types ──────────────────────────
export const SOUNDS: Landing[] = [
  {
    slug: "rain",
    glyph: "🌧",
    h1: "Rain Sounds for Sleeping",
    title: "Rain Sounds for Sleeping — Free in the LumaSleep App",
    description:
      "Fall asleep to gentle rain, heavy rain on a roof, and rainstorms. LumaSleep has multiple high-quality rain sounds for sleeping, with a sleep timer and mixing.",
    keywords: [
      "rain sounds for sleeping",
      "rain sounds",
      "heavy rain sounds for sleeping",
      "rain sounds to sleep by",
      "rain white noise",
    ],
    tagline: "Gentle showers to heavy downpours",
    intro:
      "Rain is the most popular sound to sleep to, and for good reason: it is gentle, continuous, and full of soft randomness that the brain finds soothing rather than alerting. LumaSleep gives you several rain sounds to sleep by — from barely-there drizzle to a heavy downpour on a cabin roof — so you can find the exact texture that switches your mind off.",
    sections: [
      {
        h2: "Why rain sounds help you fall asleep fast",
        paras: [
          "Rain works as a natural sound blanket. Its steady, broadband hiss masks the sudden noises — a door, a passing car, a creak in the house — that would otherwise pull you back to wakefulness just as you drift off. Because the sound is predictable, your brain stops actively monitoring it and lets you settle.",
          "The slow, irregular patter also slows racing thoughts. Many people find that focusing on the gentle rhythm of rain is an easier, more natural way to wind down than trying to clear the mind on purpose.",
        ],
      },
      {
        h2: "Light rain, heavy rain, and rain on a roof",
        paras: [
          "Light rain suits people who want barely-there background texture. Heavy rain sounds for sleeping work better if you need to mask louder household or street noise, or if you simply find a fuller wall of sound more comforting.",
          "In LumaSleep, many rain sounds have multiple variants — tap to swap between a soft shower, a steady rainfall, and rain on a tin roof or window — and your preferred variant is remembered for next time.",
        ],
      },
      {
        h2: "Mix rain with thunder, fire, or ocean",
        paras: [
          "Rain layers beautifully. Add distant thunder for a stormy night, a crackling fire for a cosy-cabin feel, or wind through pine trees for depth. LumaSleep lets you stack several sounds and set each one's volume to build your own personal rainstorm.",
          "Set the sleep timer so playback fades out gently after you have drifted off, and it never runs all night.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are the rain sounds free?",
        a: "LumaSleep is free to download with a selection of rain sounds. Premium unlocks the full library, unlimited AI-generated soundscapes, and sound mixing.",
      },
      {
        q: "Can I play rain sounds all night?",
        a: "Yes. You can let rain play continuously, or set the sleep timer to fade it out after a set time so it doesn't run until morning.",
      },
      {
        q: "Do you have heavy rain and rain on a roof?",
        a: "Yes — many rain sounds have multiple variants including light rain, heavy rain, and rain on a roof, and you can layer thunder over the top.",
      },
    ],
    related: ["thunderstorm", "ocean", "fire"],
    relatedPost: "rain-sounds-for-sleep",
  },
  {
    slug: "fan",
    glyph: "🌀",
    h1: "Fan Sounds for Sleeping",
    title: "Fan Sounds for Sleeping — Steady White Noise to Sleep",
    description:
      "Recreate the steady hum of a box fan or ceiling fan. LumaSleep's fan sounds for sleeping give you consistent, soothing white noise without the cold draft.",
    keywords: [
      "fan sounds for sleeping",
      "fan noise",
      "box fan sound",
      "fan white noise",
    ],
    tagline: "The steady hum of a box fan",
    intro:
      "If you have always slept with a fan running, you already know how powerfully its steady drone settles a busy mind. LumaSleep's fan sounds for sleeping recreate that exact hum — the consistent, slightly muffled whoosh of a box fan or ceiling fan — without the cold draft or the worry about your electricity bill.",
    sections: [
      {
        h2: "Why a fan is the perfect sleep sound",
        paras: [
          "A fan produces near-constant broadband noise, which is essentially natural white noise. It is one of the most effective sounds for masking disruptions because it has no melody, no pattern, and no surprises — just an even, enveloping hum your brain can tune out completely.",
          "For many people the fan sound is also deeply associated with sleep itself, built up over years of nights. Hearing it is a powerful cue that it is time to rest.",
        ],
      },
      {
        h2: "Fan sound vs white noise",
        paras: [
          "A fan sound is a warmer, slightly lower version of pure white noise — the housing and blades roll off some of the harshest high frequencies, which many people find more pleasant than a flat hiss.",
          "If you want to compare, LumaSleep also includes true white, pink, and brown noise so you can pick whichever texture sends you off fastest.",
        ],
      },
      {
        h2: "Take your fan sound anywhere",
        paras: [
          "The best thing about a fan sound in an app is that it travels. Hotel rooms, flights, a partner's house, a noisy dorm — you get the same reliable hum everywhere, at a volume you control, with a sleep timer to fade it out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a fan sound the same as white noise?",
        a: "Very close. A fan produces broadband noise like white noise, but slightly warmer because the blades and housing soften the highest frequencies. Many people find it more pleasant than a pure hiss.",
      },
      {
        q: "Can I use fan sounds for a baby?",
        a: "Many parents use steady fan or white noise to help babies settle. Keep the volume moderate and the device a safe distance from the crib, and consult your pediatrician for guidance.",
      },
      {
        q: "Will it play all night?",
        a: "You can play it continuously or set the sleep timer to fade it out gently after you fall asleep.",
      },
    ],
    related: ["deep-sleep", "ocean", "rain"],
    relatedPost: "white-noise-vs-pink-noise-vs-brown-noise",
  },
  {
    slug: "ocean",
    glyph: "🌊",
    h1: "Ocean Sounds for Sleeping",
    title: "Ocean Sounds for Sleeping — Waves & Surf to Relax",
    description:
      "Drift off to rolling ocean waves and gentle surf. LumaSleep's ocean sounds for sleeping mirror the rhythm of calm breathing to help you unwind and fall asleep.",
    keywords: [
      "ocean sounds for sleeping",
      "ocean waves for sleep",
      "sea sounds",
      "surf sounds for sleep",
    ],
    tagline: "Rolling waves and gentle surf",
    intro:
      "The slow rise and fall of ocean waves mirrors the rhythm of relaxed breathing, which is part of why so many people find it the easiest sound to wind down to. LumaSleep's ocean sounds for sleeping range from gentle lapping water to a steady rolling surf, so you can choose how much sound fills the room.",
    sections: [
      {
        h2: "Why ocean waves are so calming",
        paras: [
          "Waves have a long, drawn-out rhythm — a swell, a break, a hiss, and a pause — that the brain reads as deeply unhurried. That slow cadence can help your own breathing and heart rate ease down as you settle in for the night.",
          "Unlike a flat noise track, the gentle variation between each wave keeps the sound interesting enough to hold your attention away from racing thoughts, without ever becoming jarring.",
        ],
      },
      {
        h2: "Gentle lapping or rolling surf",
        paras: [
          "If you are a light sleeper, a soft shoreline with small lapping waves gives you calm texture without much volume. If you need to mask noise, a fuller rolling surf creates a broader sound blanket closer to the ocean's version of white noise.",
          "Layer in distant seabirds or a coastal breeze for a complete beach-at-night scene, and set the sleep timer to fade it out after you drift off.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do ocean sounds really help you sleep?",
        a: "Many people find the slow, rhythmic pattern of waves relaxing because it resembles the pace of calm breathing and masks sudden noises. It's one of the most popular sleep sounds for winding down a busy mind.",
      },
      {
        q: "Can I mix ocean sounds with other sounds?",
        a: "Yes. In LumaSleep you can layer ocean waves with rain, wind, or seabirds and adjust each volume to build your own coastal soundscape.",
      },
    ],
    related: ["rain", "deep-sleep", "fan"],
    relatedPost: "best-sounds-to-fall-asleep-fast",
  },
  {
    slug: "thunderstorm",
    glyph: "⛈",
    h1: "Thunderstorm Sounds for Sleep",
    title: "Thunderstorm Sounds for Sleep — Thunder & Rain to Sleep",
    description:
      "Sleep to rolling thunder and rain. LumaSleep's thunderstorm sleep sounds layer distant thunder over heavy rain for a cosy, enveloping storm you control.",
    keywords: [
      "thunderstorm sounds for sleep",
      "thunderstorm sleep sounds",
      "thunder sleep sounds",
      "thunder and rain sounds",
    ],
    tagline: "Distant thunder over heavy rain",
    intro:
      "There is something deeply safe about being tucked in while a storm rolls past outside. LumaSleep's thunderstorm sleep sounds layer low, distant thunder over steady rain so you get all the cosy drama of a storm with none of the worry — at a volume you control, fading out on a timer.",
    sections: [
      {
        h2: "Why thunderstorms are so good for sleep",
        paras: [
          "Rain provides a continuous sound blanket that masks disruptive noise, while the occasional low rumble of thunder adds a slow, grounding pulse that many people find reassuring rather than alarming. Together they create an immersive scene that gives the mind something steady to settle into.",
          "Distant thunder works best for sleep — deep and rolling rather than sharp and close — so it adds atmosphere without jolting you awake.",
        ],
      },
      {
        h2: "Thunder, rain, and wind together",
        paras: [
          "In LumaSleep you can build the exact storm you want: heavier or lighter rain, more or less frequent thunder, and a layer of wind for a wilder night. Each sound has its own volume so you can dial the storm up or down.",
          "Prefer pure thunder sleep sounds without much rain? Lower the rain layer and let the rolling thunder carry the scene on its own.",
        ],
      },
    ],
    faqs: [
      {
        q: "Won't thunder wake me up?",
        a: "LumaSleep's thunderstorm sounds use distant, rolling thunder rather than sharp cracks, so it adds atmosphere without jolting you awake. You can also lower the thunder layer and keep more rain.",
      },
      {
        q: "Can I get thunder without rain?",
        a: "Yes. Because sounds layer independently, you can lower the rain and let rolling thunder carry the soundscape on its own.",
      },
      {
        q: "Does it play all night?",
        a: "You can play it continuously or set the sleep timer so the storm fades out gently after you fall asleep.",
      },
    ],
    related: ["rain", "blizzard", "fire"],
    relatedPost: "rain-sounds-for-sleep",
  },
  {
    slug: "blizzard",
    glyph: "❄️",
    h1: "Blizzard Sleep Sounds",
    title: "Blizzard Sleep Sounds — Howling Wind & Snowstorm",
    description:
      "Sleep to a howling snowstorm. LumaSleep's blizzard sleep sounds wrap you in wind and falling snow for a warm, cosy contrast on cold nights.",
    keywords: [
      "blizzard sleep sounds",
      "snowstorm sounds for sleep",
      "winter wind sounds",
      "howling wind for sleep",
    ],
    tagline: "A howling snowstorm outside",
    intro:
      "Few sounds make a warm bed feel cosier than a blizzard raging outside. LumaSleep's blizzard sleep sounds wrap you in howling wind and swirling snow — the sonic equivalent of a heavy blanket — so a cold night becomes the most comforting time to drift off.",
    sections: [
      {
        h2: "Why a blizzard helps you sleep",
        paras: [
          "Wind is a powerful sleep sound because it is broadband and continuous, much like white noise, but with a gentle ebb and surge that keeps it from feeling flat. A blizzard adds the soft, muffling quality of falling snow, which dampens sharp edges and creates a deeply enveloping wall of sound.",
          "There is also a psychological warmth to it: hearing a storm you are safely sheltered from triggers a strong sense of comfort and security, ideal for winding down.",
        ],
      },
      {
        h2: "Pair a blizzard with a crackling fire",
        paras: [
          "For the ultimate winter-cabin scene, layer the blizzard with a crackling fireplace. The contrast of howling cold outside and warm crackle inside is irresistibly cosy. Add a touch of low wind howl for a wilder storm, and fade it all out on the sleep timer.",
        ],
      },
    ],
    faqs: [
      {
        q: "What's in a blizzard sleep sound?",
        a: "It blends steady, broadband wind with the soft muffling of falling snow and occasional gusts — an enveloping, white-noise-like wall of sound that masks disruptions.",
      },
      {
        q: "Can I combine it with other sounds?",
        a: "Yes. A blizzard pairs especially well with a crackling fire for a cosy winter-cabin feel. You can layer and adjust each sound's volume in LumaSleep.",
      },
    ],
    related: ["thunderstorm", "fire", "rain"],
    relatedPost: "best-sounds-to-fall-asleep-fast",
  },
  {
    slug: "deep-sleep",
    glyph: "💤",
    h1: "Deep Sleep Sounds",
    title: "Deep Sleep Sounds — Sounds for Deeper, Longer Sleep",
    description:
      "The best deep sleep sounds to help you fall asleep faster and stay asleep — steady noise, rain, and low ambient tones, plus sleep tracking to see what works.",
    keywords: [
      "deep sleep sounds",
      "sounds for deep sleep",
      "sleep deeply",
      "stay asleep sounds",
    ],
    tagline: "Steady sounds for staying asleep",
    intro:
      "Falling asleep is only half the battle — staying asleep through the night is what leaves you rested. LumaSleep's deep sleep sounds are chosen for their steadiness: continuous, low-variation textures that mask the disruptions which would otherwise nudge you out of deep sleep, so you can stay under longer.",
    sections: [
      {
        h2: "What makes a sound good for deep sleep",
        paras: [
          "The key is consistency. Sounds that stay even all night — brown noise, a fan, steady rain, low ambient drones — give your brain nothing to latch onto, so it stops monitoring the environment and lets you sink into deeper stages.",
          "Lower-frequency, warmer sounds like brown noise are especially good for staying asleep, because they mask the low rumbles (traffic, footsteps, a partner moving) that tend to cause micro-awakenings.",
        ],
      },
      {
        h2: "See which sounds actually help you",
        paras: [
          "LumaSleep connects to Apple Health or Health Connect to give you a nightly sleep score and a deep/REM/light stage breakdown. Over a week, its insights can show patterns — for example, that you sleep best on nights you played rain or brown noise — so you are not guessing about what works for you.",
          "Set the sleep timer to fade your sound out, or let it run all night to keep masking noise through the lighter stages of the early morning.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which sounds are best for deep sleep?",
        a: "Steady, low-variation sounds work best for staying asleep — brown noise, a fan, continuous rain, and low ambient tones. They mask the noises that cause micro-awakenings.",
      },
      {
        q: "Can LumaSleep show how well I slept?",
        a: "Yes. Connect Apple Health or Health Connect and LumaSleep gives you a 0–100 sleep score with a deep, REM, light and awake stage breakdown each morning.",
      },
    ],
    related: ["fan", "ocean", "rain"],
    relatedPost: "understanding-your-sleep-score",
  },
  {
    slug: "fire",
    glyph: "🔥",
    h1: "Fireplace Sounds for Sleep",
    title: "Fireplace Sounds for Sleep — Crackling Fire & Campfire",
    description:
      "Wind down to a crackling fireplace or campfire. LumaSleep's fire sounds are warm and grounding, and pair perfectly with rain or a winter blizzard.",
    keywords: [
      "fireplace sounds for sleep",
      "crackling fire sounds",
      "campfire sounds",
      "fire sounds for sleeping",
    ],
    tagline: "A warm, crackling hearth",
    intro:
      "The irregular crackle and pop of a fire is warm, grounding, and full of comforting associations. LumaSleep's fireplace sounds for sleep give you a cosy hearth on demand — perfect on cold nights or for anyone who simply finds the sound of a fire deeply relaxing.",
    sections: [
      {
        h2: "Why a crackling fire relaxes you",
        paras: [
          "Fire sits in a sweet spot between steady and varied. Underneath there is a continuous, soft roar that masks background noise, while the random crackles and pops on top give the mind gentle, low-stakes texture to follow as it lets go.",
          "It also carries a strong sense of warmth and safety — a hearth signals shelter and rest, which makes it a natural cue to wind down.",
        ],
      },
      {
        h2: "Cabin nights: fire plus rain or snow",
        paras: [
          "A crackling fire pairs beautifully with rain on the roof or a blizzard outside for an unbeatable cosy-cabin effect — warm crackle inside, wild weather safely beyond the walls. Layer them in LumaSleep, balance the volumes, and fade it all out on the sleep timer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a fireplace sound good for sleep?",
        a: "Yes. A fire combines a steady underlying roar that masks noise with gentle, random crackles that give the mind something soothing to follow — warm and grounding for winding down.",
      },
      {
        q: "What pairs well with fire sounds?",
        a: "Rain on a roof or a winter blizzard are the classic pairings for a cosy-cabin feel. You can layer and balance them in LumaSleep.",
      },
    ],
    related: ["rain", "blizzard", "thunderstorm"],
    relatedPost: "best-sounds-to-fall-asleep-fast",
  },
  {
    slug: "sleep-music",
    glyph: "🎼",
    h1: "Sleep Music",
    title: "Sleep Music — Calming Music & Soundscapes to Sleep",
    description:
      "Relaxing sleep music and calming soundscapes to help you drift off — gentle ambient, classical, and meditative tracks, with a sleep timer that fades out.",
    keywords: [
      "sleep music",
      "music to fall asleep to",
      "relaxing sleep music",
      "calming music for sleep",
    ],
    tagline: "Calming, gentle, melodic",
    intro:
      "Some nights, plain noise is not quite enough — you want something with a little melody to carry you off. LumaSleep's sleep music brings together gentle ambient, soft classical, and meditative tracks designed to slow the mind without ever demanding your attention.",
    sections: [
      {
        h2: "What makes music good for sleep",
        paras: [
          "Sleep music is slow, simple, and predictable — typically around 60 beats per minute, close to a resting heart rate, with soft dynamics and no sudden changes. The goal is music that fades into the background and gently lowers your arousal, rather than music you actively listen to.",
          "LumaSleep includes meditative, classical, and ambient categories alongside its nature and noise sounds, so you can switch between melodic and textural depending on the night.",
        ],
      },
      {
        h2: "Set it and drift off",
        paras: [
          "Because melodic tracks can feel jarring if they are still playing when you stir at 3am, the sleep timer is especially useful here — set a gentle fade-out so the music carries you to sleep and then quietly bows out.",
        ],
      },
    ],
    faqs: [
      {
        q: "What kind of sleep music does LumaSleep have?",
        a: "Gentle ambient, soft classical, and meditative tracks, alongside focus music and nature sounds. You can browse them by category in the Sounds tab.",
      },
      {
        q: "Should music play all night?",
        a: "Many people prefer a fade-out, since melodic music can be jarring if you half-wake to it. LumaSleep's sleep timer fades music out gently after you fall asleep.",
      },
    ],
    related: ["deep-sleep", "ocean", "rain"],
    relatedPost: "best-sounds-for-focus-and-studying",
  },
];

// ── /noise/ silo — noise colours ─────────────────────────────────
export const NOISE: Landing[] = [
  {
    slug: "white-noise",
    glyph: "📻",
    h1: "White Noise for Sleep",
    title: "White Noise for Sleep — Free White Noise Sound App",
    description:
      "A white noise sleep sound app with steady, even noise to block out distractions. Play white noise all night or on a timer, free with LumaSleep.",
    keywords: [
      "white noise",
      "white noise sleep sound app",
      "white noise for sleep",
      "white noise app",
    ],
    tagline: "Bright, even, all-masking",
    intro:
      "White noise is the classic sleep sound: a steady, even hiss that contains every frequency at equal intensity. That flat, full spectrum makes it the most effective sound for masking distractions — and LumaSleep is a free white noise sleep sound app that lets you play it all night or fade it out on a timer.",
    sections: [
      {
        h2: "What white noise is and why it works",
        paras: [
          "White noise contains all audible frequencies at roughly equal power, which is why it sounds like a bright, full hiss — similar to an untuned radio or a fan on high. Because it covers the whole spectrum, it is excellent at masking sudden noises: a slammed door, a barking dog, a snoring partner all get blended into the background.",
          "With nothing to track and nothing to anticipate, your brain stops monitoring the room, which makes it easier to fall asleep and to stay asleep through minor disruptions.",
        ],
      },
      {
        h2: "A white noise app you can take anywhere",
        paras: [
          "A dedicated machine stays on your nightstand; an app goes everywhere. LumaSleep gives you reliable white noise on your phone for travel, hotels, flights, and noisy environments — with precise volume control and a sleep timer, plus pink, brown, and green noise if you want a softer or deeper alternative.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is LumaSleep a free white noise app?",
        a: "Yes, LumaSleep is free to download and includes white noise. Premium unlocks the full sound library, sound mixing, and unlimited AI-generated soundscapes.",
      },
      {
        q: "Can I play white noise all night?",
        a: "Yes. Play it continuously through the night, or set the sleep timer to fade it out gently after you fall asleep.",
      },
      {
        q: "What's the difference between white, pink, and brown noise?",
        a: "White noise is bright and even across all frequencies; pink noise is softer and more balanced; brown noise is deep and rumbling. Many people find pink or brown more soothing for sleep.",
      },
    ],
    related: ["pink-noise", "brown-noise", "green-noise"],
    relatedPost: "white-noise-vs-pink-noise-vs-brown-noise",
  },
  {
    slug: "brown-noise",
    glyph: "🟤",
    h1: "Brown Noise for Sleep",
    title: "Brown Noise for Sleep — Deep, Rumbling Noise to Relax",
    description:
      "Brown noise is the deepest, most rumbling noise colour — many find it the most calming for sleep and focus. Play brown noise free in the LumaSleep app.",
    keywords: [
      "brown noise",
      "brown noise for sleep",
      "brown noise app",
      "brown noise vs white noise",
    ],
    tagline: "Deep, warm, rumbling",
    intro:
      "Brown noise is the deepest of the noise colours — a low, soft rumble with the high frequencies rolled off, often compared to a steady waterfall or distant thunder. Many people who find white noise too harsh discover that brown noise is the one that finally lets them switch off.",
    sections: [
      {
        h2: "Why brown noise feels so calming",
        paras: [
          "Brown noise puts far more energy into the low frequencies than white noise, so instead of a bright hiss you get a warm, enveloping rumble. That deeper profile is gentler on the ears and especially good at masking low-frequency disturbances like traffic, footsteps, or a snoring partner.",
          "It has become a favourite for both sleep and focus, with many people reporting that the deep, even rumble quiets a racing or distractible mind.",
        ],
      },
      {
        h2: "Brown noise vs white and pink",
        paras: [
          "If white noise is bright and pink noise is balanced, brown noise is deep and dark. As a rule of thumb: choose white to mask sharp, high-pitched noise, pink for an all-round soft option, and brown when you want the warmest, most rumbling sound for relaxation. LumaSleep includes all of them so you can compare directly.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is brown noise good for?",
        a: "Its deep, rumbling profile is excellent at masking low-frequency noise like traffic and snoring, and many people find it the most calming colour for both sleep and focus.",
      },
      {
        q: "Is brown noise better than white noise for sleep?",
        a: "It depends on you. Brown noise is warmer and deeper, which many people prefer; white noise is brighter and better at masking high-pitched sounds. LumaSleep lets you try both.",
      },
    ],
    related: ["white-noise", "pink-noise", "green-noise"],
    relatedPost: "white-noise-vs-pink-noise-vs-brown-noise",
  },
  {
    slug: "pink-noise",
    glyph: "🌸",
    h1: "Pink Noise for Sleep",
    title: "Pink Noise for Sleep — Soft, Balanced Noise to Sleep",
    description:
      "Pink noise is softer and more balanced than white noise — like steady rain or rustling leaves. Play pink noise for sleep free in the LumaSleep app.",
    keywords: [
      "pink noise for sleep",
      "pink noise",
      "pink noise app",
      "pink noise vs white noise",
    ],
    tagline: "Soft, balanced, natural",
    intro:
      "Pink noise is the middle ground between bright white noise and deep brown noise — a softer, more balanced sound that occurs all over nature, in steady rain, rustling leaves, and wind. For a lot of people it is the most natural and easy-going noise colour to sleep to.",
    sections: [
      {
        h2: "What makes pink noise different",
        paras: [
          "Pink noise reduces the higher frequencies that make white noise sound harsh, giving more weight to the lower and mid range. The result is a fuller, gentler sound that many ears find more pleasant for long stretches — closer to the natural sounds we already associate with calm.",
          "Because it is balanced rather than bright or deep, pink noise is a great all-round default if you are not sure which colour suits you.",
        ],
      },
      {
        h2: "Pink noise and sleep quality",
        paras: [
          "Pink noise has drawn particular interest in sleep research for its steady, balanced character, and many people report falling asleep more easily with it than with brighter white noise. The best test is your own experience — LumaSleep lets you switch between white, pink, brown, and green noise to find your match, and track which nights you slept best.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is pink noise better than white noise?",
        a: "Pink noise is softer and more balanced, which many people find more pleasant and natural for sleep, while white noise is brighter. Try both in LumaSleep and see which one settles you faster.",
      },
      {
        q: "What does pink noise sound like?",
        a: "Like the steady, balanced sounds of nature — rain, wind, or rustling leaves — rather than a bright hiss or a deep rumble.",
      },
    ],
    related: ["white-noise", "brown-noise", "green-noise"],
    relatedPost: "white-noise-vs-pink-noise-vs-brown-noise",
  },
  {
    slug: "green-noise",
    glyph: "🟢",
    h1: "Green Noise for Sleep",
    title: "Green Noise Sleep Sounds — Mid-Range Noise to Relax",
    description:
      "Green noise centres on mid-range frequencies, often likened to a gentle ocean or forest. Play green noise sleep sounds free in the LumaSleep app.",
    keywords: [
      "green noise sleep sounds",
      "green noise",
      "green noise for sleep",
      "green noise app",
    ],
    tagline: "Mid-range, like nature itself",
    intro:
      "Green noise is the newest noise colour to catch on for sleep. It concentrates energy in the middle of the frequency range — the band of natural ambient sound — so it is often described as the soothing hum of a calm ocean, a steady waterfall, or a quiet forest. If white noise feels too sharp and brown too heavy, green noise sleep sounds may be your sweet spot.",
    sections: [
      {
        h2: "What is green noise?",
        paras: [
          "Green noise is essentially a slice of pink noise centred on the mid frequencies, around the range where much of nature's background sound lives. That mid-focused profile gives it a soft, rounded, organic quality — fuller than white noise but lighter than brown.",
          "Because it sits right in the band our ears find most natural, many people describe green noise as the most 'outdoors' of the noise colours, like standing near gentle surf or a forest stream.",
        ],
      },
      {
        h2: "Is green noise right for you?",
        paras: [
          "Green noise tends to suit people who love nature sounds but want something steadier and more continuous than rain or waves. It masks distractions well while staying gentle. The only way to know your colour is to compare — LumaSleep includes white, pink, brown, and green noise side by side, plus nature sounds if you want the real thing.",
        ],
      },
    ],
    faqs: [
      {
        q: "What does green noise sound like?",
        a: "It centres on mid-range frequencies, so it's often likened to a calm ocean, a steady waterfall, or a quiet forest — fuller than white noise but lighter than brown.",
      },
      {
        q: "Is green noise good for sleep?",
        a: "Many people find its soft, mid-focused, nature-like character very soothing for sleep. LumaSleep lets you compare it against white, pink, and brown noise to find your favourite.",
      },
    ],
    related: ["pink-noise", "white-noise", "brown-noise"],
    relatedPost: "white-noise-vs-pink-noise-vs-brown-noise",
  },
];

// ── Lookup helpers ───────────────────────────────────────────────
export function getAllSounds(): Landing[] {
  return SOUNDS;
}
export function getSound(slug: string): Landing | undefined {
  return SOUNDS.find((s) => s.slug === slug);
}
export function getAllNoise(): Landing[] {
  return NOISE;
}
export function getNoise(slug: string): Landing | undefined {
  return NOISE.find((n) => n.slug === slug);
}
