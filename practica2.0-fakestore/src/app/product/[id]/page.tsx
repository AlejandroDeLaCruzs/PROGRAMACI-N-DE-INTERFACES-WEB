"use client";

import ProductDetail from "@/app/components/productDetial";
import { getProductById } from "@/lib/api/products";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProductById(String(id))
      .then((res) => setProduct(res))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  });

  return (
    <div>
        {loading && <h1>cargando</h1>}
        {!loading && product && <ProductDetail product={product}/>}
    </div>
   
  );
};

export default ProductPage;
