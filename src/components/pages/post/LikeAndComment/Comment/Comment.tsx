import moment from 'moment';
import type { FC } from 'react';

import Avatar from '@/components/lib/Avatar';
import Text from '@/components/lib/Text';
import { useToggle } from '@/hooks';
import { MAX_LENGTH_OF_COMMENT_CHARACTERS } from '@/utils/constants';
import trimString from '@/utils/trimString';

import type CommentProps from './Comment.props';

const Comment: FC<CommentProps> = ({ body, user, createdAt }) => {
  const [viewMore, toggleViewMore] = useToggle(false);

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

      <div className="mt-auto w-full">
        <div className="flex items-center gap-3">
          <Avatar name={`${user?.name}`} image={user?.image || undefined} />

          <div className="">
            <Text variant="caption">{trimString(user?.name || '', 50)}</Text>
            <Text className="text-xxs">
              {moment(Number(createdAt || '')).format('MMMM DD, YYYY')}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
