import { ArrowRight, CircleCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';

const ROW = 'grid grid-cols-[1fr_48px_1fr] items-center border-t border-card-line px-8 py-[18px] first:border-t-0 max-sm:grid-cols-1 max-sm:gap-1 max-sm:px-5 max-sm:py-4';

/** Two-column comparison: the old way (struck through) → the Nexus way. */
export function BeforeAfter({ before, after, rows }: { before: string; after: string; rows: [string, string][] }) {
  return (
    <Reveal className="mt-14">
      <Card className="overflow-hidden rounded-3xl">
        <div role="table" aria-label={`${before} / ${after}`}>
          <div role="row" className={`${ROW} bg-page-alt py-3.5 font-mono text-xs tracking-[.16em] text-sub uppercase max-sm:hidden`}>
            <span role="columnheader">{before}</span>
            <span aria-hidden />
            <span role="columnheader" className="text-hl">{after}</span>
          </div>
          {rows.map(([was, now]) => (
            <div role="row" key={was} className={ROW}>
              <span role="cell" className="text-sub line-through decoration-rust-ink/55 decoration-2"><Rich text={was} /></span>
              <ArrowRight aria-hidden className="mx-auto size-[18px] text-sub max-sm:hidden" />
              <span role="cell" className="flex items-center gap-3 font-semibold">
                <CircleCheck aria-hidden className="size-[22px] flex-none text-hl" strokeWidth={1.9} />
                <Rich text={now} />
              </span>
            </div>
          ))}
        </div>
      </Card>
    </Reveal>
  );
}
