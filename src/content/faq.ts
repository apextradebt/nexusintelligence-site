/** FAQ page. */
const fr = {
  hero: {
    eyebrow: 'Questions fréquentes',
    title: 'Vos questions, *nos réponses.*',
    lead: 'Une autre question ? Écrivez-nous, nous répondons volontiers.',
  },
  items: [
    { q: 'Quels appareils Nexus reconnaît-il ?', a: 'Les PC portables de Dell, HP, Lenovo, Fujitsu, Apple et Microsoft, et les smartphones de 12 marques, dont Apple, Samsung, Google, Xiaomi et OnePlus. L’historique des prix couvre aussi des tablettes et des montres.' },
    { q: 'Mes fichiers doivent-ils suivre un format précis ?', a: 'Non. Excel (.xlsx), CSV ou lignes collées depuis un e-mail, avec ou sans en-têtes. Les colonnes sont reconnues automatiquement en six langues, les lignes de titre ignorées et les tableaux croisés (modèles × grades) dépliés. Chaque colonne reste modifiable.' },
    { q: 'D’où viennent les prix ?', a: 'De plus de 20 sites publics de rachat et de revente dans 13 pays. Chaque prix indique sa source et son côté : ce que le site paie, ou ce qu’il vend. Quand la configuration exacte est introuvable, Nexus se rabat sur le même modèle dans une autre configuration et signale le prix comme indicatif.' },
    { q: 'Puis-je utiliser mes propres prix de revente ?', a: 'Oui. Importez votre grille (Excel, CSV ou texte libre) : elle sert de référence sur chaque devis, et Nexus vous alerte quand elle s’écarte du marché. Chaque prix reste modifiable à la main.' },
    { q: 'Que deviennent mes données ?', a: 'Vos fichiers servent à chiffrer vos devis. L’IA de reconnaissance tourne sur nos serveurs, sans fournisseur tiers. Les retours qui servent à l’améliorer ne contiennent ni numéro de série ni IMEI, et vous pouvez les désactiver dans les paramètres.' },
    { q: 'Comment démarrer ?', a: 'Écrivez-nous quelques mots sur votre activité. Si vous le souhaitez, joignez un fichier type : nous le chiffrons ensemble pendant la démo.' },
  ],
};

const en: typeof fr = {
  hero: {
    eyebrow: 'FAQ',
    title: 'Your questions, *answered.*',
    lead: 'Something else? Write to us, we’re happy to help.',
  },
  items: [
    { q: 'Which devices does Nexus recognise?', a: 'Laptops from Dell, HP, Lenovo, Fujitsu, Apple and Microsoft, and phones from 12 brands, including Apple, Samsung, Google, Xiaomi and OnePlus. Price history also covers tablets and watches.' },
    { q: 'Do my files need a set format?', a: 'No. Excel (.xlsx), CSV or rows pasted from an email, with or without headers. Columns are recognised automatically in six languages, title rows are skipped and pivot tables (models × grades) are expanded. You can still change any column.' },
    { q: 'Where do the prices come from?', a: 'From 20+ public buyback and resale sites in 13 countries. Every price shows its source and its side: what the site pays, or what it sells for. When the exact configuration can’t be found, Nexus falls back to the same model in another configuration and flags the price as indicative.' },
    { q: 'Can I use my own resale prices?', a: 'Yes. Import your price list (Excel, CSV or free text): it becomes the reference on every quote, and Nexus alerts you when it drifts from the market. Every price can still be changed by hand.' },
    { q: 'What happens to my data?', a: 'Your files are used to price your quotes. The recognition AI runs on our servers, with no third-party provider. The feedback used to improve it contains no serial numbers or IMEIs, and you can switch it off in Settings.' },
    { q: 'How do I get started?', a: 'Send us a few words about your business. If you like, attach a sample file: we’ll price it together during the demo.' },
  ],
};

export const faq = { fr, en };
