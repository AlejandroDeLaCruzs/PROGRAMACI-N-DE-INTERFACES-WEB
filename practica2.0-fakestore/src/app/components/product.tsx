"use client";
import { Product } from "@/types";
import Link from "next/link";
import "./product.css";

import { useLista } from "@/context/listacontext";

type Params = {
  product: Product;
};
export const ProductComponent = ({ product }: Params) => {
    const {addCarrito, carrito} = useLista();

  return (
    <div className="outputCointer">
      <Link href={`product/${product.id}`}>
        <div className="productCointer">
          <h3>{product.title}</h3>
          <img src={product.images.at(0)} />
        </div>
      </Link>
      <button onClick={() => addCarrito(String(product.id))} className="botonCompra">Comprar</button>
    </div>

  );
};
export default ProductComponent;



