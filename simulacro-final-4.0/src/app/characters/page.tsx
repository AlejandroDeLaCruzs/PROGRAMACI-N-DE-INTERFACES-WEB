"use client";

import { api } from "@/lib/api/api";
import { useEffect, useState } from "react";
import { CharacterCard } from "../components/CharacterCard";
import "./style.css";
import { Paginacion } from "../components/Paginacion";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<character[]>([]);
  const [info, setInfo] = useState<info>();
  const [loading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const fecthData = () => {
    try {
      api
        .get(`/character/?name=${input}&page=${page}`)
        .then((res) => {
          setCharacters(res.data.results);
          setInfo(res.data.info);
        })
        .finally(() => setLoading(false));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthData();
  }, [page]);

  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="characterPage">
      <input className="buscador"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            setPage(1);
            fecthData();
          }
        }}
      />
      {characters.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
      {info && <Paginacion actualPage={page} setPage={setPage} info={info} />}
    </div>
  );
};

export default CharactersPage;
