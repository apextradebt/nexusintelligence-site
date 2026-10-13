import { Film } from '@/components/media/Film';
import { Button } from '@/components/ui/Button';
import { Pill } from '@/components/ui/Pill';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { Section } from '@/components/ui/Section';
import { common } from '@/content/common';
import { home } from '@/content/home';
import { useContent, useLang } from '@/i18n';
import { href } from '@/routes';
import { Stats } from './Stats';

/** Home opening: headline, the two buttons, the B2B film and the key figures. */
export function HomeHero() {
  const t = useContent(home);
  const c = useContent(common);
  const lang = useLang();
  return (
    <Section surface="dark" glow="hero" dots padded={false} labelledBy="hero-title" className="pt-[156px] pb-24 max-sm:pt-28 max-sm:pb-16">
      <div className="mx-auto max-w-[980px] text-center">
        <Reveal delay={1}>
          <h1 id="hero-title" className="mt-7 text-display tracking-[-.05em] max-sm:text-[clamp(36px,10.4vw,48px)] sm:[&_.text-hl]:whitespace-nowrap">
            <Rich text={t.hero.title} />
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-7 max-w-[720px] text-[clamp(17px,1.8vw,20px)] leading-relaxed text-sub"><Rich text={t.hero.sub} /></p>
        </Reveal>
        <Reveal delay={3} className="mt-9 flex flex-wrap justify-center gap-3 max-sm:[&>a]:flex-[1_1_100%]">
          <Button href={href('contact', lang)} arrow>{c.demo}</Button>
          <Button href="#solutions" variant="ghost">{t.hero.explore}</Button>
        </Reveal>
      </div>
      
      <Stats items={t.stats} />
    </Section>
  );
}
