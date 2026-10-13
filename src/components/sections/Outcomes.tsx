import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';

type Outcome = { question: string; answer: string; text: string };

/** "Too slow? The deal is gone." — the three ways a price goes wrong. */
export function Outcomes({ items }: { items: Outcome[] }) {
  return (
    <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
      {items.map((o, i) => (
        <Reveal key={o.question} delay={i}>
          <Card className="h-full px-7 py-[30px]">
            <p className="text-[30px] leading-[1.1] font-extrabold tracking-[-.035em]"><Rich text={o.question} /></p>
            <p className="mt-1.5 text-[30px] leading-[1.1] font-extrabold tracking-[-.035em] text-rust-ink"><Rich text={o.answer} /></p>
            <p className="mt-4 text-[15.5px] text-sub"><Rich text={o.text} /></p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
