"use client"
import { Drink } from "@/types/cocktail";
import Link from "next/link";

export const Cocktail = ({ cocktail }: { cocktail: Drink }) => {
  return (
    <Link href={`/cocktail/${cocktail.idDrink}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="CharacterCointener">
        <img src={cocktail.strDrinkThumb} />
        <div className="dataCointer">
          <p><strong>Name:</strong> {cocktail.strDrink}</p>
          <p><strong>strGlass:</strong> {cocktail.strGlass}</p>
          <p><strong>Status:</strong> {cocktail.strAlcoholic}</p>
        </div>
      </div>
    </Link>
  );
};



export default Cocktail;