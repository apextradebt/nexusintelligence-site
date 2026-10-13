import type { ReactNode } from 'react';

const Line = ({ className = '' }: { className?: string }) => <span aria-hidden className={`h-0.5 w-7 rounded bg-current ${className}`} />;

/** Small monospaced label above a heading, with a short line before it (and after it when centred). */
export function Eyebrow({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-[12.5px] font-medium uppercase tracking-[.16em] text-hl max-sm:text-[11.5px] max-sm:tracking-[.12em]">
      <Line className={center ? 'max-sm:hidden' : ''} />
      {children}
      {center && <Line className="max-sm:hidden" />}
    </span>
  );
}
