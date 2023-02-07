import { useMutation } from '@apollo/client';
import { Icon } from '@iconify/react';
import moment from 'moment';
import type { FC } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';

import Avatar from '@/components/lib/Avatar';
import Loader from '@/components/lib/Loader';
import Text from '@/components/lib/Text';
import { UserContext } from '@/contexts/user';
import { DELETE_COMMENT } from '@/graphql/mutations/likeAndComment.mutations';
import { useToggle } from '@/hooks';
import { MAX_LENGTH_OF_COMMENT_CHARACTERS } from '@/utils/constants';
import trimString from '@/utils/trimString';

import type CommentProps from './Comment.props';

const Comment: FC<CommentProps> = ({ id, body, user, createdAt, refetch }) => {
  const { user: loggedInUser } = useContext(UserContext);
  const [viewMore, toggleViewMore] = useToggle(false);

  const [deleteComment, { loading }] = useMutation(DELETE_COMMENT, {
    variables: { commentId: id },
    onCompleted() {
      if (refetch) refetch();
    },
    onError(error) {
      toast.error(error?.message);
    },
  });

  const handleDelete = () => {
    deleteComment();
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

      <div className="mt-auto flex w-full justify-between gap-5">
        <div className="flex items-center gap-3">
          <Avatar name={`${user?.name}`} image={user?.image || undefined} />

          <div className="">
            <Text variant="caption">{trimString(user?.name || '', 50)}</Text>
            <Text className="text-xxs">
              {moment(Number(createdAt || '')).format('MMMM DD, YYYY')}
            </Text>
          </div>
        </div>

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
