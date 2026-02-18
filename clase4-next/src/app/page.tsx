
"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <h1>hola</h1>
      <Link href="/prueba">pincha aqui para la prueba</Link>
      <button onClick={() => router.push('/prueba')}>pulsa</button>
    </div>
  );
}
