import { useMutation, useQuery } from '@apollo/client';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

import Avatar from '@/components/lib/Avatar';
import Button from '@/components/lib/Button';
import Heading from '@/components/lib/Heading';
import Loader from '@/components/lib/Loader';
import Pagination from '@/components/lib/Pagination';
import Text from '@/components/lib/Text';
import TextArea from '@/components/lib/TextArea';
import { UserContext } from '@/contexts/user';
import type {
  Comment as IComment,
  Meta,
} from '@/graphql/__generated__/graphql';
import { COMMENT_ON_POST } from '@/graphql/mutations/likeAndComment.mutations';
import { GET_POST_COMMENTS } from '@/graphql/queries/likeAndComment.queries';
import { useToggle } from '@/hooks';
import { defaultMeta } from '@/utils/constants';
import { isEmpty } from '@/utils/validators/helpers';

import Comment from '../Comment';
import type CommentsModalProps from './CommentsModal.props';

const CommentsModal: FC<CommentsModalProps> = ({
  open,
  toggleOpen,
  postId,
  onCreateCommentSuccess,
  onDeleteCommentSuccess,
}) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<(IComment | null)[]>([]);
  const [meta, setMeta] = useState<Meta>(defaultMeta);
  const [page, setPage] = useState(1);
  const [showEditor, toggleShowEditor] = useToggle(false);

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
        toggleShowEditor();
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

  return open ? (
    <div
      className={`fixed left-0 top-0 z-[1000] grid h-full w-full place-items-center shadow-md`}
    >
      <div
        className="absolute top-0 left-0 z-0 h-full w-full bg-black/40"
        onClick={toggleOpen}
      />

      <motion.div
        className="z-10 flex h-[70vh] max-h-[900px] w-[90%] max-w-[600px] flex-col items-center gap-5 overflow-hidden overflow-y-auto rounded-xl bg-white py-5 md:py-10"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.25 } }}
      >
        <div className="flex w-full items-center justify-between px-5">
          <Heading variant="h3" className="font-bold">
            COMMENTS {`(${meta?.total || 0})`}
          </Heading>
          <button onClick={toggleOpen}>
            <Icon className="text-2xl" icon="carbon:close" />
          </button>
        </div>

        <div className="flex w-full flex-col px-5">
          {showEditor ? (
            <div className="flex w-full flex-col gap-3 rounded-md p-3 text-left shadow-[0_0_1rem_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-3">
                <Avatar
                  name={`${user?.name}`}
                  image={user?.image || undefined}
                />

                <Text>{`${user?.name}`}</Text>
              </div>

              <TextArea
                rows={3}
                placeholder="Share your thoughts"
                value={newComment}
                onChange={(event) => setNewComment(event.currentTarget.value)}
              />

              <div className="flex items-center justify-end gap-3">
                <Button
                  onClick={toggleShowEditor}
                  className="bg-white text-aima-black"
                  disabled={createCommentIsLoading}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateComment}
                  loading={createCommentIsLoading}
                >
                  Comment
                </Button>
              </div>
            </div>
          ) : (
            <button
              onClick={toggleShowEditor}
              className="w-full rounded-md p-5 text-left shadow-[0_0_1rem_rgba(0,0,0,0.1)]"
            >
              <Text>Share your thoughts</Text>
            </button>
          )}
        </div>

        <div className="grid w-full flex-1 gap-5 px-5">
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
      </motion.div>
    </div>
  ) : (
    <></>
  );
};

export default CommentsModal;
