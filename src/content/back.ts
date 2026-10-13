/** Nexus Back page: in-store trade-in (B2C). The app screens come from the English film. */
const fr = {
  hero: {
    eyebrow: 'Nexus Back · Reprise en magasin',
    title: 'Chaque reprise, *au juste prix.*',
    lead: 'Un client pose son ancien téléphone sur le comptoir et veut un prix, tout de suite. Nexus Back identifie l’appareil, applique votre grille d’état, interroge le marché en direct et vous propose trois offres, marge comprise.',
    cta: 'Équiper mes magasins',
  },
  steps: {
    eyebrow: 'Au comptoir',
    title: 'De l’IMEI au colis, *en cinq étapes.*',
    label: 'Étapes Nexus Back',
    caption: 'Écrans du film (interface en anglais, l’application existe aussi en français), données fictives.',
    items: [
      {
        title: 'Identifié en quelques secondes',
        text: 'Scannez l’IMEI, ou le numéro de série d’un PC portable : Nexus Back reconnaît le modèle exact.',
        image: '/img/back-imei.webp',
        alt: 'Nexus Back, étape Appareils : l’IMEI saisi identifie un Apple iPhone 13 Pro.',
      },
      {
        title: 'Le même grade, à chaque fois',
        text: 'Capacité, couleur et quatre grades clairs, de comme neuf à cassé. Toute l’équipe évalue de la même façon.',
        image: '/img/back-grades.webp',
        alt: 'Diagnostic : capacité, couleur et grades A à D.',
      },
      {
        title: 'Le marché en direct, trois stratégies',
        text: 'Ce que les revendeurs paient et ce qu’ils revendent, en direct. Sécurisée, Marché ou Agressive, avec votre marge et une prévision IA à 12 mois.',
        image: '/img/back-strategy.webp',
        alt: 'Stratégies Safe 400 €, Market 470 € et Aggressive 517 € avec la marge estimée, et la prévision de dépréciation sur 12 mois.',
      },
      {
        title: 'Devis, accord, paiement',
        text: 'Un devis PDF professionnel en un clic. Paiement par virement, espèces ou bon d’achat, et tout est enregistré.',
        image: '/img/back-payment.webp',
        alt: 'Devis PDF de reprise à 470 €, décision du client et choix du paiement.',
      },
      {
        title: 'Expédié et suivi',
        text: 'Regroupez les appareils en expéditions vers votre centre de reconditionnement et suivez chacune, du comptoir au traitement.',
        image: '/img/back-logistics.webp',
        alt: 'Logistique : quatre reprises regroupées dans une expédition vers le centre de reconditionnement, avec transporteur et numéro de suivi.',
      },
    ],
  },
  grades: {
    context: 'Grille d’état',
    title: 'Quatre grades, une seule règle.',
    text: 'Le grade ajuste le prix de référence du modèle, quelle que soit la personne au comptoir.',
    items: [
      { grade: 'A', name: 'Comme neuf', effect: 'Prix de référence' },
      { grade: 'B', name: 'Micro-rayures', effect: 'Référence − 15 %' },
      { grade: 'C', name: 'Rayures marquées', effect: 'Référence − 30 %' },
      { grade: 'D', name: 'Cassé', effect: 'Référence − 50 %' },
    ],
  },
  strategies: {
    context: 'Stratégie de prix',
    title: 'Trois offres, votre marge sous les yeux.',
    text: 'Chaque stratégie part de la valeur de référence du marché et affiche la marge estimée face au prix de revente moyen.',
    items: [
      { name: 'Sécurisée', share: '85 %', text: 'Risque minimal face à la dépréciation.', featured: false },
      { name: 'Marché', share: '100 %', text: 'Prix juste selon la cotation actuelle.', featured: true },
      { name: 'Agressive', share: '110 %', text: 'Pour être sûr de remporter la reprise.', featured: false },
    ],
    forecastLabel: 'Prévision IA :',
    forecast: 'la courbe de dépréciation sur 12 mois vous dit si l’appareil va vite perdre de sa valeur.',
  },
  audiences: {
    eyebrow: 'Pour qui',
    title: 'Pour ceux qui reprennent *au comptoir.*',
  },
};

const en: typeof fr = {
  hero: {
    eyebrow: 'Nexus Back · In-store trade-in',
    title: 'Every trade-in, *priced right.*',
    lead: 'A customer puts their old phone on the counter and wants a price, right now. Nexus Back identifies the device, applies your condition grades, checks the live market and gives you three offers, margin included.',
    cta: 'Set it up in my stores',
  },
  steps: {
    eyebrow: 'At the counter',
    title: 'From IMEI to parcel, *in five steps.*',
    label: 'Nexus Back steps',
    caption: 'Screens from the product film, fictional data.',
    items: [
      {
        title: 'Identify in seconds',
        text: 'Scan the IMEI, or a laptop’s serial number. Nexus Back recognises the exact model.',
        image: '/img/back-imei.webp',
        alt: 'Devices step: the IMEI identifies an Apple iPhone 13 Pro.',
      },
      {
        title: 'Grade it the same way, every time',
        text: 'Storage, colour and four clear grades, from like new to broken. Your whole team prices the same way.',
        image: '/img/back-grades.webp',
        alt: 'Diagnostics: storage, colour and grades A to D.',
      },
      {
        title: 'Live market, three strategies',
        text: 'What resellers pay and what they sell for, checked live. Safe, Market or Aggressive, with your margin and a 12-month AI forecast.',
        image: '/img/back-strategy.webp',
        alt: 'Safe €400, Market €470 and Aggressive €517 strategies with estimated margins, and the 12-month depreciation forecast.',
      },
      {
        title: 'Quote, accept, pay',
        text: 'A professional PDF quote in one click. Pay by transfer, cash or store credit, and it’s all on record.',
        image: '/img/back-payment.webp',
        alt: 'PDF trade-in quote for €470, customer decision and payment choice.',
      },
      {
        title: 'Ship and track',
        text: 'Group devices into shipments to your refurbishment partner and follow every one, from the counter to processing.',
        image: '/img/back-logistics.webp',
        alt: 'Logistics: four trade-ins grouped into a shipment to the refurbishment centre, with carrier and tracking number.',
      },
    ],
  },
  grades: {
    context: 'Condition grades',
    title: 'Four grades, one rule.',
    text: 'The grade adjusts the model’s reference price, whoever is at the counter.',
    items: [
      { grade: 'A', name: 'Like new', effect: 'Reference price' },
      { grade: 'B', name: 'Micro-scratches', effect: 'Reference −15%' },
      { grade: 'C', name: 'Visible scratches', effect: 'Reference −30%' },
      { grade: 'D', name: 'Broken', effect: 'Reference −50%' },
    ],
  },
  strategies: {
    context: 'Pricing strategy',
    title: 'Three offers, your margin in plain sight.',
    text: 'Each strategy starts from the market reference value and shows the estimated margin against the average resale price.',
    items: [
      { name: 'Safe', share: '85%', text: 'Minimal risk against depreciation.', featured: false },
      { name: 'Market', share: '100%', text: 'Fair price based on current market rates.', featured: true },
      { name: 'Aggressive', share: '110%', text: 'To be sure to win the trade-in.', featured: false },
    ],
    forecastLabel: 'AI forecast:',
    forecast: 'the 12-month depreciation curve tells you how fast the device will lose value.',
  },
  audiences: {
    eyebrow: 'Who it’s for',
    title: 'For the people who buy *at the counter.*',
  },
};

export const back = { fr, en };
