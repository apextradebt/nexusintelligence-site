import type { ReactNode } from 'react';
import { common } from '@/content/common';
import { useContent } from '@/i18n';
import type { PageId } from '@/routes';
import { Footer } from './Footer';
import { Header } from './Header';

/** Skip link, header, the page and the footer. */
export function Layout({ current, solidHeader, children }: { current: PageId | 'notFound'; solidHeader?: boolean; children: ReactNode }) {
  const t = useContent(common);
  return (
    <>
      <a href="#main" className="fixed -top-16 left-3 z-[100] rounded-xl bg-lime px-4 py-2.5 font-semibold text-deep focus:top-3">
        {t.skip}
      </a>
      <Header current={current} solid={solidHeader} />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
