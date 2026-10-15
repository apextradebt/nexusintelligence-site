import { Rich } from '@/components/ui/Rich';

/** One question that opens to show its answer. */
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-line">
      <summary className="relative cursor-pointer list-none py-6 pr-12 text-[18.5px] leading-[1.35] font-bold tracking-[-.02em] max-sm:pr-9 max-sm:text-[17px] [&::-webkit-details-marker]:hidden">
        <Rich text={q} />
        <span aria-hidden className="absolute top-1/2 right-1.5 size-3.5 -translate-y-1/2 text-hl transition-transform duration-300 group-open:rotate-45">
          <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-current" />
          <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-current" />
        </span>
      </summary>
      <p className="pr-12 pb-[26px] text-base leading-[1.7] text-sub max-sm:pr-0"><Rich text={a} /></p>
    </details>
  );
}

/** Questions and answers. */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="px-6 py-2 rounded-2xl border border-card-line bg-card/60 backdrop-blur-md">
      {items.map((item) => <FaqItem key={item.q} {...item} />)}
    </div>
  );
}
