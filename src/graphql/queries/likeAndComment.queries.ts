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
