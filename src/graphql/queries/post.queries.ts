import { gql } from '../__generated__';

export const GET_FEATURED_POSTS = gql(`
  query featuredPosts {
    getFeaturedPosts {
      theme {
        name
      }
      post {
        id
        title
        coverImage
        preview
        slug
        category {
          id
          name
        }
        publishedAt
        createdAt
        updatedAt
      }
    }
  }
`);

export const GET_POSTS = gql(`
  query getPosts(
    $category: ID
    $limit: Int
    $order: String
    $page: Int
    $search: String
    $sortBy: String
  ) {
    getPosts(
      category: $category
      limit: $limit
      order: $order
      page: $page
      search: $search
      sortBy: $sortBy
    ) {
      data {
        id
        title
        coverImage
        preview
        slug
        category {
          id
          name
        }
        isPublished
        publishedAt
        createdAt
        updatedAt
      }
      meta {
        currentPage
        pages
        total
      }
    }
  }
`);

export const GET_POST = gql(`
  query getPost($slug: String!) {
    getPost(slug: $slug) {
      post {
        id
        audio
        title
        coverImage
        body
        preview
        slug
        category {
          id
          name
        }
        isPublished
        publishedAt
        createdAt
        updatedAt
      }
      comments
      likes
    }
  }
`);

export const GET_PREVIOUS_AND_NEXT_POST = gql(`
  query getPreviousAndNextosts($postId: ID!) {
    getPreviousAndNextPosts(postId: $postId) {
      next {
        title
        slug
        id
      }
      prev {
        title
        slug
        id
      }
    }
  }
`);
