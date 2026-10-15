// Renders every page of the site to its own HTML file, after `vite build` (client) and
// `vite build --ssr src/entry-server.tsx --outDir dist-ssr` (renderer). Run by `npm run build`.
//   dist/index.html, dist/nexus-b2b/index.html, dist/en/index.html, … + dist/404.html + dist/sitemap.xml
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const SITE_URL = 'https://nexusintelligence.fr';

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('dist/index.html has lost its <!--app-head--> / <!--app-html--> markers');
}
const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f));
const { render, pages, sitemapPages } = await import(pathToFileURL(path.join(ssrDir, entry)).href);

function page(url) {
  const { html, head, lang } = render(url);
  return template
    .replace('<html lang="fr">', `<html lang="${lang}">`)
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', html);
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

for (const p of pages) {
  write(path.join(dist, p.path, 'index.html'), page(p.path));
  console.log('  page', p.path);
}
write(path.join(dist, '404.html'), page('/404/'));
console.log('  page /404.html');

const sitemapList = sitemapPages ?? pages;
const today = new Date().toISOString().slice(0, 10);
const priorities = {
  home: '1.0',
  b2b: '0.9',
  back: '0.9',
  technology: '0.8',
};

const urls = sitemapList.map((p) => [
  '  <url>',
  `    <loc>${SITE_URL}${p.path}</loc>`,
  ...p.alternates.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${SITE_URL}${a.path}"/>`),
  `    <lastmod>${today}</lastmod>`,
  '    <changefreq>weekly</changefreq>',
  `    <priority>${priorities[p.page] || '0.8'}</priority>`,
  '  </url>',
].join('\n'));
write(path.join(dist, 'sitemap.xml'), [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...urls,
  '</urlset>',
  '',
].join('\n'));
console.log(`  sitemap.xml (${sitemapList.length} entries for ${new Set(sitemapList.map(s => s.page)).size} pages)`);

fs.rmSync(ssrDir, { recursive: true, force: true });
