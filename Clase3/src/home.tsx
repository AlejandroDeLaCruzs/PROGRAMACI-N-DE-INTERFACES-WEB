import { useEffect, useState } from "react";
import "./App.css";
import { Character } from "./components";
import { api } from "./api/api";
import type { CharacterType } from "./types";



export const InfoCharacters = () => {
  const [name, setName] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [characters, setCharacter] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [paginas, setPaginas] = useState<number[]>([0, 1, 2, 3]);
  const [paginaBuscada, setPaginaBuscada] = useState<number>(0);

  useEffect(() => {
    const params = [];
    if (name) params.push(`name=${name}`);
    if (paginaBuscada) params.push(`page=${paginaBuscada}`);

    const ruta = params.reduce((acc, param, index) => {
      console.log(acc + param);
      if (param) {
        if (index == 0) {
          return acc + "/?" + param;
        } else {
          return acc + "&" + param;
        }
      }
    }, "character");
    console.log("Ruta final:" + ruta);
    api
      .get(ruta)
      .then((e) => {
        setCharacter(e.data.results);
        console.log(e);
      })
      .finally(() => setLoading(false));
       window.scrollTo(0, 0); // sube de golpe cada vez que cambia la página
  }, [name, paginaBuscada]);

  return (
    <div className="maincointener">
      <h1>Busqueda rick morty</h1>
      <input onChange={(e) => setInputName(e.target.value)}></input>
      <button onClick={() => setName(inputName)}> buscar</button>
      <div className="charactersCointer">
        {characters.map((e) => (
          <Character key={e.id} character={e} />
        ))}
      </div>
      <div className="botonesPaginas">
        {paginas.map((e) => (
          <button key={e} onClick={() => setPaginaBuscada(e)}>
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};


