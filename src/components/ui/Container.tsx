import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Centred page width with the side gutters (24 px, 16 px on phones). */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1248px] px-6 max-sm:px-4', className)}>{children}</div>;
}
