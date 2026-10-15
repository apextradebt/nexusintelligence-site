import { Card } from '@/components/ui/Card';
import { IconBadge } from '@/components/ui/IconBadge';
import { ProductTag } from '@/components/ui/ProductTag';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { audiences } from '@/content/audiences';
import { useContent } from '@/i18n';
import { cn } from '@/lib/cn';

// Columns by number of cards: 3 on a product page, 6 on the home page.
const COLUMNS: Record<number, string> = {
  3: 'grid-cols-3 max-lg:grid-cols-1',
  6: 'grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1',
};

/** Who it's for. `only` keeps the cards of one product (on the product pages). */
export function AudienceGrid({ only }: { only?: 'b2b' | 'back' }) {
  const items = useContent(audiences).filter((a) => !only || a.product === only);
  return (
    <div className={cn('grid gap-4', COLUMNS[items.length] ?? COLUMNS[6])}>
      {items.map((a, i) => (
        <Reveal key={a.title} delay={i}>
          <Card className="flex h-full flex-col px-6 py-7 backdrop-blur-md">
            <IconBadge icon={a.icon} />
            <h3 className="mt-5 text-[19px] leading-tight font-bold tracking-[-.025em]"><Rich text={a.title} /></h3>
            <p className="mt-2.5 text-[15px] text-sub"><Rich text={a.text} /></p>
            <div className="mt-auto pt-5"><ProductTag product={a.product} /></div>
          </Card>
        </Reveal>
      ))}
    </div>
  );
}
