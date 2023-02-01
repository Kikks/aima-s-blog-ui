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

export const defaultMeta = { currentPage: 1, pages: 1, total: 1 };

export const MAX_LENGTH_OF_COMMENT_CHARACTERS = 200;
