import BackButton from "../../components/BackButton";
import CategoryHeader from "../../components/CategoryHeader";
import ProductCard from "../../components/ProductCard";

import { oval } from "../../helper/products";

const Oval = () => {
  return (
    <div>
      <CategoryHeader title="Oval Container Series" />
      <BackButton />
      <div className="bg-white py-10 px-40">
        {oval.map((item) => (
          <ProductCard
            key={item.id}
            imagePath={item.imagePath}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Oval;
