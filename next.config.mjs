/** @type {import('next').NextConfig} */

// Hosted natively on Vercel — Next.js runs as-is, no static export needed.
const nextConfig = {
  // Serve / link pages with a trailing slash (matches canonical + sitemap URLs).
  trailingSlash: true,
};

export default nextConfig;
