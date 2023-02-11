/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type AdminInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
};

export type AdminLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  token: Scalars['String'];
  user: Admin;
};

export type CategoriesStats = {
  __typename?: 'CategoriesStats';
  category: Category;
  posts: Scalars['Int'];
};

export type Category = {
  __typename?: 'Category';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  isFeatured?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CategoryInput = {
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Comment = {
  __typename?: 'Comment';
  body: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  post: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
  user: User;
};

export type CommentInput = {
  body: Scalars['String'];
};

export type CountPostResponse = {
  __typename?: 'CountPostResponse';
  drafts: Scalars['Int'];
  published: Scalars['Int'];
  total: Scalars['Int'];
};

export type CreateAdminInput = {
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type FeaturedPost = {
  __typename?: 'FeaturedPost';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  index: Scalars['Int'];
  post: Post;
  theme: Theme;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Like = {
  __typename?: 'Like';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  post: Scalars['ID'];
  updatedAt?: Maybe<Scalars['String']>;
  user: Scalars['ID'];
};

export type LikeInput = {
  post: Scalars['ID'];
  user: Scalars['ID'];
};

export type Meta = {
  __typename?: 'Meta';
  currentPage?: Maybe<Scalars['Int']>;
  pages?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminLogin: AdminLoginResponse;
  createAdmin: Admin;
  createCategory: Category;
  createComment: Comment;
  createPost: Post;
  createTheme: Theme;
  deleteAccount: Scalars['String'];
  deleteCategory: Scalars['String'];
  deleteComment: Scalars['String'];
  deletePost: Scalars['String'];
  deleteTheme: Scalars['String'];
  featureCategory: Scalars['String'];
  featurePost: Scalars['String'];
  likePost?: Maybe<Scalars['String']>;
  login: User;
  publishPost: Scalars['String'];
  unfeatureCategory: Scalars['String'];
  unfeaturePost: Scalars['String'];
  unpublishPost: Scalars['String'];
  updateAdmin: Scalars['String'];
  updateAdminPassword: Scalars['String'];
  updateCategory: Scalars['String'];
  updateComment: Scalars['String'];
  updatePost: Scalars['String'];
};


export type MutationAdminLoginArgs = {
  input: AdminLoginInput;
};


export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};


export type MutationCreateCategoryArgs = {
  input: CategoryInput;
};


export type MutationCreateCommentArgs = {
  input: CommentInput;
  postId: Scalars['ID'];
};


export type MutationCreatePostArgs = {
  input: PostInput;
};


export type MutationCreateThemeArgs = {
  name: Scalars['String'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCommentArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteThemeArgs = {
  id: Scalars['ID'];
};


export type MutationFeatureCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationFeaturePostArgs = {
  index?: InputMaybe<Scalars['Int']>;
  postId: Scalars['ID'];
  themeId: Scalars['ID'];
};


export type MutationLikePostArgs = {
  postId: Scalars['ID'];
};


export type MutationPublishPostArgs = {
  id: Scalars['ID'];
};


export type MutationUnfeatureCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationUnfeaturePostArgs = {
  postId: Scalars['ID'];
};


export type MutationUnpublishPostArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateAdminArgs = {
  input: AdminInput;
};


export type MutationUpdateAdminPasswordArgs = {
  password: Scalars['String'];
};


export type MutationUpdateCategoryArgs = {
  id: Scalars['ID'];
  input: CategoryInput;
};


export type MutationUpdateCommentArgs = {
  id: Scalars['ID'];
  input: CommentInput;
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  input: PostInput;
};

export type PaginatedCategories = {
  __typename?: 'PaginatedCategories';
  data: Array<Maybe<Category>>;
  meta?: Maybe<Meta>;
};

export type PaginatedCategoriesStats = {
  __typename?: 'PaginatedCategoriesStats';
  data: Array<Maybe<CategoriesStats>>;
  meta?: Maybe<Meta>;
};

export type PaginatedComments = {
  __typename?: 'PaginatedComments';
  data: Array<Maybe<Comment>>;
  meta?: Maybe<Meta>;
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  data: Array<Maybe<Post>>;
  meta?: Maybe<Meta>;
};

export type PaginatedUsers = {
  __typename?: 'PaginatedUsers';
  data: Array<Maybe<User>>;
  meta?: Maybe<Meta>;
};

export type Post = {
  __typename?: 'Post';
  audio?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  category: Category;
  coverImage: Scalars['String'];
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isPublished?: Maybe<Scalars['Boolean']>;
  preview: Scalars['String'];
  publishedAt?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type PostInput = {
  audio?: InputMaybe<Scalars['String']>;
  body: Scalars['String'];
  category: Scalars['ID'];
  coverImage: Scalars['String'];
  title: Scalars['String'];
};

export type PreviousAndNextPosts = {
  __typename?: 'PreviousAndNextPosts';
  next?: Maybe<Post>;
  prev?: Maybe<Post>;
};

export type Query = {
  __typename?: 'Query';
  adminGetPost: SinglePostResponse;
  countCategories: Scalars['Int'];
  countPosts: CountPostResponse;
  countUsers: Scalars['Int'];
  getAdmin: Admin;
  getAllPosts: PaginatedPosts;
  getCategories: PaginatedCategories;
  getCategoriesStats: PaginatedCategoriesStats;
  getCategory: Category;
  getComments: PaginatedComments;
  getFeaturedCategories: Array<Maybe<Category>>;
  getFeaturedPosts: Array<Maybe<FeaturedPost>>;
  getIsPostFeatured: Scalars['Boolean'];
  getLatestTheme: Theme;
  getPost: SinglePostResponse;
  getPosts: PaginatedPosts;
  getPreviousAndNextPosts: PreviousAndNextPosts;
  getTheme: Theme;
  getThemes: Array<Maybe<Theme>>;
  getUser: User;
  getUserLikeForPost?: Maybe<Like>;
  getUsers: PaginatedUsers;
};


export type QueryAdminGetPostArgs = {
  id: Scalars['ID'];
};


export type QueryGetAllPostsArgs = {
  category?: InputMaybe<Scalars['ID']>;
  isPublished?: InputMaybe<Scalars['Boolean']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoriesStatsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryGetCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryGetCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  postId: Scalars['ID'];
};


export type QueryGetIsPostFeaturedArgs = {
  postId: Scalars['ID'];
};


export type QueryGetPostArgs = {
  slug: Scalars['String'];
};


export type QueryGetPostsArgs = {
  category?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
};


export type QueryGetPreviousAndNextPostsArgs = {
  postId: Scalars['ID'];
};


export type QueryGetThemeArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID'];
};


export type QueryGetUserLikeForPostArgs = {
  postId: Scalars['ID'];
};


export type QueryGetUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
};

export type SinglePostResponse = {
  __typename?: 'SinglePostResponse';
  comments: Scalars['Int'];
  likes: Scalars['Int'];
  post: Post;
};

export type Theme = {
  __typename?: 'Theme';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type LikePostMutationVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost?: string | null };

export type CommentOnPostMutationVariables = Exact<{
  postId: Scalars['ID'];
  input: CommentInput;
}>;


export type CommentOnPostMutation = { __typename?: 'Mutation', createComment: { __typename?: 'Comment', id: string, body: string, createdAt?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null } } };

export type DeleteCommentMutationVariables = Exact<{
  commentId: Scalars['ID'];
}>;


export type DeleteCommentMutation = { __typename?: 'Mutation', deleteComment: string };

export type UserLoginMutationVariables = Exact<{ [key: string]: never; }>;


export type UserLoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, name: string, email: string, image?: string | null, createdAt?: string | null, updatedAt?: string | null } };

export type GetFeaturedCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedCategoriesQuery = { __typename?: 'Query', getFeaturedCategories: Array<{ __typename?: 'Category', id: string, name: string, image?: string | null, createdAt?: string | null, updatedAt?: string | null } | null> };

export type GetCategoriesQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: { __typename?: 'PaginatedCategories', data: Array<{ __typename?: 'Category', id: string, name: string, image?: string | null, createdAt?: string | null, updatedAt?: string | null } | null>, meta?: { __typename?: 'Meta', currentPage?: number | null, pages?: number | null, total?: number | null } | null } };

