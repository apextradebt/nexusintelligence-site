import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { App } from './App';
import { resolvePath, type Route } from './routes';
import './styles.css';

// The page comes from the address. The 404 page keeps the language it was built in (GitHub Pages
// serves the same 404.html for every unknown address), so hydration matches the HTML.
const resolved = resolvePath(window.location.pathname);
const route: Route = resolved.page === 'notFound'
  ? { page: 'notFound', lang: document.documentElement.lang === 'en' ? 'en' : 'fr' }
  : resolved;

const root = document.getElementById('root')!;
const app = <StrictMode><App route={route} /></StrictMode>;

// Built pages already contain their HTML (scripts/prerender.mjs): attach to it. In `npm run dev` it is empty.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
