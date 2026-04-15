"use client";

import { GET_SIMPLE_CHARACTERS } from "@/features/characters/queries";
import {
  GetsimplecharactersQuery,
  GetsimplecharactersQueryVariables,
} from "@/gql/graphql";
import { useQuery } from "@apollo/client/react";
import { useEffect, useState } from "react";
import { CharacterCard } from "./components/characterCard";

const Home = () => {
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<string>("");

  const { data } = useQuery<
    GetsimplecharactersQuery,
    GetsimplecharactersQueryVariables
  >(GET_SIMPLE_CHARACTERS, {
    variables: { filter: { name: filter } },
  });

  useEffect(() => {
    if (data?.characters?.results) {
      console.log(data);
    }
  }, [data]);

  return (
    <div>
      <h1>pagina bonita</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setFilter(input);
          }
        }}
      />
      {data &&
        data?.characters?.results?.map((e) => (
          <CharacterCard
            id={e?.id as string}
            img={e?.image as string}
            name={e?.name as string}
          />
        ))}
    </div>
  );
};

export default Home;