export type GetCategoryQueryVariables = Exact<{
  categoryId: Scalars['ID'];
}>;


export type GetCategoryQuery = { __typename?: 'Query', getCategory: { __typename?: 'Category', id: string, name: string, image?: string | null, createdAt?: string | null, updatedAt?: string | null } };

export type GetUserLikeForPostQueryVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type GetUserLikeForPostQuery = { __typename?: 'Query', getUserLikeForPost?: { __typename?: 'Like', id: string, post: string, user: string } | null };

export type GetCommentsQueryVariables = Exact<{
  postId: Scalars['ID'];
  page?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetCommentsQuery = { __typename?: 'Query', getComments: { __typename?: 'PaginatedComments', data: Array<{ __typename?: 'Comment', id: string, body: string, post: string, createdAt?: string | null, user: { __typename?: 'User', id: string, name: string, email: string, image?: string | null } } | null>, meta?: { __typename?: 'Meta', currentPage?: number | null, pages?: number | null, total?: number | null } | null } };

export type FeaturedPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedPostsQuery = { __typename?: 'Query', getFeaturedPosts: Array<{ __typename?: 'FeaturedPost', index: number, theme: { __typename?: 'Theme', name: string }, post: { __typename?: 'Post', id: string, title: string, coverImage: string, preview: string, slug: string, publishedAt?: string | null, createdAt?: string | null, updatedAt?: string | null, category: { __typename?: 'Category', id: string, name: string } } } | null> };

export type GetPostsQueryVariables = Exact<{
  category?: InputMaybe<Scalars['ID']>;
  limit?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['Int']>;
  search?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
}>;


export type GetPostsQuery = { __typename?: 'Query', getPosts: { __typename?: 'PaginatedPosts', data: Array<{ __typename?: 'Post', id: string, title: string, coverImage: string, preview: string, slug: string, isPublished?: boolean | null, publishedAt?: string | null, createdAt?: string | null, updatedAt?: string | null, category: { __typename?: 'Category', id: string, name: string } } | null>, meta?: { __typename?: 'Meta', currentPage?: number | null, pages?: number | null, total?: number | null } | null } };

export type GetPostQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetPostQuery = { __typename?: 'Query', getPost: { __typename?: 'SinglePostResponse', comments: number, likes: number, post: { __typename?: 'Post', id: string, audio?: string | null, title: string, coverImage: string, body: string, preview: string, slug: string, isPublished?: boolean | null, publishedAt?: string | null, createdAt?: string | null, updatedAt?: string | null, category: { __typename?: 'Category', id: string, name: string } } } };

export type GetPreviousAndNextostsQueryVariables = Exact<{
  postId: Scalars['ID'];
}>;


export type GetPreviousAndNextostsQuery = { __typename?: 'Query', getPreviousAndNextPosts: { __typename?: 'PreviousAndNextPosts', next?: { __typename?: 'Post', title: string, slug: string, id: string } | null, prev?: { __typename?: 'Post', title: string, slug: string, id: string } | null } };


export const LikePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"likePost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"likePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}]}]}}]} as unknown as DocumentNode<LikePostMutation, LikePostMutationVariables>;
export const CommentOnPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"commentOnPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]} as unknown as DocumentNode<CommentOnPostMutation, CommentOnPostMutationVariables>;
export const DeleteCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"commentId"}}}]}]}}]} as unknown as DocumentNode<DeleteCommentMutation, DeleteCommentMutationVariables>;
export const UserLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userLogin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<UserLoginMutation, UserLoginMutationVariables>;
export const GetFeaturedCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFeaturedCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFeaturedCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetFeaturedCategoriesQuery, GetFeaturedCategoriesQueryVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categoryId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<GetCategoryQuery, GetCategoryQueryVariables>;
export const GetUserLikeForPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUserLikeForPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUserLikeForPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"post"}},{"kind":"Field","name":{"kind":"Name","value":"user"}}]}}]}}]} as unknown as DocumentNode<GetUserLikeForPostQuery, GetUserLikeForPostQueryVariables>;
export const GetCommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getComments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getComments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<GetCommentsQuery, GetCommentsQueryVariables>;
export const FeaturedPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"featuredPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFeaturedPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"index"}},{"kind":"Field","name":{"kind":"Name","value":"theme"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<FeaturedPostsQuery, FeaturedPostsQueryVariables>;
export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"category"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"order"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"category"},"value":{"kind":"Variable","name":{"kind":"Name","value":"category"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"Variable","name":{"kind":"Name","value":"order"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentPage"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const GetPostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"audio"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"coverImage"}},{"kind":"Field","name":{"kind":"Name","value":"body"}},{"kind":"Field","name":{"kind":"Name","value":"preview"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isPublished"}},{"kind":"Field","name":{"kind":"Name","value":"publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"comments"}},{"kind":"Field","name":{"kind":"Name","value":"likes"}}]}}]}}]} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const GetPreviousAndNextostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPreviousAndNextosts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"postId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPreviousAndNextPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"postId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"postId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"next"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"prev"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetPreviousAndNextostsQuery, GetPreviousAndNextostsQueryVariables>;