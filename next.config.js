/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // image
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
