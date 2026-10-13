import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

export type Surface = 'light' | 'alt' | 'dark' | 'navy';
export type Tone = 'b2b' | 'back';
type Glow = 'hero' | 'corner' | 'contact' | 'back';

// Full class names, so Tailwind finds them when it scans the code.
const SURFACES: Record<Surface, string> = {
  light: 'surface-light',
  alt: 'surface-alt',
  dark: 'surface-dark',
  navy: 'surface-navy',
};
const TONES: Record<Tone, string> = { b2b: 'tone-b2b', back: 'tone-back' };
const GLOWS: Record<Glow, string> = { hero: 'glow-hero', corner: 'glow-corner', contact: 'glow-contact', back: 'glow-back' };

type Props = {
  id?: string;
  surface?: Surface;
  /** Accent colour of everything inside: lime (b2b, default) or blue (back). */
  tone?: Tone;
  glow?: Glow;
  dots?: boolean;
  /** Vertical padding; off for sections that set their own (heroes). */
  padded?: boolean;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

/** A full-width band of the page: background, accent colour, decoration and the centred container. */
export function Section({ id, surface = 'light', tone = 'b2b', glow, dots, padded = true, labelledBy, className, children }: Props) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn('relative isolate overflow-hidden', SURFACES[surface], TONES[tone], padded && 'py-30 max-lg:py-22 max-sm:py-18', className)}
    >
      {glow && <div aria-hidden className={cn('absolute inset-0 -z-10', GLOWS[glow])} />}
      {dots && <div aria-hidden className="dots absolute inset-0 -z-10" />}
      <Container>{children}</Container>
    </section>
  );
}
