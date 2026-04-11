import { useLista } from "@/context/listacontext";
import { Product } from "@/types";
import "./productDetails.css";
import { useState } from "react";

type Params = {
  product: Product;
};

export const ProductDetail = ({ product }: Params) => {
  const { addFavorito, addCarrito } = useLista();
  const [showModalCantitadad, setshowModalCantitadad] = useState<boolean>();
  const [cantidadMarcado, setcantidadMarcado] = useState<number>(1);
  const cantidad = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="detialContiener">
      <div className="imgProduct">
        <img src={product.images.at(0)} />
      </div>

      <div className="dataConteinerProduct">
        <div className="upperdataConteinerProduct">
          <h1>{product.title}</h1>
          <p>Raiting:{product.rating}</p>
          <div className="blackline" />
        </div>
        <div className="lowerdataConteinerProduct">
          <div className="price">
            {product.discountPercentage && (
              <p className="discountNumber">-{product.discountPercentage}%</p>
            )}
            <p>{product.price}$</p>
          </div>

          <h3>Acerca del producto</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="contienerAñadirCarrito">
        <h4>Compra única</h4>
        <h3>{product.price}</h3>
        <p>No se aceptan devoluciones</p>
        <p>{product.shippingInformation}</p>
        {product.stock > 0 ? (
          <h3 className="stockOK">En stock</h3>
        ) : (
          <h3 className="stockKO">Out of Stock</h3>
        )}
        <button
          className="cantidad"
          onClick={() => setshowModalCantitadad(true)}
        >
          Cantidad: {cantidadMarcado}
        </button>
        <div className="seleccionarCantidad">
          {showModalCantitadad &&
            cantidad.map((e) => (
              <button
                onClick={() => {
                  setshowModalCantitadad(false);
                  setcantidadMarcado(e);
                }}
              >
                {e}
              </button>
            ))}
        </div>
        <button
          className="botonañadirCesta"
          onClick={() => addCarrito(String(product.id))}
        >
          Añadir a la cesta
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
