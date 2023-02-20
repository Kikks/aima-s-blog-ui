import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React from 'react';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';

import type CategoryProps from './Category.props';

const Category: FC<CategoryProps> = ({ id, name, image }) => {
  return (
    <div className="relative grid aspect-square w-full place-items-center overflow-hidden rounded-md p-10">
      <figure className="absolute top-0 left-0 z-0 h-full w-full overflow-hidden">
        <Image
          src={image || '/assets/images/logo.png'}
          alt=""
          layout="fill"
          objectFit={image ? 'cover' : 'contain'}
          className={`h-full w-full duration-500 group-hover:rotate-[3deg] group-hover:scale-110 ${
            image ? 'object-cover' : 'object-contain'
          }`}
          quality={100}
        />
      </figure>

      <div
        className={`absolute top-0 left-0 z-0 h-full w-full overflow-hidden ${
          image ? 'bg-primary-main/50' : 'bg-primary-main/90'
        }`}
      ></div>

      <div className="z-[5] grid w-full justify-items-center gap-5 text-center">
        <Heading
          variant="h3"
          className="text-3xl font-bold uppercase text-white"
        >
          {name}
        </Heading>
        <Link href={`/categories/${id}`}>
          <a>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-main"
            >
              View
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Category;
