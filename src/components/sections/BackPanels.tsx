import type { ReactNode } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { cn } from '@/lib/cn';

/** Translucent panel with a small label, a title and a line of text, used on the navy Nexus Back page. */
function Panel({ context, title, text, delay, children }: { context: string; title: string; text: string; delay?: number; children: ReactNode }) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-3xl bg-card p-8 ring-1 ring-card-line max-sm:px-5 max-sm:py-6">
        <div className="font-mono text-xs tracking-[.14em] text-hl uppercase">{context}</div>
        <h3 className="mt-3 text-[26px]"><Rich text={title} /></h3>
        <p className="mt-2.5 text-[15.5px] text-sub"><Rich text={text} /></p>
        {children}
      </div>
    </Reveal>
  );
}

type Grades = { context: string; title: string; text: string; items: { grade: string; name: string; effect: string }[] };

/** The four condition grades (A–D) and their effect on the reference price. */
export function GradesPanel({ grades }: { grades: Grades }) {
  return (
    <Panel context={grades.context} title={grades.title} text={grades.text}>
      <div className="mt-[22px] grid grid-cols-2 gap-2.5 max-sm:grid-cols-1">
        {grades.items.map((g) => (
          <div key={g.grade} className="grid grid-cols-[44px_1fr] items-center gap-x-3 rounded-2xl bg-cloud p-4 text-[#1E1E24]">
            <b className="row-span-2 grid size-11 place-items-center rounded-xl bg-[#E3E8F4] text-2xl font-extrabold text-[#3B64AE]">{g.grade}</b>
            <span className="text-[15px] leading-snug font-bold"><Rich text={g.name} /></span>
            <small className="mt-0.5 text-[13px] text-[#6B6B76]"><Rich text={g.effect} /></small>
          </div>
        ))}
      </div>
    </Panel>
  );
}

type Strategies = {
  context: string;
  title: string;
  text: string;
  items: { name: string; share: string; text: string; featured: boolean }[];
  forecastLabel: string;
  forecast: string;
};

/** The three pricing strategies (Safe, Market, Aggressive) as a share of the reference value. */
export function StrategiesPanel({ strategies: s }: { strategies: Strategies }) {
  return (
    <Panel context={s.context} title={s.title} text={s.text} delay={1}>
      <div className="mt-[22px] grid grid-cols-3 gap-2.5 max-sm:grid-cols-1">
        {s.items.map((item) => (
          <div key={item.name} className={cn('rounded-2xl border-2 bg-cloud p-4 text-[#1E1E24]', item.featured ? 'border-terra' : 'border-transparent')}>
            <div className={cn('text-[15px] font-bold', item.featured ? 'text-[#B4532F]' : 'text-[#3B64AE]')}><Rich text={item.name} /></div>
            <div className="mt-2 text-[30px] leading-none font-extrabold tracking-[-.04em]"><Rich text={item.share} /></div>
            <small className="mt-2 block text-[12.5px] leading-snug text-[#6B6B76]"><Rich text={item.text} /></small>
          </div>
        ))}
      </div>
      <p className="mt-[18px] text-[13.5px] text-sub">
        <b className="font-semibold text-cloud"><Rich text={s.forecastLabel} /></b> <Rich text={s.forecast} />
      </p>
    </Panel>
  );
}
