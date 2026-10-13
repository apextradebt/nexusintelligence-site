export type Lang = 'fr' | 'en';
export const LANGS: Lang[] = ['fr', 'en'];

export type PageId = 'home' | 'b2b' | 'back' | 'technology' | 'faq' | 'contact' | 'legal';

// Revert these back to relative paths without the repository name
export const PATHS: Record<PageId, Record<Lang, string>> = {
  home: { fr: '/', en: '/en/' },
  b2b: { fr: '/nexus-b2b/', en: '/en/nexus-b2b/' },
  back: { fr: '/nexus-back/', en: '/en/nexus-back/' },
  technology: { fr: '/technologie/', en: '/en/technology/' },
  faq: { fr: '/faq/', en: '/en/faq/' },
  contact: { fr: '/contact/', en: '/en/contact/' },
  legal: { fr: '/mentions-legales/', en: '/en/legal-notice/' },
};

export type Route = { page: PageId | 'notFound'; lang: Lang };

export function resolvePath(pathname: string): Route {
  // Strip the exact GitHub Pages base URL completely
  let p = pathname.replace(/^\//, '');

  if (p === '') p = '/';
  p = p.replace(/index\.html$/, '');
  if (!p.endsWith('/')) p += '/';

  for (const page of Object.keys(PATHS) as PageId[]) {
    for (const lang of LANGS) if (PATHS[page][lang] === p) return { page, lang };
  }
  return { page: 'notFound', lang: p.startsWith('/en/') ? 'en' : 'fr' };
}

// Ensure links generated in your app correctly append the base path 
// if your custom router doesn't automatically handle it via <a href>
export const href = (page: PageId, lang: Lang, hash?: string) =>
  '/nexusintelligence-site' + PATHS[page][lang] + (hash ? `#${hash}` : '');