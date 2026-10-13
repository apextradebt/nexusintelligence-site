/** Every page of the site, with its address in each language. English pages live under /en/. */
export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];

export type PageId = 'home' | 'b2b' | 'back' | 'technology' | 'faq' | 'contact' | 'legal';

export const PATHS: Record<PageId, Record<Lang, string>> = {
  home: { fr: '/nexusintelligence-site/', en: '/en/' },
  b2b: { fr: '/nexusintelligence-site/nexus-b2b/', en: '/en/nexus-b2b/' },
  back: { fr: '/nexusintelligence-site/nexus-back/', en: '/en/nexus-back/' },
  technology: { fr: '/nexusintelligence-site/technologie/', en: '/en/technology/' },
  faq: { fr: '/nexusintelligence-site/faq/', en: '/en/faq/' },
  contact: { fr: '/nexusintelligence-site/contact/', en: '/en/contact/' },
  legal: { fr: '/nexusintelligence-site/mentions-legales/', en: '/en/legal-notice/' },
};

export type Route = { page: PageId | 'notFound'; lang: Lang };

/** Finds the page for an address ("/en/nexus-b2b", "/faq/index.html"…). Unknown addresses are the 404 page. */
export function resolvePath(pathname: string): Route {
  let p = pathname.replace(/^\/nexusintelligence-site/, '');
  if (p === '') p = '/';
  p = p.replace(/index\.html$/, '');
  if (!p.endsWith('/')) p += '/';

  for (const page of Object.keys(PATHS) as PageId[]) {
    for (const lang of LANGS) if (PATHS[page][lang] === p) return { page, lang };
  }
  return { page: 'notFound', lang: p.startsWith('/en/') ? 'en' : 'fr' };
}

export const href = (page: PageId, lang: Lang, hash?: string) => PATHS[page][lang] + (hash ? `#${hash}` : '');
