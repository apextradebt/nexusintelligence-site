import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { Rich } from '@/components/ui/Rich';
import { Section, type Tone } from '@/components/ui/Section';
import { cta } from '@/content/cta';
import { useContent, useLang } from '@/i18n';
import { SITE } from '@/site';
import { href } from '@/routes';

/** Closing band of a page: one line, the demo button and the email address, which leads to the contact form. */
export function CtaBand({ tone = 'b2b' }: { tone?: Tone }) {
  const t = useContent(cta)[tone];
  const lang = useLang();
  const contactHref = href('contact', lang) + (tone === 'back' ? '?solution=back' : '');
  return (
    <Section surface={tone === 'back' ? 'navy' : 'dark'} tone={tone} glow={tone === 'back' ? 'back' : 'contact'} dots>
      <Reveal className="mx-auto max-w-[760px] text-center">
        <h2 className="text-h2"><Rich text={t.title} /></h2>
        <p className="mt-5 text-lead text-sub"><Rich text={t.text} /></p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
          <Button href={contactHref} variant={tone === 'back' ? 'blue' : 'lime'} arrow>{t.button}</Button>
          <a href={`${contactHref}#contact-form`} className="inline-flex items-center gap-2.5 border-b-2 border-tone/50 pb-1 font-semibold transition-colors hover:border-tone">
            <Mail aria-hidden className="size-5 text-hl" strokeWidth={1.9} />
            {SITE.email}
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
