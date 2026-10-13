import { useEffect, type ComponentType } from 'react';
import { Layout } from '@/components/layout/Layout';
import { meta } from '@/content/meta';
import { LangProvider } from '@/i18n';
import { Contact } from '@/pages/Contact';
import { Faq } from '@/pages/Faq';
import { Home } from '@/pages/Home';
import { Legal } from '@/pages/Legal';
import { NexusB2B } from '@/pages/NexusB2B';
import { NexusBack } from '@/pages/NexusBack';
import { NotFound } from '@/pages/NotFound';
import { Technology } from '@/pages/Technology';
import type { PageId, Route } from '@/routes';

/** Which component draws each page. Pages whose top is light ask for a solid header. */
const PAGES: Record<PageId | 'notFound', { component: ComponentType; solidHeader?: boolean }> = {
  home: { component: Home },
  b2b: { component: NexusB2B },
  back: { component: NexusBack },
  technology: { component: Technology },
  faq: { component: Faq },
  contact: { component: Contact },
  legal: { component: Legal, solidHeader: true },
  notFound: { component: NotFound },
};

export function App({ route }: { route: Route }) {
  const { component: Page, solidHeader } = PAGES[route.page];

  // The built pages carry their title in the HTML; this keeps it right in `npm run dev` too.
  useEffect(() => {
    document.title = meta[route.lang][route.page].title;
    document.documentElement.lang = route.lang;
  }, [route]);

  return (
    <LangProvider value={route.lang}>
      <Layout current={route.page} solidHeader={solidHeader}>
        <Page />
      </Layout>
    </LangProvider>
  );
}
