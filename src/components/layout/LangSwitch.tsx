import { common } from '@/content/common';
import { useContent, useLang } from '@/i18n';
import { cn } from '@/lib/cn';
import { LANGS, href, type PageId } from '@/routes';

/** FR / EN: links to the same page in the other language. */
export function LangSwitch({ current }: { current: PageId | 'notFound' }) {
  const lang = useLang();
  const t = useContent(common);
  const target = current === 'notFound' ? 'home' : current;
  return (
    <div role="group" aria-label={t.langLabel} className="inline-flex rounded-full border border-bright/12 p-[3px]">
      {LANGS.map((l) => (
        <a
          key={l}
          href={href(target, l)}
          hrefLang={l}
          lang={l}
          aria-current={l === lang ? 'true' : undefined}
          className={cn(
            'rounded-full px-2.5 py-[5px] font-mono text-xs font-bold tracking-[.08em] uppercase transition-colors',
            l === lang ? 'bg-bright/12 text-bright' : 'text-stone hover:text-bright',
          )}
        >
          {l}
        </a>
      ))}
    </div>
  );
}
