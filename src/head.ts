import { meta } from '@/content/meta';
import { LANGS, PATHS, type Route } from '@/routes';
import { SITE } from '@/site';

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Organisation and the two products, for search engines (home page only).
const STRUCTURED_DATA = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': `${SITE.url}/#org`, name: SITE.name, url: `${SITE.url}/`, logo: `${SITE.url}/icon-512.png`, email: SITE.email },
    { '@type': 'SoftwareApplication', name: 'Nexus B2B', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: `${SITE.url}${PATHS.b2b.fr}`, publisher: { '@id': `${SITE.url}/#org` } },
    { '@type': 'SoftwareApplication', name: 'Nexus Back', applicationCategory: 'BusinessApplication', operatingSystem: 'Web', url: `${SITE.url}${PATHS.back.fr}`, publisher: { '@id': `${SITE.url}/#org` } },
  ],
};

/** The <head> tags of a page: title, description, canonical and language alternates, link preview. */
export function headTags({ page, lang }: Route): string {
  const m = meta[lang][page];
  const tags = [
    `<title>${escape(m.title)}</title>`,
    `<meta name="description" content="${escape(m.description)}" />`,
  ];
  if (page === 'notFound') return [...tags, '<meta name="robots" content="noindex" />'].join('\n    ');

  const url = SITE.url + PATHS[page][lang];
  tags.push(
    `<link rel="canonical" href="${url}" />`,
    ...LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${SITE.url}${PATHS[page][l]}" />`),
    `<link rel="alternate" hreflang="x-default" href="${SITE.url}${PATHS[page].fr}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE.name}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escape(m.title)}" />`,
    `<meta property="og:description" content="${escape(m.description)}" />`,
    `<meta property="og:image" content="${SITE.url}${SITE.ogImage}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="${lang === 'fr' ? 'fr_FR' : 'en_GB'}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  );
  if (page === 'home') tags.push(`<script type="application/ld+json">${JSON.stringify(STRUCTURED_DATA)}</script>`);
  return tags.join('\n    ');
}
