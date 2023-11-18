/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "onion.tube",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
};
