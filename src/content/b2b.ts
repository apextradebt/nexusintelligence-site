import { ChartLine, Download, Layers, Library, Search, Tag } from 'lucide-react';

/** Nexus B2B page: lot and fleet quoting. */
const fr = {
  hero: {
    eyebrow: 'Nexus B2B · Cotation de lots',
    title: 'De la liste du client *à votre offre chiffrée.*',
    lead: 'Nexus B2B lit le fichier tel qu’il arrive, reconnaît chaque appareil, regroupe les lignes identiques et les chiffre au prix du marché. Vous relisez, vous ajustez, vous envoyez.',
  },
  steps: {
    eyebrow: 'Comment ça marche',
    title: 'Cinq étapes, *un seul écran.*',
    label: 'Étapes Nexus B2B',
    caption: 'Écrans du film de présentation, données fictives.',
    items: [
      {
        title: 'Déposez n’importe quel fichier',
        text: 'Excel, CSV ou lignes copiées d’un e-mail. Toute mise en forme, en-têtes reconnus en six langues, tableaux croisés dépliés.',
        image: '/nexusintelligence-site/img/b2b-import-fr.webp',
        alt: 'Nexus B2B, étape Colonnes : 742 lignes lues, les colonnes Beschreibung, S/N · IMEI, Qté et Zustand reconnues comme Description, N° de série, Quantité et Grade.',
      },
      {
        title: 'Chaque appareil reconnu',
        text: 'Abréviations, fautes, n° de série, IMEI : Nexus lit tout, et l’IA vérifie les lignes douteuses. Vous validez ses propositions.',
        image: '/nexusintelligence-site/img/b2b-decode-fr.webp',
        alt: 'Lignes du fichier décodées : « Lat 5420 i5/16/256 gr B » devient Dell Latitude 5420, un numéro de série devient un Lenovo ThinkPad E14 Gen 2, « SGS21 128 » est proposé par l’IA comme Samsung Galaxy S21.',
      },
      {
        title: 'Les prix du marché en direct',
        text: 'Plus de 20 sources de rachat et de revente dans 13 pays. Même modèle, même configuration, même grade.',
        image: '/nexusintelligence-site/img/b2b-prices-fr.webp',
        alt: 'Tableau des prix : pour chaque modèle, rachat marché, revente, notre prix d’achat et marge par unité, avec les totaux du lot.',
      },
      {
        title: 'Votre offre, marge comprise',
        text: 'Le prix d’achat garde votre marge cible après vos coûts par grade. Votre propre grille aussi, avec une alerte quand elle s’écarte du marché.',
        image: '/nexusintelligence-site/img/b2b-offer-fr.webp',
        alt: 'Offre du lot avec une alerte : le prix de la grille pour l’EliteBook 840 G8 est 23 % au-dessus du marché.',
      },
      {
        title: 'Chaque lot suivi',
        text: 'Devis émis, accepté, en transit, réceptionné, en traitement, payé : voyez d’un coup d’œil où en est chaque lot.',
        image: '/nexusintelligence-site/img/b2b-quotes-fr.webp',
        alt: 'Liste des devis avec leur statut : devis émis, en transit, traitement terminé, accepté.',
      },
    ],
  },
  formula: {
    context: 'EXEMPLE · DELL LATITUDE 5420 · GRADE B',
    title: 'Votre marge, avant que l’offre parte.',
    rows: [
      { label: 'Prix de revente', hint: 'médiane du marché, même config et grade', value: '339 €', minus: false },
      { label: 'Marge cible', hint: 'réglable dans les paramètres', value: '− 25 %', minus: true },
      { label: 'Coûts par grade', hint: 'pièces, main-d’œuvre, logistique, effacement des données', value: '− 40 €', minus: true },
    ],
    totalLabel: 'Votre offre',
    total: '214 €',
    compare: [
      ['Rachat marché', '210 €'],
      ['Marge brute / unité', '125 €'],
    ] as [string, string][],
    verdict: 'Compétitive. *Et la marge est là.*',
    note: 'Exemple fictif : 339 € × (1 − 25 %) − 40 € = 214 €. La marge cible et les coûts par grade se règlent dans les paramètres.',
  },
  features: {
    title: 'Et tout ce qu’il faut autour.',
    lead: 'Les outils du quotidien d’un acheteur, dans la même application.',
    items: [
      { icon: Tag, title: 'Mes prix', text: 'Importez votre grille de revente, même en texte libre. Elle sert de référence sur chaque devis, avec une alerte quand le marché s’en écarte.' },
      { icon: Search, title: 'Recherche rapide', text: 'Le prix d’un seul appareil sans faire de devis : tapez un modèle, un IMEI ou un numéro de série.' },
      { icon: ChartLine, title: 'Historique des prix', text: 'L’évolution mensuelle des prix de reprise, par capacité, pour près de 100 téléphones, tablettes et montres.' },
      { icon: Library, title: 'Référentiel d’appareils', text: '270+ PC portables et 500+ smartphones. Les configurations d’usine sont vérifiées sur les fiches constructeur, ou signalées comme indicatives.' },
      { icon: Layers, title: 'Lignes regroupées', text: 'Les appareils identiques sont regroupés et triés : vous relisez des modèles, pas des centaines de lignes.' },
      { icon: Download, title: 'Export Excel & CSV', text: 'Votre offre ligne par ligne, prête à envoyer au client, ou enregistrée pour plus tard.' },
    ],
  },
  audiences: {
    eyebrow: 'Pour qui',
    title: 'Pour ceux qui rachètent *des lots entiers.*',
  },
};

