/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/coaching-central-next",
  assetPrefix: "/coaching-central-next/",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
