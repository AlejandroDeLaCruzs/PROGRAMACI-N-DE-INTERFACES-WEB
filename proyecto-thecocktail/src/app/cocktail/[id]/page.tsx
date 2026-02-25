"use client";
import { getCocktailById } from "@/lib/api/cocktails";
import { Drink } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const CocktailInfo = () => {
  const [cocktail, setCocktail] = useState<Drink | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  useEffect(() => {
    getCocktailById(id).then((res) => {
      setCocktail(res.drinks.at(0));
      console.log(res.drinks);
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      {cocktail && (
        <div>
          {cocktail?.strDrinkThumb && <img src={cocktail?.strDrinkThumb} />}
          <div>
            <h2>{cocktail.strDrink}</h2>
            <p>Category: {cocktail?.strCategory}</p>
            <p>Glass: {cocktail?.strGlass}</p>
          </div>
        </div>
      ) 
    }
    </>
  );
};

export default CocktailInfo;
