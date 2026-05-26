/** @type {import('next').NextConfig} */

// On GitHub Pages project sites the app is served from /<repo>, so we need a
// matching basePath. The deploy workflow injects PAGES_BASE_PATH from the
// `actions/configure-pages` step (empty for a custom domain or user site).
const rawBasePath = process.env.PAGES_BASE_PATH ?? "";
const basePath = rawBasePath === "/" ? "" : rawBasePath;

const nextConfig = {
  // Emit a fully static site into /out for GitHub Pages.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  // GitHub Pages serves /privacy/ -> /privacy/index.html
  trailingSlash: true,
  // No Next image optimization server in a static export.
  images: { unoptimized: true },
};

export default nextConfig;
