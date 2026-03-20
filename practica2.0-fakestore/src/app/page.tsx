"use client";

import { getAllProducts } from "@/lib/api/products";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { ProductComponent } from "./components/product";
import "./page.css";
import Link from "next/link";

export const Home = () => {
  const [produts, setProducst] = useState<Product[] | null>(null);
  const [loading, setLaoding] = useState<boolean>(true);

  useEffect(() => {
    getAllProducts()
      .then((res) => setProducst(res.products))
      .catch((e) => console.log(e))
      .finally(() => setLaoding(false));
  }, []);

  return (
    <div className="mainCointener">
      <div>
        <h1>fake store api</h1>
        <Link href={"/carrito"}>
          <p>carrito</p>
        </Link>
      </div>
      <div className="productosLista">
        {!loading &&
          produts &&
          produts.map((e) => <ProductComponent key={e.id} product={e} />)}
      </div>
    </div>
  );
};

export default Home;
