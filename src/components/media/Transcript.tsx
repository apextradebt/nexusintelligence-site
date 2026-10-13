import { Rich } from '@/components/ui/Rich';

/** Collapsible text of the film's voice-over. */
export function Transcript({ label, text }: { label: string; text: string }) {
  return (
    <details className="group mx-auto mt-[18px] max-w-[820px] text-center">
      <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-lg px-0.5 py-1.5 text-sm font-semibold text-sub transition-colors hover:text-current [&::-webkit-details-marker]:hidden">
        <span aria-hidden className="w-3.5 font-mono font-bold text-hl">
          <span className="group-open:hidden">+</span>
          <span className="hidden group-open:inline">–</span>
        </span>
        {label}
      </summary>
      <p className="mt-3 text-left text-[15px] leading-[1.75] text-sub">
        <Rich text={text} />
      </p>
    </details>
  );
}
