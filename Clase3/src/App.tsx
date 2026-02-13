import { useEffect, useState } from "react";

import "./App.css";
import { Character } from "./components";
import { api } from "./api/api";
import type { CharacterType } from "./types";

const App = () => {
  const [name, setName] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [characters, setCharacter] = useState<CharacterType[]>();

  useEffect(() => {
    api.get(`character?name=${name}`).then((res) => {
      setCharacter(res.data.results);
    });
  }, [name]);

  return (
    <div className="maincointener">
      <h1>Busqueda rick morty</h1>
      <input onChange={(e) => setInputName(e.target.value)}></input>
      <button onClick={() => setName(inputName)}> buscar</button>
      <div className="charactersCointer">
        {characters?.map((e) => (
          <Character key={e.id} character={e} />
        ))}
      </div>
    </div>
  );
};

export default App;