const en: typeof fr = {
  hero: {
    eyebrow: 'Nexus B2B · Lot quoting',
    title: 'From the client’s list *to your priced offer.*',
    lead: 'Nexus B2B reads the file as it comes, recognises every device, groups identical lines and prices them at market value. You review, adjust and send.',
  },
  steps: {
    eyebrow: 'How it works',
    title: 'Five steps, *one screen.*',
    label: 'Nexus B2B steps',
    caption: 'Screens from the product film, fictional data.',
    items: [
      {
        title: 'Drop any file',
        text: 'Excel, CSV or rows pasted from an email. Any layout, headers recognised in six languages, pivot tables expanded.',
        image: '/img/b2b-import-en.webp',
        alt: 'Nexus B2B, Columns step: 742 rows read, the Beschreibung, S/N · IMEI, Qté and Zustand columns recognised as Description, Serial no., Quantity and Grade.',
      },
      {
        title: 'Every device recognised',
        text: 'Shorthand, typos, serial numbers, IMEIs: Nexus reads them all, and the AI double-checks the tricky lines. You confirm its suggestions.',
        image: '/img/b2b-decode-en.webp',
        alt: 'File rows decoded: “Lat 5420 i5/16/256 gr B” becomes a Dell Latitude 5420, a serial number becomes a Lenovo ThinkPad E14 Gen 2, “SGS21 128” is suggested by the AI as a Samsung Galaxy S21.',
      },
      {
        title: 'Live market prices',
        text: '20+ buyback and resale sources across 13 countries. Same model, same specs, same grade.',
        image: '/img/b2b-prices-en.webp',
        alt: 'Price table: for each model, market buyback, resale, our buy price and margin per unit, with the lot totals.',
      },
      {
        title: 'Your offer, margin built in',
        text: 'The buy price keeps your target margin after your costs per grade. Your own price list too, with an alert when it drifts from the market.',
        image: '/img/b2b-offer-en.webp',
        alt: 'Lot offer with an alert: the list price for the EliteBook 840 G8 is 23% above the market.',
      },
      {
        title: 'Every deal, tracked',
        text: 'Quote issued, accepted, in transit, received, processing, paid: see where every lot stands at a glance.',
        image: '/img/b2b-quotes-en.webp',
        alt: 'Quote list with statuses: quote issued, in transit, processing complete, accepted.',
      },
    ],
  },
  formula: {
    context: 'EXAMPLE · DELL LATITUDE 5420 · GRADE B',
    title: 'Your margin, before the offer goes out.',
    rows: [
      { label: 'Resale price', hint: 'market median, same specs and grade', value: '€339', minus: false },
      { label: 'Target margin', hint: 'set in Settings', value: '−25%', minus: true },
      { label: 'Costs per grade', hint: 'parts, labour, logistics, data wiping', value: '−€40', minus: true },
    ],
    totalLabel: 'Your offer',
    total: '€214',
    compare: [
      ['Market buyback', '€210'],
      ['Gross margin / unit', '€125'],
    ],
    verdict: 'Competitive. *And still on target.*',
    note: 'Fictional example: €339 × (1 − 25%) − €40 = €214. Target margin and costs per grade are set in Settings.',
  },
  features: {
    title: 'And everything around it.',
    lead: 'A buyer’s everyday tools, in the same app.',
    items: [
      { icon: Tag, title: 'My prices', text: 'Import your resale price list, even as free text. It’s the reference on every quote, with an alert when the market moves away from it.' },
      { icon: Search, title: 'Quick search', text: 'Price a single device without a quote: type a model, an IMEI or a serial number.' },
      { icon: ChartLine, title: 'Price history', text: 'Monthly trade-in prices by capacity for nearly 100 phones, tablets and watches.' },
      { icon: Library, title: 'Device reference', text: '270+ laptops and 500+ phones. Factory configurations are checked against manufacturer spec sheets, or flagged as indicative.' },
      { icon: Layers, title: 'Grouped lines', text: 'Identical devices are grouped and sorted, so you review models, not hundreds of rows.' },
      { icon: Download, title: 'Excel & CSV export', text: 'Your offer line by line, ready to send to the client, or saved for later.' },
    ],
  },
  audiences: {
    eyebrow: 'Who it’s for',
    title: 'For the people who buy *whole lots.*',
  },
};

export const b2b = { fr, en };
