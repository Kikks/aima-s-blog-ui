import React from 'react';
import Skeleton from 'react-loading-skeleton';

const PostLoader = () => {
  return (
    <article className="group flex w-full grid-cols-1 flex-col items-start gap-5  rounded-md p-5 shadow-md">
      <figure className="relative aspect-video w-full overflow-hidden">
        <Skeleton className="h-full w-full" />
      </figure>

      <div className="flex w-full flex-col items-start">
        <Skeleton className="h-3 w-12" />

        <div className="flex w-full items-center justify-between gap-3">
          <Skeleton className="h-5 w-40" />

          <Skeleton className="h-5 w-24" />
        </div>
      </div>

      <div className="w-full flex-1">
        <Skeleton count={3} />
      </div>

      <button className="w-full">
        <Skeleton className="h-12 w-full" />
      </button>
    </article>
  );
};

export default PostLoader;
