import { useEffect, useState } from "react";
import { api } from "./api/api";
import { Character } from "./components/character";

import "./App.css";

const App = () => {
  const [pers, setCharacter] = useState("0");
  const [id, setId] = useState<string>("");
  const [idBusqueda, seIdBusqueda] = useState<string>("");

  useEffect(() => {
    api.get(`/character/${idBusqueda}`).then((res) => {
      console.log(res);
      setCharacter(res.data);
    });
  }, [idBusqueda]);

  return (
    <>
      <h1>Busqueda rick morty</h1>
      <input onChange={(e) => setId(e.target.value)}></input>
      <button onClick={() => seIdBusqueda(id)}> buscar</button>
      <Character character={pers}></Character>
    </>
  );
};

export default App;
