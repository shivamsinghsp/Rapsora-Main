'use client'

import * as React from 'react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

type ButtonVariantProps = VariantProps<typeof buttonVariants>

export interface CtaProps {
  ctaEnabled?: boolean
  text?: string
  link?: string
  variant?: ButtonVariantProps['variant']
  size?: ButtonVariantProps['size']
  className?: string
}

export function Cta({ cta }: Readonly<{ cta: CtaProps }>) {
  if (!cta.ctaEnabled || !cta.text) return null

  const isLink = cta.variant === 'link'

  const buttonContent = (
    <Button
      variant={cta.variant ?? 'default'}
      size={cta.size ?? 'default'}
      asChild={!!cta.link}
      className={cn(
        'font-heading font-semibold tracking-tight transition-all duration-300',
        !isLink && 'rounded-full px-6 sm:px-8 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]',
        cta.className,
      )}
    >
      {cta.link ? (
        <Link href={cta.link}>{cta.text}</Link>
      ) : (
        cta.text
      )}
    </Button>
  )

  return buttonContent
}

export default Cta
