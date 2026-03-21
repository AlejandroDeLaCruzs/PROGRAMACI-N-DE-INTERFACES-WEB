"use client";

import { getAllProducts, getProductByName } from "@/lib/api/products";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { ProductComponent } from "./components/product";
import "./page.css";
import Link from "next/link";
import { Header } from "./components/header";
import { MenuCategorias } from "./components/menuCategorioas";

export const Home = () => {
  const [produts, setProducst] = useState<Product[]>([]);
  const [loading, setLaoding] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);


  useEffect(() => {
    getAllProducts()
      .then((res) => setProducst(res.products))
      .catch((e) => console.log(e))
      .finally(() => setLaoding(false));
  }, []);

  return (
    <div className="mainCointener">
      <div className="header">
        {showModal && <MenuCategorias setShowModal={setShowModal}/>}
        <button onClick={() => setShowModal(true)}>menu</button>
        <Header setProducst={setProducst} setLaoding={setLaoding} />
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
