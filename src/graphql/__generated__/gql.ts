/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId)\n  }\n": types.LikePostDocument,
    "\n  mutation likeComment($commentId: ID!) {\n    likeComment(commentId: $commentId)\n  }\n": types.LikeCommentDocument,
    "\n  mutation commentOnPost($postId: ID!, $input: CommentInput!) {\n    createComment(postId: $postId, input: $input) {\n      id\n      body\n      user {\n        id\n        name\n        email\n        image\n      }\n      createdAt\n    }\n  }\n": types.CommentOnPostDocument,
    "\n  mutation commentOnComment($commentId: ID!, $input: CommentInput!) {\n    createCommentForComment(commentId: $commentId, input: $input) {\n      id\n      body\n      user {\n        id\n        name\n        email\n        image\n      }\n      createdAt\n    }\n  }\n": types.CommentOnCommentDocument,
    "\n  mutation deleteComment($commentId: ID!) {\n    deleteComment(id: $commentId)\n  }\n": types.DeleteCommentDocument,
    "\n  mutation userLogin {\n    login {\n      id\n      name\n      email\n      image\n      createdAt\n      updatedAt\n    }\n  }\n": types.UserLoginDocument,
    "\n  query getFeaturedCategories {\n    getFeaturedCategories {\n      id\n      name\n      image\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetFeaturedCategoriesDocument,
    "\n  query getCategories($search: String, $page: Int, $limit: Int) {\n    getCategories(search: $search, page: $page, limit: $limit) {\n      data {\n        id\n        name\n        image\n        createdAt\n        updatedAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  query getCategory($categoryId: ID!) {\n    getCategory(id: $categoryId) {\n      id\n      name\n      image\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetCategoryDocument,
    "\n  query getUserLikeForPost($postId: ID!) {\n    getUserLikeForPost(postId: $postId) {\n      id\n      post\n      user\n    }\n  }\n": types.GetUserLikeForPostDocument,
    "\n  query getUserLikeForComment($commentId: ID!) {\n    getUserLikeForComment(commentId: $commentId) {\n      id\n      comment\n      user\n    }\n  }\n": types.GetUserLikeForCommentDocument,
    "\n  query getComments($postId: ID!, $page: Int, $limit: Int) {\n    getComments(postId: $postId, limit: $limit, page: $page) {\n      data {\n        id\n        body\n        user {\n          id\n          name\n          email\n          image\n        }\n        post\n        createdAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n": types.GetCommentsDocument,
    "\n  query getCommentsForComment($commentId: ID!, $page: Int, $limit: Int) {\n    getCommentsForComment(commentId: $commentId, limit: $limit, page: $page) {\n      data {\n        id\n        body\n        user {\n          id\n          name\n          email\n          image\n        }\n        post\n        createdAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n": types.GetCommentsForCommentDocument,
    "\n  query getLikesAndCommentsCount($commentId: ID!) {\n    getCommentLikesAndCommentsCount(commentId: $commentId) {\n      likes\n      comments\n    }\n  }\n": types.GetLikesAndCommentsCountDocument,
    "\n  query featuredPosts {\n    getFeaturedPosts {\n      index\n      theme {\n        name\n      }\n      post {\n        id\n        title\n        coverImage\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        publishedAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n": types.FeaturedPostsDocument,
    "\n  query getPosts(\n    $category: ID\n    $limit: Int\n    $order: String\n    $page: Int\n    $search: String\n    $sortBy: String\n  ) {\n    getPosts(\n      category: $category\n      limit: $limit\n      order: $order\n      page: $page\n      search: $search\n      sortBy: $sortBy\n    ) {\n      data {\n        id\n        title\n        coverImage\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        isPublished\n        publishedAt\n        createdAt\n        updatedAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  query getPost($slug: String!) {\n    getPost(slug: $slug) {\n      post {\n        id\n        audio\n        title\n        coverImage\n        body\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        isPublished\n        publishedAt\n        createdAt\n        updatedAt\n      }\n      comments\n      likes\n    }\n  }\n": types.GetPostDocument,
    "\n  query getPreviousAndNextosts($postId: ID!) {\n    getPreviousAndNextPosts(postId: $postId) {\n      next {\n        title\n        slug\n        id\n      }\n      prev {\n        title\n        slug\n        id\n      }\n    }\n  }\n": types.GetPreviousAndNextostsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId)\n  }\n"): (typeof documents)["\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation likeComment($commentId: ID!) {\n    likeComment(commentId: $commentId)\n  }\n"): (typeof documents)["\n  mutation likeComment($commentId: ID!) {\n    likeComment(commentId: $commentId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation commentOnPost($postId: ID!, $input: CommentInput!) {\n    createComment(postId: $postId, input: $input) {\n      id\n      body\n      user {\n        id\n        name\n        email\n        image\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation commentOnPost($postId: ID!, $input: CommentInput!) {\n    createComment(postId: $postId, input: $input) {\n      id\n      body\n      user {\n        id\n        name\n        email\n        image\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation commentOnComment($commentId: ID!, $input: CommentInput!) {\n    createCommentForComment(commentId: $commentId, input: $input) {\n      id\n      body\n      user {\n        id\n        name\n        email\n        image\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  mutation commentOnComment($commentId: ID!, $input: CommentInput!) {\n    createCommentForComment(commentId: $commentId, input: $input) {\n      id\n      body\n      user {\n        id\n        name\n        email\n        image\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation deleteComment($commentId: ID!) {\n    deleteComment(id: $commentId)\n  }\n"): (typeof documents)["\n  mutation deleteComment($commentId: ID!) {\n    deleteComment(id: $commentId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation userLogin {\n    login {\n      id\n      name\n      email\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation userLogin {\n    login {\n      id\n      name\n      email\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getFeaturedCategories {\n    getFeaturedCategories {\n      id\n      name\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query getFeaturedCategories {\n    getFeaturedCategories {\n      id\n      name\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCategories($search: String, $page: Int, $limit: Int) {\n    getCategories(search: $search, page: $page, limit: $limit) {\n      data {\n        id\n        name\n        image\n        createdAt\n        updatedAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCategories($search: String, $page: Int, $limit: Int) {\n    getCategories(search: $search, page: $page, limit: $limit) {\n      data {\n        id\n        name\n        image\n        createdAt\n        updatedAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCategory($categoryId: ID!) {\n    getCategory(id: $categoryId) {\n      id\n      name\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query getCategory($categoryId: ID!) {\n    getCategory(id: $categoryId) {\n      id\n      name\n      image\n      createdAt\n      updatedAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserLikeForPost($postId: ID!) {\n    getUserLikeForPost(postId: $postId) {\n      id\n      post\n      user\n    }\n  }\n"): (typeof documents)["\n  query getUserLikeForPost($postId: ID!) {\n    getUserLikeForPost(postId: $postId) {\n      id\n      post\n      user\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUserLikeForComment($commentId: ID!) {\n    getUserLikeForComment(commentId: $commentId) {\n      id\n      comment\n      user\n    }\n  }\n"): (typeof documents)["\n  query getUserLikeForComment($commentId: ID!) {\n    getUserLikeForComment(commentId: $commentId) {\n      id\n      comment\n      user\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getComments($postId: ID!, $page: Int, $limit: Int) {\n    getComments(postId: $postId, limit: $limit, page: $page) {\n      data {\n        id\n        body\n        user {\n          id\n          name\n          email\n          image\n        }\n        post\n        createdAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query getComments($postId: ID!, $page: Int, $limit: Int) {\n    getComments(postId: $postId, limit: $limit, page: $page) {\n      data {\n        id\n        body\n        user {\n          id\n          name\n          email\n          image\n        }\n        post\n        createdAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getCommentsForComment($commentId: ID!, $page: Int, $limit: Int) {\n    getCommentsForComment(commentId: $commentId, limit: $limit, page: $page) {\n      data {\n        id\n        body\n        user {\n          id\n          name\n          email\n          image\n        }\n        post\n        createdAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCommentsForComment($commentId: ID!, $page: Int, $limit: Int) {\n    getCommentsForComment(commentId: $commentId, limit: $limit, page: $page) {\n      data {\n        id\n        body\n        user {\n          id\n          name\n          email\n          image\n        }\n        post\n        createdAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getLikesAndCommentsCount($commentId: ID!) {\n    getCommentLikesAndCommentsCount(commentId: $commentId) {\n      likes\n      comments\n    }\n  }\n"): (typeof documents)["\n  query getLikesAndCommentsCount($commentId: ID!) {\n    getCommentLikesAndCommentsCount(commentId: $commentId) {\n      likes\n      comments\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query featuredPosts {\n    getFeaturedPosts {\n      index\n      theme {\n        name\n      }\n      post {\n        id\n        title\n        coverImage\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        publishedAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"): (typeof documents)["\n  query featuredPosts {\n    getFeaturedPosts {\n      index\n      theme {\n        name\n      }\n      post {\n        id\n        title\n        coverImage\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        publishedAt\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPosts(\n    $category: ID\n    $limit: Int\n    $order: String\n    $page: Int\n    $search: String\n    $sortBy: String\n  ) {\n    getPosts(\n      category: $category\n      limit: $limit\n      order: $order\n      page: $page\n      search: $search\n      sortBy: $sortBy\n    ) {\n      data {\n        id\n        title\n        coverImage\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        isPublished\n        publishedAt\n        createdAt\n        updatedAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPosts(\n    $category: ID\n    $limit: Int\n    $order: String\n    $page: Int\n    $search: String\n    $sortBy: String\n  ) {\n    getPosts(\n      category: $category\n      limit: $limit\n      order: $order\n      page: $page\n      search: $search\n      sortBy: $sortBy\n    ) {\n      data {\n        id\n        title\n        coverImage\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        isPublished\n        publishedAt\n        createdAt\n        updatedAt\n      }\n      meta {\n        currentPage\n        pages\n        total\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPost($slug: String!) {\n    getPost(slug: $slug) {\n      post {\n        id\n        audio\n        title\n        coverImage\n        body\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        isPublished\n        publishedAt\n        createdAt\n        updatedAt\n      }\n      comments\n      likes\n    }\n  }\n"): (typeof documents)["\n  query getPost($slug: String!) {\n    getPost(slug: $slug) {\n      post {\n        id\n        audio\n        title\n        coverImage\n        body\n        preview\n        slug\n        category {\n          id\n          name\n        }\n        isPublished\n        publishedAt\n        createdAt\n        updatedAt\n      }\n      comments\n      likes\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getPreviousAndNextosts($postId: ID!) {\n    getPreviousAndNextPosts(postId: $postId) {\n      next {\n        title\n        slug\n        id\n      }\n      prev {\n        title\n        slug\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPreviousAndNextosts($postId: ID!) {\n    getPreviousAndNextPosts(postId: $postId) {\n      next {\n        title\n        slug\n        id\n      }\n      prev {\n        title\n        slug\n        id\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;