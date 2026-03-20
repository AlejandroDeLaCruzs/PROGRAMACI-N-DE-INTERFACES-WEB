"use client"
import { createContext, useContext, useState } from "react";

type ListaContext = {
  idsFavorito: string[];
  carrito: string[];
  addFavorito: (item: string) => void;
  addCarrito: (item: string) => void;
};

const contexto = createContext<ListaContext | null>(null);

type Params = {
  children: React.ReactNode;
};

export const ListaProviader = ({ children }: Params) => {
  const [idsFavorito, setidsFavorito] = useState<string[]>([]);
  const [carrito, setAddCarrito] = useState<string[]>([]);

  const addFavorito = (item: string) => {
    setidsFavorito([...idsFavorito, item]);
  };

  const addCarrito = (item: string) => {
    setAddCarrito([...carrito, item]);
  };

  return (
    <contexto.Provider
      value={{ addCarrito, addFavorito, carrito, idsFavorito }}
    >
      {children}
    </contexto.Provider>
  );
};


export const useLista = () => {
    const context = useContext(contexto);
    if(!context){
        throw new Error("Picha estás fuera del proveedor!")
    }
    return context;
}