import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './App';
import { headTags } from './head';
import { LANGS, PATHS, resolvePath, type PageId } from './routes';

/** Renders one address to HTML, for scripts/prerender.mjs. */
export function render(pathname: string) {
  const route = resolvePath(pathname);
  return {
    html: renderToString(<StrictMode><App route={route} /></StrictMode>),
    head: headTags(route),
    lang: route.lang,
  };
}

/** Every address to build, with its language alternates (for the sitemap). */
export const pages = (Object.keys(PATHS) as PageId[]).flatMap((page) =>
  LANGS.map((lang) => ({ path: PATHS[page][lang], alternates: LANGS.map((l) => ({ lang: l, path: PATHS[page][l] })) })),
);
