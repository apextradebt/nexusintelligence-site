import { common } from '@/content/common';
import { useContent, useLang } from '@/i18n';
import { cn } from '@/lib/cn';
import { href, type PageId } from '@/routes';

export const NAV_PAGES = ['b2b', 'back', 'technology', 'faq', 'contact'] as const satisfies readonly PageId[];

/** The page links. Horizontal in the header, stacked in the phone menu. */
export function Nav({ current, vertical, onNavigate, id }: {
  current: PageId | 'notFound';
  vertical?: boolean;
  onNavigate?: () => void;
  id?: string;
}) {
  const t = useContent(common);
  const lang = useLang();
  return (
    <nav id={id} aria-label={t.navLabel} className={cn('flex', vertical ? 'flex-col items-stretch gap-0.5' : 'items-center gap-1')}>
      {NAV_PAGES.map((page) => (
        <a
          key={page}
          href={href(page, lang)}
          onClick={onNavigate}
          aria-current={page === current ? 'page' : undefined}
          className={cn(
            'rounded-full font-medium transition-colors hover:bg-bright/6 hover:text-bright',
            vertical ? 'rounded-xl px-3 py-3.5 text-[17px]' : 'px-3 py-2 text-[15px]',
            page === current ? 'bg-bright/8 text-bright' : 'text-stone',
          )}
        >
          {t.nav[page]}
        </a>
      ))}
    </nav>
  );
}
