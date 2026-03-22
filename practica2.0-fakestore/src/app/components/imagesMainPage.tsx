"use client";
import { getImagesOfRandomProducts } from "@/lib/api/products";
import { useEffect, useState } from "react";
import "./imagesMainPage.css"
import Link from "next/link";
type ProductComponent = {
  id: number;
  images: string[];
};

export const ImagesComponentMainPage = () => {
  const [iamges, setImages] = useState<ProductComponent[] | null>(null);
  const [index, setIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [imageamostrar, setImageaMostrar] = useState<ProductComponent>();

  useEffect(() => {
    if (!iamges) {
      getImagesOfRandomProducts()
        .then((res) => setImages(res))
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }
    if (iamges) {
      if (index == 4) setIndex(0);
      setImageaMostrar(iamges.at(index));
    }
  }, [index]);

  return (
    <div className="imagesPageOutConteiner">
      {!loading && (
        <>
          <button onClick={() => setIndex(index + 1)}>camnbiar de foto</button>
          <Link href={`/product/${iamges?.at(index)?.id}`}>
           <img src={iamges?.at(index)?.images.at(0)} className="imagesMainPage"/>
          </Link>
         
        </>
      )}
    </div>
  );
};

export default ImagesComponentMainPage;
