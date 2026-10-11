import type ICategory from '@/types/Category.type';
import type IPost from '@/types/Post.type';

export default interface FeaturedCategoryPostsProps extends ICategory {
  // Posts fetched on the server. When missing, they are fetched in the browser.
  initialPosts?: (IPost | null)[] | null;
}
