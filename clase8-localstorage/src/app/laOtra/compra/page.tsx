'use client'
import { useLista } from "@/context/listacontext";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Compra = () => {
  const { addToList } = useLista();
  const [prodtucto, setProducto] = useState<string>("");
  const router = useRouter();

  return (
    <div>
      <h2>Añade prodtuctos que quieras comprar</h2>
      <input
        value={prodtucto}
        onChange={(e) => setProducto(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            addToList(prodtucto)
            setProducto("")
          }
        }}
      />
      <button onClick={() => router.push("/laOtra")}> para ir para atras</button>
    </div>
  );
};

export default Compra;
