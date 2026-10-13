import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { common } from '@/content/common';
import { useScrolled } from '@/hooks/useScrolled';
import { useContent, useLang } from '@/i18n';
import { cn } from '@/lib/cn';
import { SITE } from '@/site';
import { href, type PageId } from '@/routes';
import { LangSwitch } from './LangSwitch';
import { Nav } from './Nav';

/** Fixed header: transparent over the dark hero, solid once scrolled (or always, on light pages). */
export function Header({ current, solid }: { current: PageId | 'notFound'; solid?: boolean }) {
  const t = useContent(common);
  const lang = useLang();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  // Escape closes the phone menu.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const filled = solid || scrolled || open;
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[68px] border-b text-bright transition-colors duration-300 max-sm:h-[60px]',
        filled ? 'border-bright/12 bg-deep/85 backdrop-blur-md backdrop-saturate-150' : 'border-transparent',
      )}
    >
      <Container className="flex h-full items-center gap-7">
        <Logo href={href('home', lang)} label={SITE.name} />
        <div className="ml-auto hidden nav:block">
          <Nav current={current} />
        </div>
        <div className="flex items-center gap-2.5 max-nav:ml-auto">
          <LangSwitch current={current} />
          <Button href={href('contact', lang)} size="sm" className="max-sm:hidden">{t.demo}</Button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="phone-menu"
            aria-label={open ? t.menuClose : t.menuOpen}
            className="grid size-[42px] cursor-pointer place-items-center rounded-xl border border-bright/12 nav:hidden"
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </Container>
      {open && (
        <div className="absolute inset-x-0 top-full border-b border-bright/12 bg-deep/97 nav:hidden">
          <Container className="pt-2 pb-5">
            <Nav id="phone-menu" current={current} vertical onNavigate={() => setOpen(false)} />
          </Container>
        </div>
      )}
    </header>
  );
}
