"use client";

import { getAllProducts, getProductByName } from "@/lib/api/products";
import { Product } from "@/types";
import { useState } from "react";
import "./header.css"
type Params = {
  setProducst: React.Dispatch<React.SetStateAction<Product[]>>;
  setLaoding: React.Dispatch<React.SetStateAction<boolean>>;
   
};

export const Header = ({ setProducst, setLaoding}: Params) => {
  const [input, setInput] = useState<string>("");

  const fetchProducts = async (name: string) => {
    if (name) getProductByName(name).then((res) => setProducst(res));
    if(name== "") getAllProducts().then((res) => setProducst(res.products));
    setLaoding(false);
  };

  return (
    <div className="buscador">
      <h1>fake store api</h1>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setLaoding(true)
            fetchProducts(input);
            setInput("");
          }
        }}
      />
    </div>
  );
};
