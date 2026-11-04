import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.21st.dev',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/web development',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/services/web%20development',
        destination: '/services/web-development',
        permanent: true,
      },
      {
        source: '/services/mobile app development',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/mobile%20app%20development',
        destination: '/services/mobile-app-development',
        permanent: true,
      },
      {
        source: '/services/desktop app development',
        destination: '/services/desktop-app-development',
        permanent: true,
      },
      {
        source: '/services/desktop%20app%20development',
        destination: '/services/desktop-app-development',
        permanent: true,
      },
      {
        source: '/services/ai integration',
        destination: '/services/ai-integration',
        permanent: true,
      },
      {
        source: '/services/ai%20integration',
        destination: '/services/ai-integration',
        permanent: true,
      },
      {
        source: '/services/cloud deployment',
        destination: '/services/cloud-deployment',
        permanent: true,
      },
      {
        source: '/services/cloud%20deployment',
        destination: '/services/cloud-deployment',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/services/web%20development',
        destination: '/services/web-development',
      },
      {
        source: '/services/web development',
        destination: '/services/web-development',
      },
    ];
  },
};

export default nextConfig;
