"use client";

import "./globals.css";
import {  useState } from "react";
import { getCocktailByName } from "@/lib/api/cocktails";
import Cocktail from "@/components/cocktai";
import { Drink } from "@/types";
import "./page.css"

export const Home = () => {
  const [inputName, setInputName] = useState<string>("");
  const [cocktails, setCocktails] = useState<Drink[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDrinks = async () => {
    setLoading(true);
    await getCocktailByName(inputName)
      .then((res) => {
        setCocktails(res.drinks);
        console.log("AAA");
        console.log(res.drinks);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  };

  return (
    <div className="maincointener">
      <h1>Cocktail busqueda</h1>
      <input
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetchDrinks();
          {
            loading && <h2>Loading...</h2>;
          }
        }}
      >
        Search
      </button>

      {error && <h3>Error: {error}</h3>}
      <div className="cocktailsConteiner">
        {!loading && cocktails &&
          cocktails.map((e) => <Cocktail key={e.idDrink} cocktail={e} />)}
      </div>
    </div>
  );
};

export default Home;
