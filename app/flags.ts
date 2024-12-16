import { unstable_flag as flag } from '@vercel/flags/next';

export const pageFlags = {
  showAbout: flag({ name: 'show-about', decide: () => true }),
  showServices: flag({ name: 'show-services', decide: () => true }),
  showSolutions: flag({ name: 'show-solutions', decide: () => true }),
  showClients: flag({ name: 'show-clients', decide: () => true }),
  showPortfolio: flag({ name: 'show-portfolio', decide: () => true }),
};