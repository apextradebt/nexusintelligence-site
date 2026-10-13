import { Section } from '@/components/ui/Section';
import { Coverage } from '@/components/sections/Coverage';
import { CtaBand } from '@/components/sections/CtaBand';
import { EngineCards } from '@/components/sections/EngineCards';
import { PageHero } from '@/components/sections/PageHero';
import { Stats } from '@/components/sections/Stats';
import { home } from '@/content/home';
import { technology } from '@/content/technology';
import { useContent } from '@/i18n';

/** Technology: the price agents, the AI, the device reference, where prices come from. */
export function Technology() {
  const t = useContent(technology);
  const { stats } = useContent(home);
  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} lead={t.hero.lead}>
        <Stats items={stats} />
      </PageHero>

      <Section>
        <EngineCards items={t.engine} />
        <Coverage coverage={t.coverage} rules={t.rules} />
      </Section>

      <CtaBand />
    </>
  );
}
