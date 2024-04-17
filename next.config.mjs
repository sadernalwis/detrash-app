/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['next-international', 'international-types'],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
