/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed the sensitive environment variable
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
