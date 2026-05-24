import { useProvieder } from "@/app/context/contex";
import { api } from "@/lib/api/api";
import { ReactNode, useContext, useEffect, useState } from "react";
import "./style.css";

export const EpisdesFavorites = ({
  setShowModal,
  children,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}) => {
  const { deleteFavorite } = useProvieder();
  const [episodes, setEpisode] = useState<episode[]>([]);

  return (
    <div onClick={() => setShowModal(false)} className="modal">
      {children}
    </div>
  );
};
