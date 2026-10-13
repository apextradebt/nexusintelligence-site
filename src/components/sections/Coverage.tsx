import { ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { CheckList } from '@/components/ui/CheckList';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';

/** A country as a chip: code + name. */
function CountryChip({ code, name }: { code: string; name: string }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-card-line bg-card py-[7px] pr-3 pl-2 text-sm">
      <b className="rounded-md bg-tone/18 px-1.5 py-[3px] font-mono text-[11.5px] font-bold tracking-[.06em] text-hl">{code}</b>
      {name}
    </li>
  );
}

/** Where prices come from (countries) and how they are collected (rules). */
export function Coverage({ coverage, rules }: {
  coverage: { title: string; text: string; countries: [string, string][] };
  rules: { title: string; items: string[] };
}) {
  return (
    <div className="mt-5 grid grid-cols-[7fr_5fr] gap-4 max-lg:grid-cols-1">
      <Reveal>
        <Card className="h-full p-7">
          <h3 className="text-[19px] font-bold tracking-[-.025em]"><Rich text={coverage.title} /></h3>
          <p className="mt-2 text-[15px] text-sub"><Rich text={coverage.text} /></p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {coverage.countries.map(([code, name]) => <CountryChip key={code} code={code} name={name} />)}
          </ul>
        </Card>
      </Reveal>
      <Reveal delay={1}>
        <Card className="h-full p-7">
          <h3 className="text-[19px] font-bold tracking-[-.025em]"><Rich text={rules.title} /></h3>
          <CheckList items={rules.items} icon={ShieldCheck} className="mt-[18px] text-sub [&_li]:text-[15px]" />
        </Card>
      </Reveal>
    </div>
  );
}
