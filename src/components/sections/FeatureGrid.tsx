import type { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';

type Feature = { icon: LucideIcon; title: string; text: string };

/** A small heading and a two-column grid of feature cards. */
export function FeatureGrid({ title, lead, items }: { title: string; lead: string; items: Feature[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
      <Reveal className="col-span-full mb-2">
        <h3 className="text-[clamp(26px,2.6vw,34px)]"><Rich text={title} /></h3>
        <p className="mt-2.5 text-sub"><Rich text={lead} /></p>
      </Reveal>
      {items.map((f, i) => (
        <Reveal key={f.title} delay={i % 2}>
          <Card className="h-full p-6">
            <IconBadge icon={f.icon} />
            <h4 className="mt-4 text-[17.5px] leading-snug font-bold tracking-[-.02em]"><Rich text={f.title} /></h4>
            <p className="mt-1.5 text-[15px] leading-[1.55] text-sub"><Rich text={f.text} /></p>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
