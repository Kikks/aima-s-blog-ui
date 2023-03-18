import { useMutation, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import moment from 'moment';
import type { FC } from 'react';
import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

import Avatar from '@/components/lib/Avatar';
import Loader from '@/components/lib/Loader';
import Text from '@/components/lib/Text';
import { LikesAndCommentContext } from '@/contexts/likesAndComments';
import { UserContext } from '@/contexts/user';
import type { Like } from '@/graphql/__generated__/graphql';
import {
  DELETE_COMMENT,
  LIKE_COMMENT,
} from '@/graphql/mutations/likeAndComment.mutations';
import {
  GET_COMMENT_LIKES_AND_COMMENTS_COUNT,
  GET_USER_LIKE_FOR_COMMENT,
} from '@/graphql/queries/likeAndComment.queries';
import { useToggle } from '@/hooks';
import { MAX_LENGTH_OF_COMMENT_CHARACTERS } from '@/utils/constants';
import trimString from '@/utils/trimString';

import type CommentProps from './Comment.props';

const Comment: FC<CommentProps> = ({
  id,
  body,
  user,
  createdAt,
  refetch,
  nested,
  showCommentDetails,
}) => {
  const { user: loggedInUser } = useContext(UserContext);
  const [viewMore, toggleViewMore] = useToggle(false);
  const [like, setLike] = useState<Like | null>(null);
  const [likes, setLikes] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const { getCommentData, data, setData } = useContext(LikesAndCommentContext);

  useEffect(() => {
    const { comments: storedCommentCount, likes: storedLikesCount } =
      getCommentData(id);
    setCommentsCount(storedCommentCount);
    setLikes(storedLikesCount);
  }, [data, id]);

  const [deleteComment, { loading }] = useMutation(DELETE_COMMENT, {
    variables: { commentId: id },
    onCompleted() {
      if (refetch) refetch();
    },
    onError(error) {
      toast.error(error?.message);
    },
  });

  const { refetch: refetchLikes } = useQuery(GET_USER_LIKE_FOR_COMMENT, {
    variables: { commentId: id },
    skip: nested,
    onCompleted(response) {
      setLike(response?.getUserLikeForComment || null);
    },
  });

  useQuery(GET_COMMENT_LIKES_AND_COMMENTS_COUNT, {
    variables: { commentId: id },
    skip: nested,
    onCompleted(response) {
      setData(id, {
        likes: response?.getCommentLikesAndCommentsCount?.likes || 0,
        comments: response?.getCommentLikesAndCommentsCount?.comments || 0,
      });
    },
  });

  const [likeComment, { loading: likeIsLoading }] = useMutation(LIKE_COMMENT, {
    variables: { commentId: id },
    onCompleted(response) {
      refetchLikes();
      if (response?.likeComment === 'Comment liked successfully') {
        setLikes((prevState) => {
          setData(id, {
            likes: prevState + 1,
            comments: commentsCount,
          });

          return prevState + 1;
        });
      } else {
        setLikes((prevState) => {
          setData(id, {
            likes: prevState - 1,
            comments: commentsCount,
          });

          return prevState - 1;
        });
      }
    },
  });

  const handleDelete = () => {
    deleteComment();
  };

  const handleLikeComment = () => {
    likeComment();
  };

  const handleShowCommentTab = () => {
    if (showCommentDetails) showCommentDetails();
  };

  return (
    <div className="flex w-full flex-col gap-5 rounded-md bg-white p-5 shadow-[0_0_1rem_rgba(0,0,0,0.1)]">
      <Text>
        {viewMore
          ? body
          : trimString(body || '', MAX_LENGTH_OF_COMMENT_CHARACTERS)}
      </Text>

      {(body || '').length > MAX_LENGTH_OF_COMMENT_CHARACTERS && (
        <button className="self-end" onClick={toggleViewMore}>
          <Text className="text-primary-main" variant="caption">
            {viewMore ? 'Show Less' : 'Read more'}
          </Text>
        </button>
      )}

      <div className="mt-auto flex w-full gap-5">
        <div className="mr-auto flex items-center gap-3">
          <Avatar name={`${user?.name}`} image={user?.image || undefined} />

          <div className="">
            <Text variant="caption">{trimString(user?.name || '', 50)}</Text>
            <Text className="text-xxs">
              {moment(Number(createdAt || '')).format('MMMM DD, YYYY')}
            </Text>
          </div>
        </div>

        {!nested && (
          <>
            <button
              className="group flex items-center justify-center gap-2"
              onClick={handleLikeComment}
              disabled={likeIsLoading}
            >
              {likeIsLoading ? (
                <Loader small />
              ) : (
                <>
                  <Icon
                    icon={like ? 'mdi:cards-heart' : 'mdi:cards-heart-outline'}
                    className={`text-2xl duration-200 group-hover:text-primary-border2 ${
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
              className="group flex items-center justify-center gap-2"
              onClick={handleShowCommentTab}
            >
              <Icon
                icon="iconoir:chat-bubble-empty"
                className="text-2xl duration-200 group-hover:text-primary-border2"
              />
              <Text className="duration-200 group-hover:text-primary-border2">
                {commentsCount}
              </Text>
            </button>
          </>
        )}

        {loggedInUser?.id === user?.id && (
          <button onClick={handleDelete}>
            {loading ? (
              <Loader small />
            ) : (
              <Icon
                icon="material-symbols:delete-outline"
                className="text-2xl text-primary-main"
              />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Comment;
