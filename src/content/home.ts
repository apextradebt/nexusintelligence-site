/** Home page. `*…*` marks the highlighted part of a heading. */
const fr = {
  hero: {
    pill: 'Rachat · Reconditionnement · Revente',
    title: 'Le juste prix pour chaque appareil. *En quelques minutes.*',
    sub: 'Nexus Intelligence conçoit les outils des professionnels de l’occasion : chaque PC portable et chaque smartphone est reconnu, comparé en direct à plus de 20 sources de rachat et de revente dans 13 pays, puis chiffré avec votre marge.',
    explore: 'Découvrir nos solutions',
  },
  stats: [
    { value: '20', suffix: '+', label: 'sources de rachat et de revente' },
    { value: '13', suffix: '', label: 'pays, en Europe et aux États‑Unis' },
    { value: '800', suffix: '+', label: 'modèles de PC et de smartphones référencés' },
    { value: '6', suffix: '', label: 'langues d’en-têtes reconnues dans vos fichiers' },
  ],
  problem: {
    eyebrow: 'Le constat',
    title: 'Un fichier client, une dizaine d’onglets, *des jours de copier-coller.*',
    lead: 'Abréviations, specs manquantes, numéros de série seuls : avant de chiffrer un lot, il faut le déchiffrer. Puis chercher chaque prix, site par site. Au comptoir, c’est la même histoire : le client attend pendant que vous comparez.',
    outcomes: [
      { question: 'Trop lent ?', answer: 'Le deal est perdu.', text: 'Pendant que vous chiffrez, un concurrent a déjà répondu.' },
      { question: 'Trop cher ?', answer: 'La marge est perdue.', text: 'Une offre au-dessus du marché, et la revente ne couvre plus vos coûts.' },
      { question: 'Pas assez ?', answer: 'Le client est perdu.', text: 'Une offre trop basse, et il vend ailleurs : en ligne, ou chez le voisin.' },
    ],
    beforeLabel: 'Avant',
    afterLabel: 'Avec Nexus',
    rows: [
      ['Des jours par offre', 'Quelques minutes par offre'],
      ['Une dizaine d’onglets ouverts', '20+ sources interrogées automatiquement'],
      ['La grille de prix du mois dernier', 'Les prix du marché, en direct'],
      ['Des tableurs illisibles', 'Chaque appareil reconnu'],
      ['L’état estimé à l’œil', 'Quatre grades clairs'],
      ['Des marges au jugé', 'Votre marge, calculée avant chaque offre'],
    ] as [string, string][],
  },
  solutions: {
    eyebrow: 'Nos solutions',
    title: 'Deux outils, *un même moteur de prix.*',
    lead: 'Que vous rachetiez des parcs entiers ou un téléphone au comptoir, Nexus s’appuie sur les mêmes agents de prix, le même référentiel d’appareils et la même IA.',
    b2b: {
      chip: 'Lots & parcs',
      title: 'Du tableur à l’offre chiffrée, en quelques minutes.',
      audience: 'Pour les reconditionneurs, ITAD, brokers et loueurs qui rachètent des lots de PC portables et de smartphones.',
      points: [
        'Excel, CSV ou lignes copiées, toute mise en forme',
        'Modèles, configurations, n° de série et IMEI reconnus',
        'Prix de rachat et de revente du marché, ligne par ligne',
        'Prix d’achat avec votre marge cible, export Excel',
      ],
      more: 'Découvrir Nexus B2B',
      image: '/nexusintelligence/img/b2b-prices-fr.webp',
    },
    back: {
      chip: 'Magasins',
      title: 'Chaque reprise au juste prix, pendant que le client attend.',
      audience: 'Pour les boutiques de téléphonie, enseignes et réseaux de magasins qui reprennent les appareils de leurs clients.',
      points: [
        'Identification par IMEI ou numéro de série',
        'Quatre grades clairs, les mêmes dans tous vos magasins',
        'Trois stratégies de prix, marge et prévision IA à 12 mois',
        'Devis PDF, paiement, expéditions et suivi',
      ],
      more: 'Découvrir Nexus Back',
      image: '/nexusintelligence/img/back-strategy.webp',
    },
  },
  engine: {
    eyebrow: 'Le moteur Nexus',
    title: 'Des prix réels, collectés en direct. *Une IA qui connaît les appareils.*',
    more: 'Comment ça marche',
  },
  audiences: {
    eyebrow: 'Pour qui',
    title: 'Pensé pour ceux qui rachètent *et revendent l’occasion.*',
  },
};

