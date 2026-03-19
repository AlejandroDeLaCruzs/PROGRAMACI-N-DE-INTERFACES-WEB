import { Producto } from "../page";

type Params = {
  children?: React.ReactNode;
  productos: Producto[];
  setLista: React.Dispatch<React.SetStateAction<Producto[]>>;
  setMostrarCarrito: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Carrito = ({ children, productos, setLista, setMostrarCarrito }: Params) => {
  return (
    <div>
        <button onClick={() => setMostrarCarrito(false)}>Cerrar</button>
      <h1>{children}</h1>
      {productos && productos.map((e) => 
      <button onClick={() => setLista(productos.filter((x)=> x.id !== e.id ))}>{e.name}</button>)}
    </div>
  );
};
