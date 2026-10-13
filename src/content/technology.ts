import { Globe, ScanBarcode, Server, Sparkles } from 'lucide-react';

/** Technology page (and the engine cards on the home page). */
const fr = {
  hero: {
    eyebrow: 'Le moteur Nexus',
    title: 'Des prix réels, collectés en direct. *Une IA qui connaît les appareils.*',
    lead: 'Sous les deux applications, le même socle : des agents qui lisent le marché, un référentiel de modèles vérifié et un modèle d’IA entraîné pour reconnaître les appareils.',
  },
  engine: [
    { icon: Globe, title: 'Des agents de prix', text: 'Pour chaque ligne, des agents interrogent en parallèle les sites de rachat et de revente, vérifient que l’annonce porte sur le même appareil (modèle, génération, processeur, capacité) et retiennent le grade demandé.' },
    { icon: Sparkles, title: 'Une IA entraînée pour la tâche', text: 'Un modèle spécialisé, entraîné par nos soins, choisit le bon appareil parmi les candidats du référentiel. Il rattrape ce que les règles manquent, comme « MBP 14 2021 » lu comme un iPhone 14.' },
    { icon: ScanBarcode, title: 'IMEI et numéros de série', text: 'Un téléphone s’identifie par son IMEI, un PC portable par son numéro de série : Apple, Lenovo, HP et Fujitsu.' },
    { icon: Server, title: 'Vos fichiers restent chez nous', text: 'L’IA tourne sur nos propres serveurs : vos fichiers ne partent chez aucun fournisseur d’IA tiers. Numéros de série et IMEI sont retirés des retours d’apprentissage.' },
  ],
  coverage: {
    title: '13 pays, rachat et revente',
    text: 'Sites de reprise, reconditionneurs et places de marché. Les petites annonces de particuliers ne servent qu’en dernier recours, et leurs prix sont signalés comme indicatifs.',
    countries: [
      ['FR', 'France'], ['DE', 'Allemagne'], ['NL', 'Pays-Bas'], ['BE', 'Belgique'], ['ES', 'Espagne'], ['IT', 'Italie'], ['AT', 'Autriche'],
      ['UK', 'Royaume-Uni'], ['SE', 'Suède'], ['DK', 'Danemark'], ['NO', 'Norvège'], ['FI', 'Finlande'], ['US', 'États-Unis'],
    ] as [string, string][],
  },
  rules: {
    title: 'Une collecte responsable',
    items: [
      'Uniquement des prix publics, dans le respect du fichier robots.txt de chaque site.',
      'Les sites protégés contre les robots ne sont jamais contournés.',
      'Une requête par seconde et par site au plus, résultats gardés en cache 6 h.',
      'Dollars et livres convertis au taux de la BCE.',
    ],
  },
};

const en: typeof fr = {
  hero: {
    eyebrow: 'The Nexus engine',
    title: 'Real prices, collected live. *An AI that knows devices.*',
    lead: 'Under both apps sits the same foundation: agents that read the market, a verified model reference and an AI model trained to recognise devices.',
  },
  engine: [
    { icon: Globe, title: 'Price agents', text: 'For each line, agents query buyback and resale sites in parallel, check each listing is the same device (model, generation, CPU, capacity) and keep the requested grade.' },
    { icon: Sparkles, title: 'An AI trained for the job', text: 'A specialised model we trained ourselves picks the right device from the reference’s candidates. It catches what rules miss, like “MBP 14 2021” read as an iPhone 14.' },
    { icon: ScanBarcode, title: 'IMEIs and serial numbers', text: 'A phone is identified from its IMEI, a laptop from its serial number: Apple, Lenovo, HP and Fujitsu.' },
    { icon: Server, title: 'Your files stay with us', text: 'The AI runs on our own servers: your files are never sent to a third-party AI provider. Serial numbers and IMEIs are stripped from training feedback.' },
  ],
  coverage: {
    title: '13 countries, buyback and resale',
    text: 'Trade-in sites, refurbishers and marketplaces. Private classifieds are only a last resort, and their prices are flagged as indicative.',
    countries: [
      ['FR', 'France'], ['DE', 'Germany'], ['NL', 'Netherlands'], ['BE', 'Belgium'], ['ES', 'Spain'], ['IT', 'Italy'], ['AT', 'Austria'],
      ['UK', 'United Kingdom'], ['SE', 'Sweden'], ['DK', 'Denmark'], ['NO', 'Norway'], ['FI', 'Finland'], ['US', 'United States'],
    ],
  },
  rules: {
    title: 'Responsible collection',
    items: [
      'Public prices only, respecting each site’s robots.txt.',
      'Sites protected against bots are never worked around.',
      'At most one request per second per site, results cached for 6 hours.',
      'US dollars and pounds converted at ECB rates.',
    ],
  },
};

export const technology = { fr, en };
