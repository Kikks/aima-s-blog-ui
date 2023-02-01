import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import trimString from '@/utils/trimString';

import Button from '../Button';
import Text from '../Text';
import type PostProps from './Post.props';

const Post: FC<PostProps> = ({
  slug,
  title,
  category,
  preview,
  coverImage,
  createdAt,
}) => {
  return (
    <article className="group flex w-full flex-col items-start gap-5  rounded-md bg-white p-5 shadow-md">
      <figure className="relative aspect-video w-full overflow-hidden">
        <Image
          src={coverImage || '/assets/images/logo.png'}
          alt={title || ''}
          layout="fill"
          className="h-full w-full object-cover duration-500 group-hover:rotate-[3deg] group-hover:scale-110"
        />
      </figure>

      <div className="flex w-full flex-col items-start">
        <Link href={`/categories/${category?.id}`} passHref>
          <a>
            <Text className="cursor-pointer font-ephesis capitalize hover:underline">
              {category?.name}
            </Text>
          </a>
        </Link>
        <div className="flex w-full items-center justify-between gap-3">
          <Link href={`/posts/${slug}`} passHref>
            <a>
              <Text
                variant="subheading"
                className="cursor-pointer font-medium hover:underline"
              >
                {trimString(title || '', 20)}
              </Text>
            </a>
          </Link>

          <Text variant="caption" className="text-primary-main">
            {moment(Number(createdAt || '')).format('MMMM DD, YYYY')}
          </Text>
        </div>
      </div>

      <div className="w-full flex-1">
        <Text>{trimString(preview || '', 200)}</Text>
      </div>

      <Link href={`/posts/${slug}`} passHref>
        <a className="w-full">
          <Button variant="outline" className="w-full">
            Read more
          </Button>
        </a>
      </Link>
    </article>
  );
};

export default Post;
