"use client";

import { Product } from "@/types";
import { useState } from "react";
import "./header.css";
import { useRouter } from "next/navigation";
import { MenuCategorias } from "./menuCategorioas";

type Params = {
  setProducst: React.Dispatch<React.SetStateAction<Product[]>>;
  setLaoding: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header = () => {
  const [input, setInput] = useState<string>("");
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div className="mainCointener">
      <div className="header">
        <div className="infoApp">
          <img
            src={"/logo.2e155839.png"}
            className="logo"
            alt="Logo"
            onClick={() => {
              (router.push("/"), setInput(""));
            }}
          />
          <h1>Fake Store API</h1>
        </div>

        <div className="input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (input == "") router.replace("/");
                else router.replace(`/search/${input}`);
              }
            }}
          />
        </div>
        <div className="carrito">
          <img
            src={"/5465865.png"}
            alt="carrito"
            onClick={() => router.push("/carrito")}
          />
        </div>
      </div>

      <div className="menus">
        {showModal && <MenuCategorias setShowModal={setShowModal} />}
        <div className="menuCategoria">
          <img
            src={"/menu.png"}
            alt="Logo"
            className="menu"
            onClick={() => setShowModal(true)}
          />
          <h4>Todo</h4>
        </div>
        <div>
          <p>Haul</p>
        </div>
        <div>
          <p>Supermercado</p>
        </div>
        <div>
          <p>Últimas novedades</p>
        </div>
        <div>
          <p>Lo más vendido</p>
        </div>
      </div>
    </div>
  );
};
