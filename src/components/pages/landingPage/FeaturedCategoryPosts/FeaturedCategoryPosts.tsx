import { useQuery } from '@apollo/client';
import type { FC } from 'react';
import { useState } from 'react';

import Posts from '@/components/shared/Posts';
import { GET_POSTS } from '@/graphql/queries/post.queries';
import type IPost from '@/types/Post.type';

import type FeaturedCategoryProps from './FeaturedCategoryPosts.props';

const FeaturedCategoryPosts: FC<FeaturedCategoryProps> = ({ id, name }) => {
  const [posts, setPosts] = useState<(IPost | null)[]>([]);

  const { loading } = useQuery(GET_POSTS, {
    variables: { limit: 3, page: 1, category: id },
    onCompleted(response) {
      setPosts(response?.getPosts?.data || []);
    },
  });

  return (
    <Posts
      title={name}
      posts={posts}
      viewAllURL={`/categories/${id}`}
      loading={loading}
    />
  );
};

export default FeaturedCategoryPosts;
