"use client";

import { useLista } from "@/context/listacontext";
import { getProductById } from "@/lib/api/products";
import { Product } from "@/types";
import { useEffect, useState } from "react";

export const Carrito = () => {
  const [products, setProducst] = useState<Product[]>([]);
  const [loading, setLaoding] = useState<boolean>(false);
  const { carrito } = useLista();

  const fetchCarritoProducts = async () => {
    const results = await Promise.all(
      carrito.map((p) => getProductById(p)),
    );
    setProducst(results);
  };

  useEffect(() => {
     fetchCarritoProducts();
    setLaoding(true);
  }, []);

  return <div> {loading && products.map((e) => <h1>{e.title}</h1>)}</div>;
};

export default Carrito;
