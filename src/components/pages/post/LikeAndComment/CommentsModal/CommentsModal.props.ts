export default interface CommentsModalProps {
  postId: string;
  open: boolean;
  toggleOpen: () => void;
  onCreateCommentSuccess?: () => void;
  onDeleteCommentSuccess?: () => void;
}
