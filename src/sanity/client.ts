import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'et096t05',
  dataset: 'production',
  useCdn: true, // true for fast edge-cached queries
  apiVersion: '2024-01-01',
});
