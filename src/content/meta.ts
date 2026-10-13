import type { PageId } from '@/routes';

/** Title and description of each page, for browsers, search engines and link previews. */
type Meta = Record<PageId | 'notFound', { title: string; description: string }>;

const fr: Meta = {
  home: {
    title: 'Nexus Intelligence · Cotation et reprise d’appareils d’occasion au prix du marché',
    description: 'Nexus Intelligence édite Nexus B2B, la cotation de lots de PC portables et de smartphones en quelques minutes, et Nexus Back, la reprise en magasin au juste prix. Prix de rachat et de revente en direct : 20+ sources, 13 pays.',
  },
  b2b: {
    title: 'Nexus B2B · Cotation de lots de PC et de smartphones',
    description: 'Importez la liste du client : Nexus B2B reconnaît chaque appareil, interroge 20+ sources de rachat et de revente dans 13 pays et calcule votre offre avec votre marge.',
  },
  back: {
    title: 'Nexus Back · Reprise d’appareils en magasin',
    description: 'IMEI, grades A à D, trois stratégies de prix avec marge et prévision IA, devis PDF, paiement et suivi des expéditions : la reprise au juste prix, au comptoir.',
  },
  technology: {
    title: 'Technologie · Nexus Intelligence',
    description: 'Des agents de prix sur 20+ sources dans 13 pays, une IA de reconnaissance entraînée et hébergée par nos soins, un référentiel de 800+ modèles vérifiés.',
  },
  faq: {
    title: 'Questions fréquentes · Nexus Intelligence',
    description: 'Appareils reconnus, formats de fichiers, origine des prix, données : les réponses aux questions sur Nexus B2B et Nexus Back.',
  },
  contact: {
    title: 'Contact · Nexus Intelligence',
    description: 'Demandez une démo de Nexus B2B ou de Nexus Back, sur vos propres fichiers et appareils.',
  },
  legal: {
    title: 'Mentions légales · Nexus Intelligence',
    description: 'Mentions légales, données personnelles et crédits du site nexusintelligence.fr.',
  },
  notFound: { title: 'Page introuvable · Nexus Intelligence', description: 'Cette page n’existe pas, ou plus.' },
};

const en: Meta = {
  home: {
    title: 'Nexus Intelligence · Price used laptops and phones at live market value',
    description: 'Nexus Intelligence makes Nexus B2B, quoting for lots of laptops and phones in minutes, and Nexus Back, in-store trade-in priced right. Live buyback and resale prices from 20+ sources in 13 countries.',
  },
  b2b: {
    title: 'Nexus B2B · Quoting for lots of laptops and phones',
    description: 'Drop in the client’s list: Nexus B2B recognises every device, checks 20+ buyback and resale sources in 13 countries and works out your offer with your margin.',
  },
  back: {
    title: 'Nexus Back · In-store device trade-in',
    description: 'IMEI lookup, grades A to D, three pricing strategies with margin and an AI forecast, PDF quote, payment and shipment tracking: trade-ins priced right, at the counter.',
  },
  technology: {
    title: 'Technology · Nexus Intelligence',
    description: 'Price agents on 20+ sources in 13 countries, a recognition AI we train and host ourselves, and a reference of 800+ verified models.',
  },
  faq: {
    title: 'FAQ · Nexus Intelligence',
    description: 'Supported devices, file formats, where prices come from, your data: answers about Nexus B2B and Nexus Back.',
  },
  contact: {
    title: 'Contact · Nexus Intelligence',
    description: 'Book a demo of Nexus B2B or Nexus Back, on your own files and devices.',
  },
  legal: {
    title: 'Legal notice · Nexus Intelligence',
    description: 'Legal notice, privacy and credits for nexusintelligence.fr.',
  },
  notFound: { title: 'Page not found · Nexus Intelligence', description: 'This page doesn’t exist.' },
};

export const meta = { fr, en };
