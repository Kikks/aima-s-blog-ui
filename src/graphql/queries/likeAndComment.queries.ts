import { gql } from '../__generated__';

export const GET_USER_LIKE_FOR_POST = gql(`
  query getUserLikeForPost($postId: ID!) {
    getUserLikeForPost(postId: $postId) {
      id
      post
      user
    }
  }
`);

export const GET_USER_LIKE_FOR_COMMENT = gql(`
  query getUserLikeForComment($commentId: ID!) {
    getUserLikeForComment(commentId: $commentId) {
      id
      comment
      user
    }
  }
`);

export const GET_POST_COMMENTS = gql(`
  query getComments($postId: ID!, $page: Int, $limit: Int) {
    getComments(postId: $postId, limit: $limit, page: $page) {
      data {
        id
        body
        user {
          id
          name
          email
          image
        }
        post
        createdAt
      }
      meta {
        currentPage
        pages
        total
      }
    }
  }
`);

export const GET_COMMENT_COMMENTS = gql(`
  query getCommentsForComment($commentId: ID!, $page: Int, $limit: Int) {
    getCommentsForComment(commentId: $commentId, limit: $limit, page: $page) {
      data {
        id
        body
        user {
          id
          name
          email
          image
        }
        post
        createdAt
      }
      meta {
        currentPage
        pages
        total
      }
    }
  }
`);

export const GET_COMMENT_LIKES_AND_COMMENTS_COUNT = gql(`
  query getLikesAndCommentsCount($commentId: ID!) {
    getCommentLikesAndCommentsCount(commentId: $commentId) {
      likes
      comments
    }
  }
`);
