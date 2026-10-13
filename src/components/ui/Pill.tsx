import type { ReactNode } from 'react';

/** Rounded monospaced label with a glowing dot, used above the home headline. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-bright/15 bg-bright/6 px-4 py-2 font-mono text-[12.5px] font-medium uppercase tracking-[.12em] text-whisper max-sm:gap-2 max-sm:px-3 max-sm:text-[10.5px] max-sm:tracking-[.08em]">
      <span aria-hidden className="size-2 rounded-full bg-tone shadow-[0_0_14px_var(--tone)]" />
      {children}
    </span>
  );
}
