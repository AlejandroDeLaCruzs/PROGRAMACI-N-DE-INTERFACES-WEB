"use client"

import { useState } from "react";
import ProductComponent from "./Components/product";
import { Carrito } from "./Components/carrito";

export type Producto = {
  id: string,
  name: string
}
export const Home = () => {
  const lista = ["ordendor", "movil", "televisor", "auriculares"];
  const [myCompra, setMyCompra] = useState<Producto[]>([]); 
  const [open, setOpen] = useState(false);
  const [showCarrito, setShowCarrito] = useState(false);

  console.log(myCompra);
  
  
  return (
    <div className="main">
      <button onClick={()=> setShowCarrito(true)}>mostrar compra</button>
      {showCarrito && <Carrito productos={myCompra} setLista={setMyCompra} setMostrarCarrito={setShowCarrito} >Carrito de compra</Carrito>}
      <h1>Productos:</h1>
      {lista.map((e) => <ProductComponent key={e} name={e} lista={myCompra} setLista={setMyCompra}/>)}
      <div>
        <h2>Productos comprados:</h2>
        {myCompra.map((e) => (
          <div key={e.id}>
            <h3 onClick={() => {
              setMyCompra(myCompra.filter((x) => x.id !== e.id))
            }} className="elementoLista">{e.name}</h3>
            </div>
        ))}
      </div>
    </div>
  );
};


export default Home;
