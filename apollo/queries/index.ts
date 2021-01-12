import { gql } from "@apollo/client";

export const GET_STATES = gql`
  query GetStates {
    states @client {
      count
    }
  }
`