"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useReducer } from "react";

const Prueba = () => {
  const router = useRouter();
  return (
    <div>
      <h1>la otra pagina</h1>
      <button onClick={() => router.back()}>para ir al home</button>
    </div>
  );
};

export default Prueba;
