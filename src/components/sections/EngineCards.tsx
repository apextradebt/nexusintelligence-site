import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';

type EngineItem = { icon: LucideIcon; title: string; text: string };

/** The four building blocks of the pricing engine. */
export function EngineCards({ items }: { items: EngineItem[] }) {
  return (
    <div className="grid grid-cols-4 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i}>
          <Card className="h-full px-6 py-7">
            <IconBadge icon={item.icon} outlined />
            <h3 className="mt-5 text-[19px] leading-tight font-bold tracking-[-.025em]"><Rich text={item.title} /></h3>
            <p className="mt-2.5 text-[15px] text-sub"><Rich text={item.text} /></p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
