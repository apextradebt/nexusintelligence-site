import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'lime' | 'blue' | 'ghost' | 'solid';
type Size = 'md' | 'sm';

const VARIANTS: Record<Variant, string> = {
  lime: 'border-transparent bg-lime text-deep hover:bg-[#A3B787] hover:shadow-[0_8px_24px_-8px_rgba(145,166,115,.6)]',
  blue: 'border-transparent bg-blue text-white hover:bg-[#5986D4] hover:shadow-[0_8px_24px_-8px_rgba(74,120,200,.6)]',
  ghost: 'border-bright/25 bg-bright/[.03] text-bright hover:border-bright/45 hover:bg-bright/[.07]',
  solid: 'border-transparent bg-hunter text-bright hover:brightness-110',
};
const SIZES: Record<Size, string> = {
  md: 'min-h-12 px-[22px] text-base',
  sm: 'min-h-10 px-4 text-[14.5px]',
};

type Props = {
  /** A link when set, otherwise a <button>. */
  href?: string;
  variant?: Variant;
  size?: Size;
  /** Adds an arrow that slides on hover. */
  arrow?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  className?: string;
  children: ReactNode;
};

/** Pill-shaped call-to-action button or link. */
export function Button({ href, variant = 'lime', size = 'md', arrow, type = 'button', onClick, className, children }: Props) {
  const classes = cn(
    'group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border font-semibold transition duration-200 ease-soft active:translate-y-px',
    VARIANTS[variant],
    SIZES[size],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden className="size-[18px] transition-transform duration-200 group-hover:translate-x-[3px]" />}
    </>
  );
  return href ? (
    <a href={href} className={classes}>{content}</a>
  ) : (
    <button type={type} onClick={onClick} className={classes}>{content}</button>
  );
}
