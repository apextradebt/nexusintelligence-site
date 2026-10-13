import { Logo } from '@/components/brand/Logo';
import { Container } from '@/components/ui/Container';
import { Rich } from '@/components/ui/Rich';
import { common } from '@/content/common';
import { useContent, useLang } from '@/i18n';
import { SITE } from '@/site';
import { href } from '@/routes';

/** A titled column of footer links. */
function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="mb-4 font-mono text-xs font-medium tracking-[.14em] text-whisper uppercase">{title}</h2>
      <ul className="grid gap-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="transition-colors hover:text-bright">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const t = useContent(common);
  const lang = useLang();
  const f = t.footer;
  return (
    <footer className="bg-night pt-18 pb-10 text-[15px] text-stone">
      <Container>
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-sm:grid-cols-2">
          <div className="max-sm:col-span-2">
            <Logo href={href('home', lang)} label={SITE.name} size="footer" />
            <p className="mt-[18px] max-w-[360px] leading-relaxed"><Rich text={f.about} /></p>
          </div>
          <FooterColumn
            title={f.solutions}
            links={[
              { label: t.nav.b2b, href: href('b2b', lang) },
              { label: t.nav.back, href: href('back', lang) },
              { label: t.nav.technology, href: href('technology', lang) },
            ]}
          />
          <FooterColumn
            title={f.company}
            links={[
              { label: f.home, href: href('home', lang) },
              { label: t.nav.faq, href: href('faq', lang) },
              { label: t.nav.contact, href: href('contact', lang) },
            ]}
          />
          <FooterColumn
            title={f.legal}
            links={[
              { label: f.legalNotice, href: href('legal', lang) },
              { label: f.privacy, href: href('legal', lang, 'donnees') },
              { label: f.credits, href: href('legal', lang, 'credits') },
            ]}
          />
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-bright/12 pt-6 text-[13.5px]">
          <span>© {SITE.year} {SITE.name}</span>
          <span><Rich text={f.noCookies} /></span>
        </div>
      </Container>
    </footer>
  );
}
