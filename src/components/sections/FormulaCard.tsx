import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { cn } from '@/lib/cn';

type Formula = {
  context: string;
  title: string;
  rows: { label: string; hint: string; value: string; minus: boolean }[];
  totalLabel: string;
  total: string;
  compare: [string, string][];
  verdict: string;
  note: string;
};

/** Worked example of the buy price: resale − target margin − costs = your offer. Always dark. */
export function FormulaCard({ formula: f }: { formula: Formula }) {
  return (
    <Reveal>
      <div className="surface-dark glow-formula rounded-[26px] px-[34px] pt-[34px] pb-[30px] max-sm:px-5 max-sm:py-6">
        <div className="font-mono text-xs tracking-[.14em] text-sub">{f.context}</div>
        <h3 className="mt-3 text-[26px]"><Rich text={f.title} /></h3>
        <dl className="mt-6 grid gap-0.5 text-[15.5px]">
          {f.rows.map((row) => (
            <div key={row.label} className="flex items-baseline justify-between gap-4 border-b border-dashed border-bright/14 py-3">
              <dt className="text-sub">
                <Rich text={row.label} />
                <small className="mt-0.5 block text-[12.5px] text-stone/80"><Rich text={row.hint} /></small>
              </dt>
              <dd className={cn('font-mono text-[17px] font-bold whitespace-nowrap', row.minus && 'text-sand-2')}><Rich text={row.value} /></dd>
            </div>
          ))}
          <div className="flex items-baseline justify-between gap-4 pt-[18px]">
            <dt className="text-[17px] font-bold">{f.totalLabel}</dt>
            <dd className="text-[34px] font-extrabold tracking-[-.04em] text-hl"><Rich text={f.total} /></dd>
          </div>
        </dl>
        <div className="mt-3.5 flex flex-wrap gap-2.5">
          {f.compare.map(([label, value]) => (
            <span key={label} className="rounded-full border border-bright/10 bg-bright/6 px-3 py-[7px] text-[13.5px] text-whisper">
              <Rich text={label} /> <b className="font-mono"><Rich text={value} /></b>
            </span>
          ))}
        </div>
        <p className="mt-[18px] text-lg font-bold tracking-[-.02em]"><Rich text={f.verdict} /></p>
        <p className="mt-3.5 text-[12.5px] leading-normal text-stone/85"><Rich text={f.note} /></p>
      </div>
    </Reveal>
  );
}
