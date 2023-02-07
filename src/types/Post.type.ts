import type ICategory from './Category.type';

type IPost = {
  id?: string | null;
  audio?: string | null;
  title?: string | null;
  slug?: string | null;
  coverImage?: string | null;
  preview?: string | null;
  body?: string | null;
  category?: ICategory | null;
  isPublished?: boolean | null;
  publishedAt?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export default IPost;
