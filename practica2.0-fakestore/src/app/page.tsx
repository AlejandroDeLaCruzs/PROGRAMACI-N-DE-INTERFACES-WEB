"use client";

import { useEffect, useState } from "react";
import "./page.css";
import {
  getProducstOrderByDiscount,
  getProducstOrderByRating,
} from "@/lib/api/products";
import { Product } from "@/types";
import ImagesComponentMainPage from "./components/imagesMainPage";
import BoxMainPage from "./components/boxMainPage";

export const Home = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [productsRaiting, setProducstRating] = useState<Product[]>([]);
  const [productsDiscount, setProducstDisocunt] = useState<Product[]>([]);

  useEffect(() => {
    getProducstOrderByRating().then((res) => setProducstRating(res));
    getProducstOrderByDiscount().then((res) => setProducstDisocunt(res));
  }, []);

  return (
    <div className="Conteiner">
      <div className="imageMainPage">
        <ImagesComponentMainPage />
      </div>
      <div className="contienerDisplay">
        <BoxMainPage product={productsDiscount}>
          <h3>Ofertas Top</h3>
        </BoxMainPage>
        <BoxMainPage product={productsRaiting}>
          <h3>Mejor Valorados</h3>
        </BoxMainPage>
      </div>
    </div>
  );
};

export default Home;
