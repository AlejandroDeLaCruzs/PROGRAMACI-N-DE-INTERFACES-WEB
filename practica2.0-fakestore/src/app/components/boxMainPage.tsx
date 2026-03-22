import { Product } from "@/types";
import "./boxMainPage.css";

type Params = {
  children: React.ReactNode;
  product: Product[];
};

export const BoxMainPage = ({ children, product }: Params) => {
  return (
    <div className="boxConteiner">
        <h3>{children}</h3>
      <div className="contiener">
        {product &&
          product.map((e) => (
            <div>
              <img src={e.images.at(0)} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BoxMainPage;
