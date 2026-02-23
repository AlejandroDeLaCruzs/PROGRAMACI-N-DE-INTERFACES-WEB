
"use client"
import { api } from "@/lib/api/api";
import { Character } from "@/types";
import { useEffect, useState } from "react";
import { CharacterData } from "./../components/Character/character";
import "./globals.css"

export const Home = () => {
  const [personajes, setPersonajes] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get("/character")
      .then((res) => {
        setPersonajes(res.data.results);
        console.log(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []); 
  return (
    <div className="charactersCointer">
      {loading && <p>Cargando...</p>}
      {!loading &&
        personajes &&
        personajes.map((e) => <CharacterData key={e.id} character={e} />)}
    </div>
  );
};

export default Home;