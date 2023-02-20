import { useQuery } from '@apollo/client';
import request from 'graphql-request';
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Pagination from '@/components/lib/Pagination';
import Posts from '@/components/shared/Posts';
import type {
  GetCategoryQuery,
  Meta as RequestMeta,
} from '@/graphql/__generated__/graphql';
import { GET_CATEGORY } from '@/graphql/queries/category.queries';
import { GET_POSTS } from '@/graphql/queries/post.queries';
import PageLayout from '@/layouts/PageLayout';
import Meta from '@/templates/Meta';
import type IPost from '@/types/Post.type';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { defaultMeta, grahpQLApiUri } from '@/utils/constants';

type CategoryPageProps = {
  categoryResponse: GetCategoryQuery | null;
  fullUrl: string | null;
};

export const getServerSideProps: GetServerSideProps<CategoryPageProps> = async (
  context
) => {
  try {
    const categoryResponse = await request(grahpQLApiUri, GET_CATEGORY, {
      categoryId: context?.params?.id as string,
    });

    return {
      props: {
        categoryResponse,
        fullUrl: context?.req?.headers?.host || null,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
      },
      props: {
        categoryResponse: null,
        fullUrl: null,
      },
    };
  }
};

const CategoryPosts: NextPage<CategoryPageProps> = ({
  categoryResponse,
  fullUrl,
}) => {
  const router = useRouter();
  const categoryName = categoryResponse?.getCategory?.name || '';
  const categoryImage =
    categoryResponse?.getCategory?.image || '/assets/images/logo.png';

  const [posts, setPosts] = useState<(IPost | null)[]>([]);
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<RequestMeta>(defaultMeta);

  const { loading } = useQuery(GET_POSTS, {
    variables: {
      limit: 20,
      page,
      category: (router.query?.id || '') as string,
    },
    onCompleted(response) {
      setPosts(response?.getPosts?.data || []);
      setMeta(response?.getPosts?.meta || defaultMeta);
    },
  });

  return (
    <PageLayout
      meta={
        <Meta
          title={`${capitalizeFirstLetter(categoryName)} | Aima's Writing`}
          description={`All posts belonging to the ${categoryName} category`}
          images={[
            {
              url: categoryImage,
              alt: categoryName,
            },
          ]}
          twitter={{
            cardType: 'summary_large_image',
            site: `${fullUrl}`,
          }}
        />
      }
    >
      <Posts
        loading={loading}
        posts={posts}
        title={categoryName}
        subtitle={`Check out latest articles in the ${categoryName} category`}
        className="mt-10"
      />

      <div className="container w-full">
        <Pagination count={meta.pages || 0} page={page} setPage={setPage} />
      </div>
    </PageLayout>
  );
};

export default CategoryPosts;
