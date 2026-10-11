export const navLinks = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Categories',
    url: '/categories',
  },
];

export const grahpQLApiUri = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`;

// Lets Vercel's edge serve server-rendered pages from cache for a minute and
// refresh them in the background, instead of hitting the API on every visit.
export const ssrCacheControl =
  'public, s-maxage=60, stale-while-revalidate=600';

export const defaultMeta = { currentPage: 1, pages: 1, total: 1 };

export const MAX_LENGTH_OF_COMMENT_CHARACTERS = 200;
