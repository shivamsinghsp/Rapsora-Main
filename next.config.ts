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
      {
        source: '/services/seo-organic-growth',
        destination: '/services/seo',
        permanent: true,
      },
      {
        source: '/marketing/seo',
        destination: '/marketing/seo-organic-growth',
        permanent: true,
      },
      {
        source: '/services/maintenance',
        destination: '/support/website-management',
        permanent: true,
      },
      {
        source: '/services/hosting',
        destination: '/support/hosting-security',
        permanent: true,
      },
      {
        source: '/services/analytics',
        destination: '/support/analytics-reporting',
        permanent: true,
      },
      {
        source: '/support/maintenance',
        destination: '/support/website-management',
        permanent: true,
      },
      {
        source: '/support/hosting',
        destination: '/support/hosting-security',
        permanent: true,
      },
      {
        source: '/support/analytics',
        destination: '/support/analytics-reporting',
        permanent: true,
      },
      {
        source: '/services/brand-identity',
        destination: '/services/branding',
        permanent: true,
      },
      {
        source: '/design/brand-identity',
        destination: '/services/branding',
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
