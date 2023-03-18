import { motion } from 'framer-motion';
import type { FC } from 'react';
import React, { useState } from 'react';

import type { Comment } from '@/graphql/__generated__/graphql';

import CommentDetails from './CommentDetails';
import CommentList from './CommentList';
import type CommentsModalProps from './CommentsModal.props';

const CommentsModal: FC<CommentsModalProps> = ({
  open,
  toggleOpen,
  postId,
  onCreateCommentSuccess,
  onDeleteCommentSuccess,
}) => {
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const handleClose = () => {
    toggleOpen();
    setSelectedComment(null);
  };

  return open ? (
    <div
      className={`fixed left-0 top-0 z-[1000] grid h-full w-full place-items-center shadow-md`}
    >
      <div
        className="absolute top-0 left-0 z-0 h-full w-full bg-black/40"
        onClick={handleClose}
      />

      <motion.div
        className="z-10 flex h-[80vh] max-h-[900px] w-[90%] max-w-[600px] flex-col items-center gap-5 overflow-hidden overflow-y-auto rounded-xl bg-white pt-5"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 0.25 } }}
      >
        {selectedComment ? (
          <CommentDetails
            comment={selectedComment}
            handleClearSelectedComment={() => setSelectedComment(null)}
            handleClose={handleClose}
          />
        ) : (
          <CommentList
            postId={postId}
            onCreateCommentSuccess={onCreateCommentSuccess}
            onDeleteCommentSuccess={onDeleteCommentSuccess}
            onSelectComment={setSelectedComment}
            handleClose={handleClose}
          />
        )}
      </motion.div>
    </div>
  ) : (
    <></>
  );
};

export default CommentsModal;
