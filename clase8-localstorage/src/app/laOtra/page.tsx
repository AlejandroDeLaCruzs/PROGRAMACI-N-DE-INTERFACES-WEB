"use client"
import { useLista } from "@/context/listacontext";
import { useRouter } from "next/navigation";

const LaotraPagina = () => {
  const router = useRouter();
  const {lista, deleteFromList} = useLista()
  return (
    <div>
      <h1>esto es la otra pagina</h1>
      <button onClick={() => router.push("/laOtra/compra")}>Ir a comprar</button>
      {lista && lista.map((e) => <button onClick={() =>  deleteFromList(e)}>{e}</button>)}
    </div>
  );
};

export default LaotraPagina;
