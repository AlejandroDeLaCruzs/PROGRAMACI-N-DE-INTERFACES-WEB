import { Producto } from "../page";

type Params = {
  children?: React.ReactNode;
  productos: Producto[];
  setLista: React.Dispatch<React.SetStateAction<Producto[]>>;
  setMostrarCarrito: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Carrito = ({
  children,
  productos,
  setLista,
  setMostrarCarrito,
}: Params) => {
  return (
    <div className="carritoCointener">
      <div className="title">
        <h1>{children}</h1>
        <button onClick={() => setMostrarCarrito(false)}>Cerrar</button>
      </div>
      <div className="innerContiner">
        {productos &&
          productos.map((e) => (
            <div key={e.id}>
              <p className="elementoLista"
                onClick={() => setLista(productos.filter((x) => x.id !== e.id))}
              >{e.name}</p>
              
            </div>
          ))}
      </div>
    </div>
  );
};
