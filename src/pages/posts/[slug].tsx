import { Icon } from '@iconify/react';
import request from 'graphql-request';
import moment from 'moment';
import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

import Text from '@/components/lib/Text';
import LikeAndComment from '@/components/pages/post/LikeAndComment';
import PostBody from '@/components/pages/post/PostBody';
import PrevAndNextPosts from '@/components/pages/post/PrevAndNextPosts';
import SharePost from '@/components/pages/post/SharePost';
import type { GetPostQuery } from '@/graphql/__generated__/graphql';
import { GET_POST } from '@/graphql/queries/post.queries';
import PageLayout from '@/layouts/PageLayout';
import Meta from '@/templates/Meta';
import { capitalizeFirstLetter } from '@/utils/capitalizeFirstLetter';
import { grahpQLApiUri } from '@/utils/constants';
import { isEmpty } from '@/utils/validators/helpers';

type SinglePostPageProps = {
  postResponse: GetPostQuery | null;
  fullUrl: string | null;
};

export const getServerSideProps: GetServerSideProps<
  SinglePostPageProps
> = async (context) => {
  try {
    const postResponse = await request(grahpQLApiUri, GET_POST, {
      slug: context?.params?.slug as string,
    });

    return {
      props: {
        postResponse,
        fullUrl: context?.req?.headers?.host || null,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/404',
      },
      props: {
        postResponse: null,
        fullUrl: null,
      },
    };
  }
};

const SinglePost: NextPage<SinglePostPageProps> = ({
  postResponse,
  fullUrl,
}) => {
  const router = useRouter();
  const [comments, setComments] = useState(0);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setComments(postResponse?.getPost?.comments || 0);
    setLikes(postResponse?.getPost?.likes || 0);
  }, [postResponse?.getPost?.likes, postResponse?.getPost?.comments]);

  const postId = postResponse?.getPost?.post?.id || '';
  const postTitle = postResponse?.getPost?.post?.title || '';
  const postPreview = postResponse?.getPost?.post?.preview || '';
  const postImage =
    postResponse?.getPost?.post?.coverImage || '/assets/images/logo.png';
  const publishedAt = postResponse?.getPost?.post?.publishedAt || '';
  const postAudio = postResponse?.getPost?.post?.audio || '';
  const postBody =
    postResponse?.getPost?.post?.body ||
    `
    {
      "time": 1589987527499,
      "blocks": [
        {
          "type": "paragraph",
          "data": {
            "text": "",
          }
        }
      ],
      "version": "2.17.0"
    }
  `;

  return (
    <PageLayout
      meta={
        <Meta
          title={`${capitalizeFirstLetter(postTitle)} | Aima's Writing`}
          description={postPreview}
          images={[
            {
              url: postImage,
              alt: postTitle,
            },
          ]}
          twitter={{
            cardType: 'summary_large_image',
            site: `${fullUrl}`,
          }}
        />
      }
    >
      <div className="grid w-full gap-10 lg:py-10">
        <section className="mx-auto w-full max-w-[900px] px-5">
          <button
            className="mb-5 flex items-center gap-1 text-primary-main lg:hidden"
            onClick={() => router.back()}
          >
            <Icon icon="mdi:arrow-left-thin" className="text-2xl" />
            <Text>Back</Text>
          </button>

          <h1 className="relative text-center font-catamaran text-4xl font-medium leading-7 md:font-semibold lg:text-5xl">
            {postTitle}
          </h1>
        </section>

        <section className="mx-auto grid w-full max-w-[900px] place-items-center">
          <figure className="relative aspect-video w-full">
            <Image
              src={postImage}
              alt={postTitle}
              layout="fill"
              className="h-full w-full object-cover duration-500 group-hover:scale-110"
              quality={100}
            />
          </figure>
        </section>

        <section className="mx-auto w-full max-w-[900px] px-5">
          <Text variant="caption" className="text-center text-primary-main">
            {moment(Number(publishedAt || '')).format('MMMM DD, YYYY')}
          </Text>
        </section>

        {!isEmpty(postAudio) && (
          <section className="mx-auto grid h-20 w-full max-w-[900px] place-items-center px-5">
            <ReactAudioPlayer
              src={postAudio}
              controls
              className="w-full max-w-[500px]"
            />
          </section>
        )}

        <PostBody body={postBody} />
        <SharePost />
        <PrevAndNextPosts postId={postId} />
        <LikeAndComment
          postId={postId}
          comments={comments}
          setComments={setComments}
          likes={likes}
          setLikes={setLikes}
        />
      </div>
    </PageLayout>
  );
};

export default SinglePost;
