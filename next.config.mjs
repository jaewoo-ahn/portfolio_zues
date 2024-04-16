/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["images.pexels.com"],
    remotePatterns: [
      {
        loader: "custom",
        loaderFile: "./loader.js",
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
