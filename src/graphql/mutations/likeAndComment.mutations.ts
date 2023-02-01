import { gql } from '../__generated__';

export const LIKE_POST = gql(`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId)
  }
`);

export const COMMENT_ON_POST = gql(`
  mutation commentOnPost($postId: ID!, $input: CommentInput!) {
    createComment(postId: $postId, input: $input) {
      id
      body
      user {
        id
        name
        email
        image
      }
      createdAt
    }
  }
`);

export const DELETE_COMMENT = gql(`
  mutation deleteComment($commentId: ID!) {
    deleteComment(id: $commentId)
  }
`);
