import { createContext, useContext, useState } from "react";

type ListaContextType = {
  idsFavoritos: string[];
  addFavorito: (id: string) => void;
  deleteFavorite: (id: string) => void;
};

const ListaContext = createContext<ListaContextType | null>(null);

type Params = {
  children: React.ReactNode;
};

export const ListaProviader = ({ children }: Params) => {
  const [idsFavoritos, setIdsFavorito] = useState<string[]>([]);

  const addFavorito = (id: string) => {
    setIdsFavorito([...idsFavoritos, id]);
  };

  const deleteFavorite = (id: string) => {
    setIdsFavorito(idsFavoritos.filter((e) => e !== id));
  };

  return (
    <ListaContext.Provider
      value={{ idsFavoritos, addFavorito, deleteFavorite }}
    >
      {children}
    </ListaContext.Provider>
  );
};

export const useLista = () => {
  const context = useContext(ListaContext);
  if (!context) {
    throw new Error("Picha estás fuera del proveedor!");
  }
  return context;
};
