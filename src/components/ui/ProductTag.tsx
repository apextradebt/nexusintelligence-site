import { cn } from '@/lib/cn';

/** "NEXUS B2B" / "NEXUS BACK" chip in the product's colour. */
export function ProductTag({ product }: { product: 'b2b' | 'back' }) {
  return (
    <span
      className={cn(
        'rounded-md px-2.5 py-1 font-mono text-[11.5px] font-bold tracking-[.06em]',
        product === 'b2b' ? 'bg-lime/18 text-accent' : 'bg-blue/14 text-blue-ink [.surface-navy_&]:bg-blue/25 [.surface-navy_&]:text-blue-2',
      )}
    >
      {product === 'b2b' ? 'NEXUS B2B' : 'NEXUS BACK'}
    </span>
  );
}
