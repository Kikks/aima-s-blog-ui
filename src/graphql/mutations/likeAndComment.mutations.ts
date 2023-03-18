import { gql } from '../__generated__';

export const LIKE_POST = gql(`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId)
  }
`);

export const LIKE_COMMENT = gql(`
  mutation likeComment($commentId: ID!) {
    likeComment(commentId: $commentId)
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

export const COMMENT_ON_COMMENT = gql(`
  mutation commentOnComment($commentId: ID!, $input: CommentInput!) {
    createCommentForComment(commentId: $commentId, input: $input) {
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
