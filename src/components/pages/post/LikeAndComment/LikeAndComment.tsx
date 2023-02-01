import { useMutation, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import type { FC } from 'react';
import { useState } from 'react';

import Loader from '@/components/lib/Loader';
import Text from '@/components/lib/Text';
import type { Like } from '@/graphql/__generated__/graphql';
import { LIKE_POST } from '@/graphql/mutations/likeAndComment.mutations';
import { GET_USER_LIKE_FOR_POST } from '@/graphql/queries/likeAndComment.queries';
import { useToggle } from '@/hooks';

import CommentsModal from './CommentsModal';
import type LikeAndCommentProps from './LikeAndComment.props';

const LikeAndComment: FC<LikeAndCommentProps> = ({
  postId,
  likes,
  comments: commentsCount,
  setComments,
  setLikes,
}) => {
  const [like, setLike] = useState<Like | null>(null);

  const [open, toggleOpen] = useToggle(false);

  const { refetch: refetchLikes } = useQuery(GET_USER_LIKE_FOR_POST, {
    variables: { postId },
    onCompleted(response) {
      setLike(response?.getUserLikeForPost || null);
    },
  });

  const [mutate, { loading: likeIsLoading }] = useMutation(LIKE_POST, {
    variables: { postId },
    onCompleted(response) {
      refetchLikes();
      if (response?.likePost === 'Post liked successfully') {
        setLikes(likes + 1);
      } else {
        setLikes(likes - 1);
      }
    },
  });

  const handleLikePost = () => {
    mutate({
      variables: { postId },
    });
  };

  const handleShowCommentModal = () => {
    toggleOpen();
  };

  const handleIncreaseCommentCount = () => {
    setComments(commentsCount + 1);
  };

  return (
    <>
      <section className="mx-auto mt-10 grid w-full max-w-[900px] place-items-center px-5">
        <div className="flex items-center divide-x rounded-full py-5 shadow-[0_0_1rem_rgba(0,0,0,0.1)]">
          <button
            className="group flex flex-1 items-center justify-center gap-2 px-7"
            onClick={handleLikePost}
            disabled={likeIsLoading}
          >
            {likeIsLoading ? (
              <Loader small />
            ) : (
              <>
                <Icon
                  icon={like ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'}
                  className={`text-3xl duration-200 group-hover:text-primary-border2 ${
                    like ? 'text-primary-main' : ''
                  }`}
                />
                <Text className="duration-200 group-hover:text-primary-border2">
                  {likes}
                </Text>
              </>
            )}
          </button>

          <button
            className="group flex flex-1 items-center justify-center  gap-2 px-7"
            onClick={handleShowCommentModal}
          >
            <Icon
              icon="iconoir:chat-bubble-empty"
              className="text-3xl duration-200 group-hover:text-primary-border2"
            />
            <Text className="duration-200 group-hover:text-primary-border2">
              {commentsCount}
            </Text>
          </button>
        </div>
      </section>

      <CommentsModal
        open={open}
        toggleOpen={toggleOpen}
        postId={postId}
        onCreateCommentSuccess={handleIncreaseCommentCount}
      />
    </>
  );
};

export default LikeAndComment;
