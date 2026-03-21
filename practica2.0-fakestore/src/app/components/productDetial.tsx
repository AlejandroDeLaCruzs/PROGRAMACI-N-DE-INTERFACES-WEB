import { useLista } from "@/context/listacontext";
import { Product } from "@/types";
import "./productDetails.css"
type Params = {
  product: Product;
};
export const ProductDetail = ({ product }: Params) => {
  const { addFavorito, addCarrito } = useLista();

  return (
    <div className="detialContiener">
      <h1>{product.title}</h1>
      <img src={product.images.at(0)}/>
      <p>precio: {product.price}</p>
      <button onClick={() => addCarrito(String(product.id))}>Comprar</button>
      <button onClick={() => addFavorito(String(product.id))}>añadir a favoritos</button>
    </div>
  );
};

export default ProductDetail;
