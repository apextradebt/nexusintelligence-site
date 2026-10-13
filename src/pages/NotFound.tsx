import { Button } from '@/components/ui/Button';
import { Pill } from '@/components/ui/Pill';
import { Rich } from '@/components/ui/Rich';
import { Section } from '@/components/ui/Section';
import { useContent, useLang } from '@/i18n';
import { href } from '@/routes';

const text = {
  fr: { title: 'Oups*.*', body: 'Cette page n’existe pas, ou plus.', home: 'Retour à l’accueil' },
  en: { title: 'Oops*.*', body: 'This page doesn’t exist.', home: 'Back to the home page' },
};

/** Shown for unknown addresses (GitHub Pages serves it as 404.html). */
export function NotFound() {
  const t = useContent(text);
  const lang = useLang();
  return (
    <Section surface="dark" glow="hero" dots padded={false} className="grid min-h-svh place-items-center py-32 text-center">
      <Pill>404</Pill>
      <h1 className="mt-6 text-[clamp(60px,12vw,140px)] tracking-[-.06em]"><Rich text={t.title} /></h1>
      <p className="mt-4 text-lg text-sub"><Rich text={t.body} /></p>
      <div className="mt-8"><Button href={href('home', lang)} arrow>{t.home}</Button></div>
    </Section>
  );
}
