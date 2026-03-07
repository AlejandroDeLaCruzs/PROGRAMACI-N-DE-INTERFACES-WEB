"use client";
import { clothtesProducts } from "@/lib/api/product";
import { Clothe } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../../../../app/globals.css";
import { ClotheCard } from "@/components/clotheCard";

export const ClothePage = () => {
  const { id }: { id: string } = useParams();
  const [clothes, setClothes] = useState<Clothe[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    clothtesProducts(id)
      .then((res) => {
        setClothes(res);
        console.log(res);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {loading && !clothes && (
        <h1>Loading...</h1>
      )}

      {clothes && (
        <div className="clothesCointer">
          {clothes.map((clothe) => (
            <ClotheCard key={clothe.id} clothe={clothe} />
          ))}
        </div>
      )}
    </>
  );
};

export default ClothePage;
