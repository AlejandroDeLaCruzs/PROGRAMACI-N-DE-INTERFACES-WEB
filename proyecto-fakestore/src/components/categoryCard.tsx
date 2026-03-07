import { Category } from "@/types";
import Link from "next/link";

export const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div>
      {category.image && (
        <Link href={`/${category.name}/Page/1`}>
          <div className="cardCategory">
            <h1>{category.name}</h1>
            <img src={category.image} alt={category.name} />
          </div>
        </Link>
      )}
    </div>
  );
};



