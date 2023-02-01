import { gql } from '../__generated__';

export const LOGIN = gql(`
  mutation userLogin {
    login {
      id
      name
      email
      image
      createdAt
      updatedAt
    }
  }
`);
