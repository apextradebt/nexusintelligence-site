import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { cn } from '@/lib/cn';

/** Fades its content in when it scrolls into view. `delay` staggers items in a row (0, 1, 2…). */
export function Reveal({ delay = 0, className, children }: { delay?: number; className?: string; children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={cn('reveal', className)} style={delay ? { transitionDelay: `${delay * 80}ms` } : undefined}>
      {children}
    </div>
  );
}