const en: typeof fr = {
  hero: {
    pill: 'Buyback · Refurbishment · Resale',
    title: 'The right price for every device. *In minutes.*',
    sub: 'Nexus Intelligence builds the tools second-hand professionals price with: every laptop and phone is recognised, checked live against 20+ buyback and resale sources in 13 countries, then priced with your margin built in.',
    explore: 'Explore the solutions',
  },
  stats: [
    { value: '20', suffix: '+', label: 'buyback and resale sources' },
    { value: '13', suffix: '', label: 'countries across Europe and the US' },
    { value: '800', suffix: '+', label: 'laptop and phone models in the reference' },
    { value: '6', suffix: '', label: 'languages of column headers recognised' },
  ],
  problem: {
    eyebrow: 'The problem',
    title: 'One client file, a dozen browser tabs, *days of copy-paste.*',
    lead: 'Shorthand, missing specs, serial numbers only: before you can price a lot, you have to decode it. Then hunt down every price, site by site. At the counter it’s the same story: the customer waits while you compare.',
    outcomes: [
      { question: 'Too slow?', answer: 'The deal is gone.', text: 'While you’re still pricing, a competitor has already replied.' },
      { question: 'Too high?', answer: 'Your margin is gone.', text: 'Offer above the market and the resale no longer covers your costs.' },
      { question: 'Too low?', answer: 'Your client is gone.', text: 'Offer too little and they sell elsewhere: online, or next door.' },
    ],
    beforeLabel: 'Before',
    afterLabel: 'With Nexus',
    rows: [
      ['Days per offer', 'Minutes per offer'],
      ['A dozen browser tabs', '20+ sources, checked automatically'],
      ['Last month’s price list', 'Live market prices'],
      ['Messy spreadsheets', 'Every device recognised'],
      ['Guessing the condition', 'Four clear grades'],
      ['Guessed margins', 'Your margin, worked out before every offer'],
    ],
  },
  solutions: {
    eyebrow: 'Our solutions',
    title: 'Two tools, *one pricing engine.*',
    lead: 'Whether you buy whole fleets or one phone at the counter, Nexus runs on the same price agents, the same device reference and the same AI.',
    b2b: {
      chip: 'Lots & fleets',
      title: 'From any spreadsheet to a priced offer, in minutes.',
      audience: 'For refurbishers, ITAD firms, brokers and leasing companies buying lots of laptops and phones.',
      points: [
        'Excel, CSV or pasted rows, any layout',
        'Models, configurations, serial numbers and IMEIs recognised',
        'Market buyback and resale prices, line by line',
        'Buy price with your target margin, Excel export',
      ],
      more: 'Explore Nexus B2B',
      image: '/nexusintelligence/img/b2b-prices-en.webp',
    },
    back: {
      chip: 'Stores',
      title: 'Every trade-in priced right, while the customer waits.',
      audience: 'For phone shops, retailers and store networks taking in their customers’ devices.',
      points: [
        'Identification from the IMEI or serial number',
        'Four clear grades, the same in every store',
        'Three pricing strategies, margin and a 12-month AI forecast',
        'PDF quote, payment, shipments and tracking',
      ],
      more: 'Explore Nexus Back',
      image: '/nexusintelligence/img/back-strategy.webp',
    },
  },
  engine: {
    eyebrow: 'The Nexus engine',
    title: 'Real prices, collected live. *An AI that knows devices.*',
    more: 'How it works',
  },
  audiences: {
    eyebrow: 'Who it’s for',
    title: 'Built for the people who buy *and resell used devices.*',
  },
};

export const home = { fr, en };
