import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { StoreButtons } from "@/components/Brand";
import { JsonLd } from "@/components/JsonLd";
import { ArrowRightIcon } from "@/components/icons";
import { getAllSlugs, getPost, formatDate } from "@/lib/posts";
import { abs, articleLd, breadcrumbLd, faqPageLd } from "@/lib/seo";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = abs(`/blog/${post.slug}/`);
  const image = abs(post.cover);
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      images: [{ url: image, width: 1200, height: 630, alt: post.coverAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/blog/${post.slug}/` },
  ];

  const ld: object[] = [articleLd(post), breadcrumbLd(crumbs)];
  if (post.faqs?.length) ld.push(faqPageLd(post.faqs));

  return (
    <>
      <JsonLd data={ld} />
      <Nav />
      <main>
        <article className="shell">
          <div className="mx-auto max-w-3xl pt-14 pb-16">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-[0.8rem] text-cedar">
              <a href="/" className="hover:text-linen">Home</a>
              <span className="px-1.5">/</span>
              <a href="/blog/" className="hover:text-linen">Blog</a>
            </nav>

            {/* Header */}
            <Reveal>
              <h1 className="mt-5 font-display text-[clamp(2rem,4.6vw,3rem)] font-medium leading-[1.1] tracking-[-0.01em]">
                {post.title}
              </h1>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-[0.8rem] uppercase tracking-wider text-cedar">
                {formatDate(post.date)} · {post.readingMinutes} min read
              </p>
            </Reveal>

            {/* Cover */}
            <Reveal delay={110}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.cover}
                alt={post.coverAlt}
                width={1200}
                height={630}
                className="mt-8 aspect-[40/21] w-full rounded-2xl object-cover"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </Reveal>

            {/* Body */}
            <Reveal delay={140}>
              <div className="prose mt-8">{post.body}</div>
            </Reveal>

            {/* FAQ */}
            {post.faqs?.length ? (
              <Reveal delay={160}>
                <section className="prose mt-12" aria-label="Frequently asked questions">
                  <h2>Frequently asked questions</h2>
                  {post.faqs.map((f) => (
                    <div key={f.q} className="mt-5">
                      <h3>{f.q}</h3>
                      <p>{f.a}</p>
                    </div>
                  ))}
                </section>
              </Reveal>
            ) : null}

            {/* CTA */}
            <div
              className="mt-12 rounded-3xl p-7 text-center sm:p-9"
              style={{
                background:
                  "radial-gradient(120% 140% at 50% -30%, rgba(108,99,255,0.3), transparent 60%), linear-gradient(160deg, rgba(30,37,69,0.7), rgba(11,15,30,0.7))",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <h2 className="font-display text-2xl">Try it tonight with LumaSleep</h2>
              <p className="mx-auto mt-2 max-w-md text-cedar">
                70+ sounds, AI-generated soundscapes, a sleep timer and sleep tracking —
                all in one calm app.
              </p>
              <div className="mt-6 flex justify-center">
                <StoreButtons />
              </div>
            </div>

            {/* Back */}
            <div className="mt-10">
              <a href="/blog/" className="inline-flex items-center gap-1.5 text-[0.9rem] text-amber">
                <ArrowRightIcon width={16} height={16} className="rotate-180" />
                All guides
              </a>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
