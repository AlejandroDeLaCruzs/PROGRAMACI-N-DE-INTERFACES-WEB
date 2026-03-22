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
      </div>
    </div>
  );
};

export default ProductDetail;
