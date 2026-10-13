/** The two product films: video, cover, labels and the voice-over transcript. */
const B2B_EN_TRANSCRIPT = 'It’s Monday morning, and a client just sent over their fleet list. Seven hundred and forty-two devices. They’d like your best offer… by Friday. So someone has to make sense of it. Line by line. Then hunt down prices on a dozen different websites. And just like that, the week is gone. Too slow? Too high? Too low? There’s a better way. Meet Nexus. From any spreadsheet to a priced offer, in minutes. Just drop in the client’s file. Excel, CSV, even a list pasted from an email. Nexus works out the columns for you. Then it reads every line the way an expert would. Shorthand, typos, serial numbers, all of it. And if something’s unclear, the AI suggests a match. You just confirm it. Next, Nexus checks the live market. More than twenty buyback and resale sources, across thirteen countries, for the exact same model, specs and grade. So every line gets a real market price. Then it builds your offer. Your margin is worked out after every cost: refurbishment, VAT, shipping… all of it. If your price list drifts from the market, Nexus gives you a heads-up. One click, and the offer’s ready to go. And from offer to payment, you always know where every deal stands. Nine fourteen. Offer sent. And they asked for Friday. Your competitors? Still on row twelve. Minutes, not days. Your margin on every line. And the whole market, working for you. Nexus. Price any fleet, in minutes. Let’s price your next lot together.';

const B2B_FR_TRANSCRIPT = 'Lundi matin. Un client vous envoie la liste de son parc. Sept cent quarante-deux appareils. Et il veut votre meilleure offre. Pour vendredi. Alors d’abord, il faut tout déchiffrer. Ligne par ligne. Puis comparer les prix sur une dizaine de sites. Et les jours passent. Trop lent ? Trop cher ? Pas assez ? Il y a mieux. Voici Nexus. Du tableur à l’offre chiffrée, en quelques minutes. Déposez le fichier du client. Excel, CSV, ou des lignes copiées d’un e-mail. Nexus reconnaît les colonnes tout seul. Puis il lit chaque ligne comme un expert. Abréviations, fautes, numéros de série… Et quand une ligne est floue, l’IA propose un modèle. Vous n’avez plus qu’à valider. Ensuite, Nexus interroge le marché en direct. Plus de vingt sources de rachat et de revente, dans treize pays, pour le même modèle, la même configuration, le même grade. Chaque ligne a son vrai prix de marché. Puis il construit votre offre. Votre marge est calculée après tous les coûts : reconditionnement, TVA, transport… tout est compté. Si votre grille s’éloigne du marché, Nexus vous prévient. Un clic, et l’offre est prête. Et de l’offre au paiement, chaque affaire est suivie. Neuf heures quatorze. Offre envoyée. Il la voulait pour vendredi. Vos concurrents en sont à la ligne douze. Des minutes, pas des jours. Votre marge sur chaque ligne. Et tout le marché qui travaille pour vous. Nexus. Chiffrez n’importe quel parc, en quelques minutes. Chiffrons ensemble votre prochain lot.';

const BACK_TRANSCRIPT = 'Every day, customers bring their old phones to your stores. Each one needs an accurate price. Fast, consistent and profitable. Every time. Today, that often means last month’s price list. A few websites to compare. And a customer left waiting. Too low. Too high. Too slow. There’s a better way. Introducing Nexus Back, by Nexus Intelligence. Every trade-in, priced right. Scan the IMEI, and Nexus Back identifies the exact model. For laptops, it reads the serial number. Select the storage, the colour and the condition. Four clear grades mean every store prices the same way. Nexus Back then checks the live market: what resellers pay, and what they resell for. Choose a safe, market or aggressive strategy, with your margin shown before you make the offer. An AI forecast shows how its value will evolve. Generate a professional PDF quote in one click. Once the customer accepts, pay by bank transfer, cash or store credit. Every trade-in is recorded. Devices are then grouped into shipments and tracked all the way to refurbishment. Eleven forty-three. Trade-in complete. Three minutes, from counter to payment. Live prices. Consistent grades. And your margin, before every offer. Nexus Back. Every trade-in, priced right. Book a demo for your stores.';

export type FilmId = 'b2b' | 'back';

const fr = {
  b2b: {
    src: '/nexusintelligence/video/nexus-b2b-fr.mp4',
    poster: '/nexusintelligence/img/poster-b2b-fr.jpg',
    label: 'Film de présentation Nexus B2B',
    watch: 'Voir le film Nexus B2B',
    badge: '',
    duration: '1:44',
    note: 'Client, lot et prix du film sont fictifs. Voix de synthèse.',
    transcriptLabel: 'Transcription du film',
    transcript: B2B_FR_TRANSCRIPT,
  },
  back: {
    src: '/nexusintelligence/video/nexus-back-en.mp4',
    poster: '/nexusintelligence/img/poster-back-en.jpg',
    label: 'Film de présentation Nexus Back (en anglais)',
    watch: 'Voir le film Nexus Back',
    badge: 'EN',
    duration: '1:44',
    note: 'Film en anglais. Client, appareil et prix sont fictifs. Voix de synthèse.',
    transcriptLabel: 'Transcription du film (en anglais)',
    transcript: BACK_TRANSCRIPT,
  },
};

const en: typeof fr = {
  b2b: {
    src: '/nexusintelligence/video/nexus-b2b-en.mp4',
    poster: '/nexusintelligence/img/poster-b2b-en.jpg',
    label: 'Nexus B2B product film',
    watch: 'Watch the Nexus B2B film',
    badge: '',
    duration: '1:44',
    note: 'The client, lot and prices in the film are fictional. Synthetic voice.',
    transcriptLabel: 'Film transcript',
    transcript: B2B_EN_TRANSCRIPT,
  },
  back: {
    src: '/nexusintelligence/video/nexus-back-en.mp4',
    poster: '/nexusintelligence/img/poster-back-en.jpg',
    label: 'Nexus Back product film',
    watch: 'Watch the Nexus Back film',
    badge: '',
    duration: '1:44',
    note: 'The customer, device and prices in the film are fictional. Synthetic voice.',
    transcriptLabel: 'Film transcript',
    transcript: BACK_TRANSCRIPT,
  },
};

export const films = { fr, en };
