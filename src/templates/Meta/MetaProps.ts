import type { OpenGraphMedia, Twitter } from 'next-seo/lib/types';

export default interface MetaProps {
  title: string;
  description: string;
  canonical?: string;
  images?: OpenGraphMedia[];
  twitter?: Twitter;
}
