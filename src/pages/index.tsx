import { useQuery } from '@apollo/client';
import request from 'graphql-request';
import type { GetServerSideProps, NextPage } from 'next';
import React, { useState } from 'react';

import FeaturedCategoryPosts from '@/components/pages/landingPage/FeaturedCategoryPosts';
import FeaturedPosts from '@/components/pages/landingPage/FeaturedPosts';
import Posts from '@/components/shared/Posts';
import type {
  FeaturedPostsQuery,
  GetFeaturedCategoriesQuery,
} from '@/graphql/__generated__/graphql';
import { GET_FEATURED_CATEGORIES } from '@/graphql/queries/category.queries';
import { GET_FEATURED_POSTS, GET_POSTS } from '@/graphql/queries/post.queries';
import PageLayout from '@/layouts/PageLayout';
import Meta from '@/templates/Meta';
import type IPost from '@/types/Post.type';
import { grahpQLApiUri } from '@/utils/constants';

type HomePageProps = {
  featuredPostsResponse: FeaturedPostsQuery | null;
  featuredCategoriesResponse: GetFeaturedCategoriesQuery | null;
};

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  try {
    const featuredPostsResponse = await request(
      grahpQLApiUri,
      GET_FEATURED_POSTS
    );
    const featuredCategoriesResponse = await request(
      grahpQLApiUri,
      GET_FEATURED_CATEGORIES
    );

    return {
      props: {
        featuredPostsResponse,
        featuredCategoriesResponse,
      },
    };
  } catch (error) {
    return {
      props: {
        featuredPostsResponse: null,
        featuredCategoriesResponse: null,
      },
    };
  }
};

const Index: NextPage<HomePageProps> = ({
  featuredCategoriesResponse,
  featuredPostsResponse,
}) => {
  const [posts, setPosts] = useState<(IPost | null)[]>([]);

  const { loading } = useQuery(GET_POSTS, {
    variables: { limit: 3, page: 1 },
    onCompleted(response) {
      setPosts(response?.getPosts?.data || []);
    },
  });

  return (
    <PageLayout
      meta={<Meta title="Aima's Corner | My Lifestyle Blog" description="" />}
    >
      <FeaturedPosts
        featuredPosts={featuredPostsResponse?.getFeaturedPosts || []}
      />

      <Posts
        title="Latest Articles"
        posts={posts}
        loading={loading}
        viewAllURL="/posts"
      />

      {(featuredCategoriesResponse?.getFeaturedCategories || []).map(
        (category, index) => (
          <FeaturedCategoryPosts {...category} key={index} />
        )
      )}
    </PageLayout>
  );
};

export default Index;
