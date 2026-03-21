import { getCategoryList } from "@/lib/api/products";
import { useEffect, useState } from "react";
import "./menuCategorias.css";

type Params = {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuCategorias = ({ setShowModal }: Params) => {
  const [categorias, setCategorias] = useState<string[]>([]);

  useEffect(() => {
    getCategoryList().then((res) => setCategorias(res));
  }, []);

  return (
    <div className="outContienr">
      <div className="categoriasCointener">
        {categorias && categorias.map((e) => <h2>{e}</h2>)}
      </div>
      <button onClick={() => setShowModal(false)} className="cerrarMenu">X</button>
    </div>
  );
};
