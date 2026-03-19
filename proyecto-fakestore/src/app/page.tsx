"use client";
import { useEffect, useState } from "react";
import { getCategories } from "@/lib/api/categories";
import { Category } from "@/types";
import { CategoryCard } from "@/components/categoryCard";

export const Home = () => {
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getCategories()
      .then((res) => setCategories(res))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="category">
       {categories?.map((e) => <CategoryCard key={e.id} category={e} />)}
    </div>
   
  ) : (
    <h1>Loading ...</h1>
  );
};

export default Home;