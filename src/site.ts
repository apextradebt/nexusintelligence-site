/** Site-wide constants. */
export const SITE = {
  name: 'Nexus Intelligence',
  url: 'https://nexusintelligence.fr',
  email: 'contact@nexusintelligence.fr',
  /**
   * Web3Forms access key (web3forms.com): the contact form posts to Web3Forms, which emails the message to `email`.
   * The key is meant to sit in the page; it can only send to that inbox. Empty: the form opens the visitor's mail app instead.
   */
  formKey: '1d41ea41-66d8-4262-8933-07d8e6a1eddb',
  /**
   * Umami Cloud website ID (cloud.umami.is, Settings → Websites): cookieless visit statistics, counted on the live domain only.
   * Empty: the pages carry no analytics script.
   */
  umamiId: '3c3ca49d-faf4-4ab5-bf15-0dbd6b3c72f9',
  ogImage: '/img/og-image.jpg',
  year: 2026,
};
