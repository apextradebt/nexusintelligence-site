/** Every page of the site, with its address in each language. English pages live under /en/. */
export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];

export type PageId = 'home' | 'b2b' | 'back' | 'technology' | 'faq' | 'contact' | 'legal';

export const PATHS: Record<PageId, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  b2b: { fr: '/nexusintellingence-site/nexus-b2b/', en: '/nexusintellingence-site/en/nexus-b2b/' },
  back: { fr: '/nexusintellingence-site/nexus-back/', en: '/nexusintellingence-site/en/nexus-back/' },
  technology: { fr: '/nexusintellingence-site/technologie/', en: '/nexusintellingence-site/en/technology/' },
  faq: { fr: '/nexusintellingence-site/faq/', en: '/nexusintellingence-site/en/faq/' },
  contact: { fr: '/nexusintellingence-site/contact/', en: '/nexusintellingence-site/en/contact/' },
  legal: { fr: '/nexusintellingence-site/mentions-legales/', en: '/nexusintellingence-site/en/legal-notice/' },
};

export type Route = { page: PageId | 'notFound'; lang: Lang };

/** Finds the page for an address ("/en/nexus-b2b", "/faq/index.html"…). Unknown addresses are the 404 page. */
export function resolvePath(pathname: string): Route {
  let p = pathname.replace(/index\.html$/, '');
  if (!p.endsWith('/')) p += '/';
  for (const page of Object.keys(PATHS) as PageId[]) {
    for (const lang of LANGS) if (PATHS[page][lang] === p) return { page, lang };
  }
  return { page: 'notFound', lang: p.startsWith('/en/') ? 'en' : 'fr' };
}

export const href = (page: PageId, lang: Lang, hash?: string) => PATHS[page][lang] + (hash ? `#${hash}` : '');
