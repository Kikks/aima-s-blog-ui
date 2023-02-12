import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

import Pagination from '@/components/lib/Pagination';
import Posts from '@/components/shared/Posts';
import type { Meta as RequestMeta } from '@/graphql/__generated__/graphql';
import { GET_POSTS } from '@/graphql/queries/post.queries';
import PageLayout from '@/layouts/PageLayout';
import Meta from '@/templates/Meta';
import type IPost from '@/types/Post.type';
import { defaultMeta } from '@/utils/constants';

const Allposts = () => {
  const router = useRouter();
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
          title="All Posts | Aima's Corner"
          description="All posts on Aima's Corner"
        />
      }
    >
      <Posts
        loading={loading}
        posts={posts}
        title="All Articles"
        className="mt-10"
      />

      <div className="container w-full">
        <Pagination count={meta.pages || 0} page={page} setPage={setPage} />
      </div>
    </PageLayout>
  );
};

export default Allposts;
