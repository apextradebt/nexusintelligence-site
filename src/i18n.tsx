import { createContext, useContext } from 'react';
import type { Lang } from './routes';

/** Content written once per language: `{ fr: {...}, en: {...} }`. */
export type Localized<T> = { fr: T; en: T };

const LangContext = createContext<Lang>('fr');
export const LangProvider = LangContext.Provider;

export const useLang = () => useContext(LangContext);

/** The current language's version of a content object. */
export function useContent<T>(content: Localized<T>): T {
  return content[useLang()];
}

/** French typography: a non-breaking space before ? ! : ; » % € and after «. */
export function typeset(text: string, lang: Lang): string {
  if (lang !== 'fr') return text;
  return text
    .replace(/ ([?!:;»%€])/g, ' $1')
    .replace(/« /g, '« ');
}
