import { useLista } from "@/context/listacontext";
import { Product } from "@/types";

type Params = {
  product: Product;
};
export const ProductDetail = ({ product }: Params) => {
  const { addFavorito, addCarrito } = useLista();

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images.at(0)}/>
      <p>precio: {product.price}</p>
      <button onClick={() => addCarrito(String(product.id))}>Comprar</button>
      <button onClick={() => addFavorito(String(product.id))}>añadir a favoritos</button>
    </div>
  );
};

export default ProductDetail;
