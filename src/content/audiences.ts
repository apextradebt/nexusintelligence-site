import { Building2, MonitorSmartphone, Package, RefreshCw, Store, Wrench, type LucideIcon } from 'lucide-react';

/** Who the products are for. `product` decides which product page lists the card. */
type Audience = { icon: LucideIcon; product: 'b2b' | 'back'; title: string; text: string };

const fr: Audience[] = [
  { icon: RefreshCw, product: 'b2b', title: 'Reconditionneurs & ITAD', text: 'Chiffrez les parcs d’entreprise qu’on vous propose et protégez la marge de votre atelier.' },
  { icon: Package, product: 'b2b', title: 'Brokers & grossistes', text: 'Répondez le premier sur chaque lot, avec les prix de 13 marchés sous les yeux.' },
  { icon: Store, product: 'back', title: 'Boutiques & réseaux de magasins', text: 'Un prix de reprise juste et cohérent dans chaque magasin, en quelques minutes au comptoir.' },
  { icon: Building2, product: 'b2b', title: 'Loueurs & entreprises', text: 'Estimez la valeur de revente d’un parc en fin de contrat, avant de le renouveler.' },
  { icon: MonitorSmartphone, product: 'back', title: 'Enseignes d’électronique', text: 'Proposez la reprise dans tous vos points de vente, avec la même grille d’état et les mêmes prix partout.' },
  { icon: Wrench, product: 'back', title: 'Réparateurs', text: 'Rachetez les appareils que vos clients ne font plus réparer, au prix du marché et avec votre marge.' },
];

const en: Audience[] = [
  { icon: RefreshCw, product: 'b2b', title: 'Refurbishers & ITAD', text: 'Price the corporate fleets you’re offered and protect your workshop’s margin.' },
  { icon: Package, product: 'b2b', title: 'Brokers & wholesalers', text: 'Be first to reply on every lot, with prices from 13 markets in front of you.' },
  { icon: Store, product: 'back', title: 'Phone shops & store networks', text: 'A fair, consistent trade-in price in every store, in minutes at the counter.' },
  { icon: Building2, product: 'b2b', title: 'Leasing firms & companies', text: 'Estimate what a fleet is worth at the end of its lease, before you renew it.' },
  { icon: MonitorSmartphone, product: 'back', title: 'Electronics retailers', text: 'Offer trade-ins in every store, with the same condition grades and the same prices everywhere.' },
  { icon: Wrench, product: 'back', title: 'Repair shops', text: 'Buy back the devices your customers no longer want repaired, at market price and with your margin.' },
];

export const audiences = { fr, en };
