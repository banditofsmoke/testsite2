import { unstable_flag as flag } from '@vercel/flags/next';

export const pageFlags = {
  showPage1: flag({ name: 'show-page-1', decide: () => true }),
  showPage2: flag({ name: 'show-page-2', decide: () => true }),
  showPage3: flag({ name: 'show-page-3', decide: () => true }),
  showPage4: flag({ name: 'show-page-4', decide: () => true }),
  showPage5: flag({ name: 'show-page-5', decide: () => true }),
};

