"use client"

import { useRouter } from "next/navigation";

export const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>hola</h1>
      <button onClick={() => router.push("/laOtra")}> ir a la otra</button>
    </div>
  );
};

export default Home;
