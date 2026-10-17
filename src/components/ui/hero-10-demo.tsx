import { Hero10, type Hero10Props } from '@/components/ui/hero-10'

const values: Hero10Props = {
  badge: 'CAPABILITY REF.001',
  title: 'Visceral',
  titleHighlight: 'Dynamics.',
  description:
    'We engineer digital environments designed to trigger immediate engagement. This is where psychology meets pixel-perfect execution.',
  socialProof: 'Trusted by high-growth startups & product teams',
  images: [
    '/images/hero-uiux-mobile.jpg',
    '/images/hero-uiux-dashboard.jpg',
    '/images/hero-uiux-wireframes.jpg',
  ],
  imageAlts: [
    'Minimalist mobile app UX design',
    'Modern SaaS analytics & interaction dashboard',
    'Design system tokens & UX wireframe cards',
  ],
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Start your project',
    link: '/contact',
    variant: 'default',
    size: 'lg',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'View our work',
    link: '/work',
    variant: 'outline',
    size: 'default',
  },
}

export default function Hero10Demo() {
  return <Hero10 {...values} />
}
