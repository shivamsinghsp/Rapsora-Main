import { Hero04, type Hero04Props } from '@/components/ui/hero-04'

const values = {
  title: 'A gallery for the work',
  titleLine2: 'you are proud of.',
  description:
    'Collect, arrange, and publish your art in a space that feels like a studio, not a spreadsheet.',
  washImage:
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=80',
  primaryImage:
    'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
  secondaryImage:
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  primaryAlt: 'Featured artwork',
  secondaryAlt: 'Abstract artwork',
  animation: 'subtle',
  primaryCTA: {
    ctaEnabled: true,
    text: 'Start your gallery',
    link: '',
    variant: 'default',
    size: 'default',
  },
  secondaryCTA: {
    ctaEnabled: true,
    text: 'See examples',
    link: '',
    variant: 'link',
  },
} satisfies Hero04Props

export default function Hero04Demo() {
  return <Hero04 {...values} />
}
