import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Rounded panel that adapts to its section: white with a shadow on light, translucent on dark. */
export function Card({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('rounded-[20px] border border-card-line bg-card shadow-card', className)}>{children}</div>;
}
