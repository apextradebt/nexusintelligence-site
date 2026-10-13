import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { CtaBand } from '@/components/sections/CtaBand';
import { FaqList } from '@/components/sections/FaqList';
import { PageHero } from '@/components/sections/PageHero';
import { common } from '@/content/common';
import { faq } from '@/content/faq';
import { useContent, useLang } from '@/i18n';
import { href } from '@/routes';

/** Frequently asked questions. */
export function Faq() {
  const t = useContent(faq);
  const c = useContent(common);
  const lang = useLang();
  return (
    <>
      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        actions={<Button href={href('contact', lang)} variant="ghost" arrow>{c.nav.contact}</Button>}
      />
      <Section>
        <Reveal className="mx-auto max-w-[860px]">
          <FaqList items={t.items} />
        </Reveal>
      </Section>
      <CtaBand />
    </>
  );
}
