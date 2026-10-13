import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';
import { Rich } from './Rich';

type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
  /** id of the heading, for the section's aria-labelledby. */
  id?: string;
  center?: boolean;
  /** h1 for page heroes, h2 everywhere else. */
  level?: 1 | 2;
  className?: string;
  children?: ReactNode;
};

/** Eyebrow + heading + lead paragraph, the opening of most sections. */
export function SectionHeading({ eyebrow, title, lead, id, center, level = 2, className, children }: Props) {
  const Heading = level === 1 ? 'h1' : 'h2';
  return (
    <Reveal className={cn('mb-16 max-w-[780px] max-sm:mb-11', center && 'mx-auto text-center', className)}>
      {eyebrow && <Eyebrow center={center}>{eyebrow}</Eyebrow>}
      <Heading id={id} className={cn('mt-[18px]', level === 1 ? 'text-h1' : 'text-h2')}>
        <Rich text={title} />
      </Heading>
      {lead && (
        <p className="mt-[22px] text-lead text-sub">
          <Rich text={lead} />
        </p>
      )}
      {children}
    </Reveal>
  );
}
