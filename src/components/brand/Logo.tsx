import { cn } from '@/lib/cn';
import { Mark } from './Mark';
import { Wordmark } from './Wordmark';
import type { LogoVariant } from './logoGeometry';

type Size = 'header' | 'footer';

// Mark, wordmark and subline stroke per size. Below 640 px the header keeps only the mark and NEXUS.
const SIZES: Record<Size, { mark: string; word: string; nexus: string; stroke: number; rim: number }> = {
  header: { mark: 'size-[42px] max-sm:size-8', word: 'h-[30px] w-[143px]', nexus: 'h-[15px] w-[123px]', stroke: 6, rim: 24 },
  footer: { mark: 'size-[52px]', word: 'h-9 w-[172px]', nexus: 'h-9 w-[172px]', stroke: 5.5, rim: 20 },
};

/** The full logo: mark + NEXUS / INTELLIGENCE, as a link. */
export function Logo({ href, label, variant = 'dark', size = 'header', className }: {
  href: string;
  label: string;
  variant?: LogoVariant;
  size?: Size;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <a href={href} aria-label={label} className={cn('inline-flex flex-none items-center gap-3 max-sm:gap-2.5', className)}>
      <Mark variant={variant} rim={s.rim} className={s.mark} />
      <Wordmark variant={variant} sublineStroke={s.stroke} className={cn(s.word, size === 'header' && 'max-sm:hidden')} />
      {size === 'header' && <Wordmark variant={variant} withSubline={false} className={cn(s.nexus, 'hidden max-sm:block')} />}
    </a>
  );
}
