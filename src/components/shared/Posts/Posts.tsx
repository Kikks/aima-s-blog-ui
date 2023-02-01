import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import Heading from '@/components/lib/Heading';
import Post, { PostLoader } from '@/components/lib/Post';
import Text from '@/components/lib/Text';

import type PostsProps from './Posts.props';

const Posts: FC<PostsProps> = ({
  title,
  subtitle,
  posts,
  viewAllURL,
  className,
  loading,
}) => {
  return (
    <section className={`w-full ${className || ''}`}>
      <div className="container grid justify-items-center gap-5 md:gap-7">
        <motion.div
          whileInView={{ opacity: 1, translateX: 0 }}
          initial={{ opacity: 0, translateX: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.5, once: true }}
        >
          <Heading className="uppercase" decorated>
            {title || ''}
          </Heading>
        </motion.div>

        {subtitle && (
          <motion.div
            whileInView={{ opacity: 1, translateX: 0 }}
            initial={{ opacity: 0, translateX: -50 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5, once: true }}
          >
            <Text className="max-w-[40ch] text-center">{subtitle}</Text>
          </motion.div>
        )}

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {loading ? (
            [1, 2, 3].map((item) => <PostLoader key={item} />)
          ) : (
            <>
              {(posts || [])?.length === 0 ? (
                <div className="col-span-1 grid w-full place-items-center py-20 md:col-span-2 lg:col-span-3">
                  <Text>There are no posts to display.</Text>
                </div>
              ) : (
                (posts || []).map((post, index) => (
                  <motion.div
                    className="col-span-1"
                    key={index}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    initial={{ opacity: 0, translateY: 50 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ amount: 0.5, once: true }}
                  >
                    <Post {...post} />
                  </motion.div>
                ))
              )}
            </>
          )}
        </div>

        {(posts || []).length !== 0 && viewAllURL && (
          <Link passHref href={viewAllURL}>
            <a className="mt-5 flex gap-3 justify-self-end text-primary-main">
              View all{' '}
              <Icon icon="ic:outline-arrow-right-alt" className="text-2xl" />
            </a>
          </Link>
        )}
      </div>
    </section>
  );
};

export default Posts;
