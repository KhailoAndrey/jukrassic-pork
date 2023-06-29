import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'fsdmjee1',
  dataset: 'production',
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: '2023-03-07',
  token:
    'skM2CNS5GemgaT3V9TmIty5q1u5tfoMsbI0psamrsi8bmxxyPOYMpBEseLwAl0r52j3g4upO9ceBBBIarnPXUFRqrJeWmOZXsICminPm3aYj7rhDwdpJ68SOnBhCKQB9aBzeMTY6r02y8aezxWOQevakjpooqnWyGoojsR5LUBG5UHLEO7b9',
});

const builder = imageUrlBuilder(client);

export const urlFor = source => builder.image(source);
