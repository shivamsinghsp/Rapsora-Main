import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import { SiteLayout } from '@/components/layout/site-layout';
import { ThemeProvider } from '@/components/shared/theme-provider';
import { CustomCursor } from '@/components/shared/custom-cursor';
import { AuthProvider } from '@/components/shared/auth-provider';

const chillax = localFont({
  src: [
    { path: '../public/fonts/Chillax-Extralight.otf', weight: '200' },
    { path: '../public/fonts/Chillax-Light.otf', weight: '300' },
    { path: '../public/fonts/Chillax-Regular.otf', weight: '400' },
    { path: '../public/fonts/Chillax-Medium.otf', weight: '500' },
    { path: '../public/fonts/Chillax-Semibold.otf', weight: '600' },
    { path: '../public/fonts/Chillax-Bold.otf', weight: '700' },
  ],
  variable: '--font-chillax',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'RapSora Technologies',
    template: '%s | RapSora',
  },
  description:
    'RapSora is a premium digital solutions company delivering complete end-to-end business solutions — from strategy and design to development and growth — turning ideas into scalable, revenue-generating digital products.',
  keywords: [
  'RapSora',
  'digital solutions company',
  'end-to-end digital solutions',
  'web development',
  'web design',
  'UI/UX design',
  'branding',
  'ecommerce development',
  'SEO services',
  'AI solutions',
  'AI chatbot development',
  'Claude AI integration',
  'ChatGPT integration',
  'cloud solutions',
  'AWS development',
  'business automation',
  'SaaS development',
  'startup tech partner',
  'digital transformation',
  'custom software development'
],
  openGraph: {
    title: 'RapSora Technologies',
    description:
      'RapSora is a premium digital solutions company delivering complete end-to-end business solutions — from strategy and design to development and growth — turning ideas into scalable, revenue-generating digital products.',
    url: 'https://rapsora.com',
    siteName: 'RapSora',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RapSora Technologies',
    description:
      'RapSora is a premium digital solutions company delivering complete end-to-end business solutions — from strategy and design to development and growth — turning ideas into scalable, revenue-generating digital products.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${chillax.className} ${chillax.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider>
            <CustomCursor />
            <SiteLayout>{children}</SiteLayout>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
