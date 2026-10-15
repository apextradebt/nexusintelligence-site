import { Film } from '@/components/media/Film';
import { Showcase } from '@/components/media/Showcase';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AudienceGrid } from '@/components/sections/AudienceGrid';
import { GradesPanel, StrategiesPanel } from '@/components/sections/BackPanels';
import { CtaBand } from '@/components/sections/CtaBand';
import { PageHero } from '@/components/sections/PageHero';
import { back } from '@/content/back';
import { useContent, useLang } from '@/i18n';
import { href } from '@/routes';

/** Nexus Back: in-store trade-in (B2C). The whole page uses the blue Nexus Back tone. */
export function NexusBack() {
  const t = useContent(back);
  const lang = useLang();
  return (
    <>
      <PageHero
        surface="navy"
        tone="back"
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <>
            <Button href={`${href('contact', lang)}?solution=back`} variant="blue" arrow>{t.hero.cta}</Button>
            <Button href="#steps" variant="ghost">{t.steps.eyebrow}</Button>
          </>
        }
      >
        <Film id="back" />
      </PageHero>

      <Section id="steps" surface="navy" tone="back" glow="back" labelledBy="steps-title">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transform-gpu">
          <img
            src="/img/b2c.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy/60" />
        </div>
        <SectionHeading id="steps-title" eyebrow={t.steps.eyebrow} title={t.steps.title} />
        <Showcase label={t.steps.label} caption={t.steps.caption} steps={t.steps.items} stage="back" />
        <div className="mt-24 grid grid-cols-2 gap-6 max-lg:grid-cols-1 max-sm:mt-16">
          <GradesPanel grades={t.grades} />
          <StrategiesPanel strategies={t.strategies} />
        </div>
      </Section>

      <Section surface="alt" tone="back" labelledBy="audiences-title">

        <SectionHeading id="audiences-title" eyebrow={t.audiences.eyebrow} title={t.audiences.title} />
        <AudienceGrid only="back" />
      </Section>

      <CtaBand tone="back" />
    </>
  );
}
