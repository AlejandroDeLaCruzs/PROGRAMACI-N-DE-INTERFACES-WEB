"use client";
import { useState } from "react";
import { CointnerBackHome } from "./Components/CointeinerBackHome";

export const Home = () => {
  const [mostrar, setMostrar] = useState<boolean>(false);

  return (
    <div className="mainCointener" onClick={() => setMostrar(true)}>
      {mostrar && (
        <CointnerBackHome setMostrar={setMostrar}>
          <h1>esto esta fuera del componente</h1>
        </CointnerBackHome>
      )}
    </div>
  );
};

export default Home;
