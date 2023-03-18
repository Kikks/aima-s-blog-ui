import type { Comment } from '@/graphql/__generated__/graphql';

export default interface CommentsModalProps {
  postId: string;
  open: boolean;
  toggleOpen: () => void;
  onCreateCommentSuccess?: () => void;
  onDeleteCommentSuccess?: () => void;
}

export interface CommentListProps {
  postId: string;
  onCreateCommentSuccess?: () => void;
  onDeleteCommentSuccess?: () => void;
  onSelectComment?: (comment: Comment | null) => void;
  handleClose?: () => void;
}

export interface CommentDetailsProps {
  comment: Comment | null;
  handleClose?: () => void;
  handleClearSelectedComment?: () => void;
}
