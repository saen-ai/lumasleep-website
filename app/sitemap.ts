import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { getAllPosts } from "@/lib/posts";
import { getAllSounds, getAllNoise, getAllUseCases } from "@/lib/sounds";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const posts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const sounds: MetadataRoute.Sitemap = getAllSounds().map((p) => ({
    url: `${SITE.url}/sounds/${p.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const noise: MetadataRoute.Sitemap = getAllNoise().map((p) => ({
    url: `${SITE.url}/noise/${p.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const useCases: MetadataRoute.Sitemap = getAllUseCases().map((p) => ({
    url: `${SITE.url}/sounds-for/${p.slug}/`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: `${SITE.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/sounds/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/noise/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/noise-generator/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/ai-sleep-sounds/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/sound-machine/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/sounds-for/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...sounds,
    ...noise,
    ...useCases,
    { url: `${SITE.url}/blog/`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/support/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...posts,
    { url: `${SITE.url}/privacy/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/terms/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE.url}/delete-account/`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
