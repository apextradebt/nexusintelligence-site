import { Languages, Layers, Video } from 'lucide-react';

/** Contact page and form. The form emails the message through Web3Forms; the site itself stores nothing. */
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
    note: 'Vos coordonnées servent uniquement à vous répondre. Ce site n’enregistre aucune donnée',
    noteLink: 'en savoir plus',
    sending: 'Envoi en cours…',
    sent: 'Merci, votre message nous est bien parvenu. Nous vous répondons à l’adresse indiquée.',
    failed: 'L’envoi n’a pas abouti. Réessayez dans un instant, ou ',
    failedLink: 'envoyez-le depuis votre messagerie',
    mailApp: 'Votre messagerie s’ouvre avec le message prêt à partir. Rien ne s’ouvre ? Écrivez-nous à ',
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
    note: 'Your details are used only to reply to you. This site stores no data',
    noteLink: 'details',
    sending: 'Sending…',
    sent: 'Thank you, your message has reached us. We’ll reply to the address you gave.',
    failed: 'Your message couldn’t be sent. Try again in a moment, or ',
    failedLink: 'send it from your email app',
    mailApp: 'Your email app is opening with the message ready to send. Nothing happened? Write to us at ',
    invalid: 'Please enter your name and a valid email address.',
    subject: 'Demo request',
    fields: { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone', solution: 'Solution' },
    separator: ': ',
  },
};

export const contact = { fr, en };
