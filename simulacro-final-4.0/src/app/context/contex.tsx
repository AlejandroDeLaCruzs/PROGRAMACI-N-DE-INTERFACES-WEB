'use client'
import { createContext, useContext, useState } from "react";

type Lista = {
  ids: number[];
  addFavotite: (id: number) => void;
  deleteFavorite: (id: number) => void;
};

const FavoriteContext = createContext<Lista | null>(null);

export const ProviederContext = ({ children }: { children: React.ReactNode }) => {
  const [ids, setIds] = useState<number[]>([]);

  const addFavotite = (id: number) => {
    setIds([...ids, id]);
  };

  const deleteFavorite = (id: number) => {
    setIds(ids?.filter((a) => a != id));
  };

  return (
    <FavoriteContext.Provider value={{ ids, addFavotite, deleteFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useProvieder = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("Picha estás fuera del proveedor!");
  }
  return context;
};
