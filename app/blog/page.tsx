import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ArrowRightIcon } from "@/components/icons";
import { getAllPosts, formatDate } from "@/lib/posts";
import { abs } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sleep Guides & Tips",
  description:
    "Guides on the best sounds for sleep, white vs pink vs brown noise, AI soundscapes, sleep scores and building a better bedtime routine.",
  alternates: { canonical: abs("/blog/") },
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <Nav />
      <main>
        <header className="border-b py-16 text-center sm:py-20" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <div className="shell">
            <Reveal>
              <span className="eyebrow">The LumaSleep Blog</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.2rem)] font-medium tracking-[-0.01em]">
                Sleep guides &amp; tips
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mx-auto mt-4 max-w-xl text-cedar">
                Practical, science-aware guides on the sounds, habits and data behind
                better sleep.
              </p>
            </Reveal>
          </div>
        </header>

        <div className="shell">
          <div className="mx-auto grid max-w-4xl gap-5 py-14 sm:grid-cols-2">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 2) * 90}>
                <a href={`/blog/${post.slug}/`} className="group block h-full">
                  <article
                    className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.cover}
                        alt={post.coverAlt}
                        width={1200}
                        height={630}
                        loading="lazy"
                        className="aspect-[40/21] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="text-[0.75rem] uppercase tracking-wider text-cedar">
                        {formatDate(post.date)} · {post.readingMinutes} min read
                      </div>
                      <h2 className="mt-3 font-display text-xl leading-snug">{post.title}</h2>
                      <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-cedar">
                        {post.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-amber">
                        Read guide
                        <ArrowRightIcon
                          width={16}
                          height={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </article>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
