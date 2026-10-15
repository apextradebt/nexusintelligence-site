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

      <Section surface="dark">
        {/* Background image covering the entire section */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transform-gpu">
          <img
            src="/img/techBackground.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-deep/55" />
        </div>
        <EngineCards items={t.engine} />
        <Coverage coverage={t.coverage} rules={t.rules} />
      </Section>

      <CtaBand />
    </>
  );
}
