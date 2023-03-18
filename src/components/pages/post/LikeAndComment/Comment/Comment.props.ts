import type { Comment } from '@/graphql/__generated__/graphql';

export default interface CommentProps extends Comment {
  refetch?: () => void;
  nested?: boolean;
  showCommentDetails?: () => void;
}
