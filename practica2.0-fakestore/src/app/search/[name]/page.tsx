"use client";

import { getAllProducts, getProductByName } from "@/lib/api/products";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { ProductComponent } from "./../../components/product";
import "./search.css";
import { MenuCategorias } from "./../../components/menuCategorioas";
import { useParams } from "next/navigation";

export const SearchPage = () => {
  const [produts, setProducst] = useState<Product[]>([]);
  const [loading, setLaoding] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { name } = useParams();

  useEffect(() => {
    getProductByName(String(name))
      .then((res) => setProducst(res))
      .catch((e) => console.log(e))
      .finally(() => setLaoding(false));
  }, []);

  return (
    <div className="mainCointener">
      <div className="headerC">
       
      </div>
      <div className="productosLista">
        {!loading &&
          produts &&
          produts.map((e) => <ProductComponent key={e.id} product={e} />)}
      </div>
    </div>
  );
};

export default SearchPage;
