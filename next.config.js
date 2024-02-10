/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "inv.us.projectsegfau.lt",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
};
