import { Reveal } from "../Reveal";
import { SectionHeading } from "../ui";
import { ArrowRightIcon } from "../icons";
import { getAllPosts, formatDate } from "@/lib/posts";

// Latest 3 guides on the homepage — passes internal-link authority to the blog
// and keeps the page fresh. Card markup mirrors app/blog/page.tsx.
export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="From the blog"
          title="Sleep guides &amp; tips"
          blurb="Practical, science-aware guides on the sounds, habits and data behind better sleep."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 90} as="div">
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
                    <h3 className="mt-3 font-display text-lg leading-snug">{post.title}</h3>
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

        <div className="mt-10 text-center">
          <a
            href="/blog/"
            className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-amber"
          >
            View all guides
            <ArrowRightIcon width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
