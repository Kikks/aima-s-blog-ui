import { useMutation, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import type { FC } from 'react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Loader from '@/components/lib/Loader';
import Pagination from '@/components/lib/Pagination';
import Text from '@/components/lib/Text';
import TextArea from '@/components/lib/TextArea';
import type {
  Comment as IComment,
  Meta,
} from '@/graphql/__generated__/graphql';
import { COMMENT_ON_POST } from '@/graphql/mutations/likeAndComment.mutations';
import { GET_POST_COMMENTS } from '@/graphql/queries/likeAndComment.queries';
import { defaultMeta } from '@/utils/constants';
import { isEmpty } from '@/utils/validators/helpers';

import Comment from '../Comment/Comment';
import type { CommentListProps } from './CommentsModal.props';

const CommentList: FC<CommentListProps> = ({
  postId,
  onCreateCommentSuccess,
  onDeleteCommentSuccess,
  onSelectComment,
  handleClose,
}) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<(IComment | null)[]>([]);
  const [meta, setMeta] = useState<Meta>(defaultMeta);
  const [page, setPage] = useState(1);

  const { loading: commentsLoading, refetch: refetchComments } = useQuery(
    GET_POST_COMMENTS,
    {
      variables: { postId, limit: 10, page },
      onCompleted(response) {
        setComments(response?.getComments?.data || []);
        setMeta(response?.getComments?.meta || defaultMeta);
      },
    }
  );

  const [mutate, { loading: createCommentIsLoading }] = useMutation(
    COMMENT_ON_POST,
    {
      onCompleted() {
        if (onCreateCommentSuccess) onCreateCommentSuccess();
        refetchComments();
        setNewComment('');
      },
      onError(error) {
        toast.error(error?.message);
      },
    }
  );

  const handleCreateComment = () => {
    if (isEmpty(newComment)) {
      toast.error('Comment must not be empty');
      return;
    }

    mutate({
      variables: { input: { body: newComment }, postId },
    });
  };

  return (
    <>
      <div className="flex w-full items-center gap-3 px-5">
        <Heading variant="h3" className="mr-auto font-bold">
          COMMENTS {`(${meta?.total || 0})`}
        </Heading>
        <button onClick={handleClose}>
          <Icon className="text-2xl" icon="carbon:close" />
        </button>
      </div>

      <div className="grid w-full flex-1 items-start gap-5 px-5">
        {commentsLoading ? (
          <div className="grid h-full w-full place-items-center">
            <Loader />
          </div>
        ) : (
          <>
            {(comments || []).length === 0 ? (
              <div className="grid h-full w-full place-items-center">
                <Text>There are no comments to display.</Text>
              </div>
            ) : (
              comments.map((item, index) => (
                // @ts-ignore
                <Comment
                  key={index}
                  {...item}
                  showCommentDetails={() => {
                    if (onSelectComment) onSelectComment(item);
                  }}
                  refetch={() => {
                    refetchComments();
                    if (onDeleteCommentSuccess) onDeleteCommentSuccess();
                  }}
                />
              ))
            )}
          </>
        )}

        <div className="mt-auto w-full">
          <Pagination
            count={meta.pages || 0}
            page={page}
            setPage={setPage}
            shortText
          />
        </div>
      </div>

      <div className="flex w-full flex-col">
        <div className="flex w-full gap-3 rounded-md p-3 text-left shadow-[0_0_1rem_rgba(0,0,0,0.1)]">
          <TextArea
            rows={1}
            placeholder="Share your thoughts"
            value={newComment}
            onChange={(event) => setNewComment(event.currentTarget.value)}
          />

          <div className="flex items-center justify-end gap-3">
            <Button
              onClick={handleCreateComment}
              loading={createCommentIsLoading}
              className="min-w-0"
            >
              <span className="hidden md:inline">Comment</span>
              <Icon
                icon="material-symbols:send-rounded"
                className="text-2xl text-white md:hidden"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentList;
