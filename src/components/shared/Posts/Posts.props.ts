import type IPost from '@/types/Post.type';

export default interface PostsProps {
  title?: string | null;
  subtitle?: string;
  posts?: (IPost | null)[];
  viewAllURL?: string;
  className?: string;
  loading?: boolean;
}
