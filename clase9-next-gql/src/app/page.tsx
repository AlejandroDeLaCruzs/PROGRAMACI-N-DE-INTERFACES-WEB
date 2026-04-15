'use client'

import { GetSimpleCharactersQuery, GetSimpleCharactersQueryVariables } from "@/gql/graphql";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

// Query (IMPORTANTE)
const GET_SIMPLE_CHARACTERS = gql`
  query GetSimpleCharacters {
    characters {
      results {
        id
        name
      }
    }
  }
`;

const Home = () => {
  const { data, loading, error } = useQuery<GetSimpleCharactersQuery, GetSimpleCharactersQueryVariables>(GET_SIMPLE_CHARACTERS)
  console.log(data);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <ul>
        {data?.characters.results.map((char: any) => (
          <li key={char.id}>{char.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;