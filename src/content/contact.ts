import { Languages, Layers, Video } from 'lucide-react';

/** Contact page and form. The form opens the visitor's mail app: nothing is sent to a server. */
const fr = {
  eyebrow: 'Contact',
  title: 'Chiffrons ensemble *votre prochain lot.*',
  lead: 'Parlez-nous de votre activité : nous vous montrons Nexus sur vos propres appareils.',
  points: [
    { icon: Video, strong: 'Une démo en visio', text: ', sur un de vos fichiers' },
    { icon: Layers, strong: 'Nexus B2B, Nexus Back', text: ', ou les deux' },
    { icon: Languages, strong: 'En français ou en anglais', text: ', comme vous préférez' },
  ],
  form: {
    name: 'Nom',
    company: 'Société',
    email: 'E-mail professionnel',
    phone: 'Téléphone',
    optional: '(facultatif)',
    interest: 'Je m’intéresse à',
    both: 'Les deux',
    message: 'Message',
    placeholder: 'Votre activité, vos volumes, vos questions…',
    submit: 'Envoyer',
    note: 'Le bouton ouvre votre messagerie avec le message prêt à partir. Ce site n’enregistre aucune donnée',
    noteLink: 'en savoir plus',
    sending: 'Votre messagerie s’ouvre avec le message prêt à partir. Rien ne s’ouvre ? Écrivez-nous à ',
    invalid: 'Indiquez votre nom et une adresse e-mail valide.',
    subject: 'Demande de démo',
    fields: { name: 'Nom', company: 'Société', email: 'E-mail', phone: 'Téléphone', solution: 'Solution' },
    separator: ' : ',
  },
};

const en: typeof fr = {
  eyebrow: 'Contact',
  title: 'Let’s price *your next lot together.*',
  lead: 'Tell us about your business and we’ll show you Nexus on your own devices.',
  points: [
    { icon: Video, strong: 'A video demo', text: ', on one of your own files' },
    { icon: Layers, strong: 'Nexus B2B, Nexus Back', text: ', or both' },
    { icon: Languages, strong: 'In English or French', text: ', as you prefer' },
  ],
  form: {
    name: 'Name',
    company: 'Company',
    email: 'Work email',
    phone: 'Phone',
    optional: '(optional)',
    interest: 'I’m interested in',
    both: 'Both',
    message: 'Message',
    placeholder: 'Your business, your volumes, your questions…',
    submit: 'Send',
    note: 'The button opens your email app with the message ready to send. This site stores no data',
    noteLink: 'details',
    sending: 'Your email app is opening with the message ready to send. Nothing happened? Write to us at ',
    invalid: 'Please enter your name and a valid email address.',
    subject: 'Demo request',
    fields: { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', solution: 'Solution' },
    separator: ': ',
  },
};

export const contact = { fr, en };
