"use client"
import { createContext, useContext, useState } from "react";

type ListaContext = {
  inputBusqueda: string;
  idsFavorito: string[];
  carrito: string[];
  setInputBusqueda: (item : string) => void;
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
  const [inputBusqueda, establecerInputBusqueda] = useState<string>("");

  const addFavorito = (item: string) => {
    setidsFavorito([...idsFavorito, item]);
  };

  const addCarrito = (item: string) => {
    setAddCarrito([...carrito, item]);
  };

  const setInputBusqueda = (item: string) => {
    establecerInputBusqueda(item);
  }
  return (
    <contexto.Provider
      value={{ addCarrito, addFavorito, carrito, idsFavorito, inputBusqueda, setInputBusqueda }}
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