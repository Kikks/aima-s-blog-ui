import type { FC } from 'react';
import React from 'react';

import FeaturedPost from '@/components/lib/FeaturedPost';

import type FeaturedPostsProps from './FeaturedPosts.props';

const FeaturedPosts: FC<FeaturedPostsProps> = ({ featuredPosts }) => {
  return (featuredPosts || []).length === 0 ? (
    <></>
  ) : (
    <section className="w-full">
      <div className="container grid gap-5 md:gap-10 lg:grid-cols-2">
        {(featuredPosts || []).map((featuredPost, index) => (
          <FeaturedPost
            key={index}
            post={featuredPost?.post || null}
            theme={featuredPost?.theme || null}
            variant={index === 0 ? 'long' : 'short'}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
