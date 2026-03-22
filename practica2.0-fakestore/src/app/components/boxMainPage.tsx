import { Product } from "@/types";
import "./boxMainPage.css";
import { useRouter } from "next/navigation";

type Params = {
  children: React.ReactNode;
  product: Product[];
};

export const BoxMainPage = ({ children, product }: Params) => {
  const router = useRouter();
  return (
    <div className="boxConteiner">
        <h3>{children}</h3>
      <div className="contiener">
        {product &&
          product.map((e) => (
            <div>
              <img src={e.images.at(0)} onClick={() => router.push(`/product/${e.id}`)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BoxMainPage;
