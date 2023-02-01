import type IPost from '@/types/Post.type';
import type ITheme from '@/types/Theme.type';

export default interface FeaturedPostsProps {
  featuredPosts:
    | ({
        post: IPost | null;
        theme: ITheme | null;
      } | null)[]
    | null;
}
