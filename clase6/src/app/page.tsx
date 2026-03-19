
import { useState } from "react";
import { CointnerBackHome } from "./Components/CointeinerBackHome";


export const Home = () => {
  const [mostrar, setMostrar] = useState<boolean>(true);



  return (
    <div className="main">
      <CointnerBackHome>
        <h1>esto esta fuera del componente</h1>
      </CointnerBackHome>
    </div>
  );
}

export default Home;
