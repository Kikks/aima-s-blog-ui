export default interface LikeAndCommentProps {
  postId: string;
  likes: number;
  setLikes: (numer: number) => void;
  comments: number;
  setComments: (numer: number) => void;
}
