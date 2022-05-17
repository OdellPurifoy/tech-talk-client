import { gql } from '@apollo/client';

export const GET_ALL_USERS =  gql`
{
  users {
    firstName
    lastName
    email
  }
}
`