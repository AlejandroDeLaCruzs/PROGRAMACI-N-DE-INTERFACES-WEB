"use client";
import { CharacterCard } from "@/app/components/CharacterCard";
import { useProvieder } from "@/app/context/contex";
import { api } from "@/lib/api/api";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EpiosdeById = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState<episode>();
  const [loading, setLoading] = useState<boolean>(true);
  const [characters, setCharacters] = useState<character[]>([]);
  const {addFavotite} = useProvieder();

  const fetchEpiosde = async () => {
    try {
      api
        .get(`/episode/${id}`)
        .then(async (res) => {
          setEpisode(res.data);
          const character = await Promise.all<character>(
            res?.data.characters.map(async (character: string) => {
              const response = await axios.get(character);
              return response.data;
            }),
          );
          console.log("aa" + character.at(0)?.id);
          setCharacters(character);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEpiosde();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="EpiosdeById">
      <div className="tituloEpisode">{episode?.name}</div>
      <button onClick={() => addFavotite(Number(id))}>Add to favoite</button>
      <div className="characterByEpiosde">
        {characters &&
          characters.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
      </div>
    </div>
  );
};

export default EpiosdeById;
