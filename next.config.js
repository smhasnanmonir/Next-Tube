/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "invidious.no-logs.com",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
};
