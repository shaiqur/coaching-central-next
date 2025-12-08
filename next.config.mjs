/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // <-- static export
  images: {
    unoptimized: true,       // makes export simpler (no image optimizer)
  },
  basePath: "/coaching-central-next",
  assetPrefix: "/coaching-central-next/",
  trailingSlash: true,       // helps with some static hosts
};

export default nextConfig;
