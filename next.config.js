/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["www.pinclipart.com"],
  },
};

module.exports = nextConfig;
