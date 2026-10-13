import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';

/** An icon in a small rounded square tinted with the section's accent. */
export function IconBadge({ icon: Icon, outlined, className }: { icon: LucideIcon; outlined?: boolean; className?: string }) {
  return (
    <div
      className={cn(
        'grid size-11 place-items-center rounded-xl bg-tone/15 text-hl',
        outlined && 'border border-tone/25',
        className,
      )}
    >
      <Icon aria-hidden className="size-[22px]" strokeWidth={1.9} />
    </div>
  );
}
