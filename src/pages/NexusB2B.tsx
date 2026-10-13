import { Film } from '@/components/media/Film';
import { Showcase } from '@/components/media/Showcase';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AudienceGrid } from '@/components/sections/AudienceGrid';
import { CtaBand } from '@/components/sections/CtaBand';
import { FeatureGrid } from '@/components/sections/FeatureGrid';
import { FormulaCard } from '@/components/sections/FormulaCard';
import { PageHero } from '@/components/sections/PageHero';
import { b2b } from '@/content/b2b';
import { common } from '@/content/common';
import { useContent, useLang } from '@/i18n';
import { href } from '@/routes';

/** Nexus B2B: quoting lots of laptops and phones. */
export function NexusB2B() {
  const t = useContent(b2b);
  const c = useContent(common);
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={
          <>
            <Button href={href('contact', lang)} arrow>{c.demo}</Button>
            <Button href="#steps" variant="ghost">{t.steps.eyebrow}</Button>
          </>
        }
      >
        <Film id="b2b" />
      </PageHero>

      <Section id="steps" labelledBy="steps-title">
        <SectionHeading id="steps-title" eyebrow={t.steps.eyebrow} title={t.steps.title} />
        <Showcase label={t.steps.label} caption={t.steps.caption} steps={t.steps.items} stage="b2b" />
      </Section>

      <Section surface="alt">
        <div className="grid grid-cols-[5fr_7fr] items-start gap-14 max-lg:grid-cols-1 max-lg:gap-12">
          <FormulaCard formula={t.formula} />
          <FeatureGrid title={t.features.title} lead={t.features.lead} items={t.features.items} />
        </div>
      </Section>

      <Section labelledBy="audiences-title">
        <SectionHeading id="audiences-title" eyebrow={t.audiences.eyebrow} title={t.audiences.title} />
        <AudienceGrid only="b2b" />
      </Section>

      <CtaBand tone="b2b" />
    </>
  );
}
