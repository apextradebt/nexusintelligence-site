import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AudienceGrid } from '@/components/sections/AudienceGrid';
import { BeforeAfter } from '@/components/sections/BeforeAfter';
import { CtaBand } from '@/components/sections/CtaBand';
import { EngineCards } from '@/components/sections/EngineCards';
import { HomeHero } from '@/components/sections/HomeHero';
import { Outcomes } from '@/components/sections/Outcomes';
import { SolutionCard } from '@/components/sections/SolutionCard';
import { home } from '@/content/home';
import { technology } from '@/content/technology';
import { useContent, useLang } from '@/i18n';
import { href } from '@/routes';

/** Home: the problem, the two products, the engine in short, who it's for. */
export function Home() {
  const t = useContent(home);
  const tech = useContent(technology);
  const lang = useLang();
  return (
    <>
      <HomeHero />

      <Section labelledBy="problem-title">
        <SectionHeading id="problem-title" eyebrow={t.problem.eyebrow} title={t.problem.title} lead={t.problem.lead} />
        <Outcomes items={t.problem.outcomes} />
        <BeforeAfter before={t.problem.beforeLabel} after={t.problem.afterLabel} rows={t.problem.rows} />
      </Section>

      <Section id="solutions" surface="alt" labelledBy="solutions-title">
        <SectionHeading id="solutions-title" center eyebrow={t.solutions.eyebrow} title={t.solutions.title} lead={t.solutions.lead} />
        <div className="grid grid-cols-2 gap-6 max-lg:grid-cols-1">
          <Reveal><SolutionCard product="b2b" solution={t.solutions.b2b} href={href('b2b', lang)} /></Reveal>
          <Reveal delay={1}><SolutionCard product="back" solution={t.solutions.back} href={href('back', lang)} /></Reveal>
        </div>
      </Section>

      <Section surface="dark" glow="corner" labelledBy="engine-title">
        <SectionHeading id="engine-title" eyebrow={t.engine.eyebrow} title={t.engine.title} lead={tech.hero.lead} />
        <EngineCards items={tech.engine} />
        <Reveal className="mt-10">
          <Button href={href('technology', lang)} variant="ghost" arrow>{t.engine.more}</Button>
        </Reveal>
      </Section>

      <Section labelledBy="audiences-title">
        <SectionHeading id="audiences-title" eyebrow={t.audiences.eyebrow} title={t.audiences.title} />
        <AudienceGrid />
      </Section>

      <CtaBand />
    </>
  );
}
