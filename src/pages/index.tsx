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
import { grahpQLApiUri, ssrCacheControl } from '@/utils/constants';

type HomePageProps = {
  featuredPostsResponse: FeaturedPostsQuery | null;
  featuredCategoriesResponse: GetFeaturedCategoriesQuery | null;
  latestPosts: (IPost | null)[] | null;
  // Latest posts per featured category id.
  categoryPosts: Record<string, (IPost | null)[]>;
};

const getLatestPosts = async (category?: string) => {
  const response = await request(grahpQLApiUri, GET_POSTS, {
    limit: 3,
    page: 1,
    ...(category ? { category } : {}),
  });

  return response?.getPosts?.data || [];
};

export const getServerSideProps: GetServerSideProps<HomePageProps> = async ({
  res,
}) => {
  try {
    const [featuredPostsResponse, featuredCategoriesResponse, latestPosts] =
      await Promise.all([
        request(grahpQLApiUri, GET_FEATURED_POSTS),
        request(grahpQLApiUri, GET_FEATURED_CATEGORIES),
        getLatestPosts(),
      ]);

    // A category whose posts fail to load here is fetched in the browser.
    const categoryPosts: HomePageProps['categoryPosts'] = {};
    await Promise.all(
      (featuredCategoriesResponse?.getFeaturedCategories || []).map(
        async (category) => {
          if (!category?.id) return;

          try {
            categoryPosts[category.id] = await getLatestPosts(category.id);
          } catch (error) {
            // Falls back to the client-side query.
          }
        }
      )
    );

    if (featuredPostsResponse?.getFeaturedPosts) {
      featuredPostsResponse.getFeaturedPosts =
        featuredPostsResponse.getFeaturedPosts.sort(
          (a, b) => (a?.index || 0) - (b?.index || 0)
        ) || [];
    }

    res.setHeader('Cache-Control', ssrCacheControl);

    return {
      props: {
        featuredPostsResponse,
        featuredCategoriesResponse,
        latestPosts,
        categoryPosts,
      },
    };
  } catch (error) {
    return {
      props: {
        featuredPostsResponse: null,
        featuredCategoriesResponse: null,
        latestPosts: null,
        categoryPosts: {},
      },
    };
  }
};

const Index: NextPage<HomePageProps> = ({
  featuredCategoriesResponse,
  featuredPostsResponse,
  latestPosts,
  categoryPosts,
}) => {
  const [posts, setPosts] = useState<(IPost | null)[]>(latestPosts || []);

  const { loading } = useQuery(GET_POSTS, {
    variables: { limit: 3, page: 1 },
    skip: !!latestPosts,
    onCompleted(response) {
      setPosts(response?.getPosts?.data || []);
    },
  });

  return (
    <PageLayout
      meta={<Meta title="Aima's Writing | My Lifestyle Blog" description="" />}
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
          <FeaturedCategoryPosts
            {...category}
            initialPosts={categoryPosts[category?.id || '']}
            key={index}
          />
        )
      )}
    </PageLayout>
  );
};

export default Index;
