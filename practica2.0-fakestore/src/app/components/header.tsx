"use client";

import { getAllProducts, getProductByName } from "@/lib/api/products";
import { Product } from "@/types";
import { useState } from "react";
import "./header.css";
import Link from "next/link";
type Params = {
  setProducst: React.Dispatch<React.SetStateAction<Product[]>>;
  setLaoding: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = ({ setProducst, setLaoding }: Params) => {
  const [input, setInput] = useState<string>("");

  const fetchProducts = async (name: string) => {
    if (name) getProductByName(name).then((res) => setProducst(res));
    if (name == "") getAllProducts().then((res) => setProducst(res.products));
    setLaoding(false);
  };

  return (
    <div className="header">
      <div className="infoApp">
        <img src={"logo.2e155839.png"} className="logo" />
        <h1>Fake Store API</h1>
      </div>
      <div className="input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setLaoding(true);
              fetchProducts(input);
              setInput("");
            }
          }}
        />
      </div>
      <div className="carrito">
        <Link href={"/carrito"}>
         <img src={"5465865.png"}/>
        </Link>
      </div>
    </div>
  );
};
