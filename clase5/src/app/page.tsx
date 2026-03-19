"use client";

import { useState } from "react";
import ProductComponent from "./Components/product";
import { Carrito } from "./Components/carrito";

export type Producto = {
  id: string;
  name: string;
};
export const Home = () => {
  const lista = ["ordendor", "movil", "televisor", "auriculares"];
  const [myCompra, setMyCompra] = useState<Producto[]>([]);
  const [open, setOpen] = useState(false);
  const [showCarrito, setShowCarrito] = useState(false);

  console.log(myCompra);

  return (
    <div className="main">
      {!showCarrito && (
        <img
          onClick={() => setShowCarrito(true)}
          src={"5465865.png"}
          className="carritoImg"
        />
      )}
      {showCarrito && (
        <Carrito
          productos={myCompra}
          setLista={setMyCompra}
          setMostrarCarrito={setShowCarrito}
        >
          Carrito de compra
        </Carrito>
      )}
      <h1>Productos:</h1>
      {lista.map((e) => (
        <ProductComponent
          key={e}
          name={e}
          lista={myCompra}
          setLista={setMyCompra}
        />
      ))}
    </div>
  );
};

export default Home;
