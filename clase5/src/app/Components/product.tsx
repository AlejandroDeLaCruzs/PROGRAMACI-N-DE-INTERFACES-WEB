
"use client"

import { Producto } from "../page";

export type Params = {
  name: string;
  lista: Producto[];
  setLista: React.Dispatch<React.SetStateAction<Producto[]>>;
};

export const ProductComponent = ({ name, lista, setLista }: Params) => {
  return (
    <div className="main">
      <h1>{name}</h1>
      <button onClick={() => {
        setLista([...lista, {name, id: String(Math.random())}])
      }}>buy</button>
    </div>
  );
};

export default ProductComponent;