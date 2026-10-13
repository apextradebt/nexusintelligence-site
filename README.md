# nexusintelligence.fr

The Nexus Intelligence website: one page per subject, in French and English. React 19, TypeScript, Tailwind CSS 4 and Vite 8, the same stack as the Nexus apps.

Every page is rendered to plain HTML at build time, then React takes over in the browser (scroll animations, film player, step tabs, phone menu, contact form). That means each address is a real file, so GitHub Pages can serve it, search engines read the full text, and the site still reads without JavaScript.

## Pages

| Page | French | English |
|---|---|---|
| Home | `/` | `/en/` |
| Nexus B2B (lot quoting) | `/nexus-b2b/` | `/en/nexus-b2b/` |
| Nexus Back (in-store trade-in) | `/nexus-back/` | `/en/nexus-back/` |
| Technology | `/technologie/` | `/en/technology/` |
| FAQ | `/faq/` | `/en/faq/` |
| Contact | `/contact/` | `/en/contact/` |
| Legal notice | `/mentions-legales/` | `/en/legal-notice/` |

The FR / EN switch in the header links to the same page in the other language. Unknown addresses get `404.html`.

## Commands

```bash
npm install
npm run dev       # http://localhost:5176, reloads on every change
npm run build     # type check, build, then render every page to dist/
npm run preview   # serves dist/ on http://localhost:4173, as it will be online
```

## How the code is organised

```
src/
  content/       all the text, French and English side by side, one file per page or block
  pages/         one component per page, assembled from sections
  components/
    sections/    page blocks: heroes, stats, cards, FAQ, contact form, call to action…
    media/       Film (player + transcript), Showcase (steps with app screens)
    ui/          small building blocks: Section, SectionHeading, Button, Card, Rich…
    layout/      Header, Nav, LangSwitch, Footer, Layout
    brand/       the logo (Mark, Wordmark, Logo), drawn from logoGeometry.ts
  routes.ts      the pages and their address in each language
  App.tsx        which component draws which page
  head.ts        <title>, description, language alternates, link preview of each page
  styles.css     Tailwind theme: the palette, light/dark colours, the B2B (lime) and Back (blue) tones
  main.tsx       browser entry · entry-server.tsx: build-time renderer
scripts/prerender.mjs   writes dist/<page>/index.html, 404.html and sitemap.xml
public/        files copied as they are: videos, images, fonts, icons, CNAME
```

## Common changes

- **Change a text:** edit the file in `src/content/`. Each file has a `fr` object and an `en` object of the same shape; TypeScript refuses the build if one language is missing a text.
  - `*…*` highlights part of a heading in the section's accent colour.
  - In French, the non-breaking spaces before `? ! : ; € %` are added automatically.
- **Change a colour:** edit the `@theme` block at the top of `src/styles.css`. Components only use named colours (`bg-page`, `text-ink`, `text-hl`, `bg-lime`…), never raw values for text.
- **Add a page:**
  1. Add its addresses to `PATHS` in `src/routes.ts`.
  2. Add its title and description in `src/content/meta.ts`.
  3. Write the component in `src/pages/` and register it in `PAGES` in `src/App.tsx`.
  4. To link it from the menu, add it to `NAV_PAGES` in `src/components/layout/Nav.tsx`.
- **Logo, favicon, link preview image, film covers:** generated in `../brand/` (see its README). `build_logo.py` also rewrites `src/components/brand/logoGeometry.ts`.
- **Films and app screens:** see "Website versions" in `../nexus-video/README.md`.

## Before going live

1. **Email address.** The site uses `contact@nexusintelligence.fr` (set once, in `src/site.ts`). Create the mailbox at your registrar, or change the address there.
2. **Legal notice.** French law requires the publisher's details. Fill in every `<Todo>` in `src/components/sections/LegalNotice.tsx`: legal form, share capital, registered office, RCS / SIRET, VAT number, phone, publication director and the hosting provider (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA, if you use GitHub Pages).
3. **Contact form.** It opens the visitor's email app with the message filled in, so it needs no server and stores nothing.

## Put it online with GitHub Pages

The repository builds and publishes itself: `.github/workflows/deploy.yml` runs `npm run build` on every push to `main` and publishes `dist/`.

1. **Publish the repository.** In GitHub Desktop: File → Add local repository → this folder → create a repository → Publish. The repository must be public on a free GitHub plan.
2. **Point Pages at the workflow.** On github.com: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. **Connect the domain.** The workflow runs at the next push, or from the Actions tab → "Deploy to GitHub Pages" → Run workflow. Then in Settings → Pages → Custom domain, enter `nexusintelligence.fr`.
4. **Add the DNS records** at your registrar:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (four records) |
   | AAAA | @ | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` (four records) |
   | CNAME | www | `<your-account>.github.io` |

5. **Switch on HTTPS.** Once the DNS check passes, tick **Enforce HTTPS** in Settings → Pages.

Keep in mind:

- **Videos and Git LFS:** the videos (18–21 MB each) are committed as normal files. Don't move them to Git LFS: GitHub Pages doesn't serve LFS files.
- **Root address only:** the site expects to be served at the root of a domain. On the temporary `<account>.github.io/<repo>/` address, the styles and links won't load until the custom domain is connected.
