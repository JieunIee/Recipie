import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '2ce8934x', 
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-06-05',
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export default client;