import type { LucideIcon } from 'lucide-react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Rich } from './Rich';

/** A list where each line starts with an icon (a check mark by default). */
export function CheckList({ items, icon: Icon = Check, iconClassName, className }: {
  items: string[];
  icon?: LucideIcon;
  iconClassName?: string;
  className?: string;
}) {
  return (
    <ul className={cn('grid gap-3', className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[15.5px] leading-normal">
          <Icon aria-hidden className={cn('mt-px size-5 flex-none text-hl', iconClassName)} strokeWidth={1.9} />
          <span><Rich text={item} /></span>
        </li>
      ))}
    </ul>
  );
}
