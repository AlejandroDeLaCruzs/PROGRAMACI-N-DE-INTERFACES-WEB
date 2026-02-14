import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../src/api/api";
import type { CharacterType } from "../src/types/character";

export const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const [character, setCharacter] = useState<CharacterType | null>(
    state?.character || null
  );

  useEffect(() => {
    // 👇 solo hacemos fetch si NO vino el objeto
    if (!character && id) {
      api.get(`/character/${id}`).then((res) => {
        setCharacter(res.data);
      });
    }
  }, [id, character]);

  if (!character) return <h1>Loading...</h1>;

  return (
    <div>
      <img src={character.image} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default Detail;