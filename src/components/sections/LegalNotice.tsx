import type { ReactNode } from 'react';
import { useLang } from '@/i18n';
import { SITE } from '@/site';

/** Information only you can supply: highlighted until it is filled in. Replace each <Todo> by the real text. */
const Todo = ({ children }: { children: ReactNode }) => (
  <span className="rounded-md bg-rust/14 px-1.5 py-px font-semibold text-rust-ink">[{children}]</span>
);

const H2 = ({ id, children }: { id?: string; children: ReactNode }) => (
  <h2 id={id} className="mt-12 scroll-mt-24 text-2xl tracking-[-.025em] text-ink">{children}</h2>
);
const P = ({ children }: { children: ReactNode }) => <p className="mt-3 leading-[1.75] text-muted">{children}</p>;
const Li = ({ children }: { children: ReactNode }) => <li className="mt-3 leading-[1.75] text-muted">{children}</li>;
const Mail = () => <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a>;

/**
 * Legal notice required by French law (LCEN), privacy and credits. Written in French (the legally binding version),
 * with an English summary on the English page. Typography is written in directly: the non-breaking spaces are there.
 */
export function LegalNotice() {
  const lang = useLang();
  return (
    <div className="mx-auto max-w-[860px]">
      <h1 id="page-title" className="text-[clamp(36px,5vw,54px)] text-ink">{lang === 'fr' ? 'Mentions légales' : 'Legal notice'}</h1>
      <p className="mt-3.5 text-[14.5px] text-muted">{lang === 'fr' ? 'Dernière mise à jour : 18 octobre 2026' : 'Last updated: 18 October 2026'}</p>

      {lang === 'en' && (
        <p className="mt-6 rounded-2xl bg-page-alt p-5 leading-[1.75] text-muted">
          <strong className="text-ink">This legal notice is written in French, as French law requires.</strong> In short: this site is
          published by Nexus Intelligence, sets no cookies, runs no analytics, loads nothing from third parties and stores none of your
          data. Messages sent with the contact form reach our inbox by email through the Web3Forms service. Write to <Mail /> for any question about your data.
        </p>
      )}

      <div lang="fr">
        <H2 id="editeur">Éditeur du site</H2>
        <P>Le site <strong className="text-ink">nexusintelligence.fr</strong> est édité par&nbsp;:</P>
        <ul className="list-disc pl-5">
          <Li><strong className="text-ink">Nexus Intelligence</strong>, <Todo>forme juridique, ex. SAS</Todo> au capital de <Todo>montant</Todo>&nbsp;€</Li>
          <Li>Siège social&nbsp;: <Todo>adresse complète</Todo></Li>
          <Li>RCS <Todo>ville</Todo> <Todo>numéro</Todo> · SIRET <Todo>numéro</Todo></Li>
          <Li>TVA intracommunautaire&nbsp;: <Todo>numéro</Todo></Li>
          <Li>E-mail&nbsp;: <Mail /> · Téléphone&nbsp;: <Todo>numéro</Todo></Li>
          <Li>Directeur de la publication&nbsp;: <Todo>nom et prénom</Todo></Li>
        </ul>

        <H2 id="hebergeur">Hébergeur</H2>
        <ul className="list-disc pl-5">
          <Li><Todo>nom de l’hébergeur</Todo></Li>
          <Li><Todo>adresse</Todo></Li>
          <Li><Todo>téléphone ou site web</Todo></Li>
        </ul>

        <H2 id="propriete">Propriété intellectuelle</H2>
        <P>Les textes, films, captures d’écran, logos et marques Nexus, Nexus B2B et Nexus Back présentés sur ce site sont la propriété de Nexus Intelligence. Toute reproduction ou réutilisation sans autorisation écrite préalable est interdite.</P>
        <P>Les noms de fabricants et de modèles d’appareils (Apple, Samsung, Dell, HP, Lenovo, etc.) cités sur ce site appartiennent à leurs propriétaires respectifs et ne sont mentionnés qu’à titre descriptif.</P>
        <P>Les clients, lots, appareils, prix et montants montrés dans les films et les captures d’écran sont fictifs et donnés à titre d’illustration.</P>

        <H2 id="donnees">Données personnelles</H2>
        <P><strong className="text-ink">Ce site ne dépose aucun cookie</strong> et n’utilise aucun outil de mesure d’audience, de publicité ou de suivi. Les polices de caractères et les vidéos sont servies depuis ce site&nbsp;: aucune ressource n’est chargée depuis un service tiers.</P>
        <P><strong className="text-ink">Formulaire de contact.</strong> Le message que vous envoyez avec le formulaire nous est transmis par e-mail par l’intermédiaire du service Web3Forms&nbsp;; ce site ne le conserve pas. Les informations qu’il contient (nom, société, coordonnées, message) sont utilisées uniquement pour vous répondre et assurer le suivi de votre demande. Elles ne sont ni vendues ni cédées, et sont conservées au plus <Todo>3 ans</Todo> après notre dernier échange.</P>
        <P><strong className="text-ink">Journaux techniques.</strong> Comme tout site web, l’hébergeur peut enregistrer des journaux techniques (adresse IP, date, page demandée) pour assurer la sécurité et le bon fonctionnement du service.</P>
        <P><strong className="text-ink">Vos droits.</strong> Conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation et d’opposition sur vos données. Pour l’exercer, écrivez à <Mail />. Vous pouvez aussi adresser une réclamation à la CNIL (<a href="https://www.cnil.fr" rel="noopener" className="underline">www.cnil.fr</a>).</P>

        <H2 id="credits">Crédits</H2>
        <ul className="list-disc pl-5">
          <Li>Films de présentation et logo&nbsp;: Nexus Intelligence. Voix off de synthèse, sans clonage de voix réelle.</Li>
          <Li>Polices&nbsp;: Inter (Rasmus Andersson) et JetBrains Mono (JetBrains), sous licence SIL Open Font License&nbsp;1.1.</Li>
          <Li>Icônes&nbsp;: Lucide, sous licence ISC.</Li>
        </ul>
      </div>
    </div>
  );
}
