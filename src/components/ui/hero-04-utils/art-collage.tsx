'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ArtCollageProps {
  primaryImage: string
  secondaryImage: string
  primaryAlt?: string
  secondaryAlt?: string
}

export function ArtCollage({
  primaryImage,
  secondaryImage,
  primaryAlt = '',
  secondaryAlt = '',
}: Readonly<ArtCollageProps>) {
  return (
    <div className="relative w-full">
      {/* Primary image — large, front-and-center */}
      <div className="relative z-10 overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-foreground/[0.08] bg-background">
        <img
          src={primaryImage}
          alt={primaryAlt}
          className="h-auto w-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-[1.01]"
          loading="lazy"
        />
      </div>

      {/* Secondary image — overlapping bottom-right for collage effect */}
      <div
        className={cn(
          'absolute -bottom-6 -right-4 z-20 w-[46%] overflow-hidden rounded-2xl',
          'shadow-[0_20px_40px_rgba(0,0,0,0.12)] border-4 border-background bg-background transition-transform duration-500 hover:scale-105'
        )}
      >
        <img
          src={secondaryImage}
          alt={secondaryAlt}
          className="h-auto w-full object-cover aspect-square"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default ArtCollage
