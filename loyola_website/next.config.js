/** @type {import('next').NextConfig} */
// Static export for GitHub Pages, served from https://<user>.github.io/LoyolaWebsite/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/LoyolaWebsite";

const nextConfig = {
  reactStrictMode: true,
  turbopack: { root: __dirname },
  output: "export",
  basePath,
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // No image optimisation server on GitHub Pages; the loader only adds basePath.
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
};

module.exports = nextConfig;
