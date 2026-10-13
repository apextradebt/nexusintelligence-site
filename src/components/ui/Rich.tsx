import { typeset, useLang } from '@/i18n';
import { cn } from '@/lib/cn';

/**
 * Renders a content string: the part between `*…*` is highlighted (text-hl, the section's accent),
 * and French texts get non-breaking spaces before ? ! : ; € %.
 */
export function Rich({ text, hlClassName }: { text: string; hlClassName?: string }) {
  const parts = typeset(text, useLang()).split(/\*([^*]+)\*/);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 ? <span key={i} className={cn('text-hl', hlClassName)}>{part}</span> : part,
      )}
    </>
  );
}
