import { ArrowRight } from 'lucide-react';
import { Mark } from '@/components/brand/Mark';
import { CheckList } from '@/components/ui/CheckList';
import { Rich } from '@/components/ui/Rich';
import { cn } from '@/lib/cn';

type Solution = { chip: string; title: string; audience: string; points: string[]; more: string; image: string };

/** Big dark card presenting one product, with a peek of its app screen; the whole card links to the product page. */
export function SolutionCard({ product, solution, href }: { product: 'b2b' | 'back'; solution: Solution; href: string }) {
  const isBack = product === 'back';
  return (
    <a
      href={href}
      className={cn(
        'group relative isolate flex min-h-[640px] flex-col overflow-hidden rounded-[28px] px-11 pt-11 max-lg:min-h-0 max-sm:rounded-[22px] max-sm:px-[22px] max-sm:pt-[30px]',
        isBack ? 'glow-card-back text-cloud' : 'glow-card-b2b text-bright',
      )}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center gap-[9px] text-[22px] font-extrabold tracking-[-.035em]">
          <Mark variant={isBack ? 'back' : 'dark'} rim={24} className="size-[30px]" />
          Nexus <em className={cn('not-italic', isBack ? 'text-blue-2' : 'text-lime')}>{isBack ? 'Back' : 'B2B'}</em>
        </span>
        <span className="rounded-full border border-bright/18 px-2.5 py-[5px] font-mono text-[11.5px] tracking-[.14em] text-bright/78 uppercase">
          {solution.chip}
        </span>
      </div>
      <h3 className="mt-7 text-[clamp(28px,3vw,38px)]"><Rich text={solution.title} /></h3>
      <p className={cn('mt-3.5', isBack ? 'text-mist' : 'text-stone')}><Rich text={solution.audience} /></p>
      <CheckList items={solution.points} className="mt-6" iconClassName={isBack ? 'text-blue-2' : 'text-lime'} />
      <span className="mt-7 inline-flex items-center gap-2 text-[15.5px] font-semibold">
        <Rich text={solution.more} />
        <ArrowRight aria-hidden className="size-[18px] transition-transform duration-300 group-hover:translate-x-1" />
      </span>
      <div aria-hidden className="mt-auto translate-y-[14%] pt-9 transition-transform duration-700 ease-soft group-hover:translate-y-[9%]">
        <img src={solution.image} alt="" width={1600} height={1109} loading="lazy" decoding="async" className="w-full drop-shadow-[0_-10px_40px_rgba(0,0,0,.45)]" />
      </div>
    </a>
  );
}
