import { gql } from "@apollo/client";


export const GET_SIMPLE_CHARACTERS = gql`
  query GETSIMPLECHARACTERS($filter: FilterCharacter) {
    characters(filter: $filter) {
      results {
        id
        name
        image
      }
    }
  }
`;
