"use client";

import { getAllProducts, getProductByName } from "@/lib/api/products";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import { ProductComponent } from "./components/product";
import "./page.css";
import { Header } from "./components/header";
import { MenuCategorias } from "./components/menuCategorioas";

export const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <div className="mainCointener">
      <div className="headerC">
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
