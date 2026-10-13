import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { cn } from '@/lib/cn';

type Stat = { value: string; suffix: string; label: string };

/** Row of key figures (4 across, 2×2 on tablets and phones). */
export function Stats({ items }: { items: Stat[] }) {
  return (
    <dl className="mx-auto mt-18 grid max-w-[1080px] grid-cols-4 border-t border-card-line max-lg:grid-cols-2">
      {items.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i}
          className={cn(
            'px-5 pt-7 max-sm:px-3.5 max-sm:pt-[22px]',
            i > 0 && 'border-l border-card-line',
            i === 2 && 'max-lg:border-l-0',
            i >= 2 && 'max-lg:mt-6 max-lg:border-t',
          )}
        >
          <dt className="sr-only"><Rich text={s.label} /></dt>
          <dd>
            <b className="block text-[clamp(32px,3.6vw,46px)] leading-none font-extrabold tracking-[-.045em]">
              {s.value}
              {s.suffix && <small className="ml-0.5 text-[.55em] tracking-[-.02em] text-hl">{s.suffix}</small>}
            </b>
            <span aria-hidden className="mt-2.5 block text-[14.5px] leading-snug text-sub"><Rich text={s.label} /></span>
          </dd>
        </Reveal>
      ))}
    </dl>
  );
}
