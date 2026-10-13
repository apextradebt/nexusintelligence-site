import type { ReactNode } from 'react';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { Section, type Surface, type Tone } from '@/components/ui/Section';

/** Opening of an inner page: eyebrow, big heading, lead, buttons, and optionally a film or visual below. */
export function PageHero({ eyebrow, title, lead, actions, surface = 'dark', tone = 'b2b', children }: {
  eyebrow: string;
  title: string;
  lead?: string;
  actions?: ReactNode;
  surface?: Extract<Surface, 'dark' | 'navy'>;
  tone?: Tone;
  children?: ReactNode;
}) {
  return (
    <Section
      surface={surface}
      tone={tone}
      glow={surface === 'navy' ? 'back' : 'hero'}
      dots
      padded={false}
      labelledBy="page-title"
      className="pt-[148px] pb-24 max-sm:pt-28 max-sm:pb-16"
    >
      <Reveal className="max-w-[860px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 id="page-title" className="mt-5 text-h1 tracking-[-.045em]"><Rich text={title} /></h1>
        {lead && <p className="mt-6 max-w-[720px] text-[clamp(17px,1.8vw,20px)] leading-relaxed text-sub"><Rich text={lead} /></p>}
        {actions && <div className="mt-9 flex flex-wrap gap-3 max-sm:[&>a]:flex-[1_1_100%]">{actions}</div>}
      </Reveal>
      {children && <Reveal className="mx-auto mt-18 max-w-[1080px] max-sm:mt-12">{children}</Reveal>}
    </Section>
  );
}
